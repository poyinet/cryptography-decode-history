---
title: 破译方法
title_en: Cryptanalysis
type: domain
domain: d07
---

# 破译方法（Cryptanalysis）

> 技术域 d07 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

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
- 游戏：`freq`
- 章节：dawn, arab, venona

### Crib（已知明文（Crib））
- 中文：猜测密文中必然存在的片段（如固定称呼），当破译钩子。
- English: A guessed fragment of plaintext (like a fixed greeting) used as a hook into the cipher.
- 游戏：`enigma`
- 章节：bletchley

### Known-Plaintext Attack（已知明文攻击）
- 中文：手握明文-密文对应片段反推密钥或系统。
- English: Recovering the key or system from a known plaintext-ciphertext pair.
- 游戏：`workshop`
- 章节：bletchley, lorenz

### Depth（深度（Depth））
- 中文：两封共享同一天加表/同一密钥的电文相减，让密钥抵消。
- English: Two messages sharing the same day's additive or key; subtracting them cancels the key.
- 游戏：`jn25`
- 章节：midway

### Kasiski Test（Kasiski 检验）
- 中文：找出密文中重复片段，推断维吉尼亚密钥长度的方法。
- English: Finding repeated fragments to estimate the Vigenère key length.
- 游戏：`codebreak`
- 章节：bacon

### Brute Force（暴力破解）
- 中文：穷举所有可能的密钥，直到解出通顺明文。
- English: Trying every possible key until readable plaintext emerges.
- 游戏：`codebreak`
- 章节：caesar, modern

### Known Plaintext（已知明文）
- 中文：破译者已知的明文片段（与 crib 同义但更宽泛）。
- English: A plaintext fragment the codebreaker already knows (broader than a crib).
- 游戏：`venona`
- 章节：venona

### Chosen-Plaintext Attack（选择明文攻击）
- 中文：攻击者能挑选明文并拿到对应密文。
- English: The attacker can choose plaintext and obtain its ciphertext.
- 游戏：`catapult`
- 章节：caesar

### Birthday Attack（生日攻击）
- 中文：利用生日悖论在哈希/碰撞中加速搜索。
- English: Exploiting the birthday paradox to speed up collision search.
- 游戏：`hashlab`
- 章节：modern

### Man-in-the-Middle（中间人攻击）
- 中文：攻击者同时冒充通信双方，截听或篡改信息。
- English: An attacker impersonates both parties to intercept or alter traffic.
- 游戏：`bb84`
- 章节：quantum

### Traffic Analysis（流量分析）
- 中文：不读内容，仅凭报文数量/方向/时机推断情报。
- English: Inferring intelligence from message volume, direction and timing without reading them.
- 游戏：`jn25`
- 章节：midway

### Differential Cryptanalysis（差分密码分析）
- 中文：差分密码分析。分析成对明文的固定差异在加密轮间传播的规律，统计高概率差分路径以恢复密钥；对 DES 等迭代密码特别有效，推动了密码设计演进。
- English: A chosen-plaintext technique that studies how fixed differences between paired plaintexts propagate through cipher rounds. High-probability differential trails leak key information; it was crucial in breaking DES variants and shaping modern cipher design.
- 游戏：`sm4`
- 章节：modern

### Linear Cryptanalysis（线性密码分析）
- 中文：线性密码分析。寻找明文、密文与密钥比特间的线性近似，收集大量明密文对统计偏差来逐位恢复密钥；属已知明文攻击，对 DES 十分有效。
- English: A known-plaintext attack that finds linear approximations relating plaintext, ciphertext, and key bits, then accumulates statistical bias over many pairs to recover key bits one by one. It proved highly effective against DES.
- 游戏：`sm4`
- 章节：modern

