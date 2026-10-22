---
title: 对称分组密码
title_en: Symmetric Block Ciphers
type: domain
domain: d08
---

# 对称分组密码（Symmetric Block Ciphers）

> 技术域 d08

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
- 为什么重要：固定块（如 16 字节）一次性变换，是对称密码的主力。
- 现实哪里用：AES、DES 都是分组密码。
- 怎么被破：算法可破（DES 已被穷举）或工作模式用错。
- 游戏：`maker`
- 章节：modern

### Symmetric Key（对称密钥）
- 中文：加密与解密用同一把密钥（如 AES、凯撒）。
- English: One key encrypts and decrypts (AES, Caesar).
- 为什么重要：加密解密用同一把钥匙，是对称密码的核心。
- 现实哪里用：AES、磁盘加密、TLS 会话。
- 怎么被破：密钥必须保密，泄露即破；密钥分发难。
- 游戏：`sm4`
- 章节：modern

### AES
- 中文：高级加密标准：2001 年 NIST 选定的对称分组密码（Rijndael），128 位分组、128/192/256 位密钥，取代 DES，是当今应用最广的加密算法。
- English: The Advanced Encryption Standard: a symmetric block cipher (Rijndael) standardized by NIST in 2001, encrypting 128-bit blocks with 128/192/256-bit keys. It replaced DES and is the de facto standard of modern encryption.
- 为什么重要：2001 年征集出的分组密码，是当今世界标准。
- 现实哪里用：磁盘加密、TLS、比特币。
- 怎么被破：至今无数学破法，弱点在工作模式或实现。
- 游戏：`sm4`
- 章节：modern

### Data Encryption Standard (DES)（数据加密标准）
- 中文：数据加密标准。IBM 于 1970 年代设计的对称分组密码，56 位密钥、64 位分组，曾主导商用加密数十年；因密钥过短易被暴力破解，现已被 AES 取代。
- English: A symmetric block cipher developed by IBM in the 1970s that became the first standardized encryption algorithm. Using a 56-bit key on 64-bit blocks, it dominated commercial encryption for decades but is now obsolete due to brute-force vulnerability.
- 为什么重要：1977 年首个联邦标准分组密码，56 位密钥。
- 现实哪里用：曾经的银行与金融系统。
- 怎么被破：56 位密钥 1998 年被穷举打穿，催生 AES。
- 游戏：`sm4`
- 章节：modern

### Feistel Network（费斯妥网络）
- 中文：费斯妥网络。一种分组密码结构：数据分左右两半，每轮用轮函数处理一半并与另一半异或后交换；解密只需反向执行、无需逆函数，DES 是典型代表。
- English: A structure for building block ciphers in which data is split into halves and each round applies a keyed function to one half, XORs the result into the other, then swaps them. Decryption reuses the same operations in reverse order, so the round function need not be invertible; DES is the classic example.
- 为什么重要：把加密拆成"一半替换一半置换"的结构，是 DES 的骨架。
- 现实哪里用：DES、3DES。
- 怎么被破：结构本身不弱，弱的是轮数或子密钥。
- 游戏：`sm4`
- 章节：modern

### Substitution-Permutation Network (SPN)（代换-置换网络）
- 中文：代换-置换网络。现代分组密码的通用结构：多轮交替执行代换层（S 盒打乱字节）与置换层（P 层扩散比特），兼顾混淆与扩散，AES 即采用此结构。
- English: The dominant modern block-cipher construction, alternating substitution layers (S-boxes) that scramble bytes with permutation layers that spread bits across the block. Repeating these rounds achieves both confusion and diffusion; AES is the canonical SPN cipher.
- 为什么重要："替换+置换"反复叠加，是 AES 的骨架。
- 现实哪里用：AES、Camellia。
- 怎么被破：结构与轮数设计不当会被差分/线性分析破。
- 游戏：`sm4`
- 章节：modern

### Symmetric Cryptography（对称密码）
- 中文：对称密码。加密与解密使用同一把密钥的体制，速度快、适合大量数据；但密钥须通过安全渠道事先共享，典型算法有 AES、ChaCha20。
- English: A cryptosystem in which encryption and decryption use the same secret key. It is fast and suitable for bulk data, but requires the key to be shared securely beforehand; AES and ChaCha20 are typical examples.
- 为什么重要：双方共享同一密钥的整个体系，即对称密码学。
- 现实哪里用：绝大多数日常加密。
- 怎么被破：密钥分发与保护是它最大的软肋。
- 游戏：`sm4`
- 章节：modern

