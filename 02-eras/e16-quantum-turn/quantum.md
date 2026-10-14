---
title: 量子转折点
title_en: The Quantum Turn
type: era
era: e16-quantum-turn
sources:
  - Stephen Wiesner, Conjugate Coding (written c. 1970; published in SIGACT News, 1983)
  - C.H. Bennett & G. Brassard, Quantum Cryptography: Public Key Distribution and Coin Tossing (IEEE ICCSSP, 1984)
  - NIST, FIPS 203/204/205: Post-Quantum Cryptography Standards (2024)
---

# 量子转折点（The Quantum Turn）

> 时代 e16-quantum-turn · 本章 quantum

## 概念

⚛️ 量子威胁与后量子：Shor 瓦解公钥，格密码与 QKD 重筑防线

**English**: Quantum threat & post-quantum: Shor breaks public key; lattices and QKD rebuild the walls

## 正文

**中文**：1970 年前后，哥伦比亚大学的研究生斯蒂芬·威斯纳写下一份奇思妙想：《共轭编码》。他提议用量子态印制钞票——量子力学不允许「测了又不留痕」，伪币制造者一旦测量纸币上的量子态，就会不可逆地破坏它而暴露。这篇手稿被期刊接连拒稿，沉睡十余年，直到[斯蒂芬·威斯纳](../../people/wiesner.md)的老朋友、IBM 的[查尔斯·贝内特](../../people/bennett.md)与蒙特利尔大学的[吉尔·布拉萨德](../../people/brassard.md)把它从故纸堆里翻了出来。1984 年，两人在印度班加罗尔的 IEEE 会议上发表一页摘要，提出量子密钥分发协议 BB84：发送方用两组基（直线＋与斜叉×）随机编码光子偏振，接收方也随机选基测量；事后双方公开比对基、留下匹配位作为共享密钥。妙处在于：窃听者若想偷看，就必须测量光子——而测量会以约四分之一的概率在筛选密钥中引入误码。密钥还没启用，窃听的指纹已经留在信道上。密码学第一次拥有了「窃听必留痕」的信道。

真正的地震发生在十年后的贝尔实验室。1994 年，数学家[彼得·秀尔](../../people/shor.md)公布了一种运行于量子计算机的算法：它能在多项式时间内完成大数分解与离散对数。消息几天内传遍各大实验室与安全机构——RSA 的地基、Diffie-Hellman 的地基、ECC 的地基，全部建立在「经典计算机算不动」之上，而 Shor 算法把这些难题连根拔起。两年后，[洛夫·格罗弗](../../people/grover.md)给出另一半判决：他的搜索算法能把暴力破解从 N 步加速到约 √N 步——但仅此而已，对称密码只需把密钥加倍便可高枕无忧，AES-256 至今稳如泰山；真正被判死刑的，只有依赖数论结构的公钥家族。密码学界第一次集体意识到：量子力学既是密码的朋友（QKD），也可能是它的掘墓人。

威胁并非科幻小说。情报机构今天就可以「先截获、后解密」：把当前无法破译的密文整仓库存，等量子计算机成熟之日回放解读。医疗档案、国家机密的保密期以数十年计，早已超过大规模量子计算机的预计抵达时间——换锁这件事，等不起。

于是有了密码学史上罕见的公开选秀。2016 年起，美国国家标准与技术研究院（NIST）面向全球征集后量子算法，82 个初始提案历经七年公开评审与轮番攻击：曾一路领先的 SIKE 在 2022 年被研究者用一台普通笔记本电脑约一小时攻破，「看起来难」与「真的难」之间隔着一整个证明的距离。2024 年 8 月，首批标准终于落定：FIPS 203（ML-KEM）、204（ML-DSA）、205（SLH-DSA）。它们大多基于格上的难题——把数千维空间中的点阵搅进噪声，让最短向量无处可寻——至今没有给 Shor 算法留下可乘之隙。与此同时，BB84 走出实验室：光纤骨干网上的量子密钥、2016 年升空的「墨子号」卫星，正在为少数高价值链路提供物理级的保密通道。

从罗塞塔石碑的多字谜题，到凯撒的移位、维吉尼亚的方表、Enigma 的转子、香农的熵——每一次「绝对安全」的宣告，都催生了下一次破译；每一次破译，又逼出更强的锁。如今轮到量子登场：它一手举起斧头，一手递上新锁。这场自巴格达智慧宫延续至今的攻防竞赛没有终局，只是又一次换了战场——而这一次，战场设在物理学的基础法则之上。

**English**: Around 1970 a graduate student named Stephen Wiesner wrote down a strange idea he called "Conjugate Coding": print banknotes with quantum states. Quantum mechanics forbids measuring without disturbing, so any counterfeiter who tried to read such a note would irreversibly damage it and give himself away. Journals rejected the manuscript again and again, and it slept for over a decade — until Wiesner's old friend [Charles Bennett](../../people/bennett.md) at IBM and [Gilles Brassard](../../people/brassard.md) at the Université de Montréal dug it out of obscurity. In 1984 they published a one-page abstract at an IEEE conference in Bangalore, India, proposing BB84, the first practical quantum key distribution protocol: the sender encodes each photon's polarization in one of two randomly chosen bases (+ and ×), the receiver measures in randomly chosen bases too; afterwards both publicly compare bases and keep the matching positions as a shared key. The beauty is this: an eavesdropper who wants to peek must measure the photons — and measurement injects errors into roughly one in four sifted bits. Before the key is even used, the wiretap has left fingerprints on the channel. Cryptography had gained something entirely new: a wire that cannot be tapped silently.