### Rainbow Table（彩虹表）
- 中文：彩虹表。预计算并压缩存储的「明文-哈希」链集合，用于快速反查哈希得到口令；加盐或使用慢哈希可令其失效，是口令破解的经典加速手段。
- English: A precomputed, compressed table of hash chains that lets an attacker invert a hash to recover a password far faster than brute force. Salting or slow key-derivation functions render rainbow tables ineffective.
- 游戏：`hashlab`
- 章节：modern

### Side-Channel Attack（侧信道攻击）
- 中文：侧信道攻击。不攻击算法本身，而是利用设备运行时的物理泄露（功耗、电磁辐射、运行时间、缓存行为）推断密钥，常针对智能卡等实现。
- English: An attack that exploits physical leakage from a running device—power consumption, electromagnetic emission, timing, or cache behavior—to infer secret keys, rather than attacking the algorithm's mathematics. Smart cards and AES implementations are common targets.
- 游戏：`enigma`
- 章节：bletchley

### Timing Attack（计时攻击）
- 中文：计时攻击。侧信道攻击的一种：通过精确测量操作的耗时差异推断秘密数据，如依解密时间逐位猜测密钥；常数时间实现是常用防御手段。
- English: A side-channel attack that infers secrets from precise differences in operation duration, for example guessing key bits from decryption time. Constant-time implementations are the standard defense.
- 游戏：`enigma`
- 章节：bletchley

### Chosen-Ciphertext Attack（选择密文攻击）
- 中文：选择密文攻击。攻击者可选择任意密文并获取对应解密结果，据此推断密钥或消息；现代公钥加密须在此模型下保持安全（CCA 安全）。
- English: An attack model in which the adversary may choose ciphertexts and obtain their decryptions, using the oracle to deduce keys or plaintexts. Modern public-key encryption is required to remain secure in this model (CCA security).
- 游戏：`rsa`
- 章节：modern

### Meet-in-the-Middle Attack（中途相遇攻击）
- 中文：中途相遇攻击。把加密分前后两段，分别从两端计算中间值并比对匹配，能以远低于暴力的代价破解双重加密等结构，2DES 因此不安全。
- English: A technique that splits a cipher into two halves, computes intermediate values from both ends, and matches them to recover keys far faster than brute force. It is why double encryption, such as 2DES, offers little added security.
- 游戏：`bombe`
- 章节：bletchley

### Ciphertext-Only Attack（唯密文攻击）
- 中文：最困难的密码分析场景，攻击者只能拿到截获的密文，没有对应的明文或密钥信息，只能依靠统计特性、语言规律或算法本身的弱点来尝试破译。
- English: A ciphertext-only attack is the most challenging cryptanalysis scenario, in which the attacker has access only to intercepted ciphertext, with no matching plaintext or key material. Breaking the cipher then relies on statistical properties, linguistic patterns, or structural weaknesses of the algorithm.
- 游戏：`substitution`
- 章节：caesar, arab

### One-Time Pad Reuse（一次一密重用）
- 中文：一次一密密钥流被重复使用时产生的严重漏洞，攻击者将两段密文异或叠加以抵消密钥，再利用语言规律恢复明文，VENONA 项目正是利用了这一缺陷。
- English: One-time pad reuse occurs when the same random key stream encrypts more than one message, fatally destroying the cipher's perfect secrecy. An attacker can XOR the ciphertexts to cancel the key and recover plaintext through language analysis, exactly as exploited by the VENONA project.
- 游戏：`venona`
- 章节：venona

### CCA2（自适应选择密文攻击（CCA2））
- 中文：最严苛的攻击模型：攻击者可以随时向解密预言机提问，还能根据上一次的解密响应调整下一次的提问（比只能预先提问的 CCA1 更强）；现代公钥加密必须在此模型下保持安全（IND-CCA2）。
- English: The strictest attack model: the adversary queries a decryption oracle adaptively, choosing each ciphertext based on previous answers (stronger than the pre-query-only CCA1). Modern public-key encryption must be secure here (IND-CCA2).
- 游戏：`rsa`
- 章节：modern

