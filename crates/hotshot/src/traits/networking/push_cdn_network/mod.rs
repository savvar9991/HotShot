/// The run definition for the Push CDN
pub mod definition;
/// The metrics for the Push CDN
pub mod metrics;

// Copyright (c) 2021-2024 Espresso Systems (espressosys.com)
// This file is part of the HotShot repository.

// You should have received a copy of the MIT License
// along with the HotShot repository. If not, see <https://mit-license.org/>.

#[cfg(feature = "hotshot-testing")]
use std::sync::atomic::{AtomicBool, Ordering};
use std::sync::Arc;
#[cfg(feature = "hotshot-testing")]
use std::{path::Path, time::Duration};

use async_trait::async_trait;
use cdn_broker::reexports::def::hook::NoMessageHook;
#[cfg(feature = "hotshot-testing")]
use cdn_broker::{Broker, Config as BrokerConfig};
pub use cdn_client::reexports::crypto::signature::KeyPair;
use cdn_client::{
    reexports::message::{Broadcast, Direct, Message as PushCdnMessage},
    Client, Config as ClientConfig,
};
#[cfg(feature = "hotshot-testing")]
use cdn_marshal::{Config as MarshalConfig, Marshal};
use definition::{
    message_hook::HotShotMessageHook, signature_key::WrappedSignatureKey, ClientDef, TestingDef,
    Topic,
};
#[cfg(feature = "hotshot-testing")]
use hotshot_types::traits::network::{
    AsyncGenerator, NetworkReliability, TestableNetworkingImplementation,
};
use hotshot_types::{
    boxed_sync,
    data::ViewNumber,
    traits::{
        network::{BroadcastDelay, ConnectedNetwork, Topic as HotShotTopic},
        node_implementation::NodeType,
        signature_key::SignatureKey,
    },
    BoxSyncFuture,
};
use metrics::CdnMetricsValue;
#[cfg(feature = "hotshot-testing")]
use rand::{rngs::StdRng, RngCore, SeedableRng};
use tokio::{spawn, sync::mpsc::error::TrySendError, time::sleep};
use tracing::error;

use super::NetworkError;

/// A communication channel to the Push CDN, which is a collection of brokers and a marshal
/// that helps organize them all.
#[derive(Clone)]
/// Is generic over both the type of key and the network protocol.
pub struct PushCdnNetwork<K: SignatureKey + 'static> {
    /// The underlying client
    client: Client<ClientDef<K>>,
    /// The CDN-specific metrics
    metrics: Arc<CdnMetricsValue>,
    /// Whether or not the underlying network is supposed to be paused
    #[cfg(feature = "hotshot-testing")]
    is_paused: Arc<AtomicBool>,
    // The receiver channel for
    // request_receiver_channel: TakeReceiver,
}

impl<K: SignatureKey + 'static> PushCdnNetwork<K> {
    /// Create a new `PushCdnNetwork` (really a client) from a marshal endpoint, a list of initial
    /// topics we are interested in, and our wrapped keypair that we use to authenticate with the
    /// marshal.
    ///
    /// # Errors
    /// If we fail to build the config
    pub fn new(
        marshal_endpoint: String,
        topics: Vec<Topic>,
        keypair: KeyPair<WrappedSignatureKey<K>>,
        metrics: CdnMetricsValue,
    ) -> anyhow::Result<Self> {
        // Build config
        let config = ClientConfig {
            endpoint: marshal_endpoint,
            subscribed_topics: topics.into_iter().map(|t| t as u8).collect(),
            keypair,
            use_local_authority: true,
        };

        // Create the client from the config
        let client = Client::new(config);

        Ok(Self {
            client,
            metrics: Arc::from(metrics),
            // Start unpaused
            #[cfg(feature = "hotshot-testing")]
            is_paused: Arc::from(AtomicBool::new(false)),
        })
    }

    /// Broadcast a message to members of the particular topic. Does not retry.
    ///
    /// # Errors
    /// - If we fail to serialize the message
    /// - If we fail to send the broadcast message.
    async fn broadcast_message(&self, message: Vec<u8>, topic: Topic) -> Result<(), NetworkError> {
        // If we're paused, don't send the message
        #[cfg(feature = "hotshot-testing")]
        if self.is_paused.load(Ordering::Relaxed) {
            return Ok(());
        }

        // Send the message
        if let Err(err) = self
            .client
            .send_broadcast_message(vec![topic as u8], message)
            .await
        {
            return Err(NetworkError::MessageReceiveError(format!(
                "failed to send broadcast message: {err}"
            )));
        };

        Ok(())
    }
}

