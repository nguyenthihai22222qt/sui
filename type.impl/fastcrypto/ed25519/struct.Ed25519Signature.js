(function() {var type_impls = {
"consensus_config":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ToFromBytes-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-ToFromBytes-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ToFromBytes for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_bytes\" class=\"method trait-impl\"><a href=\"#method.from_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">from_bytes</a>(bytes: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Ed25519Signature, FastCryptoError&gt;</h4></section></summary><div class='docblock'>Parse an object from its byte representation</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_bytes\" class=\"method trait-impl\"><a href=\"#method.as_bytes\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">as_bytes</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Borrow a byte slice representing the serialized form of this object</div></details></div></details>","ToFromBytes","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3C%5Bu8%5D%3E-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-AsRef%3C%5Bu8%5D%3E-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>]&gt; for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.u8.html\">u8</a>] <a href=\"#\" class=\"tooltip\" data-notable-ty=\"&amp;[u8]\">ⓘ</a></h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<[u8]>","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Debug-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Default-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; Ed25519Signature</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/1.76.0/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","consensus_config::crypto::NetworkKeySignature"],["<section id=\"impl-Eq-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Eq-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for Ed25519Signature</h3></section>","Eq","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Clone-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; Ed25519Signature</h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/1.76.0/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html\" title=\"trait serde::de::Deserialize\">Deserialize</a>&lt;'de&gt; for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Ed25519Signature, &lt;D as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html#associatedtype.Error\" title=\"type serde::de::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserializer.html\" title=\"trait serde::de::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"https://docs.rs/serde/1.0.190/serde/de/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3C%26BytesRepresentation%3Cfastcrypto::::ed25519::%7Bimpl%2357%7D::%7Bconstant%230%7D%3E%3E-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-TryFrom%3C%26BytesRepresentation%3Cfastcrypto::::ed25519::%7Bimpl%2357%7D::%7Bconstant%230%7D%3E%3E-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;BytesRepresentation&lt;fastcrypto::::ed25519::{impl#57}::{constant#0}&gt;&gt; for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = FastCryptoError</h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(\n    value: &amp;BytesRepresentation&lt;fastcrypto::::ed25519::{impl#57}::try_from::{constant#0}&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Ed25519Signature, &lt;Ed25519Signature as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;BytesRepresentation&lt;fastcrypto::::ed25519::{impl#57}::{constant#0}&gt;&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.76.0/core/convert/trait.TryFrom.html#associatedtype.Error\" title=\"type core::convert::TryFrom::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<&BytesRepresentation<fastcrypto::::ed25519::{impl#57}::{constant#0}>>","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Authenticator-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Authenticator-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Authenticator for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><section id=\"associatedtype.PubKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PubKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">PubKey</a> = Ed25519PublicKey</h4></section><section id=\"associatedtype.PrivKey\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.PrivKey\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">PrivKey</a> = Ed25519PrivateKey</h4></section><section id=\"associatedconstant.LENGTH\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.LENGTH\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">LENGTH</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.usize.html\">usize</a> = 64usize</h4></section></div></details>","Authenticator","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Serialize-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"https://docs.rs/serde/1.0.190/serde/ser/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-PartialEq-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;Ed25519Signature) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/1.76.0/src/core/cmp.rs.html#242\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","consensus_config::crypto::NetworkKeySignature"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Ed25519Signature\" class=\"impl\"><a href=\"#impl-Display-for-Ed25519Signature\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for Ed25519Signature</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.76.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.76.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.76.0/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/1.76.0/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","consensus_config::crypto::NetworkKeySignature"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()