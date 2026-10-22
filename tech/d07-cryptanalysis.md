---
title: 破译方法
title_en: Cryptanalysis
type: domain
domain: d07
---

# 破译方法（Cryptanalysis）

> 技术域 d07

## 概念

**中文**：破译方法：不靠密钥，靠算法与统计的弱点——频率分析（单表）、Kasiski/周期检测（多表）、已知/部分明文攻击、唯密文攻击；进入计算机时代升级为**差分/线性分析**（DES 之敌）与**代数攻击**。攻击者模型决定难度：唯密文最难，已知明文次之。

**English**: Cryptanalysis: break without the key, by exploiting statistical and structural weaknesses — frequency analysis (mono), Kasiski/period detection (poly), known/partial-plaintext attacks, ciphertext-only; in the computer era this escalates to **differential/linear** attacks (DES’s nemesis) and algebraic attacks. The attacker model sets the difficulty: ciphertext-only is hardest.
## 算法 / 协议

### 差分分析（Differential Analysis）

**中文**：现代密码分析的核心思想：不看单个输入，看「输入差分」如何影响「输出差分」。下方是 PRESENT 轻量级密码真实在用的 4-bit S 盒——活算它的 16×16 差分分布表：选一个输入差分 Δx，若某输出差分 Δy 的计数明显偏高，攻击者就拿到了一把统计杠杆（差分密码分析 1990 年由 Biham-Shamir 公开，曾直逼 DES）。

**English**: The core idea of modern cryptanalysis: ignore individual inputs, watch how input DIFFERENCES map to output differences. Below is the real 4-bit S-box of the PRESENT lightweight cipher — its 16×16 difference-distribution table computed live. Pick Δx; a biased count for some Δy hands the attacker a statistical lever (differential cryptanalysis, publicized by Biham–Shamir in 1990, once pressed hard against DES).
## 术语

### Frequency Analysis（频率分析）
- 中文：统计字母出现次数，与语言自然频率对照来破译——肯迪 850 年发明。
- English: Counting letter frequencies and matching them to the language's norms — invented by Al-Kindi c. 850.
- 为什么重要：数密文里各字母出现频率，比对语言分布破单表替换。
- 现实哪里用：破凯撒、单表密码。
- 怎么被破：它是"破"的方法，对付多表/换位就失效。
- 游戏：`freq`
- 章节：dawn, arab, venona

### Crib（已知明文（Crib））
- 中文：猜测密文中必然存在的片段（如固定称呼），当破译钩子。
- English: A guessed fragment of plaintext (like a fixed greeting) used as a hook into the cipher.
- 为什么重要：一段猜测的明文（如"WE MUST ATTACK"），用来对位破密文。
- 现实哪里用：破维吉尼亚、恩尼格玛。
- 怎么被破：是攻击手法，不是被破对象。
- 游戏：`enigma`
- 章节：bletchley

### Known-Plaintext Attack（已知明文攻击）
- 中文：手握明文-密文对应片段反推密钥或系统。
- English: Recovering the key or system from a known plaintext-ciphertext pair.
- 为什么重要：已知部分明文，反推密钥。
- 现实哪里用：破各类替换、分组密码。
- 怎么被破：攻击模型之一，明文越多越好破。
- 游戏：`workshop`
- 章节：bletchley, lorenz

### Depth（深度（Depth））
- 中文：两封共享同一天加表/同一密钥的电文相减，让密钥抵消。
- English: Two messages sharing the same day's additive or key; subtracting them cancels the key.
- 为什么重要：同一字母被不同符号加密的层数，即维吉尼亚"深度"。
- 现实哪里用：多表替换的密钥长度。
- 怎么被破：深度越长越难破，但仍是攻击参数。
- 游戏：`jn25`
- 章节：midway

### Kasiski Test（Kasiski 检验）
- 中文：找出密文中重复片段，推断维吉尼亚密钥长度的方法。
- English: Finding repeated fragments to estimate the Vigenère key length.
- 为什么重要：找密文里重复片段，间距的公约数即密钥长度。
- 现实哪里用：破维吉尼亚。
- 怎么被破：是破多表的方法，密钥短才有效。
- 游戏：`codebreak`
- 章节：bacon

### Brute Force（暴力破解）
- 中文：穷举所有可能的密钥，直到解出通顺明文。
- English: Trying every possible key until readable plaintext emerges.
- 为什么重要：把所有可能密钥挨个试，最笨但最通用。
- 现实哪里用：破弱密钥、DES。
- 怎么被破：密钥空间大即无效（2^128 试不完）。
- 游戏：`codebreak`
- 章节：caesar, modern

