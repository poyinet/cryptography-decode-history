---
title: 题库
title_en: Quiz Bank
type: quiz
---

# 题库（Quiz Bank）

> 252 题。

1. **中文**：凯撒密码的经典偏移量是多少？
- 选项：A. 2  B. 3  C. 4  D. 5
- 答案：**B** · 凯撒本人通常后移 3 位，但史载并不固定（奥古斯都用 1）。

   **English**: What is the classic Caesar shift?
- Options: A. 2  B. 3  C. 4  D. 5
- Answer: **B** · Caesar usually shifted by 3, though records show it varied (Augustus used 1).

2. **中文**：「明文」指的是什么？
- 选项：A. 加密前的原始文字  B. 加密后的密文  C. 密钥  D. 破译工具
- 答案：**A** · 明文是加密的输入，密文是输出。

   **English**: What is plaintext?
- Options: A. The original text before encryption  B. The encrypted text  C. The key  D. A cracking tool
- Answer: **A** · Plaintext is the input to encryption; ciphertext is the output.

3. **中文**：频率分析主要破解哪类密码？
- 选项：A. 换位密码  B. 哈希函数  C. 单表替换密码  D. 公钥密码
- 答案：**C** · 统计字母频率可破单表替换，肯迪 850 年发明。

   **English**: Frequency analysis mainly breaks which kind of cipher?
- Options: A. Transposition ciphers  B. Hash functions  C. Monoalphabetic substitution  D. Public-key ciphers
- Answer: **C** · Counting letter frequencies defeats simple substitution; invented by Al-Kindi c. 850.

4. **中文**：摩斯电码用什么表示字母？
- 选项：A. 数字  B. 图形  C. 颜色  D. 点与划
- 答案：**D** · 点（.）与划（-）的组合。

   **English**: What does Morse code use to represent letters?
- Options: A. Numbers  B. Shapes  C. Colors  D. Dots and dashes
- Answer: **D** · A combination of dots (.) and dashes (-).

5. **中文**：栅栏密码属于哪一类？
- 选项：A. 替换密码  B. 换位密码  C. 流密码  D. 分组密码
- 答案：**B** · 栅栏密码把明文按行数锯成波浪再逐行读出——字母一个没换、只是位置被打乱，是「换位」家族的入门样本。二战德军曾用它做低级战术加密。

   **English**: Which family does the rail fence cipher belong to?
- Options: A. Substitution  B. Transposition  C. Stream cipher  D. Block cipher
- Answer: **B** · The letters stay the same; only their order is rearranged.

6. **中文**：维吉尼亚密码是……
- 选项：A. 多表替换密码  B. 单表替换密码  C. 换位密码  D. 一次性密码本
- 答案：**A** · 密钥逐字母选字母表，抹平频率。

   **English**: The Vigenère cipher is a …
- Options: A. polyalphabetic substitution cipher  B. monoalphabetic substitution cipher  C. transposition cipher  D. one-time pad
- Answer: **A** · The key picks a fresh alphabet per letter, flattening frequencies.

7. **中文**：培根双字体密码用几种字形编码？
- 选项：A. 3 种  B. 4 种  C. 2 种  D. 26 种
- 答案：**C** · A/B 两种字形，5 位一组 = 二进制先声。

   **English**: How many typefaces does Bacon's biliteral cipher use?
- Options: A. 3  B. 4  C. 2  D. 26
- Answer: **C** · Two typefaces (A/B), five bits per letter — an early glimpse of binary.

8. **中文**：「密文」是……
- 选项：A. 加密前的文字  B. 加密后的文本  C. 解密后的文本  D. 密钥
- 答案：**B** · 加密输出，无密钥无法读懂。

   **English**: Ciphertext is …
- Options: A. the text before encryption  B. the text after encryption  C. the text after decryption  D. the key
- Answer: **B** · The output of encryption; unreadable without the key.

9. **中文**：一次性密码本（OTP）的密钥特点是？
- 选项：A. 很短  B. 可复用  C. 固定不变  D. 与明文等长且只用一次
- 答案：**D** · 香农证明：只要密钥真随机、与明文等长且只用一次，密文与明文统计独立——敌手拿到密文也无法缩小明文范围。代价是密钥分发极难，故只用于最高级线路（如莫斯科-华盛顿热线）。

   **English**: What is the key property of a one-time pad?
- Options: A. Very short  B. Reusable  C. Fixed forever  D. As long as the message, used once
- Answer: **D** · Shannon proved that a truly random, equal-length, single-use key makes ciphertext statistically independent of plaintext — unbreakable in principle but so hard to distribute that only hotlines used it.

10. **中文**：BASE64 的作用是？
- 选项：A. 加密  B. 压缩  C. 把二进制转成可打印文本  D. 哈希
- 答案：**C** · 编码而非加密，现代协议日常用。

   **English**: What does Base64 do?
- Options: A. Encryption  B. Compression  C. Turns binary into printable text  D. Hashing
- Answer: **C** · Encoding, not encryption — used everywhere in modern protocols.

11. **中文**：二进制中字母 A 用几个比特表示？
- 选项：A. 8 位  B. 4 位  C. 16 位  D. 2 位
- 答案：**A** · 一个字节恰好表示一个 ASCII 字符：A=65=01000001。二进制是所有现代密码的原料——凯撒移位在计算机里就是对这个字节的模加运算。

   **English**: How many bits represent the letter A in binary?
- Options: A. 8  B. 4  C. 16  D. 2
- Answer: **A** · One byte holds exactly one ASCII character: A = 65 = 01000001. Binary is modern crypto's raw material — Caesar's shift becomes modular addition on that byte.

12. **中文**：异或运算的规则是？
- 选项：A. 相同得 1  B. 相同得 0、不同得 1  C. 总是得 1  D. 总是得 0
- 答案：**B** · 异或三条性质：与自身为 0、对 0 不变、可交换。A⊕K⊕K=A 意味着同一把密钥加密即解密——从 Vernam 到 AES 的 AddRoundKey 全靠它。

   **English**: What is the XOR rule?
- Options: A. Equal bits give 1  B. Equal bits give 0, different bits give 1  C. Always 1  D. Always 0
- Answer: **B** · XOR is self-inverse, identity-preserving and commutative, so A⊕K⊕K=A — the same operation encrypts and decrypts, from Vernam to AES AddRoundKey.

13. **中文**：罗塞塔石碑上有几种文字？
- 选项：A. 1 种  B. 2 种  C. 3 种  D. 4 种
- 答案：**C** · 象形文、世俗体、古希腊文三语对照。

   **English**: How many scripts are on the Rosetta Stone?
- Options: A. 1  B. 2  C. 3  D. 4
- Answer: **C** · Hieroglyphs, Demotic, and Ancient Greek side by side.

14. **中文**：「密钥」的作用是？
- 选项：A. 控制加解密方式  B. 显示明文  C. 压缩数据  D. 美化界面
- 答案：**A** · 柯克霍夫原则：假设敌人完全了解算法，安全性只系于密钥——所以算法公开、密钥保密是现代密码的第一戒律。

   **English**: What does the key do?
- Options: A. Controls how encryption/decryption works  B. Shows the plaintext  C. Compresses data  D. Beautifies the UI
- Answer: **A** · Kerckhoffs's principle: assume the enemy knows the algorithm — security rests entirely on key secrecy, cryptography's first rule.

15. **中文**：「加密」的本质是什么？
- 选项：A. 压缩数据  B. 删除数据  C. 转换数据  D. 用密钥把明文变成密文
- 答案：**D** · 加密是受密钥控制的可逆变换。

   **English**: What is encryption at its core?
- Options: A. Compressing data  B. Deleting data  C. Transforming data  D. Turning plaintext into ciphertext under a key
- Answer: **D** · Encryption is a reversible transformation controlled by a key.

16. **中文**：Kasiski 检验法用来判断什么？
- 选项：A. 密钥内容  B. 明文长度  C. 维吉尼亚密钥长度  D. 密文长度
- 答案：**C** · 找重复片段间距的最大公约数。

   **English**: What does the Kasiski test reveal?
- Options: A. The key content  B. The plaintext length  C. The Vigenère key length  D. The ciphertext length
- Answer: **C** · It finds repeated fragments and takes the GCD of their spacings.

17. **中文**：Playfair 密码用多大的方阵？
- 选项：A. 4×4  B. 5×5  C. 6×6  D. 3×3
- 答案：**B** · 5×5（I/J 合并），字母成对加密。

   **English**: What grid size does Playfair use?
- Options: A. 4×4  B. 5×5  C. 6×6  D. 3×3
- Answer: **B** · A 5×5 square (I/J combined), encrypting letter pairs.

18. **中文**：ADFGVX 密码由哪两部分组成？
- 选项：A. 6×6 方阵替换 + 列换位  B. 转子 + 插线板  C. 凯撒 + 摩斯  D. 哈希 + 盐
- 答案：**A** · 替换叠加换位的双层加密。

   **English**: Which two parts make up the ADFGVX cipher?
- Options: A. 6×6 square substitution + columnar transposition  B. Rotors + plugboard  C. Caesar + Morse  D. Hash + salt
- Answer: **A** · Substitution stacked on transposition — a double cipher.

19. **中文**：Enigma 加密和解密的关系是？
- 选项：A. 完全不同  B. 需要逆算法  C. 无法解密  D. 相同操作
- 答案：**D** · 同一设置下加密=解密，奇妙对称。

   **English**: How are Enigma encryption and decryption related?
- Options: A. Completely different  B. Needs an inverse algorithm  C. Cannot be decrypted  D. The same operation
- Answer: **D** · With identical settings, encrypting equals decrypting — an eerie symmetry.

20. **中文**：Bombe 是做什么的？
- 选项：A. 加密机  B. 破译 Enigma 的筛选机  C. 摩斯发报机  D. 哈希机
- 答案：**B** · 图灵设计，用 crib 筛转子设置。

   **English**: What was the Bombe for?
- Options: A. Encryption  B. An Enigma-breaking sieve  C. A Morse transmitter  D. A hashing machine
- Answer: **B** · Designed by Turing, it used cribs to sieve rotor settings.

21. **中文**：「Crib」在破译中指？
- 选项：A. 一种密码  B. 一种密钥  C. 已知明文片段  D. 密文碎片
- 答案：**C** · 猜测的明文钩子，如固定的「WETTER」。

   **English**: In codebreaking, a "crib" is …
- Options: A. a type of cipher  B. a type of key  C. a known plaintext fragment  D. a piece of ciphertext
- Answer: **C** · A guessed plaintext hook, like the fixed "WETTER".

22. **中文**：仿射密码 E=ax+b mod 26 中，a 必须满足？
- 选项：A. 与 26 互质  B. 等于 26  C. 小于 b  D. 任意值
- 答案：**A** · 互质才有逆元，才能解密。

   **English**: In the affine cipher E=ax+b mod 26, a must be …
- Options: A. coprime with 26  B. equal to 26  C. less than b  D. anything
- Answer: **A** · Only then does a have an inverse, so decryption works.

23. **中文**：中途岛破译靠的「深度」指？
- 选项：A. 深水炸弹  B. 密码强度  C. 电文长度  D. 同密钥两电文相减
- 答案：**D** · 同一天共享加表，相减抵消密钥。

   **English**: In Midway codebreaking, "depth" means …
- Options: A. depth charges  B. cipher strength  C. message length  D. subtracting two messages sharing a key
- Answer: **D** · Messages sharing the same daily additive; subtracting cancels the key.

24. **中文**：紫密（Purple）的核心结构是？
- 选项：A. 三个转子  B. 双路步进开关  C. 插线板  D. 磁鼓
- 答案：**B** · 六元音路 + 二十辅音路，无转子。

   **English**: What is the core structure of Purple?
- Options: A. Three rotors  B. Two-bank stepping switches  C. A plugboard  D. A drum
- Answer: **B** · Six vowel paths plus twenty consonant paths — no rotors at all.

25. **中文**：VENONA 破译利用了哪个漏洞？
- 选项：A. 密码太弱  B. 密钥太短  C. 一次性密码本被复用  D. 算法公开
- 答案：**C** · 复用密钥流 → 相减抵消 → 读出明文。

   **English**: Which flaw did VENONA exploit?
- Options: A. A weak cipher  B. Keys too short  C. One-time pads reused  D. A public algorithm
- Answer: **C** · Reused key streams → subtract to cancel → read the plaintext.

26. **中文**：哈希函数的特点是？
- 选项：A. 单向不可逆  B. 可逆  C. 输出可还原  D. 需要密钥
- 答案：**A** · 任意输入 → 固定输出，不可逆。

   **English**: What is a property of hash functions?
- Options: A. One-way and irreversible  B. Reversible  C. Output can be restored  D. Needs a key
- Answer: **A** · Any input maps to a fixed-length output; you cannot go back.

27. **中文**：「盐」（Salt）用来防什么？
- 选项：A. 暴力破解密钥  B. 重放攻击  C. 中间人攻击  D. 彩虹表攻击
- 答案：**D** · 口令哈希前加随机值，防预计算表。

   **English**: What does a salt defend against?
- Options: A. Brute-forcing keys  B. Replay attacks  C. Man-in-the-middle attacks  D. Rainbow-table attacks
- Answer: **D** · Adding random data before hashing defeats precomputed tables.

28. **中文**：博多码（Baudot）是几比特编码？
- 选项：A. 3 比特  B. 5 比特  C. 7 比特  D. 8 比特
- 答案：**B** · 5 比特电传码，洛伦兹密文的底层字母表。

   **English**: How many bits does Baudot code use?
- Options: A. 3 bits  B. 5 bits  C. 7 bits  D. 8 bits
- Answer: **B** · A 5-bit teleprinter code — the alphabet under Lorenz ciphertext.

29. **中文**：维吉尼亚密码真正的发明者是？
- 选项：A. 贝拉索（Bellaso）  B. 维吉尼亚  C. 培根  D. 凯撒
- 答案：**A** · 贝拉索 1553 年发明，维吉尼亚 1586 年才描述并因此留名。

   **English**: Who really invented the Vigenère cipher?
- Options: A. Giovan Battista Bellaso  B. Vigenère  C. Bacon  D. Caesar
- Answer: **A** · Bellaso invented it in 1553; Vigenère described it in 1586 and got the credit.

30. **中文**：杰斐逊转轮（M-94）属于哪类？
- 选项：A. 多字母替换圆盘  B. 换位密码  C. 公钥密码  D. 哈希
- 答案：**A** · 多个圆盘转出不同替换表，每行一字母。

   **English**: What kind of device is the Jefferson disk (M-94)?
- Options: A. A polyalphabetic disk cipher  B. A transposition cipher  C. A public-key cipher  D. A hash
- Answer: **A** · Stacked disks rotate to produce fresh alphabets, one letter per row.

31. **中文**：Diffie-Hellman 解决的核心问题是？
- 选项：A. 数据压缩  B. 公开信道协商共享密钥  C. 身份认证  D. 数据加密
- 答案：**B** · 无需秘密通道即可协商密钥，公钥密码开端。

   **English**: What core problem does Diffie-Hellman solve?
- Options: A. Data compression  B. Agreeing a shared key over a public channel  C. Identity authentication  D. Data encryption
- Answer: **B** · Two parties can agree on a key with no secret channel — the dawn of public-key crypto.

32. **中文**：RSA 的安全性基于哪个数学难题？
- 选项：A. 椭圆曲线离散对数  B. 背包问题  C. 大整数分解  D. 离散对数
- 答案：**C** · 大数分解难以逆向，1977 年 RSA 三杰。

   **English**: Which math problem underpins RSA security?
- Options: A. Elliptic-curve discrete log  B. The knapsack problem  C. Integer factorization  D. Discrete logarithm
- Answer: **C** · Factoring large numbers is hard — RSA, 1977.

33. **中文**：Feistel 网络的典型代表是？
- 选项：A. DES  B. AES  C. ChaCha20  D. RSA
- 答案：**A** · Feistel 的天才之处：一半轮函数不需可逆即可整体解密（左右互换迭代）——让加密硬件直接用于解密。AES 改用 SPN，每字节都要可逆替换。

   **English**: Which cipher is the classic Feistel network?
- Options: A. DES  B. AES  C. ChaCha20  D. RSA
- Answer: **A** · DES uses a Feistel structure; AES is an SPN.

34. **中文**：AES 的分组大小是？
- 选项：A. 64 位  B. 32 位  C. 256 位  D. 128 位
- 答案：**D** · 分组固定 128 位；密钥三档决定轮数 10/12/14。Rijndael 原本支持更多块长，标准化时裁剪为最稳妥的单一规格（FIPS-197）。

   **English**: What is the AES block size?
- Options: A. 64 bits  B. 32 bits  C. 256 bits  D. 128 bits
- Answer: **D** · Blocks fixed at 128 bits; the three key sizes set rounds at 10/12/14. FIPS-197 trimmed Rijndael's flexible block sizes to this single robust spec.

35. **中文**：Kerckhoffs 原则主张什么？
- 选项：A. 算法保密  B. 安全只依赖密钥保密  C. 密钥公开  D. 算法越复杂越好
- 答案：**B** · 算法可公开，安全全在密钥。

   **English**: What does Kerckhoffs' principle argue?
- Options: A. The algorithm must be secret  B. Security rests only on key secrecy  C. Keys must be public  D. Complexity equals safety
- Answer: **B** · The algorithm can be public; security rests entirely on the key.

36. **中文**：生日攻击针对的是？
- 选项：A. RSA  B. AES  C. 哈希碰撞  D. 凯撒
- 答案：**C** · 生日悖论：n 位哈希只需约 2^(n/2) 次就有一半概率碰撞——128 位哈希的碰撞强度仅等价 64 位对称密钥，这正是 SHA-1 被弃用的数学背景。

   **English**: What does the birthday attack target?
- Options: A. RSA  B. AES  C. Hash collisions  D. Caesar
- Answer: **C** · By the birthday paradox an n-bit hash collides with ~50% probability after just 2^(n/2) tries — why SHA-1's 160 bits delivered only 80-bit collision strength.

37. **中文**：侧信道攻击利用的是？
- 选项：A. 设备物理泄露  B. 算法数学弱点  C. 弱口令  D. 网络延迟
- 答案：**A** · 算法完美≠实现安全：1996 年 Kocher 的时序攻击破 RSA、2005 年 Bernstein 用缓存计时破 AES——密码学工程必须「恒定时间」编写。

   **English**: What does a side-channel attack exploit?
- Options: A. Physical leakage from the device  B. Mathematical weaknesses  C. Weak passwords  D. Network latency
- Answer: **A** · Perfect algorithms do not mean secure implementations: Kocher's 1996 timing attack broke RSA, Bernstein's 2005 cache timing hit AES — real code must run in constant time.

38. **中文**：已知明文攻击（KPA）需要什么？
- 选项：A. 只有密文  B. 选择密文  C. 解密预言机  D. 明文-密文对
- 答案：**D** · 比对已知对推密钥或算法。

   **English**: What does a known-plaintext attack need?
- Options: A. Ciphertext only  B. Chosen ciphertexts  C. A decryption oracle  D. Plaintext-ciphertext pairs
- Answer: **D** · Comparing known pairs to deduce the key or system.

39. **中文**：Colossus 的用途是？
- 选项：A. 破译 Enigma  B. 破译洛伦兹（Tunny）  C. 加密电报  D. 解数独
- 答案：**B** · 世界第一台可编程电子计算机，差分统计。

   **English**: What was Colossus used for?
- Options: A. Breaking Enigma  B. Breaking Lorenz (Tunny)  C. Encrypting telegrams  D. Solving Sudoku
- Answer: **B** · The world's first programmable electronic computer, doing statistical differencing.

40. **中文**：「完美保密」由谁严格证明？
- 选项：A. 图灵  B. 维吉尼亚  C. 香农  D. 迪菲
- 答案：**C** · 香农《保密系统的通信理论》把密码学从技艺变成科学：「完美保密」要求密钥熵≥明文熵——OTP 恰好满足，也因此永不实用。

   **English**: Who rigorously proved "perfect secrecy"?
- Options: A. Turing  B. Vigenère  C. Shannon  D. Diffie
- Answer: **C** · Shannon proved in 1949 that the OTP is absolutely secure.

41. **中文**：零知识证明的核心是？
- 选项：A. 不泄露秘密证明断言  B. 泄露部分秘密  C. 需要可信第三方  D. 必须线下验证
- 答案：**A** · 证明「我知道密码」却不透露密码。

   **English**: What is the core of a zero-knowledge proof?
- Options: A. Proving a claim without revealing the secret  B. Revealing part of the secret  C. Needing a trusted third party  D. Must verify offline
- Answer: **A** · Prove "I know the password" without revealing the password.

42. **中文**：中间人攻击（MITM）冒充的是？
- 选项：A. 服务器  B. 客户端  C. 证书机构  D. 通信双方
- 答案：**D** · 同时冒充两端，截听或篡改。

   **English**: Who does a man-in-the-middle attack impersonate?
- Options: A. The server  B. The client  C. The certificate authority  D. Both parties
- Answer: **D** · It pretends to be both ends, intercepting or altering traffic.

43. **中文**：SSL/TLS 握手后，数据用什么加密传输？
- 选项：A. 公钥加密整条消息  B. 对称加密  C. OTP  D. 摩斯
- 答案：**B** · 握手协商对称密钥，之后用快速对称加密传数据。

   **English**: After the SSL/TLS handshake, how is data encrypted?
- Options: A. Public-key for the whole message  B. Symmetric encryption  C. OTP  D. Morse
- Answer: **B** · The handshake agrees a symmetric key; bulk data then flows under fast symmetric encryption.

