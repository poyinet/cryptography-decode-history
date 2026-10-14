---
title: 密码工具箱
title_en: Cryptography Toolkit
type: fact
---

# 工具箱（Toolkit）

> 现实世界的工具与标准 · 6 板块 / 24 卡片。

## 🔒 ① 传输与信道

**中文**：网站的 HTTPS、应用的 TLS 连接、证书信任链——现代网络的第一道防线，也是「我被劫持了吗」的答案所在。

**English**: HTTPS sites, app TLS connections, the certificate trust chain — the first line of the modern network and the answer to "was I hijacked?".

### TLS 1.3

**中文**：现代网络传输的默认通道（RFC 8446，2018）：握手只要一个往返，密钥协商用临时 DH（有限域或椭圆曲线）；0-RTT 恢复飞快，前向保密是强制项。

**English**: The default tunnel of the modern web (RFC 8446, 2018): one round trip, ephemeral finite-field or elliptic-curve DH key agreement; fast 0-RTT resumption — and forward secrecy is mandatory.

```
$ openssl s_client -connect www.example.com:443 -tls1_3
```

- [🧩 协议实验室（TLS 握手演示）](protocols.html) · *🧩 Protocol Lab (TLS handshake)*
- [🤝 DH 密钥交换（游戏）](games/dh-handshake/) · *🤝 DH Key Exchange (game)*

### AEAD：AES-GCM / ChaCha20-Poly1305

**中文**：把「加密」与「防篡改」合并成一步：GCM 是 CTR 模式 + GMAC 认证标签；ChaCha20-Poly1305 为没有 AES 硬件加速的设备而生（RFC 8439）。TLS 1.3 的安全套件只留 AEAD。

**English**: Encryption and tamper-detection united: GCM is CTR mode plus the GMAC tag; ChaCha20-Poly1305 (RFC 8439) serves devices without AES hardware. TLS 1.3 suites are AEAD-only.

```
$ openssl list -cipher-algorithms | findstr -i chacha
```

- [🧪 分组模式实验室（游戏）](games/block-modes/) · *🧪 Block Modes Lab (game)*
- [🔵 协议实验室](protocols.html) · *🔵 Protocol Lab*

### X.509 证书链与 Let’s Encrypt

**中文**：你是谁、谁给你背书、谁信任谁——证书链把「公钥 = 实体」的信任交给 CA 体系。证书本身不保密，只保真；2015 年起 Let’s Encrypt 免费签发，加密普及的推手。

**English**: Who you are, who vouches for you, who trusts whom — the certificate chain delegates "this public key is that entity" to CAs. Certificates authenticate, they never hide; since 2015 Let’s Encrypt has signed for free.

```
$ openssl x509 -in cert.pem -noout -issuer -subject
```

- [📎 密件：Let’s Encrypt](artifacts.html) · *📎 Artifact: Let’s Encrypt*
- [🧠 测验场（证书题）](quiz.html) · *🧠 Quiz (certificates)*

### 中间人与 HSTS

**中文**：公共 Wi-Fi 劫持、伪造证书、DNS 摆刀——中间人攻击的剧本都围绕「让你以为连的是真网站」。HSTS 让浏览器强制 HTTPS 并记住域名，首访也不落单。

**English**: Wi-Fi hijacks, rogue certs, DNS tricks — every MITM script makes a fake site look right. HSTS forces HTTPS for a domain and remembers it, covering even the first visit.

```
$ Strict-Transport-Security: max-age=31536000; includeSubDomains
```

- [🕵️ 协议实验室（DH 中间人演示）](protocols.html) · *🕵️ Protocol Lab (DH MITM)*
- [🧠 测验场](quiz.html) · *🧠 Quiz*

## 🗝️ ② 密钥与身份

**中文**：密钥不是「生成好就完事」：轮换、撤销、恢复、审计四件事在日常运维里一样都不能少。

**English**: A key is never "generated and done": rotation, revocation, recovery and audit are daily processes.

### SSH 密钥：ed25519

**中文**：服务器登录的事实标准。Ed25519（RFC 8032）签名快、公钥短、安全余量大——一条命令生成，密钥绝不出机。