### Known Plaintext（已知明文）
- 中文：破译者已知的明文片段（与 crib 同义但更宽泛）。
- English: A plaintext fragment the codebreaker already knows (broader than a crib).
- 为什么重要：攻击者手里有一段明密文对应。
- 现实哪里用：破各种密码。
- 怎么被破：攻击模型，明文越多越好破。
- 游戏：`venona`
- 章节：venona

### Chosen-Plaintext Attack（选择明文攻击）
- 中文：攻击者能挑选明文并拿到对应密文。
- English: The attacker can choose plaintext and obtain its ciphertext.
- 为什么重要：攻击者能自选明文看密文，比已知明文更强。
- 现实哪里用：破分组密码、CBC。
- 怎么被破：攻击模型，选得巧则信息量更大。
- 游戏：`catapult`
- 章节：caesar

### Birthday Attack（生日攻击）
- 中文：利用生日悖论在哈希/碰撞中加速搜索。
- English: Exploiting the birthday paradox to speed up collision search.
- 为什么重要：用"生日悖论"在 2^64 碰撞里找两个相同哈希。
- 现实哪里用：破 3DES、哈希碰撞。
- 怎么被破：是攻击，把安全强度砍半。
- 游戏：`hashlab`
- 章节：modern

### Man-in-the-Middle（中间人攻击）
- 中文：攻击者同时冒充通信双方，截听或篡改信息。
- English: An attacker impersonates both parties to intercept or alter traffic.
- 为什么重要：攻击者插在通信双方之间，冒充双方。
- 现实哪里用：破无认证的密钥交换。
- 怎么被破：靠证书/签名认证防住。
- 游戏：`bb84`
- 章节：quantum

### Traffic Analysis（流量分析）
- 中文：不读内容，仅凭报文数量/方向/时机推断情报。
- English: Inferring intelligence from message volume, direction and timing without reading them.
- 为什么重要：不看内容，只看流量模式（谁对谁、多少、何时）。
- 现实哪里用：情报、隐写场景。
- 怎么被破：用填充+恒定速率打乱模式可抗。
- 游戏：`jn25`
- 章节：midway

### Differential Cryptanalysis（差分密码分析）
- 中文：差分密码分析。分析成对明文的固定差异在加密轮间传播的规律，统计高概率差分路径以恢复密钥；对 DES 等迭代密码特别有效，推动了密码设计演进。
- English: A chosen-plaintext technique that studies how fixed differences between paired plaintexts propagate through cipher rounds. High-probability differential trails leak key information; it was crucial in breaking DES variants and shaping modern cipher design.
- 为什么重要：追踪特定"差分特征"在轮间传播，破 DES。
- 现实哪里用：破 DES 及 SPN 密码。
- 怎么被破：是破分组密码的方法，DES 已倒。
- 游戏：`sm4`
- 章节：modern

### Linear Cryptanalysis（线性密码分析）
- 中文：线性密码分析。寻找明文、密文与密钥比特间的线性近似，收集大量明密文对统计偏差来逐位恢复密钥；属已知明文攻击，对 DES 十分有效。
- English: A known-plaintext attack that finds linear approximations relating plaintext, ciphertext, and key bits, then accumulates statistical bias over many pairs to recover key bits one by one. It proved highly effective against DES.
- 为什么重要：用线性近似逼近密码，统计偏差。
- 现实哪里用：破 DES、Feistel 密码。
- 怎么被破：是攻击方法，DES 在临界边缘。
- 游戏：`sm4`
- 章节：modern

### Rainbow Table（彩虹表）
- 中文：彩虹表。预计算并压缩存储的「明文-哈希」链集合，用于快速反查哈希得到口令；加盐或使用慢哈希可令其失效，是口令破解的经典加速手段。
- English: A precomputed, compressed table of hash chains that lets an attacker invert a hash to recover a password far faster than brute force. Salting or slow key-derivation functions render rainbow tables ineffective.
- 为什么重要：把常见口令的哈希预存成"链"，加速破解。
- 现实哪里用：破存储的口令哈希。
- 怎么被破：是攻击，加盐可破它。
- 游戏：`hashlab`
- 章节：modern

### Side-Channel Attack（侧信道攻击）
- 中文：侧信道攻击。不攻击算法本身，而是利用设备运行时的物理泄露（功耗、电磁辐射、运行时间、缓存行为）推断密钥，常针对智能卡等实现。
- English: An attack that exploits physical leakage from a running device—power consumption, electromagnetic emission, timing, or cache behavior—to infer secret keys, rather than attacking the algorithm's mathematics. Smart cards and AES implementations are common targets.
- 为什么重要：不看算法，看物理泄露（时间、功耗、电磁）。
- 现实哪里用：破硬件加密、实现。
- 怎么被破：是攻击，靠常数时间实现抗。
- 游戏：`enigma`
- 章节：bletchley