44. **中文**：流密码（如 RC4）与分组密码的区别？
- 选项：A. 逐比特/字节加密  B. 成块加密  C. 无需密钥  D. 不可逆
- 答案：**A** · 流密码按比特流处理，分组密码按固定块处理。

   **English**: How does a stream cipher (e.g. RC4) differ from a block cipher?
- Options: A. Encrypts bit by bit  B. Encrypts in blocks  C. Needs no key  D. Is irreversible
- Answer: **A** · Stream ciphers process a bitstream; block ciphers process fixed-size blocks.

45. **中文**：Diffie-Hellman 公开交换的是什么？
- 选项：A. 私钥  B. 最终密钥  C. 中间数  D. 密文
- 答案：**C** · 双方交换公开中间数，各自算出相同共享密钥。

   **English**: What does Diffie-Hellman exchange publicly?
- Options: A. Private keys  B. The final key  C. Intermediate numbers  D. Ciphertext
- Answer: **C** · Parties exchange public intermediates and each derives the same shared secret.

46. **中文**：选择密文攻击（CCA）中攻击者能？
- 选项：A. 只拿密文  B. 选择密文并获取解密  C. 选择明文  D. 获取密钥
- 答案：**B** · CCA 中攻击者可以任意解密服务（除目标密文）：裸 RSA/OAEP 缺失都会被「解密神谕」击穿——所以真实方案必须加填充与完整性保护。

   **English**: In a chosen-ciphertext attack (CCA), the attacker can …
- Options: A. only get ciphertexts  B. choose ciphertexts and obtain decryptions  C. choose plaintexts  D. obtain the key
- Answer: **B** · The attacker holds a decryption oracle for everything except the challenge: raw RSA shatters instantly, so real schemes add padding plus integrity (OAEP, KEM-DEM).

47. **中文**：同态加密允许……
- 选项：A. 解密他人数据  B. 共享密钥  C. 直接对密文做运算  D. 绕过密钥
- 答案：**C** · 密文运算结果=明文运算结果，隐私计算核心。

   **English**: Homomorphic encryption allows …
- Options: A. decrypting others' data  B. sharing keys  C. computing directly on ciphertexts  D. bypassing keys
- Answer: **C** · Computing on ciphertext equals computing on plaintext — the core of privacy computing.

48. **中文**：后量子密码基于哪类难题？
- 选项：A. 格、编码、多变量  B. 大数分解  C. 椭圆曲线  D. 离散对数
- 答案：**A** · 格（LWE）、哈希、编码、多变量四大类难题均无已知量子多项式算法——Shor 只威胁大数分解与离散对数这两支传统支柱。

   **English**: Which problems does post-quantum crypto rely on?
- Options: A. Lattices, codes, multivariates  B. Factoring  C. Elliptic curves  D. Discrete log
- Answer: **A** · Four hard-problem families resist known quantum attacks — lattices, hashes, codes, multivariate — because Shor threatens only factoring and discrete log.

49. **中文**：GCHQ 的科克斯 1973 年发明了什么？
- 选项：A. DES  B. Enigma  C. 摩斯  D. 与 RSA 等价的算法
- 答案：**D** · 科克斯 1973 年的内部报告已给出与 RSA 等价的方案；因涉密不能发表，优先权之争直到 1997 年解密才尘埃落定——Ellis/Cocks/Wilkinson 三人组被正式追认。

   **English**: What did GCHQ's Clifford Cocks invent in 1973?
- Options: A. DES  B. Enigma  C. Morse  D. An algorithm equivalent to RSA
- Answer: **D** · Secretly four years ahead of RSA; declassified only in 1997.

50. **中文**：中途相遇攻击破解什么最有效？
- 选项：A. 单重加密  B. 双重加密  C. 哈希  D. 流密码
- 答案：**B** · 两端匹配中间值，2DES 因此不安全。

   **English**: What does a meet-in-the-middle attack break best?
- Options: A. Single encryption  B. Double encryption  C. Hashes  D. Stream ciphers
- Answer: **B** · Matching intermediate values from both ends is why 2DES is insecure.

51. **中文**：彩虹表（Rainbow Table）是？
- 选项：A. 一种密码  B. 一种密钥  C. 预计算哈希链表  D. 物理设备
- 答案：**C** · 加速反查哈希，加盐可防。

   **English**: A rainbow table is …
- Options: A. a cipher  B. a key  C. a precomputed hash-chain table  D. a physical device
- Answer: **C** · It speeds up reversing hashes; salting defeats it.

52. **中文**：量子密码（QKD）的安全性基于？
- 选项：A. 量子不可克隆定理  B. 大数分解  C. 椭圆曲线  D. 随机数
- 答案：**A** · 不可克隆定理保证未知量子态无法复制：Eve 测量 BB84 光子必然引入约 25% 误码率，Alice/Bob 抽样比对即可抓贼——物理定律本身当哨兵。

   **English**: What is QKD security based on?
- Options: A. The quantum no-cloning theorem  B. Factoring  C. Elliptic curves  D. Random numbers
- Answer: **A** · The no-cloning theorem forbids copying unknown quantum states: any BB84 eavesdropper injects ~25% errors that Alice and Bob catch by sampling — physics itself stands guard.

53. **中文**：Merkle 树主要用于？
- 选项：A. 加密  B. 压缩  C. 传输  D. 区块链与分布式系统
- 答案：**D** · 叶子是数据块的哈希、父节点是子节点拼接的哈希：验证一笔交易只需 log(n) 个兄弟哈希——比特币区块头与 Certificate Transparency 都靠它。

   **English**: What are Merkle trees mainly for?
- Options: A. Encryption  B. Compression  C. Transmission  D. Blockchains and distributed systems
- Answer: **D** · Leaves hash data blocks and parents hash their children: verifying one item needs only log(n) sibling hashes — the backbone of Bitcoin headers and Certificate Transparency.

54. **中文**：「非秘密加密」概念由谁提出？
- 选项：A. 科克斯  B. 埃利斯  C. 迪菲  D. 香农
- 答案：**B** · GCHQ 埃利斯 1969 年，公钥隐秘先驱。

   **English**: Who conceived "non-secret encryption"?
- Options: A. Cocks  B. Ellis  C. Diffie  D. Shannon
- Answer: **B** · GCHQ's James Ellis in 1969 — the secret pioneer of public keys.

55. **中文**：DES 的 56 位密钥为何受质疑？
- 选项：A. 太复杂  B. 无法实现  C. 过短易暴力破解，疑被 NSA 削弱  D. 无法加密中文
- 答案：**C** · IBM 原版 Lucifer 是 128 位密钥；NSA 参与标准化后缩到 56 位并调整 S 盒。多年后差分分析证实 S 盒反被强化了，但 56 位确实撑不住硬件暴力——1998 年 EFF Deep Crack 22 小时穷举。

   **English**: Why was DES's 56-bit key questioned?
- Options: A. Too complex  B. Impossible to build  C. Too short for brute force, allegedly weakened by the NSA  D. Cannot encrypt Chinese
- Answer: **C** · The original Lucifer had 128 bits; the standard shipped with 56.

56. **中文**：「自动密钥」（Autokey）密码是谁的发明？
- 选项：A. 维吉尼亚  B. 培根  C. 贝拉索  D. 凯撒
- 答案：**A** · 维吉尼亚 1586 年独创，明文延伸为密钥。

   **English**: Who invented the autokey cipher?
- Options: A. Vigenère  B. Bacon  C. Bellaso  D. Caesar
- Answer: **A** · Vigenère in 1586 — plaintext extends the key.

57. **中文**：Bombe 的对角线板是谁加的？
- 选项：A. 图灵  B. 诺克斯  C. 雷耶夫斯基  D. 韦尔奇曼
- 答案：**D** · 提速约十倍，让破译走向日常。

   **English**: Who added the diagonal board to the Bombe?
- Options: A. Turing  B. Knox  C. Rejewski  D. Welchman
- Answer: **D** · It sped the Bombe up about tenfold, making daily breaking practical.

58. **中文**：NIST 后量子标准化主打哪类方案？
- 选项：A. 大数分解  B. 格基密码  C. 椭圆曲线  D. 凯撒
- 答案：**B** · NIST 2024 年定稿 FIPS 203/204/205：ML-KEM（加密）、ML-DSA（签名）、SLH-DSA（哈希签名）——全球系统正按「先加密后签名」次序迁移。

   **English**: Which family dominates NIST's post-quantum standard?
- Options: A. Factoring  B. Lattice-based  C. Elliptic curves  D. Caesar
- Answer: **B** · FIPS 203/204/205 were finalized in 2024: ML-KEM for encryption, ML-DSA and SLH-DSA for signatures — the world migrates encryption first, then signatures.

59. **中文**：「IND-CCA2」安全指什么？
- 选项：A. 自适应选择密文攻击下不可区分  B. 唯密文攻击下不可区分  C. 暴力破解不可行  D. 密钥可公开
- 答案：**A** · IND-CCA2：攻击者持有解密神谕（除挑战密文）仍分不清明文。KEM-DEM 组合+FO 变换是达到它的标准路径——TLS 1.3 的握手目标正是它。

   **English**: What does "IND-CCA2" security mean?
- Options: A. Indistinguishable under adaptive chosen-ciphertext attack  B. Indistinguishable under ciphertext-only attack  C. Brute force infeasible  D. Key may be public
- Answer: **A** · IND-CCA2: the adversary owns a decryption oracle for everything except the challenge and still cannot identify the plaintext — TLS 1.3 targets exactly this.

60. **中文**：Zimmermann 电报为什么能撼动一战？
- 选项：A. 密码太强  B. 内容加密  C. 破译后暴露德国结盟墨西哥  D. 电报太长
- 答案：**C** · 40 号房破译后公开，美国舆论转向参战。

   **English**: Why did the Zimmermann Telegram shake WWI?
- Options: A. The cipher was too strong  B. Its content was encrypted  C. Breaking it exposed Germany's Mexico alliance  D. It was too long
- Answer: **C** · Room 40's break went public and swung US opinion toward war.

61. **中文**：ROT13 的偏移量是多少？
- 选项：A. 3  B. 13  C. 5  D. 26
- 答案：**B** · 13 位对称，加密两次即还原。

   **English**: What is the shift of ROT13?
- Options: A. 3  B. 13  C. 5  D. 26
- Answer: **B** · A shift of 13 is its own inverse: encrypt twice and you are back.

62. **中文**：Atbash 密码的规则是什么？
- 选项：A. 后移三位  B. 点划编码  C. 交换相邻字母  D. 字母表反序替换
- 答案：**D** · A 对 Z、B 对 Y，希伯来古籍中已使用。

   **English**: What is the rule of the Atbash cipher?
- Options: A. Shift by three  B. Use dots and dashes  C. Swap adjacent letters  D. Reverse the alphabet
- Answer: **D** · A maps to Z, B to Y — found in ancient Hebrew texts.

63. **中文**：古希腊的斯巴达棒（Scytale）属于哪类密码？
- 选项：A. 替换密码  B. 公钥密码  C. 换位密码  D. 哈希
- 答案：**C** · 绕棒写字、解下重排，字母不变只换顺序。

   **English**: What kind of cipher is the ancient Greek scytale?
- Options: A. Substitution  B. Public-key  C. Transposition  D. Hash
- Answer: **C** · Text wrapped around a rod and read off — letters keep, order changes.

64. **中文**：隐写术（Steganography）与加密的区别是什么？
- 选项：A. 隐写术隐藏信息的存在  B. 隐写术更安全  C. 隐写术需要密钥  D. 隐写术不可逆
- 答案：**A** · 加密让内容读不懂，隐写让信息根本不被发现。

   **English**: How does steganography differ from encryption?
- Options: A. It hides that a message exists  B. It is stronger  C. It needs a key  D. It is irreversible
- Answer: **A** · Encryption makes content unreadable; steganography hides its existence.

65. **中文**：对称加密使用什么密钥？
- 选项：A. 一对公钥私钥  B. 一把共享密钥  C. 两把不同密钥  D. 不需要密钥
- 答案：**B** · 对称密码快千倍但密钥分发是死结——两人见面递一次钥匙尚可，千万互联网用户不可能。这个缺口正是 1976 年公钥革命要填的坑。

   **English**: What key does symmetric encryption use?
- Options: A. A public/private pair  B. One shared key  C. Two different keys  D. No key
- Answer: **B** · Symmetric ciphers run ~1000x faster but key distribution is fatal: fine for two spies meeting once, impossible for a billion internet users — the gap public-key crypto filled.

66. **中文**：「密码学」（Cryptography）一词源自希腊语的哪个含义？
- 选项：A. 数字计算  B. 战争密码  C. 石头铭文  D. 隐藏书写
- 答案：**D** · "隐藏的书写"——这个词 1650 年代出现时指的还包括隐写术；今天它专指「第三方读不懂、合法接收方能读」的变换科学。

   **English**: The word "cryptography" comes from Greek meaning …
- Options: A. Number calculation  B. War code  C. Stone carving  D. Hidden writing
- Answer: **D** · 'Hidden writing' — coined in the 1650s it even covered steganography; today it names transformations unreadable to third parties yet readable by the receiver.

67. **中文**：SHA-256 的输出长度是多少？
- 选项：A. 128 位  B. 512 位  C. 256 位  D. 64 位
- 答案：**C** · 任意输入都映射为固定的 256 位摘要。

   **English**: How long is the SHA-256 output?
- Options: A. 128 bits  B. 512 bits  C. 256 bits  D. 64 bits
- Answer: **C** · Any input maps to a fixed 256-bit digest.

68. **中文**：「Nonce」（现时数）指什么？
- 选项：A. 只用一次的数  B. 固定密码  C. 公钥  D. 哈希值
- 答案：**A** · Nonce 保证同一次会话中输入永不重复：CTR/GCM 计数器复用会泄露明文异或甚至认证密钥——「nonce 重用」是流密码的头号事故原因。

   **English**: What is a "nonce"?
- Options: A. A number used only once  B. A fixed password  C. A public key  D. A hash value
- Answer: **A** · A number used ONCE, to prevent replay attacks.

69. **中文**：猪圈密码（Pigpen）用什么表示字母？
- 选项：A. 点与划  B. 方格与符号  C. 数字  D. 颜色
- 答案：**B** · 把字母放进网格，用边框形状表示。

   **English**: What does the pigpen cipher use to represent letters?
- Options: A. Dots and dashes  B. Grid shapes and symbols  C. Numbers  D. Colors
- Answer: **B** · Letters sit in grids and are shown by their border shapes.

70. **中文**：公钥密码（非对称加密）使用几把密钥？
- 选项：A. 一把  B. 三把  C. 两把（公钥 + 私钥）  D. 零把
- 答案：**C** · 两把钥匙数学相关但不可互推（基于陷门难题）：公钥像挂锁人人可锁，私钥像唯一的钥匙——1977 年这一对概念重塑了整个保密通信。

   **English**: How many keys does public-key (asymmetric) encryption use?
- Options: A. One  B. Three  C. Two (public + private)  D. Zero
- Answer: **C** · The public key encrypts; the private key decrypts.

71. **中文**：波利比奥斯方阵（Polybius square）如何表示字母？
- 选项：A. 行列坐标（如 23）  B. 点与划  C. 图形  D. 随机数
- 答案：**A** · 5×5 方格中，字母用行号列号定位。

   **English**: How does the Polybius square represent letters?
- Options: A. Row-column coordinates (e.g. 23)  B. Dots and dashes  C. Pictures  D. Random numbers
- Answer: **A** · In a 5×5 grid, each letter is a row-and-column coordinate.

72. **中文**：希尔密码（Hill cipher）用什么数学工具加密？
- 选项：A. 质因数分解  B. 椭圆曲线  C. 矩阵乘法  D. 斐波那契数列
- 答案：**C** · 明文分组乘以密钥矩阵，Lester Hill 1929 年发表。

   **English**: Which math tool does the Hill cipher use?
- Options: A. Prime factorization  B. Elliptic curves  C. Matrix multiplication  D. Fibonacci numbers
- Answer: **C** · Plaintext blocks are multiplied by a key matrix; published by Lester Hill in 1929.

73. **中文**：Bifid 密码的关键技巧是什么？
- 选项：A. 矩阵求逆  B. 先把坐标拆分再重组（分馏）  C. 换位  D. 异或
- 答案：**B** · 每个字母拆成行、列坐标，混合后再成对还原。

   **English**: What is the key trick of the Bifid cipher?
- Options: A. Matrix inversion  B. Fractionation — split then recombine coordinates  C. Transposition  D. XOR
- Answer: **B** · Each letter splits into row and column, mixed and re-paired.

74. **中文**：谁发明了阿尔伯蒂密码盘（Alberti disk）？
- 选项：A. 凯撒  B. 维吉尼亚  C. 图灵  D. 阿尔伯蒂（Alberti）
- 答案：**D** · 1466 年，第一个多表替换加密装置。

   **English**: Who invented the Alberti cipher disk?
- Options: A. Caesar  B. Vigenère  C. Turing  D. Leon Battista Alberti
- Answer: **D** · In 1466 — the first polyalphabetic encryption device.

75. **中文**：列换位密码（Columnar transposition）中密钥的作用是什么？
- 选项：A. 决定列的读取顺序  B. 改变字母表  C. 生成随机数  D. 求逆矩阵
- 答案：**A** · 按密钥排定的列顺序读写，字母不变只重排。

   **English**: In a columnar transposition cipher, what does the key do?
- Options: A. Sets the column reading order  B. Changes the alphabet  C. Generates randomness  D. Inverts the matrix
- Answer: **A** · It orders the columns for reading; letters change only position.

76. **中文**：卡尔达诺格栅（Cardan grille）是如何工作的？
- 选项：A. 替换字母  B. 转动转子  C. 透过挖洞模板读字  D. 求模运算
- 答案：**C** · 透过格栅孔读出字母，换一个方向再读。

   **English**: How does a Cardan grille work?
- Options: A. Substitutes letters  B. Rotates rotors  C. Reads letters through holes in a mask  D. Takes a modulus
- Answer: **C** · Letters are read through holes in a mask, then the mask turns.

77. **中文**：路易十四的「大密码」（Grand Chiffre）为何著名？
- 选项：A. 第一个公钥密码  B. 两百多年无人能破  C. 只用一次  D. 从未被使用
- 答案：**B** · 罗西尼奥父子设计，1890 年代才被巴泽里斯破译。

   **English**: Why is Louis XIV's Great Cipher famous?
- Options: A. It was the first public-key cipher  B. It stayed unbroken for over 200 years  C. It was used once  D. It was never used
- Answer: **B** · Built by the Rossignols and unbroken until Étienne Bazeries in the 1890s.

78. **中文**：书密码（Book cipher）的「密钥」是什么？
- 选项：A. 一串数字  B. 一把锁  C. 一张地图  D. 一本约定的书
- 答案：**D** · 用页码、行号、字序号定位明文，贝尔宝藏传说即此。

   **English**: What is the "key" of a book cipher?
- Options: A. A number string  B. A lock  C. A map  D. An agreed-upon book
- Answer: **D** · Page, line and word positions point to plaintext — the Beale ciphers legend.

79. **中文**：二战中纳瓦霍语密码通话员（Navajo code talkers）的作用是什么？
- 选项：A. 用鲜为人知的语言传递军令  B. 操作 Enigma  C. 破译日本密码  D. 编写哈希算法
- 答案：**A** · 纳瓦霍语外人几乎听不懂，实战中未被破译。

   **English**: What did the Navajo code talkers do in WWII?
- Options: A. Passed orders in a little-known language  B. Operated Enigma  C. Broke Japanese ciphers  D. Wrote hash algorithms
- Answer: **A** · Navajo was nearly impossible for outsiders — and was never broken.

80. **中文**：Playfair 密码的真正发明者是谁？
- 选项：A. 普莱费尔（Playfair）  B. 惠斯通（Wheatstone）  C. 凯撒  D. 培根
- 答案：**B** · 惠斯通发明，因普莱费尔男爵推广而冠其名。

   **English**: Who actually invented the Playfair cipher?
- Options: A. Playfair  B. Charles Wheatstone  C. Caesar  D. Bacon
- Answer: **B** · Wheatstone invented it; Lord Playfair popularized it and lent his name.

81. **中文**：ECB 模式的最大弱点是什么？
- 选项：A. 太慢  B. 相同明文块产生相同密文块  C. 需要公钥  D. 无法解密
- 答案：**B** · 密文重复泄露模式，著名的 ECB 企鹅图即此。

   **English**: What is ECB mode's biggest weakness?
- Options: A. It is too slow  B. Identical plaintext blocks yield identical ciphertext blocks  C. It needs a public key  D. It cannot decrypt
- Answer: **B** · Repeated ciphertext leaks patterns — the famous ECB penguin.

82. **中文**：初始化向量（IV）在分组密码模式中的作用是什么？
- 选项：A. 使相同明文每次加密结果不同  B. 生成公钥  C. 压缩数据  D. 求哈希
- 答案：**A** · 给第一个块一个随机起点，防止模式泄露。

   **English**: What does an initialization vector (IV) do in block modes?
- Options: A. Makes identical plaintext encrypt differently each time  B. Generates public keys  C. Compresses data  D. Computes hashes
- Answer: **A** · It gives the first block a fresh starting point, hiding patterns.

83. **中文**：填充预言攻击（Padding oracle）利用了哪一点？
- 选项：A. 密钥泄露  B. 明文直接可见  C. 解密方对填充错误的不同反应  D. 哈希碰撞
- 答案：**C** · 借「填充是否合法」的反馈逐字节解出明文（如 Bleichenbacher）。

   **English**: What does a padding-oracle attack exploit?
- Options: A. A leaked key  B. Directly visible plaintext  C. The decryptor's reaction to padding errors  D. Hash collisions
- Answer: **C** · It uses valid-vs-invalid padding feedback to decrypt byte by byte (e.g. Bleichenbacher).

