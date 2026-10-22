# 全网检索研究底稿 · 密码学知识全景（§1–§5：分类体系 / 古典密码 / 标准目录 / 算法清单 / 攻击分类）

> 检索日期：2026-10-22 · 方法：Wikipedia 分类目录与 Outline、Kahn《The Codebreakers》实际目录、
> HAC 官方 15 章目录、Stallings 8 版目录、Stanford CS255、NIST CSRC FIPS/SP 目录、
> IETF RFC 逐条核验、ISO/IEC SC27 目录、IEEE 目录、GB/T + GM/T 商用密码标准体系框架等。
> 用途：作为 `_meta/inventory/` 知识总目录的**依据**（分类不凭空设计）。
> 标注：✅ 已核实 · ⚠待核（需到官方目录逐条复核后再入库）

---<task_result>
研究完成（20 次检索 + 多次抓取）。以下是可直接并入"主清单"的交付物。

---

# 密码学知识站点「主清单」补充条目（第 1–5 区）
> 覆盖范围：①规范顶层分类体系 ②古典/历史密码族完整枚举 ③权威标准目录 ④密码算法清单 ⑤攻击分类体系
> 已避让：理论/人物实体/中文结构（前一代理已覆盖）
> 约定：凡未经公开目录核实者标注 ⚠待核；已核实者标注 ✅

---

## 1. 密码学的规范顶层分类体系（Canonical Taxonomies）

### 1.1 Wikipedia《Cryptography》条目大纲 ✅
来源：https://en.wikipedia.org/wiki/Cryptography

| 顶层节 | 二级内容 |
|---|---|
| History of cryptography（主条目） | 古代埃及起源、凯撒、频率分析、Kerckhoffs 原理（1883）、Shannon 最大化公理 |
| Classic cryptography | 替换、移位、机械/转子、密码分析史 |
| Symmetric-key cryptosystems | 密钥空间随成员数平方增长 → 密钥管理难题 |
| Public-key cryptography | 数字签名、加解密两个不同密钥 |
| Cryptanalysis | 定义："获取密文含义而无需正常密钥"；crypto vs cryptology 用语（RFC 2828 指出 steganography 有时也归入 cryptology） |
| Applications | 见下表 |
| See also（条目导航） | Portal: Cryptography · History · Cryptanalysis · Outline of cryptography · Symmetric-key algorithm · Block cipher · Stream cipher · Public-key cryptography · Cryptographic hash function · Message authentication code |

**Applications（应用）条目清单**：Indistinguishability obfuscation（不可区分混淆）· Information theory（信息论）· Outline of cryptography（密码学大纲）· List of cryptographers（密码学家列表）· List of multiple discoveries（多重发现列表）· List of cryptography books（密码学书目）· List of cryptography software（密码学软件列表）· List of open-source Cypherpunk software · List of unsolved problems in computer science · Pre-shared key（预共享密钥）· Quantum cryptography（量子密码）· Secure cryptoprocessor（安全密码处理器）· Strong cryptography（强密码学）

### 1.2 Wikipedia Category:Cryptography 的 31 个子分类 ✅
来源：https://en.wikipedia.org/wiki/Category:Cryptography

Cryptography lists and comparisons · Cryptographic algorithms · Applications of cryptography · Cryptographic attacks · Ciphers · Classical cryptography · Cryptography contests · Cryptographers · Decipherment · Disk encryption · Cryptologic education · End-to-end encryption · Cryptographic hardware · History of cryptography · Key management · Cryptography law · Musical cryptograms · National Security Agency cryptography · Cryptography organizations · Cryptographic primitives · Cryptographic protocols · Public-key cryptography · Cryptography publications · Quantum cryptography · Cryptographic software · Cryptography standards · Steganography · Stream ciphers · Symmetric-key cryptography · Theory of cryptography · Cryptography stubs

**Category:Cryptographic algorithms 的 13 个子分类** ✅：Asymmetric-key algorithms · Broken cryptographic algorithms（被破算法）· Cryptanalytic algorithms · Cryptographic hash functions · Cryptographically secure pseudorandom number generators · Information-theoretically secure algorithms（信息论安全算法）· Integer factorization algorithms · Padding algorithms · Primality tests · Symmetric-key algorithms · Type 1/2/3 encryption algorithms（Type 1 = 数字签名/完整性；Type 2 = 密钥交换/密钥协商；Type 3 = 加密）

**Category:Ciphers 的 5 个子分类** ✅：Block ciphers · Classical ciphers · Free ciphers · Stream ciphers · Undeciphered historical codes and ciphers

### 1.3 Wikipedia《Outline of cryptography》实际层级 ✅
来源：https://en.wikipedia.org/wiki/Outline_of_cryptography

```
Cryptography (or cryptology)
├─ Essence of cryptography（本质）
│   Cryptographer / Encryption–decryption / Cryptographic key / Cipher / Ciphertext / Plaintext /
│   Code / Tabula recta（加密表）/ Alice and Bob
├─ Uses of cryptographic techniques（应用领域）
│   Batch cryptography · Chaotic cryptology · Multivariate cryptography ·
│   Post-quantum cryptography · Quantum cryptography · Steganography · Visual cryptography
├─ History of cryptography
│   Main articles: History of cryptography / Timeline of cryptography
│   Japanese cryptology from the 1500s to Meiji · World War I cryptography ·
│   World War II cryptography · Reservehandverfahren · Venona project · Ultra
├─ Ciphers
│   ├─ Classical
│   │   └─ Substitution: Scytale · Grille · Permutation cipher · VIC cipher
│   └─ Modern symmetric-key algorithms
│       ├─ Stream ciphers: RC4(ARCFOUR) · CipherSaber · Salsa20 · ChaCha20 ·
│       │   SEAL · SNOW · SOBER · SOBER-t16 · SOBER-t32 · WAKE
│       └─ Block ciphers: Blowfish · Camellia · CAST-128(CAST5) · CAST-256(CAST6) ·
│           CIPHERUNICORN-A · CIPHERUNICORN-E · CMEA · CS-Cipher · DES(FIPS 46-3,1976) ·
│           DEAL · DES-X · FEAL · GDES · Grand Cru · Hierocrypt-3
│       └─ Asymmetric: ACE-KEM · ACE Encrypt · Chor-Rivest · Diffie-Hellman ·
│           ElGamal · Elliptic curve cryptography · Threshold cryptosystem · XTR
├─ Keys
│   ├─ Key authentication: PKI · X.509 · OpenPGP · Public key certificate ·
│   │   Certificate authority · Certificate revocation · ID-based cryptography ·
│   │   Certificate-based encryption · Secure key issuing cryptography ·
│   │   Certificateless cryptography · Merkle tree
│   └─ Transport/exchange: Diffie–Hellman · Man-in-the-middle · Needham–Schroeder ·
│       Offline private key · Otway–Rees · Trusted paper key · Wide Mouth Frog
├─ Weak keys / Key derivation: Brute force · Dictionary attack · Related key attack ·
│   KDF · Key strengthening · Password · PAKE · Passphrase · Salt · Factorization
├─ Cryptographic hash functions
├─ Cryptanalysis
│   ├─ Classical: Frequency analysis · Contact analysis · Index of coincidence ·
│   │   Kasiski examination
│   └─ Modern: Symmetric algorithms: Boomerang · Brute force · Davies' attack ·
│       Differential · Impossible differential · Integral · Linear · Meet-in-the-middle ·
│       Mod-n · Related-key · Slide · XSL
│       Hash functions: Birthday attack
│       Attack models: Chosen-ciphertext · Chosen-plaintext · Ciphertext-only ·
│           Known-plaintext
│       Side channel: Power analysis · Timing attack · Cold boot · Differential fault
│       Network attacks: MITM · Replay
│       External attacks: Black-bag · Rubber-hose
```

### 1.4 David Kahn《The Codebreakers》(1967；修订版 1996) 结构 ✅
来源：https://books.google.com/books/about/The_Codebreakers.html?id=3S8rhOEmDIIC

**顶层"大场景"（Pageant of Cryptology）分节**（1996 修订版 Google Books 目录实际显示）：

| # | 标题 | 中文 |
|---|---|---|
| — | Preface to the Revised Edition / Preface / A Few Words | 修订版序 / 序言 / 几句题外话 |
| 1 | One Day of Magic | 魔法的一天（1941-12-07 珍珠港；Yardley 黑室 → MAGIC → PURPLE） |
| 2 | The First 3000 Years | 最初的三千年 |
| 3 | The Rise of the West | 西方的兴起 |
| 4 | On the Origin of a Species | 一个物种的起源（密码学作为"物种"） |
| 5 | The Era of the Black Chambers | 黑室时代（Yardley 黑室、Room 40、谢尔曼·贝尔实验室） |
| 6 | The Axis | 轴心国（Enigma、Geheimschrift、Purple、RED/Type B） |
| 7 | Neutrals and Allies | 中立国与盟国（VENONA、苏联一次性密码本、M-209、Lorenz、Purple、Tunny） |
| 8 | Censors, Scramblers and Spies | 审查者、干扰者与间谍（SIGTOT、Typex、One-time pad 复用） |

1967 原版共 25 章，含「One Day of Magic: I / II」「Two Americans」「The Playfair Cipher」「Ciphers in the Past Tense」等章名（见 https://files.4in1.ws/ 与 CIA 书评 https://www.cia.gov/resources/csi/static/Review-The-Codebreakers.pdf）。Kahn 著名的"领域对位图"：**SIGNAL SECURITY ↔ SIGNAL INTELLIGENCE**；Communication Security ↔ Communication Intelligence；Steganography ↔ Interception and Direction-Finding。