### Timing Attack（计时攻击）
- 中文：计时攻击。侧信道攻击的一种：通过精确测量操作的耗时差异推断秘密数据，如依解密时间逐位猜测密钥；常数时间实现是常用防御手段。
- English: A side-channel attack that infers secrets from precise differences in operation duration, for example guessing key bits from decryption time. Constant-time implementations are the standard defense.
- 为什么重要：测运算耗时差异，逐位还原密钥。
- 现实哪里用：破 RSA、实现。
- 怎么被破：是攻击，常数时间实现抗。
- 游戏：`enigma`
- 章节：bletchley

### Chosen-Ciphertext Attack（选择密文攻击）
- 中文：选择密文攻击。攻击者可选择任意密文并获取对应解密结果，据此推断密钥或消息；现代公钥加密须在此模型下保持安全（CCA 安全）。
- English: An attack model in which the adversary may choose ciphertexts and obtain their decryptions, using the oracle to deduce keys or plaintexts. Modern public-key encryption is required to remain secure in this model (CCA security).
- 为什么重要：攻击者自选密文看明文，最危险模型。
- 现实哪里用：破分组密码模式、填充。
- 怎么被破：攻击模型，CBC+无 MAC 会中。
- 游戏：`rsa`
- 章节：modern

### Meet-in-the-Middle Attack（中途相遇攻击）
- 中文：中途相遇攻击。把加密分前后两段，分别从两端计算中间值并比对匹配，能以远低于暴力的代价破解双重加密等结构，2DES 因此不安全。
- English: A technique that splits a cipher into two halves, computes intermediate values from both ends, and matches them to recover keys far faster than brute force. It is why double encryption, such as 2DES, offers little added security.
- 为什么重要：两头各搜一半再中间汇合，破多重加密。
- 现实哪里用：破 3DES、多表。
- 怎么被破：是攻击，把 n 层加密降到 2n 位。
- 游戏：`bombe`
- 章节：bletchley

### Ciphertext-Only Attack（唯密文攻击）
- 中文：最困难的密码分析场景，攻击者只能拿到截获的密文，没有对应的明文或密钥信息，只能依靠统计特性、语言规律或算法本身的弱点来尝试破译。
- English: A ciphertext-only attack is the most challenging cryptanalysis scenario, in which the attacker has access only to intercepted ciphertext, with no matching plaintext or key material. Breaking the cipher then relies on statistical properties, linguistic patterns, or structural weaknesses of the algorithm.
- 为什么重要：只有密文、无明文，最弱的模型。
- 现实哪里用：一切真实窃听场景。
- 怎么被破：攻击模型，信息最少最难破。
- 游戏：`substitution`
- 章节：caesar, arab

### One-Time Pad Reuse（一次一密重用）
- 中文：一次一密密钥流被重复使用时产生的严重漏洞，攻击者将两段密文异或叠加以抵消密钥，再利用语言规律恢复明文，VENONA 项目正是利用了这一缺陷。
- English: One-time pad reuse occurs when the same random key stream encrypts more than one message, fatally destroying the cipher's perfect secrecy. An attacker can XOR the ciphertexts to cancel the key and recover plaintext through language analysis, exactly as exploited by the VENONA project.
- 为什么重要：同一条一次性密钥用两次，导致被破。
- 现实哪里用：VENONA、核通信事故。
- 怎么被破：是致命失误，两条密文异或即得明文。
- 游戏：`venona`
- 章节：venona

### CCA2（自适应选择密文攻击（CCA2））
- 中文：最严苛的攻击模型：攻击者可以随时向解密预言机提问，还能根据上一次的解密响应调整下一次的提问（比只能预先提问的 CCA1 更强）；现代公钥加密必须在此模型下保持安全（IND-CCA2）。
- English: The strictest attack model: the adversary queries a decryption oracle adaptively, choosing each ciphertext based on previous answers (stronger than the pre-query-only CCA1). Modern public-key encryption must be secure here (IND-CCA2).
- 为什么重要：自适应选择密文攻击，最强模型。
- 现实哪里用：衡量公钥/模式安全性。
- 怎么被破：攻击模型，安全定义的最高标准。
- 游戏：`rsa`
- 章节：modern