### Distinguishing Attack（区分攻击）
- 中文：不需要恢复密钥或明文，只要能把密文和纯随机串区分开，就算「破了一半」；现代安全证明几乎都以「攻击者无法区分」作为安全性的定义。
- English: An attack that merely tells ciphertext apart from pure randomness, without recovering keys or plaintext—often enough to declare a scheme broken. Modern security proofs are phrased as indistinguishability.
- 游戏：`hashlab`
- 章节：modern

### Constant-Time Implementation（常数时间实现）
- 中文：让代码在秘密数据面前「面不改色」：无论密钥比特是什么，耗时都完全一致，从根上堵死计时攻击；这是 AES 等密码实现的基本功。
- English: Writing code whose running time never depends on secret data, so timing reveals nothing about the key. It is the standard defense against timing attacks and a basic skill for crypto implementations.
- 游戏：`sm4`
- 章节：modern

### Padding Oracle Attack（填充预言机攻击）
- 中文：服务器对「填充错误」和「认证失败」给出不同回应，这小小的差别就成了攻击者逐字节撬开密文的预言机；Vaudenay 2002 年把 Bleichenbacher 的思路用在 CBC 上，POODLE 等真实漏洞都是它的亲戚。
- English: When a server answers padding errors and authentication failures differently, that tiny difference becomes an oracle letting an attacker decrypt byte by byte. Vaudenay applied Bleichenbacher's idea to CBC in 2002; real bugs like POODLE are descendants.
- 游戏：`sm4`
- 章节：modern

### Backdoor（后门）
- 中文：藏在算法或实现里的秘密入口（相当于藏在系统里的木马），设计者能借此绕过加密；最著名的当属 2013 年被曝的 Dual_EC_DRBG——一个被写进标准里的、带后门的伪随机数生成器。
- English: A secret way to bypass a cryptosystem, hidden inside an algorithm or its implementation (the crypto equivalent of a trojan horse). The most notorious case is Dual_EC_DRBG, a standardized random generator revealed in 2013 to contain a backdoor.
- 游戏：`phishhunt`
- 章节：modern

### Phishing（钓鱼攻击）
- 中文：伪装成可信发件人，诱骗用户点击恶意链接或交出凭据——加密保护的是信息，防不住主动上钩的人。
- English: Masquerading as a trusted sender to trick users into clicking malicious links or surrendering credentials — crypto secures data, not gullible humans.
- 游戏：`phishhunt`
- 章节：modern

### Password Spraying（密码喷射）
- 中文：拿少数几个弱口令（如 123456）横扫成千上万个账号，靠撞大运绕过单账户锁定策略，与撞库（凭证填充）方向相反。
- English: Trying a handful of weak passwords (like 123456) across thousands of accounts, dodging per-account lockout policies by playing the odds—the counterpart of credential stuffing.
- 游戏：`phishhunt`
- 章节：modern

### Canary Trap（金丝雀陷阱）
- 中文：给不同人发送措辞略有差异的同一份机密，谁泄露就凭版本差异揪出内鬼，是抓泄密源的经典情报手法。
- English: Giving each suspect a slightly different version of the same secret, then identifying the leaker by which version surfaces—a classic intelligence technique for tracing leaks to their source.
- 游戏：`intel-assess`
- 章节：bletchley

### Steganalysis（隐写分析）
- 中文：识别并提取藏在普通载体里的秘密消息的学问：统计异常、位平面纹理、卡方检验——比对加粗字符或检测像素最低有效位，是隐写术的克星。
- English: The science of detecting and extracting hidden messages from innocent-looking carriers—statistical anomalies, bit-plane texture, chi-square tests; spotting bold characters or pixel-low-bit anomalies—the bane of steganography.
- 游戏：`bacon`
- 章节：bacon, modern