The real earthquake came a decade later at Bell Labs. In 1994 the mathematician [Peter Shor](../../people/shor.md) unveiled an algorithm for a hypothetical quantum computer that factors integers and computes discrete logarithms in polynomial time. Word spread through labs and security agencies within days: RSA, Diffie-Hellman and ECC all rest on problems classical computers cannot crack — and Shor pulled those foundations out whole. Two years later [Lov Grover](../../people/grover.md) delivered the other half of the verdict: his search algorithm speeds brute force from N steps down to about √N — but only that far. Symmetric ciphers simply double their keys; AES-256 still stands serene. What is truly condemned is the number-theoretic public-key family. Cryptographers collectively realized that quantum mechanics is both a friend (QKD) and a possible gravedigger.

The threat is not science fiction. An adversary can "harvest now, decrypt later": warehouse today's unbreakable ciphertexts and replay them once a quantum computer matures. Medical records and state secrets must stay secret for decades — longer than the expected arrival of large-scale quantum computers. The lock cannot wait.

Hence one of the rare open tournaments in cryptographic history. From 2016 NIST solicited post-quantum algorithms worldwide; 82 initial submissions endured seven years of public review and relentless attack — SIKE, once a frontrunner, was broken in about an hour on an ordinary laptop in 2022, proof that "looks hard" and "is hard" are separated by a whole theorem. In August 2024 the first standards landed: FIPS 203 (ML-KEM), 204 (ML-DSA), 205 (SLH-DSA). Most rest on lattice problems — thousands of dimensions of points buried in noise, shortest vectors nowhere to be found — where Shor's algorithm finds no purchase. Meanwhile BB84 left the lab: quantum keys run over fiber backbones, and the Micius satellite, launched in 2016, now offers physics-grade secrecy on select intercontinental links.

From the Rosetta Stone's polyglot puzzle through Caesar's shifts, Vigenère's tableau, Enigma's rotors and Shannon's entropy — every declaration of "absolutely secure" has summoned the next break; every break has forged a stronger lock. Now quantum mechanics takes the stage, raising the axe with one hand and offering new locks with the other. The contest that began in the House of Wisdom has no final chapter; it has merely changed battlegrounds again — this time to the fundamental laws of physics itself.

## 人物

- [`wiesner`](../../people/wiesner.md)
- [`bennett`](../../people/bennett.md)
- [`brassard`](../../people/brassard.md)
- [`shor`](../../people/shor.md)
- [`grover`](../../people/grover.md)
- [`ekert`](../../people/ekert.md)

## 关联游戏

- bb84, qkd-sim, pqc-match, zkp-cave

## 关联密件

- [`qmoney`](../../artifacts/qmoney.md)

## 出处

- Stephen Wiesner, Conjugate Coding (written c. 1970; published in SIGACT News, 1983)
- C.H. Bennett & G. Brassard, Quantum Cryptography: Public Key Distribution and Coin Tossing (IEEE ICCSSP, 1984)
- NIST, FIPS 203/204/205: Post-Quantum Cryptography Standards (2024)

## 延伸阅读

- Simon Singh, The Code Book
- Scott Aaronson, Quantum Computing Since Democritus (2013)
- NIST IR 8547: Transition to Post-Quantum Cryptography Standards (2024)

## 测验

1. **中文**：BB84 中 Eve 随机选基窃听，会在筛选密钥里引入约多少误码率？
   - 选项：A. 25%  B. 5%  C. 50%  D. 0%
   - 答案：**A** · 选错基一半 × 测量翻转一半 ≈ 25%，窃听者自曝指纹。
   **English**: In BB84, what error rate does an eavesdropper inject into the sifted key?
   - Answer: **A** · Wrong basis half the time × a flip half of those ≈ 25% — the eavesdropper's fingerprint.

2. **中文**：Shor 算法威胁的是哪一类密码？
   - 选项：A. RSA / ECC 等公钥体系  B. AES 等对称密码  C. 摩斯电码  D. 培根密码
   - 答案：**A** · 大数分解与离散对数被多项式时间攻克；对称密码只需加倍密钥。
   **English**: What does Shor's algorithm threaten?
   - Answer: **A** · Factoring and discrete logs fall in polynomial time; symmetric ciphers just double their keys.

3. **中文**：2024 年 NIST 发布的后量子标准 ML-KEM 基于什么难题？
   - 选项：A. 格上的带误差学习  B. 大整数分解  C. 离散对数  D. 椭圆曲线
   - 答案：**A** · FIPS 203（Kyber）基于模块格 MLWE 问题，Shor 算法无用武之地。
   **English**: Which hard problem underlies NIST's 2024 standard ML-KEM?
   - Answer: **A** · FIPS 203 (Kyber) rests on Module-LWE — where Shor finds no purchase.
