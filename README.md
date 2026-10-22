# cryptography-decode-history · 加密解密知识百科

> 一部以**三维知识晶格**组织的「人类三千年加密解密史」开源知识库：每个知识点同时被**哪个时代 × 哪类技术 × 关联谁/哪件密件/哪台机器**三轴定位并互链。
> 纯 Markdown + frontmatter，GitHub 原生可读。中文主文 + 英文版双语。内容 CC BY 4.0。

## 从这里开始（Start Here）
**第一次读这个仓库？** 任选一条入口，每条都顺路到底：

- 🕰 **零基础顺读**：[古代起源](02-eras/e01-origins/README.md) → 每个时代页底部有「上一时代 / 下一时代」导航，沿时间轴一路顺读到今 → 再进 [基础与术语](01-foundations.md)。
- 🔍 **破译者路线**：先读 [破译方法](tech/d07-cryptanalysis.md)，再按时代看真实破译战例。
- ⚙️ **专家直达**：直接进下方 [轴 2 技术域](#轴-2--概念技术体系24-技术域) 的对应域，域内交叉链接到时代与实体。
- 🧩 **查人 / 查物 / 查机器**：[人物志索引](people/README.md)（87 位 · 按时代）· [密件册索引](artifacts/README.md)（48 件）· [机器博物馆](machines/README.md)（7 台）。

## 三轴结构

### 轴 1 · 编年叙事（19 章，两段）
段 A · 密码时代（前计算机，按时间段）：
- [古代起源（前 500 BCE 前）](02-eras/e01-origins/) —— 象形/楔形、结绳、刺青、泥板暗记
- [古典希腊罗马（前 500–476 CE）](02-eras/e02-classical/) —— scytale、Laconic、凯撒、Atbash、波利比奥斯
- [拜占庭与早期伊斯兰（476–800）](02-eras/e03-byzantine-islamic/) —— 拜占庭宫廷密码、早期阿拉伯
- [阿拉伯黄金时代（800–1258）](02-eras/e04-arabic-golden-age/) —— al-Kindi 频率分析（约 850）
- [中世纪欧洲（1258–1450）](02-eras/e05-medieval-europe/) —— Trithemius、Ars Magica、首个多表
- [文艺复兴与宗教改革（1450–1600）](02-eras/e06-renaissance/) —— 阿尔贝蒂盘 1467、维吉尼亚 1553、苏格兰玛丽 1586
- [近代早期与隐写（1600–1789）](02-eras/e07-early-modern-steganography/) —— 培根双字体、卡当格栅、书密码
- [破译者时代（1789–1914）](02-eras/e08-codebreakers/) —— 含电报时代：摩斯、Kasiski、巴贝奇、惠斯通、Vernam 1917

段 B · 算法时代（计算机时代，按革命）：
- [第一次世界大战（1914–1918）](02-eras/e09-ww1/) —— ADFGVX、Playfair、早期 Enigma
- [战间期（1918–1939）](02-eras/e10-interwar/) —— Enigma 崛起、Typex、波兰数学家首破 Enigma
- [第二次世界大战（1939–1945）](02-eras/e11-ww2/) —— Enigma/Bombe、M-209、紫密、JN-25、洛伦兹、纳瓦霍
- [冷战与信息论转折（1945–1975）](02-eras/e12-cold-war-info-theory/) —— VENONA、OTP 复用、NSA/GCHQ、香农 1949
- [公钥革命（1976–1990）](02-eras/e13-public-key/) —— Diffie-Hellman 1976、RSA 1977、Merkle
- [标准化时代（1977–2001）](02-eras/e14-standardization/) —— DES、AES、SHA、NIST
- [网络与协议时代（1991–2010）](02-eras/e15-web-protocols/) —— TLS、PGP、PKI、证书、数字签名
- [量子转折（1984–2019）](02-eras/e16-quantum-turn/) —— BB84、Shor、Grover、QKD
- [后量子时代（2016–今）](02-eras/e17-post-quantum/) —— NIST PQC、ML-KEM/ML-DSA/SLH-DSA、FIPS 203-205
- [前沿（今）](02-eras/e18-frontier/) —— 同态、MPC、零知识、Passkey
- [中国平行线（横切）](02-eras/e19-china/) —— 反切→红军无线电→国密（SM2/SM3/SM4/ZUC）

### 轴 2 · 概念/技术体系（24 技术域）
- [基础与术语](01-foundations.md)
- [单表替换（Monoalphabetic Substitution）](tech/d02-monoalphabetic.md)
- [多表替换（Polyalphabetic Substitution）](tech/d03-polyalphabetic.md)
- [换位（Transposition）](tech/d04-transposition.md)
- [转子/机械密码（Rotor & Mechanical Ciphers）](tech/d05-rotor-mechanical.md)
- [OTP 与流密码（OTP & Stream Ciphers）](tech/d06-otp-stream.md)
- [破译方法（Cryptanalysis）](tech/d07-cryptanalysis.md)
- [对称分组密码（Symmetric Block Ciphers）](tech/d08-block-ciphers.md)
- [哈希（Hash Functions）](tech/d09-hashes.md)
- [消息认证与 AEAD（Authentication & AEAD）](tech/d10-auth-aead.md)
- [非对称公钥（Asymmetric Public-key）](tech/d11-asymmetric.md)
- [数字签名（Digital Signatures）](tech/d12-signatures.md)
- [密钥管理（Key Management）](tech/d13-key-management.md)
- [协议与 PKI（Protocols & PKI）](tech/d14-protocols-pki.md)
- [零知识证明（Zero-knowledge Proofs）](tech/d15-zkp.md)
- [秘密共享与 MPC（Secret Sharing & MPC）](tech/d16-secret-sharing-mpc.md)
- [侧信道与物理攻击（Side-Channel & Physical Attacks）](tech/d17-side-channel.md)
- [隐写与信息隐藏（Steganography & Info Hiding）](tech/d18-steganography.md)
- [随机数与 CSPRNG（Randomness & CSPRNG）](tech/d19-randomness.md)
- [中国国密（China National Cryptography）](tech/d20-china-sm.md)
- [量子密码（Quantum Cryptography）](tech/d21-quantum-crypto.md)
- [后量子（Post-Quantum）](tech/d22-post-quantum.md)
- [应用安全工程（Applied Security Engineering）](tech/d23-applied-security.md)
- [理论基础（Theoretical Foundations）](tech/d24-theory.md)

### 轴 3 · 实体层（人/物/词/题）
- [人物志 People](people/README.md) · 87 位（按时代编年索引）
- [密件册 Artifacts](artifacts/README.md) · 48 件
- [机器博物馆 Machines](machines/README.md) · 7 台
- [测验 Quiz](quiz/questions.md) · 252 题
- [冷知识 Trivia](facts/facts.md)
- [名言 Quotes](quotes/quotes.md)
- [时间线 Timeline](timeline/timeline.md)
- [世界地图 World Map](map/map.md)
- [中华密码史 China's Cryptography](02-eras/e19-china/china.md)
- [人物关系网 People Relations](relations/relations.md)
- [隐藏彩蛋 Easter Eggs](eggs/eggs.md)

## 导航与交叉引用
- **时间轴顺读**：每个时代页（`02-eras/eNN-*/README.md`）底部都有「上一时代 / 下一时代」导航，可沿 e01→e18 一路顺读，e19 中国平行线横切。
- **域 ⇄ 时代 ⇄ 人物 ⇄ 游戏**：每个技术域页（`tech/dNN-*.md`）末尾「关联时代 / 人物 / 游戏」三组交叉链接；每个时代页「关联」节反向列出属该时代的域 / 人物 / 机器 / 密件 / 游戏。
- **查人 / 查物**：[人物志索引](people/README.md) / [密件册索引](artifacts/README.md) / [机器博物馆](machines/README.md) 按时代编年、名字直达。

## 状态
内容已全量填充并交叉互链：19 时代（5 叙述 + 12 章）× 24 技术域 × 实体层（人物 87 / 密件 48 / 机器 7 / 术语 282 + 测验 252）。数据真源为 poyi.net 站点数据，经 `tools/mdgen/` 生成器落成本 Markdown，`gen-all.js` 全量重建 + `check-mdgen-parity.js` 逐字段等价校验全绿。
