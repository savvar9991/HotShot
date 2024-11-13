searchState.loadedDescShard("hotshot", 0, "Provides a generic rust implementation of the <code>HotShot</code> BFT …\nAn async broadcast channel\nA <code>TwinsHandlerState</code> that forwards each message to both …\nFailed to deserialize data\nFailed to serialize data\nLength, in bytes, of a 256 bit hash\nLength, in bytes, of a 512 bit hash\nReexport error type Error type for <code>HotShot</code>\ninitializer struct for creating starting block\nThe consensus state machine is in an invalid state\nWrapper for all marketplace config that needs to be passed …\nBundle of all the memberships a consensus instance uses\nLeaf was not present in storage\nA <code>TwinsHandlerState</code> that randomly forwards a message to …\nHolds the state needed to participate in <code>HotShot</code> consensus\nTrait for handling messages for a node with a twin copy of …\nThe view timed out\nThe view we last performed an action in.  An action is …\nAnchored leaf provided by the initializer.\nauction results provider\nConfiguration items for this hotshot instance\nReturns a copy of the consensus struct\nThe hotstuff implementation\nThe DA nodes\nReturns a copy of the last decided leaf\nReturns the last decided validated state.\nPreviously decided upgrade certificate; this is necessary …\nExternal event stream for communication with the …\nfallback builder\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\ninitialize from genesis\nReload previous state based on most recent leaf and the …\nFuse two channels into a single channel\nContains helper functions for the crate\nHighest QC that was seen, for genesis it’s the genesis …\nuid for instrumentation\nInitializes a new <code>SystemContext</code> and does the work of …\nthe leaf specified initialization\nReturns a copy of the instance state\nImmutable instance state\nInstance-level state.\naccess to the internal event stream, in case we need to, …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nMarketplace config for this instance of HotShot\nMemberships used by consensus\nthe metrics that the implementor is using.\nThe underlying network\nCreates a new <code>Arc&lt;SystemContext&gt;</code> with the given …\nCreates a new <code>Arc&lt;SystemContext&gt;</code> with the given …\nreturn the timeout for a view for <code>self</code>\nAccess to the output event stream.\nThe private key of this node\nThe public key of this node\nPublishes a transaction asynchronously to the network.\nThe entire quorum\nReexport rand crate\nHandle a message from either twin, forwarding it to the …\nSpawn all tasks that operate on <code>SystemContextHandle</code>.\nProposals we have sent out to provide to others for catchup\nEmit an external event\nHandle a message sent to the twin from the network task, …\nSpawn all tasks that operate on <code>SystemContextHandle</code>.\n“Starts” consensus by sending a <code>QcFormed</code>, <code>ViewChange</code> …\nThe epoch to enter when first starting consensus\nStarting epoch number that should be equivelant to the …\nThe view to enter when first starting consensus\nStarting view number that should be equivelant to the view …\nGet the validated state from a given <code>view</code>.\nOptional state delta.\nReference to the internal storage for consensus datum.\nProvides a number of tasks that run continuously\nContains traits consumed by <code>SystemContext</code>\n[Non-blocking] instantly returns a copy of the last …\nContains types used by the crate\nUndecided leafs that were seen, but not yet decided on.  …\nNot yet decided state\nshared lock for upgrade information\nOptional validated state.\nThe state that the round was in when it timed out\nThe view number that timed out\nInitializes logging\ndummy (TODO delete later)\nTrait for intercepting and modifying messages between the …\nevent for global event stream\nshut everything down\nAdds consensus-related tasks to a <code>SystemContextHandle</code>.\nAdd the network task to handle events and send messages.\nAdds a <code>NetworkEventTaskState</code> task. Can be reimplemented to …\nAdds the <code>NetworkEventTaskState</code> tasks.\nAdds the <code>NetworkEventTaskState</code> tasks possibly modifying …\nAdds the <code>NetworkMessageTaskState</code> tasks and the request / …\nAdd the network task to handle messages and publish events.\nadds tasks for sending/receiving messages to/from the …\nAdd byzantine network tasks with the trait\nAdd a task which updates our queue lenght metric at a set …\nAdd tasks for network requests and responses\nAdd a task which responds to requests on the network.\nCreates a monitor for shutdown events.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nmodify incoming messages from the network\nmodify outgoing messages from the network\nCreates a <code>SystemContextHandle</code> with the given even …\nProvides trait to create task states from a …\nTrait for creating task states.\nFunction to create the task state from a given …\nThe auction results type for Solver interactions\nAbstraction over the full contents of a block\nFailed to receive over a channel\nFailed to send over a channel\nA configuration error\nThe type of the state delta this state is associated with.\nThe error type for this particular type of ledger state\nThe error type for this type of block\nFailed to deserialize\nFailed to serialize\nThe type of the instance-level state this state is …\nThe type of the instance-level state this state is …\nAn error occurred while attempting to listen\nFailed to look up a node on the network\nAn error occurred while receiving a message\nAn error occurred while sending a message\nData created during block building which feeds into the …\nMultiple errors. Allows us to roll up multiple errors into …\nThe underlying network type\nErrors that can occur in the network\nBuilder for <code>NetworkNodeConfig</code>.\ninterface describing how reliable the network is\nNode implementation aggregate trait\nThe network was not ready yet\nThe network request had been cancelled before it could be …\nThe network has been shut down and can no longer be used\nStorage for DA layer interactions\nextra functions required on a node implementation to be …\nTime compatibility needed for reward collection\nTimed out performing an operation\nThe type of the transitions we are applying\nThe feature is unimplemented\nAbstraction over the state that blocks modify\nValidated State\nThe signed authentication message sent to the remote peer …\nThe address to bind to\ngenerate a genesis block\nBuilds a new <code>NetworkNodeConfig</code>.\nGenerate commitment that builders use to sign block …\ngiven a message and a way to send the message, decide …\nThe timeout for DHT lookups.\nSortition trait elections used for consensus\nBuild the payload and metadata for genesis/null block.\nReturns the argument unchanged.\nReturns the argument unchanged.\nBuild a payload with the encoded transaction bytes, …\nConstruct the state with the given block header.\nBuild a payload and associated metadata with the …\nGenerate the communication channels for testing\nConstruct a genesis validated state.\nConfiguration for <code>GossipSub</code>\nModule for publicly usable implementations of the traits\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe keypair for the node\nCreates random transaction if possible otherwise panics …\nNetwork access compatibility\nComposite trait for node behavior\nNumber of transactions in the block.\nGets called to notify the persistence backend that this …\nReplication factor for entries in the DHT\nrepublication interval in DHT, must be much less than <code>ttl</code>\nConfiguration for <code>RequestResponse</code>\nsample from uniform distribution to decide whether or not …\nSample from bernoulli distribution to decide whether or …\nnumber of times to repeat the packet\nscramble the packet\nThe stake table. Used for authenticating other nodes. If …\nCreates random transaction if possible otherwise panics …\nlist of addresses to connect to at initialization\nList of transaction commitments.\nGet the transactions in the payload.\nexpiratiry for records in DHT\nthe number of transactions in a block\nCheck if the proposed block header is valid and apply it …\nleader completely randomized every view\nstatic (round robin) committee election\nstatic (round robin leader for 2 consecutive views) …\nThe static committee election\nGet all eligible leaders of the committee for the current …\nGet all members of the committee for the current view\nGet the network topic for the committee\nThe network topic of the committee\nThe nodes eligible for leadership. NOTE: This is currently …\nGet the voting failure threshold for the committee\nReturns the argument unchanged.\nCheck if a node has stake in the committee\nThe nodes on the committee and their stake, indexed by …\nCalls <code>U::from(self)</code>.\nIndex the vector of public keys with the current view …\nCreate a new election\nGet the stake table entry for a public key\nGet the stake table for the current view\nThe nodes on the committee and their stake\nGet the voting success threshold for the committee\nGet the total number of nodes in the committee\nGet the voting upgrade threshold for the committee\nThe static committee election\nGet all eligible leaders of the committee for the current …\nGet all members of the committee for the current view\nGet the network topic for the committee\nThe network topic of the committee\nThe nodes eligible for leadership. NOTE: This is currently …\nGet the voting failure threshold for the committee\nReturns the argument unchanged.\nCheck if a node has stake in the committee\nThe nodes on the committee and their stake, indexed by …\nCalls <code>U::from(self)</code>.\nIndex the vector of public keys with the current view …\nCreate a new election\nGet the stake table entry for a public key\nGet the stake table for the current view\nThe nodes on the committee and their stake\nGet the voting success threshold for the committee\nGet the total number of nodes in the committee\nGet the voting upgrade threshold for the committee\nThe static committee election\nGet all eligible leaders of the committee for the current …\nGet all members of the committee for the current view\nGet the network topic for the committee\nThe network topic of the committee\nThe nodes eligible for leadership. NOTE: This is currently …\nGet the voting failure threshold for the committee\nReturns the argument unchanged.\nCheck if a node has stake in the committee\nThe nodes on the committee and their stake, indexed by …\nCalls <code>U::from(self)</code>.\nIndex the vector of public keys with the current view …\nCreate a new election\nGet the stake table entry for a public key\nGet the stake table for the current view\nThe nodes on the committee and their stake\nGet the voting success threshold for the committee\nGet the total number of nodes in the committee\nGet the voting upgrade threshold for the committee\nCDN-specific metrics\nThe enum for the topics we can subscribe to in the Push CDN\nA communication channel with 2 networks, where we can fall …\nThe DA topic\nThe global topic\nConfiguration for Libp2p’s Gossipsub\nWe encapsulate keys here to help readability.\nLibp2p-specific metrics\nNetworking implementation that uses libp2p generic over <code>M</code> …\nShared state for in-memory mock networking.\nIn memory only network simulator.\nType alias for a shared collection of peerid, multiaddrs\nThe production run definition for the Push CDN. Uses the …\nA communication channel to the Push CDN, which is a …\nConfiguration for Libp2p’s request-response\nThe testing run definition for the Push CDN. Uses the real …\nWrapper for the tuple of <code>PushCdnNetwork</code> and <code>Libp2pNetwork</code> …\nA wrapped <code>SignatureKey</code>. We need to implement the Push CDN…\nThe underlying client\nHow long to delay\nChannels to the delayed tasks\nDerive a Libp2p keypair from a given private key\nParse a Libp2p Multiaddr from a string. The input string …\nDerive a Libp2p Peer ID from a given private key\nThe time period that messages are stored in the cache\nTime to live for fanout peers\nIf enabled newly created messages will always be sent to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nAffects how many peers we will emit gossip to at each …\nMinimum number of peers to emit gossip to during a …\nControls how many times we will allow a peer to request …\nInitial delay in each heartbeat\nThe heartbeat interval\nThe number of past heartbeats to gossip about\nThe number of past heartbeats to remember the full …\nThe id of this <code>MemoryNetwork</code> cluster\nholds the state of the libp2p network\nThe actual internal state\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether or not the underlying network is supposed to be …\nWhether or not the network is considered ready\nTime to wait for a message requested through IWANT …\nThe list of <code>MemoryNetwork</code>s\nThe maximum number of messages in an IHAVE message\nMaximum number of IHAVE messages to accept from a peer …\nThe maximum number of messages we will process in a given …\nThe maximum gossip message size\nThe target number of peers in the mesh\nThe maximum number of peers in the mesh\nThe minimum number of peers in the mesh\nThe minimum number of mesh peers that must be outbound\nLast n seen messages to prevent processing duplicates\nThe CDN-specific metrics\nThe two networks we’ll use for send/recv\nHow many times messages were sent on secondary without …\nThe number of currently connected peers\nThe number of failed messages\nThe number of failed messages\nWhether primary is considered down\nHow many times primary failed to deliver\nThe underlying (private) signing key, used to sign …\nThe underlying (public) verification key, used to …\nCache duration for published message IDs\nThe maximum request size in bytes\nThe maximum response size in bytes\nThe list of <code>MemoryNetwork</code>s aggregated by topic\nFailed to receive over a channel\nFailed to send over a channel\nA configuration error\nFailed to deserialize\nFailed to serialize\nAn error occurred while attempting to listen\nFailed to look up a node on the network\nAn error occurred while receiving a message\nAn error occurred while sending a message\nMultiple errors. Allows us to roll up multiple errors into …\nErrors that can occur in the network\ninterface describing how reliable the network is\nThe network was not ready yet\nThe network request had been cancelled before it could be …\nThe network has been shut down and can no longer be used\nTimed out performing an operation\nThe feature is unimplemented\ngiven a message and a way to send the message, decide …\nNetworking Implementation that has a primary and a …\nLibp2p based/production networking implementation This …\nIn memory network simulator\nThe Push CDN network\nsample from uniform distribution to decide whether or not …\nSample from bernoulli distribution to decide whether or …\nnumber of times to repeat the packet\nscramble the packet\nA communication channel with 2 networks, where we can fall …\nThread-safe ref counted lock to a map of channels to the …\nWrapper for the tuple of <code>PushCdnNetwork</code> and <code>Libp2pNetwork</code> …\nHelper function to calculate a hash of a type that …\nHow long to delay\nChannels to the delayed tasks\nReturns the argument unchanged.\nReturns the argument unchanged.\nGet the number of messages in-flight.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLast n seen messages to prevent processing duplicates\nThe two networks we’ll use for send/recv\nConstructor\nHow many times messages were sent on secondary without …\nGet a ref to the primary network\nWhether primary is considered down\nHow many times primary failed to deliver\nReceive one or many messages from the underlying network.\nGet a ref to the backup network\na helper function to send messages through both networks …\nconvenience alias for the type for bootstrap addresses …\nStubbed out Ack\nConfiguration for Libp2p’s Gossipsub\nLibp2p-specific metrics\nNetworking implementation that uses libp2p generic over <code>M</code> …\nThe underlying state of the libp2p network\nType alias for a shared collection of peerid, multiaddrs\nhardcoded topic of QC used\nConfiguration for Libp2p’s request-response\nthis is really cheating to enable local tests hashset of …\nThis should not be required, but it is. Version …\nInitialize with empty metrics\nDerive a Libp2p keypair from a given private key\nParse a Libp2p Multiaddr from a string. The input string …\nDerive a Libp2p Peer ID from a given private key\nmax time before dropping message due to DHT error\nThe time period that messages are stored in the cache\nTime to live for fanout peers\nIf enabled newly created messages will always be sent to …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreate and return a Libp2p network from a network config …\nReturns a boxed function …\nAffects how many peers we will emit gossip to at each …\nMinimum number of peers to emit gossip to during a …\nControls how many times we will allow a peer to request …\nhandle to control the network\ntask to propagate messages to handlers terminates on shut …\nHandle events\nInitial delay in each heartbeat\nThe heartbeat interval\nThe number of past heartbeats to gossip about\nThe number of past heartbeats to remember the full …\nholds the state of the libp2p network\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nwhether or not we’ve bootstrapped into the DHT yet\nReturns whether or not the network is currently ready.\nWhether or not the network is considered ready\nwhether or not the network is ready to send\nTime to wait for a message requested through IWANT …\nKillswitch sender\nthe latest view number (for node lookup purposes) NOTE: …\nThe maximum number of messages in an IHAVE message\nMaximum number of IHAVE messages to accept from a peer …\nThe maximum number of messages we will process in a given …\nThe maximum gossip message size\nThe target number of peers in the mesh\nThe maximum number of peers in the mesh\nThe minimum number of peers in the mesh\nThe minimum number of mesh peers that must be outbound\nThe Libp2p metrics we’re managing\nPopulate the metrics with Libp2p-specific metrics\nConstructs new network for a node. Note that this network …\nSender for node lookup (relevant view number, key of node) …\nThe number of currently connected peers\nThe number of failed messages\nthis node’s public key\nCache duration for published message IDs\nMessage Receiver\nReceive one or many messages from the underlying network.\nreliability_config\nThe maximum request size in bytes\nThe maximum response size in bytes\nSender for broadcast messages\nInitiates connection to the outside world\nSpawns task for looking up nodes pre-emptively\nThe list of topics we’re subscribed to\nThe libp2p view update is a special operation intrinsic to …\nReturns only when the network is ready.\nShared state for in-memory mock networking.\nIn memory only network simulator.\nInternal state for a <code>MemoryNetwork</code> instance\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe id of this <code>MemoryNetwork</code> cluster\nCount of messages that are in-flight (send but not …\nThe actual internal state\nSend a <code>Vec&lt;u8&gt;</code> message to the inner <code>input</code>\nInput for messages\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe list of <code>MemoryNetwork</code>s\nThe master map\nCreate a new, empty, <code>MasterMap</code>\nCreates a new <code>MemoryNetwork</code> and hooks it up to the group …\nOutput for messages\nReceive one or many messages from the underlying network.\nconfig to introduce unreliability to the network\nThe list of <code>MemoryNetwork</code>s aggregated by topic\nThe broker definition for the Push CDN. Uses the TCP …\nCDN-specific metrics\nThe client definition for the Push CDN. Uses the Quic …\nThe DA topic\nThe global topic\nWe encapsulate keys here to help readability.\nThe production run definition for the Push CDN. Uses the …\nA communication channel to the Push CDN, which is a …\nThe testing run definition for the Push CDN. Uses the real …\nThe enum for the topics we can subscribe to in the Push CDN\nThe user definition for the Push CDN. Uses the Quic …\nA wrapped <code>SignatureKey</code>. We need to implement the Push CDN…\nBroadcast a message to all members of the quorum.\nBroadcast a message to members of the particular topic. …\nThe underlying client\nBroadcast a message to all members of the DA committee.\nSend a direct message to a node with a particular key. …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nGenerate n Push CDN clients, a marshal, and two brokers …\nThe PushCDN does not support in-flight message counts\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nWhether or not the underlying network is supposed to be …\nThe CDN-specific metrics\nPopulate the metrics with the CDN-specific ones\nCreate a new <code>PushCdnNetwork</code> (really a client) from a …\nThe number of failed messages\nPause sending and receiving on the PushCDN network.\nThe underlying (private) signing key, used to sign …\nThe underlying (public) verification key, used to …\nDo nothing here, as we don’t need to look up nodes.\nReceive a message. Is agnostic over <code>transmit_type</code>, which …\nResume sending and receiving on the PushCDN network.\nTODO: shut down the networks. Unneeded for testing.\nSign a message of arbitrary data and return the serialized …\nVerify a message of arbitrary data and return the result\nWait for the client to initialize the connection\nThe auction results type for Solver interactions\nThe underlying network type\nNode implementation aggregate trait\nStorage for DA layer interactions\nextra functions required on a node implementation to be …\ngenerate a genesis block\nGenerate the communication channels for testing\nCreates random transaction if possible otherwise panics …\nCreates random transaction if possible otherwise panics …\nthe number of transactions in a block\nBLS private key used to sign a message\nBLS public key used to verify a signature\nDA proposal was received from the network or submitted to …\nA new decision event was issued\nA view encountered an error and was interrupted\nA status event emitted by a <code>HotShot</code> instance\nThe type and contents of a status event emitted by a …\nA message destined for external listeners was received\nIncoming message\nThe private key type for this signature algorithm\nThe type of the assembled signature, without <code>BitVec</code>\nThe type of the quorum certificate parameters used for …\nThe type of the assembled qc: assembled signature + <code>BitVec</code>\nQuorum proposal was received from the network or submitted …\nA replica task was canceled by a timeout interrupt\nType of error that can occur when signing data\nTrait for abstracting public key signatures Self is the …\nThe type of the entry that contain both public key and …\nEvent streaming handle for a <code>SystemContext</code> instance …\nNew transactions were received from the network or …\nUpgrade proposal was received from the network or …\nThe view has finished.  If values were decided on, a <code>Decide</code>…\nThe view timed out\nassemble the signature from the partial signature and the …\ncheck the quorum certificate for the assembled signature\nregistry for controlling consensus tasks\nNumber of blocks in an epoch, zero means there are no …\nEvents that a <code>SystemContext</code> instance can emit\nThe underlying event\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nDeserialize a public key from bytes\nProduce a public key from a private key\nGenerate a new key pair\ngenerates the genesis public key. Meant to be dummy/filler\nProvides an event-streaming handle for a <code>SystemContext</code> …\nInternal reference to the underlying <code>SystemContext</code>\naccess to the internal event stream, in case we need to, …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nThe message kind\nMemberships used by consensus\nNetworks used by the instance of hotshot\nregistry for controlling network tasks\nThe sender and receiver, to allow the application to …\nonly get the public key from the stake table entry\nget the public parameter for the assembled signature …\nThe sender of this message\nget the assembled signature and the <code>BitVec</code> separately from …\nProduce a signature\nget the stake table entry from the public key and stake …\nReference to the internal storage for consensus datum.\nSerialize a public key to bytes\nValidate a signature\nget the view number out of a message\nThe view number that this event originates from\nOptional information of the number of transactions in the …\nSerialized data of the message\nThe underlying error\nThe chain of Leafs that were committed by this decision\nContents of the proposal\nContents of the proposal\nContents of the proposal\nThe QC signing the most recent leaf in <code>leaf_chain</code>.\nPublic key of the leader submitting the proposal\nPublic key of the leader submitting the proposal\nPublic key of the leader submitting the proposal\nPublic Key of the message sender\nThe list of transactions\nThe view that timed out\nThe view number that has just finished\nThe view that timed out\nDA proposal was received from the network or submitted to …\nA new decision event was issued\nA view encountered an error and was interrupted\nA status event emitted by a <code>HotShot</code> instance\nThe type and contents of a status event emitted by a …\nA message destined for external listeners was received\nQuorum proposal was received from the network or submitted …\nA replica task was canceled by a timeout interrupt\nNew transactions were received from the network or …\nUpgrade proposal was received from the network or …\nThe view has finished.  If values were decided on, a <code>Decide</code>…\nThe view timed out\nThe underlying event\nThe view number that this event originates from\nOptional information of the number of transactions in the …\nSerialized data of the message\nThe underlying error\nThe chain of Leafs that were committed by this decision\nContents of the proposal\nContents of the proposal\nContents of the proposal\nThe QC signing the most recent leaf in <code>leaf_chain</code>.\nPublic key of the leader submitting the proposal\nPublic key of the leader submitting the proposal\nPublic key of the leader submitting the proposal\nPublic Key of the message sender\nThe list of transactions\nThe view that timed out\nThe view number that has just finished\nThe view that timed out\nEvent streaming handle for a <code>SystemContext</code> instance …\nAdds a hotshot consensus-related task to the …\nGet the underlying consensus state for this <code>SystemContext</code>\nregistry for controlling consensus tasks\nWrapper to get the epoch number this node is on.\nWrapper to get the view number this node is on.\nGet the last decided leaf of the <code>SystemContext</code> instance.\nGet the last decided validated state of the <code>SystemContext</code> …\nNumber of blocks in an epoch, zero means there are no …\nobtains a stream to expose to the user\nHACK so we can know the types when running tests… there …\nGet the sender side of the external event stream for …\nReturns the argument unchanged.\nInternal reference to the underlying <code>SystemContext</code>\nGet the sender side of the internal event stream for …\naccess to the internal event stream, in case we need to, …\nHACK so we can know the types when running tests… there …\nHACK so we can create dependency tasks when running tests\nCalls <code>U::from(self)</code>.\nWrapper for <code>HotShotConsensusApi</code>’s <code>leader</code> function\nMemberships used by consensus\nNetworks used by the instance of hotshot\nregistry for controlling network tasks\nreturn the timeout for a view of the underlying …\nThe sender and receiver, to allow the application to …\nWrapper to get this node’s public key\nRequest a proposal from the all other nodes.  Will block …\nMessage other participents with a serialized message from …\nShut down the the inner hotshot and wait until all …\nGet the validated state from a given <code>view</code>.\nProvides a reference to the underlying storage for this …\nReference to the internal storage for consensus datum.\nSubmits a transaction to the backing <code>SystemContext</code> …\nTries to get the most recent decided leaf, returning …")