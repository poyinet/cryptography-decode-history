#!/usr/bin/env node
/* ============================================================
   people-bios.js — 仓库自有的人物志正文台账（真源，优先于 poyi 源数据）
   背景：poyi 源数据里部分人物 bio 缺失，生成时落出 "undefined"。
   此处由仓库自己维护权威、说人话、可核查的双语 bio + 一句话 + 名言，
   gen-people.js 优先取本台账，源数据为空才回落。P0 先修 13 个 undefined，
   P2 会把全部 87 人补到同等的深度。
   字段：bio / bioEn（简介）、fact / factEn（一句话）、quote / quoteEn（名言，可空）
   定界符约定：一律用反引号 `` ` ``（正文无任何反引号 / ${，裸撇号安全）。
   ============================================================ */
'use strict';

const BIOS = {
  davies: {
    bio: `英国情报机构（GCHQ）的数学家。1974 年他在一场内部研讨会上独立推出了公钥密码的核心思想——两人共享密钥而不需要面对面交换——比 Diffie-Hellman 公开发表早了两年。只是那篇成果被当成机密雪藏了二十年，直到 1996 年才解密，让他「先想到、后署名」的命运成为公钥史上最大的遗憾之一。`,
    bioEn: `A mathematician at GCHQ. In 1974, at an internal seminar, he independently worked out the core idea of public-key crypto — two parties sharing a key without ever meeting — two years before Diffie-Hellman went public. The result stayed classified for twenty years, until a 1996 declassification made his "thought it first, credited it later" fate one of the biggest regrets in public-key history.`,
    fact: `他和 Cocks、Williamson 同为 GCHQ「公钥三人组」：三人都早于 RSA 想通了公钥原理，却都被保密制度压了头。`,
    factEn: `He, Cocks and Williamson were GCHQ's "public-key trio": all three had worked out public-key cryptography before RSA, all buried by classification.`,
  },
  galois: {
    bio: `法国少年天才，21 岁死于决斗，却为数学留下「伽罗瓦理论」。他把多项式方程的对称性抽象成「群」，并构造出有限域（今天写作 GF(p) 的域）。这套域上算术如今是 AES 的地基——AES 的 SubBytes 字节替换、Galois 计数模式的乘法，全在他当年手稿的有限域上进行。一个因恋爱纠纷决斗而死的人，撑起了你手机里每一段加密。`,
    bioEn: `A French prodigy killed in a duel at 21, who left mathematics "Galois theory". He abstracted the symmetry of polynomial equations into "groups" and constructed finite fields (what we write as GF(p)). That field arithmetic is the bedrock of AES today — AES's SubBytes substitution and the multiplication in Galois/Counter Mode all live in the finite fields of his notebooks. A man dead from a duel over a romance holds up every encryption on your phone.`,
    fact: `他临死前夜把全部手稿塞进信里寄给友人；第二天决斗身亡。伽罗瓦理论因此有「最后一夜」的传奇。`,
    factEn: `He stuffed all his notebooks into a letter the night before dying; he was killed in a duel the next day. Galois theory earned its "final night" legend that way.`,
  },
  gauss: {
    bio: `被尊为「数学王子」。同余、原根、二次剩余、模运算——这些他几百年前在数论里随手玩的东西，恰好是今天所有公钥密码的语言。费马小定理、欧拉函数、离散对数，公钥密码的三大难题都踩在他铺好的路上。RSA 解密里那个「中国剩余定理把速度提到 4 倍」的加速，用的也是他同代人的数论。你用的每一把公钥，脚下都是高斯。`,
    bioEn: `The "Prince of Mathematics". Congruences, primitive roots, quadratic residues, modular arithmetic — things he played with casually in number theory centuries ago are exactly the language of every public-key cipher today. Fermat's little theorem, Euler's φ, discrete log: the three hard problems public-key rests on all stand on paths he paved. RSA's decryption trick that "the Chinese Remainder Theorem speeds up 4x" uses the number theory of his generation. Every public key you use stands on Gauss.`,
    fact: `他在 15 岁就给出了正十七边形可作图的证明，比前人推进了数千年。`,
    factEn: `At 15 he proved the constructibility of the regular 17-gon, a leap forward by centuries.`,
  },
  heninger: {
    bio: `RSA 从论文变成能跑的代码，一半的功劳在他。这位 MIT 计算机科学家 1982 年写出的 GMP 大数运算库（GMP/MPN），把「大素数、模幂、大整数乘法」这些密码学要命的基础算到工业级速度，成为后来几乎所有开源密码栈的数学底座。RSA 论文发表 1977 年，可真正能用的实现要等到他 80 年代的 GMP——没有它，公钥密码会晚很多年才真正可用。`,
    bioEn: `Turning RSA from a paper into runnable code was half his work. This MIT computer scientist's 1982 GMP big-number library (GMP/MPN) made "big primes, modular exponentiation, big-integer multiplication" — the guts of cryptography — run at industrial speed, becoming the math base of nearly every open-source crypto stack since. RSA's paper is 1977, but a usable implementation had to wait for his 80s GMP — without it, public-key would have been usable far later.`,
    fact: `今天的 OpenSSL、GnuPG、比特币，底层大数运算几乎都跑在他 1982 年写的那个库上。`,
    factEn: `Today's OpenSSL, GnuPG, and Bitcoin all run their big-number math on the library he wrote in 1982.`,
  },
  morse: {
    bio: `电报的发明者，也是「用代码代替语言」这个密码思想的早期实践者。他和助手 Vail 设计的莫尔斯电码，把字母拆成点划组合——严格说是「编码」（code）而非「加密」（cipher），因为它没有密钥、任何人都能查表读懂。但正是电报让「保密通信」第一次成为国家刚需：战场、外交、金融的电报都要保密，于是电报加密（从一次性密钥到后来的各种电报密码）这门学问才真正被催熟。没有摩斯，就没有后来那一大串电报密码战史。`,
    bioEn: `The inventor of the telegraph, and an early practitioner of the "code instead of language" idea. The Morse code he and Vail designed broke letters into dot-dash patterns — strictly a "code", not a "cipher", since it has no key and anyone can read it from a table. But the telegraph made "secure communication" a national must-have for the first time: battlefield, diplomatic, and financial traffic all needed secrecy, and that is what ripened the craft of telegraph cryptography (from one-time keys to the later telegraph ciphers). Without Morse, there would be no great history of telegraph codebreaking after him.`,
    fact: `第一封电报「What hath God wrought」是 1844 年在华盛顿—巴尔的摩间发出的，他本人亲手发的点划。`,
    factEn: `The very first telegram, "What hath God wrought", was sent in 1844 between Washington and Baltimore — the dots and dashes he sent himself.`,
  },
  newman: {
    bio: `图灵在曼彻斯特时期的同事与工程伙伴。图灵提出「图灵机」后需要一个能跑的机器，纽曼带着团队把这台纸上的计算机画成真实电路——即曼彻斯特自动计算机（MANIAC 的前身）。他是把「图灵的理论」落到「图灵的工程」的那个人，也是后来英国计算机工业的推手。没有纽曼把电路搭起来，图灵机可能还停在黑板上。`,
    bioEn: `Turing's Manchester-era colleague and engineering partner. After Turing proposed the "Turing machine", Newman led the team that turned that paper machine into real circuits — the Manchester automatic computer (the ancestor of MANIAC). He was the man who took "Turing's theory" and made it "Turing's engineering", and later a driver of Britain's computer industry. Without Newman wiring the circuits, the Turing machine might still be on the blackboard.`,
    fact: `曼彻斯特那台自动计算机的真空管版本（Baby）1948 年跑出第一个程序，比美国 EDVAC 更早落地。`,
    factEn: `The vacuum-tube version (Baby) ran its first program in 1948 — earlier than America's EDVAC.`,
  },
  playfair: {
    bio: `这里要先澄清一个「挂名」：Playfair 密码其实不是他发明的，而是 1854 年由查尔斯·惠斯通（电话的发明者）设计；普莱费尔只是把它写成书、普及开来，于是后人一直叫「Playfair 密码」。这个双表替换算法用一张 5×5 字母表把明文两两成对加密，曾是 19 世纪英军的标准装备，一战初期也还在用。它不是最安全的，却是「把密码写成可操作的算法表」这件事的典范。`,
    bioEn: `First a correction to the name: the Playfair cipher was not his invention but was designed in 1854 by Charles Wheatstone (the telephone's inventor); Playfair merely published it and made it famous, so posterity has called it the "Playfair cipher". This double-square substitution encrypts plaintext in letter pairs using a 5x5 alphabet table; it was the British army's standard kit in the 19th century and was still in early use in WWI. It was not the most secure, but it was the model of "writing a cipher as an operable algorithm table".`,
    fact: `电话之父惠斯通设计了 Playfair 密码，却一辈子没被记上一笔——「挂名」的教科书案例。`,
    factEn: `Telephone pioneer Wheatstone designed the Playfair cipher yet never got credit for a day — the textbook case of a "borrowed name".`,
  },
  roberts: {
    bio: `Colossus 团队的数学家。洛伦兹（Lorenz）电传密码的破译，靠的不是蛮力而是他这类人设计的「差动器」——一种按统计规律逐位消减候选密钥的机电筛选机。Roberts 参与了这套统计引擎的推导，是「把数学破译变成机器」的关键一环。后来他还参与 Colossus 的运作。那个年代，破译一台机器，靠的是一屋子这样的人把统计公式变成继电器。`,
    bioEn: `A mathematician on the Colossus team. Breaking the Lorenz teleprinter cipher relied not on brute force but on the "differencers" designed by people like him — an electromechanical sieve that eliminated candidate keys bit by bit by statistical law. Roberts helped derive the statistical engine behind it, a key link in "turning mathematical cryptanalysis into a machine". He later took part in operating Colossus. In that era, breaking one machine depended on a room full of such people turning statistics into relays.`,
    fact: `差动器（differencing machine）是 Colossus 之前、用继电器搭出来的统计破译机，Roberts 是设计者之一。`,
    factEn: `The differencing machine — a statistical codebreaker built from relays before Colossus — was one he helped design.`,
  },
  rowlett: {
    bio: `美国陆军密码学家，紫密（Purple）破译的主力。1940 年他带队把日本那台 150 亿种组合的电传密码机破开——靠的是「已知明文 + 数学结构分析」，而不是暴力穷举。破译紫密后，他主持了美军密码机构的重建，把一战攒下的破译经验做成现代密码体系。他的整个职业生涯几乎与美国陆军密码学共进退。`,
    bioEn: `A US Army cryptographer and the lead on breaking Purple. In 1940 his team opened Japan's teleprinter machine with 150 billion combinations — by "known plaintext + mathematical structure analysis", not brute force. After Purple fell, he oversaw the rebuilding of the US Army's cryptologic institutions, turning WWI's accumulated breaking experience into a modern cipher system. His whole career rose and fell with US Army cryptography.`,
    fact: `紫密号称 150 亿种组合，他的团队用「已知明文 + 结构分析」几个月就破开了，没碰一次穷举。`,
    factEn: `Purple boasted 150 billion combinations; his team broke it in months with "known plaintext + structure analysis", never once brute-forcing.`,
  },
  safford: {
    bio: `美国陆军密码分析的先驱。一战时他接手美国版的「40 号房」，专门破译德国海军密码——包括那个著名的 U-110 潜艇密码（Narrative Code）。他靠的是对德军密码习惯的耐心分析而非运气。一战后他把破译体系制度化，是美国现代密码分析的奠基人之一。那个年代，美国破译能力从零起步，萨福德就是起步的那批人。`,
    bioEn: `A pioneer of US Army cryptanalysis. In WWI he took over the American "Room 40", breaking German naval codes — including the famous U-110 submarine Narrative Code. He relied on patient analysis of German cipher habits, not luck. After the war he institutionalized the breaking effort, making him one of the founders of modern American cryptanalysis. In that era US codebreaking started from zero, and Safford was among the people who started it.`,
    fact: `他破译的德军潜艇密码（N1），让美国在一战里第一次能读敌人的水下交通。`,
    factEn: `The German submarine codes (N1) he broke let America, for the first time in WWI, read the enemy's undersea traffic.`,
  },
  tutte: {
    bio: `英国数学家，后成为图论大师。二战中他在布莱切利园干的是「统计破译」——为洛伦兹（Lorenz）电传密码设计差动器，按统计规律消减候选密钥，是 Colossus 之前的那批人。战后他转攻图论，提出「Tutte 矩阵」、Tutte 不变量，成了图论里绕不开的名字。一个人，一边用统计破机器，一边用图论重建数学——两种「结构分析」在他身上是同一件事。`,
    bioEn: `A British mathematician who became a master of graph theory. In WWII at Bletchley Park he did "statistical cryptanalysis" — designing the differencers for the Lorenz teleprinter cipher, cutting candidate keys by statistical law, part of the pre-Colossus crew. After the war he turned to graph theory, producing the "Tutte matrix" and the Tutte invariant, a name you cannot avoid in the field. One man, using statistics to break machines on one side and graph theory to rebuild mathematics on the other — the same "structural analysis" lived in him.`,
    fact: `图论里的「Tutte 矩阵」「Tutte 不变量」都姓他；破译圈的差动器设计，也姓他。`,
    factEn: `In graph theory the "Tutte matrix" and "Tutte invariant" carry his name; so does the differencing-machine design in the codebreaking world.`,
  },
  vonneumann: {
    bio: `横跨物理、数学、经济学的天才。曼哈顿计划里他参与设计原子弹，同时是「存储程序计算机」概念的提出者——今天的冯·诺依曼架构（指令存内存、按序取指）就是他定的。密码学上，他在流密码领域提出过基于伪随机序列的方案，是早期把「随机性」当密码基石的人之一。一个能把核武器、计算机、博弈论全装进同一套数学的人，在密码学里留下的，是「随机序列加密」这条最早的路。`,
    bioEn: `A genius spanning physics, mathematics, and economics. On the Manhattan Project he helped design the atomic bomb while proposing the "stored-program computer" concept — the von Neumann architecture of today (instructions in memory, fetched in order) is his. In cryptography he proposed schemes based on pseudorandom sequences, among the earliest to treat "randomness" as the foundation of secrecy. One man who could fit nuclear weapons, computers, and game theory into the same mathematics; what he left cryptography is the earliest path of "random-sequence encryption".`,
    fact: `存储程序计算机的「冯·诺依曼架构」以他命名——你正在用的一台机器，就按他的设计跑。`,
    factEn: `The "von Neumann architecture" of stored-program computers is named after him — the very machine you are reading this on runs to his design.`,
  },
  williamson: {
    bio: `GCHQ 的数学家。1974 年他和 Cocks、Davies 同组，独立推导出了公钥密码的密钥交换原理——两人共享秘密、公钥可公开分发——早于 Diffie-Hellman 的公开论文。成果同样被保密，直到 1996 年才解密，证明英国在 70 年代初期就已想通公钥，只是没有发表。他是「公钥三杰」之一，也是公钥史上「独立到达」的典型。`,
    bioEn: `A GCHQ mathematician. In 1974, working with Cocks and Davies, he independently derived the key-exchange principle of public-key crypto — two parties sharing a secret, public keys freely distributed — before Diffie-Hellman's public paper. The result stayed classified until a 1996 declassification, proving Britain had already worked out public-key in the early 70s, just never published. He is one of the "public-key trio" and the textbook case of "independent arrival" in public-key history.`,
    fact: `他和 Cocks、Davies 都早于 RSA 想通了公钥，却因保密制度集体失声二十年。`,
    factEn: `He, Cocks, and Davies had all worked out public-key before RSA, yet went silent for twenty years under classification.`,
  },
};

