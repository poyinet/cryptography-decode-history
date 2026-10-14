---
title: 协议与 PKI
title_en: Protocols & PKI
type: domain
domain: d14
---

# 协议与 PKI（Protocols & PKI）

> 技术域 d14 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：协议与 PKI：把算法拼成可用的安全协议。TLS 1.3 一个往返完成握手 + 前向保密；X.509 证书链把「公钥 = 实体」的信任交给 CA 体系；Let’s Encrypt 让免费签发成为可能。PKI 是整个公钥互联网的信任骨架。

**English**: Protocols & PKI: assemble algorithms into usable secure protocols. TLS 1.3 completes handshake + forward secrecy in one round trip; X.509 certificate chains delegate "this public key is that entity" to the CA system; Let’s Encrypt made free issuance possible. PKI is the trust backbone of the public-key internet.
## 算法 / 协议

### TLS 握手（TLS Handshake）

**中文**：🕵️ 中间人视角：第 1–2 步是明文，Eve 可以看也可以改——但她在第 3 步会露馅：没有 CA 私钥就造不出可信证书，客户端验证证书链失败并报警断连。这就是「HTTPS 能防中间人」的全部根基：不是保密了握手，而是认证了身份。

**English**: 🕵️ MITM view: steps 1–2 are plaintext — Eve can read and even modify them. But she trips at step 3: without the CA private key she cannot forge a trusted certificate, so chain verification fails and the client aborts. That is the entire foundation of HTTPS anti-MITM: not hiding the handshake, authenticating identity.

### 区块链哈希链（Blockchain Hash Chain）

**中文**：区块链 = 用「前块哈希」串起来的链。篡改第 2 块的数据，它的哈希变红、第 3 块记录的 prev 对不上而断裂——攻击者想改旧账，就必须重算其后所有区块，这正是「不可篡改」的机械原理。

**English**: A blockchain is a chain glued by previous-block hashes. Tamper with block 2: its own hash turns red and block 3 recorded prev no longer matches — rewriting history means recomputing every later block. That is the mechanical meaning of immutability.
## 术语

### HTTPS
- 中文：网页传输加密协议——你现在读这页就在用它。
- English: The encrypted web protocol — you are using it to read this page.
- 游戏：`rsa`
- 章节：modern

### Base64
- 中文：把二进制数据变成可打印文本的编码，现代协议的日常编码表示。
- English: Turning binary data into printable text — the everyday code of modern protocols.
- 游戏：`base64`
- 章节：modern

### Transport Layer Security (TLS)（传输层安全协议）
- 中文：传输层安全协议。互联网上最常用的加密协议，为 HTTPS、邮件等提供机密性、完整性与身份认证；通过握手协商密钥，再以对称加密传输数据。
- English: The most widely used protocol for securing Internet communications, protecting HTTPS, email, and other applications with confidentiality, integrity, and authentication. A handshake negotiates keys, after which traffic is encrypted under symmetric ciphers.
- 游戏：`rsa`
- 章节：modern

### Public Key Infrastructure (PKI)（公钥基础设施）
- 中文：公钥基础设施。管理公钥的完整体系：负责证书的签发、分发、验证与吊销，通过信任链让用户可靠获得并验证他人公钥，支撑 HTTPS 等应用。
- English: The complete framework for managing public keys: issuing, distributing, verifying, and revoking digital certificates through a chain of trust. It lets users reliably obtain and validate others' public keys, underpinning HTTPS and digital signatures.
- 游戏：`rsa`
- 章节：modern

### Certificate Authority (CA)（证书颁发机构）
- 中文：证书颁发机构。PKI 中的可信第三方，核实申请者身份并签发数字证书，用自己的私钥担保公钥归属；浏览器内置其根证书以建立信任链。
- English: A trusted third party in a PKI that verifies an applicant's identity and issues digital certificates, vouching for public-key ownership with its own signature. Root certificates embedded in browsers anchor the chain of trust.
- 游戏：`rsa`
- 章节：modern