84. **中文**：重合指数（Index of Coincidence）用于判断什么？
- 选项：A. 哈希强度  B. 密钥内容  C. 公钥大小  D. 文本是否多表加密及密钥长度
- 答案：**D** · 弗里德曼提出，测字母分布是否被多表抹平。

   **English**: What does the Index of Coincidence measure?
- Options: A. Hash strength  B. Key content  C. Public-key size  D. Whether text is polyalphabetic / its key length
- Answer: **D** · Friedman's measure of whether a polyalphabetic cipher has flattened letter frequencies.

85. **中文**：谁在 1932 年率先破译了 Enigma？
- 选项：A. 马里安·雷耶夫斯基  B. 图灵  C. 香农  D. 凯撒
- 答案：**A** · 波兰数学家雷耶夫斯基用数学与「特征法」先行破译。

   **English**: Who first broke Enigma, in 1932?
- Options: A. Marian Rejewski  B. Turing  C. Shannon  D. Caesar
- Answer: **A** · Polish mathematician Rejewski broke it first with pure math and characteristics.

86. **中文**：AES 标准选用的算法原名是什么？
- 选项：A. Lucifer  B. Rijndael  C. Twofish  D. Serpent
- 答案：**B** · 达门与莱门设计，2001 年胜出成为 AES。

   **English**: What is the original name of the AES algorithm?
- Options: A. Lucifer  B. Rijndael  C. Twofish  D. Serpent
- Answer: **B** · Designed by Daemen and Rijmen; it won and became AES in 2001.

87. **中文**：椭圆曲线密码（ECC）相比 RSA 的优势是什么？
- 选项：A. 更快但更不安全  B. 无需密钥  C. 更短密钥达到同等强度  D. 输出更长
- 答案：**C** · 短密钥即可抵抗离散对数，移动端更省资源。

   **English**: What advantage does ECC have over RSA?
- Options: A. Faster but weaker  B. No key needed  C. Shorter keys for equal strength  D. Longer outputs
- Answer: **C** · Short keys withstand discrete-log attacks, saving resources on devices.

88. **中文**：3DES 的加密顺序通常是什么？
- 选项：A. 加密-加密-加密  B. 解密-解密-解密  C. 三个不同密钥  D. 加密-解密-加密
- 答案：**D** · K=E1,E2,E3 时中间用解密：设 K2=K1 即退化为单 DES——向后兼容的优雅设计，同时把有效强度提到 112 位（ meet-in-the-middle 减半）。

   **English**: What is the usual 3DES operation order?
- Options: A. Encrypt-encrypt-encrypt  B. Decrypt-decrypt-decrypt  C. Three different keys  D. Encrypt-decrypt-encrypt
- Answer: **D** · The E-D-E structure keeps 3DES compatible with single DES.

89. **中文**：HMAC 的主要用途是什么？
- 选项：A. 验证消息完整性与真实性  B. 加密大文件  C. 生成公钥  D. 压缩
- 答案：**A** · 带密钥的哈希，确认消息未被篡改且来自持钥方。

   **English**: What is HMAC mainly used for?
- Options: A. Verifying message integrity and authenticity  B. Encrypting large files  C. Generating public keys  D. Compression
- Answer: **A** · A keyed hash that confirms a message was not altered and came from the key holder.

90. **中文**：差分密码分析（Differential cryptanalysis）是由谁公开的？
- 选项：A. 图灵  B. 比哈姆与沙米尔  C. 香农  D. 凯撒
- 答案：**B** · 1990 年公开，DES 设计者其实早已考虑。

   **English**: Who published differential cryptanalysis?
- Options: A. Turing  B. Biham and Shamir  C. Shannon  D. Caesar
- Answer: **B** · Published in 1990; the DES designers had actually known about it.

91. **中文**：香农提出的「混淆与扩散」分别指什么？
- 选项：A. 混淆=密钥与密文关系复杂化，扩散=明文影响散布到整个密文  B. 混淆=加密，扩散=解密  C. 混淆=换位，扩散=替换  D. 两者都指增加密钥长度
- 答案：**A** · 1949 年提出，是现代分组密码设计的基石。

   **English**: "Confusion and diffusion" mean …
- Options: A. Confusion obscures key–ciphertext links; diffusion spreads plaintext influence  B. Confusion encrypts; diffusion decrypts  C. Confusion transposes; diffusion substitutes  D. Both mean longer keys
- Answer: **A** · Shannon's 1949 principles — the foundation of modern block-cipher design.

92. **中文**：香农的「唯一解距离」（Unicity distance）指什么？
- 选项：A. 密钥长度  B. 唯一确定密钥所需的最短密文长度  C. 破解时间  D. 密文冗余
- 答案：**B** · 密文多到足以排除其他所有密钥为止。

   **English**: What is Shannon's unicity distance?
- Options: A. The key length  B. The minimum ciphertext length to uniquely determine the key  C. The break time  D. Ciphertext redundancy
- Answer: **B** · The amount of ciphertext needed to rule out every other key.

93. **中文**：Shor 算法威胁哪类密码？
- 选项：A. 对称密码  B. 哈希  C. 基于大数分解/离散对数的 RSA 与 ECC  D. 凯撒
- 答案：**C** · 量子多项式时间分解大数，RSA/ECC 将失效。

   **English**: Which ciphers does Shor's algorithm threaten?
- Options: A. Symmetric ciphers  B. Hashes  C. RSA and ECC (factoring / discrete log)  D. Caesar
- Answer: **C** · Quantum factoring breaks RSA and ECC in polynomial time.

94. **中文**：Grover 算法对 AES-256 的影响是什么？
- 选项：A. 彻底破解  B. 无影响  C. 密钥减半为 64 位  D. 安全强度降到约 128 位
- 答案：**D** · 二次加速穷举，256 位密钥只剩约 128 位安全性。

   **English**: How does Grover's algorithm affect AES-256?
- Options: A. Breaks it completely  B. No effect  C. Halves the key to 64 bits  D. Drops its security to ~128 bits
- Answer: **D** · A quadratic speedup leaves a 256-bit key with only ~128 bits of security.

95. **中文**：「雪崩效应」（Avalanche effect）描述的是什么？
- 选项：A. 改一个输入位，约一半输出位翻转  B. 密钥越长越好  C. 密文越长越好  D. 速度越快越好
- 答案：**A** · 理想密码要求微小改动引发半数比特变化。

   **English**: What does the avalanche effect describe?
- Options: A. Flipping one input bit changes about half the output bits  B. Longer keys are better  C. Longer ciphertext is better  D. Faster is better
- Answer: **A** · A good cipher turns a one-bit change into roughly half the bits flipping.

96. **中文**：前向保密（Forward secrecy）保证什么？
- 选项：A. 密钥永不泄露  B. 长期密钥泄露也不危及过去会话  C. 算法永远保密  D. 密文不可重复
- 答案：**B** · 每次会话用临时密钥，事后无法回溯解密。

   **English**: What does forward secrecy guarantee?
- Options: A. Keys never leak  B. Past sessions stay safe even if the long-term key leaks  C. Algorithms stay secret  D. Ciphertext never repeats
- Answer: **B** · Ephemeral per-session keys mean old traffic cannot be decrypted later.

97. **中文**：IND-CPA 安全意味着什么？
- 选项：A. 密钥不可破解  B. 密文长度隐藏  C. 选择明文攻击下密文不可区分  D. 算法保密
- 答案：**C** · 攻击者无法区分两条加密消息，故需随机化加密。

   **English**: What does IND-CPA security mean?
- Options: A. The key is unbreakable  B. Ciphertext length is hidden  C. Ciphertexts are indistinguishable under chosen-plaintext attack  D. The algorithm is secret
- Answer: **C** · An attacker cannot tell two encrypted messages apart — hence randomized encryption.

98. **中文**：第一个量子密钥分发（QKD）协议是？
- 选项：A. RSA  B. AES  C. TLS  D. BB84
- 答案：**D** · 贝内特与布拉萨尔 1984 年提出，用光子偏振分发密钥。

   **English**: What was the first quantum key distribution protocol?
- Options: A. RSA  B. AES  C. TLS  D. BB84
- Answer: **D** · Bennett and Brassard, 1984 — key distribution via photon polarization.

99. **中文**：「带误差学习」（LWE, Learning With Errors）是什么？
- 选项：A. 后量子密码所依赖的格难题  B. 一种对称密码  C. 哈希函数  D. 换位密码
- 答案：**A** · 解含噪声的线性方程组极难，是格密码的基础。

   **English**: What is Learning With Errors (LWE)?
- Options: A. A lattice problem underpinning post-quantum crypto  B. A symmetric cipher  C. A hash function  D. A transposition cipher
- Answer: **A** · Solving noisy linear equations is hard — the basis of lattice cryptography.

100. **中文**：Argon2 是针对什么场景设计的算法？
- 选项：A. 流加密  B. 抗 GPU 暴力的口令哈希  C. 公钥生成  D. 数据压缩
- 答案：**B** · 内存困难设计，2015 年 PHC 竞赛冠军。

   **English**: What is Argon2 designed for?
- Options: A. Stream encryption  B. GPU-resistant password hashing  C. Public-key generation  D. Data compression
- Answer: **B** · Memory-hard by design — winner of the 2015 PHC competition.

101. **中文**：BB84 协议中，Alice 与 Bob 为什么要公开比对「基」？
- 选项：A. 为了压缩数据  B. 只保留基一致的位作为共享密钥  C. 为了加速传输  D. 为了加密密钥
- 答案：**B** · 基匹配的测量结果才可靠，构成筛选密钥；比对本身不泄露比特值。

   **English**: In BB84, why do Alice and Bob publicly compare bases?
- Options: A. To compress data  B. To keep only matching-basis bits as the shared key  C. To speed up transmission  D. To encrypt the key
- Answer: **B** · Measurements with matching bases are reliable and form the sifted key; comparing bases reveals nothing about bit values.

102. **中文**：BB84 的安全性由什么保证？
- 选项：A. 密钥足够长  B. 算法未公开  C. 量子力学的测不准与不可克隆  D. 超高速计算
- 答案：**C** · 窃听必扰动量子态并留下误码指纹——安全基于物理定律而非算力。

   **English**: What guarantees BB84's security?
- Options: A. Long keys  B. A secret algorithm  C. Quantum uncertainty and no-cloning  D. Faster computers
- Answer: **C** · Eavesdropping disturbs quantum states and leaves error fingerprints — security rests on physics, not computing power.

103. **中文**：威斯纳约 1970 年写成的《共轭编码》最初遭遇了什么？
- 选项：A. 被多家期刊拒稿、沉睡十余年  B. 立即获得专利  C. 登上《自然》封面  D. 被 NSA 立即采用
- 答案：**A** · 思想过于超前屡遭拒稿，直到贝内特与布拉萨德重新发现才催生 BB84。

   **English**: What first became of Wiesner's "Conjugate Coding" (c. 1970)?
- Options: A. Rejected by journals, dormant for a decade  B. Instantly patented  C. On the cover of Nature  D. Adopted by the NSA at once
- Answer: **A** · Too far ahead of its time; Bennett and Brassard rediscovered it and BB84 was born.

104. **中文**：Shor 算法把大数分解的计算复杂度降到哪一档？
- 选项：A. 指数级  B. O(n²)  C. 对数级  D. 多项式级
- 答案：**D** · 多项式时间分解意味着经典难解问题在量子机上可解。

   **English**: To what complexity class does Shor's algorithm reduce factoring?
- Options: A. Exponential  B. O(n²)  C. Logarithmic  D. Polynomial
- Answer: **D** · Polynomial-time factoring means classically hard problems become solvable on a quantum machine.

105. **中文**：「先截获、后解密」（Harvest now, decrypt later）威胁的是？
- 选项：A. 今天的对称密码  B. 保密期跨越数十年的数据  C. 哈希函数  D. 所有摩斯通信
- 答案：**B** · 对手囤积今日密文等量子机成熟回放解读——长寿命机密现在就要后量子保护。

   **English**: Whom does "harvest now, decrypt later" threaten?
- Options: A. Today's symmetric ciphers  B. Data whose secrecy must span decades  C. Hash functions  D. All Morse traffic
- Answer: **B** · Adversaries warehouse today's ciphertext for tomorrow's quantum machines — long-lived secrets need post-quantum protection now.

106. **中文**：2022 年 SIKE 在后量子竞选中被怎样的攻击击倒？
- 选项：A. 超级计算机穷举  B. 量子计算机演示  C. 一台普通笔记本约一小时  D. 侧信道监听
- 答案：**C** · Castryck-Decru 用经典数学攻击在笔记本上破译——公开评审的价值所在。

   **English**: How was SIKE broken in the 2022 NIST tournament?
- Options: A. Supercomputer brute force  B. A live quantum computer  C. An ordinary laptop in about an hour  D. Side-channel listening
- Answer: **C** · The Castryck–Decru classical attack felled it on a laptop — proof open vetting works.

107. **中文**：NIST 后量子标准 ML-KEM（FIPS 203）源自哪个提交方案？
- 选项：A. CRYSTALS-Kyber  B. SIKE  C. Rainbow  D. SPHINCS+
- 答案：**A** · Kyber 经标准化成为 ML-KEM；SPHINCS+ 则演化为 SLH-DSA（FIPS 205）。

   **English**: Which submission became NIST's ML-KEM (FIPS 203)?
- Options: A. CRYSTALS-Kyber  B. SIKE  C. Rainbow  D. SPHINCS+
- Answer: **A** · Kyber was standardized as ML-KEM; SPHINCS+ became SLH-DSA (FIPS 205).

108. **中文**：格密码为何被认为能抵抗量子攻击？
- 选项：A. 密钥特别长  B. 其核心难题尚无高效量子解法（Shor 无用武之地）  C. 它运行更快  D. 它不使用数学
- 答案：**B** · 最短向量等问题没有已知的量子多项式时间算法。

   **English**: Why are lattice ciphers considered quantum-resistant?
- Options: A. Their keys are longer  B. Their core problems lack known efficient quantum attacks — Shor has no purchase  C. They run faster  D. They use no math
- Answer: **B** · Shortest-vector-type problems have no known polynomial-time quantum algorithms.

109. **中文**：2017 年实现星地量子密钥分发、把 BB84 搬上太空的卫星是？
- 选项：A. 旅行者一号  B. 哈勃  C. 北斗三号  D. 墨子号
- 答案：**D** · 「墨子号」2016 年升空，次年完成星地 QKD 与洲际量子保密通话。

   **English**: Which satellite achieved space-to-ground QKD in 2017, lifting BB84 into orbit?
- Options: A. Voyager 1  B. Hubble  C. BeiDou-3  D. Micius
- Answer: **D** · Launched in 2016, Micius completed space-to-ground QKD and intercontinental quantum-secured calls.

110. **中文**：面对 Grover 算法，对称密码的标准对策是？
- 选项：A. 换用公钥密码  B. 放弃加密  C. 将密钥长度加倍（如 AES-256）  D. 减少加密轮数
- 答案：**C** · √N 加速只需密钥加倍抵消——AES-256 因此依然安全。

   **English**: Against Grover's algorithm, what is the standard countermeasure for symmetric ciphers?
- Options: A. Switch to public-key crypto  B. Abandon encryption  C. Double the key length (e.g., AES-256)  D. Reduce cipher rounds
- Answer: **C** · A √N speedup is neutralized by doubling the key — AES-256 stays secure.

111. **中文**：收到「中奖 80 万，先付 3000 手续费」的邮件，最该警觉的信号是？
- 选项：A. 领奖先交钱  B. 邮件里有感叹号  C. 对方很热情  D. 金额太大
- 答案：**A** · 「先付费后领奖」是经典骗局铁律——真奖品从不向赢家收费。

   **English**: An email says you won $800,000 but must pay a $3000 fee first. The biggest red flag?
- Options: A. Pay-first prize  B. Exclamation marks  C. Friendly tone  D. The large amount
- Answer: **A** · Pay-to-claim is the classic scam rule — real prizes never charge the winner.

112. **中文**：隐写术与加密的根本区别是？
- 选项：A. 隐写更快  B. 加密用密钥而隐写不用  C. 隐写隐藏「存在秘密」这件事，加密只隐藏内容  D. 二者没有区别
- 答案：**C** · 加密把信锁进保险箱，隐写把信画成墙纸——被看见的资格都没有。

   **English**: The fundamental difference between steganography and encryption?
- Options: A. Stego is faster  B. Encryption needs keys, stego doesn't  C. Stego hides that a secret EXISTS; encryption only hides content  D. No difference
- Answer: **C** · Encryption locks the letter in a safe; steganography paints it into wallpaper.

113. **中文**：k=3 的门限秘密分享方案中，拿到几份份额才能还原秘密？
- 选项：A. 任意 1 份  B. 至少 3 份  C. 全部 n 份  D. 2 份就够
- 答案：**B** · 门限 k 的含义：少于 k 份在信息论上毫无线索，k 点唯一确定 k−1 次多项式。

   **English**: In a k=3 threshold secret-sharing scheme, how many shares recover the secret?
- Options: A. Any 1 share  B. At least 3  C. All n shares  D. Just 2
- Answer: **B** · Threshold semantics: fewer than k gives zero information; k points fix a unique degree-(k−1) polynomial.

114. **中文**：老板「紧急」要求你买礼品卡并拍照发卡号密码——这最可能是？
- 选项：A. 冒充上司的诈骗  B. 新的报销流程  C. 公司福利活动  D. 合规的采购请求
- 答案：**A** · 礼品卡不可追回+制造「不能电话核实」的情境=CEO 诈骗的标准剧本。

   **English**: Your boss "urgently" asks you to buy gift cards and photograph the codes. Most likely?
- Options: A. CEO-impersonation fraud  B. A new reimbursement flow  C. A company perk  D. Compliant procurement
- Answer: **A** · Irreversible gift cards plus "can't verify by phone" pressure is the standard CEO-fraud script.

115. **中文**：中国商用分组密码标准 SM4 的分组与密钥长度是？
- 选项：A. 64 位 / 64 位  B. 128 位 / 256 位  C. 256 位 / 128 位  D. 128 位 / 128 位
- 答案：**D** · SM4（GB/T 32907-2016，曾用名 SMS4）：128 位分组与密钥、32 轮非平衡 Feistel。

   **English**: China's commercial block cipher SM4 uses which block/key sizes?
- Options: A. 64/64 bits  B. 128/256 bits  C. 256/128 bits  D. 128/128 bits
- Answer: **D** · SM4 (GB/T 32907-2016, once SMS4): 128-bit blocks and keys, 32 unbalanced-Feistel rounds.

116. **中文**：SM4 解密时轮密钥的使用顺序是？
- 选项：A. 与加密相同  B. 反序使用（rk31→rk0）  C. 只用偶数编号  D. 每轮重新扩展
- 答案：**B** · Feistel 结构的美德：解密与加密同构，仅轮密钥反序。

   **English**: In what order does SM4 decryption use round keys?
- Options: A. Same as encryption  B. Reversed (rk31→rk0)  C. Even-numbered only  D. Re-expanded each round
- Answer: **B** · Feistel elegance: decryption mirrors encryption with reversed round keys.

117. **中文**：Shamir 门限方案的数学根基是？
- 选项：A. 大数分解  B. 离散对数  C. 拉格朗日插值：k 点唯一确定 k−1 次多项式  D. 格上最短向量
- 答案：**C** · 任意 k 个点确定唯一 k−1 次曲线，常数项即秘密；少于 k 则一无所知。

   **English**: The mathematical foundation of Shamir's threshold scheme is…
- Options: A. Integer factoring  B. Discrete logarithm  C. Lagrange interpolation: k points fix a unique degree-(k−1) polynomial  D. Shortest lattice vectors
- Answer: **C** · Any k points define the curve uniquely; its constant term is the secret.

118. **中文**：TLS 1.3 相对早期版本的重要改进是？
- 选项：A. ServerHello 之后几乎全加密，且强制（EC）DHE 前向安全  B. 改用纯对称加密  C. 取消了证书验证  D. 握手明文更多以便调试
- 答案：**A** · TLS 1.3 让握手元数据也进密文，并废弃无前向安全的 RSA 密钥传输。

   **English**: A key TLS 1.3 improvement over earlier versions?
- Options: A. Nearly everything after ServerHello is encrypted, with mandatory (EC)DHE forward secrecy  B. Purely symmetric design  C. Certificate verification removed  D. More plaintext for debugging
- Answer: **A** · TLS 1.3 encrypts handshake metadata and drops non-forward-secret RSA key transport.

119. **中文**：ChaCha20 的 quarter-round 由哪三类运算交替组成？
- 选项：A. 乘法、除法、查表  B. 加法、异或、循环移位  C. 置换、代换、模幂  D. 减法、或、右移
- 答案：**B** · 无查表设计带来常数时间执行——没有缓存时序侧信道可挖。

   **English**: ChaCha20's quarter-round alternates which three operation types?
- Options: A. Multiply, divide, table lookup  B. Addition, XOR, rotation  C. Permutation, substitution, modexp  D. Subtract, OR, right-shift
- Answer: **B** · Table-free design gives constant-time execution — no cache-timing side channel to mine.

120. **中文**：GSM 的 A5/1 流密码于哪一年被彩虹表实测攻破？
- 选项：A. 1999 年理论提出即告破  B. 2004 年  C. 2009 年 Karsten Nohl 团队实测  D. 至今未被破
- 答案：**C** · 2009 年 Nohl 在 26C 大会展示用廉价 GPU 集群实时还原会话密钥——A5/1 从此只活在教科书里。

   **English**: In which year was GSM's A5/1 stream cipher practically broken via rainbow tables?
- Options: A. 1999, broken as soon as theorized  B. 2004  C. 2009 by Karsten Nohl's team  D. Never broken
- Answer: **C** · At 26C in 2009 Nohl demonstrated real-time session-key recovery with cheap GPUs — A5/1 now lives in textbooks only.