**English**: The de facto standard for server login. Ed25519 (RFC 8032) signs fast with short keys — one command, and the private key never leaves the machine.

```
$ ssh-keygen -t ed25519 -a 100
```

- [✉️ 密钥邮件（游戏）](games/pgp-mail/) · *✉️ PGP Mail (game)*
- [🧠 测验场](quiz.html) · *🧠 Quiz*

### OpenPGP / GnuPG

**中文**：加密邮件与文件签名的经典标准（RFC 4880，新版 RFC 9580）：每人一对密钥，信任在密钥服务器与彼此背书之间织网。GPG 是参考实现，支持子密钥分离。

**English**: The classic standard for encrypted mail and signed files (RFC 4880; updated RFC 9580): one pair per user, trust woven between key servers and endorsements. GnuPG is the reference implementation.

```
$ gpg --gen-key
```

- [✉️ PGP 邮件（游戏）](games/pgp-mail/) · *✉️ PGP Mail (game)*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### TOTP 一次性密码

**中文**：基于共享密钥与当前时间切片（RFC 6238）的动态口令：认证器 App 每 30 秒一变。密钥不泄、时间同步，才能挡住登录重放。

**English**: Time-sliced one-time passwords from a shared seed (RFC 6238): authenticator apps rotate every 30 seconds. Keep the seed safe and the clock honest, and replay stops.

```
$ oathtool --totp -b BASE32KEY
```

- [🧠 测验场](quiz.html) · *🧠 Quiz*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### 密钥生命周期

**中文**：生成只是第一分钟：轮换计划、吊销机制、丢失恢复、审计日志——公钥指纹（人类可读化）就是日常审计的最小单位。

**English**: Generation is the first minute only: rotation schedule, revocation path, recovery drill, audit logs — the human-readable fingerprint is your smallest audit unit.

```
$ ssh-keygen -lf id_ed25519.pub -E sha256
```

- [👤 人物志](people.html) · *👤 People*
- [🧠 测验场](quiz.html) · *🧠 Quiz*

## 🔑 ③ 口令与登录

**中文**：口令是最后一层人肉防线：服务端怎么存、你这边怎么生成、登录时怎么验——三层都对了才叫安全。

**English**: Passwords are the last human gate: storage, generation, verification — only when all three are right is it secure.

### Passkeys / WebAuthn

**中文**：把口令换成「设备 + 生物识别」：FIDO2/WebAuthn 把挑战与源站域名绑定，钓鱼站拿回应答也无法回放。2022 年起主流平台全量支持——口令退场的开始。

**English**: Passkeys replace passwords with device plus biometrics: FIDO2/WebAuthn binds the challenge to the origin, so phishing sites cannot replay it. Mainstream since 2022 — the start of password retirement.

```
$ navigator.credentials.get({ publicKey: { … } })
```

- [🧠 测验场](quiz.html) · *🧠 Quiz*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### 口令哈希：argon2id

**中文**：服务端绝不能明文存口令。argon2id（2015 年 Password Hashing Competition 冠军）把内存、时间、并行度设为显式参数，让 GPU 暴力破解的成本曲线陡升。

**English**: Servers must never store plaintext passwords. argon2id (winner of the 2015 Password Hashing Competition) makes memory, time and parallelism explicit — steepening the GPU brute-force cost curve.

```
$ argon2id  v=19  m=19456KiB  t=2  p=1
```

- [🧠 测验场](quiz.html) · *🧠 Quiz*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### 口令熵与词组口令

**中文**：「强度」= 熵 = 字符集 × 长度。四个随机词组成的词组在熵与可记忆性上双杀「P@ssw0rd!」——随机性优先，花样装饰次之。

**English**: Strength is entropy: charset × length. Four random words beat "P@ssw0rd!" on both entropy and memorability — randomness first, adornment never.

```
$ openssl rand -base64 24
```

- [🧠 测验场](quiz.html) · *🧠 Quiz*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### 密码管理器

**中文**：一个主口令，管所有随机口令：每个站点的口令互不相同，单站泄露不会扩散；主口令本身交由内存困难派生与设备密钥保护。

**English**: One master password over many random ones: per-site uniqueness stops single-site leaks from spreading, while memory-hard derivation plus device keys protect the master itself.

