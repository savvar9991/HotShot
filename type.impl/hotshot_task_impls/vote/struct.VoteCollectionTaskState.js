(function() {var type_impls = {
"hotshot_task_impls":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-VoteCollectionTaskState%3CTYPES,+VOTE,+CERT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#71-110\">source</a><a href=\"#impl-VoteCollectionTaskState%3CTYPES,+VOTE,+CERT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType, VOTE: Vote&lt;TYPES&gt; + <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.AggregatableVote.html\" title=\"trait hotshot_task_impls::vote::AggregatableVote\">AggregatableVote</a>&lt;TYPES, VOTE, CERT&gt;, CERT: Certificate&lt;TYPES, Voteable = VOTE::Commitment&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, VOTE, CERT&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.accumulate_vote\" class=\"method\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#79-109\">source</a><h4 class=\"code-header\">pub async fn <a href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html#tymethod.accumulate_vote\" class=\"fn\">accumulate_vote</a>(\n    self,\n    vote: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.reference.html\">&amp;VOTE</a>\n) -&gt; (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_task/task/enum.HotShotTaskCompleted.html\" title=\"enum hotshot_task::task::HotShotTaskCompleted\">HotShotTaskCompleted</a>&gt;, Self)</h4></section></summary><div class=\"docblock\"><p>Take one vote and accumultate it. Returns either the cert or the updated state\nafter the vote is accumulated</p>\n</div></details></div></details>",0,"hotshot_task_impls::vote::QuorumVoteState","hotshot_task_impls::vote::DAVoteState","hotshot_task_impls::vote::TimeoutVoteState","hotshot_task_impls::vote::ViewSyncPreCommitState","hotshot_task_impls::vote::ViewSyncCommitVoteState","hotshot_task_impls::vote::ViewSyncFinalizeVoteState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+QuorumData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+QuorumData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+QuorumData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+QuorumData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#343-358\">source</a><a href=\"#impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+QuorumData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+QuorumData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+QuorumData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+QuorumData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html\" title=\"trait hotshot_task_impls::vote::HandleVoteEvent\">HandleVoteEvent</a>&lt;TYPES, SimpleVote&lt;TYPES, QuorumData&lt;TYPES&gt;&gt;, SimpleCertificate&lt;TYPES, QuorumData&lt;TYPES&gt;, SuccessThreshold&gt;&gt; for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, QuorumVote&lt;TYPES&gt;, QuorumCertificate&lt;TYPES&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#346-354\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.handle_event\" class=\"fn\">handle_event</a>&lt;'async_trait&gt;(\n    self,\n    event: <a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_task/task/enum.HotShotTaskCompleted.html\" title=\"enum hotshot_task::task::HotShotTaskCompleted\">HotShotTaskCompleted</a>&gt;, <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, QuorumVote&lt;TYPES&gt;, QuorumCertificate&lt;TYPES&gt;&gt;)&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>Handle a vote event</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#355-357\">source</a><a href=\"#method.filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.filter\" class=\"fn\">filter</a>(event: &amp;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Event filter to use for this event</div></details></div></details>","HandleVoteEvent<TYPES, SimpleVote<TYPES, QuorumData<TYPES>>, SimpleCertificate<TYPES, QuorumData<TYPES>, SuccessThreshold>>","hotshot_task_impls::vote::QuorumVoteState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#435-454\">source</a><a href=\"#impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncFinalizeData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html\" title=\"trait hotshot_task_impls::vote::HandleVoteEvent\">HandleVoteEvent</a>&lt;TYPES, SimpleVote&lt;TYPES, ViewSyncFinalizeData&lt;TYPES&gt;&gt;, SimpleCertificate&lt;TYPES, ViewSyncFinalizeData&lt;TYPES&gt;, SuccessThreshold&gt;&gt; for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, ViewSyncFinalizeVote&lt;TYPES&gt;, ViewSyncFinalizeCertificate2&lt;TYPES&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#439-450\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.handle_event\" class=\"fn\">handle_event</a>&lt;'async_trait&gt;(\n    self,\n    event: <a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_task/task/enum.HotShotTaskCompleted.html\" title=\"enum hotshot_task::task::HotShotTaskCompleted\">HotShotTaskCompleted</a>&gt;, <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, ViewSyncFinalizeVote&lt;TYPES&gt;, ViewSyncFinalizeCertificate2&lt;TYPES&gt;&gt;)&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>Handle a vote event</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#451-453\">source</a><a href=\"#method.filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.filter\" class=\"fn\">filter</a>(event: &amp;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Event filter to use for this event</div></details></div></details>","HandleVoteEvent<TYPES, SimpleVote<TYPES, ViewSyncFinalizeData<TYPES>>, SimpleCertificate<TYPES, ViewSyncFinalizeData<TYPES>, SuccessThreshold>>","hotshot_task_impls::vote::ViewSyncFinalizeVoteState"],["<section id=\"impl-TS-for-VoteCollectionTaskState%3CTYPES,+VOTE,+CERT%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#112-126\">source</a><a href=\"#impl-TS-for-VoteCollectionTaskState%3CTYPES,+VOTE,+CERT%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType, VOTE: Vote&lt;TYPES&gt; + <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.AggregatableVote.html\" title=\"trait hotshot_task_impls::vote::AggregatableVote\">AggregatableVote</a>&lt;TYPES, VOTE, CERT&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static, CERT: Certificate&lt;TYPES, Voteable = VOTE::Commitment&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"hotshot_task/task/trait.TS.html\" title=\"trait hotshot_task::task::TS\">TS</a> for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, VOTE, CERT&gt;</h3></section>","TS","hotshot_task_impls::vote::QuorumVoteState","hotshot_task_impls::vote::DAVoteState","hotshot_task_impls::vote::TimeoutVoteState","hotshot_task_impls::vote::ViewSyncPreCommitState","hotshot_task_impls::vote::ViewSyncCommitVoteState","hotshot_task_impls::vote::ViewSyncFinalizeVoteState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncCommitData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncCommitData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#416-432\">source</a><a href=\"#impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncCommitData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncCommitData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html\" title=\"trait hotshot_task_impls::vote::HandleVoteEvent\">HandleVoteEvent</a>&lt;TYPES, SimpleVote&lt;TYPES, ViewSyncCommitData&lt;TYPES&gt;&gt;, SimpleCertificate&lt;TYPES, ViewSyncCommitData&lt;TYPES&gt;, SuccessThreshold&gt;&gt; for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, ViewSyncCommitVote&lt;TYPES&gt;, ViewSyncCommitCertificate2&lt;TYPES&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#420-428\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.handle_event\" class=\"fn\">handle_event</a>&lt;'async_trait&gt;(\n    self,\n    event: <a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_task/task/enum.HotShotTaskCompleted.html\" title=\"enum hotshot_task::task::HotShotTaskCompleted\">HotShotTaskCompleted</a>&gt;, <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, ViewSyncCommitVote&lt;TYPES&gt;, ViewSyncCommitCertificate2&lt;TYPES&gt;&gt;)&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>Handle a vote event</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#429-431\">source</a><a href=\"#method.filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.filter\" class=\"fn\">filter</a>(event: &amp;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Event filter to use for this event</div></details></div></details>","HandleVoteEvent<TYPES, SimpleVote<TYPES, ViewSyncCommitData<TYPES>>, SimpleCertificate<TYPES, ViewSyncCommitData<TYPES>, SuccessThreshold>>","hotshot_task_impls::vote::ViewSyncCommitVoteState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E,+OneHonestThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E,+OneHonestThreshold%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#397-413\">source</a><a href=\"#impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E,+OneHonestThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+ViewSyncPreCommitData%3CTYPES%3E,+OneHonestThreshold%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html\" title=\"trait hotshot_task_impls::vote::HandleVoteEvent\">HandleVoteEvent</a>&lt;TYPES, SimpleVote&lt;TYPES, ViewSyncPreCommitData&lt;TYPES&gt;&gt;, SimpleCertificate&lt;TYPES, ViewSyncPreCommitData&lt;TYPES&gt;, OneHonestThreshold&gt;&gt; for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, ViewSyncPreCommitVote&lt;TYPES&gt;, ViewSyncPreCommitCertificate2&lt;TYPES&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#401-409\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.handle_event\" class=\"fn\">handle_event</a>&lt;'async_trait&gt;(\n    self,\n    event: <a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_task/task/enum.HotShotTaskCompleted.html\" title=\"enum hotshot_task::task::HotShotTaskCompleted\">HotShotTaskCompleted</a>&gt;, <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, ViewSyncPreCommitVote&lt;TYPES&gt;, ViewSyncPreCommitCertificate2&lt;TYPES&gt;&gt;)&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>Handle a vote event</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#410-412\">source</a><a href=\"#method.filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.filter\" class=\"fn\">filter</a>(event: &amp;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Event filter to use for this event</div></details></div></details>","HandleVoteEvent<TYPES, SimpleVote<TYPES, ViewSyncPreCommitData<TYPES>>, SimpleCertificate<TYPES, ViewSyncPreCommitData<TYPES>, OneHonestThreshold>>","hotshot_task_impls::vote::ViewSyncPreCommitState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+DAData%3E,+SimpleCertificate%3CTYPES,+DAData,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+DAData%3E,+SimpleCertificate%3CTYPES,+DAData,+SuccessThreshold%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#361-376\">source</a><a href=\"#impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+DAData%3E,+SimpleCertificate%3CTYPES,+DAData,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+DAData%3E,+SimpleCertificate%3CTYPES,+DAData,+SuccessThreshold%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html\" title=\"trait hotshot_task_impls::vote::HandleVoteEvent\">HandleVoteEvent</a>&lt;TYPES, SimpleVote&lt;TYPES, DAData&gt;, SimpleCertificate&lt;TYPES, DAData, SuccessThreshold&gt;&gt; for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, DAVote&lt;TYPES&gt;, DACertificate&lt;TYPES&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#364-372\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.handle_event\" class=\"fn\">handle_event</a>&lt;'async_trait&gt;(\n    self,\n    event: <a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_task/task/enum.HotShotTaskCompleted.html\" title=\"enum hotshot_task::task::HotShotTaskCompleted\">HotShotTaskCompleted</a>&gt;, <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, DAVote&lt;TYPES&gt;, DACertificate&lt;TYPES&gt;&gt;)&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>Handle a vote event</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#373-375\">source</a><a href=\"#method.filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.filter\" class=\"fn\">filter</a>(event: &amp;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Event filter to use for this event</div></details></div></details>","HandleVoteEvent<TYPES, SimpleVote<TYPES, DAData>, SimpleCertificate<TYPES, DAData, SuccessThreshold>>","hotshot_task_impls::vote::DAVoteState"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+TimeoutData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+TimeoutData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+TimeoutData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+TimeoutData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#379-394\">source</a><a href=\"#impl-HandleVoteEvent%3CTYPES,+SimpleVote%3CTYPES,+TimeoutData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+TimeoutData%3CTYPES%3E,+SuccessThreshold%3E%3E-for-VoteCollectionTaskState%3CTYPES,+SimpleVote%3CTYPES,+TimeoutData%3CTYPES%3E%3E,+SimpleCertificate%3CTYPES,+TimeoutData%3CTYPES%3E,+SuccessThreshold%3E%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TYPES: NodeType&gt; <a class=\"trait\" href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html\" title=\"trait hotshot_task_impls::vote::HandleVoteEvent\">HandleVoteEvent</a>&lt;TYPES, SimpleVote&lt;TYPES, TimeoutData&lt;TYPES&gt;&gt;, SimpleCertificate&lt;TYPES, TimeoutData&lt;TYPES&gt;, SuccessThreshold&gt;&gt; for <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, TimeoutVote&lt;TYPES&gt;, TimeoutCertificate&lt;TYPES&gt;&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.handle_event\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#382-390\">source</a><a href=\"#method.handle_event\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.handle_event\" class=\"fn\">handle_event</a>&lt;'async_trait&gt;(\n    self,\n    event: <a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.75.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = (<a class=\"enum\" href=\"https://doc.rust-lang.org/1.75.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"enum\" href=\"hotshot_task/task/enum.HotShotTaskCompleted.html\" title=\"enum hotshot_task::task::HotShotTaskCompleted\">HotShotTaskCompleted</a>&gt;, <a class=\"struct\" href=\"hotshot_task_impls/vote/struct.VoteCollectionTaskState.html\" title=\"struct hotshot_task_impls::vote::VoteCollectionTaskState\">VoteCollectionTaskState</a>&lt;TYPES, TimeoutVote&lt;TYPES&gt;, TimeoutCertificate&lt;TYPES&gt;&gt;)&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.75.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + 'async_trait&gt;&gt;<span class=\"where fmt-newline\">where\n    Self: 'async_trait,</span></h4></section></summary><div class='docblock'>Handle a vote event</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.filter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_task_impls/vote.rs.html#391-393\">source</a><a href=\"#method.filter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_task_impls/vote/trait.HandleVoteEvent.html#tymethod.filter\" class=\"fn\">filter</a>(event: &amp;<a class=\"enum\" href=\"hotshot_task_impls/events/enum.HotShotEvent.html\" title=\"enum hotshot_task_impls::events::HotShotEvent\">HotShotEvent</a>&lt;TYPES&gt;) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.75.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Event filter to use for this event</div></details></div></details>","HandleVoteEvent<TYPES, SimpleVote<TYPES, TimeoutData<TYPES>>, SimpleCertificate<TYPES, TimeoutData<TYPES>, SuccessThreshold>>","hotshot_task_impls::vote::TimeoutVoteState"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()