121. **中文**：罗塞塔石碑最重要的破译价值在于什么？
- 选项：A. 同一内容用三种文字书写  B. 它是世界上最古老的文物  C. 上面有凯撒的签名  D. 它是一把真实的钥匙
- 答案：**A** · 未知象形文 + 半懂世俗体 + 完全可读希腊文——同一内容的三个编码版本，破译者只需找对应关系。

   **English**: What makes the Rosetta Stone so valuable for decipherment?
- Options: A. Same text in three scripts  B. Oldest artifact ever found  C. Caesar's signature on it  D. It's a real key
- Answer: **A** · Unknown hieroglyphs + semi-readable demotic + fully readable Greek — three encodings of one message.

122. **中文**：中途岛战役前，美军让中途岛用低级密码发「淡水短缺」假电报，目的是？
- 选项：A. 让日军用密码暴露 AF 就是中途岛  B. 测试中途岛的通信能力  C. 向美军部队运送淡水  D. 干扰日军的雷达
- 答案：**A** · 日军截获后用密码报告「AF 淡水短缺」——AF 的身份就此锁定，这就是经典的「淡水陷阱」。

   **English**: Before Midway, the US had Midway send a fake "water shortage" message in weak cipher. Why?
- Options: A. Make Japan reveal AF = Midway in cipher  B. Test Midway's radio  C. Ship fresh water  D. Jam Japanese radar
- Answer: **A** · Japan intercepted and reported "AF short of water" in cipher — AF's identity was confirmed. The classic "water trap".

123. **中文**：钓鱼邮件中「领奖先交手续费」的套路为什么总能骗到人？
- 选项：A. 手续费太便宜  B. 受害者太蠢  C. 沉没成本+侥幸心理让人越陷越深  D. 银行会退钱
- 答案：**C** · 先交小额「手续费」后，受害者倾向于继续追加投入以「拿回」之前的钱——这是经典的沉没成本陷阱。

   **English**: Why does the "pay a small fee to claim your prize" scam keep working?
- Options: A. The fee is cheap  B. Victims are stupid  C. Sunk cost + wishful thinking deepen the trap  D. Banks refund it
- Answer: **C** · After paying once, victims tend to pay more to "recover" the earlier amount — the classic sunk-cost trap.

124. **中文**：2004 年王小云团队的 MD5 碰撞攻击为什么震撼密码学界？
- 选项：A. MD5 太老了没人用  B. 碰撞意味着数字签名可被伪造  C. 她破解了 RSA  D. MD5 密钥太短
- 答案：**B** · 数字签名依赖「找不到两份不同文件有同一哈希」——碰撞攻击直接击穿这个前提，SSL 证书和代码签名全部受影响。

   **English**: Why was Xiaoyun Wang's 2004 MD5 collision attack so devastating?
- Options: A. MD5 was old and unused  B. Collisions break digital signatures  C. She cracked RSA  D. MD5 key too short
- Answer: **B** · Signatures rely on "no two files share a hash" — collisions shatter that premise, affecting SSL certs and code signing.

125. **中文**：2017 年 SHAttered 攻击对 SHA-1 做了什么？
- 选项：A. 用约 6500 CPU 年造出两份内容不同但 SHA-1 相同的 PDF  B. 暴力穷举了全部 2^160 种输入  C. 找到了 SHA-1 的密钥  D. 把 SHA-1 改造成了加密算法
- 答案：**A** · 这不是暴力穷举而是密码分析（继承王小云团队的思路）——两个内容不同的 PDF 拥有同一 SHA-1 指纹，签名体系的地基动摇。

   **English**: What did the 2017 SHAttered attack do to SHA-1?
- Options: A. Used ~6,500 CPU-years to craft two different PDFs with the same SHA-1  B. Brute-forced all 2^160 inputs  C. Found SHA-1's secret key  D. Turned SHA-1 into an encryption algorithm
- Answer: **A** · Not brute force but cryptanalysis (building on Wang's team's work) — two different PDFs sharing one SHA-1 fingerprint shook the signature ecosystem.

126. **中文**：Merkle-Damgård 结构（SHA-1/MD5）的长度扩展攻击根源是？
- 选项：A. 密钥太短  B. 输出可以逆推输入  C. H(secret‖msg) 的输出就是下一步压缩的完整内部状态  D. 填充不安全
- 答案：**C** · 算法的最终输出 = 内部链式状态的「透传」——攻击者不需要密钥就能从 MAC 接力计算 H(secret‖msg‖glue‖evil) 的合法 MAC。

   **English**: What makes Merkle-Damgård (SHA-1/MD5) vulnerable to length extension?
- Options: A. Short keys  B. Output reversible to input  C. H(secret‖msg) output IS the full internal chaining state for the next block  D. Unsafe padding
- Answer: **C** · The final output is a passthrough of the internal chaining state — an attacker chains from the MAC to forge H(secret‖msg‖glue‖evil) without the key.

127. **中文**：中途岛战役中「JN-25 的深度」指的是什么？
- 选项：A. 同一版加表期内的多封电报可相减消去加表  B. 电报的物理厚度  C. 密码本的页数  D. 潜艇下潜深度
- 答案：**A** · 同版加表期内多封电报共享同一张表——两封相减加表抵消，只剩明文差值。破译员据此逐列反推。

   **English**: In the Battle of Midway, what does "JN-25 depth" refer to?
- Options: A. Multiple messages under the same additive cancel it out when subtracted  B. Physical thickness of telegrams  C. Codebook page count  D. Submarine dive depth
- Answer: **A** · Messages within the same additive period share the table — subtracting two cancels the additive, leaving plaintext differences for column-by-column recovery.

128. **中文**：紫密（Purple）的步进规律为什么让美军初期束手无策？
- 选项：A. 它没有步进规律  B. 步进太快跟不上  C. 六个元音和二十个辅音走两条完全不同的路  D. 它用的是量子密钥
- 答案：**D** · 六元音组走「六段路」、二十辅音走「二十段路」——两条路径的步进规律完全不同，按转子机器的思路去解永远撞墙。

   **English**: Why did Purple's stepping pattern initially stump US cryptanalysts?
- Options: A. It had no pattern  B. Too fast to track  C. Six vowels and twenty consonants follow completely different paths  D. It used quantum keys
- Answer: **D** · The six-vowel group and twenty-consonant group step in entirely different rhythms — attacking it as a rotor machine hits a wall.

129. **中文**：为什么 HMAC 结构能免疫长度扩展攻击？
- 选项：A. 它用了更长的密钥  B. 两层嵌套使得中间状态不外泄  C. 它不用填充  D. 它每次换密钥
- 答案：**B** · HMAC = H((k⊕opad) ‖ H((k⊕ipad) ‖ msg))——外层哈希从新的 IV 开始，内层输出被完全遮蔽，攻击者没有可接力的内部状态。

   **English**: Why is HMAC immune to length extension?
- Options: A. Longer key  B. Two-layer nesting hides the intermediate state  C. No padding used  D. Key changes each time
- Answer: **B** · HMAC = H((k⊕opad) ‖ H((k⊕ipad) ‖ msg)) — the outer hash starts from a fresh IV and the inner output is fully absorbed; no state to chain from.

130. **中文**：线性分析攻击分组密码的核心思想是？
- 选项：A. 寻找明文/密文/密钥比特间的高概率线性近似  B. 暴力穷举所有密钥  C. 利用时序差异提取密钥  D. 伪造证书链
- 答案：**A** · Matsui 1993 年对 DES 首次公开线性分析——通过大量已知明密文对统计比特间的线性偏置。

   **English**: What is the core idea of linear cryptanalysis against block ciphers?
- Options: A. Find high-probability linear approximations among plaintext/ciphertext/key bits  B. Brute-force all keys  C. Exploit timing differences  D. Forge certificate chains
- Answer: **A** · Mitsuru Matsui first applied linear analysis to DES in 1993 — statistically exploiting biased linear relations over many known pairs.

131. **中文**：差分分析与线性分析的根本区别是？
- 选项：A. 差分用选择明文，线性用已知明文  B. 差分只对 DES 有效  C. 线性分析更快  D. 没有区别
- 答案：**C** · 差分分析（Biham-Shamir 1991）需要选择明文控制差分；线性分析（Matsui 1993）只用已知明文统计偏置。

   **English**: The fundamental difference between differential and linear cryptanalysis?
- Options: A. Differential uses chosen plaintext; linear uses known plaintext  B. Differential only works on DES  C. Linear is faster  D. No difference
- Answer: **C** · Differential (Biham-Shamir 1991) needs chosen plaintexts to control differences; linear (Matsui 1993) statistically exploits bias from known pairs only.

132. **中文**：AEAD（认证加密）相比「加密+拼接 MAC」的核心优势是？
- 选项：A. 密文更短  B. 加密与认证在单个原子操作中完成，不会因顺序不当而泄露  C. 不需要密钥  D. 可以解密两次
- 答案：**B** · TLS 1.0 时代的 MAC-then-Encrypt 顺序曾导致 padding oracle 攻击——AEAD（如 GCM/ChaCha20-Poly1305）把两步合成一个不可拆分的原子操作。

   **English**: AEAD's core advantage over "encrypt-then-append-MAC"?
- Options: A. Shorter ciphertext  B. Encryption and authentication in one atomic operation, immune to ordering mistakes  C. No key needed  D. Can decrypt twice
- Answer: **B** · TLS 1.0-era MAC-then-Encrypt ordering caused padding oracle attacks — AEAD (GCM/ChaCha20-Poly1305) fuses both into one indivisible operation.

133. **中文**：GCM 模式中 nonce 重用的后果是？
- 选项：A. 认证密钥泄露，攻击者可伪造任意密文  B. 只是加密强度降低  C. 没有后果  D. 性能提升
- 答案：**A** · GCM 的认证标签由密钥流与消息共同决定——nonce 重用使攻击者可以恢复认证子密钥并伪造任意标签。

   **English**: What happens when a GCM nonce is reused?
- Options: A. Authentication key leaks, allowing arbitrary tag forgery  B. Only encryption strength drops  C. No consequence  D. Performance improves
- Answer: **A** · GCM's authentication tag depends on the keystream and message — nonce reuse lets an attacker recover the auth subkey and forge any tag.

134. **中文**：Poly1305 与 ChaCha20 的关系是？
- 选项：A. Poly1305 加密，ChaCha20 认证  B. ChaCha20 加密，Poly1305 认证——组合为 AEAD  C. 两者都是哈希函数  D. 两者都是流密码
- 答案：**B** · ChaCha20 负责加密（流密码），Poly1305 负责认证（一次性 MAC）——组合即 RFC 8439 定义的 ChaCha20-Poly1305 AEAD。

   **English**: What is the relationship between Poly1305 and ChaCha20?
- Options: A. Poly1305 encrypts, ChaCha20 authenticates  B. ChaCha20 encrypts, Poly1305 authenticates — together they form an AEAD  C. Both are hash functions  D. Both are stream ciphers
- Answer: **B** · ChaCha20 encrypts (stream cipher), Poly1305 authenticates (one-time MAC) — combined as the ChaCha20-Poly1305 AEAD defined in RFC 8439.

135. **中文**：SHA-3 与 SHA-2 的核心结构区别是？
- 选项：A. SHA-3 用 Merkle-Damgård，SHA-2 用海绵  B. SHA-3 用海绵结构（Keccak），天然免疫长度扩展  C. SHA-3 有密钥  D. 没有区别
- 答案：**C** · SHA-3 的 Keccak 海绵结构吸收-挤压数据，不再使用 MD 结构的链式状态——长度扩展攻击对它无效。

   **English**: The core structural difference between SHA-3 and SHA-2?
- Options: A. SHA-3 uses Merkle-Damgård; SHA-2 uses sponge  B. SHA-3 uses the sponge construction (Keccak), naturally immune to length extension  C. SHA-3 has a key  D. No difference
- Answer: **C** · SHA-3's Keccak sponge absorbs and squeezes data without the chained state of MD constructions — length extension doesn't apply.

136. **中文**：Miller-Rabin 素性测试为什么被广泛使用？
- 选项：A. 它是确定性的  B. 误判率可控制在任意低（如 2⁻¹²⁸），速度远快于试除法  C. 不需要数学  D. 只能测试小数字
- 答案：**B** · 每次测试误判率 ≤ 1/4，重复 k 次误判率 ≤ 4⁻ᵏ——RSA/SM4 密钥生成的标准步骤。

   **English**: Why is the Miller-Rabin primality test so widely used?
- Options: A. It's deterministic  B. Error rate controllable to any level (e.g. 2^-128), far faster than trial division  C. No math needed  D. Only works on small numbers
- Answer: **B** · Each round has ≤1/4 error rate; repeating k times gives ≤4^-k — the standard step in RSA/SM4 key generation.

137. **中文**：Poly1305 为什么是「一次性」MAC？
- 选项：A. 每个密钥只能安全认证一条消息  B. 它只能运行一次  C. 一次性密码本的缩写  D. 它自动销毁
- 答案：**A** · Poly1305 的密钥是每次调用时生成的单次性 pad——同一密钥认证两条消息会泄露认证子密钥，因此必须每条消息换密钥。

   **English**: Why is Poly1305 a "one-time" MAC?
- Options: A. Each key safely authenticates only one message  B. It runs only once  C. It's an OTP abbreviation  D. It self-destructs
- Answer: **A** · Poly1305's key is a per-call one-time pad — authenticating two messages with the same key leaks the authentication subkey, so each message needs a fresh key.

138. **中文**：码（CODE）与密码（CIPHER）的本质区别是？
- 选项：A. 码整词对照替换，密码逐字母变换  B. 码比密码古老，密码已淘汰  C. 两者完全等价  D. 码是数字、密码是字母
- 答案：**A** · 码(code)是词→词的对照（如密码本），密码(cipher)是逐字母的变换——破译两者的手段完全不同。

   **English**: What is the difference between a code and a cipher?
- Options: A. Codes replace whole words; ciphers transform letters  B. Codes are older and ciphers are obsolete  C. They are exactly equivalent  D. Codes are numeric, ciphers alphabetic
- Answer: **A** · A code maps words via a codebook; a cipher transforms letters one by one — breaking them requires different methods.

139. **中文**：维吉尼亚密码的密钥周期常常用哪种方法检测？
- 选项：A. 凯撒试错  B. 频率统计  C. 简森试验  D. 卡西斯基测试
- 答案：**D** · 重复密钥段的间距是密钥周期的整数倍，卡西斯基从重复词块的距离反推周期，再分列做频率分析。

   **English**: Which method is often used to detect the Vigenere key period?
- Options: A. Caesar trial and error  B. Frequency counting  C. The Jensen test  D. The Kasiski examination
- Answer: **D** · Repeated key strands make repeated blocks at multiples of the period — Kasiski found the period from repeated fragments, then attacked each column by frequency.

140. **中文**：Diffie-Hellman 类密钥交换的安全基础是什么？
- 选项：A. 大整数因子分解难解  B. 有限域离散对数难解  C. 哈希碰撞难解  D. 格基归约难解
- 答案：**B** · 双方只交换公开值 g^x、g^y，攻击者求 x 需解离散对数——与 RSA 的因子分解难题不同。

   **English**: What is the security basis of Diffie-Hellman key exchange?
- Options: A. Hard integer factorization  B. Hard discrete logarithms in finite fields  C. Hard hash collisions  D. Hard lattice reduction
- Answer: **B** · Parties only exchange g^x and g^y; reversing the exponent requires solving discrete logarithms — distinct from RSA factorization.

141. **中文**：模幂运算为什么要用「平方乘」（Square-and-multiply）算法？
- 选项：A. 为了节省存储空间  B. 为了生成随机密钥  C. O(log n) 次乘法替代 O(n) 次  D. 为了抗侧信道攻击
- 答案：**C** · 把指数按二进制位拆分：平方与选择性相乘，把 n 次连乘压到约 2×log₂n 次——RSA、DH 都靠它。

   **English**: Why does modular exponentiation use the Square-and-multiply algorithm?
- Options: A. To save memory  B. To generate random keys  C. O(log n) multiplications instead of O(n)  D. To resist side channels
- Answer: **C** · Processing the exponent bitwise turns n repeated multiplications into ~2-log2-n multiplications — vital for RSA and DH.

142. **中文**：CTR 模式下，每个密文块是这样得到的：
- 选项：A. 明文块 XOR 密钥加密的计数器  B. 明文块整体加密  C. 计数器按链式加密  D. 明文块与密钥异或
- 答案：**A** · CTR 用 E(计数器值) 作为一次性 pad 与明文异或——可并行、无需填充，但计数器绝不能复用。

   **English**: In CTR mode, each ciphertext block is obtained by:
- Options: A. plaintext XOR E(counter)  B. encrypting the plaintext block as a whole  C. chaining the counters  D. XORing the plaintext with the key
- Answer: **A** · CTR uses E(counter) as a one-time pad XORed with plaintext — parallelizable and padding-free, but counters must never repeat.

143. **中文**：GCM 认证加密组合了哪两种结构？
- 选项：A. CBC + HMAC  B. CTR + GHASH（伽罗瓦域哈希）  C. ECB + OTP  D. 瀑布 + 栅栏
- 答案：**B** · GCM 用 CTR 保密、用 GHASH 认证——在伽罗瓦域 GF(2^128) 上做乘法构造认证标签，一次处理一块。

   **English**: Which two structures does GCM authenticated encryption combine?
- Options: A. CBC + HMAC  B. CTR + GHASH (Galois-field hashing)  C. ECB + OTP  D. Cascades + fences
- Answer: **B** · GCM uses CTR for secrecy and GHASH in GF(2^128) for authentication — a multiplication-based tag, one block at a time.

144. **中文**：AES 每一轮的四步变换顺序是？
- 选项：A. SubBytes→ShiftRows→MixColumns→AddRoundKey  B. AddRoundKey→MixColumns→ShiftRows→SubBytes  C. 四步同时并行执行  D. 顺序随机，由密钥决定
- 答案：**A** · 先字节替换提供混淆，行移位与列混淆扩散，最后异或轮密钥注入密钥——十轮重复后输出密文。

   **English**: What is the order of the four AES round transformations?
- Options: A. SubBytes, ShiftRows, MixColumns, AddRoundKey  B. AddRoundKey, MixColumns, ShiftRows, SubBytes  C. All four in parallel  D. Random, key-dependent order
- Answer: **A** · S-box substitution confuses; row shifts and column mixing diffuse; the final XOR injects the key. Ten rounds produce the ciphertext.

145. **中文**：如果 AES 去掉 SubBytes（只留移位和异或），会发生什么？
- 选项：A. 整个 AES 变成一个大线性方程组，高斯消元即可破解  B. 安全性不变，只是变慢  C. 只影响最后一轮  D. 密钥长度需要加倍
- 答案：**A** · 移位与 XOR 都是线性运算；没有 S 盒的非线性，加密就是矩阵乘法——解线性方程即可还原明文与密钥。

   **English**: What if AES dropped SubBytes and kept only shifts and XOR?
- Options: A. It becomes one big linear system solvable by Gaussian elimination  B. Security unchanged, just slower  C. Only the last round is affected  D. Key length must double
- Answer: **A** · Shifts and XOR are linear; without the S-box's nonlinearity encryption is matrix arithmetic — solve the system to recover plaintext and key.

146. **中文**：「correct-horse-battery-staple」这类四个随机单词的短语为什么强？
- 选项：A. 包含特殊字符  B. 单词来自词典无法猜测  C. 熵随长度指数增长，28 位长短语超过多数乱串  D. 因为它出自漫画
- 答案：**C** · 每个随机词贡献约 10-13 比特熵；长口令的记忆成本远低于同熵值的随机符号串。

   **English**: Why is a four-random-word passphrase like correct-horse-battery-staple strong?
- Options: A. It has special characters  B. Dictionary words are unguessable  C. Entropy grows exponentially with length — 28 characters beats most gibberish  D. It comes from a comic
- Answer: **C** · Each random word contributes roughly 10-13 bits of entropy; long phrases cost far less memory than equal-entropy random symbols.

147. **中文**：网站存储用户口令的正确姿势是？
- 选项：A. MD5 哈希后存库  B. 加盐的慢哈希（bcrypt/Argon2）  C. AES 加密存库，密钥放配置文件  D. Base64 编码混淆
- 答案：**B** · MD5 太快可暴力；可解密的存储在密钥泄露时全灭；只有故意慢、内存困难的 KDF 能让离线穷举成本高到不可行。

   **English**: What is the right way for a website to store user passwords?
- Options: A. Store MD5 hashes  B. Salted slow hashes (bcrypt/Argon2)  C. AES-encrypt them, key in a config file  D. Base64 obfuscation
- Answer: **B** · MD5 is brute-forceable fast; decryptable storage dies with its key; only deliberately slow memory-hard KDFs make offline cracking infeasible.

148. **中文**：PGP 加密一封大邮件时，RSA 公钥算法加密的是什么？
- 选项：A. 只加密一把随机会话密钥  B. 整封邮件正文  C. 发送方的私钥  D. 收件人的公钥
- 答案：**A** · 混合加密：正文交给快速的对称密码，昂贵的公钥运算只保护那把一次性会话密钥——HTTPS 握手同理。

   **English**: When PGP encrypts a large email, what does the RSA public-key step encrypt?
- Options: A. Only a random session key  B. The entire message body  C. The sender's private key  D. The recipient's public key
- Answer: **A** · Hybrid design: fast symmetric ciphers carry the body; costly public-key math protects only the one-time session key — exactly how HTTPS handshakes work.

