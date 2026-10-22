---
title: 基础与术语
title_en: Foundations & Terminology
type: domain
domain: d01
---

# 基础与术语（Foundations & Terminology）

> 技术域 d01

## 概念

**中文**：密码学的地基：把可读的**明文**变成不可读的**密文**（加密），再变回来（解密），全程由**密钥**控制。要分清两件事——**密码（cipher）改字母、编码（code）改单词**；**替换**换字母、**换位**挪位置。一切现代加密都站在这棵树的两条主干上。

**English**: The bedrock: turn readable **plaintext** into unreadable **ciphertext** (encrypt) and back (decrypt), driven by a **key**. Keep two things straight — a **cipher** scrambles letters, a **code** swaps words; **substitution** changes letters, **transposition** moves them. Every modern scheme stands on these two trunks.
## 算法 / 协议

### 可交互算法（Workshop）

- `morse` · **摩斯 Morse**（Morse Code）· 密钥： / ，默认 ``
- `base64` · **Base64**（Base64）· 密钥： / ，默认 ``
- `binary` · **二进制 Binary**（Binary (8-bit)）· 密钥： / ，默认 ``

## 术语

### Plaintext（明文）
- 中文：加密前的原始文字。
- English: The original readable text before encryption.
- 为什么重要：一切加密的起点，没有它就没有"保密"这回事。
- 现实哪里用：你敲进去的每一句话、待发送的原文。
- 怎么被破：本身不保密，被偷看就等于被破——所以才有"先加密再传输"。
- 游戏：`freq`
- 章节：caesar

### Ciphertext（密文）
- 中文：加密后无法直接读懂的文本。
- English: The scrambled text produced by encryption.
- 为什么重要：保护原文的"包装纸"，让偷听者只看到无意义符号。
- 现实哪里用：你收到的加密邮件正文、磁盘上的加密分区。
- 怎么被破：只有配上正确密钥才能还原；密钥一漏它等于裸奔。
- 游戏：`substitution`
- 章节：caesar

### Key（密钥）
- 中文：控制加密/解密方式的一串秘密参数。
- English: A secret parameter that controls how encryption and decryption work.
- 为什么重要：整把锁的钥匙，加密解密全靠它，是安全的全部重心。
- 现实哪里用：密码、TLS 会话密钥、磁盘加密的密码。
- 怎么被破：密钥一泄全泄——密钥管理（d13）是安全里最难的一环。
- 游戏：`caesar`
- 章节：caesar

### Cipher（密码（算法））
- 中文：改变字母或比特的加密算法，区别于替换整词的 code（编码表）。
- English: An algorithm that scrambles letters or bits; distinct from a code, which replaces whole words.
- 为什么重要：一套按规则把明文变密文的算法，区别于一次性的密码本。
- 现实哪里用：AES、Enigma 都是密码（cipher）。
- 怎么被破：算法公开不碍事（柯克霍夫原则），坏的是密钥泄露或被数学攻破。
- 游戏：`substitution`
- 章节：caesar, arab

### Code（编码（表））
- 中文：用代号（如词、数字）替换整词整句的系统。
- English: A system that replaces whole words or phrases with codenames or numbers.
- 为什么重要：用约定符号代替语言（如"99 号"指代某计划），无密钥、靠共享词典。
- 现实哪里用：摩尔斯电码、海军代码、暗号。
- 怎么被破：代码本一旦落入敌手即全败；比密码更依赖"别被偷"。
- 游戏：`nihilist`
- 章节：ww1

### Cryptanalysis（密码分析）
- 中文：不靠密钥、凭密文本身破解密码的科学。
- English: The science of breaking ciphers from the ciphertext alone, without the key.
- 为什么重要：破译者的学问，与加密是同一枚硬币的两面。
- 现实哪里用：从频度分析到差分分析的全部攻击手法。
- 怎么被破：它本身就是"破"的方法——本节讲的就是怎么破。
- 游戏：`codebreak`
- 章节：arab

### Cryptography（密码学）
- 中文：研究加密与解密技术的学科。
- English: The study and practice of encryption and decryption.
- 为什么重要：用数学保证通信安全的整个学科，3000 年演化至今。
- 现实哪里用：你手机里每一段加密都站在它上面。
- 怎么被破：它不"被破"——它是被破的对象与手段的总和。
- 游戏：`campaign`
- 章节：dawn