### 1.5 《Handbook of Applied Cryptography》(Menezes / van Oorschot / Vanstone, CRC Press 1997) 15 章 ✅
来源：https://cacr.uwaterloo.ca/hac/about/table_of_contents.html · https://cacr.uwaterloo.ca/hac

| 章 | 标题 | 二级节（实际） |
|---|---|---|
| 1 | Overview of Cryptography | 1.1 Introduction; 1.2 Information security and cryptography; 1.3 Background on functions（1-1 / one-way / trapdoor one-way）; 1.4 Basic terminology and concepts; 1.5 Symmetric-key encryption（block/stream、substitution/transposition、composition、key space）; 1.6 Digital signatures; 1.7 Authentication and identification; 1.8 Public-key cryptography; 1.9 Hash functions; 1.10 Protocols and mechanisms; 1.11 Key establishment, management, certification; 1.12 Pseudorandom numbers and sequences; 1.13 Classes of attacks and security models; 1.14 Notes |
| 2 | Mathematical Background | 2.1 Probability theory; 2.2 Information theory; 2.3 Complexity theory; 2.4 Number theory; 2.5 Abstract algebra; 2.6 Finite fields |
| 3 | Number-Theoretic Reference Problems | 3.1 概述; 3.2 整数分解; 3.3 RSA 问题; 3.4 二次剩余; 3.5 Z_n 中开平方; 3.6 离散对数; 3.7 Diffie–Hellman 问题; 3.8 复合模数; 3.9 逐位计算; 3.10 子集和; 3.11 有限域多项式分解 |
| 4 | Public-Key Parameters | 4.1 概述; 4.2 概率素性检验; 4.3 确定性素性检验; 4.4 素数生成; 4.5 Z_p 不可约多项式; 4.6 生成元与高阶元素 |
| 5 | Pseudorandom Bits and Sequences | 5.1 概述; 5.2 随机比特生成; 5.3 伪随机比特生成; 5.4 统计检验; 5.5 密码学安全伪随机比特生成 |
| 6 | Stream Ciphers | RC4 · ChaCha · 其他 |
| 7 | Block Ciphers | 7.1 概述; 7.2 背景与通用概念; 7.3 古典密码与历史发展; 7.4 DES; 7.5 FEAL; 7.6 IDEA; 7.7 SAFER、RC5 及其他分组密码; 7.8 Notes |
| 8 | Public-Key Encryption | 8.1 概述; 8.2 RSA; 8.3 Rabin; 8.4 ElGamal; 8.5 McEliece; 8.6 Knapsack; 8.7 概率型公钥加密 |
| 9 | Hash Functions and Data Integrity | 9.1 概述; 9.2 分类与框架; 9.3 基本构造与一般结论; 9.4 非钥控杂凑 MDC; 9.5 钥控杂凑 MAC; 9.6 数据完整性与消息认证; 9.7 对杂凑函数的高级攻击 |
| 10 | Identification and Entity Authentication | 10.1 概述; 10.2 口令（弱认证）; 10.3 质询–应答（强认证）; 10.4 定制与零知识身份识别协议; 10.5 对识别协议的攻击 |
| 11 | Digital Signatures | 11.1 概述; 11.2 签名方案类型; 11.3 RSA 签名实践与可能攻击 |
| 12 | Key Establishment Protocols | 12.1 概述; 12.2 密钥协商; 12.3 密钥传输; 12.4 预主密钥；12.5 完全安全协议；12.6 会话密钥；12.7 密钥确认；12.8 会议密钥；12.9 协议攻击策略与经典缺陷、分析目标与方法 |
| 13 | Key Management Techniques | 13.1 概述; 13.2 生成密钥；13.3 建立密钥；13.4 分发密钥；13.5 存储密钥；13.6 恢复密钥；13.7 撤销密钥；13.8 密钥生命周期 |
| 14 | Efficient Implementation | 14.1 引言; 14.2 位操作；14.3 大整数算术；14.4 模幂；14.5 GCD 算法 |
| 15 | Patents and Standards | 15.1 密码学专利；15.2 标准；15.3 标准制定机构 |
| 附录 | A: Cryptographic forums 论文书目 · References · Index | |

> HAC 官方把体系分为 4 个层级：**Foundations（Ch1-5）→ Primitives（Ch6-9）→ Protocols/Auth（Ch10-12）→ Infrastructure（Ch13-15）**。

### 1.6 William Stallings《Cryptography and Network Security: Principles and Practice》8th Global Edition 目录 ✅
来源：https://www.pearson.de/media/muster/toc/toc_9781292437491.pdf

```
Part One: Background
 1. Information and Network Security Concepts (1.1 网络安全概念 / 1.2 OSI 安全架构 /
    1.3 Security Attacks / 1.4 Security Services / 1.5 Security Mechanisms /
    1.6 Cryptography / 1.7 Network Security / 1.8 Trust / 1.9 Standards)
 2. Introduction to Number Theory（整除、除法算法、欧几里得、模运算、素数、
    Fermat/Euler、Miller-Rabin、中国剩余定理、离散对数）附录 2A "The Meaning of Mod"
Part Two: Symmetric Ciphers
 3. Classical Encryption Techniques（对称密码模型 / 替换技术 / 移位技术）
 4. Block Ciphers and the Data Encryption Standard（传统结构 / DES / DES 示例 /
    DES 强度 / 分组密码设计原则）
 5. Finite Fields（群、环、域、GF(p)、多项式算术、GF(2^n)）
 6. Advanced Encryption Standard（有限域算术 / AES 结构 / 变换函数 / 密钥扩展 /
    AES 示例 / 实现）附录 6A GF(2^8) 多项式
Part Three: Asymmetric Ciphers
 7. Public-Key Cryptography and RSA（原理 / RSA 算法）
 8. PQC 预备（8th ed: Post-Quantum Cryptography / 顺带 8: 数论）
 9. Public-Key Cryptography and RSA
10. Other Public-Key Cryptosystems（DH 密钥交换 / ElGamal / 椭圆曲线算术 /
    ECC / 基于非对称密码的伪随机数生成）
Part Four: Cryptographic Data Integrity Algorithms
11. Cryptographic Hash Functions
12. Message Authentication Codes（12.10 小结）
13. Digital Signatures
Part Five: Network Security and Internet Security
14. Network Security（网络访问控制、TLS、IPsec、无线、电子邮件安全、SNMP）
15. Applications of Cryptography（数字签名、认证、密钥管理、Web 安全、SSH、
    Kerberos、PGP、SSL/TLS、S/MIME、802.11/802.1X/WiMAX、IPsec、电子邮件安全）
Part Six: Legal and Ethical Issues
16. Law and Ethics（计算机犯罪与法规、隐私）
Appendices
 A. 写作/阅读/讨论作业  B. Sage 例程（B.2 数论 → B.11 数字签名）  References  Index
```
> 4th ed 结构为 Part One: Overview（Ch0 Reader's Guide + Ch1 Introduction）、Part Two: Classical Cryptography（Ch2-3）、Part Three: Symmetric Cryptography（Ch4-8）、Part Four: Public-Key Cryptography（Ch9-10）、Part Five: Cryptographic Data Integrity（Ch11-13）、Part Six: Network Security Practice（Ch14-16）、Part Seven: Network Security & Internet Security（Ch17-18）、Part Eight: Legal & Ethical Issues（Ch19）。附录 D = "Standards and Standards-Setting Organizations"。

### 1.7 Stanford「Cryptography I / II」课程分章（Dan Boneh）✅
来源：https://crypto.stanford.edu/~dabo/courses/OnlineCrypto/ · https://cs255.stanford.edu/syllabus.html

**Cryptography I（Coursera / CS255）周次结构**
| Week | 主题 | 要点 |
|---|---|---|
| 1 | Course overview and stream ciphers | 密码学是什么、离散概率速成、OTP、PRG 安全性、语义安全 |
| 2 | Block ciphers | AES、3DES、Even–Mansour 迭代构造、PRP/PRF、语义安全、基本工作模式 |
| 3 | Message Integrity | MAC 定义、基于 PRF 的 MAC、CBC-MAC、NMAC、MAC padding、PMAC、Carter–Wegman MAC、碰撞抗性杂凑、Merkle–Damgård、Davies–Meyer、SHA/HMAC 案例、hash chain |
| 4 | Authenticated Encryption | 为什么 AEAD 重要、对 CPA 安全加密的主动攻击、CCA、确定性加密、磁盘/信用卡加密、可调加密 Tweakable、FPE、搜索加密、宽分组 PRP（SIV） |
| 5 | Basic Key Exchange | 可信第三方、Merkle Puzzles、DH 协议、公钥加密、数论速成、模运算、Fermat/Euler、e 次根、难问题 |
| 6 | Public-Key Encryption | ElGamal、语义安全、CCA、陷阱门置换、RSA |
| 7 | Digital Signatures | RSA 签名、哈希型签名、ElGamal 签名、Schnorr、EdDSA |
| 8 | Password-Based Key Exchange | 离线字典攻击、盐、慢哈希、代价参数 |
| 9 | (Crypto II) Zero Knowledge | Sigma 协议、Fiat–Shamir、证明系统 |
| 10 | (Crypto II) Private Key Encryption | 代理重加密、IBE、ABE |
| 11 | (Crypto II) Secure Multiparty Computation | MPC、秘密分享、 Yao 混淆电路 |
| 12 | (Crypto II) Anonymous Credentials | 环签名、组签名、盲签名、Coconut |