#[cfg(feature = "hotshot-testing")]
impl<TYPES: NodeType> TestableNetworkingImplementation<TYPES>
    for PushCdnNetwork<TYPES::SignatureKey>
{
    /// Generate n Push CDN clients, a marshal, and two brokers (that run locally).
    /// Uses a `SQLite` database instead of Redis.
    #[allow(clippy::too_many_lines)]
    fn generator(
        _expected_node_count: usize,
        _num_bootstrap: usize,
        _network_id: usize,
        da_committee_size: usize,
        _reliability_config: Option<Box<dyn NetworkReliability>>,
        _secondary_network_delay: Duration,
    ) -> AsyncGenerator<Arc<Self>> {
        // The configuration we are using for testing is 2 brokers & 1 marshal

        // A keypair shared between brokers
        let (broker_public_key, broker_private_key) =
            TYPES::SignatureKey::generated_from_seed_indexed([0u8; 32], 1337);

        // Get the OS temporary directory
        let temp_dir = std::env::temp_dir();

        // Create an SQLite file inside of the temporary directory
        let discovery_endpoint = temp_dir
            .join(Path::new(&format!(
                "test-{}.sqlite",
                StdRng::from_entropy().next_u64()
            )))
            .to_string_lossy()
            .into_owned();

        // Pick some unused public ports
        let public_address_1 = format!(
            "127.0.0.1:{}",
            portpicker::pick_unused_port().expect("could not find an open port")
        );
        let public_address_2 = format!(
            "127.0.0.1:{}",
            portpicker::pick_unused_port().expect("could not find an open port")
        );

        // 2 brokers
        for i in 0..2 {
            // Get the ports to bind to
            let private_port = portpicker::pick_unused_port().expect("could not find an open port");

            // Extrapolate addresses
            let private_address = format!("127.0.0.1:{private_port}");
            let (public_address, other_public_address) = if i == 0 {
                (public_address_1.clone(), public_address_2.clone())
            } else {
                (public_address_2.clone(), public_address_1.clone())
            };

            // Calculate the broker identifiers
            let broker_identifier = format!("{public_address}/{public_address}");
            let other_broker_identifier = format!("{other_public_address}/{other_public_address}");

            // Configure the broker
            let config: BrokerConfig<TestingDef<TYPES::SignatureKey>> = BrokerConfig {
                public_advertise_endpoint: public_address.clone(),
                public_bind_endpoint: public_address,
                private_advertise_endpoint: private_address.clone(),
                private_bind_endpoint: private_address,
                metrics_bind_endpoint: None,
                keypair: KeyPair {
                    public_key: WrappedSignatureKey(broker_public_key.clone()),
                    private_key: broker_private_key.clone(),
                },
                discovery_endpoint: discovery_endpoint.clone(),

                user_message_hook: HotShotMessageHook::default(),
                broker_message_hook: NoMessageHook,

                ca_cert_path: None,
                ca_key_path: None,
                // 1GB
                global_memory_pool_size: Some(1024 * 1024 * 1024),
            };

            // Create and spawn the broker
            spawn(async move {
                let broker: Broker<TestingDef<TYPES::SignatureKey>> =
                    Broker::new(config).await.expect("broker failed to start");

                // If we are the first broker by identifier, we need to sleep a bit
                // for discovery to happen first
                if other_broker_identifier > broker_identifier {
                    sleep(Duration::from_secs(2)).await;
                }

                // Error if we stopped unexpectedly
                if let Err(err) = broker.start().await {
                    error!("broker stopped: {err}");
                }
            });
        }

        // Get the port to use for the marshal
        let marshal_port = portpicker::pick_unused_port().expect("could not find an open port");

        // Configure the marshal
        let marshal_endpoint = format!("127.0.0.1:{marshal_port}");
        let marshal_config = MarshalConfig {
            bind_endpoint: marshal_endpoint.clone(),
            discovery_endpoint,
            metrics_bind_endpoint: None,
            ca_cert_path: None,
            ca_key_path: None,
            // 1GB
            global_memory_pool_size: Some(1024 * 1024 * 1024),
        };

        // Spawn the marshal
        spawn(async move {
            let marshal: Marshal<TestingDef<TYPES::SignatureKey>> = Marshal::new(marshal_config)
                .await
                .expect("failed to spawn marshal");

            // Error if we stopped unexpectedly
            if let Err(err) = marshal.start().await {
                error!("marshal stopped: {err}");
            }
        });

        // This function is called for each client we spawn
        Box::pin({
            move |node_id| {
                // Clone this so we can pin the future
                let marshal_endpoint = marshal_endpoint.clone();

                Box::pin(async move {
                    // Derive our public and priate keys from our index
                    let private_key =
                        TYPES::SignatureKey::generated_from_seed_indexed([0u8; 32], node_id).1;
                    let public_key = TYPES::SignatureKey::from_private(&private_key);

                    // Calculate if we're DA or not
                    let topics = if node_id < da_committee_size as u64 {
                        vec![Topic::Da as u8, Topic::Global as u8]
                    } else {
                        vec![Topic::Global as u8]
                    };

                    // Configure our client
                    let client_config: ClientConfig<ClientDef<TYPES::SignatureKey>> =
                        ClientConfig {
                            keypair: KeyPair {
                                public_key: WrappedSignatureKey(public_key),
                                private_key,
                            },
                            subscribed_topics: topics,
                            endpoint: marshal_endpoint,
                            use_local_authority: true,
                        };

                    // Create our client
                    Arc::new(PushCdnNetwork {
                        client: Client::new(client_config),
                        metrics: Arc::new(CdnMetricsValue::default()),
                        #[cfg(feature = "hotshot-testing")]
                        is_paused: Arc::from(AtomicBool::new(false)),
                    })
                })
            }
        })
    }

    /// The PushCDN does not support in-flight message counts
    fn in_flight_message_count(&self) -> Option<usize> {
        None
    }
}

