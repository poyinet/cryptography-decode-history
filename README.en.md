# cryptography-decode-history · A Knowledge Base of Encryption & Decryption

> An open-source knowledge base of the 3,000-year history of human cryptography, organized as a **three-axis lattice**: every topic is located by **which era × which technical domain × which people/artifacts/machines** and cross-linked.
> Pure Markdown + frontmatter, readable natively on GitHub. Chinese-primary with an English section. Content CC BY 4.0.

## Start Here
**Reading this repo for the first time?** Pick any entry point — each one leads you all the way through:

- 🕰 **Beginner, in order**: [Ancient Origins](02-eras/e01-origins/README.md) → every era page has a "previous / next era" footer, so you can follow the timeline to today → then read [Foundations & Terminology](01-foundations.md).
- 🔍 **Codebreaker route**: read [Cryptanalysis](tech/d07-cryptanalysis.md) first, then study real breaking cases era by era.
- ⚙️ **Expert, direct**: jump to the matching domain under [Axis 2](#axis-2--technical-taxonomy-24-domains) below; each domain cross-links eras and entities.
- 🧩 **Look up a person / artifact / machine**: [People index](people/README.md) (87) · [Artifacts index](artifacts/README.md) (48) · [Machines](machines/README.md) (7), each grouped by era.

## The three axes

### Axis 1 · Chronology (19 chapters, two segments)
Segment A — the age of ciphers (pre-computer, by time period):
- [Ancient Origins (前 500 BCE 前)](02-eras/e01-origins/) — 象形/楔形、结绳、刺青、泥板暗记
- [Classical Greece & Rome (前 500–476 CE)](02-eras/e02-classical/) — scytale、Laconic、凯撒、Atbash、波利比奥斯
- [Byzantine & Early Islamic (476–800)](02-eras/e03-byzantine-islamic/) — 拜占庭宫廷密码、早期阿拉伯
- [Islamic Golden Age (800–1258)](02-eras/e04-arabic-golden-age/) — al-Kindi 频率分析（约 850）
- [Medieval Europe (1258–1450)](02-eras/e05-medieval-europe/) — Trithemius、Ars Magica、首个多表
- [Renaissance & Reformation (1450–1600)](02-eras/e06-renaissance/) — 阿尔贝蒂盘 1467、维吉尼亚 1553、苏格兰玛丽 1586
- [Early Modern & Steganography (1600–1789)](02-eras/e07-early-modern-steganography/) — 培根双字体、卡当格栅、书密码
- [Age of Codebreaking (1789–1914)](02-eras/e08-codebreakers/) — 含电报时代：摩斯、Kasiski、巴贝奇、惠斯通、Vernam 1917

Segment B — the age of algorithms (computer era, by revolution):
- [World War I (1914–1918)](02-eras/e09-ww1/) — ADFGVX、Playfair、早期 Enigma
- [Interwar Period (1918–1939)](02-eras/e10-interwar/) — Enigma 崛起、Typex、波兰数学家首破 Enigma
- [World War II (1939–1945)](02-eras/e11-ww2/) — Enigma/Bombe、M-209、紫密、JN-25、洛伦兹、纳瓦霍
- [Cold War & Information Theory (1945–1975)](02-eras/e12-cold-war-info-theory/) — VENONA、OTP 复用、NSA/GCHQ、香农 1949
- [Public-key Revolution (1976–1990)](02-eras/e13-public-key/) — Diffie-Hellman 1976、RSA 1977、Merkle
- [Age of Standardization (1977–2001)](02-eras/e14-standardization/) — DES、AES、SHA、NIST
- [Web & Protocol Era (1991–2010)](02-eras/e15-web-protocols/) — TLS、PGP、PKI、证书、数字签名
- [Quantum Turn (1984–2019)](02-eras/e16-quantum-turn/) — BB84、Shor、Grover、QKD
- [Post-quantum Era (2016–今)](02-eras/e17-post-quantum/) — NIST PQC、ML-KEM/ML-DSA/SLH-DSA、FIPS 203-205
- [The Frontier (今)](02-eras/e18-frontier/) — 同态、MPC、零知识、Passkey
- [China's Parallel Line (横切)](02-eras/e19-china/) — 反切→红军无线电→国密（SM2/SM3/SM4/ZUC）

### Axis 2 · Technical taxonomy (24 domains)
- [Foundations & Terminology](01-foundations.md)
- [Monoalphabetic Substitution](tech/d02-monoalphabetic.md)
- [Polyalphabetic Substitution](tech/d03-polyalphabetic.md)
- [Transposition](tech/d04-transposition.md)
- [Rotor & Mechanical Ciphers](tech/d05-rotor-mechanical.md)
- [OTP & Stream Ciphers](tech/d06-otp-stream.md)
- [Cryptanalysis](tech/d07-cryptanalysis.md)
- [Symmetric Block Ciphers](tech/d08-block-ciphers.md)
- [Hash Functions](tech/d09-hashes.md)
- [Authentication & AEAD](tech/d10-auth-aead.md)
- [Asymmetric Public-key](tech/d11-asymmetric.md)
- [Digital Signatures](tech/d12-signatures.md)
- [Key Management](tech/d13-key-management.md)
- [Protocols & PKI](tech/d14-protocols-pki.md)
- [Zero-knowledge Proofs](tech/d15-zkp.md)
- [Secret Sharing & MPC](tech/d16-secret-sharing-mpc.md)
- [Side-Channel & Physical Attacks](tech/d17-side-channel.md)
- [Steganography & Info Hiding](tech/d18-steganography.md)
- [Randomness & CSPRNG](tech/d19-randomness.md)
- [China National Cryptography](tech/d20-china-sm.md)
- [Quantum Cryptography](tech/d21-quantum-crypto.md)
- [Post-Quantum](tech/d22-post-quantum.md)
- [Applied Security Engineering](tech/d23-applied-security.md)
- [Theoretical Foundations](tech/d24-theory.md)

### Axis 3 · Entities (people / artifacts / machines / terms / quizzes)
- [People](people/README.md) · 87 (chronological index)
- [Artifacts](artifacts/README.md) · 48
- [Machines](machines/README.md) · 7
- [Quiz](quiz/questions.md) · 252 questions
- [Trivia](facts/facts.md)
- [Quotes](quotes/quotes.md)
- [Timeline](timeline/timeline.md)
- [World Map](map/map.md)
- [China's Cryptography](02-eras/e19-china/china.md)
- [People Relations](relations/relations.md)
- [Easter Eggs](eggs/eggs.md)

## Navigation & cross-references
- **Read the timeline in order**: every era page (`02-eras/eNN-*/README.md`) has a "previous / next era" footer, so you can walk e01→e18 in order; e19 (China's parallel line) is a cross-cut.
- **Domain ⇄ era ⇄ people ⇄ games**: the bottom of each domain page (`tech/dNN-*.md`) has a "related eras / people / games" cross-link block; each era page's "related" section lists in reverse the domains / people / machines / artifacts / games of that era.
- **Look up people / artifacts**: [People index](people/README.md) / [Artifacts index](artifacts/README.md) / [Machines](machines/README.md), grouped by era, with direct name links.

## Status
All content is filled and cross-linked: 19 eras (5 narratives + 12 chapters) × 24 technical domains × entity layers (87 people / 48 artifacts / 7 machines / 282 terms + 252 quiz questions). The data source is poyi.net site data, rendered into this Markdown by the `tools/mdgen/` generators; `gen-all.js` rebuilds everything and `check-mdgen-parity.js` field-by-field equivalence checks all pass.