**CS255 (Winter 2026) 讲义结构**：Overview → Basic symmetric-key encryption → Message integrity → Public key cryptography → Digital signatures → Password protocols / OTP / Challenge-response → Authenticated key exchange and SSL/TLS session setup → Post-quantum Cryptography。

### 1.8 其他常用顶层分类骨架（可用于站点侧栏）

| 框架 | 分层 |
|---|---|
| **ISO/IEC 2382:2015** Information technology — Vocabulary ✅（已取代 2382-4/-7/-15/-16、ISO 2382-19；历史分部还有 -26/-27/-28/-29/-31/-32/-34/-37） | 词汇层：encipherment / decipherment / plaintext / ciphertext / key / cryptanalysis 等 |
| **ISO/IEC JTC 1/SC 27 WG 结构** ✅ | WG1 信息安全管理体系 · **WG2 密码与安全机制（cryptography and security mechanisms）** · WG3 安全评估、测试与规范 · WG4 安全控制与服务 · WG5 身份管理与隐私技术；另有 AG2 Trustworthiness / AG3 Concepts and Terminology / AG5 Strategy / AG6 Operations / AG7 Communication / AG8 合格评定咨询 / AG9 多样性 / AHG1 / AHG3 / CAG / JWG7（生物特征） |
| **NIST 密码学标准分类** ✅ | Standards（FIPS 197/202/203/204/205/206/140-3）· Guidelines（SP 800 系列）· Practice Guides（SP 1800 系列）· NISTIR（研究报告） |
| **IEEE 1619 / LTSC** ✅ | 1619（块设备数据加密，引用 NIST SP 800-38E XTS-AES）· 1619.1（带长度扩展的认证加密）· 1619.2（共享存储介质宽分组加密）· 2883 / 2883.1（存储净化）· P1667 · P3406 |
| **常见"四象限"教学法** | 古典密码学 / 近代对称密码 / 公钥密码 / 协议与实现安全 |

---

## 2. 古典 / 历史密码族完整枚举（含单行定义）

### 2.1 单表替换（Monoalphabetic Substitution）

| 名称 | 一句话定义 |
|---|---|
| **Caesar cipher（凯撒密码）** | 每个明文字母被固定偏移 k 位替换（`C = (P + k) mod 26`），是最早有文献记载的替换密码之一。 |
| **ROT13 / ROT-N** | 凯撒的特例，偏移固定为 13（自反），用于遮挡剧透而非加密。 |
| **Affine cipher（仿射密码）** | `C = (a·P + b) mod m`，其中 gcd(a,m)=1；是凯撒与乘法的组合，可被频率分析破解。 |
| **Atbash（阿特巴什）** | 字母表反序映射（A↔Z、B↔Y…），源自希伯来语，字母加法为密钥。 |
| **Polybius square（波利比奥斯方阵）** | 5×5 方阵把每个字母编码为两位（行,列）坐标，本身是一种"分数化"替换。 |
| **Keyword cipher（关键字替换）** | 以关键字字母重排字母表后做单表替换。 |
| **Quagmire cipher（Quagmire IV）** | 通用混合单表替换：四个独立密钥（关键字表首字母、替换字母表、混合字母表、行选择）生成一个替换表。 |
| **Pigpen cipher（猪圈密码）** | 用网格/点/线形状表示字母的多形替换（也作 Freemason cipher）。 |
| **Homophonic substitution（同音替换）** | 每个明文字母对应一组同音密文字母（随机选取），打散频率统计。 |
| **Nomenclator（混合码表）** | 字母表替换 + 数字码表（codebook）混用的历史系统。 |
| **Baconian cipher（培根密码）** | 用 A/B 两符号编码 26 字母（双文字），亦用于藏头/异质字体隐写。 |
| **Great Cipher（格里芬/大密码）** | 1713 年由 Arthur Delaroche 设计的音节替换码本（数字代替音节）。 |
| **Chaocipher（混沌密码）** | 用两个（可切换的）字母盘 + 混沌表驱动的不动点替换，1920 年 Rubin 发明。 |
| **Tap code（敲击码）** | 3×3 网格 + 点行区分 26 字母（Union Army 南北战争）。 |
| **Slidex / Rasterschlüssel 44 / Reihenschieber / Solitaire（纸牌加密）** | 网格/滑尺类替换与转置混合体；Solitaire 用一副扑克牌做密钥流发生器。 |
| **Code（码）vs Cipher（密码）** | 码＝整词/整语替换（需要码本）；密码＝逐字符变换；两者常被混称。 |
| **BATCO / DRYAD / Kama Sutra（Kama Sutra Cipher）** | 古典文献/微型手册中记载的替换-转置组合方案（Vigenère 变体）。 |

### 2.2 多表替换（Polyalphabetic Substitution）

| 名称 | 一句话定义 |
|---|---|
| **Alberti cipher（阿尔贝蒂圆盘）** | 1467 年首个多表替换：两个可旋转字母盘（含"错位盘"），即多表替换的开端。 |
| **Vigenère cipher（维吉尼亚）** | 以关键字重复的移位序列对每个位置施加不同 Caesar 移位（`C=P+k_i`），"le chiffre indéchiffrable"。 |
| **Beaufort cipher（博福特）** | 互逆形式 `C = (k - P) mod 26`，加解密同一算法。 |
| **Variant Beaufort（变体博福特）** | `C = (P - k) mod 26`（或 `C = (k + P) mod 26`，依实现），用于早期电报密码。 |
| **Porta cipher（波塔）** | 13 世纪比萨数学家 Giovanni Battista della Porta 描述的 12 个互逆替换表，按密钥字母分 4 类（13/5 字母分组）。 |
| **Trithemius cipher（特朗普瑟米乌斯） | `C = P + (0,1,2,…)` 的渐进移位（递推钥匙），是 Vigenère 的特例。 |
| **Progressive key cipher（渐进密钥）** | 密钥表逐轮递增/递增步长（Alberti 的 Trithemius 盘型），亦指 Progressive-key 格密码。 |
| **Gronsfeld cipher（格朗斯菲尔德）** | 用数字密钥代替字母的 Vigenère 变体（维吉尼亚表按数字列）。 |
| **Nihilist cipher（虚无主义者）** | 以关键字的字母数值作 Polybius 坐标，再与明文坐标相加（数值型替换）。 |
| **Running-key cipher（游标密钥）** | 密钥取自长文本（书籍/连续文本），密钥长度等于明文，强度接近一次性密码本。 |
| **Autokey cipher（自动密钥）** | 密钥 = 关键字 + 明文本身（Vigenère 的 key-autokey）或 + 密文（plaintext-autokey）。 |
| **Quagmire IV** | 见 2.1；另可视为混合多表。 |
| **VIC cipher（VIC/链条密码）** | 苏联间谍使用的"手写密码机"：由分层（不含直接频率泄漏）、行列/对角转置与一份手写密钥页构成，历史上极难破。 |
| **One-time pad（一次性密码本）** | 随机且不重复使用、与明文等长的密钥 → 信息论完全保密（perfect secrecy）。 |

### 2.3 换位（Transposition）

| 名称 | 一句话定义 |
|---|---|
| **Scytale（斯巴达密码棒）** | 把皮带绕在特定直径的棒上书写，读时用同样直径棒解绕——直径即密钥；亦属机械前驱。 |
| **Rail fence cipher（栅栏密码）** | 明文按之字形写入多行"栅栏"，再按行读出；也称 Zigzag。 |
| **Columnar transposition（列移位）** | 按密钥词给字母排序后分列写下，再按列序读出（完全/不完全型）。 |
| **Myszkowski transposition** | 列移位的变体：重复密钥字母共享同一列序号，列长不等，产生更乱的排列。 |
| **AMSCO cipher（AMSCO）** | 交替"随机字母 + 数字"的漏斗式分列填充，再按数字列序读出，同时做替换+换位。 |
| **Richelieu cipher（黎塞留）** | 带口令表的换位：按口令表定位取字，密钥表本身是被隐藏的部分。 |
| **Disrupted transposition（中断换位）** | 换位后再在少数位置插入无关字符以打乱行列结构，提高抗频率分析能力。 |
| **Route transposition（路线移位）** | 把明文写入网格后按预设路线（螺旋、之字、绕圈、对角）读出。 |
| **Turning grille / Cardan grille（转格/卡尔丹格）** | 覆盖在文字上的开孔纸格，按规定旋转 90° 逐次显露正文（也作 steganography）。 |
| **Bifid / Trifid（分数化换位）** | 见 2.4；本质是"替换+换位"的分数化（fractionation）组合。 |
| **Morbit cipher（莫比特）** | 19 世纪发明：明文编码为 12 位数字对，按数字 1/2/3 分三栏再交叉配对输出 4 位密文。 |
| **Straddle checkerboard（跨骑棋盘）** | 用"棋盘格 + 棋盘下"的变长编码表格，配合 transposition 使用。 |
| **Double transposition（双重换位）** | 先列移位再行移位（或反之），War Department 用作标准。 |
| **Rasterschlüssel 44 / Reihenschieber** | 网格/滑尺型混合（替换+换位）历史密码。 |

### 2.4 二元组 / 三元组 / 矩阵型（Polygraphic Substitution）