### Digital Envelope（数字信封）
- 中文：数字信封。混合加密的典型实现：用对称密钥加密消息（快），再用接收方公钥加密该对称密钥；接收方先解出密钥再解密，兼顾速度与安全分发。
- English: A hybrid-encryption construct: the message is encrypted with a fast symmetric key, and that key is sealed with the recipient's public key. The recipient unwraps the key first, then decrypts, combining speed with secure key distribution.
- 游戏：`rsa`
- 章节：modern

### Key Exchange（密钥交换）
- 中文：密钥交换。双方在不安全信道上安全协商共享密钥的过程，典型如 Diffie-Hellman 与 ECDH；是建立加密会话的前提，常配合证书防中间人攻击。
- English: The process by which two parties agree on a shared secret key over an insecure channel, classically via Diffie-Hellman or ECDH. It precedes encrypted sessions and is usually authenticated with certificates to prevent man-in-the-middle attacks.
- 游戏：`dh-handshake`
- 章节：quantum

### End-to-End Encryption（端到端加密）
- 中文：端到端加密。消息在发送端加密、仅在接收端解密，中间服务器只转发密文而无法读取内容；用于即时通讯与云存储，如 Signal 协议。
- English: A property in which messages are encrypted on the sender's device and decrypted only on the recipient's, so intermediate servers relay ciphertext they cannot read. It protects messaging and cloud-storage services, as exemplified by the Signal protocol.
- 游戏：`rsa`
- 章节：modern

### Zero-Knowledge Proof（零知识证明）
- 中文：零知识证明。证明者在不泄露任何秘密的前提下向验证者证明某断言为真，如证明「我知道密码」却不透露密码；用于隐私保护与区块链。
- English: A cryptographic method allowing a prover to convince a verifier that a statement is true without revealing any secret information, such as proving knowledge of a password without disclosing it. It underpins privacy systems and blockchains.
- 游戏：`shamir`
- 章节：modern

### Homomorphic Encryption（同态加密）
- 中文：同态加密。允许直接对密文做运算，解密结果恰等于对明文做同样运算的结果，从而可在不泄露数据的情况下完成计算；是隐私计算核心技术，但性能开销大。
- English: Encryption that permits computations directly on ciphertexts, such that decrypting the result matches computing on the plaintexts. It enables processing data without exposing it—central to privacy computing—though at significant performance cost.
- 游戏：`shamir`
- 章节：modern

### Post-Quantum Cryptography（后量子密码）
- 中文：后量子密码。能抵抗量子计算机攻击的密码算法，基于格、编码、多变量等数学难题；与量子密码不同，NIST 已标准化若干算法以备迁移。
- English: Cryptographic algorithms designed to resist quantum-computer attacks, based on hard problems such as lattices, codes, or multivariate equations. Distinct from quantum cryptography, it is being standardized by NIST to prepare for the quantum era.
- 游戏：`pqc-match`
- 章节：quantum

### Kerckhoffs's Principle（柯克霍夫原则）
- 中文：柯克霍夫原则。密码体制的安全性应只依赖密钥保密，而非算法保密——即使算法完全公开，只要密钥不泄露系统仍安全；是现代密码设计的基石。
- English: The maxim by Auguste Kerckhoffs that a cryptosystem should remain secure even if everything about it except the key is public. Security must rest entirely on key secrecy rather than on hiding the algorithm—a cornerstone of modern design.
- 游戏：`substitution`
- 章节：caesar, arab

### Certificate Transparency (CT)（证书透明度）
- 中文：把每一张 TLS 证书都公开记进只可追加的公共账本，谁也别想偷偷给你签一张假证书；浏览器会拒绝查不到日志记录的证书，让 CA 的滥权无所遁形。
- English: A public, append-only ledger of every issued TLS certificate, so nobody can quietly mint a fake one. Browsers reject certificates missing from the logs, keeping certificate authorities honest.
- 游戏：`rsa`
- 章节：modern

### Online Certificate Status Protocol (OCSP)（OCSP 证书状态协议）
- 中文：浏览器实时向 CA 查询「这张证书吊销了吗」的协议，比下载整张吊销列表更快更省；缺点是要每次联网问、还泄露访问痕迹，如今常被 OCSP Stapling 替代。
- English: A protocol for checking a certificate's revocation status in real time, faster and lighter than downloading a full revocation list. Its round-trip and privacy costs led to OCSP stapling.
- 游戏：`rsa`
- 章节：modern