### Steganography（隐写术）
- 中文：把秘密藏进普通载体（文字/图片）里，隐藏的是「信息存在」这一事实本身。
- English: Hiding a secret inside an innocent carrier — hiding the very fact that a secret exists.
- 为什么重要：先隐藏"有秘密"这件事，比加密多一层伪装。
- 现实哪里用：在图片里藏信、历史上藏在蜡板或发际线。
- 怎么被破：一旦被人怀疑"这里藏了东西"，分析载体统计即可揪出。
- 游戏：`acrostic`
- 章节：bacon

### Bletchley Park（布莱切利园）
- 中文：二战英国密码破译总部：破解 Enigma 与 Lorenz 的地方。
- English: Britain's WWII codebreaking HQ, where Enigma and Lorenz were broken.
- 为什么重要：二战英军密码破译总部，现代密码学的诞生地。
- 现实哪里用：破译 Enigma 的地方，催生了最早的计算机。
- 怎么被破：它不是算法，是一段历史坐标。
- 游戏：`bombe`
- 章节：bletchley

### Room 40（40 号房）
- 中文：一战英国海军部密码破译室，破译齐默尔曼电报。
- English: Britain's WWI naval codebreaking room; it broke the Zimmermann Telegram.
- 为什么重要：一战英军破译德军密码的总部，布莱切利园的前身。
- 现实哪里用：破译德奥外交密电，影响了一战的走向。
- 怎么被破：靠外交渠道截获 + 数学分析破开。
- 游戏：`jn25`
- 章节：ww1

### Colossus
- 中文：弗劳尔斯造的世界第一台可编程电子计算机，用于高速统计分析破译德国洛伦兹（Tunny）密码，标志着密码破译进入电子计算机时代。
- English: Flowers' world-first programmable electronic computer, built for high-speed statistical analysis that broke the German Lorenz (Tunny) cipher, ushering cryptanalysis into the electronic age.
- 为什么重要：世界上第一台可编程电子计算机，为破译洛伦兹密码而造。
- 现实哪里用：用差动器思路穷举洛伦兹电传密码。
- 怎么被破：它是"破"的机器，不是被破的算法。
- 游戏：`lorenz`
- 章节：lorenz

### SIS
- 中文：美国陆军信号情报处，弗里德曼团队破解紫密的地方。
- English: The US Army Signal Intelligence Service, where Friedman's team broke Purple.
- 为什么重要：英国秘密情报局，长期主导国家级的密码攻防。
- 现实哪里用：从二战到今天的情报与密码机构。
- 怎么被破：是机构，不是算法。
- 游戏：`purple`
- 章节：purple

### Bacon's Biliteral（培根双字体）
- 中文：用两种字形的差异，把 5 位 A/B 码藏进普通散文——二进制的先声。
- English: Hiding 5-bit A/B codes in ordinary prose via two typefaces — an early glimpse of binary.
- 为什么重要：用两种字体在普通文本里藏信，二进制思想的先声。
- 现实哪里用：文艺复兴的隐写方案，后人至今在找"培根密文"。
- 怎么被破：靠统计两种字体的偏差揪出，或发现被藏信的载体。
- 游戏：`bacon`
- 章节：bacon

### Morse Code（摩斯电码）
- 中文：用点划组合编码字母，电报时代的通用语言。
- English: Encoding letters as dots and dashes — the lingua franca of the telegraph age.
- 为什么重要：把字母拆成点划，是编码而非加密——任何会查表者都能读。
- 现实哪里用：电报、航海、早期无线电。
- 怎么被破：无密钥，靠"保密的是内容不是编码"；本身不防御窃听。
- 游戏：`morse`
- 章节：bacon, ww1, midway, purple

### Baudot Code（博多码）
- 中文：5 比特的电传码，Tunny 密文的底层字母表。
- English: The 5-bit teleprinter code underlying Tunny ciphertext.
- 为什么重要：比莫尔斯更早的 5 位电码，一次传一个字符。
- 现实哪里用：从一战到 70 年代的电传系统。
- 怎么被破：同样是纯编码，无密钥保护。
- 游戏：`lorenz`
- 章节：lorenz

### Polybius Square（波利比奥斯方阵）
- 中文：把字母放进方格，用行列坐标表示——ADFGVX 的底层。
- English: Letters placed in a grid and addressed by row-column coordinates — the basis of ADFGVX.
- 为什么重要：用 5×5 方格把字母变坐标，是隐写与换位的地基。
- 现实哪里用：ADF GVX 的底层、早期电报编码。
- 怎么被破：方阵一旦共享约定即可互译，本身没有密钥保护。
- 游戏：`adfgvx`
- 章节：ww1

