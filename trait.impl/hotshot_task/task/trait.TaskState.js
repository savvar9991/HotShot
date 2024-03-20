(function() {var implementors = {
"hotshot_task_impls":[["impl&lt;TYPES: NodeType, VOTE: Vote&lt;TYPES&gt; + <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.AggregatableVote.html\" title=\"trait hotshot_task_impls::vote::AggregatableVote\">AggregatableVote</a>&lt;TYPES, VOTE, CERT&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static, CERT: Certificate&lt;TYPES, Voteable = VOTE::Commitment&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, VOTE, CERT&gt;<div class=\"where\">where\n    <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, VOTE, CERT&gt;: <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html\" title=\"trait hotshot_task_impls::vote::HandleVoteEvent\">HandleVoteEvent</a>&lt;TYPES, VOTE, CERT&gt;,</div>"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/transactions/struct.TransactionTaskState.html\" title=\"struct hotshot_task_impls::transactions::TransactionTaskState\">TransactionTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/vid/struct.VIDTaskState.html\" title=\"struct hotshot_task_impls::vid::VIDTaskState\">VIDTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, Ver: StaticVersionType + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/request/struct.NetworkRequestState.html\" title=\"struct hotshot_task_impls::request::NetworkRequestState\">NetworkRequestState</a>&lt;TYPES, I, Ver&gt;"],["impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkMessageTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkMessageTaskState\">NetworkMessageTaskState</a>&lt;TYPES&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/da/struct.DATaskState.html\" title=\"struct hotshot_task_impls::da::DATaskState\">DATaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncReplicaTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncReplicaTaskState\">ViewSyncReplicaTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncTaskState\">ViewSyncTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, COMMCHANNEL: ConnectedNetwork&lt;Message&lt;TYPES&gt;, TYPES::SignatureKey&gt;, S: Storage&lt;TYPES&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkEventTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkEventTaskState\">NetworkEventTaskState</a>&lt;TYPES, COMMCHANNEL, S&gt;"],["impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/harness/struct.TestHarnessState.html\" title=\"struct hotshot_task_impls::harness::TestHarnessState\">TestHarnessState</a>&lt;TYPES&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TaskState.html\" title=\"trait hotshot_task::task::TaskState\">TaskState</a> for <a class=\"struct\" href=\"hotshot_task_impls/upgrade/struct.UpgradeTaskState.html\" title=\"struct hotshot_task_impls::upgrade::UpgradeTaskState\">UpgradeTaskState</a>&lt;TYPES, I, A&gt;"]],
"hotshot_testing":[["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.TestableNodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::TestableNodeImplementation\">TestableNodeImplementation</a>&lt;TYPES&gt;&gt; TaskState for <a class=\"struct\" href=\"hotshot_testing/spinning_task/struct.SpinningTask.html\" title=\"struct hotshot_testing::spinning_task::SpinningTask\">SpinningTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.TestableNodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::TestableNodeImplementation\">TestableNodeImplementation</a>&lt;TYPES&gt;&gt; TaskState for <a class=\"struct\" href=\"hotshot_testing/view_sync_task/struct.ViewSyncTask.html\" title=\"struct hotshot_testing::view_sync_task::ViewSyncTask\">ViewSyncTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.NodeType.html\" title=\"trait hotshot_types::traits::node_implementation::NodeType\">NodeType</a>, I: <a class=\"trait\" href=\"hotshot_types/traits/node_implementation/trait.TestableNodeImplementation.html\" title=\"trait hotshot_types::traits::node_implementation::TestableNodeImplementation\">TestableNodeImplementation</a>&lt;TYPES&gt;&gt; TaskState for <a class=\"struct\" href=\"hotshot_testing/overall_safety_task/struct.OverallSafetyTask.html\" title=\"struct hotshot_testing::overall_safety_task::OverallSafetyTask\">OverallSafetyTask</a>&lt;TYPES, I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()