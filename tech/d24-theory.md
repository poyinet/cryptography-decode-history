---
title: 理论基础
title_en: Theoretical Foundations
type: domain
domain: d24
---

# 理论基础（Theoretical Foundations）

> 技术域 d24

## 概念

**中文**：理论基础：香农的信息论给了密码学「完美保密」的形式化——熵、混淆、扩散是三个基石。费马小定理、欧拉函数、离散对数三大数学问题撑起公钥密码；**可证明安全**（IND-CPA/IND-CCA 模型）让「安全」从经验判断升格为数学定理。

**English**: Theoretical foundations: Shannon’s information theory gives cryptography its formal notion of **perfect secrecy** — entropy, confusion, and diffusion are the three pillars. Fermat’s little theorem, Euler’s φ, and discrete log prop up public-key schemes; **provable security** (IND-CPA/IND-CCA models) upgrades "secure" from intuition to theorem.
## 算法 / 协议

### 公钥数论基石（Number-Theoretic Foundations）

**中文**：公钥密码的全部数学压在三块基石上：费马小定理（a^(p−1) ≡ 1 mod p，素数的指纹，RSA/素性测试的根）· 欧拉函数 φ(n)（≤n 且与 n 互素的个数，RSA 的 φ=(p−1)(q−1)）· 原根（g 的幂跑遍整个乘法群，DH 的 g=5 就是 23 的原根）。下方全部可交互验证；卡迈克尔数 561 会伪装成素数骗过费马测试——所以真实世界用 Miller-Rabin。

**English**: All public-key math rests on three stones: Fermat's little theorem (a^(p−1) ≡ 1 mod p — a prime fingerprint, root of RSA and primality testing) · Euler's totient φ(n) (count of coprimes ≤ n; RSA's φ=(p−1)(q−1)) · primitive roots (powers of g sweep the whole group; DH's g=5 is one for 23). Verify interactively below; Carmichael number 561 fools the Fermat test — hence Miller-Rabin in the real world.
## 术语

### Entropy（熵）
- 中文：香农对「信息量/不确定性」的数学度量。
- English: Shannon's mathematical measure of information and uncertainty.
- 为什么重要：随机性的度量，是密码的根基。
- 现实哪里用：密钥生成、IV。
- 怎么被破：熵不足则密钥可预测。
- 游戏：`hashlab`
- 章节：modern

### Perfect Secrecy（完美保密）
- 中文：密文与明文统计独立——唯一实现方式是 OTP。
- English: Ciphertext statistically independent of plaintext — achievable only with the OTP.
- 为什么重要：密文与明文统计独立，唯一实现是 OTP。
- 现实哪里用：理论极限。
- 怎么被破：除 OTP 外无实现。
- 游戏：`venona`
- 章节：modern

### Random Oracle Model（随机预言机模型）
- 中文：理想化模型：把哈希函数当作真正的随机函数来证明安全性。实际哈希不是随机预言机——但该模型下的证明仍有很强的指示意义。
- English: An idealized model treating hash functions as truly random functions for security proofs. Real hashes aren't random oracles, but proofs in this model are strong indicators.
- 为什么重要：假设哈希是理想的随机函数，简化证明。
- 现实哪里用：证明哈希签名安全。
- 怎么被破：理论模型，现实哈希可能偏离。
- 游戏：`hashlab`
- 章节：modern

### Bilinear Pairing（双线性配对）
- 中文：椭圆曲线上的特殊映射 e(P,Q)，满足 e(aP,bQ)=e(P,Q)^(ab)——基于配对的密码学（BLS 签名等）的数学基础。
- English: A special elliptic-curve map e(P,Q) satisfying e(aP,bQ)=e(P,Q)^(ab) — the mathematical basis of pairing-based crypto (BLS signatures).
- 为什么重要：把曲线上的乘法"抬"到另一群，催生物证签名。
- 现实哪里用：BLS、零知识。
- 怎么被破：是数学工具，非被破对象。
- 游戏：`rsa`
- 章节：modern

### Oblivious Transfer（不经意传输）
- 中文：发送方发出多条消息，接收方只能读取其中一条且发送方不知其选了哪条——MPC 的基础原语（Rabin 1981）。
- English: Sender offers multiple messages; receiver reads exactly one, sender never knows which. The foundational primitive of MPC (Rabin 1981).
- 为什么重要：一方选一条信息，另一方不知道选了哪条。
- 现实哪里用：零知识、MPC 的基础。
- 怎么被破：是协议，实现错可破。
- 游戏：`millionaire`
- 章节：modern

### Merkle–Damgård Construction（梅克尔–达姆加德结构）
- 中文：MD5/SHA-1/SHA-256 共用的迭代哈希骨架：消息分块逐个压缩进内部状态。正因其结构，长度扩展攻击才成为可能——HMAC 的前缀处理正是为了封堵它。
- English: The iterative hash skeleton shared by MD5, SHA-1 and SHA-256: message blocks compressed into a running state. Its very structure enables length-extension attacks — which HMAC's keyed prefix exists to neutralize.
- 为什么重要：哈希的迭代结构，SHA-1/SHA-2 用。
- 现实哪里用：几乎所有哈希。
- 怎么被破：长度扩展攻击可破（SHA-2 已被破）。
- 游戏：`hashlab`
- 章节：modern

### Blind Signature（盲签名）
- 中文：David Chaum 发明的签名形态：签署者看不到文件内容却能为其背书（先「盲化」再签、后去盲）。电子现金与匿名投票协议的核心组件。
- English: David Chaum's scheme where the signer endorses a message without seeing it (blind first, unblind after) — the core of e-cash and anonymous voting protocols.
- 为什么重要：签名者不知内容，接收者再摊开。
- 现实哪里用：电子支票、匿名。
- 怎么被破：是签名，私钥泄露可破。
- 游戏：`blind-sign`
- 章节：modern

