---
title: 非对称公钥
title_en: Asymmetric Public-key
type: domain
domain: d11
---

# 非对称公钥（Asymmetric Public-key）

> 技术域 d11

## 概念

**中文**：非对称公钥：一对密钥——**公钥加密、私钥解密**（或私钥签名、公钥验证），从根本上解决了密钥分发难题。RSA 基于大数分解难题，ElGamal 基于离散对数，ECC 基于椭圆曲线群上的离散对数（相同安全强度下密钥更短）。Diffie-Hellman 则是公钥思想里第一个纯密钥交换方案。

**English**: Asymmetric public-key: a key **pair** — public key encrypts, private key decrypts (or signs/verifies) — solving key distribution at the root. RSA rests on integer factorization, ElGamal on discrete log, ECC on elliptic-curve discrete log (shorter keys at equal security). Diffie-Hellman is the first pure key-exchange scheme in the public-key lineage.
## 算法 / 协议

### Diffie-Hellman 密钥交换（Diffie-Hellman）

**中文**：DH 的安全不仅看 p 够不够大。g = 1 时共享密钥恒为 1（参数混入攻击）；p 不是安全素数时，小阶子群攻击能把秘密旋进小圈子。本演示真的在做三件事：p 素性、安全素数（p = 2q+1 且 q 素）、g 的阶恰为 p−1（真生成元）。全部通过，才是「可验证参数」（RFC 7919 的 FFDHE 命名组就是经过这种验证后固化的）。

**English**: DH security is not just about a big p. With g = 1 the shared secret is always 1 (parameter-mixing); with a non-safe prime, small-subgroup attacks trap secrets in tiny circles. This demo really does three checks: p primality, safe-prime property (p = 2q+1 with q prime), and whether the order of g is exactly p−1 (a true generator). Pass all three and the parameters are "validated" — RFC 7919 FFDHE named groups were hardened exactly this way.

> 体验要点：**中文** 📌 试试教材外的两组：1009 / 11 会连环翻车（(1009−1)/2 不是素数、11 的阶不足 p−1）——这正是「参数混入攻击」与「小阶子群攻击」的猎物。现实世界：TLS 1.3 的 ECDHE 与 RFC 7919 的 FFDHE 命名组都是先验证、后固化；X25519 甚至绕过了「g 的阶」问题（曲线阶与基点为规范固定值）。 · **English** 📌 Try the extra pair 1009 / 11: it fails on several counts ((1009−1)/2 is not prime; the order of 11 is short) — precisely the prey of parameter-mixing and small-subgroup attacks. In the real world, TLS 1.3 ECDHE and RFC 7919 FFDHE named groups are validated then frozen; X25519 even sidesteps the whole order question with canonical, standardised curve and base point.

### ElGamal 加密（ElGamal）

**中文**：ElGamal（1985 年 Taher Elgamal）在乘法群 Z_p* 上做概率加密：公钥 h = g^a（g 为生成元，a 为私钥）；每次加密随机选 k，密文 (c1, c2) = (g^k, m·h^k) —— 同一明文两次加密得到两个完全不同密文对，这就是语义安全（IND-CPA）的雏形。本演示在 p = 47、g = 5（阶 46，安全素数组）上真算。

**English**: ElGamal (Taher Elgamal, 1985) is probabilistic encryption in the multiplicative group Z_p*: public key h = g^a (g generator, a private); each encryption picks a random k and yields (c1, c2) = (g^k, m·h^k) — the same plaintext encrypts to two completely different ciphertext pairs, the seed of semantic security (IND-CPA). This demo computes for real on p = 47, g = 5 (order 46, a safe-prime group).

> 体验要点：**中文** 📌 对照 RSA 字典攻击卡：ElGamal 的破解点不是明文空间——随机 k 把每个 m 都摊成一片；但 k 用两次就露馅：(c2₃/c2₁) = (m₂/m₁) mod p，已知一条消息就能算出另一条（点「k 复用攻破」看它真算出来）。铁律与 OTP 一样：随机数绝不重样。玩具 p=47 仅供教学。 · **English** 📌 Contrast with the RSA dictionary-attack card: ElGamal does not leak the plaintext space — random k spreads every m. But reusing k gives it away: (c2₃/c2₁) = (m₂/m₁) mod p, so knowing one message reveals the other (click "k-reuse break" and watch it really recover). Same iron rule as OTP: never repeat randomness. Toy p=47 for teaching only.

### 教科书 RSA 与填充（Textbook RSA & Padding）

**中文**：教科书 RSA：c = m^e mod n。它可解、可逆、数学全对——却有一个致命特性：确定性。同一明文每次都得到同一密文，于是攻方只要知道明文空间（订单号、证件尾号），就能把每个候选加密一遍对拍——字典攻击。1982 年 Goldwasser 与 Micali 把问题形式化：加密必须是概率性的，这就是「语义安全」的起点；1994 年 Bellare–Rogaway 的 OAEP 把 RSA 变成随机填充，成为今日标准姿势（PKCS #1 v2.2，RFC 8017）。本演示：真实模幂，n = 97×113 = 10961（玩具）。