### Replay Attack（重放攻击）
- 中文：截获一段合法通信后原样重发，骗系统重复执行一次操作；时间戳、随机数与序列号是常见的防御手段。
- English: Intercepting a legitimate transmission and resending it unchanged to trick a system into repeating an action; timestamps, nonces and sequence numbers are common defenses.
- 游戏：`bb84`
- 章节：modern

### Shor's Algorithm（Shor 算法）
- 中文：1994 年秀尔提出的量子算法，能在多项式时间内完成大数分解与离散对数——直接瓦解 RSA、Diffie-Hellman 与 ECC 的数学根基；它的存在是后量子密码迁移的全部理由。
- English: Peter Shor's 1994 quantum algorithm factors integers and computes discrete logarithms in polynomial time — dismantling the mathematical foundations of RSA, Diffie-Hellman and ECC at a stroke; it is the entire reason for the post-quantum migration.
- 游戏：`pqc-match`
- 章节：quantum

### Grover's Algorithm（Grover 算法）
- 中文：1996 年格罗弗提出的量子搜索算法，把无结构暴力搜索从 N 步加速到约 √N 步；对策简单——密钥长度加倍即可，因此 AES-256 在量子时代依然安全。
- English: Lov Grover's 1996 quantum search algorithm speeds unstructured brute force from N steps to about √N. The countermeasure is simple — double the key length — which is why AES-256 remains secure in the quantum era.
- 游戏：`pqc-match`
- 章节：quantum

### Ninja Secret Codes（忍术隐语与暗号）
- 中文：日本戦国时代的谍报秘匿术：「乱破り」指潜入敌方破其耳目；1676 年《万川集海》辑录隐语、合符、置码等传信法门——防谍与保密并重的东方实践。
- English: Sengoku-era Japan's tradecraft: "rappa" meant infiltrating and blinding the enemy's scouts, while the Bansenshukai (1676) compiled argots, matching tallies and drop points for covert messaging — counter-intelligence and secrecy as one discipline.
- 游戏：`starflag`
- 章节：bacon

### Variant Kana Steganography（变体假名隐写）
- 中文：平安时代日本贵族女性以「女手」（变体假名）书写往来，字形因人而异、外人难识；间或以换字与略号藏意于和歌书简之中——一种长于日常文本的柔性隐写传统。
- English: Heian-era court women wrote in onna-de ("women's hand"), variant kana whose letterforms differed by hand and were opaque to outsiders; occasional character swaps and abbreviations hid meaning inside poems and letters — a soft steganography woven into everyday writing.
- 游戏：`bacon`
- 章节：arab

### Hash Collision Attack（哈希碰撞攻击）
- 中文：寻找两个不同输入产生相同哈希输出的攻击：对 n 位哈希，生日悖论使随机碰撞约需 2^(n/2) 次尝试；碰撞直接瓦解数字签名的「唯一性」——签名一份文件等于签名其碰撞副本。
- English: Finding two different inputs with the same hash output: by the birthday bound, random collisions on an n-bit hash cost about 2^(n/2) tries. A collision breaks signature uniqueness — signing one file signs it.
- 游戏：`hashlab`
- 章节：modern

### Meet-in-the-Middle（中间相遇攻击）
- 中文：从明文正向加密、从密文逆向解密，在中间比对——将暴力穷举从 2^n 降至 2^(n/2)。3DES 用两次加密仍不够安全的原因。
- English: Encrypt forward from plaintext and decrypt backward from ciphertext, meeting in the middle — reduces brute force from 2^n to 2^(n/2). Why double encryption is never enough.
- 游戏：`bombe`
- 章节：modern

### Miller-Rabin
- 中文：概率性素数测试：对随机底数检验费马小定理的强化版。误判率可控制在任意低（如 2^-128），是 RSA/SM4 密钥生成的标准步骤。
- English: A probabilistic primality test with arbitrarily low error rate (e.g. 2^-128). The standard step in RSA/SM4 key generation.
- 游戏：`rsa`
- 章节：modern