### HTTP Strict Transport Security (HSTS)（HSTS 强制 HTTPS）
- 中文：网站通过响应头命令浏览器「以后只准用 HTTPS 访问我」，浏览器从此自动把 http 升级成 https，从源头掐断降级劫持；银行和邮箱都在靠它。
- English: A response header ordering browsers to only ever contact the site over HTTPS, auto-upgrading http links and blocking downgrade attacks. Banks and email providers rely on it.
- 游戏：`rsa`
- 章节：modern

### Key Confirmation（密钥确认）
- 中文：通信双方在握手后互相证明各自算出了同一把会话密钥，防止密钥不匹配或中间人悄悄插足。
- English: After a handshake, both parties prove to each other that they derived the same session key, ruling out key mismatch or a silent man-in-the-middle.
- 游戏：`bb84`
- 章节：modern

### Key Rotation（密钥轮换）
- 中文：定期或按事件更换密钥，缩短单把密钥的暴露窗口，即使某把密钥泄露，损失也被限制在最短时间内。
- English: Replacing keys on a schedule or after events to shrink each key's exposure window, so a leaked key limits the damage to the shortest period.
- 游戏：`sm4`
- 章节：modern

### WebCrypto
- 中文：浏览器内置的密码学接口，让网页直接调用 AES、RSA、哈希等原语，无需第三方库就能本地加解密与签名。
- English: The browser's built-in cryptography API, letting web pages call AES, RSA, hashing and other primitives directly, with no third-party library needed for local encryption, decryption and signing.
- 游戏：`workshop`
- 章节：modern

### Lattice-based Cryptography（格密码）
- 中文：基于高维格中「最短向量」「最近向量」等难题构造的密码体制：把数千维空间中的点阵搅进噪声，至今没有给 Shor 算法留下可乘之隙，是后量子标准的主力路线。
- English: Cryptosystems built on lattice problems such as finding short or close vectors in high dimensions: points scattered through thousands of dimensions with noise added, offering no purchase for Shor's algorithm — the mainstay route of post-quantum standards.
- 游戏：`pqc-match`
- 章节：quantum

### Kyber (ML-KEM)（Kyber（ML-KEM））
- 中文：基于模块格上带误差学习问题（MLWE）的密钥封装机制，2024 年被 NIST 标准化为 FIPS 203（ML-KEM），用于通用加密的量子安全迁移，已被 Chrome、Signal 等试水混合部署。
- English: A key-encapsulation mechanism based on the Module Learning-With-Errors problem over module lattices, standardized by NIST as FIPS 203 (ML-KEM) in 2024 for quantum-safe general encryption; already trialed in hybrid mode by Chrome, Signal and others.
- 游戏：`pqc-match`
- 章节：quantum

### Dilithium (ML-DSA)（Dilithium（ML-DSA））
- 中文：基于格的数字签名方案，2024 年被 NIST 标准化为 FIPS 204（ML-DSA）；签名紧凑、验证高效，与 ML-KEM 并列后量子迁移的主力签名算法。
- English: A lattice-based digital signature scheme standardized by NIST as FIPS 204 (ML-DSA) in 2024; compact signatures and fast verification make it the primary post-quantum signing algorithm alongside ML-KEM.
- 游戏：`pqc-match`
- 章节：quantum

### Harvest Now, Decrypt Later（先截获、后解密）
- 中文：对手今天批量囤积无法破译的密文，等量子计算机成熟后再回放解读；保密期以十年计的数据（医疗、国家档案）因此现在就需要后量子保护。
- English: An adversary warehouses today's unbreakable ciphertexts today, waiting to replay them once quantum computers mature. Data whose secrecy horizon spans decades—medical records, state archives—therefore needs post-quantum protection right now.
- 游戏：`pqc-match`
- 章节：quantum

### SM2
- 中文：中国国家商用公钥算法标准（GB/T 32918）：基于 256 位椭圆曲线的数字签名、密钥交换与公钥加密体系——角色相当于国标版的 ECDSA+ECDH。
- English: China's commercial public-key standard (GB/T 32918): digital signature, key exchange and encryption over a 256-bit elliptic curve — the national counterpart of ECDSA plus ECDH.
- 游戏：`gm-gateway`
- 章节：modern

