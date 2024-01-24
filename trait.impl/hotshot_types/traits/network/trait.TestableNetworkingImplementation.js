(function() {var implementors = {
"hotshot":[["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/web_server_network/struct.WebCommChannel.html\" title=\"struct hotshot::traits::networking::web_server_network::WebCommChannel\">WebCommChannel</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/libp2p_network/struct.Libp2pCommChannel.html\" title=\"struct hotshot::traits::networking::libp2p_network::Libp2pCommChannel\">Libp2pCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"hotshot_types/message/enum.MessageKind.html\" title=\"enum hotshot_types::message::MessageKind\">MessageKind</a>&lt;TYPES&gt;: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.ViewMessage.html\" title=\"trait hotshot_types::traits::network::ViewMessage\">ViewMessage</a>&lt;TYPES&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/web_server_network/struct.WebServerNetwork.html\" title=\"struct hotshot::traits::networking::web_server_network::WebServerNetwork\">WebServerNetwork</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryCommChannel.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryCommChannel\">MemoryCommChannel</a>&lt;TYPES&gt;<span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"hotshot_types/message/enum.MessageKind.html\" title=\"enum hotshot_types::message::MessageKind\">MessageKind</a>&lt;TYPES&gt;: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.ViewMessage.html\" title=\"trait hotshot_types::traits::network::ViewMessage\">ViewMessage</a>&lt;TYPES&gt;,</span>"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedCommChannel.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedCommChannel\">CombinedCommChannel</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/combined_network/struct.CombinedNetworks.html\" title=\"struct hotshot::traits::networking::combined_network::CombinedNetworks\">CombinedNetworks</a>&lt;TYPES&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/memory_network/struct.MemoryNetwork.html\" title=\"struct hotshot::traits::networking::memory_network::MemoryNetwork\">MemoryNetwork</a>&lt;<a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES&gt;, TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>&gt; <a class=\"trait\" href=\"hotshot_types/traits/network/trait.TestableNetworkingImplementation.html\" title=\"trait hotshot_types::traits::network::TestableNetworkingImplementation\">TestableNetworkingImplementation</a>&lt;TYPES&gt; for <a class=\"struct\" href=\"hotshot/traits/networking/libp2p_network/struct.Libp2pNetwork.html\" title=\"struct hotshot::traits::networking::libp2p_network::Libp2pNetwork\">Libp2pNetwork</a>&lt;<a class=\"struct\" href=\"hotshot/types/struct.Message.html\" title=\"struct hotshot::types::Message\">Message</a>&lt;TYPES&gt;, TYPES::<a class=\"associatedtype\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html#associatedtype.SignatureKey\" title=\"type hotshot_types::traits::node_implementation::NodeType::SignatureKey\">SignatureKey</a>&gt;<span class=\"where fmt-newline\">where\n    <a class=\"enum\" href=\"hotshot_types/message/enum.MessageKind.html\" title=\"enum hotshot_types::message::MessageKind\">MessageKind</a>&lt;TYPES&gt;: <a class=\"trait\" href=\"hotshot_types/traits/network/trait.ViewMessage.html\" title=\"trait hotshot_types::traits::network::ViewMessage\">ViewMessage</a>&lt;TYPES&gt;,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()