**English**: Textbook RSA: c = m^e mod n. Solvable, reversible, mathematically fine — with one fatal property: deterministic. The same plaintext yields the same ciphertext every time, so anyone who knows the plaintext space (order numbers, ID tails) can encrypt every candidate and match — a dictionary attack. In 1982 Goldwasser and Micali formalized the fix: encryption must be probabilistic — the origin of semantic security. Bellare–Rogaway’s OAEP (1994) made RSA randomized; that is the standard posture today (PKCS #1 v2.2, RFC 8017). This demo: real modular exponentiation, n = 97×113 = 10961 (toy).

> 体验要点：**中文** 📌 三步对照：① 教科书加密后字典攻击直接命中——m 在区间内被还原；② 随机填充版：同一明文两次加密得到不同密文（确定性被打破）；③ 全空间枚举演示：填了随机值也照样破——因为玩具模数只有 14 位。这就是现实世界必须 2048 位模数 + OAEP 随机填充的原因。教训：数学正确只是起点，安全性质（语义安全）才是终点——就连 RSA 解密实现也曾在 1998 年被 Bleichenbacher 的填充预言攻击击中。 · **English** 📌 Three contrasts: ① textbook encryption falls to the dictionary attack — m is recovered from the interval; ② with random padding the same m encrypts to different ciphertexts (determinism broken); ③ full-space enumeration still works because the toy modulus is only 14 bits — exactly why the real world needs 2048-bit moduli with OAEP padding. Lesson: mathematical correctness is only the start; security properties (semantic security) are the goal. Even RSA decryption itself was hit by Bleichenbacher’s padding-oracle attack in 1998.

### 椭圆曲线点加法（ECC Point Addition）

**中文**：椭圆曲线 y² = x³ + ax + b 上定义一种「加法」：两点连线延长交曲线于第三点，其关于 x 轴的镜像即为「和」。已知一端与和，反推另一端——数学上没有高效算法。ECC 的安全性就藏在这条几何规则里（演示为实数域示意，真实曲线在有限域上）。

**English**: On y² = x³ + ax + b, "addition" is geometric: the chord through two points meets the curve at a third; mirroring it across the x-axis gives the sum. Recovering either input from the other plus the sum has no efficient algorithm — that is where ECC security lives (real-domain sketch here; real curves live over finite fields).

### 真实大数 RSA（Real RSA (BigInt)）

**中文**：前面所有 RSA 都是玩具数字——这里来真的：用 BigInt 跑 Miller-Rabin 素性测试，现场生成 256 位密钥对（n 有 64 位十六进制那么长）。注意生成耗时：这就是真实世界的成本感；现行标准是 2048 位（长度的 8 倍，成本指数级更高）。加密解密走完整模幂往返。

**English**: Every RSA before this used toy numbers — here comes the real thing: BigInt Miller-Rabin primality testing generates a 256-bit keypair live (n is 64 hex digits long). Watch the elapsed time: that is what real-world cost feels like; the current standard is 2048-bit (8× the length, exponentially costlier). Full modular-exponentiation round trip included.
## 术语

### Public-Key Crypto（公钥密码）
- 中文：加密与解密用不同密钥，靠数学难题（如大数分解）保证安全。
- English: Different keys to encrypt and decrypt, secured by hard math problems like factoring.
- 为什么重要：公钥加密、私钥解密，无需共享秘密。
- 现实哪里用：TLS、签名、密钥交换。
- 怎么被破：数学难题被破（如因子分解被量子破）。
- 游戏：`rsa`
- 章节：modern

### Asymmetric Key（非对称密钥）
- 中文：加密与解密用不同密钥（公钥/私钥）。
- English: Different keys to encrypt and decrypt (public/private).
- 为什么重要：公钥/私钥成对，是公钥密码的核心。
- 现实哪里用：所有非对称系统。
- 怎么被破：私钥泄露即破。
- 游戏：`rsa`
- 章节：modern

### RSA
- 中文：1977 年公开密钥算法，靠大数分解难题保证安全。
- English: The 1977 public-key algorithm secured by the factoring problem.
- 为什么重要：1977 年首个实用公钥系统，基于大数分解。
- 现实哪里用：TLS、签名、区块链。
- 怎么被破：量子 Shor 可破；经典下大因子仍难。
- 游戏：`rsa`
- 章节：modern

### Elliptic Curve Cryptography (ECC)（椭圆曲线密码）
- 中文：椭圆曲线密码。基于椭圆曲线离散对数难题的公钥密码体制，同等安全强度下密钥比 RSA 短得多，适合移动设备等资源受限场景。
- English: A public-key cryptosystem whose security rests on the elliptic-curve discrete logarithm problem. It offers comparable security to RSA with much shorter keys, making it efficient for mobile and constrained devices.
- 为什么重要：用椭圆曲线离散对数，同强度密钥更短。
- 现实哪里用：比特币、TLS、手机。
- 怎么被破：经典无破法，量子 Shor 可破。
- 游戏：`rsa`
- 章节：modern

### Asymmetric Cryptography（非对称密码）
- 中文：非对称密码（公钥密码）。使用一对数学相关但无法互推的密钥：公钥公开用于加密，私钥保密用于解密，解决了密钥分发难题，如 RSA、ECC。
- English: A cryptosystem using a mathematically linked key pair: a public key for encryption and a private key for decryption, where one cannot feasibly be derived from the other. It solves key distribution and enables digital signatures; RSA and ECC are examples.
- 为什么重要：公钥密码学的总称，即非对称加密解密。
- 现实哪里用：所有公钥系统。
- 怎么被破：私钥泄露或数学难题被破。
- 游戏：`rsa`
- 章节：modern

### ElGamal
- 中文：1985 年 Taher ElGamal 提出：每次加密随机挑一个临时数，同一明文可生成不同密文，安全性基于离散对数难题；既能加密也能签名，启发了后来的一大批体制。
- English: Proposed by Taher ElGamal in 1985: each encryption picks a fresh random value, so the same plaintext yields different ciphertexts. Based on the discrete logarithm problem, it supports both encryption and signatures.
- 为什么重要：基于离散对数的第一个公钥加密。
- 现实哪里用：DSA 的基础、早期公钥。
- 怎么被破：离散对数被量子破；经典可抵抗。
- 游戏：`rsa`
- 章节：modern

### Paillier Encryption（Paillier 门限加密）
- 中文：1999 年 Pascal Paillier 提出的基于复合数残差的加法同态体制：密文乘法对应明文加法——它让加密的总值可被统计而不泄露单项。银行、隐私计票与多方计算都用它。
- English: Pascal Paillier's 1999 additively-homomorphic scheme on composite residues: ciphertext multiplication equals plaintext addition, so totals can be computed without revealing items — used in banking, privacy voting and multiparty computation.
- 为什么重要：可同态的公钥加密，密文可加。
- 现实哪里用：隐私计算。
- 怎么被破：同态性本身会泄露信息。
- 游戏：`homomorphic-lab`
- 章节：modern

### Rabin Cryptosystem（拉宾加密）
- 中文：1979 年 Michael Rabin 提出的第一个可公开证明「破译等价于因数分解」的体制：加密是模平方，解密求平方根。虽有一义多解，但那也正是它的证明亮点。
- English: Michael Rabin's 1979 scheme, the first to publicly prove breaking it equals factoring: encryption is modular squaring, decryption finds square roots. Its ambiguity is precisely what makes the proof work.
- 为什么重要：用二次剩余做公钥，比 RSA 更早的独立方向。
- 现实哪里用：教学。
- 怎么被破：经典无已知破法，但解密有歧义需辅助。
- 游戏：`rsa`
- 章节：modern

### DH Parameter Validation（DH 参数安全校验）
- 中文：DH 的安全不只靠大素数：小阶子群攻击（参数未验证时把共享值旋進小群）与素性保证（安全素数）——现代库强制校验 p 素性与 g 阶，是「算法正确≠参数正确」的活例。
- English: DH security is not just about big primes: small-subgroup attacks (unvalidated params trap the shared value) and primality guarantees (safe primes). Modern libraries validate p and the order of g — math alone isn't enough.
- 为什么重要：验证 Diffie-Hellman 参数，防小阶攻击。
- 现实哪里用：密钥交换的健壮性。
- 怎么被破：参数选错（小阶）即泄露。
- 游戏：`dh-handshake`
- 章节：modern

### NIST P-256 (secp256r1)（NIST P-256 曲线）
- 中文：应用最广的椭圆曲线之一：256 位素域、生成参数经 NIST 标准化——TLS 1.3 主流套件与国密 SM2 之外的国际默认曲线；争议在其参数的「无法解释来源」。
- English: The most deployed curve: 256-bit prime field, NIST-standardized parameters — the international default beside SM2 in TLS 1.3 suites; one controversy is the unexplained source of its constants.
- 为什么重要：NIST 推荐的椭圆曲线，256 位安全。
- 现实哪里用：TLS、iOS、浏览器。
- 怎么被破：曲线安全，实现侧信道是弱点。
- 章节：modern
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [第一次世界大战](../02-eras/e09-ww1/README.md)
- [冷战与信息论转折](../02-eras/e12-cold-war-info-theory/README.md)
- [公钥革命](../02-eras/e13-public-key/README.md)

**关联人物**（人物志）
- [惠特菲尔德·迪菲](../people/diffie.md)
- [马丁·赫尔曼](../people/hellman.md)
- [罗纳德·李维斯特](../people/rivest.md)
- [阿迪·萨莫尔](../people/shamir.md)
- [伦纳德·阿德曼](../people/adleman.md)
- [塔赫尔·埃尔加马尔](../people/elgamal.md)
- [克利福德·科克斯](../people/cocks.md)
- [马尔科姆·威廉森](../people/williamson.md)
- [弗兰克·米勒](../people/miller.md)
- [尼尔·科比茨](../people/koblitz.md)
- [迈克尔·拉宾](../people/rabin.md)
- [拉尔夫·默克尔](../people/merkle.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `dh-handshake` · DH 握手场
- `homomorphic-lab` · 同态加密实验室
- `rsa` · RSA 小素数保险柜