149. **中文**：PGP 用户互相签署对方公钥形成的「信任之网」，替代了什么？
- 选项：A. 对称加密算法  B. 中心化证书机构（CA）层级  C. 邮件服务器  D. 哈希函数
- 答案：**B** · Web of Trust 用人际签名网络背书公钥真实性——去中心化的信任模型，与 TLS 世界由 CA 签发证书形成鲜明对照。

   **English**: The PGP Web of Trust, where users sign each other's keys, replaces what?
- Options: A. Symmetric ciphers  B. Centralized certificate-authority hierarchies  C. Mail servers  D. Hash functions
- Answer: **B** · Trust flows through personal signature networks endorsing key authenticity — decentralized trust versus the CA-signed certificates of the TLS world.

150. **中文**：比特币挖矿难度上调一档（前导零多一个），全网期望尝试次数如何变化？
- 选项：A. 翻倍  B. 不变，只是验证更慢  C. 乘以 16（十六进制每一位贡献 1/16）  D. 乘以 256
- 答案：**C** · 十六进制每位有 16 种取值，多一个前导零即概率除以 16——难度是指数曲线，这正是 ASIC 专业化的根源。

   **English**: Bitcoin difficulty rises by one leading hex zero. What happens to expected tries?
- Options: A. They double  B. Unchanged, verification slows  C. Multiply by 16 (each hex digit contributes 1/16)  D. Multiply by 256
- Answer: **C** · Each hex digit has 16 outcomes; one more leading zero divides hit probability by 16 — an exponential curve that explains ASIC specialization.

151. **中文**：攻击者控制了比特币 51% 算力，以下哪件事他做不到？
- 选项：A. 撤销自己刚花出去的交易（双花）  B. 把自己私下挖的链替换掉最近几个公开区块  C. 审查并拒绝打包某些地址的交易  D. 用别人的私钥签名转走他人余额
- 答案：**D** · 算力可以重组链、审查交易，但花钱必须有你私钥签的名——51% 攻击的破坏边界止步于双花与审查。

   **English**: With 51% of Bitcoin hashpower, which feat remains impossible?
- Options: A. Reversing your own recent spend (double-spend)  B. Replacing recent public blocks with a privately mined chain  C. Censoring transactions from chosen addresses  D. Signing away other people's balances with their keys
- Answer: **D** · Hashpower reorganizes chains and censors transactions, but spending requires the owner's private-key signature — 51% attacks stop at double-spends and censorship.

152. **中文**：零知识证明的三性质中，「可靠性」指的是？
- 选项：A. 假的证明几乎不可能通过  B. 验证过程不泄露任何秘密  C. 证明生成速度要快  D. 任何人都能验证
- 答案：**A** · 完备性=真则可信；可靠性=伪则难逃（每轮作弊率 50%，轮数增加指数衰减）；零知识=除命题为真外无信息泄露。

   **English**: In zero-knowledge proofs, what does "soundness" mean?
- Options: A. A false claim almost never passes  B. Verification leaks no secrets  C. Proofs generate quickly  D. Anyone can verify
- Answer: **A** · Completeness: truth convinces. Soundness: lies fail (50% per cheating round, decaying exponentially). Zero-knowledge: nothing beyond the claim itself leaks.

153. **中文**：TOTP 验证码 30 秒轮换一次。它的安全收益主要是？
- 选项：A. 节省手机电量  B. 把偷窥/钓鱼得到的验证码价值压缩到半分钟内  C. 让密码更长  D. 防止 SIM 卡老化
- 答案：**B** · 时间片赋予验证码「新鲜度」：被偷窥的码半分钟后作废。服务器允许 ±1 片时钟容差以兼顾可用性。

   **English**: TOTP codes rotate every 30 seconds. The main security benefit?
- Options: A. Battery savings  B. Codes peeked or phished lose value within half a minute  C. Longer passwords  D. SIM card longevity
- Answer: **B** · Time slices buy freshness: a stolen code is worthless in 30 seconds. Servers accept ±1 slice of clock drift for usability.

154. **中文**：斯巴达密码棒（Scytale）属于哪类密码？
- 选项：A. 替换密码  B. 换位密码  C. 流密码  D. 公钥密码
- 答案：**B** · 羊皮纸条绕棒书写，解下即乱——字母不变、只变位置，是最早的军用换位密码实物。

   **English**: The Spartan Scytale is what kind of cipher?
- Options: A. Substitution  B. Transposition  C. Stream  D. Public-key
- Answer: **B** · Letters unchanged, only rearranged — the earliest surviving military transposition cipher.

155. **中文**：卡当格栅（Cardan Grille）的本质属于哪个范畴？
- 选项：A. 多表替换  B. 数学加密  C. 隐写术——秘密藏于明文之中  D. 哈希函数
- 答案：**C** · 挖孔卡片让密文藏在无害闲话的字缝里：不隐藏「内容」而隐藏「存在」，正是隐写术的定义。

   **English**: The Cardan Grille fundamentally belongs to which category?
- Options: A. Polyalphabetic substitution  B. Mathematical encryption  C. Steganography — hiding existence, not content  D. Hash functions
- Answer: **C** · A holed card lets the secret hide between innocent words: steganography hides that a message exists at all.

156. **中文**：Passkey（FIDO2）相比 TOTP 验证码的核心安全优势是？
- 选项：A. 签名绑定真实域名，钓鱼站拿不到可用凭据  B. 验证码更长  C. 不需要手机  D. 速度更快
- 答案：**A** · TOTP 码可被 AiTM 钓鱼站实时转发；Passkey 的私钥签名与域名绑定，假站要不到有效响应。

   **English**: What is Passkey's (FIDO2) core security advantage over TOTP codes?
- Options: A. Signatures are origin-bound — phishing sites get nothing usable  B. Longer codes  C. No phone needed  D. Faster
- Answer: **A** · AiTM phishing relays TOTP codes in real time; Passkey signatures are cryptographically bound to the true domain.

157. **中文**：博福特密码与维吉尼亚的关键区别是？
- 选项：A. 使用更大的字母表  B. 密文字母 = 密钥 − 明文（自倒置，加解密同一张表）  C. 只对元音加密  D. 每字换钥三次
- 答案：**B** · c = k − p 的自倒置性质使加密表即解密表——这一对称性被早期机械密码设备广泛采用。

   **English**: The key difference of the Beaufort cipher versus Vigenere?
- Options: A. A larger alphabet  B. Ciphertext = key minus plaintext — self-reciprocal, one table for both directions  C. Vowels only  D. Triple key rotation
- Answer: **B** · c = k − p is self-reciprocal: the same table encrypts and decrypts, a symmetry early cipher machines exploited.

158. **中文**：阿尔贝蒂密码盘（1467）的历史地位是？
- 选项：A. 第一种公钥算法  B. 第一台电子密码机  C. 首个多表替换的实物工具——西方密码学之父之作  D. 第一份频率分析论文
- 答案：**C** · 两个同轴圆盘一转即可逐字更换字母表，单表频率分析从此失效——比维吉尼亚早百余年。

   **English**: The historic status of Alberti's cipher disk (1467)?
- Options: A. First public-key algorithm  B. First electronic cipher machine  C. First physical polyalphabetic tool — by a father of Western cryptography  D. First frequency-analysis paper
- Answer: **C** · One twist of two coaxial disks gives each letter its own alphabet, defeating single-table frequency analysis — a century before Vigenere.

159. **中文**：PAKE（如 WPA3 所用的 SAE）解决的核心问题是？
- 选项：A. 仅凭一个弱口令协商出强会话密钥，且窃听者无法离线验证猜测  B. 把强密钥压缩成弱口令  C. 加速 Wi-Fi 连接  D. 替代数字证书
- 答案：**A** · 普通口令协议让攻击者抓包后离线穷举；PAKE 把验证做成交互式零知识过程，猜测只能在在线慢速进行。

   **English**: What core problem does PAKE (e.g. SAE in WPA3) solve?
- Options: A. Deriving a strong session key from a weak password, with no offline guessing for eavesdroppers  B. Compressing strong keys into passwords  C. Speeding up Wi-Fi  D. Replacing certificates
- Answer: **A** · Plain password protocols allow offline brute force on captured handshakes; PAKE makes verification interactive so guesses can only be tried slowly, online.

160. **中文**：盲签名（Blind Signature）的独特之处在于？
- 选项：A. 签名后文件自动销毁  B. 只能签一次  C. 不需要私钥  D. 签署者看不到所签内容却能为其背书
- 答案：**D** · 先盲化→签名→去盲：签署者不知内容。David Chaum 据此构造了最早的电子现金与匿名投票协议。

   **English**: What makes Blind Signatures unique?
- Options: A. The file self-destructs after signing  B. They work only once  C. No private key needed  D. The signer endorses content they cannot see
- Answer: **D** · Blind, sign, unblind: the signer never learns the content. David Chaum built the first e-cash and anonymous voting on this.

161. **中文**：密码学里说口令有「40 比特熵」，指的是？
- 选项：A. 无法预测的情况有 2^40 种可能（对数尺度的不确定性度量）  B. 口令长度 40 个字符  C. 包含 40 种字符  D. 破解需要 40 分钟
- 答案：**A** · 熵（Entropy）= 不确定性的对数：4 个随机单词约 40-50 比特熵，比多数 8 位「字母+数字+符号」口令更难猜——长度与随机性都重要。

   **English**: In cryptography, a password with "40 bits of entropy" means…
- Options: A. About 2^40 equally likely possibilities — a log-scale measure of uncertainty  B. 40 characters long  C. 40 character classes used  D. 40 minutes to crack
- Answer: **A** · Entropy is a logarithmic measure of uncertainty: four random words carry ~40-50 bits, beating most 8-character mixed passwords — length and randomness both matter.

162. **中文**：软件「后门」（Backdoor）指的是？
- 选项：A. 开发者暗中留下、可绕过正常认证进入系统的入口  B. 防火墙的安全策略  C. 系统的备份通道  D. 一个普通 Bug
- 答案：**A** · 后门是「钥匙之外的钥匙」：1998 年 NSA 曾推动含后门嫌疑的双椭圆曲线随机数生成器（Dual_EC_DRBG），后来被公开质疑——这正是「算法公开、代码可审计」要防的事。

   **English**: A software "Backdoor" is…
- Options: A. A hidden entry developers leave that bypasses normal authentication  B. A firewall policy  C. A backup channel  D. An ordinary bug
- Answer: **A** · A backdoor is a key beyond the key: the NSA-promoted Dual_EC_DRBG RNG in 1998 carried suspected backdoors and was later discredited — exactly why algorithms must be public and auditable.

163. **中文**：收到「您的银行账户即将冻结，点击链接验证身份」短信，最稳妥的做法是？
- 选项：A. 立即点链接  B. 回复短信索取详情  C. 手动打开浏览器输入银行官网再查询  D. 转发给朋友求助
- 答案：**C** · 仿冒（Phishing）短信以「限时+权威」制造焦虑；手动输入官网地址能绕开钓鱼链接——验证口令是「你不点链接、自己找门」。

   **English**: A text says "your bank account will be frozen, click this link to verify". The safest move?
- Options: A. Click the link immediately  B. Reply to ask details  C. Manually type the bank's real address into the browser  D. Forward it to a friend
- Answer: **C** · Phishing builds urgency with fake authority; typing the official address yourself bypasses the poisoned link — never click, always walk in the front door.

164. **中文**：戚继光的「反切码」是什么思路？
- 选项：A. 用摩斯电码传输  B. 用两个字的声母与韵母拼出暗号字  C. 整段换位  D. 字母表反序
- 答案：**B** · 反切（Fanqie Code）是汉字注音传统：上字取声母、下字取韵母拼出本字——戚继光以 16 枚「字」为声母、按时间表取韵，把军情编成二字暗号，是中国本土的古典密码实践。

   **English**: What is the idea behind Qi Jiguang's Fanqie codes?
- Options: A. Morse-style transmission  B. Stitching the initial of one character to the final of another to spell a secret word  C. Whole-message transposition  D. Reversed alphabet
- Answer: **B** · Fanqie is the traditional Chinese way of spelling: initial + final. Qi Jiguang fixed 16 initial characters and a time-keyed final list, encoding orders as two-character signals — an indigenous Chinese cipher practice.

165. **中文**：《六韬》里的「阴书」如何传递密信？
- 选项：A. 全部加密后一次送达  B. 把一封信拆成三份由三人分送  C. 用隐写墨水书写  D. 用格栅掩码改写
- 答案：**B** · 太公「阴书」：完整内容拆三份、三人各送一份——单份截获拼不出全文。这是「分发与门限」思想的军事原型：三千年后 Shamir 门限秘密分享把同样的直觉变成了数学。

   **English**: How did the Six Secret Teachings' "yin shu" method deliver a secret letter?
- Options: A. Encrypt it whole and send once  B. Split the message into three parts, three couriers  C. Write it in invisible ink  D. Mask it with a grille
- Answer: **B** · Yinshu Split Letters: divide the full message among three carriers — any single capture reveals nothing. It is the military ancestor of sharing/threshold ideas; Shamir's threshold scheme turned the same intuition into math three millennia later.

166. **中文**：《武经总要》的「字验」用 40 个固定汉字做什么？
- 选项：A. 每个字代表一条预先约定的军情  B. 每字一码加密正文  C. 作为口令  D. 作为旗语
- 答案：**A** · 字验（Ziyan Code）：40 个半句对照 40 种军情（请战/败退/增援…），信封拆开对「字」即知——这是「编码簿 + 符号对照」思路在宋代的落地。

   **English**: The Song-dynasty "Ziyan" code used 40 fixed characters for…
- Options: A. Each character stands for one pre-agreed military situation  B. One-time-pad encryption  C. A password  D. Semaphore
- Answer: **A** · Ziyan Code: 40 partial sentences map to 40 situations (request battle, retreat, reinforcement…) — open the dispatch and match the character: a codebook-and-symbol idea from Song China.

167. **中文**：隐写分析（Steganalysis）是？
- 选项：A. 一种把信息藏进图片的方法  B. 一种加密算法  C. 检测并从载体中提取隐藏信息的对抗技术  D. 压缩格式
- 答案：**C** · 隐写分析（Steganalysis）与隐写术互为攻防：统计 LSB 位分布、与原始载体比对、重压缩重采样都能让「藏得看不见」的原形毕露。

   **English**: Steganalysis is…
- Options: A. Hiding data inside images  B. An encryption algorithm  C. The adversarial science of detecting and extracting hidden data  D. A compression format
- Answer: **C** · Steganalysis is steganography's counter: LSB statistics, comparison with the original carrier, or recompression expose what was "invisible".

168. **中文**：「数字信封」（Digital Envelope）是什么结构？
- 选项：A. 随机对称密钥加密正文，再用对方公钥加密这把密钥  B. 两个签名互为凭证  C. 信封加邮戳  D. 哈希两次
- 答案：**A** · 慢的公钥运算只保护密钥、快的对称算法运输正文——PGP 发邮件、HTTPS 握手都是这个「信封」结构。

   **English**: A "Digital Envelope" is the structure where…
- Options: A. A random symmetric key encrypts the body and the recipient's public key encrypts that key  B. Two signatures vouch for each other  C. A stamp proves receipt  D. Data is hashed twice
- Answer: **A** · Costly public-key math protects only the key; fast symmetric crypto carries the body. PGP mail and HTTPS handshakes are both this envelope.

169. **中文**：SSH 最核心的用途是？
- 选项：A. 签名电子邮件  B. 发布网页  C. 压缩文件  D. 在不安全网络上安全远程登录与传输
- 答案：**D** · SSH 用公钥认证 + 加密通道替代裸露的 Telnet：登录远程服务器时，口令/私钥永不明文过网——网络管理员天天靠它。

   **English**: With SSH, the core use case is…
- Options: A. Signing email  B. Hosting web pages  C. Compressing files  D. Secure remote login and transfer over an untrusted network
- Answer: **D** · SSH replaces naked Telnet with public-key authentication plus an encrypted channel — passwords and keys never cross the wire in clear text. It is the daily tool of every sysadmin.

170. **中文**：勒索软件（Ransomware）最常见的得手方式是？
- 选项：A. 钓鱼附件/漏洞渗透后加密受害者文件，索要加密货币赎金  B. 无线信号远程烧毁硬盘  C. 硬件老化  D. 暴力破解 Wi-Fi
- 答案：**A** · 勒索软件（Ransomware）是「数据+备份+业务连续性」三线考题：隔离备份、及时更新、可疑附件不打开是三道防线。

   **English**: How do Ransomware attacks most often succeed?
- Options: A. Phishing attachments or exploit breaches, then encrypting files for cryptocurrency ransom  B. Burning drives via radio  C. Hardware aging  D. Brute-forcing Wi-Fi
- Answer: **A** · Ransomware is a three-line test of data, backups and continuity: isolated backups, patching, and never opening suspicious attachments are the defenses.

171. **中文**：美军 M-209 的商用原型是哈格林的？
- 选项：A. Hagelin C-36 齿轮机  B. Hagelin C-38 销轮密码机  C. Hagelin D-40 电子机  D. C-55 转盘
- 答案：**B** · Hagelin C-38（1930 年代瑞典哈格林的销轮密码机）以改型 M-209 装备美军 14 万台：6 枚凸轮销轮 + 博福特式自倒置运算，二战战场部队情报的标准设备。

   **English**: The commercial prototype of the US M-209 was Hagelin's…
- Options: A. C-36 gear machine  B. C-38 lug machine  C. D-40 electronic  D. C-55 disk
- Answer: **B** · The Hagelin C-38 (Sweden, 1930s) became the US M-209 in 140,000 units: six lugged wheels over a Beaufort-style self-inverse engine — the standard field machine of WWII.

172. **中文**：「陷门函数」（Trapdoor Function）指？
- 选项：A. 完全没有密钥也能反向的函数  B. 只能加密不能解密  C. 输出不可恢复  D. 正向容易，无钥匙反向几乎不可能，有钥匙则轻松
- 答案：**D** · 陷门 = 专门设计的后门捷径：RSA 的正向是模幂、反向是大数分解（难），但持有私钥者用陷门参数一步还原——公钥密码的数学根基。

   **English**: A "Trapdoor Function" is one where…
- Options: A. Reversal is possible without any key  B. Encryption works but decryption never does  C. Output is unrecoverable  D. Forward is easy, reverse is hard without a key and trivial with it
- Answer: **D** · The trapdoor is a designed shortcut: RSA forward is modular exponentiation, reverse is factoring (hard) — yet the private key applies trap information to invert instantly. This is the mathematical foundation of public-key crypto.

173. **中文**：伪随机函数（PRF）在协议里的典型角色是？
- 选项：A. 生成可预测的展示数字  B. 压缩数据  C. 用密钥把输入映射成看似随机的输出  D. 替代公钥
- 答案：**C** · PRF：给定密钥，同一输入总是同一输出，但没密钥者分不出它与均匀随机——HMAC、TLS 1.3 的密钥派生都建立在 PRF 上（与无密钥的 PRG 相对）。

   **English**: Inside protocols, a Pseudorandom Function (PRF) is typically used to…
- Options: A. Produce predictable display numbers  B. Compress data  C. Map inputs to random-looking outputs under a key  D. Replace public keys
- Answer: **C** · A PRF yields the same output for the same keyed input, indistinguishable from uniform randomness to anyone without the key — the foundation of HMAC and TLS 1.3 key derivation (as opposed to keyless PRGs).

174. **中文**：S/MIME 是做什么的邮件安全标准？
- 选项：A. 基于 X.509 证书的邮件加密与签名  B. 邮件压缩  C. 垃圾邮件过滤  D. IMAP 同步
- 答案：**A** · S/MIME 让「谁发的、是否被篡改、只有收件人可读」三件事在邮件上成立：用对方证书的公钥加密、自己的私钥签名；PGP 的「信任之网」是它的去中心化对照路线。

   **English**: S/MIME is the email security standard for…
- Options: A. Encryption and signing with X.509 certificates  B. Compression  C. Spam filtering  D. IMAP sync
- Answer: **A** · S/MIME establishes who sent the mail, whether it was altered, and that only the recipient can read it — encrypting to the recipient's certificate key, signing with yours; PGP's web of trust is the decentralized counterpart.

175. **中文**：中国剩余定理（CRT）在 RSA 私钥运算里的用途是？
- 选项：A. 生成公钥  B. 把模幂分解到两个小模数上并行计算，提速 3-4 倍  C. 生成随机数  D. 验证签名
- 答案：**B** · CRT 让「B^x mod pq」变成「mod p 与 mod q 两路并行再重组」——RSA 私钥操作提速数倍；但简单实现对 CRT 结果不做一致性校验会引入故障注入漏洞。

   **English**: In RSA private-key operations, the Chinese Remainder Theorem is used to…
- Options: A. Generate public keys  B. Split the modexp across two smaller moduli in parallel, 3-4x faster  C. Make randomness  D. Verify signatures
- Answer: **B** · CRT turns one B^x mod pq into parallel B^p and B^q computations recombined — several times faster; naive CRT implementations without consistency checks invite fault attacks.

176. **中文**：Kerberos 认证体系的核心物件是？
- 选项：A. 公钥证书链  B. 受信中心签发的票据（Ticket），口令不上网  C. 区块链账本  D. 一次性密码本
- 答案：**B** · Kerberos（MIT，神话三头犬命名）：口令本地换「TGT」票据，随后凭票据取服务票据——口令只在本地派生，网络上传的全是票据；它修正了经典的 Needham-Schroeder 重放问题。

   **English**: The core object of Kerberos authentication is…
- Options: A. Certificate chains  B. Tickets issued by a trusted center — passwords never cross the network  C. A blockchain ledger  D. One-time pads
- Answer: **B** · Kerberos (MIT, named for the three-headed dog): the password derives a TGT locally, which exchanges for service tickets — only tickets travel the wire, and the classic Needham-Schroeder replay flaw is fixed.

