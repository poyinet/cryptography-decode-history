---
title: 基础与术语
title_en: Foundations & Terminology
type: domain
domain: d01
---

# 基础与术语（Foundations & Terminology）

> 技术域 d01 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

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
- 游戏：`freq`
- 章节：caesar

### Ciphertext（密文）
- 中文：加密后无法直接读懂的文本。
- English: The scrambled text produced by encryption.
- 游戏：`substitution`
- 章节：caesar

### Key（密钥）
- 中文：控制加密/解密方式的一串秘密参数。
- English: A secret parameter that controls how encryption and decryption work.
- 游戏：`caesar`
- 章节：caesar

### Cipher（密码（算法））
- 中文：改变字母或比特的加密算法，区别于替换整词的 code（编码表）。
- English: An algorithm that scrambles letters or bits; distinct from a code, which replaces whole words.
- 游戏：`substitution`
- 章节：caesar, arab

### Code（编码（表））
- 中文：用代号（如词、数字）替换整词整句的系统。
- English: A system that replaces whole words or phrases with codenames or numbers.
- 游戏：`nihilist`
- 章节：ww1

### Cryptanalysis（密码分析）
- 中文：不靠密钥、凭密文本身破解密码的科学。
- English: The science of breaking ciphers from the ciphertext alone, without the key.
- 游戏：`codebreak`
- 章节：arab

### Cryptography（密码学）
- 中文：研究加密与解密技术的学科。
- English: The study and practice of encryption and decryption.
- 游戏：`campaign`
- 章节：dawn

### Steganography（隐写术）
- 中文：把秘密藏进普通载体（文字/图片）里，隐藏的是「信息存在」这一事实本身。
- English: Hiding a secret inside an innocent carrier — hiding the very fact that a secret exists.
- 游戏：`acrostic`
- 章节：bacon

### Bletchley Park（布莱切利园）
- 中文：二战英国密码破译总部：破解 Enigma 与 Lorenz 的地方。
- English: Britain's WWII codebreaking HQ, where Enigma and Lorenz were broken.
- 游戏：`bombe`
- 章节：bletchley

### Room 40（40 号房）
- 中文：一战英国海军部密码破译室，破译齐默尔曼电报。
- English: Britain's WWI naval codebreaking room; it broke the Zimmermann Telegram.
- 游戏：`jn25`
- 章节：ww1

### Colossus
- 中文：弗劳尔斯造的世界第一台可编程电子计算机，用于高速统计分析破译德国洛伦兹（Tunny）密码，标志着密码破译进入电子计算机时代。
- English: Flowers' world-first programmable electronic computer, built for high-speed statistical analysis that broke the German Lorenz (Tunny) cipher, ushering cryptanalysis into the electronic age.
- 游戏：`lorenz`
- 章节：lorenz

### SIS
- 中文：美国陆军信号情报处，弗里德曼团队破解紫密的地方。
- English: The US Army Signal Intelligence Service, where Friedman's team broke Purple.
- 游戏：`purple`
- 章节：purple

### Bacon's Biliteral（培根双字体）
- 中文：用两种字形的差异，把 5 位 A/B 码藏进普通散文——二进制的先声。
- English: Hiding 5-bit A/B codes in ordinary prose via two typefaces — an early glimpse of binary.
- 游戏：`bacon`
- 章节：bacon

### Morse Code（摩斯电码）
- 中文：用点划组合编码字母，电报时代的通用语言。
- English: Encoding letters as dots and dashes — the lingua franca of the telegraph age.
- 游戏：`morse`
- 章节：bacon, ww1, midway, purple

### Baudot Code（博多码）
- 中文：5 比特的电传码，Tunny 密文的底层字母表。
- English: The 5-bit teleprinter code underlying Tunny ciphertext.
- 游戏：`lorenz`
- 章节：lorenz

### Polybius Square（波利比奥斯方阵）
- 中文：把字母放进方格，用行列坐标表示——ADFGVX 的底层。
- English: Letters placed in a grid and addressed by row-column coordinates — the basis of ADFGVX.
- 游戏：`adfgvx`
- 章节：ww1

### Decryption（解密）
- 中文：用密钥把密文还原成明文的过程。
- English: Restoring plaintext from ciphertext using the key.
- 游戏：`enigma`
- 章节：bletchley

### Encryption（加密）
- 中文：用密钥把明文变成密文的过程。
- English: Turning plaintext into ciphertext using the key.
- 游戏：`enigma`
- 章节：bletchley

### Steganographic Image（图像隐写）
- 中文：把信息藏在像素的最低有效位等隐蔽处。
- English: Hiding data in the least significant bits of pixels.
- 游戏：`bacon`
- 章节：bacon

### Caesar Box（凯撒方阵）
- 中文：把明文按行写入方阵再按列读出（换位）。
- English: Writing plaintext into a grid by rows, reading out by columns.
- 游戏：`caesar`
- 章节：caesar

### Authentication（认证）
- 中文：认证。确认通信对方身份真实性的过程，防止冒充；常用口令、数字证书、多因素认证等手段实现，是安全通信的首要环节。
- English: The process of verifying that a communicating party is who it claims to be, preventing impersonation. It is achieved through passwords, digital certificates, multi-factor methods, and cryptographic mechanisms, and is the first step of secure communication.
- 游戏：`rsa`
- 章节：modern

### Integrity（完整性）
- 中文：完整性。保证数据在传输或存储过程中未被篡改的性质；通常用哈希值或消息认证码（MAC）检测任何修改，是信息安全三要素之一。
- English: The property that data has not been altered during transmission or storage. It is typically enforced with hash values or message authentication codes, which reveal any modification; it is one of the three pillars of information security.
- 游戏：`hashlab`
- 章节：modern