### Power Analysis（功耗分析）
- 中文：通过测量芯片加密时的功耗波动来推测密钥的侧信道攻击——简单功耗分析(SPA)直接读波形，差分功耗分析(DPA)用统计提取。
- English: Side-channel attacks measuring chip power fluctuations during encryption to deduce keys — SPA reads waveforms directly, DPA uses statistics.
- 游戏：`enigma`
- 章节：modern

### Cardan Grille（卡当格栅）
- 中文：一张挖孔卡片：透过孔洞写密文、移开后补足无害文字。收信人用同样的格栅读出隐藏信息——文艺复兴至今仍在使用的隐写骨架。
- English: A card with holes cut out: write the secret through them, fill the rest with innocent prose, and the recipient reads it through an identical grille — a steganographic skeleton still in use into WWII.
- 游戏：`spotdiff`
- 章节：bacon

### S-Box（S 盒（替换盒））
- 中文：分组密码的非线性核心部件：m 位进 n 位出的查表替换。AES 的 8→8 S 盒由乘法逆元加仿射变换构成，是整个算法唯一的非线性来源。
- English: The nonlinear heart of block ciphers: an m-bit to n-bit substitution table. AES's 8-bit S-box combines multiplicative inverses with an affine map — the algorithm's only source of nonlinearity.
- 游戏：`aes-lab`
- 章节：modern

### Key Derivation for Storage（存储口令拉伸）
- 中文：把人类口令加工成可安全用作密钥的字节的工序总称：加盐慢哈希（bcrypt/scrypt/Argon2）通过提高每次猜测的成本对抗离线爆破。
- English: Turning human passwords into key-grade bytes: salted slow hashing (bcrypt, scrypt, Argon2) prices each offline guess upward so bulk cracking becomes uneconomical.
- 游戏：`password-vault`
- 章节：modern

### Cold Boot（冷启动攻击）
- 中文：利用 DRAM「断电后仍保留数据数秒」的物理缺陷：冰冷或重插刷掉密钥后，用差分扫描导出内存中的 AES 密钥。2008 年 Princeton 团队证明甚至能从笔记本内存里恢复加密盘密钥。
- English: DRAM retains data for seconds after power-off: freeze or reinsert it, then dump the memory and extract AES keys. Princeton's 2008 team recovered disk-encryption keys out of laptops this way.
- 游戏：`enigma`
- 章节：modern

### Differential Side-Channel（差分侧信道（DPA））
- 中文：对数千条采样功率曲线做统计相关分析，把密钥逐位从设备中抠出来——不是破解算法，而是破解硬件。Kocher 2001 年发明，是智能卡芯片安全的头号劲敌。
- English: Correlating thousands of power traces to descale the key bit by bit — attacking the hardware, not the crypto. Kocher established it in 2001; it remains the biggest threat to embedded chips.
- 游戏：`side-channel-lab`
- 章节：modern

### Kasiski vs Index of Coincidence（卡西斯基检验与重合指数）
- 中文：破译多表密码的两把钥匙：卡西斯基（重复模式间距 = 密钥周期倍数的众数）与重合指数（频率统计越接近英文，周期越可能正确）。普拉特 1863 年公布，成为 19 世纪多表分析的第一定理。
- English: Breaking polyalphabetic ciphers: Kasiski's repeated-group distances reveal the period, and the index of coincidence ranks which period is right. First published in 1863, it opened the 19th century's systematic attack.
- 游戏：`vigenere`
- 章节：arab

### Banburismus（班伯里斯穆斯统计破译法）
- 中文：布莱切利园 1941 年前后用于海战 Enigma 的统计破译术：用「深度」电文对的多重字母重合率给可能的轮序打分、逐级排除，由 A. 图灵主导推广——Bombe 之外的第二台「统计机器」。
- English: The statistical sieve used at Bletchley Park from 1941 on naval Enigma: score possible rotor orders by the multiple coincidences of depth pairs, then eliminate. Driven by Alan Turing — codebreaking's second engine beside the Bombe.
- 游戏：`bombe`
- 章节：bletchley