### ZUC (Zu Chongzhi)（祖冲之算法（ZUC））
- 中文：以南北朝数学家祖冲之命名的序列密码：2011 年入选 3GPP LTE 安全机制成为国际标准，用于 4G/5G 通信加密——中国密码算法首次进入国际移动通信标准体系。
- English: A stream cipher named after the ancient mathematician Zu Chongzhi: adopted into 3GPP LTE security in 2011 as an international standard for 4G/5G traffic — the first Chinese algorithm in global mobile security.
- 游戏：`xor`
- 章节：modern

### Double Ratchet（双棘轮算法）
- 中文：Signal 协议的核心：每条消息都推进一次加密棘轮，实现前向保密与自愈（被攻破后自动恢复安全）。
- English: The core of the Signal Protocol: each message advances a cryptographic ratchet, providing forward secrecy and self-healing after compromise.
- 游戏：`bb84`
- 章节：modern

### Kerberos
- 中文：MIT 开发的网络认证协议：通过可信第三方（KDC）签发票据，避免明文传密码——企业内部认证的事实标准。
- English: MIT's network authentication protocol: a trusted third party (KDC) issues tickets, avoiding plaintext passwords — the de facto enterprise auth standard.
- 游戏：`sm4`
- 章节：modern

### Forward Secrecy（前向保密）
- 中文：会话密钥由临时参数实时生成、会话结束即销毁——即使长期私钥日后泄露，过去的通信记录也无法解密。TLS 1.3 强制开启。
- English: Session keys are ephemeral and destroyed after use — even if the long-term key is later compromised, past sessions stay secure. Mandatory in TLS 1.3.
- 游戏：`bb84`
- 章节：modern

### Needham-Schroeder
- 中文：1978 年提出的认证协议，是 Kerberos 的理论基础——但原始版本因缺少旧密钥标识而被攻破（Lowe 1995 修正）。
- English: A 1978 authentication protocol, the theoretical basis for Kerberos — the original was broken (Lowe 1995) due to a missing key-identity field.
- 游戏：`sm4`
- 章节：modern

### TOTP（时间型一次性密码）
- 中文：RFC 6238 标准的双因素验证码：截断(HMAC(共享密钥, 当前时间÷30)) 取六位。30 秒轮换使偷窥到的验证码迅速失效。
- English: The RFC 6238 two-factor code: truncate(HMAC(secret, now ÷ 30)) to six digits. Rotating every 30 seconds, a peeked code dies almost immediately.
- 游戏：`totp-verify`
- 章节：modern

### Passkey (FIDO2/WebAuthn)（通行密钥（Passkey））
- 中文：基于公私钥对的免密登录标准：私钥留在设备内、签名绑定真实域名——钓鱼站拿不到可用凭据，也没有可泄露的共享秘密。正全面替代 TOTP 与短信验证。
- English: The passwordless login standard built on key pairs: the private key never leaves your device and signatures are bound to the true origin — phishers get nothing, and no shared secret can leak. Now displacing TOTP and SMS codes.
- 游戏：`totp-verify`
- 章节：modern

### S/MIME（安全邮件标准 S/MIME）
- 中文：基于 X.509 证书的邮件加密与签名标准——PGP 的「机构化」对照面：信任由 CA 层级背书而非人际信任网。企业邮件加密的事实标准。
- English: Certificate-based email encryption and signing — PGP's institutional mirror: trust flows from CA hierarchies rather than webs of personal endorsements. The corporate standard for sealed mail.
- 游戏：`pgp-mail`
- 章节：modern

### PAKE（口令认证密钥交换（PAKE））
- 中文：在仅共享弱口令的两端协商出强会话密钥，且窃听者无法离线暴力验证猜测（如 SRP、OPAQUE）。Wi-Fi WPA3 的握手核心正是 PAKE。
- English: Protocols (SRP, OPAQUE) that turn a shared weak password into a strong session key while denying eavesdroppers offline verification of guesses — the heart of WPA3's SAE handshake.
- 游戏：`password-vault`
- 章节：modern

