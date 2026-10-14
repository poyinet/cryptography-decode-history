---
title: 数学家的反击
title_en: The Mathematicians Strike Back
type: era
era: e13-public-key
sources:
  - Claude Shannon, A Mathematical Theory of Communication (1948)
  - Claude Shannon, Communication Theory of Secrecy Systems (1949)
  - Lester S. Hill, Cryptography in an Algebraic Alphabet (1929)
---

# 数学家的反击（The Mathematicians Strike Back）

> 时代 e13-public-key · 本章 modern

## 概念

🔐 信息论与公钥：熵、完美保密、异或原子与 RSA

**English**: Information theory & public key: entropy, secrecy, XOR, RSA

## 正文

**中文**：1929 年，美国数学教授莱斯特·希尔发表《代数字母表上的密码学》，提出一种全新密码：把明文两两分组当作列向量，用 2×2 矩阵乘上去——史上第一个矩阵分组密码就此诞生。它优雅、整齐，可惜每加密一对字母就要做四次乘法，手算太慢，很快被遗忘。但种子留了下来：把整段信息切成小块、逐块用同一把「钥匙」处理——今天所有分组密码，都是希尔密码的远亲。

1948 年，革命到来。贝尔实验室的[香农](../../people/shannon.md)——克劳德·香农——发表《通信的数学理论》，用熵给「信息」下了数学定义；次年他又在《保密系统的通信理论》中第一次严格回答「什么才算安全」：只要密钥真随机、与明文等长且只用一次，密文就与明文毫无关联，「完美保密」真实存在；反过来，一切依赖规律的旧密码，都逃不过频率分析。在香农之前，「密码好不好」靠的是破译员的直觉与实战检验；香农之后，它变成了一道可以证明的数学命题——密码学从此从一门手艺，变成一门数学。

香农还指出了现代密码的原子：异或（XOR）。同一个密钥用两次，明文便原样归来：A⊕K⊕K=A。它对称、廉价、在电路里不过是一排晶体管，还同时兼任加密与解密——同一个闸门按两次就还原。于是它成为 DES、AES 等一切现代分组密码的砖石：替换与移位被拆碎、打乱、反复揉合，直到看不出任何规律。1970 年代，公开密钥密码学登场——加密与解密用不同的钥匙，把「数学难题」当作保险柜；DES（1977）与 AES（2001）让「替换+移位」在比特流里高速运转。今天你的 HTTPS 握手、Wi-Fi 加密、银行转账，内核仍是替换与移位，只是被代数与数论武装得面目全非。

公开密钥的普及，还引燃了一场「密码战争」。1991 年，程序员菲尔·齐默尔曼把自制的加密软件 PGP 免费放上网，让普通人第一次拥有了军事级加密；美国政府却把强加密视作「军火」，以涉嫌非法出口武器为由对他展开调查，一查就是三年。1993 年，白宫又推出「Clipper 芯片」计划：给每个加密设备预埋一把政府可调阅的「后门钥匙」。此举遭到密码学家与民权组织的强烈抵制，反对者在技术层面证明了后门的致命漏洞，计划最终流产。这场拉锯战定下了一条今天仍在延续的规则：强加密，属于每一个普通人。

保密之外，密码学还有另一半使命——「验明正身」。哈希函数把任意长度的输入压成一串定长「指纹」，改动一个比特，指纹就面目全非；文件校验、软件签名、数字证书，都靠它把关。MD5 与 SHA-1 曾是这条防线上的两根台柱。2004 年，山东大学的[王小云](../../people/wangxy.md)在国际密码学会议上投下一枚重磅炸弹：她的团队找到了 MD5 的「碰撞」——两个内容不同的文件，可以拥有同一枚指纹；次年，SHA-1 的攻击路径也被摆上台面。整个行业用了十几年才消化完这场地震：2017 年，谷歌与荷兰 CWI 研究中心动用约六千五百个 CPU 年的算力，当众演示了 SHA-1 的第一次真实碰撞（SHAttered），各大浏览器随即停用 SHA-1 证书，全球系统陆续迁移到 SHA-256。这一战给教科书添了一条铁律：「尚未被攻破」从来不是安全证明——一种哈希函数的寿命，从设计那天起就在倒数。

而今，天平的两端同时换上了新砝码——人工智能。攻击一侧，AI 辅助的密码分析正在拉低破译的门槛：机器学习能从海量密文里嗅出人类难以察觉的统计偏差，自动化的差分与侧信道分析让过去需要专家苦战数月的攻击，变得可以批量尝试。防御一侧，同一套技术也在加速密钥管理的自动化——自动轮换密钥、检测异常、在攻击发生前收紧防线。AI 没有立场，它只是一把同时递给攻守双方的刀：密码学的下一场竞赛，比的已不只是谁的数学更硬，而是谁能更快地驾驭这台会思考的机器。