### Non-repudiation（不可否认性）
- 中文：不可否认性。确保发送方无法否认自己发出过某条消息或签署过某份文件；数字签名提供此性质，常用于合同、交易与审计场景。
- English: The property ensuring that a sender cannot deny having sent a message or signed a document. Digital signatures provide non-repudiation, making it essential for contracts, financial transactions, and audit trails.
- 游戏：`rsa`
- 章节：modern

### Confusion（混淆）
- 中文：混淆。让密文与密钥的关系极其复杂，使密钥的微小变化导致密文面目全非，增加分析难度；常通过 S 盒等非线性替换实现。
- English: A Shannon design principle making the relationship between ciphertext and key as complex as possible, so that even tiny key changes drastically alter the ciphertext. It is typically realized with nonlinear S-box substitutions.
- 游戏：`sm4`
- 章节：modern

### Diffusion（扩散）
- 中文：扩散。让明文的每一位影响密文的许多位，把明文的统计特征分散掩盖；通过置换与线性变换实现，与混淆并称密码设计两大原则。
- English: A Shannon design principle spreading each plaintext bit's influence across many ciphertext bits, hiding statistical structure. Implemented via permutations and linear transforms, it complements confusion as one of the two pillars of secure cipher design.
- 游戏：`sm4`
- 章节：modern

### NSA（美国国家安全局）
- 中文：美国国家安全局，负责信号情报搜集、密码分析与破译的中央情报机构，冷战期间主导拦截苏联通信，是世界上最庞大、最神秘的密码机构之一。
- English: The National Security Agency is the U.S. signals intelligence agency responsible for global monitoring, collection, and cryptanalysis of foreign communications. Its Cold War code-breaking work, particularly against Soviet ciphers, shaped modern electronic surveillance and cryptography policy.
- 游戏：`venona`
- 章节：venona

### GCHQ（英国政府通信总部）
- 中文：英国政府通信总部，负责监听外国通信并进行密码分析与破译的情报机构，前身是 1919 年成立的政府密码学校（GC&CS），二战后改组为 GCHQ；它在破译德国恩尼格玛密码机中发挥过重要作用。
- English: GCHQ is the United Kingdom's intelligence agency for signals intelligence and cryptanalysis. Descended from wartime codebreaking organizations, it intercepted foreign communications and contributed decisively to breaking the German Enigma cipher during World War II.
- 游戏：`rsa`
- 章节：modern

### NIST（美国国家标准与技术研究院）
- 中文：美国国家标准与技术研究院，负责制定官方密码算法标准的机构，先后通过公开竞赛选定 AES 与 SHA-3，其标准被全球政府与商业系统广泛采用。
- English: NIST is a U.S. federal agency that develops technology standards, including cryptography. Through open competitions it selected the AES block cipher and SHA-3 hash function; its specifications are adopted worldwide by governments and industry to secure communications.
- 游戏：`pqc-match`
- 章节：quantum

### VENONA Project（维诺纳计划）
- 中文：美国实施、英国早期协作的秘密破译项目，针对苏联情报机构在二战期间使用的一次一密乱码本，利用乱码本重用漏洞恢复了大量苏联间谍活动情报。
- English: VENONA was a secret U.S.-British project that decrypted Soviet diplomatic and espionage messages from the 1940s. Soviet reuse of one-time pads created exploitable weaknesses, letting analysts recover plaintext and expose Soviet spy networks, including atomic espionage.
- 游戏：`venona`
- 章节：venona

### One-Way Function（单向函数）
- 中文：正向计算容易、逆向计算计算上不可行的函数。公钥密码的存在前提——如果单向函数不存在，整个公钥体系崩塌。
- English: A function easy to compute forward but infeasible to invert. The existence assumption underlying ALL public-key crypto.
- 游戏：`hashlab`
- 章节：modern

### Trapdoor Function（陷门函数）
- 中文：一类特殊的单向函数：不知道「陷门信息」时逆向不可行，知道后逆向变容易。RSA 的陷门是素数分解知识。
- English: A one-way function with a secret "trapdoor" that makes inversion easy when known. RSA's trapdoor is the factorization.
- 游戏：`rsa`
- 章节：modern

### Discrete Logarithm（离散对数）
- 中文：已知 g 和 g^x mod p，求 x——DH/ECC/ElGamal 的共同数学难题。量子计算机上的 Shor 算法可以高效求解。
- English: Given g and g^x mod p, find x — the shared hard problem behind DH, ECC and ElGamal. Shor's algorithm solves it on quantum computers.
- 游戏：`rsa`
- 章节：modern

### Chinese Remainder Theorem（中国剩余定理）
- 中文：源自《孙子算经》的经典定理：已知数对若干互素模数的余数，可唯一确定该数。RSA 解密用它加速 4 倍。
- English: From the ancient Chinese Sunzi Suanjing: residues modulo pairwise-coprime moduli uniquely determine a number. Speeds up RSA decryption 4×.
- 游戏：`rsa`
- 章节：modern

### First Computers (ENIAC/EDSAC)（计算机的诞生（ENIAC/EDSAC））
- 中文：1943–1945 年宾夕法尼亚大学建成的 ENIAC（电子数字积分计算机）是世界第一台通用电子数字计算机——但它靠插线板重连程序；1949 年剑桥的 EDSAC 第一个实现「存储程序」由内存跑代码，成为现代计算机的真正原型。密码学的机器时代（Colossus 1943、ENIAC 1945）因此与今天的信息安全一脉相承。
- English: ENIAC (1943-45, University of Pennsylvania) was the first general-purpose electronic digital computer — but reprogramming it meant flipping cables; EDSAC (Cambridge, 1949) first ran code from memory, the true blueprint of every modern machine. The machine age of cryptography (Colossus 1943, ENIAC 1945) flows straight into today’s information security.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