| 名称 | 一句话定义 |
|---|---|
| **Playfair cipher（普莱费尔）** | 1854 年 Wheatstone 发明、Lord Playfair 推广：5×5 方阵对**字母对**做矩形代换，首个 digraph 替换密码。 |
| **Two-square cipher（双方阵）** | Delastelle 1901：两个 Polybius 方阵 + 坐标混合加密二元组。 |
| **Four-square cipher（四方阵）** | Delastelle 1902：四个 5×5 方阵，两个明文字母分别代换为坐标对再组合。 |
| **Hill cipher（希尔密码）** | 用可逆矩阵对字母块（长度 = 矩阵阶）做线性代换 `C = KP`。 |
| **Bifid cipher（比菲德）** | Polybius 坐标按行/列拆开再交叉重组，实现分数化扩散。 |
| **Trifid cipher（特里菲德）** | 3×3×3 立方体坐标的三元分数化，Delastelle 变体。 |
| **ADFGVX / ADFGX cipher** | 一战德军：6×6 方阵 + ADFGVX 分数化 + 双层列移位，被法国 George Painvin 破译。 |
| **Polybius square（基础）** | 上述家族的公共构件。 |
| **Chaocipher** | 见 2.1（也可视为动态字母盘替换）。 |
| **Solitaire / Playfair 的"Vigenère 表"** | 常见教学扩展。 |

### 2.5 隐写与密写（Steganography & Concealment）

| 名称 | 一句话定义 |
|---|---|
| **Book cipher（书本密码）** | 以某书的页-行-词（或字符序号）坐标作为密钥。 |
| **Acrostic（藏头/诗体密码）** | 取每行/每句首字（或末字）组成明文；诗体码（poem code）是其变体。 |
| **Null cipher（空隐写）** | 特定位置（如第 n 个词）取字符，其余为填充；也指"零密钥"无意义流填充。 |
| **Invisible ink（隐形墨水）** | 化学显影墨水/柠檬汁/牛奶等；历史上邮政与间谍常用。 |
| **Microdot（微点）** | 胶片/文档上以针孔网格编码的微型点阵（"microdot spacer"），冷战间谍技术。 |
| **Grille / Cardan grille（转格）** | 见 2.3，同时属于隐写。 |
| **Bacon's cipher（培根隐写）** | 用两种字体（a/b）编码，即最著名的字体隐写。 |
| **Code talker（密码话务员）** | 用约定自然语言（美洲原住民语言、纳瓦霍语等）直接传意的"人肉加密"。 |
| **Open codes / null ciphers / Redundant code** | Wikipedia Steganography 分类。 |

### 2.6 机械 / 转子前驱（Mechanisms & Rotor Precursors）

| 名称 | 一句话定义 |
|---|---|
| **Alberti disk（阿尔贝蒂密码盘）** | 1467 年的两个同心可旋转字母盘，实现"错位盘"多表替换，是机械密码的先驱。 |
| **Jefferson disk / Jefferson wheel cipher（杰斐逊圆盘 / 密码轮）** | 1790 年代 Jefferson 发明：16 片可独立旋转字母圆盘（后演化为 Bazeries 圆柱、U.S. Navy 1939 MS-1/2），读盘顺序即密钥顺序。 |
| **Bazeries cylinder（巴泽里圆柱）** | 1870 年 Bazeries 改良 Jefferson 圆盘为可拆换的 20 段圆柱。 |
| **M-94（美国密码机）** | 1919 年美军使用：26 片可滑动字母条 + 螺旋轴，1914 年后用于最高级别电报。 |
| **Enigma（恩尼格玛）** | 二战德军转子密码机（多转子 + 反射器 + 接线板），被 Alan Turing/Bletchley Park 破译。 |
| **Scytale（密码棒）** | 古典机械前驱（见 2.3）。 |
| **Kryptos / PURPLE（紫）** | 日本 WWII 超级密码机（转子 + 插线板，Step/日方 Purple），被 Friedman（ROMA）破译。 |
| **Typex / SIGTOT / Red (Type B) / M-209 / Tunny / Lorenz SZ42** | 二战各国转子/拨轮机，见第 5 区历史系统。 |
| **Hagelin C-36/C-38、Siemens T52、Purple、Heath Robinson** | 其他著名转子机。 |
| **Cardan grille** | 见上。 |
| **Playfair 时代：Jefferson disk vs. rotor** | 历史脉络。 |

### 2.7 信号类密码（Signal-based / 一战密码）

| 名称 | 一句话定义 |
|---|---|
| **Morse code（摩尔斯电码）** | 点划时序编码（不是密码而是 code）；一战用于电报。 |
| **Semaphore（旗语）** | 手臂/旗位置编码字母，一战海军主力视觉通信。 |
| **Flag signalling（旗号）** | 海军旗字母表（International Code of Signals 派生）。 |
| **Taps / knock code（敲击码）** | 以敲击时长编码消息（监狱与墙内通信）。 |
| **Pigpen variants（猪圈/方格/井字变体）** | 网格 + 点 + 线形状替代字母，多见于共济会与监狱通信。 |
| **NATO phonetic alphabet（北约音标）** | 口述字母表（非加密），降低无线电误听。 |
| **Hughes / SIGABY / SIGTOT** | 一战英国陆海军的分级信号表密码。 |
| **Q-code / U-code / Z-code** | 无线电简语与商业密语。 |
| **Book/one-time pad in WWI（One-Time Pad 系统）** | 见 2.2，Martin & Robinson 破解美国 OTP 引发 VENONA。 |

---

## 3. 权威标准目录（Standards Catalogs）

### 3.1 NIST FIPS（密码相关）✅（部分 ⚠待核）

| 编号 | 标题 | 年份 | 状态 |
|---|---|---|---|
| FIPS 46 | Data Encryption Standard (DES) | 1977 | 被 46-3 取代 |
| FIPS 46-3 | Triple DES (3DES/TDEA) | 1998 | ✅ |
| FIPS 47 | Use of the Data Encryption Standard | 1977 | ✅ |
| FIPS 57 | A Standard for DES — Key Material | 1977 | ✅ |
| FIPS 81 | Modes of Operation for the Data Encryption Standard (ECB/CBC/CFB/OFB) | 1980 | ✅ |
| FIPS 93 | Standards for Security Categorization of Federal Information and Information Systems | 1981 | 被 FIPS 199 取代 ✅ |
| FIPS 131 | Security Requirements for Bell-LaPadula Model of a Minimal Access Control | 1990 | ⚠待核标题 |
| FIPS 132 | （密级/访问控制相关） | — | ⚠待核（编号需在 CSRC FIPS 列表核实） |
| FIPS 171 | Guidelines for Using the Data Encryption Standard | 1987 | ⚠待核标题 |
| FIPS 140-1 | Security Requirements for Cryptographic Modules | 1998 | 归档 |
| FIPS 140-2 | Security Requirements for Cryptographic Modules | 2001（CN 2, 2002-12） | ✅ |
| FIPS 140-3 | Security Requirements for Cryptographic Modules（改引 ISO/IEC 19790 + 24759） | 2019-03 | ✅ |
| FIPS 180-1 / 180-2 / 180-3 / **180-4** | Secure Hash Standard (SHA-1 / SHA-2) | 2002 / 2002 / 2008 / **2015-08** | ✅ |
| FIPS 186-1 … 186-4 / **186-5** | Digital Signature Standard (DSA/DSA-2/ECDSA) | 1998→**2023-02** | ✅ |
| **FIPS 197** | Advanced Encryption Standard (AES) | 2001-11（2023-05 更新） | ✅ |
| **FIPS 198-1** | The Keyed-Hash Message Authentication Code (HMAC) | 2008-07 | ✅ |
| FIPS 199 | Standards for Security Categorization of Federal Information and Information Systems | 2004-02 | ✅ |
| FIPS 200 | Minimum Security Requirements for Federal Information and Information Systems | 2006-03 | ✅ |
| FIPS 201-1 / 201-2 / 201-3 | Personal Identity Verification (PIV) | 2010 / 2013 / 2022-01 | ✅ |
| **FIPS 202** | SHA-3 Standard: Permutation-Based Hash and Extendable-Output Functions（SHA3-224/256/384/512、SHAKE128/256） | 2015-08 | ✅ |
| **FIPS 203** | Module-Lattice-Based Key-Encapsulation Mechanism Standard（ML-KEM ← CRYSTALS-Kyber） | **2024-08-13** | ✅ |
| **FIPS 204** | Module-Lattice-Based Digital Signature Standard（ML-DSA ← CRYSTALS-Dilithium；ML-DSA-44/65/87、HashML-DSA） | **2024-08-13** | ✅ |
| **FIPS 205** | Stateless Hash-Based Digital Signature Standard（SLH-DSA ← SPHINCS+；Pure/Hash、SLH-DSA-SHA2/SHAKE） | **2024-08-13** | ✅ |
| FIPS 206 | FN-DSA（Falcon 派生） | 开发中（截至 2026 未定稿） | ⚠待核 |
| FIPS 207 / 208 / 209 / 210 / 211 | （NIST 内部/计划中编号，公开目录未见已发布密码 FIPS） | — | ⚠需逐项核验，勿直接入清单 |
| FIPS 222 | （未见公开发布记录） | — | ⚠待核 |

> **关于 "FIPS 180-20 / 180-31 / 180-33~180-39 / 180-51~180-57 / 180-63 / 180-90 / 180-131A"**：
> 这些**不是 FIPS 编号**。最接近的对应物是 **NIST SP 1800 系列「Cybersecurity Practice Guides」**（例如 SP 1800-20 = *In-Toto Attestation Framework*；SP 1800-13/15/16/18/19/22/25/27/28/29/30/31/32/33/34/35/36/37/38/39/40/41/42/43/44 等大量为密码协议与 PQC 迁移实践指南）。SP 1800-90 / 1800-131A 目前无对应发布记录。
> 建议站点把它们改挂到「NIST SP 1800 实践指南」子目录，并逐条到 CSRC 核验标题。
> 另：SP 800-131A / SP 800-57 才是"算法与密钥长度过渡"的权威文件（FIPS 层的对应物即 SP 800-131A）。
> 来源：https://csrc.nist.gov/publications/fips · https://csrc.nist.rip/publications/PubsFIPS.html