### Noise Protocol Framework（Noise 协议框架）
- 中文：一组精挑的握手模式组合框架（XX/IK/pskN……），Signal、WhatsApp、WireGuard 均采用其变体——用最短的规范描述现代安全信道如何建立。
- English: A framework of hand-picked handshake patterns (XX, IK, pskN...) adopted in variant form by Signal, WhatsApp and WireGuard — modern secure channels described in the fewest possible words.
- 游戏：`bb84`
- 章节：modern

### WireGuard
- 中文：2015 年出现的现代 VPN 协议：仅约 4000 行代码，固定使用 Curve25519+ChaCha20-Poly1305+BLAKE2s 的 Noise 握手变体——以极简面缩小攻击面。
- English: A modern VPN protocol (2015): ~4,000 lines of code with a fixed Noise-based handshake over Curve25519, ChaCha20-Poly1305 and BLAKE2s — minimalism as an attack-surface strategy.
- 游戏：`bb84`
- 章节：modern

### Threshold Signature（门限签名）
- 中文：(t,n) 门限思想的签名版：任意 t 方合作才能产出一个有效签名，签名本身不暴露参与人数与份额。机构托管钱包与多方审批的基础设施。
- English: Signatures under (t,n) secret sharing: any t parties jointly produce one valid signature that reveals nothing about the shares or participants — the backbone of institutional custody and multi-party approval.
- 游戏：`shamir`
- 章节：modern

### Off-the-Record (OTR)（离线记录协议（OTR））
- 中文：2004 年的即时通讯加密协议：端到端加密 + 前向保密 + 可否认性（消息可事后被任何一方伪造，故不构成法律证据）。Signal 双棘轮的前身。
- English: A 2004 IM protocol: end-to-end encryption with forward secrecy and deniability — either party could have forged any past message, so transcripts prove nothing. The ancestor of Signal's Double Ratchet.
- 游戏：`pgp-mail`
- 章节：modern

### Diffie-Hellman Key Exchange（迪菲-赫尔曼密钥交换）
- 中文：1976 年 Whitfield Diffie 与 Martin Hellman 公钥革命的核心：双方不经秘密信道，各自用数学交换公开值，最终得到相同的私密字串。它的安全性基于离散对数难题。
- English: The centerpiece of Diffie and Hellman's 1976 public-key revolution: two strangers exchange public values over any channel and end up with the same secret. Security rests on the discrete-log assumption.
- 游戏：`dh-handshake`
- 章节：modern

### PGP (Pretty Good Privacy)（PGP 加密邮件）
- 中文：1991 年 Phil Zimmermann 向全球发放的第一个个人级加密邮件系统：混合加密 + 数字签名 + 信任之网。今天的企业标准 S/MIME 与个人安全邮件仍以它为原形。
- English: The first personal-grade encrypted email system, released by Phil Zimmermann in 1991: hybrid encryption plus signatures plus the Web of Trust. Corporate S/MIME and personal secure mail still follow its blueprint.
- 游戏：`pgp-mail`
- 章节：modern

### SSH
- 中文：1995 年 Tatu Ylönen 在芬兰设计的远程登录协议：用公钥挑战-响应代替口令，Diffie-Hellman 会话密钥经公钥认证后建立。从 PuTTY 到服务器运维，每天数十亿次 SSH 连接。
- English: Tatu Ylönen's 1995 remote-login protocol: public-key challenge-response replaces passwords, then a DH session key flows under public-key authentication. Servers, pipelines and git — billions of SSH sessions a day.
- 游戏：`rsa`
- 章节：modern

### Tor（洋葱路由）
- 中文：匿名浏览网络：流量由三层节点（入口/中间/出口）层层洋葱式加密，每个节点只见下一跳，链路永不完整——从身份泄露到规避审查，它是公认的匿名学标杆。
- English: The anonymity network that encrypts traffic in three layers through entry, middle and exit nodes: each node sees only its hop, so no one holds the whole route — the gold standard for anti-censorship anonymity.
- 游戏：`tor-onion`
- 章节：modern