### Distinguishing Attack（区分攻击）
- 中文：不需要恢复密钥或明文，只要能把密文和纯随机串区分开，就算「破了一半」；现代安全证明几乎都以「攻击者无法区分」作为安全性的定义。
- English: An attack that merely tells ciphertext apart from pure randomness, without recovering keys or plaintext—often enough to declare a scheme broken. Modern security proofs are phrased as indistinguishability.
- 为什么重要：区分"加密输出"与"随机串"，证明不安全。
- 现实哪里用：可证明安全的理论工具。
- 怎么被破：理论攻击，证明算法不是 PRP/PRF。
- 游戏：`hashlab`
- 章节：modern

### Constant-Time Implementation（常数时间实现）
- 中文：让代码在秘密数据面前「面不改色」：无论密钥比特是什么，耗时都完全一致，从根上堵死计时攻击；这是 AES 等密码实现的基本功。
- English: Writing code whose running time never depends on secret data, so timing reveals nothing about the key. It is the standard defense against timing attacks and a basic skill for crypto implementations.
- 为什么重要：让运算时间不依赖密钥值，防时序攻击。
- 现实哪里用：所有软件加密实现。
- 怎么被破：是防御手段，不是攻击。
- 游戏：`sm4`
- 章节：modern

### Padding Oracle Attack（填充预言机攻击）
- 中文：服务器对「填充错误」和「认证失败」给出不同回应，这小小的差别就成了攻击者逐字节撬开密文的预言机；Vaudenay 2002 年把 Bleichenbacher 的思路用在 CBC 上，POODLE 等真实漏洞都是它的亲戚。
- English: When a server answers padding errors and authentication failures differently, that tiny difference becomes an oracle letting an attacker decrypt byte by byte. Vaudenay applied Bleichenbacher's idea to CBC in 2002; real bugs like POODLE are descendants.
- 为什么重要：利用填充校验报错，逐字节还原明文。
- 现实哪里用：破 CBC 模式。
- 怎么被破：是攻击，加 MAC/用 AEAD 可防。
- 游戏：`sm4`
- 章节：modern

### Backdoor（后门）
- 中文：藏在算法或实现里的秘密入口（相当于藏在系统里的木马），设计者能借此绕过加密；最著名的当属 2013 年被曝的 Dual_EC_DRBG——一个被写进标准里的、带后门的伪随机数生成器。
- English: A secret way to bypass a cryptosystem, hidden inside an algorithm or its implementation (the crypto equivalent of a trojan horse). The most notorious case is Dual_EC_DRBG, a standardized random generator revealed in 2013 to contain a backdoor.
- 为什么重要：故意留下的暗门，让特定人可破。
- 现实哪里用：历史上的暗门、争议。
- 怎么被破：靠开放审查防。
- 游戏：`phishhunt`
- 章节：modern

### Phishing（钓鱼攻击）
- 中文：伪装成可信发件人，诱骗用户点击恶意链接或交出凭据——加密保护的是信息，防不住主动上钩的人。
- English: Masquerading as a trusted sender to trick users into clicking malicious links or surrendering credentials — crypto secures data, not gullible humans.
- 为什么重要：冒充可信方骗取密钥/凭证，社会工程。
- 现实哪里用：邮件、网站钓鱼。
- 怎么被破：靠认证、教育防，非算法问题。
- 游戏：`phishhunt`
- 章节：modern

### Password Spraying（密码喷射）
- 中文：拿少数几个弱口令（如 123456）横扫成千上万个账号，靠撞大运绕过单账户锁定策略，与撞库（凭证填充）方向相反。
- English: Trying a handful of weak passwords (like 123456) across thousands of accounts, dodging per-account lockout policies by playing the odds—the counterpart of credential stuffing.
- 为什么重要：对大量账户各试一个常见口令，规避锁定。
- 现实哪里用：攻击登录系统。
- 怎么被破：靠 MFA、限流防。
- 游戏：`phishhunt`
- 章节：modern

### Canary Trap（金丝雀陷阱）
- 中文：给不同人发送措辞略有差异的同一份机密，谁泄露就凭版本差异揪出内鬼，是抓泄密源的经典情报手法。
- English: Giving each suspect a slightly different version of the same secret, then identifying the leaker by which version surfaces—a classic intelligence technique for tracing leaks to their source.
- 为什么重要：故意泄露不同版本信息，追踪内鬼。
- 现实哪里用：情报反谍。
- 怎么被破：是反间谍手段，非算法。
- 游戏：`intel-assess`
- 章节：bletchley