### 3.2 NIST SP 800 系列（密码相关）✅

**SP 800-38（分组密码工作模式）—— 全部已核实** ✅（来源：https://csrc.nist.gov/Projects/Block-Cipher-Techniques/BCM/Current-Modes 与 NIST IR 8459 https://nvlpubs.nist.gov/nistpubs/ir/2024/NIST.IR.8459.pdf）

| 编号 | 标题 | 年份 |
|---|---|---|
| SP 800-38A | Recommendation for Block Cipher Modes of Operation: Methods and Techniques（ECB/CBC/CFB/OFB/CTR） | 2001-12 |
| SP 800-38A Addendum | CBC-CS1 / CBC-CS2 / CBC-CS3（密文截取） | 2003 |
| SP 800-38B | The CMAC Mode for Authentication（CMAC/OXCBC/OMAC） | 2005/2007 |
| SP 800-38C | The CCM Mode for Authentication and Confidentiality | 2004 |
| SP 800-38D | Galois/Counter Mode (GCM) and GMAC | 2007（2024 启动修订，2025-01 预草案） |
| SP 800-38E | The XTS-AES Mode for Confidentiality on Storage Devices（引用 IEEE Std 1619-2007） | 2010 |
| SP 800-38F | Methods for Key Wrapping（KW / KWP / TKW） | 2012 |
| SP 800-38G | Format-Preserving Encryption（FPE）：FF1、FF3（Rev.1 2025-02 二轮征求意见） | 2016 |

**SP 800-90（随机数）**：SP 800-90A Rev.1（2015，Hash_DRBG/HMAC_DRBG/CTR_DRBG）、SP 800-90B（2007，熵源）、SP 800-90C（草案）。

**SP 800-57（密钥管理）**：Part 1 Rev.5（2020-05，通用）、Part 2 Rev.1（2019-08，机构策略与安全规划）、Part 3 Rev.1（2020-06，系统应用密码特性）。

**SP 800-56（成对密钥协商）**：SP 800-56A Rev.3（2018，DH/DLQ/MQV）、SP 800-56B Rev.2（2020，RC 加密密钥协商）、SP 800-56C Rev.1（2021，密钥派生）。

**SP 800-63（数字身份）**：SP 800-63A（登记与身份核验）、SP 800-63B（身份绑定与联邦）、SP 800-63C（断言/联邦身份），Rev.4（2025-03）。

**其余密码相关 SP 800**
| 编号 | 标题 | 年份 | 状态 |
|---|---|---|---|
| SP 800-77 Rev.1 | Guide to Cryptographic Algorithm Validation | 2009 | ✅ |
| SP 800-78-5 (ipd) | Cryptographic Algorithms and Key Sizes for Personal Identity Verification | 2023-09 | ✅ |
| SP 800-88 Rev.1 | Guidelines for Media Sanitization | 2014 | ✅ |
| SP 800-106 | Randomized Hashing for Digital Signatures | 2006 | ✅ |
| SP 800-107 Rev.1 | Recommendation for Applications Using Approved Hash Algorithms | 2020 | ✅ |
| SP 800-108 | Recommendation for Key Derivation Using Pseudorandom Functions | 2008 | ✅ |
| SP 800-111 | Guide to Storage Encryption Technologies for End User Devices | 2007 | ✅ |
| SP 800-130 | A Framework for Designing Cryptographic Hash Functions | 2011 | ✅ |
| SP 800-131A Rev.2 | Transitions: Recommendation for Transitioning the Use of Cryptographic Algorithms and Key Lengths | 2019 | ✅ |
| SP 800-132 | （与 800-56A / 800-133 配套的密钥/算法验证类指南） | — | ⚠待核确切标题 |
| SP 800-133 | Security Requirements for Key Recombination | 2012 | ⚠待核 |
| SP 800-152 | Cybersecurity Framework: Considerations for a Cryptographic Module | 2015 | ✅ |
| SP 800-160 Vol.1 | Security and Privacy Considerations for IT Systems / 生命周期与供应链 | 2016 | ✅ |
| SP 800-160 Vol.2 | Security and Privacy Approaches for Transitioning to Post-Quantum Cryptography | 2019 | ✅ |
| SP 800-161 | Cybersecurity Event Logging and Incident Response | 2015 | ✅ |
| SP 800-162 | Guide to Attribute-Based Access Control (ABAC) | 2019 | ✅ |
| SP 800-163 | Vulnerability Management in Cybersecurity | 2017 | ✅ |
| SP 800-171 Rev.2 | Protecting Controlled Unclassified Information (CUI) in Nonfederal Systems | 2021 | ✅ |
| SP 800-177 Rev.1 | Guidelines for Using Transport Layer Security (TLS) | 2020 | ✅ |
| SP 800-178 | Guidelines on Standards for Security Categorization of Federal Information and Information Systems | 2016 | ⚠待核标题 |
| SP 800-179 | Guidelines on Standards for Security Categorization… | 2020 | ⚠待核标题 |
| SP 800-180 | （密码应用/取证相关指南） | 2017 | ⚠待核标题 |
| SP 800-181 | National Initiative for Cybersecurity Education (NICE) Cybersecurity Workforce Framework | 2020 | ✅ |
| SP 800-182 | （密码模块/实现相关指南） | 2018 | ⚠待核标题 |
| SP 800-184 | Guide for Cybersecurity Event Recovery | 2016 | ✅ |
| SP 800-185 | Recommendation for the Selection of Cryptographic-Length Key Derived from Pseudorandom Functions | 2019 | ✅ |
| SP 800-186 | Recommendations for Discrete Logarithm-based Cryptography: Elliptic Curve Domain Parameters | 2023-02 | ✅ |
| SP 800-187 | （密码算法/实现相关指南） | — | ⚠待核标题 |
| SP 800-190 | Application Security Verification Standard (ASVS) | 2020 | ⚠待核标题 |
| SP 800-193 | Platform Firmware Resiliency Guidelines | 2020 | ✅ |
| SP 800-200 | （新版/密码相关） | — | ⚠待核 |
| SP 800-207 | （密码相关） | — | ⚠待核 |
| SP 800-208 | Recommendation for Stateful Hash-based Signature Schemes（LMS/XMSS） | 2020 | ✅（被 FIPS 204/205 引用） |
| SP 800-213 | IoT Device Cybersecurity Guidance for the Federal Government | 2021 | ✅ |
| SP 800-218 | Secure Software Development Practices for Generative AI and Dual-Use Foundation Models | 2022 | ✅ |
| SP 800-225 | （轻量密码 Ascon 相关，NIST 拟批准 ASCON 为标准） | 2025 | ⚠待核 |
| SP 800-230 | （PQC 相关，Draft，FIPS 205 页面引用） | 2024+ | ⚠待核 |
| SP 800-140 | CMVP 系列：a 文档要求 / b 安全策略 / c 安全功能 / d SSP 生成与建立方法 / e 认证机制 / f 非侵入式攻击缓解测试度量 | 2014+ | ✅ |
| SP 800-144 | Security of Cryptographic Modules（过渡指南） | — | ⚠待核 |

**SP 1800 系列（Cybersecurity Practice Guides）** — 与用户给的 "FIPS 180-xx" 最可能的对应面 ✅/⚠：
SP 1800-13 / -15 / -16 / -18 / -19 / **-20（In-Toto Attestation Framework，2022）** / -22 / -25 / -27 / -28 / -29 / -30 / -31 / -32 / -33 / -34 / -35 / -36 / -37 / -38 / -39 / -40 / -41 / -42 / -43 / -44 / -45 …（多数为 PQC 迁移、IoT 安全、TLS/IPsec 实践、密钥管理实践指南）。
> 逐条标题与年份建议直接抓取 CSRC SP 1800 列表：https://csrc.nist.gov/publications/sp1800

### 3.3 IETF 安全相关 RFC 清单 ✅（逐条核验）

