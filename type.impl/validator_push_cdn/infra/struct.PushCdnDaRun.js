(function() {var type_impls = {
"validator_push_cdn":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-RunDA%3CTYPES,+PushCdnNetwork%3CTYPES%3E,+PushCdnNetwork%3CTYPES%3E,+NODE%3E-for-PushCdnDaRun%3CTYPES%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/validator_push_cdn/infra/mod.rs.html#784-852\">source</a><a href=\"#impl-RunDA%3CTYPES,+PushCdnNetwork%3CTYPES%3E,+PushCdnNetwork%3CTYPES%3E,+NODE%3E-for-PushCdnDaRun%3CTYPES%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&lt;Transaction = TestTransaction, BlockPayload = TestBlockPayload, BlockHeader = TestBlockHeader, InstanceState = TestInstanceState&gt;, NODE: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::NodeImplementation\">NodeImplementation</a>&lt;TYPES, QuorumNetwork = <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;, CommitteeNetwork = <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;, Storage = TestStorage&lt;TYPES&gt;&gt;&gt; <a class=\"trait\" href=\"validator_push_cdn/infra/trait.RunDA.html\" title=\"trait validator_push_cdn::infra::RunDA\">RunDA</a>&lt;TYPES, <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;, <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;, NODE&gt; for <a class=\"struct\" href=\"validator_push_cdn/infra/struct.PushCdnDaRun.html\" title=\"struct validator_push_cdn::infra::PushCdnDaRun\">PushCdnDaRun</a>&lt;TYPES&gt;<div class=\"where\">where\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.ValidatedState\" title=\"type hotshot_types::traits::node_implementation::NodeType::ValidatedState\">ValidatedState</a>: <a class=\"trait\" href=\"hotshot_types/traits/states/trait.TestableState.html\" title=\"trait hotshot_types::traits::states::TestableState\">TestableState</a>&lt;TYPES&gt;,\n    &lt;TYPES as <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.BlockPayload\" title=\"type hotshot_types::traits::node_implementation::NodeType::BlockPayload\">BlockPayload</a>: <a class=\"trait\" href=\"hotshot_types/traits/block_contents/trait.TestableBlock.html\" title=\"trait hotshot_types::traits::block_contents::TestableBlock\">TestableBlock</a>,\n    <a class=\"struct\" href=\"hotshot_types/data/struct.Leaf.html\" title=\"struct hotshot_types::data::Leaf\">Leaf</a>&lt;TYPES&gt;: <a class=\"trait\" href=\"hotshot_types/data/trait.TestableLeaf.html\" title=\"trait hotshot_types::data::TestableLeaf\">TestableLeaf</a>,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize_networking\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/validator_push_cdn/infra/mod.rs.html#804-839\">source</a><a href=\"#method.initialize_networking\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"validator_push_cdn/infra/trait.RunDA.html#tymethod.initialize_networking\" class=\"fn\">initialize_networking</a>&lt;'async_trait&gt;(\n    config: NetworkConfig&lt;TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>, TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.ElectionConfigType\" title=\"type hotshot_types::traits::node_implementation::NodeType::ElectionConfigType\">ElectionConfigType</a>&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"validator_push_cdn/infra/struct.PushCdnDaRun.html\" title=\"struct validator_push_cdn::infra::PushCdnDaRun\">PushCdnDaRun</a>&lt;TYPES&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;</h4></section></summary><div class='docblock'>Initializes networking, returns self</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_da_channel\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/validator_push_cdn/infra/mod.rs.html#841-843\">source</a><a href=\"#method.get_da_channel\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"validator_push_cdn/infra/trait.RunDA.html#tymethod.get_da_channel\" class=\"fn\">get_da_channel</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Returns the da network for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_quorum_channel\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/validator_push_cdn/infra/mod.rs.html#845-847\">source</a><a href=\"#method.get_quorum_channel\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"validator_push_cdn/infra/trait.RunDA.html#tymethod.get_quorum_channel\" class=\"fn\">get_quorum_channel</a>(&amp;self) -&gt; <a class=\"struct\" href=\"hotshot/traits/networking/push_cdn_network/struct.PushCdnNetwork.html\" title=\"struct hotshot::traits::networking::push_cdn_network::PushCdnNetwork\">PushCdnNetwork</a>&lt;TYPES&gt;</h4></section></summary><div class='docblock'>Returns the quorum network for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_config\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/validator_push_cdn/infra/mod.rs.html#849-851\">source</a><a href=\"#method.get_config\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"validator_push_cdn/infra/trait.RunDA.html#tymethod.get_config\" class=\"fn\">get_config</a>(\n    &amp;self\n) -&gt; NetworkConfig&lt;TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>, TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.ElectionConfigType\" title=\"type hotshot_types::traits::node_implementation::NodeType::ElectionConfigType\">ElectionConfigType</a>&gt;</h4></section></summary><div class='docblock'>Returns the config for this run</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initialize_state_and_hotshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/validator_push_cdn/infra/mod.rs.html#453-518\">source</a><a href=\"#method.initialize_state_and_hotshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"validator_push_cdn/infra/trait.RunDA.html#method.initialize_state_and_hotshot\" class=\"fn\">initialize_state_and_hotshot</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, NODE&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Initializes the genesis state and HotShot instance; does not start HotShot consensus <a href=\"validator_push_cdn/infra/trait.RunDA.html#method.initialize_state_and_hotshot\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.run_hotshot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/validator_push_cdn/infra/mod.rs.html#522-677\">source</a><a href=\"#method.run_hotshot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"validator_push_cdn/infra/trait.RunDA.html#method.run_hotshot\" class=\"fn\">run_hotshot</a>&lt;'life0, 'life1, 'async_trait&gt;(\n    &amp;'life0 self,\n    context: <a class=\"struct\" href=\"hotshot/types/handle/struct.SystemContextHandle.html\" title=\"struct hotshot::types::handle::SystemContextHandle\">SystemContextHandle</a>&lt;TYPES, NODE&gt;,\n    transactions: &amp;'life1 mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;TestTransaction&gt;,\n    transactions_to_send_per_round: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>,\n    transaction_size_in_bytes: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = BenchResults&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'async_trait,\n    'life0: 'async_trait,\n    'life1: 'async_trait,</div></h4></section></summary><div class='docblock'>Starts HotShot consensus, returns when consensus has finished</div></details></div></details>","RunDA<TYPES, PushCdnNetwork<TYPES>, PushCdnNetwork<TYPES>, NODE>","validator_push_cdn::types::ThisRun"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()