### Depth（深度（密钥复用深度））
- 中文：同一密钥材料对多封消息的重复使用——JN-25 同版加表期内多封电文相减抵消加表，破译员从「深度对」反推明文；VENONA 的 OTP 复用是同一种深度的重演。
- English: The reuse of the same key material across many messages: within one JN-25 additive period, subtracting messages cancels the table and reveals plaintext differences; VENONA's OTP reuse was the same depth all over again.
- 游戏：`jn25`
- 章节：midway

### Fault Attack（故障注入攻击）
- 中文：用电压毛刺/时钟脉冲/激光把运算打出错，再对比错误输出反推秘密——无校验的 CRT-RSA 实现是经典靶点（1996 Bellcore 论文），也是「实现安全」与「算法安全」的分界线。
- English: Glitch the computation with voltage spikes, clock pulses or lasers, then compare faulty outputs to recover secrets — the unvalidated CRT-RSA implementation is the classic target (Bellcore 1996), the dividing line between implementation and algorithm security.
- 游戏：`side-channel-lab`
- 章节：modern

### Replay Attack（重放攻击）
- 中文：把截获的合法消息原样重发以骗取认证或支付——TOTP 的时间片、nonce 计数器与挑战-响应协议都在对抗重放：旧凭证不因合法而可以再用。
- English: Resending a captured, legitimate message to cheat authentication or payment — TOTP time slices, nonce counters and challenge-response all fight replay: being genuine does not make it spendable twice.
- 游戏：`totp-verify`
- 章节：modern

### SIGINT（信号情报（SIGINT））
- 中文：截收无线电/雷达/通信并从中提炼情报的完整链条——破译只是其中一环，流量分析与测向同为核心；VENONA、中途岛等都是 SIGINT 的经典战例。
- English: The full chain of intercepting radio, radar and communications for intelligence — codebreaking is one link; traffic analysis and direction finding are equally core. VENONA and Midway are classic SIGINT campaigns.
- 游戏：`venona`
- 章节：venona

### Key Confusion Attack（密钥混淆攻击）
- 中文：让协议双方对「同一把密钥」做出不同解释的攻击：典型如签名中的哈希截断混淆（Curve25519 指纹欺诈、TLS 早期版本）——现代设计用域分离（DOMAIN 标签）根治。
- English: Making two parties interpret the same key differently — classic cases are hash-truncation confusion in signatures and early TLS; modern designs fix it with domain separation.
- 章节：modern

### Algebraic Attack（代数攻击）
- 中文：把密码写成低次数方程组并用解方程器求解的攻击范式：流密码（非线性反馈）与某些分组密码的弱点由此暴露——设计者必须保证系统「代数次数足够高」。
- English: Model the cipher as low-degree polynomial equations and solve: stream ciphers and some block ciphers fall to it — designers must keep algebraic degree high.
- 章节：modern

### Dictionary Attack（字典攻击）
- 中文：用常见口令词典（+规则变形）逐条试签的破解方式：比纯暴力高效得多——「Salt + 慢哈希 + 口令短语」就是它的终结者。
- English: Testing candidate passwords from common dictionaries plus mutations — far more efficient than brute force. Salt + slow hash + passphrases end it.
- 游戏：`password-vault`
- 章节：modern

### Speculative Execution Side-Channel（推测执行侧信道（Spectre/Meltdown））
- 中文：CPU 为提速进行「推测执行」并提前访问缓存，其痕迹被时序/缓存信道读出——2017 年的 Spectre/Meltdown 证明：即使代码零漏洞，芯片级的绩效优化也会泄露秘密。
- English: CPUs speculatively execute and probe caches ahead of time; timing/cache side-channels read the residue. The 2017 Spectre/Meltdown class showed that chip-level optimizations leak secrets even with flawless code.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