### A5/1
- 中文：由 3 个短 LFSR 组成的 GSM 手机密码，用来加密通话与短信。GSM 有背门与无背门两说——实战上它弱到 2009 年 Nohl 用彩虹表数分钟破掉，各大安全会议指责它「22 年不升级」。
- English: The GSM cipher of three short LFSRs, protecting calls and texts. It is so weak that Nohl's 2009 rainbow-table attack broke it in minutes before a live conference audience — and GSM kept it for years.
- 游戏：`morse`
- 章节：modern

### Key Encapsulation Mechanism（密钥封装 KEM）
- 中文：一种把「公钥加密」重新表述为标准化的密钥容器：输出一对（会话密钥, 封装密文）。TLS 1.3 用 KEM 交换数据，NIST 后量子标准以 ML-KEM 为主将。
- English: A formal way of describing public-key encryption: outputs a pair (session key, encapsulated ciphertext). TLS 1.3 uses KEMs for key transmission, and NIST's post-quantum flagship is ML-KEM.
- 游戏：`pqc-match`
- 章节：modern

### SM9（国密 SM9）
- 中文：基于双线性对的标识密码标准：公钥不需要证书，用使用者标识（如手机号、邮箱）即可验证签名——国密「用身份就当钥匙」的技术路线，与 SM2 短密钥、SM3 哈希、SM4 加密并称国密四件套。
- English: The Chinese national identity-based standard built on bilinear pairs: the public key comes from the user's identifier (phone, email) instead of certificates — the 4th piece of China's SM family with SM2, SM3 and SM4.
- 游戏：`gm-gateway`
- 章节：modern

### Two-Factor Authentication（双因素认证（2FA））
- 中文：把「你知道的」「你拥有的」「你是什么」三种独立维度取两种做组合验证——仅口令泄露不足以过关。短信验证、TOTP、Passkey、硬件密钥依次是它的实现演进。
- English: Verifying with two-independent of the three classes: something you know, have or are. Password-plus-SMS, TOTP, then Passkeys and security keys are the species of this umbrella.
- 游戏：`totp-verify`
- 章节：modern

### Content Security Policy (CSP)（内容安全策略（CSP））
- 中文：浏览器强制执行的加载白名单：只允许可信来源的脚本/样式，内联与注入默认拒绝——即使 XSS 防护被绕过，也无法执行攻击者代码。
- English: A browser-enforced allowlist for scripts and styles: inline and injected code are refused by default — even if an XSS filter is bypassed, attacker code cannot run.
- 游戏：`phishhunt`
- 章节：modern

### Identity-Based Encryption (IBE)（标识加密（IBE））
- 中文：标识即公钥：用邮箱/手机号等直接当公钥，私钥由受信的私钥生成中心（PKG）按标识签发——证书链整个省掉；国密 SM9 即此路线。
- English: Identifier-as-public-key: your email or phone number IS the public key, and a trusted private-key generator issues the matching private key — the certificate hierarchy vanishes; China's SM9 follows this route.
- 游戏：`rsa`
- 章节：modern

### Zero Trust Architecture（零信任架构）
- 中文：「永不信任、永远验证」的访问模型：网络分段 + 逐请求鉴权 + 最小权限，替代「内网即安全」的边界思维——每个请求都重新核验身份与设备。
- English: Never trust, always verify: segmentation, per-request authentication and least privilege replace the "inside the firewall is safe" mindset — every request re-validates identity and device.
- 游戏：`password-vault`
- 章节：modern

### Ransomware（勒索软件）
- 中文：加密受害者文件并索取赎金的恶意软件：钓鱼附件与漏洞渗透是主要入口；隔离备份、及时补丁、不向勒索低头是通行的应对策略。
- English: Malware that encrypts files and demands ransom: phishing attachments and exploit breaches are the main entry points; isolated backups, patching and refusing to pay are the standard playbook.
- 游戏：`phishhunt`
- 章节：modern

### CAPTCHA（人机验证（CAPTCHA））
- 中文：区分人与机器的挑战（扭曲字母、图片选择）：对抗垃圾注册与暴力枚举，也在被打码平台与 AI 破解——如今向无感行为验证演进。
- English: Challenges telling humans from bots (distorted letters, image selection): they fight spam registration and brute-force enumeration, yet face crowdsourcing and AI — evolving toward invisible behavioral checks.
- 游戏：`phishhunt`
- 章节：modern