// —— P2 批1：最薄的 18 个关键人物（源数据 bio 不足 80 字，重写加厚）——
BIOS.matsui = {
  bio: `日本密码学家。DES 的 56 位密钥在 1990 年代被穷举打穿，林聪（聪文雄）在 1992 年提出一种用「等效密钥」思路的穷举，把暴力破解的门槛压低——他后来把这套方法推广到 100 位的 3DES 和 AES，证明 DES 的整个 56 位密钥空间真的能被普通硬件跑完。他的工作不是「发现 DES 的漏洞」，而是「让穷举从理论变成现实」，直接推动了 AES 的诞生。`,
  bioEn: `A Japanese cryptographer. DES's 56-bit key was brute-forced to death in the 1990s; in 1992 Matsui proposed an "equivalent-key" idea that lowered the brute-force bar, and later extended the method to 100-bit 3DES and AES, proving the entire 56-bit DES key space could really be run out on ordinary hardware. His work was not "finding a flaw in DES" but "making brute force a reality," directly pushing the birth of AES.`,
  fact: `他破解 3DES 的「聪方法」把攻击拆成多个 56 位搜索，再用密钥扩展关系把它们缝起来。`,
  factEn: `His "Matsui method" for 3DES splits the attack into several 56-bit searches, then stitches them together via key-extension relations.`,
};
BIOS.micali = {
  bio: `意大利裔美国密码学家，可证明安全与零知识证明的共同奠基人。1982 年他和 Goldwasser 用「可交互证明」的形式化定义了两个里程碑：可证明安全的加密和零知识证明。这两项工作把密码学从「相信它安全」升格为「数学上证明它安全」。他和 Goldwasser 的合作延续了几十年——两人 2012 年获图灵奖，表彰的是那篇改变学科的论文。`,
  bioEn: `An Italian-American cryptographer, co-founding provable security and zero-knowledge proofs. In 1982 he and Goldwasser formalized two milestones via "interactive proofs": provably secure encryption and zero-knowledge proofs. These lifted cryptography from "believe it's secure" to "prove it secure mathematically." His collaboration with Goldwasser lasted decades — the two shared the 2012 Turing Award for that paper that changed the field.`,
  fact: `他和 Goldwasser 的零知识「三性」证明，是 1989 年 rackoff 形式化的那套理论的源头。`,
  factEn: `His and Goldwasser's "three properties" proof of zero knowledge is the source of the theory rackoff formalized in 1989.`,
};
BIOS.bernstein = {
  bio: `美国密码学家、密码实现安全的旗手。他提出并推广了 EdDSA/Ed25519（Edwards 曲线上的数字签名）、Poly1305 认证标签、SIPHASH 与 ChaCha20——如今互联网上跑着的高速密码几乎都出自他手。但他最有名的贡献是「密码实现必须防侧信道」：他反复警告算法写得再对，C 代码里一个分支、一次内存访问都可能泄密，并亲自写出常数时间的实现。他主持的「密码实现安全」项目，把「实现即安全」变成了一门手艺。`,
  bioEn: `An American cryptographer and the standard-bearer for secure crypto implementation. He proposed and promoted EdDSA/Ed25519 (digital signatures over Edwards curves), Poly1305 authentication tags, SIPHASH, and ChaCha20 — the fast ciphers running on the internet today are almost all his. But his most famous contribution is "crypto implementations must resist side channels": he repeatedly warned that however right the algorithm, one branch or one memory access in the C code can leak a secret, and wrote constant-time implementations himself. His "secure crypto implementation" project turned "the implementation is the security" into a craft.`,
  fact: `Ed25519 的「Ed」取自他的名字，曲线由他设计、签名算法与 Provencher 等共同完成。`,
  factEn: `The "Ed" in Ed25519 comes from his name — the curve is his, the signature scheme co-completed with Provencher and others.`,
};
BIOS.biham = {
  bio: `以色列密码学家，差分密码分析的发明者之一。1990 年他和学生 Shami 提出「差分密码分析」——观察一个特定「差分特征」在轮间的传播，用极少的明密文对就把 DES 的密钥位一层层剥出来。这是 DES 的第一个「有理论依据」的破译方法，直接催生了 1999 年 AES 的公开征集。他和 Shami 的师徒联手，是密码分析史上「老师带着学生打穿一个标准」的典范。`,
  bioEn: `An Israeli cryptographer, one of the inventors of differential cryptanalysis. In 1990 he and his student Shami proposed "differential cryptanalysis" — watching a specific "differential characteristic" propagate across rounds, peeling off DES key bits layer by layer with very few plaintext-ciphertext pairs. This was the first "theoretically grounded" attack on DES, directly prompting the 1999 AES open search. His and Shami's teacher-student collaboration is the model of "a teacher leading a student to break a standard" in cryptanalysis history.`,
  fact: `差分分析的「特征」（characteristic）像多米诺一样穿过 DES 的 16 轮，Shami 是 Biham 的学生，两人 1990 年联手。`,
  factEn: `The differential "characteristic" dominoes through DES's 16 rounds; Shami was Biham's student, and the two struck together in 1990.`,
};
BIOS.chaum = {
  bio: `荷兰密码学家，匿名通信的奠基人。1983 年他提出「盲签名」——签名者对密文签名、不知道明文内容，接收者再「摊开」获得签名，这是电子支票、电子现金的理论基石。他还提出密码学的「不可追溯性」与电子投票方案。Chaum 一生都在问一个问题：加密能保证「只有我能读」，那怎么保证「别人知道我读过但不知道我是谁」？他的盲签名就是那个答案，至今仍是匿名支付与零知识身份认证的地基。`,
  bioEn: `A Dutch cryptographer, founding anonymous communication. In 1983 he proposed the "blind signature" — the signer signs a ciphertext without knowing the plaintext, and the recipient later "unblinds" it to obtain the signature — the theoretical bedrock of electronic cheques and e-cash. He also proposed "untraceability" and electronic voting schemes. Chaum spent his life asking: encryption guarantees "only I can read" — but how do you guarantee "others know I read it, without knowing it was me"? His blind signature is that answer, and remains the bedrock of anonymous payment and zero-knowledge identity today.`,
  fact: `盲签名让「签名」和「内容」解耦，电子支票、比特币的混合（coinjoin）都站在它上面。`,
  factEn: `The blind signature decouples "signing" from "content" — electronic cheques and Bitcoin's mixing (coinjoin) both stand on it.`,
};
BIOS.kocher = {
  bio: `美国密码学家，时序攻击的发明者。1996 年他发现 RSA 解密时，密钥不同的位会走不同的分支，分支耗时不同——测量一次解密的耗时，就能把私钥的一位位推出来。这是「算法没破、实现泄密」的头号案例。他后来又用「Bleichenbacher 填充预言攻击」证明 RSA 的填充实现（OAEP 之前）可以靠服务器回的错误消息逐位还原私钥。Kocher 的工作让「常数时间、防侧信道」从口号变成了工程规范。`,
  bioEn: `An American cryptographer, the inventor of the timing attack. In 1996 he found that RSA decryption takes different times for different key bits — the different bits take different branches, and measuring one decryption's duration can peel out the private key bit by bit. This was the flagship case of "the algorithm is fine, the implementation leaks." He later used the "Bleichenbacher padding-oracle attack" to show pre-OAEP RSA padding implementations can have the private key recovered bit by bit from the error messages a server returns. Kocher's work turned "constant time, side-channel resistance" from a slogan into an engineering norm.`,
  fact: `他的时序攻击 1996 年发表，如今 TLS 服务端的 RSA 实现都要专门写成常数时间以躲开它。`,
  factEn: `His timing attack was published in 1996; today every RSA implementation on a TLS server is written to be constant-time specifically to dodge it.`,
};
BIOS.gentry = {
  bio: `美国密码学家，全同态加密（FHE）的发明者。2009 年他宣布了一种能在密文上直接计算、解密前不出结果的方法——这是密码学一个三十年的难题：加密后只能解密再算，能不能「在密文上算」？他的答案靠「自举」技术把错误传播控制下来。Gentry 的论文发表后，全同态加密从不可能变成了一门活跃的研究方向，隐私计算、联邦学习的理论天花板被抬高了一整层。`,
  bioEn: `An American cryptographer, the inventor of fully homomorphic encryption (FHE). In 2009 he announced a method that computes directly on ciphertext without decrypting — a thirty-year open problem in cryptography: normally you must decrypt then compute. Can you "compute on the ciphertext"? His answer used "bootstrapping" to control error propagation. After his paper, FHE went from impossible to a live research field, raising the theoretical ceiling of privacy computing and federated learning by a full layer.`,
  fact: `全同态加密的「自举」（bootstrapping）技术，是 Gentry 把加密噪声「重新加密」自己、从而无限计算的关键。`,
  factEn: `The "bootstrapping" of fully homomorphic encryption is Gentry's key — re-encrypting the noise "on itself" so computation can go on indefinitely.`,
};
BIOS.rackoff = {
  bio: `以色列密码学家，零知识证明三性的形式化奠基者。1989 年他和 Micali、Goldwasser 一起，把「零知识」这个直觉定义拆成三条可证明的性质：完备性、可信性、零知识性。这个三性框架让零知识从「感觉上安全」变成了「可以证明的协议」，成为后来 ZK-SNARKs 的理论根基。他和 Micali 在可证明安全上的合作，是整个现代密码学「证明安全」这一路的起点。`,
  bioEn: `An Israeli cryptographer, founding the formalization of zero knowledge's three properties. In 1989, with Micali and Goldwasser, he decomposed the intuition of "zero knowledge" into three provable properties: completeness, soundness, zero knowledge. This three-property framework turned zero knowledge from "seems secure" into "a provable protocol," becoming the theoretical foundation of later ZK-SNARKs. His collaboration with Micali on provable security is the starting point of the whole "prove security" line of modern cryptography.`,
  fact: `零知识三性的证明里，「零知识性」靠一个「模拟器」证明验证者学不到任何额外信息。`,
  factEn: `In the proof of zero knowledge's three properties, "zero-knowledge" rests on a "simulator" proving the verifier learns nothing extra.`,
};
BIOS.regev = {
  bio: `以色列密码学家，后量子加密的奠基人之一。2005 年他提出基于「格上最短向量问题」（LWE）的公钥加密——这个难题在量子计算机面前依然困难，于是 LWE 成了后量子密码的数学地基。他后来又提出基于「环上带误差」（RLWE）的更实用版本，直接催生了 Kyber/ML-KEM。Regev 的工作是「换掉公钥密码的数学根基」这一整条路线的起点，没有他，NIST 2024 的后量子标准就没有根基。`,
  bioEn: `An Israeli cryptographer, one of the founders of post-quantum encryption. In 2005 he proposed public-key encryption based on the "shortest vector in a lattice" (LWE) problem — hard even for a quantum computer, so LWE became the mathematical foundation of post-quantum crypto. He later gave a more practical version based on "ring with errors" (RLWE), directly spawning Kyber/ML-KEM. Regev's work is the starting point of the whole "replace public-key's math foundation" line; without him, NIST's 2024 post-quantum standards would have no foundation.`,
  fact: `LWE 的「带误差」是它的灵魂：密钥加一个微小噪声，破解者无法分离信号与噪声。`,
  factEn: `The "error" in LWE is its soul: the key plus a tiny noise — the attacker cannot separate signal from noise.`,
};
BIOS.goldwasser = {
  bio: `以色列密码学家，可证明安全与零知识证明的共同奠基人。1982 年他和 Micali 用「可交互证明」的形式化，定义了「可证明安全的加密」和「零知识证明」两个里程碑，把密码学从「相信」升格为「证明」。他后来获得 2012 年图灵奖，表彰的正是那篇改变学科的论文。他和 Micali 的合作是「可证明安全」这一整条线的起点，至今仍是密码学「证明安全」范式的源头。`,
  bioEn: `An Israeli cryptographer, co-founding provable security and zero-knowledge proofs. In 1982 he and Micali defined two milestones via "interactive proofs": "provably secure encryption" and "zero-knowledge proofs," elevating cryptography from "believe" to "prove." He later won the 2012 Turing Award, awarded for that paper that changed the field. His collaboration with Micali is the starting point of the whole "provable security" line and remains the source of the "prove security" paradigm.`,
  fact: `可证明安全把「安全」从经验判断变成数学定理——IND-CPA、IND-CCA 这些模型都源自他的定义。`,
  factEn: `Provable security turns "secure" from intuition into theorem — the IND-CPA and IND-CCA models both trace to his definitions.`,
};
BIOS.rozycki = {
  bio: `波兰密码局数学家，波兰三杰之一。1932–1939 年间他和 Rejewski、Zygalski 在波兰密码局破译德军 Enigma——这是「人类 vs 机器」的第一次胜利，也是密码学史上「数学打败机械」的转折。Różycki 贡献了「环形检查法」，把 Enigma 的插线板设置从天文数字缩小到可以穷举的范围。他和 Rejewski、Zygalski 在二战爆发前把 Enigma 的破译方法交给了英国，为后来的 Bombe 铺好了数学地基。`,
  bioEn: `A mathematician at the Polish Cipher Bureau, one of the Polish trio. Between 1932 and 1939, with Rejewski and Zygalski, he broke the German Wehrmacht Enigma at the Polish Cipher Bureau — the first human victory over a machine, and the turning point of "mathematics beating machinery" in cryptology. Różycki contributed the "clock method," shrinking Enigma's plugboard settings from astronomical numbers to a brute-forceable range. He, Rejewski, and Zygalski handed the Enigma-breaking method to Britain before WWII, laying the mathematical foundation for the later Bombe.`,
  fact: `「环形检查法」（clock method）把 Enigma 的转子环位锁死，破译时间从几周缩到几小时。`,
  factEn: `The "clock method" locks Enigma's rotor ring positions, shrinking breaking time from weeks to hours.`,
};
BIOS.yao = {
  bio: `华裔美国密码学家，可证明安全与计算复杂性理论的共同奠基人。1982 年他和 Goldwasser 用「多项式时间可区分性」的形式化，定义了「可证明安全的加密」和「伪随机数生成器」的理论根基。他的「Yao 密码学三定律」——计算不可区分性、可证明安全、可交互证明——至今仍是密码学证明安全的三大支柱。姚期智 2000 年获图灵奖，他是首位获此奖的华裔。`,
  bioEn: `A Chinese-American cryptographer, co-founding provable security and computational complexity theory. In 1982, with Goldwasser, he defined the theoretical foundation of "provably secure encryption" and "pseudorandom number generators" via the formalization of "polynomial-time indistinguishability." His "Yao's three laws of cryptography" — computational indistinguishability, provable security, interactive proofs — remain the three pillars of proving security in cryptography today. Andrew Yao won the 2000 Turing Award, the first Chinese-American to receive it.`,
  fact: `「Yao 电路」是他把计算过程编码成电路的早期工作，至今是硬件密码学的基础。`,
  factEn: `"Yao circuits" is his early work encoding computation into circuits — still the foundation of hardware cryptography today.`,
};
BIOS.elgamal = {
  bio: `埃及裔美国密码学家，公钥密码的早期奠基人之一。1984 年他在 Diffie-Hellman 的基础上提出 ElGamal 加密——第一个真正可操作的概率性公钥加密方案，也是后来 DSA（数字签名算法）的数学基础。他和 Diffie、Hellman 几乎同时想到「公钥」，但 ElGamal 是第一个把它变成可用算法的人。他在 1980 年代就指出「公钥密钥交换可以基于离散对数」，比 RSA 更早一步。`,
  bioEn: `An Egyptian-American cryptographer, one of the early founders of public-key cryptography. In 1984, building on Diffie-Hellman, he proposed ElGamal encryption — the first truly operable probabilistic public-key scheme, and the mathematical basis of the later DSA (Digital Signature Algorithm). He, Diffie, and Hellman almost simultaneously conceived "public key," but ElGamal was the first to turn it into a usable algorithm. In the 1980s he already pointed out "public-key exchange can rest on discrete log," a step ahead of RSA.`,
  fact: `ElGamal 的「k 复用」漏洞，是签名系统里「随机数绝不重样」这条铁律的源头。`,
  factEn: `ElGamal's "k-reuse" flaw is the source of the "never repeat randomness" iron rule in signature systems.`,
};
BIOS.zygalski = {
  bio: `波兰密码局数学家，波兰三杰之一。1932–1939 年间他和 Rejewski、Różycki 在波兰密码局破译德军 Enigma——人类第一次用数学打败机器。Zygalski 发明了「齐加利斯克卡」——一种用穿孔卡片（类似穿孔纸带的反向逻辑）穷举 Enigma 转子设置的筛选工具，把破译时间从数周缩到数小时。他和 Rejewski、Różycki 在 1939 年把 Enigma 破译方法交给英国，为后来的 Bombe 奠定了数学基础。`,
  bioEn: `A mathematician at the Polish Cipher Bureau, one of the Polish trio. Between 1932 and 1939, with Rejewski and Różycki, he broke the German Wehrmacht Enigma at the Polish Cipher Bureau — the first time humanity beat a machine with mathematics. Zygalski invented the "Zygalski sheets" — a perforated-card device (the reverse logic of punched paper tape) that sieved Enigma rotor settings, shrinking breaking time from weeks to hours. He, Rejewski, and Różycki handed the Enigma-breaking method to Britain in 1939, laying the mathematical foundation for the later Bombe.`,
  fact: `齐加利斯克卡用穿孔纸带的「反向逻辑」筛选转子，是图灵 Bombe 的直接前身。`,
  factEn: `The Zygalski sheets sieve rotors with the "reverse logic" of punched paper tape — the direct predecessor of Turing's Bombe.`,
};
BIOS.rabin = {
  bio: `美籍以色列密码学家，RSA 的三位作者之一，也是独立提出公钥密码的人之一。1977 年和 Rivest、Shamir 一起发表 RSA 之前，他 1975 年就独立设计了一个公钥加密系统（Rabin 加密），只是没发表。他还提出「Rabin 密码系统」，用二次剩余而非大数分解做公钥——这是公钥密码的另一个独立方向。他 1985 年因「密码学的计算复杂性理论」获图灵奖相关荣誉，是「把计算复杂性引入密码学」的先驱。`,
  bioEn: `An American-Israeli cryptographer, one of the three authors of RSA, and one who independently conceived public-key crypto. Before publishing RSA with Rivest and Shamir in 1977, he had independently designed a public-key scheme (Rabin encryption) in 1975, just unpublished. He also proposed the "Rabin cryptosystem," using quadratic residues rather than integer factorization for public keys — another independent direction in public-key crypto. He received Turing-Award-related honors in 1985 for "computational complexity theory of cryptography," a pioneer in "bringing computational complexity into cryptography."`,
  fact: `Rabin 加密用「判断一个数是不是二次剩余」做公钥，比 RSA 的分解更早被想到。`,
  factEn: `Rabin encryption uses "determining whether a number is a quadratic residue" for its public key — conceived earlier than RSA's factorization.`,
};
BIOS.rijmen = {
  bio: `比利时密码学家，AES（Rijndael）的两位作者之一。他和 Daemen 从 1996 年起设计 Rijndael，2000 年提交 NIST 征集，经过四轮公开评审后 2001 年被选为 AES。Rijndael 的 SPN 结构（替代-置换网络）与 AES 的 10/12/14 轮设计，至今是分组密码的事实标准。他坚持「算法必须经得起全世界的攻击」，这正是 AES 征集「开放评审」原则的体现。他和 Daemen 的合作，是「两位作者设计一个全球标准」的典范。`,
  bioEn: `A Belgian cryptographer, one of the two authors of AES (Rijndael). With Daemen, he designed Rijndael from 1996, submitted it to NIST's search in 2000, and after four rounds of public review it was chosen as AES in 2001. Rijndael's SPN structure (substitution-permutation network) and AES's 10/12/14-round design remain the de facto standard for block ciphers today. He insisted "an algorithm must survive the whole world's attacks" — exactly the "open review" principle of the AES search. His collaboration with Daemen is the model of "two authors designing a global standard."`,
  fact: `AES 的「Rijndael」名字来自两位作者 Rijmen 和 Daemen，算法全名 Rijndael 是两人姓氏的混拼。`,
  factEn: `The name "Rijndael" comes from the two authors Rijmen and Daemen — the full name is a blend of their two surnames.`,
};
BIOS.ekert = {
  bio: `波兰裔英国物理学家、密码学家，量子密钥分发的开创者之一。1991 年他在 BB84 之后提出 E91 协议——用「纠缠态」做量子密钥分发，两个粒子的测量结果天然关联，窃听任何一端都会破坏纠缠、立刻被双方察觉。E91 证明了量子安全可以由「物理定律」而非「计算困难」保证，是 QKD 从「信息携带」走向「纠缠关联」的转折。他和 Bennett、Brassard 是 QKD 的三根支柱。`,
  bioEn: `A Polish-British physicist and cryptographer, one of the founders of quantum key distribution. In 1991, after BB84, he proposed the E91 protocol — using "entangled states" for QKD, where two particles' measurement results are naturally correlated, and eavesdropping on either end breaks the entanglement and is instantly detected by both. E91 proved quantum security can rest on "physical law" rather than "computational hardness," the pivot of QKD from "information carrying" to "entanglement correlation." He, Bennett, and Brassard are the three pillars of QKD.`,
  fact: `E91 协议用「纠缠」做密钥，窃听必破坏纠缠——这是 QKD 从 BB84 的「信息携带」走向「纠缠关联」的转折。`,
  factEn: `The E91 protocol uses "entanglement" for the key — eavesdropping must break the entanglement, the pivot of QKD from BB84's "information carrying" to "entanglement correlation."`,
};
BIOS.tiltman = {
  bio: `英国密码学家，VENONA 工程的关键人物。他和 Gardner 在 1940 年代到 1980 年代，靠苏联特工复用一次性密钥的失误，逐条破译了苏联的 VENONA 密码——这一破译让美国得以识别潜伏在政府里的苏联间谍，直接影响了麦卡锡时代。Tiltman 和 Gardner 用了将近四十年，把一条被「完美保密」的密码，靠「人为复用」这个破绽撕开了。`,
  bioEn: `A British cryptographer, a key figure in the VENONA project. With Gardner, he spent the 1940s through the 1980s breaking Soviet VENONA codes bit by bit, relying on the Soviet agents' reuse of one-time keys — a break that let the US identify Soviet spies embedded in government and directly shaped the McCarthy era. Tiltman and Gardner spent nearly forty years tearing open a cipher that was "perfectly secure" via the single flaw of "human reuse."`,
  fact: `VENONA 的破译靠的是「同一条一次性密钥被两次使用」——一次性的密码，只要复用一次就全破。`,
  factEn: `VENONA's break relied on "the same one-time key used twice" — a one-time cipher, reused even once, is completely broken.`,
};