### Decryption（解密）
- 中文：用密钥把密文还原成明文的过程。
- English: Restoring plaintext from ciphertext using the key.
- 为什么重要：把密文还原成明文的逆操作。
- 现实哪里用：你输入密码打开加密文件的那一刻。
- 怎么被破：用错密钥会解出一堆乱码——密钥错 = 解不出。
- 游戏：`enigma`
- 章节：bletchley

### Encryption（加密）
- 中文：用密钥把明文变成密文的过程。
- English: Turning plaintext into ciphertext using the key.
- 为什么重要：把明文变成密文的正向操作。
- 现实哪里用：发送前对每一段原文做加密。
- 怎么被破：强度取决于密钥与算法，弱算法能被数学攻破。
- 游戏：`enigma`
- 章节：bletchley

### Steganographic Image（图像隐写）
- 中文：把信息藏在像素的最低有效位等隐蔽处。
- English: Hiding data in the least significant bits of pixels.
- 为什么重要：把密文藏进图片像素，人眼看不出。
- 现实哪里用：图片隐写工具、数字水印。
- 怎么被破：统计分析像素分布可揪出被改动过的痕迹。
- 游戏：`bacon`
- 章节：bacon

### Caesar Box（凯撒方阵）
- 中文：把明文按行写入方阵再按列读出（换位）。
- English: Writing plaintext into a grid by rows, reading out by columns.
- 为什么重要：用可旋转的纸盒做换位，古罗马的隐写装置。
- 现实哪里用：凯撒时代军队的传令盒。
- 怎么被破：盒子一旦落入敌手，换位规则随之公开。
- 游戏：`caesar`
- 章节：caesar

### Authentication（认证）
- 中文：认证。确认通信对方身份真实性的过程，防止冒充；常用口令、数字证书、多因素认证等手段实现，是安全通信的首要环节。
- English: The process of verifying that a communicating party is who it claims to be, preventing impersonation. It is achieved through passwords, digital certificates, multi-factor methods, and cryptographic mechanisms, and is the first step of secure communication.
- 为什么重要：证明"你是你"，加密三支柱之一。
- 现实哪里用：登录、签名验证、证书校验。
- 怎么被破：中间人攻击可伪造身份，靠证书链 + 密钥保护来防。
- 游戏：`rsa`
- 章节：modern

### Integrity（完整性）
- 中文：完整性。保证数据在传输或存储过程中未被篡改的性质；通常用哈希值或消息认证码（MAC）检测任何修改，是信息安全三要素之一。
- English: The property that data has not been altered during transmission or storage. It is typically enforced with hash values or message authentication codes, which reveal any modification; it is one of the three pillars of information security.
- 为什么重要：保证内容没被偷偷改动，加密三支柱之二。
- 现实哪里用：哈希校验、认证标签、区块链。
- 怎么被破：无认证保护时密文可被篡改，MAC/签名能揪出改动。
- 游戏：`hashlab`
- 章节：modern

### Non-repudiation（不可否认性）
- 中文：不可否认性。确保发送方无法否认自己发出过某条消息或签署过某份文件；数字签名提供此性质，常用于合同、交易与审计场景。
- English: The property ensuring that a sender cannot deny having sent a message or signed a document. Digital signatures provide non-repudiation, making it essential for contracts, financial transactions, and audit trails.
- 为什么重要：证明"这事你干过、赖不掉"，靠数字签名。
- 现实哪里用：电子合同、交易存证。
- 怎么被破：没有可验证的签名时，签方可赖账。
- 游戏：`rsa`
- 章节：modern

### Confusion（混淆）
- 中文：混淆。让密文与密钥的关系极其复杂，使密钥的微小变化导致密文面目全非，增加分析难度；常通过 S 盒等非线性替换实现。
- English: A Shannon design principle making the relationship between ciphertext and key as complex as possible, so that even tiny key changes drastically alter the ciphertext. It is typically realized with nonlinear S-box substitutions.
- 为什么重要：让密钥与密文的关系看起来毫无规律（香农概念）。
- 现实哪里用：分组密码的替换层、S 盒。
- 怎么被破：混淆不足会让统计规律泄漏给攻击者。
- 游戏：`sm4`
- 章节：modern

