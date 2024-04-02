use hotshot::traits::{
    election::static_committee::GeneralStaticCommittee, implementations::PushCdnNetwork,
};

use crate::{
    block_types::{TestBlockHeader, TestBlockPayload, TestTransaction},
    state_types::{TestInstanceState, TestValidatedState},
    storage_types::TestStorage,
};

use hotshot::traits::{
    election::static_committee::{StaticCommittee, StaticElectionConfig},
    implementations::{CombinedNetworks, Libp2pNetwork, MemoryNetwork, WebServerNetwork},
    NodeImplementation,
};

use hotshot_types::constants::WebServerVersion;

use hotshot_types::{
    data::ViewNumber, message::Message, signature_key::BLSPubKey,
    traits::node_implementation::NodeType,
};
use serde::{Deserialize, Serialize};

#[derive(
    Copy,
    Clone,
    Debug,
    Default,
    Hash,
    PartialEq,
    Eq,
    PartialOrd,
    Ord,
    serde::Serialize,
    serde::Deserialize,
)]
/// filler struct to implement node type and allow us
/// to select our traits
pub struct TestTypes;
impl NodeType for TestTypes {
    type Time = ViewNumber;
    type BlockHeader = TestBlockHeader;
    type BlockPayload = TestBlockPayload;
    type SignatureKey = BLSPubKey;
    type Transaction = TestTransaction;
    type ElectionConfigType = StaticElectionConfig;
    type ValidatedState = TestValidatedState;
    type InstanceState = TestInstanceState;
    type Membership = GeneralStaticCommittee<TestTypes, Self::SignatureKey>;
}

/// The Push CDN implementation
#[derive(Clone, Debug, Deserialize, Serialize, Hash, Eq, PartialEq)]
pub struct PushCdnImpl;

/// Memory network implementation
#[derive(Clone, Debug, Deserialize, Serialize, Hash, Eq, PartialEq)]
pub struct MemoryImpl;

/// Libp2p network implementation
#[derive(Clone, Debug, Deserialize, Serialize, Hash, Eq, PartialEq)]
pub struct Libp2pImpl;

/// Web server network implementation
#[derive(Clone, Debug, Deserialize, Serialize, Hash, Eq, PartialEq)]
pub struct WebImpl;

/// Combined Network implementation (libp2p + web sever)
#[derive(Clone, Debug, Deserialize, Serialize, Hash, Eq, PartialEq)]
pub struct CombinedImpl;

/// static committee type alias
pub type StaticMembership = StaticCommittee<TestTypes>;

impl<TYPES: NodeType> NodeImplementation<TYPES> for PushCdnImpl {
    type QuorumNetwork = PushCdnNetwork<TYPES>;
    type CommitteeNetwork = PushCdnNetwork<TYPES>;
    type Storage = TestStorage<TYPES>;
}

impl<TYPES: NodeType> NodeImplementation<TYPES> for MemoryImpl {
    type QuorumNetwork = MemoryNetwork<Message<TYPES>, TYPES::SignatureKey>;
    type CommitteeNetwork = MemoryNetwork<Message<TYPES>, TYPES::SignatureKey>;
    type Storage = TestStorage<TYPES>;
}

impl<TYPES: NodeType> NodeImplementation<TYPES> for WebImpl {
    type QuorumNetwork = WebServerNetwork<TYPES, WebServerVersion>;
    type CommitteeNetwork = WebServerNetwork<TYPES, WebServerVersion>;
    type Storage = TestStorage<TYPES>;
}

impl<TYPES: NodeType> NodeImplementation<TYPES> for CombinedImpl {
    type QuorumNetwork = CombinedNetworks<TYPES>;
    type CommitteeNetwork = CombinedNetworks<TYPES>;
    type Storage = TestStorage<TYPES>;
}

impl<TYPES: NodeType> NodeImplementation<TYPES> for Libp2pImpl {
    type QuorumNetwork = Libp2pNetwork<Message<TYPES>, TYPES::SignatureKey>;
    type CommitteeNetwork = Libp2pNetwork<Message<TYPES>, TYPES::SignatureKey>;
    type Storage = TestStorage<TYPES>;
}