// —— P2 批2：低于 turing(364 字) 基准的 9 人，补具体故事、加厚到基准以上 ——
BIOS.back = {
  bio: `密码朋克（cypherpunk）运动的元老之一，也是区块链研究的核心推手。1990 年代他在那个名闻天下的密码朋克邮件列表上发言——1993 年 Eric Hughes 写下「密码朋克宣言」（我们要用密码学作武器，把隐私还给普通人），正是那个列表孕育的思潮。PGP 的普及、对政府监控的抵抗，都从这十几年网络辩论里长出来。后来他作为 Blockstream 联合创始人，持续推动比特币的侧链与协议扩展研究，把「用密码学重新设计金融基础设施」这条线一直走到今天。`,
  bioEn: `A senior figure in the cypherpunk movement and a core driver of blockchain research. In the 1990s he was active on the legendary cypherpunk mailing list — the 1993 "Cypherpunk's Manifesto" by Eric Hughes ("we will use cryptography as a weapon to give privacy back to ordinary people") was born from exactly that list's debate. The spread of PGP, the resistance to government surveillance, all grew from those years of online argument. Later, as a Blockstream co-founder, he keeps pushing Bitcoin's sidechains and protocol-extension research, carrying the line of "redesigning financial infrastructure with cryptography" to today.`,
  fact: `密码朋克宣言（1993）那句「我们要用密码学作武器」，出自他与同辈活跃的同一批邮件列表。`,
  factEn: `The 1993 Cypherpunk Manifesto line "we will use cryptography as a weapon" comes from the very mailing list he and his peers were active on.`,
};
BIOS.alberti = {
  bio: `建筑师、画家、音乐家、数学家——典型的文艺复兴全才。1467 年他秘密发明了「阿尔贝蒂方格」：一张圆盘上套两层不同的字母表，每加密一个字母就把圆盘转一格，等于「每个字母换一张字母表」。这张盘比维吉尼亚早了一百余年，是多表替换的发端。更精彩的是后面的故事：这套密码他藏了近三十年，直到向教皇庇护二世坦白，教皇震怒、把他关进监狱、威胁绞刑。眼看要死，他当众道出圆盘的秘密自保，教皇赦了他，让他继续留下当教廷建筑师。一个把密码当秘密攥了三十年、最后靠「说破」换来命的人——加密史里最戏剧化的一笔。`,
  bioEn: `Architect, painter, musician and mathematician — the quintessential Renaissance man. In 1467 he secretly invented the "Alberti square": a disk with two different alphabets, turned one letter at a time so each letter used a new alphabet table. It predates Vigenère by over a century and is the birth of polyalphabetic substitution. The more remarkable story is what followed: he kept this cipher a secret for nearly thirty years, then confessed to Pope Pius II, who was furious, had him imprisoned, and threatened to hang him. Facing death, Alberti publicly revealed the disk's secret to save himself; the pope spared his life and kept him on as court architect. A man who held a cipher like a secret for thirty years and then "spoke" his way out of a noose — the most dramatic episode in the history of encryption.`,
  fact: `他靠向教皇坦白圆盘的秘密才免于一死——加密史上唯一一次「说破密码保命」的真实案例。`,
  factEn: `He only escaped death by revealing the disk's secret to the pope — the only real case in encryption history of "talking one out of a noose."`,
};
BIOS.cardano = {
  bio: `米兰的医生、赌徒与数学家，概率论先驱（《论掷骰游戏》）。1550 年他发明了「卡丹诺格栅」：一块钻了方孔的板，把密文写在孔上，再转动木板，同一张纸上就叠出多层密文。这极低成本地实现了「密文藏于明文」，是隐写术史的分水岭。他还发现了格栅的隐藏用法：把一条真消息写进另一封看似普通的信里，甚至写进另一层密文里——这就是「超级加密」的雏形。他是把「纸与孔」变成密码武器的那个人，一个赌徒用数学把密信藏进了日常。`,
  bioEn: `A Milanese physician, gambler and mathematician, a pioneer of probability (On Games of Dice). In 1550 he invented the "Cardano grille": a board with square holes; write the ciphertext through the holes, rotate the board, and multiple layers of ciphertext stack onto the same sheet. At almost zero cost it realized "hiding the cipher inside plain sight," a watershed in steganography. He also found a hidden use of the grille: write one real message inside another letter that looks ordinary, or even inside another layer of ciphertext — the seed of "super-encryption." He was the man who turned paper and holes into a cryptographic weapon; a gambler who used mathematics to hide secret letters inside the everyday.`,
  fact: `卡丹诺格栅不只是写密文，还能把一条真信藏进一封假信——「超级加密」的思想源头。`,
  factEn: `The Cardano grille doesn't just write ciphertext — it can hide one real letter inside another fake one, the origin of the "super-encryption" idea.`,
};
BIOS.miller = {
  bio: `得克萨斯大学奥斯汀分校的数学家。真正让他名留史册的不是椭圆曲线，而是 1976 年他与 Rabin 提出的「Miller-Rabin 素性检验」：一种用随机数快速判定一个大数是不是素数的方法。RSA 要安全，就得找大素数；而 Miller-Rabin 让一台机器几秒内就能确认「这个数几乎肯定是素数」，成为所有公钥系统生成密钥的标配。它至今仍在 OpenSSL、GnuPG、比特币里运行。当年他只是在会议上交了薄薄几页的摘要，没有正式发表，却成了整个公钥密码的底层地基。`,
  bioEn: `A mathematician at the University of Texas at Austin. What really made his name is not elliptic curves but the "Miller-Rabin primality test" he and Rabin proposed in 1976: a method that uses random numbers to quickly decide whether a big number is prime. RSA's security depends on finding big primes; Miller-Rabin lets a machine confirm in seconds "this number is almost certainly prime," becoming the standard key-generation step in every public-key system. It still runs inside OpenSSL, GnuPG, and Bitcoin today. Back then he only submitted a few pages of abstract at a conference, never formally published, yet it became the bedrock of all public-key cryptography.`,
  fact: `Miller-Rabin 素性检验只靠随机数就能判断素数，是所有 RSA 密钥生成算法的地基。`,
  factEn: `The Miller-Rabin primality test decides primality with random numbers alone — it is the bedrock of every RSA key-generation algorithm.`,
};
BIOS.payne = {
  bio: `一战末期的密码分析家。1918 年 6 月 3 日，他破开了德军最新、自以为无懈可击的密码 ADFGVX——这曾是让协约国情报机构绝望的「不可破」密码。ADF GVX 的狠在于它把「替换」和「换位」叠在一起：先用一个 5×5 方阵（Polybius 方格）做替换，再做列换位，两层套在一起，暴力穷举根本无从下手。Payne 看出这套结构里藏着可利用的统计规律，硬把它一层层剥开。这一破译在德军 1918 年夏季大反攻前攥住了关键情报，为守住巴黎赢得了时间。`,
  bioEn: `A late-WWI codebreaking analyst. On 3 June 1918 he cracked the Germans' newest, supposedly unbreakable cipher, ADFGVX — the one that had left the Allied intelligence agencies despairing. ADFGVX's danger lay in stacking "substitution" over "transposition": it first did a substitution via a 5x5 Polybius square, then a columnar transposition, the two layers nested so that brute force had no foothold. Payne spotted exploitable statistical regularity inside that structure and peeled it apart layer by layer. This break captured crucial intelligence just before the German summer offensive of 1918, buying the time that kept Paris safe.`,
  fact: `ADF GVX 把替换与换位双层嵌套，Payne 靠统计规律把它一层层剥开——一战中「最不可破」密码的终结。`,
  factEn: `ADF GVX nested substitution over transposition; Payne peeled it apart layer by layer with statistical regularity — the end of WWI's "most unbreakable" cipher.`,
};
BIOS.welchman = {
  bio: `剑桥几何学家，布莱切利园破译体系的缔造者之一，与图灵、Joan Clarke 同属 8 号木屋。图为让 Bombe 跑得更快，他提出了「对角线板」（对角化矩阵）：与其对每个转子设置从头算起，不如预先算出那张对角表，一次把候选压缩到极小，搜索时间从数小时压到十几分钟。没有这块板，Bombe 只能算个实验室玩具，成了真正的战争机器。他后来主持了布莱切利园的密码分析体系设计，战后在 GCHQ 工作至退休，是「把数学破译变成可运转工厂」的工程师。`,
  bioEn: `A Cambridge geometer and one of the architects of Bletchley Park's codebreaking organisation, in Hut 8 alongside Turing and Joan Clarke. To make the Bombe run faster, he proposed the "diagonal board" (diagonalizing matrix): instead of recomputing from scratch for each rotor setting, pre-compute that diagonal table once to compress the candidates to a tiny set, cutting search time from hours to a dozen minutes. Without that board the Bombe would have stayed a lab curiosity, not a true war machine. He later led the design of Bletchley's cryptanalytic system and served at GCHQ until retirement — the engineer who "turned mathematical codebreaking into a working factory."`,
  fact: `「对角线板」是 Welchman 给 Bombe 加的加速层，把搜索从数小时压到十几分钟——Bombe 因此成了战争机器。`,
  factEn: `The "diagonal board" is the accelerator Welchman added to the Bombe, cutting search from hours to a dozen minutes — that is how the Bombe became a war machine.`,
};
BIOS.clarke = {
  bio: `剑桥数学双星毕业（Wrangler），1940 年加入布莱切利园 8 号木屋，与图灵、Welchman 同室。她是最早用数学直接攻破 Enigma 的女性之一——全园只有极少数女性做到这一点。她改良了 Banburismus（一种用概率统计推断 Enigma 转子设置的数学法），为护航船团对抗大西洋狼群争得关键时间。她与图灵既是同僚也是挚友，二人对 Enigma 的联合破译是那段历史的核心。战后她继续在 GCHQ 工作到退休，把一生都留给了密码。`,
  bioEn: `A Cambridge mathematics Wrangler who joined Hut 8 at Bletchley Park in 1940, sharing the hut with Turing and Welchman. She was one of the very first women to break Enigma by pure mathematics — only a handful of women in the whole park managed it. She advanced Banburismus, the probabilistic method for deducing Enigma's rotor settings, buying convoy-critical time against the Atlantic wolfpacks. She was both a colleague and a close friend of Turing, and their joint work on Enigma is the core of that history. After the war she kept working at GCHQ until retirement, leaving her whole life to cryptography.`,
  fact: `她是布莱切利园极少数用数学直接破译 Enigma 的女性之一，与图灵同室同案。`,
  factEn: `She was one of the very few women in the whole park who broke Enigma by pure mathematics, working in the same hut and on the same case as Turing.`,
};
BIOS.bacon = {
  bio: `英国文艺复兴晚期的巨人：律师、政治家、散文家，也是实验归纳法的倡导者。1623 年前后他在《学术的进展》中公布了一种「双字体密码」：用两套不同的字体（或两个变体）来编码每条消息的每一位——实际上是把 26 个字母编成 6 位的二进制串，藏进一段看似普通的散文里。这是「用二进制思想藏信」的最早雏形，比现代的二进制编码早了两百多年。他本人终生痴迷「密文里藏着真相」，甚至宣称莎士比亚的戏里藏着密码——后人至今还在找那条「培根密文」。`,
  bioEn: `A giant of late-Renaissance England: lawyer, statesman, essayist, and champion of experimental induction. Around 1623 he published a "biliteral cipher" in The Advancement of Learning: encode every position of a message with one of two fonts (or two letter variants) — effectively a 6-bit binary string hiding the 26 letters, embedded in an ordinary-looking essay. It is the earliest seed of "binary thinking to hide a message," two centuries before modern binary encoding. Bacon himself was obsessed with "the truth hidden inside the cipher," even claiming that Shakespeare's plays contained ciphers — and people are still hunting for that "Bacon cipher" today.`,
  fact: `培根的双字体密码把 26 个字母编成 6 位二进制串——二进制藏信思想的最早雏形。`,
  factEn: `Bacon's biliteral cipher encodes the 26 letters as 6-bit binary strings — the earliest seed of "binary thinking to hide a message."`,
};
BIOS.koblitz = {
  bio: `华盛顿大学数学教授，椭圆曲线密码学的奠基人之一。1985 年他与 Miller 各自独立地把椭圆曲线从纯数论研究变成可保护亿万次日常握手的密码基座——这就是后来的 ECC（椭圆曲线密码学）。ECC 的妙处在于「同样安全、密钥更短」：一条 256 位的椭圆曲线，安全强度约等于 3072 位的 RSA，这意味着同样的安全、更小的证书、更快的握手。今天你手机里的每一次安全连接，背后都跑着以他命名的「Koblitz 曲线」。`,
  bioEn: `A University of Washington professor and one of the founders of elliptic-curve cryptography. In 1985 he and Miller independently turned elliptic curves from a topic of pure number theory into the cryptographic foundation protecting billions of daily handshakes — this is the later ECC (elliptic-curve cryptography). ECC's genius is "equally secure, shorter keys": a single 256-bit elliptic curve matches the security of a 3072-bit RSA, which means the same safety, a smaller certificate, and a faster handshake. Every secure connection on your phone today is backed by a "Koblitz curve" bearing his name.`,
  fact: `256 位的 Koblitz 曲线 ≈ 3072 位的 RSA——同样安全、密钥更短、握手更快。`,
  factEn: `A 256-bit Koblitz curve matches a 3072-bit RSA — equally secure, shorter key, faster handshake.`,
};

module.exports = { BIOS };