### Diffusion（扩散）
- 中文：扩散。让明文的每一位影响密文的许多位，把明文的统计特征分散掩盖；通过置换与线性变换实现，与混淆并称密码设计两大原则。
- English: A Shannon design principle spreading each plaintext bit's influence across many ciphertext bits, hiding statistical structure. Implemented via permutations and linear transforms, it complements confusion as one of the two pillars of secure cipher design.
- 为什么重要：让一个明文字符的影响扩散到整个密文（香农概念）。
- 现实哪里用：分组密码的置换层。
- 怎么被破：扩散不足会让局部明文的统计规律残留进密文。
- 游戏：`sm4`
- 章节：modern

### NSA（美国国家安全局）
- 中文：美国国家安全局，负责信号情报搜集、密码分析与破译的中央情报机构，冷战期间主导拦截苏联通信，是世界上最庞大、最神秘的密码机构之一。
- English: The National Security Agency is the U.S. signals intelligence agency responsible for global monitoring, collection, and cryptanalysis of foreign communications. Its Cold War code-breaking work, particularly against Soviet ciphers, shaped modern electronic surveillance and cryptography policy.
- 为什么重要：美国国家安全局，现代密码标准与攻放的中心。
- 现实哪里用：制定/审查加密算法、主导网络监听。
- 怎么被破：是机构，不是算法。
- 游戏：`venona`
- 章节：venona

### GCHQ（英国政府通信总部）
- 中文：英国政府通信总部，负责监听外国通信并进行密码分析与破译的情报机构，前身是 1919 年成立的政府密码学校（GC&CS），二战后改组为 GCHQ；它在破译德国恩尼格玛密码机中发挥过重要作用。
- English: GCHQ is the United Kingdom's intelligence agency for signals intelligence and cryptanalysis. Descended from wartime codebreaking organizations, it intercepted foreign communications and contributed decisively to breaking the German Enigma cipher during World War II.
- 为什么重要：英国政府通信总部，公钥密码的早期独立发明者之一。
- 现实哪里用：从布莱切利园延续到今天的密码与情报。
- 怎么被破：是机构，不是算法。
- 游戏：`rsa`
- 章节：modern

### NIST（美国国家标准与技术研究院）
- 中文：美国国家标准与技术研究院，负责制定官方密码算法标准的机构，先后通过公开竞赛选定 AES 与 SHA-3，其标准被全球政府与商业系统广泛采用。
- English: NIST is a U.S. federal agency that develops technology standards, including cryptography. Through open competitions it selected the AES block cipher and SHA-3 hash function; its specifications are adopted worldwide by governments and industry to secure communications.
- 为什么重要：美国标准与技术研究所，主持 AES 与后量子算法征集。
- 现实哪里用：全球密码算法事实标准的制定者。
- 怎么被破：是机构，不是算法。
- 游戏：`pqc-match`
- 章节：quantum

### VENONA Project（维诺纳计划）
- 中文：美国实施、英国早期协作的秘密破译项目，针对苏联情报机构在二战期间使用的一次一密乱码本，利用乱码本重用漏洞恢复了大量苏联间谍活动情报。
- English: VENONA was a secret U.S.-British project that decrypted Soviet diplomatic and espionage messages from the 1940s. Soviet reuse of one-time pads created exploitable weaknesses, letting analysts recover plaintext and expose Soviet spy networks, including atomic espionage.
- 为什么重要：美苏联手破译苏联一次性密码的长期工程，靠密钥复用漏洞。
- 现实哪里用：识别潜伏在政府里的间谍。
- 怎么被破：靠"一次性密钥被复用"这个人为破绽撕开。
- 游戏：`venona`
- 章节：venona

### One-Way Function（单向函数）
- 中文：正向计算容易、逆向计算计算上不可行的函数。公钥密码的存在前提——如果单向函数不存在，整个公钥体系崩塌。
- English: A function easy to compute forward but infeasible to invert. The existence assumption underlying ALL public-key crypto.
- 为什么重要：算起来容易、反推极难，公钥密码的基石。
- 现实哪里用：RSA、哈希、所有非对称系统的底层。
- 怎么被破：目前没有已知破法——这正是它安全性的来源。
- 游戏：`hashlab`
- 章节：modern

