(function() {var implementors = {};
implementors["phaselock"] = [{"text":"impl&lt;T, const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.Leaf.html\" title=\"struct phaselock::data::Leaf\">Leaf</a>&lt;T, N&gt;","synthetic":false,"types":["phaselock::data::Leaf"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.QuorumCertificate.html\" title=\"struct phaselock::data::QuorumCertificate\">QuorumCertificate</a>&lt;N&gt;","synthetic":false,"types":["phaselock::data::QuorumCertificate"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.VecQuorumCertificate.html\" title=\"struct phaselock::data::VecQuorumCertificate\">VecQuorumCertificate</a>","synthetic":false,"types":["phaselock::data::VecQuorumCertificate"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"phaselock/data/enum.Stage.html\" title=\"enum phaselock::data::Stage\">Stage</a>","synthetic":false,"types":["phaselock::data::Stage"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.BlockHash.html\" title=\"struct phaselock::data::BlockHash\">BlockHash</a>&lt;N&gt;","synthetic":false,"types":["phaselock::data::BlockHash"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.LeafHash.html\" title=\"struct phaselock::data::LeafHash\">LeafHash</a>&lt;N&gt;","synthetic":false,"types":["phaselock::data::LeafHash"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.TransactionHash.html\" title=\"struct phaselock::data::TransactionHash\">TransactionHash</a>&lt;N&gt;","synthetic":false,"types":["phaselock::data::TransactionHash"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.VerifyHash.html\" title=\"struct phaselock::data::VerifyHash\">VerifyHash</a>&lt;N&gt;","synthetic":false,"types":["phaselock::data::VerifyHash"]},{"text":"impl&lt;const N:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/data/struct.StateHash.html\" title=\"struct phaselock::data::StateHash\">StateHash</a>&lt;N&gt;","synthetic":false,"types":["phaselock::data::StateHash"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/demos/dentry/struct.Subtraction.html\" title=\"struct phaselock::demos::dentry::Subtraction\">Subtraction</a>","synthetic":false,"types":["phaselock::demos::dentry::Subtraction"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/demos/dentry/struct.Addition.html\" title=\"struct phaselock::demos::dentry::Addition\">Addition</a>","synthetic":false,"types":["phaselock::demos::dentry::Addition"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/demos/dentry/struct.Transaction.html\" title=\"struct phaselock::demos::dentry::Transaction\">Transaction</a>","synthetic":false,"types":["phaselock::demos::dentry::Transaction"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/demos/dentry/struct.State.html\" title=\"struct phaselock::demos::dentry::State\">State</a>","synthetic":false,"types":["phaselock::demos::dentry::State"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/demos/dentry/struct.DEntryBlock.html\" title=\"struct phaselock::demos::dentry::DEntryBlock\">DEntryBlock</a>","synthetic":false,"types":["phaselock::demos::dentry::DEntryBlock"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"phaselock/struct.PubKey.html\" title=\"struct phaselock::PubKey\">PubKey</a>","synthetic":false,"types":["phaselock::PubKey"]}];
implementors["threshold_crypto"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"threshold_crypto/error/enum.Error.html\" title=\"enum threshold_crypto::error::Error\">Error</a>","synthetic":false,"types":["threshold_crypto::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"enum\" href=\"threshold_crypto/error/enum.FromBytesError.html\" title=\"enum threshold_crypto::error::FromBytesError\">FromBytesError</a>","synthetic":false,"types":["threshold_crypto::error::FromBytesError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/poly/struct.Poly.html\" title=\"struct threshold_crypto::poly::Poly\">Poly</a>","synthetic":false,"types":["threshold_crypto::poly::Poly"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/poly/struct.Commitment.html\" title=\"struct threshold_crypto::poly::Commitment\">Commitment</a>","synthetic":false,"types":["threshold_crypto::poly::Commitment"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/poly/struct.BivarCommitment.html\" title=\"struct threshold_crypto::poly::BivarCommitment\">BivarCommitment</a>","synthetic":false,"types":["threshold_crypto::poly::BivarCommitment"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/serde_impl/struct.SerdeSecret.html\" title=\"struct threshold_crypto::serde_impl::SerdeSecret\">SerdeSecret</a>&lt;T&gt;","synthetic":false,"types":["threshold_crypto::serde_impl::SerdeSecret"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.Fr.html\" title=\"struct threshold_crypto::Fr\">Mersenne8</a>","synthetic":false,"types":["threshold_crypto::mock::ms8::Mersenne8"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.G1Affine.html\" title=\"struct threshold_crypto::G1Affine\">Ms8Affine</a>","synthetic":false,"types":["threshold_crypto::mock::Ms8Affine"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.G1.html\" title=\"struct threshold_crypto::G1\">Ms8Projective</a>","synthetic":false,"types":["threshold_crypto::mock::Ms8Projective"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.PublicKey.html\" title=\"struct threshold_crypto::PublicKey\">PublicKey</a>","synthetic":false,"types":["threshold_crypto::PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.PublicKeyShare.html\" title=\"struct threshold_crypto::PublicKeyShare\">PublicKeyShare</a>","synthetic":false,"types":["threshold_crypto::PublicKeyShare"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.Signature.html\" title=\"struct threshold_crypto::Signature\">Signature</a>","synthetic":false,"types":["threshold_crypto::Signature"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.SignatureShare.html\" title=\"struct threshold_crypto::SignatureShare\">SignatureShare</a>","synthetic":false,"types":["threshold_crypto::SignatureShare"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.SecretKey.html\" title=\"struct threshold_crypto::SecretKey\">SecretKey</a>","synthetic":false,"types":["threshold_crypto::SecretKey"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.SecretKeyShare.html\" title=\"struct threshold_crypto::SecretKeyShare\">SecretKeyShare</a>","synthetic":false,"types":["threshold_crypto::SecretKeyShare"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.Ciphertext.html\" title=\"struct threshold_crypto::Ciphertext\">Ciphertext</a>","synthetic":false,"types":["threshold_crypto::Ciphertext"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.DecryptionShare.html\" title=\"struct threshold_crypto::DecryptionShare\">DecryptionShare</a>","synthetic":false,"types":["threshold_crypto::DecryptionShare"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.PublicKeySet.html\" title=\"struct threshold_crypto::PublicKeySet\">PublicKeySet</a>","synthetic":false,"types":["threshold_crypto::PublicKeySet"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"threshold_crypto/struct.SecretKeySet.html\" title=\"struct threshold_crypto::SecretKeySet\">SecretKeySet</a>","synthetic":false,"types":["threshold_crypto::SecretKeySet"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()