---
title: 数字签名
title_en: Digital Signatures
type: domain
domain: d12
---

# 数字签名（Digital Signatures）

> 技术域 d12 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：数字签名：私钥签、公钥验，只有持私钥者能产出、全世界都能验签——提供**不可否认性**。RSA 签名、ECDSA（FIPS 186）、EdDSA 是三大主力；**随机数 k 复用**是签名崩溃的头号原因（k 相同则两条签名泄出私钥）。

**English**: Digital signatures: sign with the private key, verify with the public — only the holder of the private key can produce a valid signature, so it provides **non-repudiation**. RSA signatures, ECDSA (FIPS 186), and EdDSA are the mainstay; **reusing the nonce k** is the number-one reason signatures collapse (same k on two messages leaks the private key).
## 算法 / 协议

### ECDSA 签名（ECDSA）

**中文**：ECDSA 是 FIPS 186 系列的标准签名：私钥 d ∈ [1, n−1]，公钥 Q = d·G；签名时随机数 k 决定 R = k·G（r = R 的 x 坐标）与 s = k⁻¹(e + r·d) mod n。验签只需公钥：算 w、u1、u2，验证 (u1·G + u2·Q) 的 x 坐标 ≡ r。本演示在真实微型曲线 y² = x³ + 2x + 2 mod 17（群阶 19，与国密 SM2 曲线方程同形）上真算全部点乘。

**English**: ECDSA is the standard signature of FIPS 186: private key d ∈ [1, n−1], public key Q = d·G; a random k picks R = k·G (r = x-coordinate of R) and s = k⁻¹(e + r·d) mod n. Verification needs only the public key: recover u1 and u2, check that the x-coordinate of (u1·G + u2·Q) equals r. This demo runs every scalar multiplication for real on the tiny curve y² = x³ + 2x + 2 mod 17 (group order 19 — the same equation shape as the national SM2 curve).

> 体验要点：**中文** 📌 三步体验：① 换私钥看公钥 Q 变化；② 签名（内部随机 k）后验签，再点「随机化重签」看同一消息两次签名完全不同；③ 点「k 复用攻击」——固定 k 签两条不同消息，(s1−s2)⁻¹·(e1−e2) 直接算出 k，私钥 d 随即复原。这就是「随机数 k 是 ECDSA 的安全命门」的来历：2010 年 PS3 固件签名固用 k、2013 年 Bitcoin 钱包 k 复用，都直接丢了私钥。玩具曲线仅供教学（真实曲线 256 位）。 · **English** 📌 Three steps: ① change the private key and watch Q move; ② sign (random k inside) then verify — click "re-sign" to see two signatures of the same message differ completely; ③ click "k-reuse attack": with k fixed across two messages, (s1−s2)⁻¹·(e1−e2) recovers k and the private key falls out. This is why the random k is the security lifeline of ECDSA: PS3 firmware signing in 2010 and a Bitcoin wallet in 2013 both lost keys to a fixed or reused k. Toy curve for teaching only (real curves are 256-bit).

### RSA 数字签名（RSA Signature）

**中文**：RSA 的神来之笔：把加密倒过来用。加密是「公钥锁、私钥开」；签名是「私钥锁、公钥开」——只有持有私钥的人能产出签名，而全世界都能用公钥验证它。走一遍：签名 → 传输中被 Eve 篡改 → 验证当场识破。真实系统先对消息的哈希值签名并加填充（PSS），本演示为看清数学直接签原始小数字。

**English**: RSA's masterstroke: encryption used in reverse. Encryption locks with the public key and opens with the private one; signing locks with the PRIVATE key and opens with the public — only the private-key holder can produce a signature, yet everyone can verify it. Walk the flow: sign → Eve tampers in transit → verification catches it instantly. Real systems sign a hash with padding (PSS); this demo signs raw small numbers to expose the math.
## 术语

### Digital Signature（数字签名）
- 中文：用私钥签名的数据，公钥可验证来源与完整性。
- English: Data signed with a private key, verifiable by anyone with the public key.
- 游戏：`rsa`
- 章节：modern

### Digital Signature Algorithm (DSA)（DSA 数字签名算法）
- 中文：1994 年 NIST 标准化的签名算法，基于离散对数难题、由 ElGamal 签名演化而来；曾是政府与金融系统的标配，如今正被更小更快的 ECDSA 与 EdDSA 取代。
- English: A US federal signature standard from 1994 built on the discrete logarithm problem and derived from ElGamal signatures. Long a government and finance staple, it is giving way to faster ECDSA and EdDSA.
- 游戏：`rsa`
- 章节：modern

### Schnorr Signature（Schnorr 签名）
- 中文：1989 年 Claus Schnorr 提出的签名：短、快，还能把多人的签名线性合并成一把；因专利 2008 年才到期而长期被冷落，比特币 2021 年 Taproot 升级后正式采用。
- English: A signature scheme by Claus Schnorr (1989) that is short, fast, and allows multiple signatures to be linearly combined into one. Blocked by patent until 2008, it was finally adopted by Bitcoin's 2021 Taproot upgrade.
- 游戏：`rsa`
- 章节：modern

### Hash-Based Signatures（哈希签名（基于哈希的签名））
- 中文：只用哈希函数就能造的签名：Lamport 1979 年提出，私钥是一串秘密值、公开其哈希作公钥；不依赖数论难题、天然抗量子。SLH-DSA（FIPS 205，原 SPHINCS+）已入 NIST 后量子标准。缺点：签名大、有状态版只能签有限次。
- English: Signatures built from hash functions alone: Lamport's 1979 scheme publishes hashes of secret values as the public key; no number-theoretic assumptions, naturally quantum-resistant. SLH-DSA (FIPS 205, formerly SPHINCS+) is NIST-standardized for post-quantum use. Drawback: large signatures, and stateful variants sign only a limited number of times.
- 游戏：`pqc-match`
- 章节：modern

### Ring Signature（环签名）
- 中文：一群人里有人签了名，但没人知道具体是谁：签名用「一环」公钥生成，验证者只能确认签名者确实在环内；Monero 用它实现不可追踪的交易。
- English: A signature generated with a 'ring' of public keys that proves the signer belongs to the set without revealing which one. Monero uses ring signatures to make transactions untraceable.
- 游戏：`pqc-match`
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
