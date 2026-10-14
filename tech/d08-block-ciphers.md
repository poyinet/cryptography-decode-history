---
title: 对称分组密码
title_en: Symmetric Block Ciphers
type: domain
domain: d08
---

# 对称分组密码（Symmetric Block Ciphers）

> 技术域 d08 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：对称分组密码：把明文切成定长**块**（通常 128 位），用同一密钥逐块加密（AES/DES）。DES 的 56 位密钥已被暴力破解淘汰，AES 是 2001 年 NIST 选定的 Rijndael，128/192/256 位密钥、128 位分组，是当今事实标准。结构分 **Feistel**（DES）与 **SPN**（AES）两大流派。

**English**: Symmetric block ciphers: cut plaintext into fixed **blocks** (usually 128 bits), encrypt each with the same key (AES/DES). DES’s 56-bit key is broken by brute force; AES, chosen by NIST in 2001, is Rijndael with 128/192/256-bit keys on 128-bit blocks — today’s de facto standard. Structures split into **Feistel** (DES) and **SPN** (AES).
## 算法 / 协议

### 可交互算法（Workshop）

- `des` · **DES（真实引擎）**（DES (real engine)）· 密钥：8 字节密钥（ASCII → PKCS#7） / 8-byte key (ASCII → PKCS#7)，默认 `SECRETKEY`
- `aes` · **AES-128（真实引擎）**（AES-128 (real engine)）· 密钥：16 字节密钥（ASCII → 补零/截断） / 16-byte key (ASCII → pad/truncate)，默认 `AES16BYTEKEY!!!`

## 术语

### Block Cipher（分组密码）
- 中文：把明文切成固定大小的块，每块用同一密钥处理（AES/DES）。
- English: Plaintext is cut into fixed-size blocks, each processed with the same key (AES, DES).
- 游戏：`maker`
- 章节：modern

### Symmetric Key（对称密钥）
- 中文：加密与解密用同一把密钥（如 AES、凯撒）。
- English: One key encrypts and decrypts (AES, Caesar).
- 游戏：`sm4`
- 章节：modern

### AES
- 中文：高级加密标准：2001 年 NIST 选定的对称分组密码（Rijndael），128 位分组、128/192/256 位密钥，取代 DES，是当今应用最广的加密算法。
- English: The Advanced Encryption Standard: a symmetric block cipher (Rijndael) standardized by NIST in 2001, encrypting 128-bit blocks with 128/192/256-bit keys. It replaced DES and is the de facto standard of modern encryption.
- 游戏：`sm4`
- 章节：modern

### Data Encryption Standard (DES)（数据加密标准）
- 中文：数据加密标准。IBM 于 1970 年代设计的对称分组密码，56 位密钥、64 位分组，曾主导商用加密数十年；因密钥过短易被暴力破解，现已被 AES 取代。
- English: A symmetric block cipher developed by IBM in the 1970s that became the first standardized encryption algorithm. Using a 56-bit key on 64-bit blocks, it dominated commercial encryption for decades but is now obsolete due to brute-force vulnerability.
- 游戏：`sm4`
- 章节：modern

### Feistel Network（费斯妥网络）
- 中文：费斯妥网络。一种分组密码结构：数据分左右两半，每轮用轮函数处理一半并与另一半异或后交换；解密只需反向执行、无需逆函数，DES 是典型代表。
- English: A structure for building block ciphers in which data is split into halves and each round applies a keyed function to one half, XORs the result into the other, then swaps them. Decryption reuses the same operations in reverse order, so the round function need not be invertible; DES is the classic example.
- 游戏：`sm4`
- 章节：modern

### Substitution-Permutation Network (SPN)（代换-置换网络）
- 中文：代换-置换网络。现代分组密码的通用结构：多轮交替执行代换层（S 盒打乱字节）与置换层（P 层扩散比特），兼顾混淆与扩散，AES 即采用此结构。
- English: The dominant modern block-cipher construction, alternating substitution layers (S-boxes) that scramble bytes with permutation layers that spread bits across the block. Repeating these rounds achieves both confusion and diffusion; AES is the canonical SPN cipher.
- 游戏：`sm4`
- 章节：modern

### Symmetric Cryptography（对称密码）
- 中文：对称密码。加密与解密使用同一把密钥的体制，速度快、适合大量数据；但密钥须通过安全渠道事先共享，典型算法有 AES、ChaCha20。
- English: A cryptosystem in which encryption and decryption use the same secret key. It is fast and suitable for bulk data, but requires the key to be shared securely beforehand; AES and ChaCha20 are typical examples.
- 游戏：`sm4`
- 章节：modern

### Block Cipher Mode (ECB/CBC/GCM)（分组密码工作模式）
- 中文：分组密码工作模式。规定如何用分组加密处理长数据：ECB 各块独立加密但泄露模式，CBC 逐块链接并需 IV，GCM 同时提供加密与认证，推荐使用。
- English: Rules for encrypting data longer than one block with a block cipher. ECB encrypts blocks independently but leaks patterns; CBC chains blocks with an IV; GCM combines encryption with authentication and is the recommended modern choice.
- 游戏：`block-modes`
- 章节：modern

