(function() {var implementors = {
"hotshot":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot/demos/sdemo/struct.SDemoTransaction.html\" title=\"struct hotshot::demos::sdemo::SDemoTransaction\">SDemoTransaction</a>"]],
"hotshot_consensus":[["impl&lt;TYPES: NodeType, LEAF: LeafType&lt;NodeType = TYPES&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_consensus/utils/struct.View.html\" title=\"struct hotshot_consensus::utils::View\">View</a>&lt;TYPES, LEAF&gt;"]],
"hotshot_task":[["impl&lt;EVENT: <a class=\"trait\" href=\"hotshot_task/task/trait.PassType.html\" title=\"trait hotshot_task::task::PassType\">PassType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_task/task/struct.FilterEvent.html\" title=\"struct hotshot_task::task::FilterEvent\">FilterEvent</a>&lt;EVENT&gt;"],["impl&lt;HSTT: <a class=\"trait\" href=\"hotshot_task/task/trait.HotShotTaskTypes.html\" title=\"trait hotshot_task::task::HotShotTaskTypes\">HotShotTaskTypes</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_task/task/struct.HandleEvent.html\" title=\"struct hotshot_task::task::HandleEvent\">HandleEvent</a>&lt;HSTT&gt;"],["impl&lt;HSTT: <a class=\"trait\" href=\"hotshot_task/task/trait.HotShotTaskTypes.html\" title=\"trait hotshot_task::task::HotShotTaskTypes\">HotShotTaskTypes</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_task/task/struct.HandleMessage.html\" title=\"struct hotshot_task::task::HandleMessage\">HandleMessage</a>&lt;HSTT&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_task/global_registry/struct.ShutdownFn.html\" title=\"struct hotshot_task::global_registry::ShutdownFn\">ShutdownFn</a>"]],
"hotshot_testing":[["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES::ConsensusType, TYPES&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_testing/round/struct.RoundHook.html\" title=\"struct hotshot_testing::round::RoundHook\">RoundHook</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    QuorumCommChannel&lt;TYPES, I&gt;: CommunicationChannel&lt;TYPES, Message&lt;TYPES, I&gt;, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Proposal, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Vote, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Membership&gt;,</span>"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES::ConsensusType, TYPES&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_testing/round/struct.RoundSetup.html\" title=\"struct hotshot_testing::round::RoundSetup\">RoundSetup</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    QuorumCommChannel&lt;TYPES, I&gt;: CommunicationChannel&lt;TYPES, Message&lt;TYPES, I&gt;, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Proposal, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Vote, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Membership&gt;,</span>"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES::ConsensusType, TYPES&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_testing/round/struct.RoundSafetyCheck.html\" title=\"struct hotshot_testing::round::RoundSafetyCheck\">RoundSafetyCheck</a>&lt;TYPES, I&gt;<span class=\"where fmt-newline\">where\n    QuorumCommChannel&lt;TYPES, I&gt;: CommunicationChannel&lt;TYPES, Message&lt;TYPES, I&gt;, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Proposal, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Vote, &lt;QuorumEx&lt;TYPES, I&gt; as ConsensusExchange&lt;TYPES, Message&lt;TYPES, I&gt;&gt;&gt;::Membership&gt;,</span>"]],
"hotshot_types":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.70.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"hotshot_types/data/struct.ViewNumber.html\" title=\"struct hotshot_types::data::ViewNumber\">ViewNumber</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()