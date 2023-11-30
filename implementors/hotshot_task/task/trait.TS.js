(function() {var implementors = {
"hotshot_task_impls":[["impl&lt;TYPES: NodeType&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/harness/struct.TestHarnessState.html\" title=\"struct hotshot_task_impls::harness::TestHarnessState\">TestHarnessState</a>&lt;TYPES&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/vid/struct.VIDVoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vid::VIDVoteCollectionTaskState\">VIDVoteCollectionTaskState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/vid/struct.VIDTaskState.html\" title=\"struct hotshot_task_impls::vid::VIDTaskState\">VIDTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::consensus::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, VOTE: Vote&lt;TYPES&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static, CERTIFICATE: Certificate&lt;TYPES, Voteable = VOTE::Commitment&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncRelayTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncRelayTaskState\">ViewSyncRelayTaskState</a>&lt;TYPES, I, VOTE, CERTIFICATE&gt;"],["impl&lt;TYPES: NodeType, COMMCHANNEL: CommunicationChannel&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkEventTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkEventTaskState\">NetworkEventTaskState</a>&lt;TYPES, COMMCHANNEL&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncTaskState\">ViewSyncTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/view_sync/struct.ViewSyncReplicaTaskState.html\" title=\"struct hotshot_task_impls::view_sync::ViewSyncReplicaTaskState\">ViewSyncReplicaTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/consensus/struct.ConsensusTaskState.html\" title=\"struct hotshot_task_impls::consensus::ConsensusTaskState\">ConsensusTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/da/struct.DAVoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::da::DAVoteCollectionTaskState\">DAVoteCollectionTaskState</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/transactions/struct.TransactionTaskState.html\" title=\"struct hotshot_task_impls::transactions::TransactionTaskState\">TransactionTaskState</a>&lt;TYPES, I, A&gt;"],["impl&lt;TYPES: NodeType&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/network/struct.NetworkMessageTaskState.html\" title=\"struct hotshot_task_impls::network::NetworkMessageTaskState\">NetworkMessageTaskState</a>&lt;TYPES&gt;"],["impl&lt;TYPES: NodeType, I: NodeImplementation&lt;TYPES&gt;, A: ConsensusApi&lt;TYPES, I&gt; + 'static&gt; TS for <a class=\"struct\" href=\"hotshot_task_impls/da/struct.DATaskState.html\" title=\"struct hotshot_task_impls::da::DATaskState\">DATaskState</a>&lt;TYPES, I, A&gt;"]],
"hotshot_testing":[["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/txn_task/struct.TxnTask.html\" title=\"struct hotshot_testing::txn_task::TxnTask\">TxnTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/completion_task/struct.CompletionTask.html\" title=\"struct hotshot_testing::completion_task::CompletionTask\">CompletionTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/overall_safety_task/struct.OverallSafetyTask.html\" title=\"struct hotshot_testing::overall_safety_task::OverallSafetyTask\">OverallSafetyTask</a>&lt;TYPES, I&gt;"],["impl&lt;TYPES: NodeType, I: TestableNodeImplementation&lt;TYPES&gt;&gt; TS for <a class=\"struct\" href=\"hotshot_testing/spinning_task/struct.SpinningTask.html\" title=\"struct hotshot_testing::spinning_task::SpinningTask\">SpinningTask</a>&lt;TYPES, I&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()