### Steganalysis（隐写分析）
- 中文：识别并提取藏在普通载体里的秘密消息的学问：统计异常、位平面纹理、卡方检验——比对加粗字符或检测像素最低有效位，是隐写术的克星。
- English: The science of detecting and extracting hidden messages from innocent-looking carriers—statistical anomalies, bit-plane texture, chi-square tests; spotting bold characters or pixel-low-bit anomalies—the bane of steganography.
- 为什么重要：找隐藏的密文，反隐写。
- 现实哪里用：破图片/文件隐写。
- 怎么被破：是攻击，统计载体揪出。
- 游戏：`bacon`
- 章节：bacon, modern

### Replay Attack（重放攻击）
- 中文：截获一段合法通信后原样重发，骗系统重复执行一次操作；时间戳、随机数与序列号是常见的防御手段。
- English: Intercepting a legitimate transmission and resending it unchanged to trick a system into repeating an action; timestamps, nonces and sequence numbers are common defenses.
- 为什么重要：重放录下的有效消息，冒充合法方。
- 现实哪里用：破无时间戳/nonce 的协议。
- 怎么被破：靠 nonce/时间戳防。
- 游戏：`bb84`
- 章节：modern

### Shor's Algorithm（Shor 算法）
- 中文：1994 年秀尔提出的量子算法，能在多项式时间内完成大数分解与离散对数——直接瓦解 RSA、Diffie-Hellman 与 ECC 的数学根基；它的存在是后量子密码迁移的全部理由。
- English: Peter Shor's 1994 quantum algorithm factors integers and computes discrete logarithms in polynomial time — dismantling the mathematical foundations of RSA, Diffie-Hellman and ECC at a stroke; it is the entire reason for the post-quantum migration.
- 为什么重要：量子算法，多项式时间内分解大数、解离散对数。
- 现实哪里用：破 RSA、ECC 的量子威胁。
- 怎么被破：是量子攻击，经典机跑不动。
- 游戏：`pqc-match`
- 章节：quantum

### Grover's Algorithm（Grover 算法）
- 中文：1996 年格罗弗提出的量子搜索算法，把无结构暴力搜索从 N 步加速到约 √N 步；对策简单——密钥长度加倍即可，因此 AES-256 在量子时代依然安全。
- English: Lov Grover's 1996 quantum search algorithm speeds unstructured brute force from N steps to about √N. The countermeasure is simple — double the key length — which is why AES-256 remains secure in the quantum era.
- 为什么重要：量子搜索，把穷举从 2^n 降到 2^(n/2)。
- 现实哪里用：破对称密码的量子威胁。
- 怎么被破：是量子攻击，把强度砍半。
- 游戏：`pqc-match`
- 章节：quantum

### Ninja Secret Codes（忍术隐语与暗号）
- 中文：日本戦国时代的谍报秘匿术：「乱破り」指潜入敌方破其耳目；1676 年《万川集海》辑录隐语、合符、置码等传信法门——防谍与保密并重的东方实践。
- English: Sengoku-era Japan's tradecraft: "rappa" meant infiltrating and blinding the enemy's scouts, while the Bansenshukai (1676) compiled argots, matching tallies and drop points for covert messaging — counter-intelligence and secrecy as one discipline.
- 为什么重要：战国忍者用的隐写与暗号系统。
- 现实哪里用：日本情报史。
- 怎么被破：靠隐写与约定，载体暴露即破。
- 游戏：`starflag`
- 章节：bacon

### Variant Kana Steganography（变体假名隐写）
- 中文：平安时代日本贵族女性以「女手」（变体假名）书写往来，字形因人而异、外人难识；间或以换字与略号藏意于和歌书简之中——一种长于日常文本的柔性隐写传统。
- English: Heian-era court women wrote in onna-de ("women's hand"), variant kana whose letterforms differed by hand and were opaque to outsiders; occasional character swaps and abbreviations hid meaning inside poems and letters — a soft steganography woven into everyday writing.
- 为什么重要：用假名变体藏信息，日语隐写。
- 现实哪里用：日本隐写史。
- 怎么被破：靠统计变体揪出。
- 游戏：`bacon`
- 章节：arab

### Hash Collision Attack（哈希碰撞攻击）
- 中文：寻找两个不同输入产生相同哈希输出的攻击：对 n 位哈希，生日悖论使随机碰撞约需 2^(n/2) 次尝试；碰撞直接瓦解数字签名的「唯一性」——签名一份文件等于签名其碰撞副本。
- English: Finding two different inputs with the same hash output: by the birthday bound, random collisions on an n-bit hash cost about 2^(n/2) tries. A collision breaks signature uniqueness — signing one file signs it.
- 为什么重要：找两个不同输入同哈希，破哈希。
- 现实哪里用：破 MD5、SHA-1。
- 怎么被破：是攻击，MD5 已倒。
- 游戏：`hashlab`
- 章节：modern