最迫在眉睫的，是量子计算机的倒计时。今天的公钥体系建立在「大数分解」与「离散对数」这类难题之上，经典计算机几乎解不动；可一旦足够强的量子计算机问世，Shor 算法将在多项式时间里把这些难题碾碎，RSA 与 ECC 将一夜失效。为此，2024 年美国国家标准与技术研究院（NIST）发布了首批后量子密码标准——ML-KEM、ML-DSA、SLH-DSA 等基于格与哈希的新算法——全球的银行、政府与互联网系统，正开始一场静悄悄的「换锁」迁移。密码学的未来，正在从「量子威胁」的阴影里，抢出一条新的护城河。

从凯撒的移位，到香农的比特流，再到你手中的屏幕，三千年密码史在此收束：每一次「绝对安全」的宣告，都紧跟着下一次破译的号角；每一次破译，又催生出更强的密码。密码学的历史，就是人类保守秘密的斗争史——而这场斗争，从未停止。如今号角再度吹响：量子计算机正逼近今天的公钥体系，新的攻防就藏在你口袋里的那部手机中。

**English**: In 1929 the American mathematician Lester Hill published "Cryptography in an Algebraic Alphabet" and proposed a wholly new cipher: pair up the plaintext as column vectors and multiply them by a 2×2 matrix — the first matrix block cipher in history. It was elegant and tidy, but every letter pair cost four multiplications, far too slow by hand, so it was soon forgotten. The seed survived, though: cut the message into small blocks and process each with the same "key" — every block cipher today is a distant cousin of the Hill cipher.

The revolution came in 1948. [Shannon](../../people/shannon.md) — Claude Shannon, of Bell Labs — published "A Mathematical Theory of Communication," giving "information" a mathematical definition through entropy; the next year "Communication Theory of Secrecy Systems" gave the first rigorous answer to what "secure" even means: if the key is truly random, as long as the message and used exactly once, the ciphertext is statistically independent of the plaintext — perfect secrecy is real. Conversely, every old cipher that leans on pattern must fall to frequency analysis. Before Shannon, a cipher's worth was judged by intuition and hard-won experience; after him, it became a provable statement of mathematics. Cryptography moved from craft to mathematics.

Shannon also named the atom of modern crypto: XOR. Apply the same key twice and the plaintext returns: A⊕K⊕K=A. It is symmetric, cheap, and in a circuit it is just a row of transistors — and it doubles as both encryption and decryption: the same gate pressed twice restores the message. So it became the brick of every modern block cipher, from DES to AES: substitution and transposition are shredded, shuffled and kneaded together until no pattern survives. In the 1970s public-key cryptography arrived — different keys to encrypt and to decrypt, a hard math problem as the vault; DES (1977) and AES (2001) made substitution-plus-transposition run at the speed of bits. The HTTPS handshake, the Wi-Fi encryption, the bank transfer you made today: at their core still substitution and transposition, disguised beyond recognition by algebra and number theory.

The spread of public-key crypto also lit a "crypto war." In 1991 the programmer Phil Zimmermann posted his homemade encryption software, PGP, onto the Internet for free, giving ordinary people military-grade encryption for the first time; the U.S. government, which treated strong encryption as a munition, opened a three-year investigation into him for exporting arms without a license. In 1993 the White House proposed the Clipper chip: a backdoor key, held by the government, preloaded into every encrypted device. Cryptographers and civil-liberties groups pushed back hard — and proved the backdoor's fatal flaws in public — until the plan collapsed. That tug-of-war set a rule that still holds today: strong encryption belongs to everyone.

Beyond secrecy, cryptography has a second job — proving authenticity. A hash function squeezes input of any length into a fixed-length fingerprint: flip one bit and the fingerprint turns unrecognizable. File checksums, software signatures and digital certificates all lean on it. MD5 and SHA-1 were the twin pillars of that line — until 2004, when [Xiaoyun Wang](../../people/wangxy.md) of Shandong University dropped a bombshell at the International Cryptology Conference: her team had found collisions in MD5 — two different files sharing one identical fingerprint; within a year an attack path against SHA-1 was on the table too. The industry spent over a decade absorbing the earthquake: in 2017, Google and CWI Amsterdam burned roughly 6,500 CPU-years of computation to demonstrate the first real SHA-1 collision in public (SHAttered); browsers promptly retired SHA-1 certificates, and systems worldwide migrated to SHA-256. The campaign added an iron maxim to the textbooks: "not yet broken" has never been proof of security — the lifetime of a hash function counts down from the day it is designed.

Now both sides of the scale have been re-weighted by artificial intelligence. On the attack, AI-assisted cryptanalysis is lowering the bar: machine learning can sniff out statistical biases in mountains of ciphertext that a human would never see, and automated differential and side-channel analysis turns attacks that once took experts months into something that can be tried in batches. On the defense, the same machinery is accelerating key management — rotating keys automatically, spotting anomalies, tightening the line before an attack lands. AI has no allegiance; it is a blade handed to both sides at once. The next contest in cryptography is not only about whose math is harder, but about who can steer the thinking machine faster.