177. **中文**：Hashcash 用什么机制挡住垃圾邮件？
- 选项：A. 发件方付出一小笔算力找前导零证明  B. 要求邮件签名  C. 强制加密邮件  D. 维护黑名单
- 答案：**A** · Hashcash（1997，Adam Back）要求邮件头含一个计算出的哈希工作量证明——发送成本 0.1 秒，群发成本爆炸；十年后中本聪把它变成了比特币的工作量证明核心。

   **English**: Hashcash fights spam by…
- Options: A. Requiring senders to spend real CPU finding a leading-zero proof  B. Requiring signatures  C. Mandating encryption  D. Blacklists
- Answer: **A** · Hashcash (1997, Adam Back) demands a proof-of-work hash in each header — ~0.1s per mail costs a spammer oblivion. A decade later Satoshi made it Bitcoin's core; it is the ancestor of modern "internet challenges".

178. **中文**：McEliece 公钥密码基于哪个难题？
- 选项：A. 大数分解  B. 纠错码的一般解码（Goppa 码）  C. 离散对数  D. 格最短向量
- 答案：**B** · McEliece（1978）用 Goppa 码的还原：公钥是一张「被乱序的生成矩阵」，加密=加码+加噪；与 RSA 不同，它没有已知量子攻击，代价是公钥非常大——NIST 竞选的常青树。

   **English**: McEliece public-key crypto rests on…
- Options: A. Integer factorization  B. Generic decoding of error-correcting codes (Goppa codes)  C. Discrete logarithms  D. Shortest lattice vectors
- Answer: **B** · McEliece (1978): the public key is a scrambled generator matrix; encryption is codeword-plus-noise, decryption needs the Goppa trapdoor. Unlike RSA it has no known quantum attack — the price is enormous keys.

179. **中文**：NIST 后量子签名标准之一的 Falcon 基于？
- 选项：A. 哈希树  B. 纠错码  C. 格上的 NTRU 短签名  D. 多变量方程
- 答案：**C** · Falcon（2022 年 NIST 选定的第三签名）基于 NTRU 格的高斯采样短向量签名：签名很短（~40B）、验证快，与 ML-DSA、SLH-DSA（SPHINCS+）并列为后量子签名三件套。

   **English**: NIST's post-quantum signing standard Falcon is based on…
- Options: A. Hash trees  B. Error-correcting codes  C. Short-signature sampling in NTRU lattices  D. Multivariate equations
- Answer: **C** · Falcon (selected by NIST in 2022) signs short vectors in the NTRU lattice: ~40-byte signatures, fast verification — joining ML-DSA and SLH-DSA (SPHINCS+) as the post-quantum signing trio.

180. **中文**：「后量子混合」（Hybrid）方案指？
- 选项：A. 只使用量子密钥  B. 只更换哈希函数  C. 经典算法与后量子算法组合——任一被破整体仍安全  D. 将密钥翻倍
- 答案：**C** · 迁移期的标准做法：X25519+ML-KEM、ECDSA+ML-DSA 双栈共存——即使某天 Shor 成熟，经典层被破，后量子层依旧护住；TLS/SSH 最新草案都按这个路线。

   **English**: A "post-quantum Hybrid" scheme means…
- Options: A. Using only quantum keys  B. Just swapping hash functions  C. Combining classical and PQ algorithms — surviving even if one falls  D. Doubling keys
- Answer: **C** · The migration pattern: X25519+ML-KEM, ECDSA+ML-DSA dual stacks. Even if Shor matures and the classical layer falls, the PQ layer still protects — latest TLS and SSH drafts follow exactly this path.

181. **中文**：「字典攻击」比纯暴力破解高效的原因是？
- 选项：A. 它每分钟只能试三次  B. 它需要量子计算机  C. 它从常见口令词典与变形规则入手  D. 它直接读取内存
- 答案：**C** · 人类口令服从分布：123456、password、年年生日……字典攻击把搜索空间从天文数字压缩到「人脑词典×规则变形」——盐值+慢哈希+口令短语是它的终结者。

   **English**: Why is a Dictionary Attack far more efficient than brute force?
- Options: A. It is rate-limited to three tries a minute  B. It needs a quantum computer  C. It starts from common-password lists plus rule mutations  D. It reads memory directly
- Answer: **C** · Human passwords cluster: 123456, password, birthdays. Dictionary attacks shrink the space to brain dictionaries times mutations — salt, slow hashing and passphrases end them.

182. **中文**：「安全启动」（Secure Boot）的验签链条是？
- 选项：A. 只验最后一环  B. 从信任根开始：引导器→内核→固件逐级验签  C. 只验操作系统  D. 验签一次就永久信任
- 答案：**B** · 信任根（厂商公钥）开机即验证引导器、引导器验证内核、内核验证固件——攻击者只要在某环被挡住，链条就断在那里。

   **English**: The Secure Boot verification chain is…
- Options: A. Only the final stage is checked  B. From a root of trust: bootloader, kernel, firmware, signed at each link  C. The OS alone  D. One check, trusted forever
- Answer: **B** · A root of trust verifies the bootloader, which verifies the kernel, which verifies firmware — an attacker must break a specific link to get anywhere.

183. **中文**：中国的《密码法》把密码分为几类？
- 选项：A. 一类：通用密码  B. 两类：军用与民用  C. 四类：软、硬、云、端  D. 三类：核心、普通、商用
- 答案：**D** · 《密码法》2020 年施行：核心密码与普通密码用于国家秘密，商用密码面向市场——「商用密码」体系（SM2/SM3/SM4/SM9/ZUC）由此获得法律位置。

   **English**: China Cryptography Law divides ciphers into…
- Options: A. One class: general  B. Two: military and civilian  C. Four: soft, hard, cloud, edge  D. Three: core, ordinary, commercial
- Answer: **D** · In force since 2020: core and ordinary tiers guard state secrets; the commercial tier (SM2/SM3/SM4/SM9/ZUC) gains its legal footing.

184. **中文**：「图灵 1936」与「冯·诺依曼架构」分别贡献了计算机的什么？
- 选项：A. 可计算性模型；程序与数据同存  B. 加密算法；显示器  C. 网络协议；硬盘  D. 数学证明；键盘
- 答案：**A** · 图灵 1936 年用抽象机思想界定「能算什么」；冯·诺依曼给出「怎么造」：程序与数据同存于存储器——密码破译从手工走向机器的两个支点。

   **English**: Turing 1936 and the von Neumann architecture contributed…
- Options: A. A model of computability; storing programs and data together  B. Ciphers; monitors  C. Network protocols; hard disks  D. Proofs; keyboards
- Answer: **A** · Turing defined what can be computed at all; the von Neumann architecture told us how to build it: program and data in one memory. Two pillars took codebreaking from hands to machines.

185. **中文**：认证「密码模块」安全等级的标准 FIPS 140 出自？
- 选项：A. 欧盟 ENISA  B. 国际标准组织 ISO  C. 美国 NIST  D. 中国商密办
- 答案：**C** · FIPS 140-2/140-3 是美国 NIST 的密码模块评测标准：物理外壳、密钥管理、随机测试、自检四层——政府采购与合规的通用语言。

   **English**: The FIPS 140 standard for cryptographic module security comes from…
- Options: A. EU ENISA  B. ISO  C. US NIST  D. China SAFA
- Answer: **C** · FIPS 140-2/140-3 is the US module evaluation standard: envelope, key management, RNG tests and self-tests — the common language of procurement and compliance.

186. **中文**：「SIM 卡劫持」骗术为什么致命？
- 选项：A. 它偷的是手机壳  B. 骗子让运营商把号码转入自己卡，接管你的短信验证码  C. 它只影响通话  D. 它需要物理接触手机
- 答案：**B** · 短信验证码 = 「你拥有的东西」，但 SIM 劫持者能拥有同一个号码——高价值账户应切换至 TOTP/Passkey 这类不依赖短信的因子。

   **English**: Why is a SIM-swap scam so dangerous?
- Options: A. It steals the phone case  B. The attacker gets your number reissued to their SIM, owning your SMS codes  C. It affects calls only  D. It needs physical access
- Answer: **B** · SMS codes rely on something you have — and a SIM swapper has the same number. High-value accounts should move to TOTP or Passkey factors independent of SMS.

187. **中文**：双重换位密码（Double Transposition）为什么比单次列换位难破得多？
- 选项：A. 两次不同密钥/宽度的换位叠加，统计结构被打散两次  B. 它使用了公钥  C. 它每轮都改名  D. 它加密的是字母频率
- 答案：**A** · 第一层换位把字母打散一次，第二层用不同宽度再加一次——频率分析与格子推断都要摆对两层；冷战初期它的安全性仍获密码学家尊重。

   **English**: Why is Double Transposition much harder than a single keyed columnar?
- Options: A. Two different-width transpositions in sequence scatter structure twice  B. It uses public keys  C. It renames each round  D. It encrypts letter frequencies
- Answer: **A** · One scatter, then a second with different width, so both frequency and grid attacks must handle two layers. Even in the early Cold War it commanded respect.

188. **中文**：四格密码（Four-square）比 Playfair 多用了什么？
- 选项：A. 转子  B. 两个密钥方阵  C. 数字表  D. 电子开关
- 答案：**B** · 四格：两个标准表 + 两个密钥方阵，明文对按「对角取位」加密——强度高一个量级，是 1900 年代欧洲官方手册里的推荐手工密码。

   **English**: The Four-square cipher adds what over Playfair?
- Options: A. Rotors  B. Two keyed squares  C. Number tables  D. Electrical switches
- Answer: **B** · Two plain squares plus two keyed squares, digraphs taken diagonally — a class stronger than Playfair, recommended in official European manuals of the 1900s.

189. **中文**：战后英国的 Rockex 密码机源自哪里？
- 选项：A. 美国陆军  B. 日本海军  C. 苏联密码局  D. 布莱切利园的洛伦兹研究
- 答案：**D** · Rockex 由 Bletchley 研究 Lorenz 的班底设计（1943 年提出、战后装备）：滚轮机加打印机，服务英国外交电报直至 1960 年代——Lorenz 遗产的和平化身。

   **English**: The postwar British Rockex machine descended from…
- Options: A. The US Army  B. The Japanese Navy  C. A Soviet agency  D. Bletchley Lorenz research
- Answer: **D** · Designed by the Lorenz veterans, proposed 1943 and fielded after victory: rotor machine plus printer carrying British diplomatic traffic into the 1960s.

190. **中文**：CCM 联合密码机（Combined Cipher Machine）的作用是？
- 选项：A. 加密维也纳会议记录  B. 破解紫密  C. 让英美加密电报互通  D. 打印摩斯电码
- 答案：**C** · 1943 年后英国 Typex 与美国 Mark 22 改装为同一密码体制——盟军跨大西洋通信首次共用一个安全体系，也是「互操作性」的密码学起点。

   **English**: The Combined Cipher Machine did what?
- Options: A. Encrypted Viennese records  B. Broke Purple  C. Made Anglo-American encrypted traffic interoperable  D. Printed Morse
- Answer: **C** · From 1943 British Typex and US Mark 22 were adapted to one cipher — the first shared Allied Atlantic security, and cryptography s early interoperable standard.

191. **中文**：CFB/OFB 模式把分组密码变成了什么？
- 选项：A. 流密码——逐位/逐字节处理且无需填充  B. 哈希函数  C. 签名算法  D. 密钥封装协议
- 答案：**A** · CFB 用密文反馈、OFB 用输出反馈：两者都让分组密码像流密码一样工作（无填充、粒度细）；代价是 CFB 的错误传播与 OFB 不支持并行。

   **English**: CFB/OFB modes turn a block cipher into…
- Options: A. A stream cipher — bit/byte granular with no padding  B. A hash function  C. A signature scheme  D. A KEM
- Answer: **A** · CFB uses ciphertext feedback, OFB output feedback: both act like stream ciphers, no padding, fine granularity — at the cost of error propagation (CFB) and no parallelism (OFB).

192. **中文**：KASUMI 是哪个领域的标准分组密码？
- 选项：A. Wi-Fi 802.11  B. 3G 移动通信  C. 蓝牙  D. 卫星电视
- 答案：**B** · KASUMI：64 位分组、128 位密钥的 Feistel 密码，是 3G（WCDMA）加密与完整性保护的基础算法——手机悄悄保护你的核心引擎。

   **English**: KASUMI is the standard block cipher of…
- Options: A. Wi-Fi 802.11  B. 3G mobile networks  C. Bluetooth  D. Satellite TV
- Answer: **B** · KASUMI: 64-bit blocks, 128-bit keys, Feistel — the base of WCDMA confidentiality and integrity. It is the quiet engine inside your phone.

193. **中文**：CIA 总部的 Kryptos 雕塑现状是？
- 选项：A. 四段全部破解  B. 只破解了一段  C. 四段中三段已破解，第四段仍是谜  D. 从未公开
- 答案：**C** · 865 字符四分：K1-K3 已被破解（分别为诗/时间胶囊/坐标线索），K4 至今无人解出——创作者 Jim Sanborn 说答案只在他脑中，是「活着的密码悬案」。

   **English**: The state of the Kryptos sculpture at CIA HQ?
- Options: A. All four sections solved  B. Only one solved  C. Three of four solved, the fourth still open  D. Never public
- Answer: **C** · 865 characters in four parts: K1-K3 cracked (a poem, a time capsule and coordinates); K4 remains unsolved. Artist Jim Sanborn holds the answer — a living cipher mystery.

194. **中文**：AES 竞标落选的 RC6 最鲜明的设计特征是什么？
- 选项：A. 位置无关的常数轮  B. 数据相关的循环移位  C. 查找表加密  D. 16 位固定轮
- 答案：**C** · RC6 让每轮的移位量取决于数据本身——「数据相关旋转」；惜败 Rijndael 后，这一思路仍深刻影响了对称密码设计的多样性。

   **English**: The defining design trait of the AES-losing RC6?
- Options: A. Position-independent constant rounds  B. Data-dependent rotations  C. Table-driven encryption  D. Fixed 16-bit rounds
- Answer: **C** · RC6 made each round shift by an amount derived from the data itself. It lost to Rijndael but its data-dependent rotation deeply influenced cipher design diversity.

