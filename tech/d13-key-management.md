---
title: 密钥管理
title_en: Key Management
type: domain
domain: d13
---

# 密钥管理（Key Management）

> 技术域 d13 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：密钥管理：密钥不是「生成好就完事」，**生成、分发、轮换、撤销、恢复、审计**六件事缺一不可。哈希链一次性口令（Lamport）、口令哈希（argon2）、密钥指纹是日常运维的三件套。再强的算法，密钥管理一旦出错全盘皆输。

**English**: Key management: a key is never "generate and done" — **generation, distribution, rotation, revocation, recovery, and audit** are all mandatory. Hash-chain one-time passwords (Lamport), password hashing (argon2), and key fingerprints are the daily three-piece set. Even the strongest algorithm loses everything if key management fails.
## 算法 / 协议

### 哈希链（一次性口令）（Hash Chain (OTP)）

**中文**：1981 年 Leslie Lamport 提出用哈希链做一次性口令：服务器只存链顶值，用户每次出示上一环，服务器验证 H(上一环) = 当前持有值后向前推进一格。每一环都不同，密钥从不重复；截获任何一环只能用到一次，且无法倒推出下一环（单向性）。本演示运行真实迭代哈希——玩具 32 位仅供教学，真实为 256 位。

**English**: In 1981 Leslie Lamport proposed one-time passwords from a hash chain: the server keeps only the top of the chain; each time the user reveals the previous link, the server checks H(prev) = current and advances one step. Every link is unique, so no key is ever reused; intercepting any link buys exactly one use, never the next (one-wayness). This demo runs real iterated hashing — a toy 32-bit function for teaching, 256 bits in reality.

> 体验要点：**中文** 📌 一轮交互里看三件事：① 按顺序出示的每一环都一次通过；② 重放已用过的值立刻被拒（H(x) 永远不是 x）；③ 改一个字符再出示，哈希天翻地覆——服务器直接拒绝。安全根基：单向性。现代替代是 HOTP/TOTP（RFC 4226/6238）：HMAC 把「计数/时间」变成一次性密钥，服务器只需保存共享密钥、无需存链。Lamport 链今天仍活在证书透明性（RFC 6962 的 Merkle 树即哈希链树）与时间戳链一类场合。 · **English** 📌 Watch three things in one round: ① each link in order is accepted; ② replaying a used value is rejected instantly (H(x) is never x); ③ changing one character scrambles the hash — rejected. Root of security: one-wayness. Modern replacements are HOTP/TOTP (RFC 4226/6238): HMAC turns a counter/time into a one-time key, so the server keeps a shared key instead of a chain. Lamport chains still live in certificate transparency (RFC 6962 Merkle trees are hash-chain trees) and timestamp chains.
## 术语

### Initialization Vector (IV)（初始化向量）
- 中文：初始化向量。分组密码在 CBC 等链式模式下使用的随机起始值；不保密但须不可预测，确保相同明文在不同加密中产生不同密文。
- English: A random initial value used by block ciphers in chaining modes such as CBC. Unlike the key it need not be secret, but it must be unpredictable, ensuring that identical plaintexts encrypt to different ciphertexts each time.
- 游戏：`sm4`
- 章节：modern

### Key Length（密钥长度）
- 中文：以比特为单位衡量的密钥长度，直接决定密钥空间的大小；现代密码学认为 128 位以上的密钥足以抵御穷举攻击，是评估算法安全性的核心指标。
- English: Key length is the size of a cryptographic key, measured in bits, and it directly determines the size of the key space and thus resistance to brute-force attack. Modern standards treat keys of 128 bits or longer as computationally infeasible to exhaust, making key length a primary security metric.
- 游戏：`sm4`
- 章节：modern

### Key Space（密钥空间）
- 中文：某一加密算法所有可能密钥构成的完整集合，其大小由密钥长度决定；密钥空间越大，攻击者穷举所有密钥所需的时间就越长，算法就越安全。
- English: The key space is the complete set of all possible keys that a cipher can use, and its size is determined by the key length. A larger key space forces an attacker to spend exponentially more time trying every possibility, making the cipher more resistant to brute-force attacks.
- 游戏：`caesar`
- 章节：caesar

### Key Derivation Function (KDF)（密钥派生函数）
- 中文：把弱口令、共享秘密或随机种子加工成合格密钥的工序，比如把「密码 + 盐」拉伸成 256 位 AES 密钥；熵不够的材料想变成密钥，全靠它把关。
- English: A function that turns weak material—passwords, shared secrets, random seeds—into properly sized keys, e.g. stretching a password plus salt into a 256-bit AES key. It upgrades low-entropy input into usable key material.
- 游戏：`hashlab`
- 章节：modern

### bcrypt
- 中文：1999 年基于 Blowfish 分组密码的慢速口令哈希，故意设计成「算得慢」并内置盐，把暴力破解拖到天荒地老；Unix 系系统与众多 Web 框架沿用至今。
- English: A 1999 password hash built on the Blowfish cipher, deliberately slow and with built-in salting to stall brute force. It remains the default in many Unix systems and web frameworks.
- 游戏：`hashlab`
- 章节：modern

### Argon2
- 中文：2015 年密码哈希竞赛冠军，靠「吃内存 + 费 CPU」双重成本拖慢破解；主要变体有抗侧信道的 Argon2i 和通用推荐的 Argon2id。
- English: Winner of the 2015 Password Hashing Competition; it forces attackers to pay in memory and CPU. Argon2i resists side channels, while Argon2id—the recommended default—combines both strengths.
- 游戏：`hashlab`
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