| 协议族 | RFC（号 — 标题） |
|---|---|
| **TLS** | 2246（TLS 1.0, 1999）· **4346**（TLS 1.1, 2006）· **5246**（TLS 1.2, 2008）· **6066**（TLS 1.2 勘误汇总, 2011）· **8446**（TLS 1.3, 2018-08；Obsoletes 5077/5246/6961；Updates 5705/6066；2026 起被 RFC 9846 标注 obsolete）· **8447**（IANA Registry Updates for TLS and DTLS, 2018）· **8999**（Deprecating TLS 1.0/1.1, 2021）· **9147**（DTLS 1.3, 2022-04）· **9849**（**TLS Encrypted Client Hello / ECH**, 2026-03）· **9853**（**Return Routability Check for DTLS 1.2/1.3**, 2026-03，Updates 9146/9147）· **9847**（IANA Registry Updates for TLS and DTLS, 2025-12）· 9146（Connection Identifier for DTLS 1.2）· 7525（BCP 195，TLS/DTLS 安全使用建议）· 8879（TLS Certificate Compression）· 8441（Bootstrapping WebSockets with HTTP/2）· 8470（**Using Early Data in HTTP**, 2018）· 8701（**TLS GREasing**，防版本降级） |
| **DTLS** | 4347（DTLS 1.0）· **9147**（DTLS 1.3）· 9146（CID for DTLS 1.2）· 9853（RRC）· 9149（ALPN for DTLS） |
| **SSH** | **4251**（SSH Protocol Architecture）· **4252**（SSH Authentication Protocol）· **4253**（SSH Transport Layer Protocol）· **4254**（SSH Connection Protocol）· 4716（SECSH）· 8308/8309（SSH U2F）· 5656（ECC 密钥交换） |
| **IPsec / IKE** | **4301**（Security Architecture for IP）· **4302**（UDP Encapsulation of IPsec Packets）· **4303**（IP Encapsulating Security Payload ESP）· **7321**（IKEv2）· 7296（IKEv2 差异说明）· **9395**（IKEv2 多重认证）· **9449**（Delegation of IKEv2 to the DNS）· 7427（ESP 序号扩展）· 7633（ESP 扩展）· 4303/4322 |
| **DNSSEC** | **4033/4034/4035**（资源记录 / DNSSEC 术语 / 协议）· **4036/4037**（DS / 区域签名链）· **4038**（DNSSEC 密钥与签名算法标识）· **4506**（SMIMEA 邮件）· **5155**（DNSCrypt）· **6781**（DNSSEC 抗降级：TBDS / NSEC3）· 4034/4035/4036/4037/4038；6781（NSEC3）· 9276（DNSSEC 根密钥签名密钥） |
| **ACME** | **8555**（ACME 协议）· **9773**（**ACME Renewal Information / ARI**, 2025）· **8657**（ACME 授权基础设施清单）· **8737**（ACME 扩展）· 8555/8737/8657/9773；CSR 组 |
| **OCSP** | **6960**（OCSP 协议）· **5019**（OCSP 互操作要求）· 6960/5019 |
| **PKIX** | **5280**（Internet X.509 PKI Certificate & CRL Profile）· **6811**（PKI 修订说明）· **6962**（Certificate Transparency 框架）· **8399**（CT 签署日志）· **6960**（OCSP）· **6961**（TLS 1.3 草案，后并入 8446）· 5280/6962/8399/6811 |
| **RADIUS** | **2865**（RADIUS）· **2866**（RADIUS 属性）· **3162**（RADIUS IPv6）· **3579**（EAP RADIUS 交互）· **6610**（RADIUS 量子抗性准备 / 短期密码）· 2865/2866/3162/3579/6610 |
| **EAP** | **3748**（EAP）· **5216**（EAP-TLS）· **7174**（EAP-TTLS）· **7588**（EAP-TLS 密钥层次更新）· **8116**（EAP-PWD）· **8373**（EAP-TCP 优化 / EAP over TCP）· 3748/5216/7174/7588/8116/8373 |
| **COSE / CBOR** | **8152**（COSE：CBOR 签名格式）· **9052**（COSE 标识）· **9053**（COSE X25519 / Ed25519 算法）· **9054**（COSE HPKE）· **9055**（COSE 签名创建）· **8949**（CBOR，CDDL） |
| **HPKE** | **9180**（Hybrid Public Key Encryption, 2022）· 9180；ECH 依赖它 ✅（RFC 9849 明确引用） |
| **MASQUE** | **9298**（Proxying UDP in HTTP / CONNECT-UDP, 2022-08）· **9297**（HTTP Datagrams and the Capsule Protocol, 2022-08）· **9484**（Proxying IP in HTTP / CONNECT-IP, 2023-10）· **9729**（The Concealed HTTP Authentication Scheme）· **9300**（Registration of Port for MASQUE ⚠待核标题）· **9800**＝**Compressed SRv6 Segment List Encoding**（❗**不是 MASQUE**）· **9801**（⚠待核，**不是 MASQUE**）→ 建议站点把 9800/9801 从 MASQUE 移出 ✅ |
| **QUIC** | **9000**（QUIC: UDP-Based Multiplexed and Secure Transport, 2021-05）· **9001**（QUIC-TLS）· **9002**（QUIC 丢包恢复与拥塞控制）· **9221**（QUIC 的 DATAGRAM 扩展）· 9000/9001/9002/9221 |
| **TLS-GRE** | ⚠️ **RFC 9524 实际是 "Segment Routing Replication for Multipoint Service Delivery"（SR Replication Segment, 2024-02），不是 TLS-GRE**。TLS-GREasing 是 **RFC 8701**。建议站点更正 ✅ |

### 3.4 ISO/IEC JTC 1/SC 27 密码相关标准 ✅（标题已从 SC27 目录核验）
来源：https://committee.iso.org/committee/45306/x/catalogue/p/0/u/1/w/0/d/0

| 编号 | 标题 | 现行版本 |
|---|---|---|
| **ISO/IEC 10116** | Modes of operation for an n-bit block cipher | 2017（Amd 1:2021 CTR-ACPKM） |
| **ISO/IEC 11770-1** | Key management — Part 1: Framework | 2010 |
| **ISO/IEC 11770-2** | Key management — Part 2: Mechanisms using symmetric techniques | 2018 |
| **ISO/IEC 11770-3** | Key management — Part 3: Mechanisms using asymmetric techniques | 2021（Amd 1:2025 TFNS IBC） |
| **ISO/IEC 11770-4** | Key management — Part 4: Mechanisms based on weak secrets | 2017（Amd1:2019 UPAKA-IBC；Amd2:2021 抗泄漏 PAKE） |
| ISO/IEC 11770-5 / -6 / -7 | Key management — Part 5: Key management using groups / Part 6: Key material in cryptographic modules / Part 7: ? | 2020 / 2016 / 2021 |
| **ISO/IEC 14888-1** | Digital signatures with appendix — Part 1: General | 2008 |
| **ISO/IEC 14888-2** | Digital signatures with appendix — Part 2: Integer factorization based mechanisms | 2008（Amd1 开发中） |
| **ISO/IEC 14888-3** | Digital signatures with appendix — Part 3: Discrete logarithm based mechanisms | 2018（Amd 1 开发中） |
| **ISO/IEC 14888-4** | Digital signatures with appendix — Part 4: Stateful hash-based mechanisms | **2024** |
| **ISO/IEC 15945** | Specification of TTP services to support the application of digital signatures | 2002 |
| **ISO/IEC 18033-1** | Encryption algorithms — Part 1: General | 2021 |
| **ISO/IEC 18033-2** | Encryption algorithms — Part 2: Block cipher algorithms | 2006（Amd1:2017；Amd2:2026） |
| **ISO/IEC 18033-3** | Encryption algorithms — Part 3: Stream cipher algorithms | 2010（**Amd 1:2021 = SM4**） |
| **ISO/IEC 18033-4** | Encryption algorithms — Part 4: Dedicated hash functions（含 SM3） | 2011（Amd 1:2020） |
| **ISO/IEC 18033-5** | Encryption algorithms — Part 5: Identity-based ciphers | 2015（**Amd 1:2021 = SM9 mechanism**） |
| **ISO/IEC 18033-6** | Encryption algorithms — Part 6: Homomorphic encryption | 2019 |
| **ISO/IEC 18033-7** | Encryption algorithms — Part 7: Tweakable block ciphers | 2022 |
| **ISO/IEC 19790** | Security requirements for cryptographic modules | **2025**（2006/2012 已废止） |
| **ISO/IEC 24759** | Test requirements for cryptographic modules | **2025**（2008/2014/2017 已废止） |
| **ISO/IEC 27559** | Privacy enhancing data de-identification framework | 2022 |
| **ISO/IEC 4922-1** | Secure multiparty computation — Part 1: General | 2023 |
| **ISO/IEC 4922-2** | Secure multiparty computation — Part 2: Mechanisms based on secret sharing | 2024 |
| ISO/IEC 4922-3 | Secure multiparty computation — Part 3: Mechanisms based on garbled circuits | DIS 开发中 |
| **ISO/IEC 29192-1/-2/-5** | Lightweight cryptography — Part 1: General / Part 2: Block cipher algorithms（**PRESENT、CLEFIA、LEA**）/ Part 5: Hash-functions（**PHOTON、SPONGENT、Lesamnta-LW**） | 2012(+Amd1:2025) / 2019 / 2016 ✅ |
| **ISO/IEC 10118-1/-2/-3** | Hash-functions — Part 1: General（+Amd1:2021 sponge padding）/ Part 2: Using an n-bit block cipher / Part 3: Dedicated hash-functions | 2016 / 2010 / 2018 ✅ |
| **ISO/IEC 9796-2/-3** | Digital signature schemes giving message recovery — Part 2: Integer factorization / Part 3: Discrete logarithm | 2010 / 2006 ✅ |
| **ISO/IEC 9797-1/-2/-3** | Message Authentication Codes (MACs) — Part 1: Block cipher / Part 2: Dedicated hash-function / Part 3: Universal hash-function | 2011(+Amd1:2023) / 2021(+Cor1:2024) / 2011(+Amd1:2020) ✅ |
| **ISO/IEC 9798-1..-6** | Entity authentication — General / Symmetric encipherment / Digital signature / Cryptographic check function / Zero-knowledge / Manual data transfer | 2010 / 2019 / 2019 / 1999(+Cor2:2012) / 2009 / 2010 ✅ |
| ISO/IEC 2382:2015 | Information technology — Vocabulary（合并 2382 多分部） | 2015 ✅ |
| **ISO/IEC 15408-1/-2/-3** | Common Criteria（Evaluation criteria / Security functional requirements / Security assurance requirements） | ✅ |
| **ISO/IEC 18045** | IT Security Evaluation — Testing and Evaluation Methodology | ✅ |
| **ISO/IEC 17025** | 检测机构能力通用要求 | ✅ |
| **ISO/IEC 27001/27002/27005/27701** | SC27 最著名的非密码标准（ISMS/控制/风险/隐私） | ✅ |