195. **中文**：「教科书 RSA」必须加填充（PKCS#1/OAEP）的原因是？
- 选项：A. 填充能加快运算  B. 裸加密是确定性的，且可被数学攻击  C. 填充是法律要求  D. 为了压缩
- 答案：**B** · 裸 RSA 对同一明文恒得同一密文（确定性）+ 可被差分/代数手段攻击；PKCS#1 v1.5 或 OAEP 注入随机冗余——无正确填充的 RSA 实现是教科书级漏洞。

   **English**: Textbook RSA requires padding (PKCS#1/OAEP) because…
- Options: A. Padding speeds it up  B. Bare encryption is deterministic and mathematically attackable  C. The law requires it  D. It compresses better
- Answer: **B** · Textbook RSA maps the same plaintext to the same ciphertext and invites algebraic attacks; PKCS#1 v1.5 or OAEP injects random redundancy. Unpadded RSA is the textbook implementation flaw.

196. **中文**：「密钥混淆」攻击（Key Confusion）的现代根治手段是？
- 选项：A. 域分离：给密钥加明确的用途标签  B. 把密钥加长  C. 换哈希算法  D. 关掉 TLS
- 答案：**A** · 不同的协议语境必须严格区分：签名密钥绝不能「以另一种解释」被复用——TLS 1.3 的标签常量、签名中的域分隔前缀都是这一思想的工程化。

   **English**: The modern cure for Key Confusion attacks is…
- Options: A. Domain separation: explicit usage labels attached to keys  B. Longer keys  C. Swapping hash algorithms  D. Disabling TLS
- Answer: **A** · Distinct protocol contexts must be strictly separated: a signing key must never be interpretable another way. TLS 1.3 labels and domain-separation prefixes are this idea in engineering form.

197. **中文**：DH 交换只校验「大素数」还不够，为什么？
- 选项：A. 因为素数会过期  B. 因为有人能算出原根  C. 因为浏览器不支持  D. 不验证参数可能被拖入小阶子群攻击
- 答案：**D** · 缺陷参数可能把共享值旋进少数元素的小群——现代库强制校验 p 为安全素数、g 的阶足够大。算法正确 ≠ 参数正确。

   **English**: Checking DH for just a big prime is not enough, why?
- Options: A. Primes expire  B. Someone can compute the primitive root  C. Browsers reject it  D. Unvalidated parameters can trap the shared value in a small subgroup
- Answer: **D** · Weak parameters can confine the exchange to a tiny subgroup; modern libraries force safe primes and large orders. Correct algorithm does not mean correct parameters.

198. **中文**：关于 NIST P-256 曲线，被长期讨论的一点是？
- 选项：A. 其常数的来源没有完全公开解释  B. 它只有 128 位安全  C. 它无法签名  D. 它是国密算法
- 答案：**A** · P-256 是 TLS 1.3 的主力曲线，但其参数（曲线常数）生成过程未公开——历史上其他曲线有过「可疑常数」的先例，这也是国密与 Ed25519 路线各自声称更透明的原因。

   **English**: A long-discussed point about NIST P-256 is…
- Options: A. The provenance of its constants was never fully explained  B. It offers only 128-bit security  C. It cannot sign  D. It is a Chinese standard
- Answer: **A** · P-256 dominates TLS 1.3, yet its curve constants were generated in a process never disclosed — a talking point given past suspicious constants, and why curves like Ed25519 and SM2 emphasize transparency.

199. **中文**：KMAC/cSHAKE 相对经典哈希 MAC 的核心新增能力是？
- 选项：A. 速度翻倍  B. 原生支持上下文与功能名（域分离）  C. 更短输出  D. 无需密钥
- 答案：**B** · cSHAKE 可定制上下文标签，KMAC 在其上派生密钥 MAC——把「同一个哈希绝不能既当签名又当 MAC」的教训做进了语言特性。

   **English**: What do KMAC/cSHAKE add compared with classic hashed MACs?
- Options: A. Double speed  B. Native context and function-name support (domain separation)  C. Shorter outputs  D. Keyless operation
- Answer: **B** · cSHAKE accepts custom context labels, KMAC derives a keyed MAC on top — building the lesson that one hash must not serve as both signature and MAC into the language itself.

200. **中文**：「代数攻击」的范式是？
- 选项：A. 猜测密钥并用反馈验证  B. 用时间差恢复比特  C. 伪造证书  D. 把密码写成低次方程组并求解
- 答案：**D** · 将内部状态映射为代数方程组（流密码/分组密码皆可），再用求解器高斯化——设计者必须保证代数次数足够高且系统不可约。

   **English**: The paradigm of an Algebraic Attack is…
- Options: A. Guess keys and verify with feedback  B. Recover bits from timing  C. Forge certificates  D. Model the cipher as low-degree equations and solve them
- Answer: **D** · Internal states become polynomial systems, then solvers do the rest — designers must keep algebraic degree high and the system irreducible.

201. **中文**：Spectre/Meltdown 类攻击的深层教训是？
- 选项：A. CPU 的推测执行与缓存痕迹本身就是侧信道——代码零漏洞也可能泄露  B. 操作系统不能修  C. 必须换掉所有 CPU  D. 它们只影响服务器
- 答案：**A** · 2017 年公开：为提速而做的推测执行会在缓存里留下访问痕迹，被时序测量读出——「实现与微架构」从此进入安全模型。

   **English**: The deep lesson of Spectre/Meltdown-class attacks is…
- Options: A. CPU speculation and cache traces are themselves a side channel — flawless code can still leak  B. No OS fix exists  C. All CPUs must be replaced  D. Only servers are affected
- Answer: **A** · Since 2017: performance speculation leaves cache traces measurable by timing. Implementation and microarchitecture have been part of the security model ever since.

202. **中文**：SNARK 与 STARK 的关键区别是？
- 选项：A. STARK 更快但不需要证明  B. SNARK 常需要可信初始化，STARK 无需且靠哈希  C. SNARK 是量子算法  D. STARK 只能验证数学题
- 答案：**B** · 「简洁非交互」是共同点；区别在信任模型：SNARK 的证明系统常依赖一个可信初始化参数，STARK 仅依赖哈希（透明、抗量子）。

   **English**: The key difference between SNARK and STARK?
- Options: A. STARK is faster but proves nothing  B. SNARK often needs a trusted setup; STARK needs none and relies on hashes  C. SNARK is a quantum algorithm  D. STARK only verifies math
- Answer: **B** · Both are succinct and non-interactive; the difference is trust: SNARKs usually require a trusted setup parameter, STARKs require only hashing — transparent and quantum-light.

203. **中文**：「混淆电路」（Garbled Circuit）属于哪个领域的经典技术？
- 选项：A. 古典密码学  B. 哈希碰撞  C. 安全多方计算的电路级求值  D. 数字证书
- 答案：**C** · Yao 1986：把函数编成乱码电路，两方各自输入、无第三方也能评估——与不经意传输同为 MPC 的两大基础件。

   **English**: Garbled Circuits are a classic technique of…
- Options: A. Classical ciphers  B. Hash collisions  C. Circuit-level evaluation in secure multiparty computation  D. Certificates
- Answer: **C** · Yao in 1986: encode the function as a garbled circuit so two parties can evaluate without a third party — with oblivious transfer, one of two MPC foundations.

204. **中文**：「视觉密码」（Visual Cryptography）的隐藏方式是什么？
- 选项：A. 一份密文切片分发给多张透明片，叠合才见秘密  B. 在图里藏文件尾  C. 修改像素低频  D. 用摩斯点划
- 答案：**A** · 秘密被写成两层随机噪声，任一层都是雪花，两层叠加按黑白规则浮现图案——门限思想的物理形式，也是「拆分+无计算」的极致演示，教室秒懂。

   **English**: How does Visual Cryptography hide a secret?
- Options: A. Shares of ciphertext become transparent films that only reveal the secret when stacked  B. Append data to a file  C. Modify low-frequency pixels  D. Use Morse dashes
- Answer: **A** · The secret splits into two random-noise layers that look like snow alone but form a picture when overlaid — threshold thinking in physical form, and a classroom instant-classic of split-without-computation.

205. **中文**：零知识证明的三性是指？
- 选项：A. 快速、便宜、公开  B. 完整、清晰、简短  C. 哈希、签名、验证  D. 完备性、可靠性、零知识
- 答案：**D** · 完备性：真命题一定有证明；可靠性：假命题通过概率可忽略；零知识：验证者除结论外一无所知——三者合起来才叫真正的零知识。

   **English**: The three properties of zero-knowledge proofs are…
- Options: A. Fast, cheap, public  B. Complete, clear, brief  C. Hash, sign, verify  D. Complete, sound, zero-knowledge
- Answer: **D** · Completeness: true statements always prove; Soundness: false statements pass with negligible probability; Zero-knowledge: the verifier learns nothing but the verdict. All three together make true ZK.

206. **中文**：2023 年《商用密码管理条例》修订强化了什么？
- 选项：A. 禁止商用密码出口  B. 商用密码检测认证与安全评估、进出口清单  C. 取消国密算法  D. 统一用国际标准
- 答案：**C** · 细化市场准入：检测认证、安全评估、进口出口清单，推动 SM 系列在电子政务与金融基础设施落地——国密体系的法治闭环。

   **English**: What did the 2023 revised Commercial Cryptography Regulation strengthen?
- Options: A. Banning exports of commercial crypto  B. Certification, security assessment and import/export lists for commercial crypto  C. Abolishing SM algorithms  D. Mandating international standards
- Answer: **C** · It detailed market access: detection and certification, security assessment, and import/export lists — pushing SM algorithms into e-government and finance, the legal loop of the SM ecosystem.

207. **中文**：「密码战争」（Crypto Wars）争论的核心是？
- 选项：A. 政府要万能后门 vs 用户要不可旁听的加密  B. 哈希函数哪个更快  C. 哪款手机更安全  D. 量子计算机的价格
- 答案：**A** · 1990 年代以 PGP 出口管制为引爆点：情报界要求可合法访问的后门，密码学家论证「后门也挡不住坏人」——这场拉锯至今仍在（端到端加密、双随机数生成器争议）。

   **English**: The Crypto Wars debate is fundamentally about…
- Options: A. Governments wanting lawful backdoors versus users wanting unreadable encryption  B. Which hash is faster  C. Which phone is safer  D. Quantum computer prices
- Answer: **A** · Ignited by 1990s PGP export controls: intelligence wants accessible decryption, cryptographers reply that backdoors cannot keep bad actors out. The tug-of-war continues with E2EE and RNG controversies.

208. **中文**：斯诺登披露的「元数据收集」为什么让密码学家警惕？
- 选项：A. 因为元数据加密了  B. 因为元数据不加  C. 因为元数据本身就是情报：谁、何时、与谁联系  D. 因为元数据是伪造的
- 答案：**C** · 通信内容可能受强加密保护，但「时间、对端、频率」组成的元数据却是天然的情报矿——这正是流量分析的世界观，也是端到端加密与时序混淆的动机。

   **English**: Why did the Snowden metadata disclosures alarm cryptographers?
- Options: A. Because metadata was encrypted  B. Because metadata is not additive  C. Because metadata is itself intelligence: who, when, with whom  D. Because metadata was fabricated
- Answer: **C** · Content may be strongly encrypted, yet timing, endpoints and frequency form a natural intelligence mine — the traffic-analysis worldview, and the motive for E2EE and timing obfuscation.

209. **中文**：QRNG（量子随机数发生器）相比软件随机源的差异是什么？
- 选项：A. 更快  B. 更省电  C. 输出可预测  D. 利用量子过程的真随机性，物理上不可预测
- 答案：**D** · 软件 PRG 的随机性来自算法+种子的组合；QRNG 从量子测量（光子到达）取熵——「物理真随机」对密钥生成是奢侈品，对安全是加固。

   **English**: How does a QRNG differ from software randomness sources?
- Options: A. Faster  B. Battery-friendlier  C. Predictable output  D. Draws entropy from quantum processes — physically unpredictable
- Answer: **D** · Software PRGs are algorithm plus seed; QRNGs harvest entropy from quantum measurement (photon arrivals). Physical true randomness is a luxury for key generation — and hardening for security.

210. **中文**：PKI 里「证书吊销」的两种主流机制是？
- 选项：A. 改密码与重启  B. OCSP 在线状态协议 与 CRL 撤销列表  C. 退款与投诉  D. 下线与重发
- 答案：**B** · 私钥泄露或 CA 失误需要「让证书立即作废」：CRL 是 CA 定期发布的黑名单，OCSP 是实时查询——各有延迟与隐私、性能上的权衡。

   **English**: The two mainstream certificate revocation mechanisms in a PKI are…
- Options: A. Password reset and reboot  B. OCSP (online status) and CRL (revocation lists)  C. Refunds and complaints  D. Shutdown and reissue
- Answer: **B** · Compromised keys or CA errors require instant invalidation: CRL is a periodic blacklist, OCSP answers live queries — each trading off freshness, privacy and latency.

211. **中文**：空密码（Null Cipher）如何隐藏秘密？
- 选项：A. 把秘密按约定位置藏在无关文字里  B. 把字母表整体后移  C. 用两把密钥交替加密  D. 把密文反过来读
- 答案：**A** · 空密码（Null Cipher）不加密文字本身：秘密藏在「约定位置」——每句第 3 个字、全小写的字母、每行末字母……敌手看到的只是一封普通信件，与格栅一样属于「藏而不掩」。

   **English**: How does a Null Cipher hide a secret?
- Options: A. By concealing it at agreed positions inside innocent text  B. By shifting the alphabet  C. By alternating two keys  D. By reading ciphertext backwards
- Answer: **A** · A Null Cipher encrypts nothing: the secret hides at agreed positions — every 3rd letter, every lowercase letter, the last letter of each line. Like a grille, it hides existence rather than content.

212. **中文**：密码管理器（Password Manager）最核心的价值是？
- 选项：A. 为每个网站生成并保管唯一强口令  B. 让口令永远不会泄露  C. 自动登录所有网站  D. 取代双因素认证
- 答案：**A** · 一个强主口令加密保管所有站点的随机口令（如 KeePassXC / Bitwarden）：「记住 N 个口令」降为「记住 1 个」——撞库的最大前提（多站同密码）就此消失。

   **English**: What is the core value of a Password Manager?
- Options: A. Generates and stores a unique strong password per site  B. Makes passwords impossible to leak  C. Auto-logs into every site  D. Replaces two-factor authentication
- Answer: **A** · One strong master secret guards every site's unique random password: remember ONE instead of N. Credential stuffing — reusing a single password everywhere — loses its main premise. (KeePassXC, Bitwarden...)

213. **中文**：「流量分析」（Traffic Analysis）如何获取情报？
- 选项：A. 不读内容，只看通信的时间、数量与方向  B. 破译报文内容  C. 暴力破解密钥  D. 安装木马
- 答案：**A** · 哪怕密文永远解不开：什么时间通信、多大报文、谁和谁在谈本身就是情报——二战盟军仅凭敌军无线电流量的变化判断部队调动；今天端到端加密（End-to-End Encryption）与 Tor 抵抗的正是流量分析。

   **English**: How does Traffic Analysis gather intelligence?
- Options: A. By reading only timing, volume and direction — not content  B. By breaking message content  C. By brute-forcing keys  D. By installing malware
- Answer: **A** · Even unbreakable ciphers leak: when, how much, and who talks to whom. WWII Allies tracked German movements from radio traffic alone; end-to-end encryption and Tor defend precisely against traffic analysis.

214. **中文**：为什么密码学密钥不能用普通的 Math.random() 生成？
- 选项：A. 它的种子可预测，整个序列都可以被复现  B. 它只能生成数字  C. 它太慢了  D. 它不受分布控制
- 答案：**A** · 普通伪随机数生成器（PRG）以时间等可猜元素为种子——序列一旦复现，密钥即泄露（2013 年 Android 比特币钱包因此损失私钥）。密码学只用 CSPRNG：以操作系统或 Web Crypto 的真随机熵为种子的安全伪随机生成器。

   **English**: Why must crypto keys never come from plain Math.random()?
- Options: A. Its seed is predictable, so the whole sequence can be reproduced  B. It only produces digits  C. It is too slow  D. It ignores distributions
- Answer: **A** · An ordinary Pseudorandom Generator (PRG) seeds from guessable inputs like time — reproduce the sequence and you own the keys (Android's 2013 Bitcoin wallet losses). Crypto requires a CSPRNG seeded with real entropy from the OS or Web Crypto.

215. **中文**：下载页面附带的「SHA-256 校验和」起什么作用？
- 选项：A. 证明你下载的文件与官方一致、未被篡改  B. 给文件加密  C. 压缩文件体积  D. 统计下载次数
- 答案：**A** · 校验和是文件的密码学哈希（Cryptographic Hash）指纹：单向不可逆、难以碰撞——与普通 CRC 不同，它必须能对抗恶意构造：下载链接被调包、镜像被投毒都逃不过去。

   **English**: What does the "SHA-256 checksum" on a download page do?
- Options: A. Proves your file matches the official one, unmodified  B. Encrypts the file  C. Compresses the file  D. Counts downloads
- Answer: **A** · It is the file's cryptographic hash fingerprint — one-way and collision-resistant. Unlike a plain CRC, a Cryptographic Hash must withstand adversarial inputs: swapped download links, poisoned mirrors.

216. **中文**：Porta 密码（1563）最独特的地方是？
- 选项：A. 加密和解密共用同一张表——自互逆  B. 需要矩阵求逆  C. 只加密辅音  D. 不改变字母顺序
- 答案：**A** · 波尔塔 1563 年发表的 Porta Cipher：每个密钥字母承包一对字母表，明文字母域与密文字母域重合——表对称，加密即解密，无需逆表；这组设计被 19 世纪职业密码教材收录并延用至一战。

   **English**: What makes the 1563 Porta Cipher unique?
- Options: A. One table both encrypts and decrypts — it is self-reciprocal  B. It needs matrix inversion  C. It only handles consonants  D. It keeps alphabet order
- Answer: **A** · Each key letter covers a whole pair of alphabets and plaintext shares its range with ciphertext — the table is symmetric, so encryption equals decryption. One of the Renaissance Italian school's most durable designs, still taught into WWI.

217. **中文**：英国二战使用的 Typex 密码机与 Enigma 的关系是？
- 选项：A. 基于 Enigma 改造的五转子打字机，德方始终未能破译  B. 与商用 Enigma 完全相同的机器  C. 只有两个转子  D. 它是一台加法机
- 答案：**A** · Typex 是英国 1937 年自行设计的五转子密码机：转子布置比 Enigma 更复杂、直接连打字机输入。德军始终无法读取 Typex 通信——而同时在布莱切利园（Bletchley Park），盟军把 Enigma 读了个透。

   **English**: How does Britain's WWII Typex machine relate to Enigma?
- Options: A. A British five-rotor adaptation of Enigma that Germany never read  B. Identical to the commercial Enigma  C. Only two rotors  D. An adding machine
- Answer: **A** · Typex (1937) rebuilt the Enigma idea: five rotors, a more complex rotor arrangement and a typewriter for input. Germany never broke Typex traffic, while the Allies read Enigma daily at Bletchley Park.

218. **中文**：维吉尼亚方表（Tabula Recta）是？
- 选项：A. 26×26 方阵：第 i 行是字母表左移 i 位，密钥字母选行  B. 一张 5×5 波利比奥斯方阵  C. 一个转子排列  D. 一张频率统计表
- 答案：**A** · Tabula Recta（「真言表」）：密钥字母选行、明文字母选列、交点即密文——维吉尼亚、博福特等所有古典多表替换的查表核心，统治古典密码两百年。

   **English**: The Tabula Recta is …
- Options: A. a 26×26 square where row i is the alphabet shifted by i; the key letter picks the row  B. a 5×5 Polybius square  C. a rotor setting  D. a frequency table
- Answer: **A** · Row by key letter, column by plaintext letter, their intersection is the ciphertext — the lookup heart of Vigenère, Beaufort and every polyalphabetic classical cipher.

219. **中文**：双因素认证（Two-Factor Authentication）指的是？
- 选项：A. 从「知道/拥有/本体」三类证据中组合两种不同类  B. 输入两次密码  C. 密码加安全问题  D. 把密码长度加倍
- 答案：**A** · 两个因素必须来自不同类别：密码（你知道）+ TOTP 动态码（你拥有）≈ 安全；密码+同一个密码=白费功夫。短信验证、TOTP、Passkey、硬件密钥都是这一思想的发展。

   **English**: Two-Factor Authentication means …
- Options: A. Combining two DIFFERENT classes: something you know, have, or are  B. Typing the password twice  C. A password plus a security question  D. Doubling password length
- Answer: **A** · The two factors must come from different classes: password (know) + TOTP code (have) ≈ secure; password + same password = futile. SMS, TOTP, Passkeys and security keys are this idea's evolution.

220. **中文**：把弱口令变成合格 AES 密钥的工序叫什么？
- 选项：A. 密钥派生函数（KDF）  B. 分组加密  C. 公钥加密  D. 解压
- 答案：**A** · KDF 把「口令+盐」等低熵材料拉伸成固定长度的高熵密钥——PBKDF2、Argon2 都是其家族；存储口令用的慢哈希本质上也是 KDF 的应用。

   **English**: The process that turns a weak password into a proper AES key is called …
- Options: A. A Key Derivation Function (KDF)  B. Block encryption  C. Public-key encryption  D. Decompression
- Answer: **A** · A KDF stretches low-entropy material — password + salt — into fixed-length, high-entropy key material. PBKDF2 and Argon2 are family members; slow password hashing is a KDF application.

221. **中文**：文艺复兴外交密码「名词码簿」（Nomenclator）凭什么抗住频率分析？
- 选项：A. 高频字母配多个同音替身 + 人名地名整词码，把频率曲线摊平  B. 密钥每天更换  C. 它不用字母表  D. 它是一台机器
- 答案：**A** · Nomenclator = 同音替换（Homophonic Substitution，高频字母多个替身）+ 词汇码（音节/人名/国家整词对照）+ 空码干扰：单表频率分析对着平滑分布无处下嘴，直到码簿重建术出现才被征服。

   **English**: How did the Renaissance Nomenclator resist frequency analysis?
- Options: A. Homophones for frequent letters plus a names-and-places codebook flattened the curve  B. Keys changed daily  C. It used no alphabet  D. It was a machine
- Answer: **A** · A nomenclator layers homophonic substitution (multiple aliases per frequent letter), a codebook for syllables/names/places and nulls — frequency analysis sees only a flat histogram; it fell to codebook reconstruction instead.

222. **中文**：ElGamal 加密每次随机挑临时数，故同一明文的密文每次不同。它基于哪个数学难题？
- 选项：A. 有限域离散对数  B. 大数分解  C. 哈希碰撞  D. 格上最短向量
- 答案：**A** · ElGamal（1985）本质是 DH 思想的加密化：用接收方公钥做一次类 DH 交换得到共享值，再以此掩码明文；临时数随机化让密文不可区分。其签名变体孕育了 DSA 家族。

   **English**: ElGamal picks a fresh random per message — same plaintext, different ciphertext. Which hard problem is its security based on?
- Options: A. Discrete logarithms in finite fields  B. Integer factorization  C. Hash collisions  D. Shortest lattice vectors
- Answer: **A** · ElGamal (1985) turns Diffie-Hellman into encryption: one DH-style exchange with the recipient's public value yields a shared mask for the message — randomized, hence indistinguishable ciphertexts. Its signature variant spawned the DSA family.

223. **中文**：国密 SM2 是哪一类算法？
- 选项：A. 基于 256 位椭圆曲线的签名/密钥交换/加密公钥体系  B. 分组密码  C. 哈希函数  D. 流密码
- 答案：**A** · SM2（GB/T 32918）是中国商用公钥算法：256 位素域椭圆曲线上实现数字签名、密钥交换与公钥加密——相当于国标版 ECDSA+ECDH，已进入金融与证书体系。

   **English**: Which category does China's SM2 belong to?
- Options: A. Public-key signatures / key exchange / encryption on a 256-bit elliptic curve  B. A block cipher  C. A hash function  D. A stream cipher
- Answer: **A** · SM2 (GB/T 32918) is China's commercial public-key standard on a 256-bit prime-field curve — signature, key agreement and encryption: the national counterpart of ECDSA+ECDH, adopted across banking and CA systems.

224. **中文**：国密 SM3 的功能与输出是？
- 选项：A. 抗碰撞哈希，输出 256 位摘要  B. 流密码，输出密钥流  C. 签名算法  D. 公钥加密
- 答案：**A** · SM3（GB/T 32905-2016）输出 256 位摘要，Merkle–Damgård 结构与填充类似 SHA-256、安全目标同级——SM2 签名、国密 SSL VPN、证书体系都指定它。

   **English**: What is China's SM3?
- Options: A. A collision-resistant hash producing a 256-bit digest  B. A stream cipher  C. A signature scheme  D. A public-key encryption
- Answer: **A** · SM3 (GB/T 32905-2016) emits 256-bit digests with Merkle–Damgård structure and padding akin to SHA-256, targeting the same strength. SM2 signatures, GM SSL VPNs and the certificate system all rely on it.

225. **中文**：国密 ZUC（祖冲之算法）属于？
- 选项：A. 流密码：以 128 位密钥和初始向量生成密钥流  B. 分组密码  C. 签名算法  D. 密钥交换
- 答案：**A** · 祖冲之算法（ZUC）用 128 位初始密钥与 128 位初始向量驱动线性反馈移位寄存器+非线性 S 盒生成密钥流——2011 年入选 3GPP LTE 安全机制（128-EEA3），成为中国首个进入国际移动通信标准的密码算法。

   **English**: What is ZUC (Zu Chongzhi)?
- Options: A. A stream cipher generating keystream from a 128-bit key and IV  B. A block cipher  C. A signature scheme  D. A key exchange
- Answer: **A** · Named after the ancient Chinese mathematician Zu Chongzhi, ZUC drives LFSRs and a nonlinear S-box with a 128-bit key and 128-bit IV. Adopted in 2011 as 3GPP LTE's 128-EEA3 — China's first algorithm in global mobile security standards.

226. **中文**：「冷启动攻击」（Cold Boot）利用的是什么？
- 选项：A. DRAM 断电后数秒内仍保留数据：低温/重插后直接导出内存取密钥  B. CPU 过热  C. 硬盘磁头磨损  D. 口令过短
- 答案：**A** · 2008 年普林斯顿团队演示：把内存条喷冷后从笔记本内存导出全盘加密密钥——「关机即安全」的假设被打破。防御：内存接口不外露、避免内存残留敏感数据、结合 TPM 绑定。

   **English**: What does a Cold Boot attack exploit?
- Options: A. DRAM retains data seconds after power-off — freeze or reseat it and dump keys from memory  B. CPU overheating  C. Worn hard-drive heads  D. Short passwords
- Answer: **A** · Princeton's 2008 team froze laptop RAM and recovered full-disk-encryption keys from memory. "Shutdown is safe" died that day; defences include sealed memory and TPM binding.

227. **中文**：多方计算（Multiparty Computation, MPC）要解决的核心问题是？
- 选项：A. 多人在不泄露各自输入的前提下共同算出函数结果  B. 多人共享同一把密钥  C. 分布式存储  D. 加速加密
- 答案：**A** · 经典考例是姚氏的「百万富翁问题」（1982）：两位富翁想比谁更有钱——输入保密、只公开结论。如今 MPC 用于联合风控、私有集合求交、多方资金计算。

   **English**: The core problem of Multiparty Computation (MPC) is …
- Options: A. Parties compute a shared function without revealing their private inputs  B. Sharing one key among many  C. Distributed storage  D. Faster encryption
- Answer: **A** · It began with Yao's Millionaires' Problem (1982): two billionaires compare fortunes, no secrets revealed but the verdict. Today MPC powers joint risk control, private set intersection and multi-party settlement.

228. **中文**：不经意传输（Oblivious Transfer）中，接收方获得什么？
- 选项：A. 从发送方的多条消息中恰好取一条，且发送方不知道是哪条  B. 全部消息  C. 一条也拿不到  D. 发送方的密钥
- 答案：**A** · 1-out-of-2 OT（Rabin 1981）：接收方恰好读到一条，发送方永远不知道被选走了哪条，另一条也始终隐藏——它是 MPC 与隐私计算的基础原语。

   **English**: In Oblivious Transfer, what does the receiver get?
- Options: A. Exactly one of the sender's messages — and the sender never learns which  B. All messages  C. Nothing at all  D. The sender's key
- Answer: **A** · 1-out-of-2 OT (Rabin 1981): the receiver reads exactly one message, the sender never knows which was taken, and the other stays hidden. It is the foundational primitive of MPC and privacy computing.

229. **中文**：NTRU 属于后量子密码的哪一条路线？
- 选项：A. 多项式环上的格公钥密码  B. 基于哈希的签名  C. 椭圆曲线离散对数  D. 大数分解
- 答案：**A** · NTRU（1996 年公布，进入 IEEE 1363 标准）在截断多项式环上用两个小系数多项式相乘再取模——加解密极快、密钥更短，曾闯入 NIST 后量子竞赛第三轮，是格密码（Lattice-based Cryptography）路线的代表。

   **English**: Which post-quantum route does NTRU belong to?
- Options: A. Lattice public-key crypto over polynomial rings  B. Hash-based signatures  C. Elliptic-curve discrete log  D. Integer factorization
- Answer: **A** · NTRU (1996, IEEE 1363) multiplies two small-coefficient polynomials modulo a truncated ring — fast, compact keys, and it reached NIST's third-round post-quantum pool. A flagship of Lattice-based Cryptography.

230. **中文**：国密 SM9 的最大特色是？
- 选项：A. 基于双线性对：用户标识（手机号/邮箱）本身即公钥，无需证书  B. 它是唯一的国密签名算法  C. 它是哈希函数  D. 它是量子算法
- 答案：**A** · SM9（GM/T 0044-2016）基于双线性配对（Bilinear Pairing）：标识即公钥，整套证书体系都可以省掉——与 SM2/SM3/SM4 合称「国密四件套」。

   **English**: What makes China's SM9 special?
- Options: A. Built on bilinear pairing: the user identifier (phone, email) IS the public key — no certificates  B. The only Chinese signature algorithm  C. A hash function  D. A quantum algorithm
- Answer: **A** · SM9 (GM/T 0044-2016) rests on bilinear pairing: identifiers serve directly as public keys and the whole certificate infrastructure disappears. With SM2, SM3 and SM4 it completes the "SM four-piece" family.

231. **中文**：HMAC 与「加密」的关系是？
- 选项：A. HMAC 认证不加密——保证真实性靠它，保密性靠加密  B. HMAC 就是加密  C. HMAC 既有认证又有保密  D. HMAC 是压缩算法
- 答案：**A** · HMAC = 带密钥的哈希（keyed hash）：H(Key ⊕ opad ‖ H(Key ⊕ ipad ‖ M))。它只回答「消息没被改且来自持钥方」，不看内容——所以真实系统的铁律是「先用 MAC 的链子上签名，再加密或先加密再 MAC」。

   **English**: How does HMAC relate to encryption?
- Options: A. HMAC authenticates without encrypting — authenticity is its job, confidentiality is encryption’s  B. HMAC is encryption  C. HMAC gives both authenticity and confidentiality  D. HMAC is a compression tool
- Answer: **A** · HMAC is a keyed hash: H(Key ⊕ opad ‖ H(Key ⊕ ipad ‖ M)). It answers only "was the message unaltered and from the key holder" without looking at the content — hence the rule: authenticate, then encrypt (or encrypt-then-MAC).

232. **中文**：RIPEMD-160 与 Whirlpool 的共同点是？
- 选项：A. 都是设计者明确的现代哈希，且分别进入 Bitcoin 地址标准与 ISO/IEC 10118-3  B. 都是流密码  C. 都是公钥算法  D. 都已被量子攻破
- 答案：**A** · RIPEMD-160（1995，欧洲 RIPE 计划）双管线 160 位，Bitcoin 地址至今用它；Whirlpool（2000，Rijmen & Barreto）512 位、AES 式 8×8 状态盒，入选 ISO/IEC 10118-3——两族都是「正规但非主流」的哈希样本。

   **English**: What do RIPEMD-160 and Whirlpool have in common?
- Options: A. Both are serious modern hashes, in Bitcoin’s address standard and ISO/IEC 10118-3 respectively  B. Both are stream ciphers  C. Both are public-key schemes  D. Both are broken by quantum computers
- Answer: **A** · RIPEMD-160 (1995, Europe’s RIPE project) is a 160-bit double-line hash still securing Bitcoin addresses; Whirlpool (2000, Rijmen & Barreto) is a 512-bit AES-spirited design listed in ISO/IEC 10118-3.

233. **中文**：零知识证明的「三性」是？
- 选项：A. 完备性、可靠性、零知识——真命题被接受、假命题骗不过、验证者一无所获  B. 快速性、经济性、可复制性  C. 加密性、压缩性、可逆性  D. 简单性、美观性、公开性
- 答案：**A** · completeness：命题为真时诚实验证者必接受；soundness：命题为假时任何证明者无法伪造接受；zero knowledge：验证者「不泄露证明」——除「命题为真」外零信息；三性齐备才算严格零知识（对应 ZKP 演示：承诺-挑战-应答的反复轮）。

   **English**: The three properties of a zero-knowledge proof are?
- Options: A. Completeness, soundness and zero-knowledge — true statements accepted, false ones uncheatable, verifier learns nothing  B. Speed, economy, replicability  C. Encryption, compression, reversibility  D. Simplicity, beauty, publicity
- Answer: **A** · Completeness: honest verifiers accept true statements. Soundness: no prover can fake acceptance of a false one. Zero knowledge: the verifier learns only that the statement is true — proving without revealing anything beyond the truth. All three, together, define rigorous ZK (the commit-challenge-response loop).

234. **中文**：DNSSEC 靠什么证明一条域名记录没被篡改？
- 选项：A. 区域签名（RRSIG）+ 父区对子区公钥的 DS 背书链  B. 把域名藏在加密报文里  C. DNS 服务器发送密钥  D. 依赖 HTTPS 证书
- 答案：**A** · DNSSEC 用 RRSIG 记录给区数据签名，用 DS 记录把子区信任连到父区，最终锚在根——解析时验证签名链。它防「劫持与毒化」，但并不能让域名保密。

   **English**: How does DNSSEC prove a DNS record was not tampered with?
- Options: A. Zone signatures (RRSIG) plus DS chain endorsing child keys from parents  B. By hiding names inside encrypted packets  C. The server sends its key  D. It leans on HTTPS certificates
- Answer: **A** · DNSSEC signs zone data with RRSIG records and chains child trust to parents via DS records, anchored at the root; resolvers verify the chain. It defeats hijacking and poisoning — but does not keep names secret.

235. **中文**：供应链攻击的典型路径是？
- 选项：A. 篡改上游依赖/构建链，让目标亲手装上后门（SolarWinds 2020、XZ 2024）  B. 直接攻破目标的服务器  C. 钓鱼社工拿到口令  D. 暴力破解家庭路由
- 答案：**A** · 不攻目标攻原料：毒化开源包、劫持更新通道、篡改编译与签名单环——受害者「自己部署」的攻击最难识别，防御靠供应链清单（SBOM）、锁版本与签名校验。

   **English**: The typical path of a supply chain attack is?
- Options: A. Tamper with upstream dependencies/build chains so the target installs the backdoor itself (SolarWinds 2020, XZ 2024)  B. Directly breach the target server  C. Phish for credentials  D. Brute-force home routers
- Answer: **A** · Attack the ingredients: poison open-source packages, hijack updates, tamper with build and signing steps — victims deploy the backdoor themselves. Defences: SBOM inventory, pinned versions, signature verification.

236. **中文**：「零日漏洞」指的是？
- 选项：A. 厂商尚未知晓或尚无补丁、已被利用的漏洞——防御窗口为零  B. 持续存在 0 天的漏洞  C. 只在零点运行的漏洞  D. 没有 CVE 编号的漏洞
- 答案：**A** · zero day 意为「厂商暴露在利用下的天数为零」：没有补丁、没有特征，日志里找不到脚印——所以安全团队永远默认「已经被打进来了」，做的是发现与止损。

   **English**: A "zero-day" is …
- Options: A. A vulnerability exploited before the vendor knows or patches it — zero days of exposure  B. A bug alive for 0 days  C. A bug that runs only at midnight  D. A flaw without a CVE
- Answer: **A** · The exposure window is zero days: no patch, no signature, no log entry. Security teams therefore assume "already breached" and focus on detection and containment.

237. **中文**：2013 年 6 月开始的「大规模监控披露」直接的效果是？
- 选项：A. 斯诺登揭露 PRISM/上游监听；触发全球 HTTPS 大潮并改写互联网信任模型  B. 让各国废除加密  C. 让 NSA 停止监听  D. 只是新闻炒作
- 答案：**A** · 斯诺登公开了以 PRISM 为代表的对九大互联网公司的直接数据抓取与全球上游监听——此后 HTTPS 从约 30% 升到 90%+，加密成为了互联网的默认默认值。

   **English**: What followed the June 2013 surveillance disclosures?
- Options: A. Snowden revealed PRISM/upstream interception; a global HTTPS surge rewrote internet trust  B. Nations abolished encryption  C. The NSA stopped listening  D. Nothing but headlines
- Answer: **A** · Snowden exposed direct data pulls from nine internet giants (PRISM) plus global upstream tapping — HTTPS rose from ~30% to over 90% of traffic and encryption became the internet’s default setting.

238. **中文**：CVE 编号体系（如 CVE-2014-0160）的直接作用是？
- 选项：A. 给每个公开漏洞唯一编号，配合 CVSS 打分与披露流程，让修复可追踪  B. 自动修复漏洞  C. 加密漏洞数据库  D. 给厂商发奖
- 答案：**A** · CVE = Common Vulnerabilities and Exposures：唯一编号 + CVSS 严重度打分 + CWE 分类，汇聚成 NVD——漏洞管理（资产清单×补丁节奏×利用情报）的公共语言。

   **English**: What is the direct purpose of the CVE registry (e.g. CVE-2014-0160)?
- Options: A. A unique ID per disclosed vulnerability, with CVSS scoring and disclosure flow, so fixes are trackable  B. Auto-patching vulnerabilities  C. Encrypting the vulnerability database  D. Awarding vendors
- Answer: **A** · The Common Vulnerabilities and Exposures registry assigns unique IDs with CVSS severity scores and CWE classification, aggregated in NVD — the common language of vulnerability management (inventory × patch cadence × exploitation intel).

239. **中文**：图灵 1936 年论文《论可计算数》带来的 1936 抽象机描述的是？
- 选项：A. 一条纸带 + 读写头 + 状态表——可计算函数的通用模型，并由此证明停机问题不可判定  B. 一台电子计算机  C. 一种密码机  D. 一种编码表
- 答案：**A** · Turing machine：无限纸带上按状态表走读写头的抽象机，简单到可手画却等价于任何计算；用对角线论证证明停机问题不可判定——「计算机科学之父」这一章的起点，也是程序-数据同存的根源。

   **English**: What does Turing’s 1936 machine describe?
- Options: A. A tape, a head and a state table — a universal model of computable functions, used to prove the halting problem undecidable  B. An electronic computer  C. A cipher machine  D. A lookup table
- Answer: **A** · The Turing machine: an abstract head walking an infinite tape by a state table — simple enough to draw, powerful enough for any computable function. The diagonal argument then proves the halting problem undecidable: the founding moment of computer science.

240. **中文**：世界第一台「存储程序」计算机（程序与数据同存于内存）是？
- 选项：A. EDSAC（剑桥，1949）——ENIAC 靠插线板，EDSAC 首开跑内存代码  B. ENIAC（1945）  C. Colossus（1943）  D. Apple I
- 答案：**A** · ENIAC（1943–45）是世界第一台通用电子数字计算机，但重编程要重插线；第一台存储程序计算机是剑桥的 EDSAC（1949）——两者一起定义了「计算机的诞生」：密码与计算从此共用同一台机器。

   **English**: The first stored-program computer (program and data in memory) was?
- Options: A. EDSAC (Cambridge, 1949) — ENIAC needed cable rewiring; EDSAC first ran code from memory  B. ENIAC (1945)  C. Colossus (1943)  D. Apple I
- Answer: **A** · ENIAC (1943-45) was the first general-purpose electronic digital computer, but reprogramming meant re-plugging cables; Cambridge’s EDSAC (1949) first executed code from memory — together they define the birth of the computer, and cryptography now shares one machine with computing.

241. **中文**：红军无线电密码破译事业的奠基人是？
- 选项：A. 曾希圣  B. 陈纳德  C. 张学良  D. 傅作义
- 答案：**A** · 曾希圣 1931 年进入中央苏区无线电队伍并主持二局：从国军电报的重复电文中还原作战序列，长征途中持续保障侦察破译。

   **English**: Who founded the Red Army radio codebreaking corps?
- Options: A. Zeng Xisheng  B. Chennault  C. Zhang Xueliang  D. Fu Zuoyi
- Answer: **A** · Zeng Xisheng joined the Central Soviet radio corps in 1931 and led the Second Bureau, reconstructing order-of-battle from habitual repetitions.

242. **中文**：“半部电台”指的是？
- 选项：A. 1930 年龙冈战斗缴获、发报机已损坏的收报机——红军以此为起点发展密码破译  B. 一台只能发半分钟的电台  C. 红军自造的全新电台  D. 断成两截的密码本
- 答案：**A** · 1930 年底反围剿的龙冈战斗缴获国军电台，发报机摔坏、收报机还能用——“半部电台起家”成为红军无线电情报事业的开端。

   **English**: What was the “half a radio”?
- Options: A. A captured receiver with a smashed transmitter (Longgang, 1930) — the seed of Red Army intelligence  B. A radio good for half a minute  C. A brand-new home-built set  D. A codebook torn in two
- Answer: **A** · At Longgang in late 1930 the Red Army captured a Kuomintang set whose receiver still worked — “starting from half a radio” became the origin of its signals corps.

243. **中文**：ECDSA 签名里的随机数 k 一旦泄露或重复使用，后果是？
- 选项：A. 攻击者能解代数方程恢复私钥 d  B. 只是签名变弱  C. 影响不大  D. 只有验签会出错
- 答案：**A** · k 是签名唯一的不确定性来源：两条消息共用同一个 k 时，(s₁−s₂) 相减消掉 d 项，直接解出 k，再由 s·k ≡ e + r·d 反解私钥 d——2010 年 PS3 固件签名、2013 年 Bitcoin 钱包都因 k 复用或固定而丢过私钥。

   **English**: If the random k in an ECDSA signature leaks or is reused, the result is…
- Options: A. Attacks solve the equations and recover the private key d  B. The signature gets slightly weaker  C. Nothing serious  D. Only verification breaks
- Answer: **A** · k is the only source of randomness in a signature: with k shared by two messages, subtracting s₁−s₂ cancels the d term, revealing k — then s·k ≡ e + r·d gives d. PS3 firmware signing (2010) and a Bitcoin wallet (2013) both lost keys this way.

244. **中文**：SHA-256 的输出摘要有多长？
- 选项：A. 256 位（64 个十六进制字符）  B. 128 位  C. 512 位  D. 160 位
- 答案：**A** · SHA-256 产出 32 字节 = 256 位摘要，通常以 64 位十六进制字符串书写；SHA-512 才是 512 位（FIPS 180-4）。

   **English**: How long is a SHA-256 digest?
- Options: A. 256 bits (64 hex characters)  B. 128 bits  C. 512 bits  D. 160 bits
- Answer: **A** · SHA-256 outputs 32 bytes = 256 bits, usually written as 64 hex characters; SHA-512 is the 512-bit member (FIPS 180-4).

245. **中文**：教科书 RSA（c = m^e mod n，无填充）最直观的攻击是？
- 选项：A. 格基约减  B. 已知明文空间时逐候选加密对拍（字典攻击）  C. 侧信道  D. 彩虹表
- 答案：**C** · 确定性加密：同一明文永远同一密文，所以攻方只要知道明文空间（订单号、尾号区间），就能把每个候选加密一遍与截获密文比对——演示里 100–170 区间 38 次即命中。补救：随机化填充（OAEP，RFC 8017），语义安全要求加密是概率性的。

   **English**: The most direct attack on textbook RSA (c = m^e mod n, unpadded) is…
- Options: A. Lattice reduction  B. Encrypt every candidate from a known plaintext space and match — a dictionary attack  C. Side channels  D. Rainbow tables
- Answer: **C** · Deterministic: the same plaintext yields the same ciphertext, so anyone who knows the plaintext space encrypts every candidate and compares — 38 tries hit it in the 100–170 demo. Fix: randomized padding (OAEP, RFC 8017); semantic security demands probabilistic encryption.

246. **中文**：Goldwasser–Micali 提出的「语义安全」核心要求是？
- 选项：A. 密钥足够长  B. 加密算法必须是概率（随机化）的——相同明文不被识别  C. 签名要快  D. 密文要短
- 答案：**B** · 1982 年 Goldwasser–Micali 用「可证明安全」范式给出语义安全的经典定义：密文不得泄露明文的任何部分信息——实现方式即概率/随机化加密（ElGamal 随机 k、OAEP 随机填充都是其后代）。

   **English**: The core demand of Goldwasser–Micali "semantic security" is…
- Options: A. Long keys  B. Encryption must be probabilistic — the same plaintext must not be recognizable  C. Fast signatures  D. Short ciphertexts
- Answer: **B** · Their 1982 framework defined security provably: ciphertexts must leak nothing about the plaintext. The recipe is probabilistic encryption — ElGamal’s random k and OAEP padding are both descendants.

247. **中文**：Lamport 一次性口令（哈希链）中，服务器如何验证用户出示的值？
- 选项：A. 直接比对明文口令  B. 验证 H(出示值) = 服务器当前存储的链值，然后前移一格  C. 发给云端  D. 猜密码字典
- 答案：**B** · 服务器只存链顶：验证 H(上一环) = 当前持有值后把存储前移。依赖单向性——截获当前值也无法推出下一环，而重放已用值立即失败（H(x) 永远不是 x）。

   **English**: In Lamport one-time passwords (hash chain), how does the server verify a presented value?
- Options: A. Compare as plaintext  B. Check H(presented) = stored chain value, then advance one step  C. Send to the cloud  D. Run a dictionary
- Answer: **B** · The server stores only one chain value: it checks H(next) = stored and slides forward. Security is one-wayness — intercepting a value yields no next link, and replaying a used value fails (H(x) is never x).

248. **中文**：ElGamal 加密把同一个随机数 k 用于两条消息时，会发生什么？
- 选项：A. 什么都不会发生  B. 公钥被破解  C. 消息被压缩  D. 密文比值泄露消息比值：已知一条即可解出另一条
- 答案：**D** · c₂/c₂′ = m/m′ mod p——随机数 k 在两条密文的乘积里抵消：只要知道其中一条消息（订单、签名等），另一条立刻公开。随机化铁律与 OTP 一致：随机数绝不重样。

   **English**: If ElGamal reuses the same random k for two messages…
- Options: A. Nothing happens  B. The public key is broken  C. Messages get compressed  D. The ciphertext ratio leaks the message ratio: knowing one reveals the other
- Answer: **D** · c₂/c₂′ = m/m′ mod p — k cancels between the two ciphertexts: knowing either message reveals the other. Same iron rule as OTP: never repeat randomness.

249. **中文**：Passkeys / WebAuthn 天生抗钓鱼的原因是？
- 选项：A. 口令更长  B. 挑战与源站域名绑定，钓鱼站点无法重放应答  C. 生物特征不可复制  D. 不用网络
- 答案：**D** · WebAuthn 把公钥登记在源站身份下，断言（assertion）绑定依赖方（RP）源——在伪造站点上生成的应答在真站认证失败。这就是「消除口令重放」的根：不是更长的口令，而是不可转移的凭证。

   **English**: Why are Passkeys / WebAuthn intrinsically phishing-resistant?
- Options: A. Longer passwords  B. Assertions are bound to the origin — phishing sites cannot replay them  C. Biometrics are uncloneable  D. They need no network
- Answer: **D** · Public keys are registered to a relying-party origin; assertions are bound to that origin, so a response minted on a fake site fails at the real one. The fix for replay is not longer secrets but non-transferable credentials.

250. **中文**：X.509 证书链真正提供的是？
- 选项：A. 保密通信  B. 公钥与实体绑定的认证（不含内容保密）  C. 加速  D. 压缩数据
- 答案：**A** · CA 链回答「这把公钥属于谁」，从不加密；保密由证书携带的公钥完成密钥交换后提供。证书只保真，不保密。

   **English**: The X.509 certificate chain actually provides…
- Options: A. Confidential communication  B. Authentication binding a public key to an entity (no confidentiality of content)  C. Speed  D. Data compression
- Answer: **A** · The CA chain answers "whose key is this"; it never encrypts. Confidentiality comes later from key exchange with that public key. Certificates authenticate, never hide.

251. **中文**：后量子签名标准 ML-DSA（FIPS 204）源自哪个方案？
- 选项：A. CRYSTALS-Kyber  B. CRYSTALS-Dilithium  C. Rainbow  D. Classic McEliece
- 答案：**B** · Dilithium 经 NIST 2022 年选定、2024 年 8 月发布为 FIPS 204（ML-DSA）；同时发布的还有 ML-KEM（Kyber，FIPS 203）与哈希基签名 SLH-DSA（SPHINCS+，FIPS 205）。

   **English**: Which submission became the post-quantum signature standard ML-DSA (FIPS 204)?
- Options: A. CRYSTALS-Kyber  B. CRYSTALS-Dilithium  C. Rainbow  D. Classic McEliece
- Answer: **B** · Dilithium was selected in 2022 and published as FIPS 204 (ML-DSA) in August 2024, alongside ML-KEM (Kyber, FIPS 203) and hash-based SLH-DSA (SPHINCS+, FIPS 205).

252. **中文**：「先收割、后解密」（HNDL）是指？
- 选项：A. 先解密再收割  B. 先削密钥再撤密码  C. 攻击者今天录下加密流量，等量子计算机成熟后回放破解  D. 先上标准再换实现
- 答案：**C** · Harvest-now-decrypt-later：把今天的密文存起来，赌未来 Shor 级量子算力成熟——这就是「迁移从现在开始」的原因：NIST 指向 2035 年前完成大规模系统替换，经典系统会数十年地被记录与回放。

   **English**: "Harvest now, decrypt later" (HNDL) means…
- Options: A. Decrypt first, harvest second  B. Weaken keys first  C. Record encrypted traffic today, decrypt it once quantum machines mature  D. Standard first, implementation later
- Answer: **C** · Store today’s ciphertexts against a future Shor-class machine — why migration starts now: NIST targets large-system replacement by 2035, while legacy traffic keeps being recorded for decades.