### Trapdoor Function（陷门函数）
- 中文：一类特殊的单向函数：不知道「陷门信息」时逆向不可行，知道后逆向变容易。RSA 的陷门是素数分解知识。
- English: A one-way function with a secret "trapdoor" that makes inversion easy when known. RSA's trapdoor is the factorization.
- 为什么重要：单向函数 + 一把"门钥匙"（私钥）可反推，公钥密码的核心。
- 现实哪里用：RSA 的公私钥、椭圆曲线。
- 怎么被破：陷门（私钥）一旦泄露即可反推，私钥管理是关键。
- 游戏：`rsa`
- 章节：modern

### Discrete Logarithm（离散对数）
- 中文：已知 g 和 g^x mod p，求 x——DH/ECC/ElGamal 的共同数学难题。量子计算机上的 Shor 算法可以高效求解。
- English: Given g and g^x mod p, find x — the shared hard problem behind DH, ECC and ElGamal. Shor's algorithm solves it on quantum computers.
- 为什么重要：在有限群里求指数，公认难问题，是 ECC 的地基。
- 现实哪里用：ECC、ElGamal、Diffie-Hellman 的数学底座。
- 怎么被破：经典计算机无多项式解法；量子计算机可解（Shor）。
- 游戏：`rsa`
- 章节：modern

### Chinese Remainder Theorem（中国剩余定理）
- 中文：源自《孙子算经》的经典定理：已知数对若干互素模数的余数，可唯一确定该数。RSA 解密用它加速 4 倍。
- English: From the ancient Chinese Sunzi Suanjing: residues modulo pairwise-coprime moduli uniquely determine a number. Speeds up RSA decryption 4×.
- 为什么重要：把大模运算拆成小模再合并，RSA 解密的 4 倍加速来源。
- 现实哪里用：RSA 与所有大模幂运算的加速。
- 怎么被破：是数学定理，不存在"被破"。
- 游戏：`rsa`
- 章节：modern

### First Computers (ENIAC/EDSAC)（计算机的诞生（ENIAC/EDSAC））
- 中文：1943–1945 年宾夕法尼亚大学建成的 ENIAC（电子数字积分计算机）是世界第一台通用电子数字计算机——但它靠插线板重连程序；1949 年剑桥的 EDSAC 第一个实现「存储程序」由内存跑代码，成为现代计算机的真正原型。密码学的机器时代（Colossus 1943、ENIAC 1945）因此与今天的信息安全一脉相承。
- English: ENIAC (1943-45, University of Pennsylvania) was the first general-purpose electronic digital computer — but reprogramming it meant flipping cables; EDSAC (Cambridge, 1949) first ran code from memory, the true blueprint of every modern machine. The machine age of cryptography (Colossus 1943, ENIAC 1945) flows straight into today’s information security.
- 为什么重要：从 ENIAC 到 EDSAC，电子计算机为破译而生。
- 现实哪里用：二战后计算机的起点。
- 怎么被破：是机器，不是算法。
- 章节：modern
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [古代起源](02-eras/e01-origins/README.md)
- [古典希腊罗马](02-eras/e02-classical/README.md)
- [阿拉伯黄金时代](02-eras/e04-arabic-golden-age/README.md)
- [文艺复兴与宗教改革](02-eras/e06-renaissance/README.md)
- [第一次世界大战](02-eras/e09-ww1/README.md)
- [第二次世界大战](02-eras/e11-ww2/README.md)
- [冷战与信息论转折](02-eras/e12-cold-war-info-theory/README.md)
- [公钥革命](02-eras/e13-public-key/README.md)
- [量子转折](02-eras/e16-quantum-turn/README.md)

**关联人物**（人物志）
- （无）

**关联游戏**（站内可玩 · 游戏 ID）
- `acrostic` · 藏头诗密信
- `adfgvx` · ADFGVX
- `bacon` · 培根密码机
- `bombe` · 炸弹机
- `caesar` · 凯撒解码
- `campaign` · 破译战役
- `codebreak` · 大师密码
- `enigma` · 恩尼格玛
- `freq` · 词频分析
- `hashlab` · 哈希雪崩实验室
- `jn25` · JN-25 破译机
- `lorenz` · 洛伦兹破译机
- `morse` · 摩斯破译
- `nihilist` · 尼希尔斯特
- `pqc-match` · 后量子迁移配对
- `purple` · 紫密破译机
- `rsa` · RSA 小素数保险柜
- `sm4` · SM4 国密试炼场
- `substitution` · 替换密码
- `venona` · VENONA 双密复用