Closest on the horizon is the countdown of the quantum computer. Today's public-key systems rest on problems like factoring and discrete logarithms, which classical computers can barely touch; but once a sufficiently powerful quantum computer exists, Shor's algorithm will grind those problems down in polynomial time, and RSA and ECC will fail overnight. In answer, in 2024 the U.S. National Institute of Standards and Technology (NIST) released its first post-quantum standards — lattice- and hash-based schemes such as ML-KEM, ML-DSA and SLH-DSA — and banks, governments and internet systems around the world have begun the quiet work of changing the locks. The future of cryptography is digging a new moat, out from under the shadow of the quantum threat.

From Caesar's shift to Shannon's bit streams, and on to the screen in your hand, three thousand years of cryptography converge: every proclamation of "absolute security" is followed by the next trumpet call of a break, and every break gives birth to a stronger cipher. The history of ciphers is the history of humanity's struggle to keep secrets — and that struggle has never stopped. Now the horn sounds again: quantum computers are closing in on public-key crypto, and the next offensive already runs inside the phone in your pocket.

## 人物

- [`shannon`](../../people/shannon.md)
- [`diffie`](../../people/diffie.md)
- [`shamir`](../../people/shamir.md)
- [`adleman`](../../people/adleman.md)
- [`merkle`](../../people/merkle.md)
- [`cocks`](../../people/cocks.md)
- [`ellis`](../../people/ellis.md)
- [`feistel`](../../people/feistel.md)
- [`rivest`](../../people/rivest.md)
- [`hellman`](../../people/hellman.md)
- [`pzimmermann`](../../people/pzimmermann.md)
- [`schneier`](../../people/schneier.md)
- [`daemen`](../../people/daemen.md)
- [`wangxy`](../../people/wangxy.md)
- [`rijmen`](../../people/rijmen.md)
- [`elgamal`](../../people/elgamal.md)
- [`miller`](../../people/miller.md)
- [`back`](../../people/back.md)
- [`koblitz`](../../people/koblitz.md)
- [`goldwasser`](../../people/goldwasser.md)
- [`micali`](../../people/micali.md)
- [`rackoff`](../../people/rackoff.md)
- [`gentry`](../../people/gentry.md)
- [`chaum`](../../people/chaum.md)
- [`bernstein`](../../people/bernstein.md)
- [`matsui`](../../people/matsui.md)
- [`biham`](../../people/biham.md)
- [`regev`](../../people/regev.md)
- [`kocher`](../../people/kocher.md)
- [`yao`](../../people/yao.md)
- [`rabin`](../../people/rabin.md)

## 关联游戏

- xor, hill, base64, binary, maker, codeguess, circuit, lightsout, maze, pipe, puzzle15, hashi, klotski, hashlab, solitaire, rsa, shamir, sm4, phishhunt, aes-lab, password-vault, pgp-mail, blockchain-miner, totp-verify, side-channel-lab, homomorphic-lab, tor-onion, block-modes, dh-handshake, gm-gateway, millionaire, blind-sign

## 关联密件

- [`shannon`](../../artifacts/shannon.md)

## 出处

- Claude Shannon, A Mathematical Theory of Communication (1948)
- Claude Shannon, Communication Theory of Secrecy Systems (1949)
- Lester S. Hill, Cryptography in an Algebraic Alphabet (1929)

## 延伸阅读

- Claude Shannon, A Mathematical Theory of Communication (1948)
- Simon Singh, The Code Book
- David Wong, Real-World Cryptography (2021)

## 测验

1. **中文**：香农 1949 年证明什么？
   - 选项：A. OTP 具备完美保密  B. RSA 安全  C. AES 不可破  D. DES 太弱
   - 答案：**A** · 密钥等长随机且只用一次，密文与明文统计独立。
   **English**: What did Shannon prove in 1949?
   - Answer: **A** · A random key as long as the message, used once, makes ciphertext statistically independent.

2. **中文**：Diffie-Hellman 解决什么问题？
   - 选项：A. 公开信道协商共享密钥  B. 数据压缩  C. 身份认证  D. 数字签名
   - 答案：**A** · 无需秘密通道即可协商密钥。
   **English**: What does Diffie-Hellman solve?
   - Answer: **A** · Two parties agree on a key with no secret channel.

3. **中文**：RSA 的安全性基于？
   - 选项：A. 大整数分解难  B. 椭圆曲线  C. 格基  D. 离散对数
   - 答案：**A** · 大数分解在计算上不可行。
   **English**: RSA security rests on?
   - Answer: **A** · Factoring large integers is computationally infeasible.