### Cipher Block Chaining (CBC)（CBC 分组模式）
- 中文：每个明文块先与上一块密文异或再加密，让重复的明文块也产出不同的密文；需要不可预测的 IV、解密必须按顺序来，曾是使用最广的分组模式。
- English: A block-cipher mode that XORs each plaintext block with the previous ciphertext block before encrypting, hiding repeating patterns. It needs an unpredictable IV, processes blocks in sequence, and was the classic default.
- 游戏：`sm4`
- 章节：modern

### Counter Mode (CTR)（CTR 计数器模式）
- 中文：把递增的计数器加密后与明文异或，把分组密码变成流密码；各块完全独立、可并行处理，还能任意位置直接解密，流式传输与磁盘加密都爱它。
- English: A mode that encrypts an incrementing counter and XORs it with plaintext, turning a block cipher into a stream cipher. Blocks are independent and parallelizable, and any position decrypts directly.
- 游戏：`sm4`
- 章节：modern

### Galois/Counter Mode (GCM)（GCM 认证加密模式）
- 中文：CTR 加密与 Galois 域乘法认证的组合体，一次运算同时搞定机密性与完整性（AEAD）；TLS 1.2/1.3 的默认配置，现代互联网加密的标配。
- English: An AEAD mode pairing CTR encryption with Galois-field multiplication for authentication, delivering confidentiality and integrity in one pass. It is the default choice in TLS 1.2 and TLS 1.3.
- 游戏：`block-modes`
- 章节：modern

### 3DES (Triple DES)（三重 DES）
- 中文：对同一数据用 DES 加密三次（E-D-E），有效密钥 112 位。DES 到 AES 的过渡桥梁，2023 年 NIST 正式废弃。
- English: DES applied three times (E-D-E) with an effective 112-bit key. The bridge from DES to AES, deprecated by NIST in 2023.
- 游戏：`sm4`
- 章节：modern

### Blowfish / Twofish（Blowfish 与 Twofish）
- 中文：Bruce Schneier 设计的两代分组密码：Blowfish（1993）快速免费，Twofish（1998）AES 决赛入围。均未被攻破但未成为标准。
- English: Bruce Schneier's two block ciphers: Blowfish (1993) fast and free, Twofish (1998) an AES finalist. Neither broken, neither standard.
- 游戏：`sm4`
- 章节：modern

### Camellia
- 中文：日本三菱与 NTT 联合设计的 128 位分组密码，2005 年入选 ISO/IEC 标准，安全性等同 AES。
- English: A 128-bit block cipher by Mitsubishi and NTT, standardized as ISO/IEC 18033-3 in 2005. Security equivalent to AES.
- 游戏：`sm4`
- 章节：modern

### Key Schedule（密钥扩展算法）
- 中文：从主密钥派生各轮轮密钥的过程（如 AES 的 RotWord/SubWord/Rcon）。设计目标：主密钥任一比特变化影响所有轮钥、且无法从单个轮钥反推主密钥。
- English: The routine deriving per-round keys from the master key (AES uses RotWord/SubWord/Rcon). A good schedule makes every master bit influence all round keys and prevents reversing them.
- 游戏：`aes-lab`
- 章节：modern

### Feistel vs SPN (Confusion vs Diffusion)（混淆 vs 扩散）
- 中文：混淆：让密钥与明文字面关系复杂化（S 盒）；扩散：让每个明文字节影响整个输出（位移与列混合）。香农定义的这两个变化量是一切成块密码的结构宪法——AES 的每轮都是它们的精刻。
- English: Confusion makes key-to-ciphertext relations opaque (S-boxes); diffusion spreads every plaintext bit across the whole block (shifts and mixing). Shannon's two properties are the constitution of every block cipher.
- 游戏：`sm4`
- 章节：modern

### Padding（填充（Padding））
- 中文：把明文对齐到分组大小的填充字节；CBC 对填充错误的区别反应可构成填充预言攻击（Bleichenbacher），因此 AEAD 时代普遍改用无需填充的 CTR/GCM 路线。
- English: Bytes aligning plaintext to a block size; CBC's distinct reactions to padding errors enable the padding-oracle attack (Bleichenbacher), which is why the AEAD era moved to padding-free CTR/GCM.
- 游戏：`aes-lab`
- 章节：modern

### KASUMI
- 中文：3G 移动通信的标准分组密码（基于 MILENAGE 框架）：64 位分组、128 位密钥、Feistel 结构——WCDMA 网络加密与完整性保护的基础算法。
- English: The 3G standard block cipher (inside the MILENAGE framework): 64-bit blocks, 128-bit keys, Feistel structure — the base of WCDMA confidentiality and integrity.
- 章节：modern

### RC6
- 中文：Rivest 等人 1998 年提交 AES 竞标的候选算法：数据依赖循环移位让每轮运算与密钥/数据耦合，最终惜败于 Rijndael——但它的设计思想影响了后续分组密码多样性。
- English: Rivest's 1998 AES candidate: data-dependent rotations couple each round to the data itself. It lost to Rijndael but its ideas shaped block-cipher diversity.
- 章节：modern

### CFB/OFB 模式
- 中文：把分组密码变成流密码的两种模式：CFB 用密文反馈加密，OFB 用输出反馈——都能逐比特/逐字节处理且无需填充；代价是错误传播（CFB）与不支持并行（OFB）。
- English: Two modes that turn a block cipher into a stream cipher: ciphertext feedback (CFB) and output feedback (OFB) — bit/byte granular, no padding; trade-offs are error propagation (CFB) and no parallelism (OFB).
- 游戏：`aes-lab`
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