### Block Cipher Mode (ECB/CBC/GCM)（分组密码工作模式）
- 中文：分组密码工作模式。规定如何用分组加密处理长数据：ECB 各块独立加密但泄露模式，CBC 逐块链接并需 IV，GCM 同时提供加密与认证，推荐使用。
- English: Rules for encrypting data longer than one block with a block cipher. ECB encrypts blocks independently but leaks patterns; CBC chains blocks with an IV; GCM combines encryption with authentication and is the recommended modern choice.
- 为什么重要：分组密码"怎么用"（工作模式）决定安全与否。
- 现实哪里用：所有分组密码的实际使用。
- 怎么被破：ECB 暴露块结构，用错模式即破。
- 游戏：`block-modes`
- 章节：modern

### Cipher Block Chaining (CBC)（CBC 分组模式）
- 中文：每个明文块先与上一块密文异或再加密，让重复的明文块也产出不同的密文；需要不可预测的 IV、解密必须按顺序来，曾是使用最广的分组模式。
- English: A block-cipher mode that XORs each plaintext block with the previous ciphertext block before encrypting, hiding repeating patterns. It needs an unpredictable IV, processes blocks in sequence, and was the classic default.
- 为什么重要：每个块与前一密文异或再加密，掩盖块重复。
- 现实哪里用：早期 TLS、磁盘加密。
- 怎么被破：需配 MAC，填充预言攻击可破。
- 游戏：`sm4`
- 章节：modern

### Counter Mode (CTR)（CTR 计数器模式）
- 中文：把递增的计数器加密后与明文异或，把分组密码变成流密码；各块完全独立、可并行处理，还能任意位置直接解密，流式传输与磁盘加密都爱它。
- English: A mode that encrypts an incrementing counter and XORs it with plaintext, turning a block cipher into a stream cipher. Blocks are independent and parallelizable, and any position decrypts directly.
- 为什么重要：用计数器生成密钥流，把分组密码变流密码。
- 现实哪里用：AES-CTR、硬件加密。
- 怎么被破：计数器绝不能重用，重用即流密码破。
- 游戏：`sm4`
- 章节：modern

### Galois/Counter Mode (GCM)（GCM 认证加密模式）
- 中文：CTR 加密与 Galois 域乘法认证的组合体，一次运算同时搞定机密性与完整性（AEAD）；TLS 1.2/1.3 的默认配置，现代互联网加密的标配。
- English: An AEAD mode pairing CTR encryption with Galois-field multiplication for authentication, delivering confidentiality and integrity in one pass. It is the default choice in TLS 1.2 and TLS 1.3.
- 为什么重要：CTR 加密 + GHASH 认证，一步到位的 AEAD。
- 现实哪里用：TLS、AES-GCM。
- 怎么被破：计数器重用会同时破坏机密性与完整性。
- 游戏：`block-modes`
- 章节：modern

### 3DES (Triple DES)（三重 DES）
- 中文：对同一数据用 DES 加密三次（E-D-E），有效密钥 112 位。DES 到 AES 的过渡桥梁，2023 年 NIST 正式废弃。
- English: DES applied three times (E-D-E) with an effective 112-bit key. The bridge from DES to AES, deprecated by NIST in 2023.
- 为什么重要：DES 跑三遍把密钥加到 112 位，是过渡方案。
- 现实哪里用：曾用于银行与银行卡。
- 怎么被破：生日攻击（碰撞）只需 2^64 即破。
- 游戏：`sm4`
- 章节：modern

### Blowfish / Twofish（Blowfish 与 Twofish）
- 中文：Bruce Schneier 设计的两代分组密码：Blowfish（1993）快速免费，Twofish（1998）AES 决赛入围。均未被攻破但未成为标准。
- English: Bruce Schneier's two block ciphers: Blowfish (1993) fast and free, Twofish (1998) an AES finalist. Neither broken, neither standard.
- 为什么重要：开放征集的分组密码，密钥可变长。
- 现实哪里用：Blowfish 曾广泛使用，Twofish 是 AES 亚军。
- 怎么被破：无已知数学破法，密钥管理仍是软肋。
- 游戏：`sm4`
- 章节：modern

### Camellia
- 中文：日本三菱与 NTT 联合设计的 128 位分组密码，2005 年入选 ISO/IEC 标准，安全性等同 AES。
- English: A 128-bit block cipher by Mitsubishi and NTT, standardized as ISO/IEC 18033-3 in 2005. Security equivalent to AES.
- 为什么重要：日本主导的分组密码，是 AES 的强候选。
- 现实哪里用：日本与中国部分标准。
- 怎么被破：无已知破法，弱点在实现。
- 游戏：`sm4`
- 章节：modern