### Simulation Paradigm（模拟范式）
- 中文：零知识证明的现代定义方法：若存在一个不掌握秘密也能产出与真实交互不可区分记录的「模拟器」，则交互不泄露信息。Goldwasser-Micali 图灵奖工作的核心。
- English: The modern definition of zero-knowledge: if a simulator without the secret can produce transcripts indistinguishable from real ones, the interaction leaks nothing — the core of Goldwasser and Micali's Turing Award work.
- 为什么重要：用"模拟器"证明协议不泄密。
- 现实哪里用：零知识、MPC 证明。
- 怎么被破：理论方法，非算法。
- 游戏：`zkp-cave`
- 章节：quantum

### Sponge Construction（海绵结构）
- 中文：把哈希做成「吸收-挤压」两阶段：数据块被吸收进内部状态，再择取任意长度输出。Keccak（SHA-3）一举取代 Merkle-Damgård 并免疫长度扩展。
- English: Hash-pipeline arranged as absorb-squeeze: message blocks dissolve into a state, then a stream is squeezed out at any length. Keccak (SHA-3) made sponge construction the successor to Merkle-Damgård, immune to length extension.
- 为什么重要：哈希/流的"吸收-压缩"结构，SHA-3 用。
- 现实哪里用：SHA-3、Keccak。
- 怎么被破：无已知破法。
- 游戏：`hashlab`
- 章节：modern

### Multiparty Computation (MPC)（多方计算）
- 中文：让多人在不暴露私密输入的前提下共同计算一个函数。经典问题「百万富翁问题」：两位百万富翁如何比谁更富而不露出数字？——答案就是 MPC 的雏形，雅奥氏协议后来成为理论基石。
- English: Several parties compute a function without revealing their private inputs. The classic Millionaire's Problem — compare fortunes without revealing them — generated the protocols that became MPC's foundation.
- 为什么重要：多方联合计算，互不知对方输入。
- 现实哪里用：隐私计算、门限。
- 怎么被破：是协议，实现错可破。
- 游戏：`shamir`
- 章节：modern

### Zero-Knowledge Sudoku（零知识数独）
- 中文：用零知识证明展示「这个数独有解」而又不透露任何一个格子的值：把上色后的解与格纸叠加，挑战一列、一行或一宫，让验证者只看到解法排列而看不到解法本身。这是 ZKP 最优雅的科普演示，我们的洞穴与数独都用了它。
- English: A favorite demo of zero-knowledge: prove a sudoku puzzle has a solution without leaking any cell. Every challenge — row, column or box — reveals ordering without revealing the solution.
- 为什么重要：用零知识证明"我会填这个数独"而不泄露答案。
- 现实哪里用：ZK 的直观演示。
- 怎么被破：是演示，非被破对象。
- 游戏：`zkp-cave`
- 章节：quantum

### ZK Three Properties (Soundness/Completeness/Zero-Knowledge)（零知识证明三性：完备/可靠性/零知识）
- 中文：完备性（completeness）：命题为真时诚实验证者总接受；可靠性（soundness）：命题为假时任何证明者都难以欺骗接受；零知识（zero knowledge）：验证者除了「命题为真」之外获得不了任何信息——三性齐备才是严格意义的零知识，缺一不可。
- English: Completeness: for a true statement an honest verifier always accepts. Soundness: for a false statement no prover can cheat their way to acceptance. Zero knowledge: the verifier learns nothing beyond the truth of the statement. All three together define rigorous zero-knowledge — missing one breaks it.
- 为什么重要：零知识证明的三性：完备、可信、零知识。
- 现实哪里用：所有 ZK 协议。
- 怎么被破：是定义，非算法。
- 章节：modern

### Turing Machine (1936)（图灵机（1936））
- 中文：图灵在 1936 年《论可计算数》中提出的抽象计算模型：无限纸带 + 读写头 + 状态表，简单到不可思议却等价于任何可计算函数；随即证明停机问题不可判定——「计算机科学之父」由此奠定。程序与数据同存的思想（冯·诺依曼结构的源头）正是密码史上 Colossus 与后来所有计算机的共同血脉。
- English: In 1936 Alan Turing’s "On Computable Numbers" defined an abstract machine: an infinite tape, a head and a state table — astonishingly simple, yet capable of any computable function. He then proved the halting problem undecidable. The notion that programs are data (the von-Neumann lineage) runs from here through Colossus to every computer since.
- 为什么重要：图灵提出的计算模型，是"算法"的数学定义。
- 现实哪里用：计算理论、可判定性。
- 怎么被破：是理论模型，非算法。
- 章节：modern
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [第二次世界大战](../02-eras/e11-ww2/README.md)
- [冷战与信息论转折](../02-eras/e12-cold-war-info-theory/README.md)
- [公钥革命](../02-eras/e13-public-key/README.md)
- [量子转折](../02-eras/e16-quantum-turn/README.md)

**关联人物**（人物志）
- [香农](../people/shannon.md)
- [约翰·冯·诺依曼](../people/vonneumann.md)
- [图灵](../people/turing.md)
- [卡尔·弗里德里希·高斯](../people/gauss.md)
- [埃瓦里斯特·伽罗瓦](../people/galois.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `blind-sign` · 盲签密约
- `hashlab` · 哈希雪崩实验室
- `millionaire` · 百万富翁协议
- `rsa` · RSA 小素数保险柜
- `shamir` · Shamir 分钥密约
- `venona` · VENONA 双密复用
- `zkp-cave` · 零知识洞穴
