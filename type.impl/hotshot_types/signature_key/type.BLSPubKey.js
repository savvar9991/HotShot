(function() {var type_impls = {
"hotshot_types":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-SignatureKey-for-VerKey\" class=\"impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#31-127\">source</a><a href=\"#impl-SignatureKey-for-VerKey\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html\" title=\"trait hotshot_types::traits::signature_key::SignatureKey\">SignatureKey</a> for <a class=\"type\" href=\"hotshot_types/signature_key/type.BLSPubKey.html\" title=\"type hotshot_types::signature_key::BLSPubKey\">BLSPubKey</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.PrivateKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PrivateKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PrivateKey\" class=\"associatedtype\">PrivateKey</a> = SignKey</h4></section></summary><div class='docblock'>The private key type for this signature algorithm</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.StakeTableEntry\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.StakeTableEntry\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.StakeTableEntry\" class=\"associatedtype\">StakeTableEntry</a> = <a class=\"struct\" href=\"hotshot_types/stake_table/struct.StakeTableEntry.html\" title=\"struct hotshot_types::stake_table::StakeTableEntry\">StakeTableEntry</a>&lt;VerKey&gt;</h4></section></summary><div class='docblock'>The type of the entry that contain both public key and stake value</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.QCParams\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.QCParams\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCParams\" class=\"associatedtype\">QCParams</a> = <a class=\"struct\" href=\"hotshot_types/qc/struct.QCParams.html\" title=\"struct hotshot_types::qc::QCParams\">QCParams</a>&lt;VerKey, &lt;BLSOverBN254CurveSignatureScheme as SignatureScheme&gt;::PublicParameter&gt;</h4></section></summary><div class='docblock'>The type of the quorum certificate parameters used for assembled signature</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.PureAssembledSignatureType\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PureAssembledSignatureType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PureAssembledSignatureType\" class=\"associatedtype\">PureAssembledSignatureType</a> = &lt;BLSOverBN254CurveSignatureScheme as SignatureScheme&gt;::Signature</h4></section></summary><div class='docblock'>The type of the assembled signature, without <code>BitVec</code></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.QCType\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.QCType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCType\" class=\"associatedtype\">QCType</a> = (&lt;VerKey as <a class=\"trait\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html\" title=\"trait hotshot_types::traits::signature_key::SignatureKey\">SignatureKey</a>&gt;::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PureAssembledSignatureType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PureAssembledSignatureType\">PureAssembledSignatureType</a>, BitVec)</h4></section></summary><div class='docblock'>The type of the assembled qc: assembled signature + <code>BitVec</code></div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.SignError\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.SignError\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.SignError\" class=\"associatedtype\">SignError</a> = SignatureError</h4></section></summary><div class='docblock'>Type of error that can occur when signing data</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.validate\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#41\">source</a><a href=\"#method.validate\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.validate\" class=\"fn\">validate</a>(\n    &amp;self,\n    signature: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PureAssembledSignatureType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PureAssembledSignatureType\">PureAssembledSignatureType</a>,\n    data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Validate a signature</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.sign\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#47-57\">source</a><a href=\"#method.sign\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.sign\" class=\"fn\">sign</a>(\n    sk: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PrivateKey\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PrivateKey\">PrivateKey</a>,\n    data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PureAssembledSignatureType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PureAssembledSignatureType\">PureAssembledSignatureType</a>, Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.SignError\" title=\"type hotshot_types::traits::signature_key::SignatureKey::SignError\">SignError</a>&gt;</h4></section></summary><div class='docblock'>Produce a signature <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.sign\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_private\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#59-61\">source</a><a href=\"#method.from_private\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.from_private\" class=\"fn\">from_private</a>(private_key: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PrivateKey\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PrivateKey\">PrivateKey</a>) -&gt; Self</h4></section></summary><div class='docblock'>Produce a public key from a private key</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#63-68\">source</a><a href=\"#method.to_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.to_bytes\" class=\"fn\">to_bytes</a>(&amp;self) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>&gt; <a href=\"#\" class=\"tooltip\" data-notable-ty=\"Vec&lt;u8&gt;\">ⓘ</a></h4></section></summary><div class='docblock'>Serialize a public key to bytes</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#70-72\">source</a><a href=\"#method.from_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.from_bytes\" class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.78.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, SerializationError&gt;</h4></section></summary><div class='docblock'>Deserialize a public key from bytes <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.from_bytes\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.generated_from_seed_indexed\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#74-81\">source</a><a href=\"#method.generated_from_seed_indexed\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.generated_from_seed_indexed\" class=\"fn\">generated_from_seed_indexed</a>(\n    seed: [<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.array.html\">32</a>],\n    index: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>\n) -&gt; (Self, Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PrivateKey\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PrivateKey\">PrivateKey</a>)</h4></section></summary><div class='docblock'>Generate a new key pair</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_stake_table_entry\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#83-88\">source</a><a href=\"#method.get_stake_table_entry\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.get_stake_table_entry\" class=\"fn\">get_stake_table_entry</a>(&amp;self, stake: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u64.html\">u64</a>) -&gt; Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot_types::traits::signature_key::SignatureKey::StakeTableEntry\">StakeTableEntry</a></h4></section></summary><div class='docblock'>get the stake table entry from the public key and stake value</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_public_key\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#90-92\">source</a><a href=\"#method.get_public_key\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.get_public_key\" class=\"fn\">get_public_key</a>(entry: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot_types::traits::signature_key::SignatureKey::StakeTableEntry\">StakeTableEntry</a>) -&gt; Self</h4></section></summary><div class='docblock'>only get the public key from the stake table entry</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_public_parameter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#94-103\">source</a><a href=\"#method.get_public_parameter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.get_public_parameter\" class=\"fn\">get_public_parameter</a>(\n    stake_entries: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.78.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.StakeTableEntry\" title=\"type hotshot_types::traits::signature_key::SignatureKey::StakeTableEntry\">StakeTableEntry</a>&gt;,\n    threshold: U256\n) -&gt; Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCParams\" title=\"type hotshot_types::traits::signature_key::SignatureKey::QCParams\">QCParams</a></h4></section></summary><div class='docblock'>get the public parameter for the assembled signature checking</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.check\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#105-108\">source</a><a href=\"#method.check\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.check\" class=\"fn\">check</a>(real_qc_pp: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCParams\" title=\"type hotshot_types::traits::signature_key::SignatureKey::QCParams\">QCParams</a>, data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.u8.html\">u8</a>], qc: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::QCType\">QCType</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.78.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>check the quorum certificate for the assembled signature</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_sig_proof\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#110-112\">source</a><a href=\"#method.get_sig_proof\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.get_sig_proof\" class=\"fn\">get_sig_proof</a>(\n    signature: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::QCType\">QCType</a>\n) -&gt; (Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PureAssembledSignatureType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PureAssembledSignatureType\">PureAssembledSignatureType</a>, BitVec)</h4></section></summary><div class='docblock'>get the assembled signature and the <code>BitVec</code> separately from the assembled signature</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.assemble\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#114-121\">source</a><a href=\"#method.assemble\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.assemble\" class=\"fn\">assemble</a>(\n    real_qc_pp: &amp;Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCParams\" title=\"type hotshot_types::traits::signature_key::SignatureKey::QCParams\">QCParams</a>,\n    signers: &amp;BitSlice,\n    sigs: &amp;[Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.PureAssembledSignatureType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::PureAssembledSignatureType\">PureAssembledSignatureType</a>]\n) -&gt; Self::<a class=\"associatedtype\" href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#associatedtype.QCType\" title=\"type hotshot_types::traits::signature_key::SignatureKey::QCType\">QCType</a></h4></section></summary><div class='docblock'>assemble the signature from the partial signature and the indication of signers in <code>BitVec</code></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.genesis_proposer_pk\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/hotshot_types/signature_key.rs.html#123-126\">source</a><a href=\"#method.genesis_proposer_pk\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"hotshot_types/traits/signature_key/trait.SignatureKey.html#tymethod.genesis_proposer_pk\" class=\"fn\">genesis_proposer_pk</a>() -&gt; Self</h4></section></summary><div class='docblock'>generates the genesis public key. Meant to be dummy/filler</div></details></div></details>","SignatureKey","hotshot_types::signature_key::BuilderKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()