### RSA Padding (PKCS#1)（RSA 填充（PKCS#1））
- 中文：RSA 裸加密即噩梦：确定性、可被数学攻击。PKCS#1 v1.5 用结构化的随机填充（v2 用 OAEP）把冗余注入——没有正确填充的 RSA 实现，就是教科书里最经典的漏洞。
- English: Textbook RSA is a nightmare: deterministic and mathematically attackable. PKCS#1 v1.5 adds structured random padding (v2 OAEP) — unpadded/incorrectly padded RSA defines the classic implementation flaw.
- 游戏：`rsa`
- 章节：modern

### Secure Boot & Firmware Signing（安全启动与固件签名）
- 中文：从第一条指令起就用「信任根+签名链」验证：引导装载器验内核、内核验固件、固件验外设——密钥链断了哪一环，攻击者就栽在哪一环。
- English: Verify from the first instruction with a root of trust plus signature chain: bootloader checks kernel, kernel checks firmware, firmware checks peripherals — the chain breaks where an attacker gets in.
- 章节：modern

### FIPS 140（密码模块标准（FIPS 140））
- 中文：美国 NIST 的密码模块安全等级标准（FIPS 140-2/140-3）：物理外壳、密钥管理、随机测试、自检四层评测——企业采购与政府合规的通用基准。
- English: NIST's security-level standard for cryptographic modules (140-2/140-3): physical envelope, key management, RNG tests, self-tests — the common baseline for procurement and government compliance.
- 章节：modern

### Cryptography Law of China（《密码法》）
- 中文：中国 2020 年施行的密码领域基础法律：把密码分为核心/普通/商用三类，确立商用密码「市场准入+检测认证」体制，是国密体系法治化的里程碑。
- English: China's 2020 foundational cryptography law: three tiers (core, ordinary, commercial) with a market-access and testing regime for the commercial tier — the rule-of-law milestone of the SM ecosystem.
- 章节：modern

### Commercial Cryptography Regulation（《商用密码管理条例》）
- 中文：2023 年修订的配套行政法规：细化商用密码检测认证、安全评估与进口出口清单，推动 SM 系列算法在电子政务与金融基础设施的全面落地。
- English: The 2023 implementing regulation: certification, security assessment and import/export lists for commercial cryptography — pushing SM algorithms across e-government and financial infrastructure.
- 章节：modern

### HMAC (Keyed Hash MAC)（HMAC 消息认证码）
- 中文：用密钥与哈希函数构造的认证码：HMAC(K, M) = H(K ⊕ opad ‖ H(K ⊕ ipad ‖ M))。它只认证不加密（MAC 与加密是两件事：加密保机密，MAC 保真实）；HMAC 属于 MAC 家族（还有基于分组密码 CMAC 等），而内层长度扩展攻击用双填充结构天然免疫——TLS 早期用 HMAC 当握手校验。
- English: A keyed hash MAC: HMAC(K, M) = H(K ⊕ opad ‖ H(K ⊕ ipad ‖ M)). It authenticates without encrypting — confidentiality is encryption’s job, authenticity is the MAC’s. HMAC is one MAC family (besides CMAC built from block ciphers); its nested padding structure shrugs off length-extension attacks, and early TLS used it for handshake verification.
- 章节：modern

### DNSSEC
- 中文：给 DNS 加上密码学可信链：区数据用区域密钥签名（RRSIG），子区公钥由父区 DS 记录背书，信任从根锚一路传导；用 NSEC/NSEC3 证明「某名字不存在」。防的主要是「毒化与劫持」——DNS 劫持面前 HTTPS 也会被牵走（证书链可挡，但仍要经过 DNS）。
- English: Cryptographic trust for DNS: zone data is signed (RRSIG), child public keys are endorsed by parent DS records, and trust flows from the root anchor down; NSEC/NSEC3 prove that a name does not exist. Its main enemy is poisoning and hijacking — a DNS answer can even redirect an HTTPS session.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