**⚠以下编号未在 SC27 公开目录中检索到（可能已撤销或归其他 TC），需到 iso.org 逐项核验**：
13816 · 20040 · 20564 · 21434（应为 **ISO/TC 204** 道路车辆网络安全工程）· 23840 · 29034 · 30181 · 31432 · 35264 · 38635 · 40559

### 3.5 IEEE 标准 ✅

| 标准 | 标题 | 年份 |
|---|---|---|
| **IEEE 1363** | IEEE Standard for Public-Key Cryptography Specifications（系列：1363-2001/2002/2003；后续多数被 X9.31/18033 取代） | ⚠待核具体分部 |
| **IEEE 1619** | Standard for Cryptographic Protection of Data on Block-Oriented Storage Devices | 2007 / 2018 / **2025**（XTS-AES） |
| **IEEE 1619.1** | Standard for Authenticated Encryption with Length Expansion for Storage Devices | 2007 |
| **IEEE 1619.2** | Standard for Wide-Block Encryption for Shared Storage Media | 2010 |
| **IEEE 2883 / 2883.1** | Standard for Sanitizing Storage / Recommended Practice for Use of Storage Sanitization Methods | 2022 / 2025 |
| **IEEE 802.1AE** | MAC Security（MACsec）：802.1AE-2006 → 802.1AE-2018（合并 bn-2011 GCM-AES-256、bw-2013 扩展包号、cg-2017 EDE）+ 802.1AEdk-2023 MAC 隐私保护 + Cor1-2018 | ✅ |
| **IEEE 802.1AR** | Secure Device Identity（DevID）：802.1AR-2009 → 802.1AR-2018；802.1AReg-2026 增补 ML-DSA | ✅ |
| **IEEE 802.1X** | Port-Based Network Access Control：802.1X-2004/2010 → **802.1X-2020**（含 MKA 扩展 bx-2014、YANG ck-2018）；ISO/IEC 8802-1X:2021 | ✅ |
| **IEEE 2060** | （密码相关 IEEE 标准） | ⚠待核 |
| **IEEE 2140** | （密码/车辆网络安全相关） | ⚠待核 |
| **IEEE 2410** | （密码相关 IEEE 标准） | ⚠待核 |
| **IEEE 2710** | （密码相关 IEEE 标准） | ⚠待核 |
| IEEE P1667 | Standard for Discovery, Authentication, and Authorization in Host Attachments of Storage Devices | 在研 |
| IEEE P3406 | Standard for a Purge and Destruct Sanitization Framework | 在研 |
| IEEE 802.1AEef | MAC Security Amendment: Ascon Cipher Suite | 在研 |
| IEEE 802.1AReg | Secure Device Identity Amendment: Support for ML-DSA | 在研 |

### 3.6 中国：GB/T + GM/T + 商用密码标准体系框架

#### 3.6.1 商用密码标准体系框架 ✅
来源：http://www.gmbz.org.cn/main/postDetail.html?id=20210907214833 · https://www.scctc.org.cn/xwgg/xwdt/e1a7f21a70ae4076b88c41aa6c84a8cf.html

**框架三维度**
| 维度 | 内容 |
|---|---|
| **技术维**（2021 版，七大类） | ① **密码基础类** ② **基础设施类** ③ **密码产品类** ④ **应用支撑类** ⑤ **密码应用类** ⑥ **密码测评类** ⑦ **密码管理类** |
| **管理维** | 商用密码**国家标准**（全国信息安全标准化技术委员会「信安标委」提出并归口）· **行业标准**（国家密码管理局归口，即 GM/T）· **团体标准**（学会/行业协会制定） |
| **应用维** | 社会行业（金融、电力、交通…）+ 应用领域（物联网、云计算…）；任何应用领域的标准体系在技术维和管理维结构相同 |

> 旧版（GM/Y 5001-2017《密码标准应用指南》）为**六大类**：密码基础类、密码设备类、密码服务类、基础设施类、密码管理类、密码检测类（见 http://www.gmbz.org.cn/upload/2018-03-24/1521879142922000396.pdf）。
> 统计数据（截至 2021-08）：已发布密码国家标准 **39** 项、密码行业标准 **115** 项。
> 现行指南：**GM/Y 5001《密码标准使用指南》**（年度更新，http://www.gmbz.org.cn/file/2021-10-27/16ef88be-9607-4d39-af45-d936b9c21244.pdf）。

**商用密码产品分类**（体系配套，非标准编号）
- 按形态六类：软件 / 芯片 / 模块 / 板卡 / 整机 / 系统
- 按功能七类：密码算法类 / 数据加解密类 / 认证鉴别类 / 证书管理类 / 密钥管理类 / 密码防伪类 / 综合类
- 芯片安全等级：安全一级（1 随机源）· 安全二级（4 随机源）· 安全三级（8 随机源）

#### 3.6.2 GB/T 国家标准（密码相关）✅/⚠

| 编号 | 标题 | 状态 |
|---|---|---|
| **GB/T 32905-2016** | 信息安全技术 SM4分组密码算法 | ✅ |
| **GB/T 32907-2016** | 信息安全技术 SM2椭圆曲线公钥密码算法 | ✅ |
| **GB/T 32918.1-2016** | 信息安全技术 SM2通用密码算法 第1部分：总则 | ✅ |
| **GB/T 32918.2-2016** | 第2部分：数字签名算法 | ✅ |
| **GB/T 32918.3-2016** | 第3部分：密钥交换协议 | ✅ |
| **GB/T 32918.4-2016** | 第4部分：公钥加密算法 | ✅ |
| **GB/T 32918.5-2016** | 第5部分：参数定义 | ✅ |
| **GB/T 32919-2016** | 信息安全技术 SM3密码杂凑算法 | ✅（待核年份） |
| **GB/T 32946-2016** | 信息安全技术 密码模块安全技术要求 | ✅ |
| **GB/T 33133.x** | 移动通信终端安全密码算法技术要求系列 | ⚠待核分部号与标题 |
| **GB/T 35273-2017** | 信息安全技术 个人信息安全规范 | ✅ |
| **GB/T 38636-2020** | 信息安全技术 传输层密码协议（TLCP） | ✅（见 gmbz 使用指南第 14 项） |
| **GB/T 39786-2021** | 信息安全技术 信息系统密码应用基本要求 | ✅ |
| **GB/T 41389-2022** | 信息安全技术 信息系统密码应用测评要求（系列） | ⚠待核 |
| **GB/T 43206-2023** | 信息安全技术 信息系统密码应用测评要求（2023 版） | ⚠待核 |
| **GB/T 43207-2023** | 信息安全技术 密码应用安全评估相关 | ⚠待核 |
| **GB/T 20518** | 信息安全技术 公钥基础设施 数字证书格式 | ✅（gmbz 指南第 16 项） |
| **GB/T 19713** | 信息技术 安全技术 公钥基础设施在线证书状态协议（OCSP） | ✅（gmbz 指南引 GM/T 0018/0019/0020） |
| **GB/T 19714** | 信息技术 安全技术 公钥基础设施证书管理规范 | ⚠待核 |
| **GB/T 17973-2021** | 信息安全技术 密码应用基本要求 | ⚠待核标题 |
| **GB/T 29829** | 信息安全技术 可信计算密码支撑平台功能与接口规范 | ✅（gmbz 指南第 46 项） |
| **GB/T 22239-2019** | 信息安全技术 网络安全等级保护基本要求（与密码应用等级对应） | ✅ |

#### 3.6.3 GM/T 密码行业标准（实际清单）✅
来源：https://guanzhi.github.io/GM-Standards · http://www.gmbz.org.cn/main/search.html?param=GM%2FT · GM/Y 5001《密码标准使用指南》