### Key Schedule（密钥扩展算法）
- 中文：从主密钥派生各轮轮密钥的过程（如 AES 的 RotWord/SubWord/Rcon）。设计目标：主密钥任一比特变化影响所有轮钥、且无法从单个轮钥反推主密钥。
- English: The routine deriving per-round keys from the master key (AES uses RotWord/SubWord/Rcon). A good schedule makes every master bit influence all round keys and prevents reversing them.
- 为什么重要：从主密钥派生出各轮子密钥的过程。
- 现实哪里用：AES 的密钥扩展。
- 怎么被破：扩展算法弱则子密钥可被反推。
- 游戏：`aes-lab`
- 章节：modern

### Feistel vs SPN (Confusion vs Diffusion)（混淆 vs 扩散）
- 中文：混淆：让密钥与明文字面关系复杂化（S 盒）；扩散：让每个明文字节影响整个输出（位移与列混合）。香农定义的这两个变化量是一切成块密码的结构宪法——AES 的每轮都是它们的精刻。
- English: Confusion makes key-to-ciphertext relations opaque (S-boxes); diffusion spreads every plaintext bit across the whole block (shifts and mixing). Shannon's two properties are the constitution of every block cipher.
- 为什么重要：两种分组骨架的对比，混淆与扩散的权衡。
- 现实哪里用：密码设计原则。
- 怎么被破：结构选择影响抗差分/线性分析能力。
- 游戏：`sm4`
- 章节：modern

### Padding（填充（Padding））
- 中文：把明文对齐到分组大小的填充字节；CBC 对填充错误的区别反应可构成填充预言攻击（Bleichenbacher），因此 AEAD 时代普遍改用无需填充的 CTR/GCM 路线。
- English: Bytes aligning plaintext to a block size; CBC's distinct reactions to padding errors enable the padding-oracle attack (Bleichenbacher), which is why the AEAD era moved to padding-free CTR/GCM.
- 为什么重要：把不整除块大小的数据补齐，让分组密码能用。
- 现实哪里用：一切分组密码的填充。
- 怎么被破：填充方式可被利用（padding oracle）。
- 游戏：`aes-lab`
- 章节：modern

### KASUMI
- 中文：3G 移动通信的标准分组密码（基于 MILENAGE 框架）：64 位分组、128 位密钥、Feistel 结构——WCDMA 网络加密与完整性保护的基础算法。
- English: The 3G standard block cipher (inside the MILENAGE framework): 64-bit blocks, 128-bit keys, Feistel structure — the base of WCDMA confidentiality and integrity.
- 为什么重要：3G 移动通信专用的分组密码，轻量设计。
- 现实哪里用：3G 移动通信（UMTS）。
- 怎么被破：已被分析出部分结构弱点，实际依赖密钥长度。
- 章节：modern

### RC6
- 中文：Rivest 等人 1998 年提交 AES 竞标的候选算法：数据依赖循环移位让每轮运算与密钥/数据耦合，最终惜败于 Rijndael——但它的设计思想影响了后续分组密码多样性。
- English: Rivest's 1998 AES candidate: data-dependent rotations couple each round to the data itself. It lost to Rijndael but its ideas shaped block-cipher diversity.
- 为什么重要：开放征集的分组密码，是 AES 的候选之一。
- 现实哪里用：早期磁盘加密。
- 怎么被破：无已知破法，弱点在实现。
- 章节：modern

### CFB/OFB 模式
- 中文：把分组密码变成流密码的两种模式：CFB 用密文反馈加密，OFB 用输出反馈——都能逐比特/逐字节处理且无需填充；代价是错误传播（CFB）与不支持并行（OFB）。
- English: Two modes that turn a block cipher into a stream cipher: ciphertext feedback (CFB) and output feedback (OFB) — bit/byte granular, no padding; trade-offs are error propagation (CFB) and no parallelism (OFB).
- 为什么重要：把分组密码变流密码的两种反馈模式。
- 现实哪里用：早期加密。
- 怎么被破：IV 重用或可预测即破。
- 游戏：`aes-lab`
- 章节：modern
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [公钥革命](../02-eras/e13-public-key/README.md)

**关联人物**（人物志）
- [霍斯特·费斯泰尔](../people/feistel.md)
- [约安·达门](../people/daemen.md)
- [文森特·赖伊曼](../people/rijmen.md)
- [亚当·贝克](../people/back.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `aes-lab` · AES 轮函数实验室
- `block-modes` · 块模式实验室
- `maker` · 密码制造者
- `sm4` · SM4 国密试炼场
