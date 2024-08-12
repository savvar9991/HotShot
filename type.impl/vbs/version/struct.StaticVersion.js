(function() {var type_impls = {
"hotshot_builder_api":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Clone-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; StaticVersion&lt;MAJOR, MINOR&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_builder_api::v0_1::Version","hotshot_builder_api::v0_2::Version","hotshot_builder_api::v0_3::Version"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Debug-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_builder_api::v0_1::Version","hotshot_builder_api::v0_2::Version","hotshot_builder_api::v0_3::Version"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Display-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(\n    &amp;self,\n    _derive_more_display_formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hotshot_builder_api::v0_1::Version","hotshot_builder_api::v0_2::Version","hotshot_builder_api::v0_3::Version"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StaticVersionType-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-StaticVersionType-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; StaticVersionType for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.MAJOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MAJOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">MAJOR</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a> = MAJOR</h4></section><section id=\"associatedconstant.MINOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MINOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">MINOR</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a> = MINOR</h4></section><section id=\"method.version\" class=\"method trait-impl\"><a href=\"#method.version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">version</a>() -&gt; Version</h4></section><section id=\"method.instance\" class=\"method trait-impl\"><a href=\"#method.instance\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">instance</a>() -&gt; StaticVersion&lt;MAJOR, MINOR&gt;</h4></section><section id=\"associatedconstant.VERSION\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.VERSION\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">VERSION</a>: Version = _</h4></section></div></details>","StaticVersionType","hotshot_builder_api::v0_1::Version","hotshot_builder_api::v0_2::Version","hotshot_builder_api::v0_3::Version"],["<section id=\"impl-Copy-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Copy-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section>","Copy","hotshot_builder_api::v0_1::Version","hotshot_builder_api::v0_2::Version","hotshot_builder_api::v0_3::Version"]],
"hotshot_orchestrator":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Clone-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; StaticVersion&lt;MAJOR, MINOR&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_orchestrator::OrchestratorVersion"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Debug-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_orchestrator::OrchestratorVersion"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Display-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(\n    &amp;self,\n    _derive_more_display_formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hotshot_orchestrator::OrchestratorVersion"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StaticVersionType-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-StaticVersionType-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; StaticVersionType for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.MAJOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MAJOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">MAJOR</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a> = MAJOR</h4></section><section id=\"associatedconstant.MINOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MINOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">MINOR</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a> = MINOR</h4></section><section id=\"method.version\" class=\"method trait-impl\"><a href=\"#method.version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">version</a>() -&gt; Version</h4></section><section id=\"method.instance\" class=\"method trait-impl\"><a href=\"#method.instance\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">instance</a>() -&gt; StaticVersion&lt;MAJOR, MINOR&gt;</h4></section><section id=\"associatedconstant.VERSION\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.VERSION\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">VERSION</a>: Version = _</h4></section></div></details>","StaticVersionType","hotshot_orchestrator::OrchestratorVersion"],["<section id=\"impl-Copy-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Copy-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section>","Copy","hotshot_orchestrator::OrchestratorVersion"]],
"hotshot_task_impls":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Clone-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; StaticVersion&lt;MAJOR, MINOR&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.78.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.78.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","hotshot_task_impls::builder::v0_1::Version","hotshot_task_impls::builder::v0_2::Version","hotshot_task_impls::builder::v0_3::Version"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Debug-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","hotshot_task_impls::builder::v0_1::Version","hotshot_task_impls::builder::v0_2::Version","hotshot_task_impls::builder::v0_3::Version"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Display-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(\n    &amp;self,\n    _derive_more_display_formatter: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.78.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","hotshot_task_impls::builder::v0_1::Version","hotshot_task_impls::builder::v0_2::Version","hotshot_task_impls::builder::v0_3::Version"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-StaticVersionType-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-StaticVersionType-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; StaticVersionType for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section></summary><div class=\"impl-items\"><section id=\"associatedconstant.MAJOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MAJOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">MAJOR</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a> = MAJOR</h4></section><section id=\"associatedconstant.MINOR\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.MINOR\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">MINOR</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a> = MINOR</h4></section><section id=\"method.version\" class=\"method trait-impl\"><a href=\"#method.version\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">version</a>() -&gt; Version</h4></section><section id=\"method.instance\" class=\"method trait-impl\"><a href=\"#method.instance\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">instance</a>() -&gt; StaticVersion&lt;MAJOR, MINOR&gt;</h4></section><section id=\"associatedconstant.VERSION\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.VERSION\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">VERSION</a>: Version = _</h4></section></div></details>","StaticVersionType","hotshot_task_impls::builder::v0_1::Version","hotshot_task_impls::builder::v0_2::Version","hotshot_task_impls::builder::v0_3::Version"],["<section id=\"impl-Copy-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"impl\"><a href=\"#impl-Copy-for-StaticVersion%3CMAJOR,+MINOR%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;const MAJOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>, const MINOR: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u16.html\">u16</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.78.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for StaticVersion&lt;MAJOR, MINOR&gt;</h3></section>","Copy","hotshot_task_impls::builder::v0_1::Version","hotshot_task_impls::builder::v0_2::Version","hotshot_task_impls::builder::v0_3::Version"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()