### Meet-in-the-Middle（中间相遇攻击）
- 中文：从明文正向加密、从密文逆向解密，在中间比对——将暴力穷举从 2^n 降至 2^(n/2)。3DES 用两次加密仍不够安全的原因。
- English: Encrypt forward from plaintext and decrypt backward from ciphertext, meeting in the middle — reduces brute force from 2^n to 2^(n/2). Why double encryption is never enough.
- 为什么重要：两头搜索中间汇合，破多重加密。
- 现实哪里用：破 3DES。
- 怎么被破：是攻击方法。
- 游戏：`bombe`
- 章节：modern

### Miller-Rabin
- 中文：概率性素数测试：对随机底数检验费马小定理的强化版。误判率可控制在任意低（如 2^-128），是 RSA/SM4 密钥生成的标准步骤。
- English: A probabilistic primality test with arbitrarily low error rate (e.g. 2^-128). The standard step in RSA/SM4 key generation.
- 为什么重要：素性检验，公钥生成大素数的基础。
- 现实哪里用：RSA 密钥生成。
- 怎么被破：是工具，非被破对象。
- 游戏：`rsa`
- 章节：modern

### Power Analysis（功耗分析）
- 中文：通过测量芯片加密时的功耗波动来推测密钥的侧信道攻击——简单功耗分析(SPA)直接读波形，差分功耗分析(DPA)用统计提取。
- English: Side-channel attacks measuring chip power fluctuations during encryption to deduce keys — SPA reads waveforms directly, DPA uses statistics.
- 为什么重要：测设备功耗曲线还原密钥。
- 现实哪里用：破智能卡、硬件。
- 怎么被破：是侧信道攻击，屏蔽功耗可抗。
- 游戏：`enigma`
- 章节：modern

### Cardan Grille（卡当格栅）
- 中文：一张挖孔卡片：透过孔洞写密文、移开后补足无害文字。收信人用同样的格栅读出隐藏信息——文艺复兴至今仍在使用的隐写骨架。
- English: A card with holes cut out: write the secret through them, fill the rest with innocent prose, and the recipient reads it through an identical grille — a steganographic skeleton still in use into WWII.
- 为什么重要：卡丹诺格栅，把密文藏进明文。
- 现实哪里用：隐写史。
- 怎么被破：靠统计载体揪出。
- 游戏：`spotdiff`
- 章节：bacon

### S-Box（S 盒（替换盒））
- 中文：分组密码的非线性核心部件：m 位进 n 位出的查表替换。AES 的 8→8 S 盒由乘法逆元加仿射变换构成，是整个算法唯一的非线性来源。
- English: The nonlinear heart of block ciphers: an m-bit to n-bit substitution table. AES's 8-bit S-box combines multiplicative inverses with an affine map — the algorithm's only source of nonlinearity.
- 为什么重要：替换盒，分组密码的混淆核心。
- 现实哪里用：AES 的 SubBytes。
- 怎么被破：设计弱则差分分析可破。
- 游戏：`aes-lab`
- 章节：modern

### Key Derivation for Storage（存储口令拉伸）
- 中文：把人类口令加工成可安全用作密钥的字节的工序总称：加盐慢哈希（bcrypt/scrypt/Argon2）通过提高每次猜测的成本对抗离线爆破。
- English: Turning human passwords into key-grade bytes: salted slow hashing (bcrypt, scrypt, Argon2) prices each offline guess upward so bulk cracking becomes uneconomical.
- 为什么重要：把口令派生成存储密钥的慢哈希。
- 现实哪里用：口令存储。
- 怎么被破：是防御，口令弱仍破。
- 游戏：`password-vault`
- 章节：modern

### Cold Boot（冷启动攻击）
- 中文：利用 DRAM「断电后仍保留数据数秒」的物理缺陷：冰冷或重插刷掉密钥后，用差分扫描导出内存中的 AES 密钥。2008 年 Princeton 团队证明甚至能从笔记本内存里恢复加密盘密钥。
- English: DRAM retains data for seconds after power-off: freeze or reinsert it, then dump the memory and extract AES keys. Princeton's 2008 team recovered disk-encryption keys out of laptops this way.
- 为什么重要：冷却内存后读残存密钥。
- 现实哪里用：破加密设备的 RAM。
- 怎么被破：是物理攻击，刷新内存可抗。
- 游戏：`enigma`
- 章节：modern