#[async_trait]
impl<K: SignatureKey + 'static> ConnectedNetwork<K> for PushCdnNetwork<K> {
    /// Pause sending and receiving on the PushCDN network.
    fn pause(&self) {
        #[cfg(feature = "hotshot-testing")]
        self.is_paused.store(true, Ordering::Relaxed);
    }

    /// Resume sending and receiving on the PushCDN network.
    fn resume(&self) {
        #[cfg(feature = "hotshot-testing")]
        self.is_paused.store(false, Ordering::Relaxed);
    }

    /// Wait for the client to initialize the connection
    async fn wait_for_ready(&self) {
        self.client.ensure_initialized().await;
    }

    /// TODO: shut down the networks. Unneeded for testing.
    fn shut_down<'a, 'b>(&'a self) -> BoxSyncFuture<'b, ()>
    where
        'a: 'b,
        Self: 'b,
    {
        boxed_sync(async move {})
    }

    /// Broadcast a message to all members of the quorum.
    ///
    /// # Errors
    /// - If we fail to serialize the message
    /// - If we fail to send the broadcast message.
    async fn broadcast_message(
        &self,
        message: Vec<u8>,
        topic: HotShotTopic,
        _broadcast_delay: BroadcastDelay,
    ) -> Result<(), NetworkError> {
        // If we're paused, don't send the message
        #[cfg(feature = "hotshot-testing")]
        if self.is_paused.load(Ordering::Relaxed) {
            return Ok(());
        }
        self.broadcast_message(message, topic.into())
            .await
            .inspect_err(|_e| {
                self.metrics.num_failed_messages.add(1);
            })
    }

    /// Broadcast a message to all members of the DA committee.
    ///
    /// # Errors
    /// - If we fail to serialize the message
    /// - If we fail to send the broadcast message.
    async fn da_broadcast_message(
        &self,
        message: Vec<u8>,
        _recipients: Vec<K>,
        _broadcast_delay: BroadcastDelay,
    ) -> Result<(), NetworkError> {
        // If we're paused, don't send the message
        #[cfg(feature = "hotshot-testing")]
        if self.is_paused.load(Ordering::Relaxed) {
            return Ok(());
        }
        self.broadcast_message(message, Topic::Da)
            .await
            .inspect_err(|_e| {
                self.metrics.num_failed_messages.add(1);
            })
    }

    /// Send a direct message to a node with a particular key. Does not retry.
    ///
    /// - If we fail to serialize the message
    /// - If we fail to send the direct message
    async fn direct_message(&self, message: Vec<u8>, recipient: K) -> Result<(), NetworkError> {
        // If we're paused, don't send the message
        #[cfg(feature = "hotshot-testing")]
        if self.is_paused.load(Ordering::Relaxed) {
            return Ok(());
        }

        // Send the message
        if let Err(e) = self
            .client
            .send_direct_message(&WrappedSignatureKey(recipient), message)
            .await
        {
            self.metrics.num_failed_messages.add(1);
            return Err(NetworkError::MessageSendError(format!(
                "failed to send direct message: {e}"
            )));
        };

        Ok(())
    }

    /// Receive a message. Is agnostic over `transmit_type`, which has an issue
    /// to be removed anyway.
    ///
    /// # Errors
    /// - If we fail to receive messages. Will trigger a retry automatically.
    async fn recv_message(&self) -> Result<Vec<u8>, NetworkError> {
        // Receive a message
        let message = self.client.receive_message().await;

        // If we're paused, receive but don't process messages
        #[cfg(feature = "hotshot-testing")]
        if self.is_paused.load(Ordering::Relaxed) {
            sleep(Duration::from_millis(100)).await;
            return Ok(vec![]);
        }

        // If it was an error, wait a bit and retry
        let message = match message {
            Ok(message) => message,
            Err(error) => {
                return Err(NetworkError::MessageReceiveError(format!(
                    "failed to receive message: {error}"
                )));
            }
        };

        // Extract the underlying message
        let (PushCdnMessage::Broadcast(Broadcast { message, topics: _ })
        | PushCdnMessage::Direct(Direct {
            message,
            recipient: _,
        })) = message
        else {
            return Ok(vec![]);
        };

        Ok(message)
    }

    /// Do nothing here, as we don't need to look up nodes.
    fn queue_node_lookup(
        &self,
        _view_number: ViewNumber,
        _pk: K,
    ) -> Result<(), TrySendError<Option<(ViewNumber, K)>>> {
        Ok(())
    }
}