```
$ pwgen -s 24
```

- [🧠 测验场](quiz.html) · *🧠 Quiz*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

## 🧮 ④ 哈希与完整性

**中文**：「这文件没被动过」「这消息就是你发的」——哈希与消息认证码回答这两个问题，也是软件供应链的第一道保险。

**English**: "This file is untouched", "this message is from you" — hashes and MACs answer both, and underwrite the software supply chain.

### SHA-256 / SHA-2

**中文**：通用哈希的默认答案（FIPS 180-4）：压缩函数迭代，输出 256 位摘要；文件校验、证书指纹、日志完整性都靠它。SHA-1 已谢幕（2017 年 SHAttered 给出实际碰撞）。

**English**: The default general-purpose hash (FIPS 180-4): iterated compression, 256-bit output; file checks, cert fingerprints, log integrity. SHA-1 stepped down after SHAttered produced real collisions in 2017.

```
$ sha256sum file.iso
```

- [🧪 破译工坊](workshop.html) · *🧪 Workshop*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### SHA-3

**中文**：另一条血统：Keccak 海绵构造（FIPS 202，2015）。结构与 SHA-2 完全不同，天然抗长度扩展攻击，并支持可扩展输出 SHAKE128/256。

**English**: A different bloodline: the Keccak sponge construction (FIPS 202, 2015). Structurally unlike SHA-2, naturally safe against length extension, with extendable output SHAKE128/256.

```
$ openssl dgst -sha3-256 file
```

- [🧪 破译工坊](workshop.html) · *🧪 Workshop*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### HMAC

**中文**：给消息盖「密钥戳」：HMAC（RFC 2104）证明消息来自持有密钥的一方且未被改动；验签用 constant-time 比较防时序窃取。

**English**: A keyed stamp on a message: HMAC (RFC 2104) proves origin from the key holder and non-alteration; verification compares in constant time against timing leaks.

```
$ openssl dgst -sha256 -hmac "MY KEY" msg
```

- [🧪 分组模式实验室（游戏）](games/block-modes/) · *🧪 Block Modes Lab (game)*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### 盐、指纹与校验

**中文**：哈希是确定的：同样输入永远同样摘要——所以口令要加盐、签名包要指纹、发行公告要贴摘要，防的都是「重放」与「替换」。

**English**: Hashes are deterministic: same input, same digest forever. Salt passwords, fingerprint keys, publish hashes for distributions — all against replay and substitution.

```
$ sha256sum -c SHA256SUMS
```

- [📎 密件册](artifacts.html) · *📎 Artifacts*
- [🧠 测验场](quiz.html) · *🧠 Quiz*

## 🏮 ⑤ 国密四件套

**中文**：SM2 / SM3 / SM4 / ZUC——中国国家密码管理机构的四件标准武器，分别覆盖公钥、哈希、对称与序列密码。

**English**: SM2 / SM3 / SM4 / ZUC: China’s four national-standard families covering public-key, hashing, symmetric and stream ciphers.

### SM4

**中文**：国密分组密码（GB/T 32907）：128 位密钥与分组、32 轮 Feistel 结构，安全画像对齐 AES-128；智能卡与行业芯片里最常见。

**English**: The national block cipher (GB/T 32907): 128-bit key and block, 32-round Feistel — an AES-128-class profile, ubiquitous in smart cards and industrial chips.

```
$ GB/T 32907 · 128-bit block · 32 rounds
```

- [🀄 国密网关（游戏）](games/gm-gateway/) · *🀄 GM Gateway (game)*
- [🏮 中华密码史](zh-crypto.html) · *🏮 Chinese Crypto*

### SM3

**中文**：国密哈希（GB/T 32905）：256 位摘要，与 SM2 组成《密码法》下的签名组合；算法描述公开、实现开源。

**English**: The national hash (GB/T 32905): 256-bit digest; paired with SM2 it forms the signing stack referenced by the PRC Cryptography Law. Spec public, implementations open.

```
$ GB/T 32905 · 256-bit digest
```

- [🀄 国密网关（游戏）](games/gm-gateway/) · *🀄 GM Gateway (game)*
- [🏮 中华密码史](zh-crypto.html) · *🏮 Chinese Crypto*

### SM2