| 编号 | 标题 |
|---|---|
| **GM/T 0001.1-2012** | 祖冲之序列密码算法 第1部分：算法描述 |
| **GM/T 0001.2-2012** | 祖冲之序列密码算法 第2部分：基于祖冲之算法的机密性算法 |
| **GM/T 0001.3-2012** | 祖冲之序列密码算法 第3部分：基于祖冲之算法的完整性算法 |
| **GM/T 0002-2012** | SM4分组密码算法 |
| **GM/T 0003.1-2012** | SM2椭圆曲线公钥密码算法 第1部分：总则 |
| **GM/T 0003.2-2012** | 第2部分：数字签名算法 |
| **GM/T 0003.3-2012** | 第3部分：密钥交换协议 |
| **GM/T 0003.4-2012** | 第4部分：公钥加密算法 |
| **GM/T 0003.5-2012** | 第5部分：参数定义 |
| **GM/T 0004-2012** | SM3密码杂凑算法 |
| **GM/T 0005-2012** | 随机性测试规范 |
| **GM/T 0006-2012** | 密码应用标识规范 |
| **GM/T 0008-2012** | 安全芯片密码检测准则 |
| **GM/T 0009-2012** | SM2密码算法应用规范 |
| **GM/T 0010-2012** | SM2密码算法加密签名消息语法规范 |
| **GM/T 0011 / 0012 / 0013-2012** | TCM（可信密码模块）相关（编号存在，标题待核） |
| **GM/T 0014-2012** | 数字证书认证系统密码协议规范 |
| **GM/T 0015-2012** | 基于SM2算法的数字证书格式规范 |
| **GM/T 0016-2012** | 智能密码钥匙密码应用接口规范 |
| **GM/T 0017-2014** | 智能密码钥匙密码应用接口数据格式规范 |
| **GM/T 0018-2012** | 密码设备应用接口规范 |
| **GM/T 0019-2012** | 通用密码服务接口规范 |
| **GM/T 0020-2012** | 证书应用综合服务接口规范 |
| **GM/T 0021-2012** | 密码算法一次性口令应用 |
| **GM/T 0022-2014** | IPSec VPN技术规范 |
| **GM/T 0023-2014** | IPSec VPN网关产品规范 |
| **GM/T 0024-2014** | SSL VPN技术规范 |
| **GM/T 0025-2014** | SSL VPN网关产品规范 |
| **GM/T 0026-2014** | 安全认证网关产品规范 |
| **GM/T 0027-2014** | 智能密码钥匙技术要求 |
| **GM/T 0028-2014** | 密码模块安全技术要求 |
| **GM/T 0029-2014** | 签名验签服务器技术规范 |
| **GM/T 0030-2014** | 密码服务器技术规范 |
| **GM/T 0031-2014** | 安全电子印章密码技术规范 |
| **GM/T 0032-2014** | 基于角色的权限管理接口规范 |
| **GM/T 0033-2014** | 时间戳接口规范 |
| **GM/T 0034-2014** | 基于SM2密码算法的认证系统密码及相关安全技术规范 |
| **GM/T 0035.1~0035.5-2014** | RFID系统密码应用规范 第1部分：密码保护框架与安全等级 / 第2部分：标签芯片 / 第3部分：读写器 / 第4部分：标签与读写器通信 / 第5部分：密钥管理 |
| **GM/T 0036-2014** | 基于非接触式IC卡的门禁系统密码应用技术指南 |
| **GM/T 0037-2014** | 证书认证系统检测规范 |
| **GM/T 0038-2014** | 证书认证系统密钥管理检测规范 |
| **GM/T 0039-2015** | 密码模块安全技术要求检测规范 |
| **GM/T 0040-2015** | RFID标签模块口令检测准则 |
| **GM/T 0041-2015** | 智能IC卡密码检测规范 |
| **GM/T 0042-2015** | 三元组密码及其他安全协议检测规范 |
| **GM/T 0043-2015** | 数字证书互操作检测规范 |
| **GM/T 0044.1~0044.5-2016** | SM9标识密码算法 第1部分：总则 / 第2部分：数字签名算法 / 第3部分：密钥交换协议 / 第4部分：密钥封装机制与公钥加密算法 / 第5部分：参数定义（2025-01 发布英文文本） |
| **GM/T 0045-2016** | 金融数据密码机技术规范 |
| **GM/T 0054-2016** | 信息系统密码应用基本要求（体系内） |
| **GM/T 0060 ~ 0079-2018/2019** | 密码应用/检测/基础设施系列（GM/Y 5001 指南"密码产品类—安全性"大量条目；逐项标题待核） |
| **GM/T 0069** | 开放的身份鉴别框架（应用支撑类）✅（gmbz 指南第 47 项） |
| **GM/T 0085-2019** | 基于SM9标识密码算法的技术体系框架 ✅ |
| **GM/T 0086-2019** | 基于SM9标识密码算法的密钥管理系统技术规范 ✅ |
| **GM/T 0087-2019** | 密码应用基本要求（密码产品/应用类）⚠待核 |
| **GM/T 0090-2019** | 标识密码应用标识格式规范 ✅ |
| **GM/T 0092-2019** | 密码模块接口技术要求 ⚠待核 |
| **GM/T 0093-2019** | 证书与密钥交换格式规范 ✅ |
| **GM/T 0094-2019** | 公钥密码应用技术体系框架规范 ✅ |
| **GM/T 0115-2021** | 信息系统密码应用测评要求 ⚠待核 |
| **GM/T 0116-2021** | 密码算法合规性检测相关 ⚠待核 |
| **GM/T 0118-2021** | 密码产品合规性检测 ⚠待核 |
| **GM/T 0125.x-2021** | （密码算法/检测分册）⚠待核 |
| **GM/T 0128-2021** | 密码模块/密码设备检测 ⚠待核 |
| **GM/T 0134-2021** | 密码应用/测评相关 ⚠待核 |
| **GM/T 0135-2021** | ⚠待核 |
| **GM/T 0136-2021** | ⚠待核 |
| **GM/Z 4001-2013** | 密码术语（非 GM/T，密码行业标准化指导性技术文件） |

### 3.7 CA/Browser Forum、Common Criteria、FIPS 140-3

**CA/Browser Forum** ✅（https://cabforum.org/）
- **TLS Baseline Requirements（TLS BR）**：现行 **v2.3.1**（Ballot SC104）；历史版本 v2.3.0（SC100）、v2.2.9（SC101v2）、v2.2.8（SC098）、v2.2.7（SC099）、v2.2.6（SC095）、v2.2.5（SC097）、v2.2.4（SC096）、v2.2.3（SC094）、v2.2.2（SC090）、v2.2.1（SC091）、v2.2.0（SC086v3）、v2.1.9（SC088v3）、v2.1.8（SC092）、v2.1.7（SC089）、v2.1.6（SC085v2）、v2.1.5（SC081v3）、v2.1.4（SC084）、v2.1.3（SC083）、v2.1.2（SC080）、v2.1.1（SC079）、v2.1.0（SC076）、v2.0.9（SC078）…v2.0.0、v1.x（BR 1.0.0–1.8.x，含 EV 合并前的版本）。
- **EV Guidelines for TLS Server Certificates**：现行 **v2.0.1**（Ballot SC72）；历史 v2.0.0（SC65）、v1.8.1（SC68）、v1.8.0（SC56）、v1.7.x（SC54/SC48/SC47/SC42/SC41/SC35/SC30+SC31/SC27/SC24/SC17）、v1.6.x、v1.5.x。
- 其他系列：**Code Signing Requirements v3.8**（2024-08，CSC-25 合并 EV 指南）、**S/MIME BR v1.0.16**（Ballot SMC018，2026-09）、**Network and Certificate System Security Requirements v2.0.5**（Ballot NS-008，2025-07）。
- BR 保留的 Certificate Policy OID 弧（2.23.140.1.2）：`.1` domain-validated（DV）、`.2` organization-validated（OV）、`.3` individual-validated（IV）；另有 BR 层级 `.2.x` 系列。
- BR 结构（2.x）：§1 概述 / §2 证书应用 / §3 身份验证与签发 / §4 证书生命周期运营要求 / §5 审计与合规 / §6 记录与档案 / §7 证书内容与扩展（含 7.1.2.1 Root CA Profile … 7.1.2.7 Subscriber Server Certificate Profile）。

**Common Criteria + 密码模块** ✅
- **ISO/IEC 15408-1/-2/-3**（Common Criteria）、**ISO/IEC 18045**（CEM，EAL1–EAL7 评估方法）
- **ISO/IEC 19790:2025**（密码模块安全要求）+ **Annex E**（密码模块认证机制）
- **ISO/IEC 24759:2025**（密码模块测试要求）
- **ISO/IEC 17025**（检测机构能力）
- **FIPS 140-3**（2019-03）= FIPS 140-2 的继任者，直接引用 ISO/IEC 19790 + 24759，并新增 **SP 800-140** 系列（a 文档要求、b 安全策略、c 安全功能、d SSP 生成与建立、e 认证机制、f 非侵入式攻击缓解测试度量）+ SP 800-131A + SP 800-152。

---

## 4. 密码算法清单（Algorithm Inventories）

### 4.1 对称分组密码（Symmetric Block Ciphers）
来源：Wikipedia Block cipher 导航模板（完整名目）+ ISO/IEC 18033-2/-3 + 3GPP

| 分组 | 名称 |
|---|---|
| **常见（Common）** | **AES**（FIPS 197）· **Blowfish**（64-bit block, Schneier）· **DES / 3DES (TDEA)**（FIPS 46 / 46-3）· **Serpent** · **SM4**（国密，GB/T 32905；ISO/IEC 18033-3 Amd1:2021）· **Twofish** |
| **较少见（Less common）** | **ARIA**（韩，KS X 1213；ISO/IEC 18033-2）· **Camellia**（NTT+三菱，NESSIE；ISO/IEC 18033-2）· **CAST-128 (CAST5)** / **CAST-256 (CAST6)** · **GOST R 28147-89 (Magma)** · **IDEA** · **LEA**（轻量，ISO/IEC 29192-2）· **RC5 / RC6** · **SEED**（韩，KS X 1213；ISO/IEC 18033-2）· **Skipjack**（Clipper/Key escrow）· **TEA / XTEA / XXTEA** |
| **其他（Other，Wikipedia 全量）** | 3-Way · Adiantum · Akelarre · **Anubis** · **Ascon**（NIST 轻量密码标准 SP 800-225 待核）· BaseKing · BassOmatic · BATON · BEAR & LION · CAST-256 · Chiasmus · CIKS-1 · CIPHERUNICORN-A · CIPHERUNICORN-E · **CLEFIA**（ISO/IEC 29192-2）· CMEA · Cobra · COCONUT98 · Crab · Cryptomeria/C2 · CRYPTON · CS-Cipher · DEAL · DES-X · DFC · E2 · FEAL · FEA-M · FROG · G-DES · Grand Cru · Hasty Pudding ·
</task_result>
</task>