### Differential Side-Channel（差分侧信道（DPA））
- 中文：对数千条采样功率曲线做统计相关分析，把密钥逐位从设备中抠出来——不是破解算法，而是破解硬件。Kocher 2001 年发明，是智能卡芯片安全的头号劲敌。
- English: Correlating thousands of power traces to descale the key bit by bit — attacking the hardware, not the crypto. Kocher established it in 2001; it remains the biggest threat to embedded chips.
- 为什么重要：差分分析结合侧信道，破硬件。
- 现实哪里用：破智能卡。
- 怎么被破：是攻击方法。
- 游戏：`side-channel-lab`
- 章节：modern

### Kasiski vs Index of Coincidence（卡西斯基检验与重合指数）
- 中文：破译多表密码的两把钥匙：卡西斯基（重复模式间距 = 密钥周期倍数的众数）与重合指数（频率统计越接近英文，周期越可能正确）。普拉特 1863 年公布，成为 19 世纪多表分析的第一定理。
- English: Breaking polyalphabetic ciphers: Kasiski's repeated-group distances reveal the period, and the index of coincidence ranks which period is right. First published in 1863, it opened the 19th century's systematic attack.
- 为什么重要：两种找密钥长度的方法对比。
- 现实哪里用：破多表替换。
- 怎么被破：是攻击方法。
- 游戏：`vigenere`
- 章节：arab

### Banburismus（班伯里斯穆斯统计破译法）
- 中文：布莱切利园 1941 年前后用于海战 Enigma 的统计破译术：用「深度」电文对的多重字母重合率给可能的轮序打分、逐级排除，由 A. 图灵主导推广——Bombe 之外的第二台「统计机器」。
- English: The statistical sieve used at Bletchley Park from 1941 on naval Enigma: score possible rotor orders by the multiple coincidences of depth pairs, then eliminate. Driven by Alan Turing — codebreaking's second engine beside the Bombe.
- 为什么重要：用统计推断 Enigma 转子顺序的方法。
- 现实哪里用：布莱切利园破 Enigma。
- 怎么被破：是破译方法。
- 游戏：`bombe`
- 章节：bletchley

### Depth（深度（密钥复用深度））
- 中文：同一密钥材料对多封消息的重复使用——JN-25 同版加表期内多封电文相减抵消加表，破译员从「深度对」反推明文；VENONA 的 OTP 复用是同一种深度的重演。
- English: The reuse of the same key material across many messages: within one JN-25 additive period, subtracting messages cancels the table and reveals plaintext differences; VENONA's OTP reuse was the same depth all over again.
- 为什么重要：同一字母被不同符号加密的层数，即维吉尼亚"深度"。
- 现实哪里用：多表替换的密钥长度。
- 怎么被破：深度越长越难破，但仍是攻击参数。
- 游戏：`jn25`
- 章节：midway

### Fault Attack（故障注入攻击）
- 中文：用电压毛刺/时钟脉冲/激光把运算打出错，再对比错误输出反推秘密——无校验的 CRT-RSA 实现是经典靶点（1996 Bellcore 论文），也是「实现安全」与「算法安全」的分界线。
- English: Glitch the computation with voltage spikes, clock pulses or lasers, then compare faulty outputs to recover secrets — the unvalidated CRT-RSA implementation is the classic target (Bellcore 1996), the dividing line between implementation and algorithm security.
- 为什么重要：注入硬件故障，逼出密钥或错误解密。
- 现实哪里用：破智能卡、FPGA。
- 怎么被破：是攻击，冗余校验可抗。
- 游戏：`side-channel-lab`
- 章节：modern

### Replay Attack（重放攻击）
- 中文：把截获的合法消息原样重发以骗取认证或支付——TOTP 的时间片、nonce 计数器与挑战-响应协议都在对抗重放：旧凭证不因合法而可以再用。
- English: Resending a captured, legitimate message to cheat authentication or payment — TOTP time slices, nonce counters and challenge-response all fight replay: being genuine does not make it spendable twice.
- 为什么重要：重放录下的有效消息，冒充合法方。
- 现实哪里用：破无时间戳/nonce 的协议。
- 怎么被破：靠 nonce/时间戳防。
- 游戏：`totp-verify`
- 章节：modern

### SIGINT（信号情报（SIGINT））
- 中文：截收无线电/雷达/通信并从中提炼情报的完整链条——破译只是其中一环，流量分析与测向同为核心；VENONA、中途岛等都是 SIGINT 的经典战例。
- English: The full chain of intercepting radio, radar and communications for intelligence — codebreaking is one link; traffic analysis and direction finding are equally core. VENONA and Midway are classic SIGINT campaigns.
- 为什么重要：信号情报，截获并破译敌方通信。
- 现实哪里用：国家级情报。
- 怎么被破：是情报活动，非单一算法。
- 游戏：`venona`
- 章节：venona