**中文**：国密椭圆曲线公钥（GB/T 32918）：SM2 曲线上的签名与密钥交换，是国产 CA 与政务系统的标准后端。

**English**: The national elliptic-curve public-key standard (GB/T 32918): signatures and key exchange over the SM2 curve — the standard backend of domestic CAs and government systems.

```
$ GB/T 32918 · 256-bit curve
```

- [🀄 国密网关（游戏）](games/gm-gateway/) · *🀄 GM Gateway (game)*
- [🏮 中华密码史](zh-crypto.html) · *🏮 Chinese Crypto*

### ZUC 祖冲之

**中文**：国密序列密码：2011 年被 3GPP 采纳为移动通信标准加密算法 128-EEA3 / 128-EIA3，与 SM 系列并行撑起另一条战线。

**English**: The national stream cipher: adopted by 3GPP in 2011 as 128-EEA3 / 128-EIA3 for mobile networks — a parallel front to the SM family.

```
$ 3GPP 128-EEA3 / 128-EIA3
```

- [🀄 国密网关（游戏）](games/gm-gateway/) · *🀄 GM Gateway (game)*
- [🏮 中华密码史](zh-crypto.html) · *🏮 Chinese Crypto*

## ⚛️ ⑥ 基线与前沿

**中文**：经典与量子的换挡期：标准刚落地、混合成默认、迁移有年表——这三张牌是未来十年的技术基线。

**English**: Between classical and quantum: fresh standards, hybrid defaults, a migration timetable — the next decade’s technical baselines.

### 后量子标准 FIPS 203/204/205

**中文**：2024 年 8 月 NIST 发布首批后量子标准：ML-KEM（Kyber，FIPS 203）做密钥封装、ML-DSA（Dilithium，FIPS 204）做签名、SLH-DSA（SPHINCS+，FIPS 205）做保守的哈希基签名——格密码正式上岗。

**English**: NIST published the first post-quantum standards in August 2024: ML-KEM (Kyber, FIPS 203) for key encapsulation, ML-DSA (Dilithium, FIPS 204) and the conservative hash-based SLH-DSA (SPHINCS+, FIPS 205) for signatures.

```
$ FIPS 203 · 204 · 205 (2024)
```

- [🧬 BB84 量子密钥（游戏）](games/bb84/) · *🧬 BB84 Quantum Keys (game)*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### 混合方案

**中文**：过渡期默认「先混合、后纯 PQ」：TLS 把经典 X25519 与 ML-KEM 拼在一起，攻击者必须两套都破——没有系统独自背全部鸡蛋。

**English**: Hybrid-first during transition: TLS combines classic X25519 with ML-KEM; an attacker must break both — no single unproven system carries the load.

```
$ X25519 + ML-KEM (Kyber768)
```

- [🤝 DH 密钥交换（游戏）](games/dh-handshake/) · *🤝 DH Key Exchange (game)*
- [📖 密码学词典](glossary.html) · *📖 Glossary*

### 前向保密

**中文**：会话密钥每次连接临时生成（DHE/ECDHE）：长期私钥今日泄露，历史流量依旧安全——TLS 1.3 已把它从可选变强制。

**English**: Session keys are ephemeral per connection (DHE/ECDHE): leak the long-term key today, past traffic stays safe. TLS 1.3 moved this from optional to mandatory.

```
$ Ephemeral DH · no static sessions
```

- [🤝 DH 密钥交换（游戏）](games/dh-handshake/) · *🤝 DH Key Exchange (game)*
- [🧩 协议实验室](protocols.html) · *🧩 Protocol Lab*

### 量子威胁时间表

**中文**：「先收割、后解密」（HNDL）：攻击者此刻录下加密流量，等量子计算机成熟再回放。迁移从现在开始，NIST 指向 2035 年前完成大规模系统替换。

**English**: Harvest now, decrypt later: record the traffic today, decrypt once quantum machines mature. Migration starts now — NIST points at 2035 for large-system replacement.

```
$ HNDL · migrate by 2035
```

- [🧬 BB84 量子密钥（游戏）](games/bb84/) · *🧬 BB84 Quantum Keys (game)*
- [🧠 测验场](quiz.html) · *🧠 Quiz*