### Key Confusion Attack（密钥混淆攻击）
- 中文：让协议双方对「同一把密钥」做出不同解释的攻击：典型如签名中的哈希截断混淆（Curve25519 指纹欺诈、TLS 早期版本）——现代设计用域分离（DOMAIN 标签）根治。
- English: Making two parties interpret the same key differently — classic cases are hash-truncation confusion in signatures and early TLS; modern designs fix it with domain separation.
- 为什么重要：利用混淆不足反推密钥关系。
- 现实哪里用：破分组密码。
- 怎么被破：是攻击方法。
- 章节：modern

### Algebraic Attack（代数攻击）
- 中文：把密码写成低次数方程组并用解方程器求解的攻击范式：流密码（非线性反馈）与某些分组密码的弱点由此暴露——设计者必须保证系统「代数次数足够高」。
- English: Model the cipher as low-degree polynomial equations and solve: stream ciphers and some block ciphers fall to it — designers must keep algebraic degree high.
- 为什么重要：把密码方程化，代数求解密钥。
- 现实哪里用：破流密码、部分分组。
- 怎么被破：是攻击方法。
- 章节：modern

### Dictionary Attack（字典攻击）
- 中文：用常见口令词典（+规则变形）逐条试签的破解方式：比纯暴力高效得多——「Salt + 慢哈希 + 口令短语」就是它的终结者。
- English: Testing candidate passwords from common dictionaries plus mutations — far more efficient than brute force. Salt + slow hash + passphrases end it.
- 为什么重要：拿字典逐条试口令。
- 现实哪里用：破弱口令。
- 怎么被破：是攻击，强口令+慢哈希可抗。
- 游戏：`password-vault`
- 章节：modern

### Speculative Execution Side-Channel（推测执行侧信道（Spectre/Meltdown））
- 中文：CPU 为提速进行「推测执行」并提前访问缓存，其痕迹被时序/缓存信道读出——2017 年的 Spectre/Meltdown 证明：即使代码零漏洞，芯片级的绩效优化也会泄露秘密。
- English: CPUs speculatively execute and probe caches ahead of time; timing/cache side-channels read the residue. The 2017 Spectre/Meltdown class showed that chip-level optimizations leak secrets even with flawless code.
- 为什么重要：利用 CPU 推测执行泄密（Spectre/Meltdown）。
- 现实哪里用：破现代 CPU 加密。
- 怎么被破：是攻击，微码补丁可缓解。
- 章节：modern
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [古代起源](../02-eras/e01-origins/README.md)
- [古典希腊罗马](../02-eras/e02-classical/README.md)
- [阿拉伯黄金时代](../02-eras/e04-arabic-golden-age/README.md)
- [文艺复兴与宗教改革](../02-eras/e06-renaissance/README.md)
- [第二次世界大战](../02-eras/e11-ww2/README.md)
- [冷战与信息论转折](../02-eras/e12-cold-war-info-theory/README.md)
- [公钥革命](../02-eras/e13-public-key/README.md)
- [量子转折](../02-eras/e16-quantum-turn/README.md)

**关联人物**（人物志）
- [弗里德曼](../people/friedman.md)
- [弗里德里希·卡西斯基](../people/kasiski.md)
- [查尔斯·巴贝奇](../people/babbage.md)
- [伊莱·比哈姆](../people/biham.md)
- [劳伦斯·萨福德](../people/safford.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `aes-lab` · AES 轮函数实验室
- `bacon` · 培根密码机
- `bb84` · BB84 量子密钥
- `bombe` · 炸弹机
- `catapult` · 弹射打靶
- `codebreak` · 大师密码
- `enigma` · 恩尼格玛
- `freq` · 词频分析
- `hashlab` · 哈希雪崩实验室
- `intel-assess` · 情报评估
- `jn25` · JN-25 破译机
- `password-vault` · 口令保险库
- `phishhunt` · 钓鱼邮件狩猎
- `pqc-match` · 后量子迁移配对
- `rsa` · RSA 小素数保险柜
- `side-channel-lab` · 侧信道实验室
- `sm4` · SM4 国密试炼场
- `spotdiff` · 找茬破译
- `starflag` · 星条旗密码
- `substitution` · 替换密码
- `totp-verify` · TOTP 双因素验证
- `venona` · VENONA 双密复用
- `vigenere` · 维吉尼亚
- `workshop` · 破译工作室
