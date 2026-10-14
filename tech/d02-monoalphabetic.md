---
title: 单表替换
title_en: Monoalphabetic Substitution
type: domain
domain: d02
---

# 单表替换（Monoalphabetic Substitution）

> 技术域 d02 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：单表替换：每个字母**永远**映射到同一个字母（凯撒是它的特例，整体平移）。因为明文的字母频率是固定的（英文 e 最高），攻击者只需数密文里哪个字母最频繁就能破——**频率分析**是它的死穴。

**English**: Monoalphabetic: every letter maps to the **same** letter forever (Caesar is its special case — a uniform shift). Plaintext letter frequencies are fixed (e is most common in English), so counting the most frequent ciphertext letter breaks it — **frequency analysis** is the fatal flaw.
## 算法 / 协议

### 可交互算法（Workshop）

- `caesar` · **凯撒 Caesar**（Caesar Cipher）· 密钥：偏移量 / Shift amount，默认 `3`
- `affine` · **仿射 Affine**（Affine Cipher）· 密钥：a, b（如 5,8） / a, b (e.g. 5,8)，默认 `5,8`
- `substitution` · **单表替换 Substitution**（Monoalphabetic Substitution）· 密钥：26 字母置换表 / 26-letter permutation table，默认 `ZYXWVUTSRQPONMLKJIHGFEDCBA`
- `bacon` · **培根 Bacon**（Bacon Cipher）· 密钥： / ，默认 ``

## 术语

### Caesar Cipher（凯撒密码）
- 中文：把字母表整体平移固定位数（凯撒用 3）的替换密码。
- English: A substitution cipher shifting the alphabet by a fixed number (Caesar used 3).
- 游戏：`caesar`
- 章节：caesar

### Substitution（替换密码）
- 中文：每个字母按固定规则换成另一个字母。
- English: Each letter is replaced by another according to a fixed rule.
- 游戏：`substitution`
- 章节：caesar, arab

### Affine Cipher（仿射密码）
- 中文：凯撒的升级版：先乘一个数再加一个数（E=ax+b mod 26）。
- English: An upgrade of Caesar: multiply by a, then add b (E = ax+b mod 26).
- 游戏：`affine`
- 章节：caesar

### Yinfu Tally Codes（阴符）
- 中文：中国早期军事符信：《六韬》载八种符节，以竹符不同长度对应「见兵」「败军」等八类军情，两半相合为验——不着一字的密码。相传创制于姜太公。
- English: An early Chinese military signal: the Liu Tao records eight tally lengths, each secretly mapping to a situation such as "enemy advancing" or "defeat". Two halves must match to authenticate — a code with no words at all. Tradition credits Duke Jiang of Qi.
- 游戏：`acrostic`
- 章节：caesar

### Yinshu Split Letters（阴书）
- 中文：《六韬》所记拆信术：一封密信拆作三份，由三名信使分道携带，收信人合三为一才能读全——单份被截也无法泄密，是朴素的「分割+冗余」思想。
- English: A split-letter scheme from the Liu Tao: one letter is cut into three parts carried by three messengers on different routes; only recombining all three reveals the message. Any single capture leaks nothing — an early split-and-redundancy design.
- 游戏：`acrostic`
- 章节：caesar

### Ziyan Code（字验）
- 中文：北宋《武经总要》（1044）所载军用密写法：选一首四十字的诗，以临时约定的密钥字定位其中一字，该字在诗中的位置即对应一份四十项军情清单——每次换钥字即换一套编码。
- English: A Song-dynasty military cipher from the Wujing Zongyao (1044): pick a forty-character poem; a per-message key character selects one poem position, and that position maps to one of forty pre-agreed tactical reports — change the key character and the whole encoding changes.
- 游戏：`codebreak`
- 章节：arab

### Fanqie Code（反切码）
- 中文：明代戚继光《纪效新书》所载注音密码：取两首诗词的声母与韵母表，「声×韵」交叉组合为汉字编号——与同时代欧洲的多表替换异曲同工，却源自本土音韵学。
- English: A phonetic cipher in Qi Jiguang's Jixiao Xinshu (1560s): initials from one poem crossed with finals from another number every Chinese character — structurally akin to Europe's polyalphabetic idea, but grown from native phonology.
- 游戏：`fanqie`
- 章节：bacon

### Nomenclator（名词码簿）
- 中文：文艺复兴欧洲外交的主流体制：常用音节/人名/地名配码 + 其余字母简单替换的混合密码本。罗斯林伯爵因破译它声名鹊起。
- English: Renaissance Europe's diplomatic workhorse: a codebook of syllables, names and places layered over simple substitution. Frequency analysis alone could not touch it — until codebook reconstruction did.
- 游戏：`nihilist`
- 章节：bacon

### Great Cipher of Louis XIV（路易十四大密码）
- 中文：罗西尼奥尔父子为法王设计的数字码本：587 个码元代表音节而非字母，且无规律跳变——两百年无人能破，直到巴泽里用「猜音节」战术攻破王室秘密。
- English: The Rossignols' numeric code for Louis XIV: 587 groups standing for syllables, not letters, with irregular jumps. Unbroken for two centuries until Bazeries attacked it syllable by syllable.
- 游戏：`detective`
- 章节：ww1

### Homophonic Substitution（同音替换）
- 中文：给高频字母分配多个替身符号，让相同明文字母出现不同密文字形——字母频率被摊平，单表频率分析对它失效。文艺复兴的密码学家用数字上万种同音码实现它。
- English: High-frequency letters get many aliases so a plaintext letter maps to different ciphertext shapes — frequency histograms flatten and ordinary substitution analysis fails. Renaissance nomenclators implemented it with hundreds of homophones.
- 游戏：`substitution`
- 章节：arab

### Book Cipher（书籍密码）
- 中文：用一本共享的书作密钥：密文是页码/行号-字号的坐标列表。没有书就完全解不开——史上最著名的是贝灵诺维尔密码（Beale Ciphers）以《独立宣言》为书，第二份密电破出藏宝地点、另两份至今未解；二战英国 SOE 让特工抄一首诗的字母作一次性密钥（诗码），用完即焚。
- English: A shared book is the key: ciphertext lists page/line-word coordinates. Without the book nothing decrypts — the famous Beale Ciphers used the Declaration of Independence as their book (paper #2 solved, #1/#3 still open); in WWII Britain's SOE gave agents poem codes, one-time keys burnt after use.
- 游戏：`book-cipher`
- 章节：arab

### Null Cipher（空密码（归零密码））
- 中文：把真假字母混在同一条消息里，只按约定位置抽取真字母。小写、偶数字母、每板第 3 字都是常见约定——与格栅一样属于「藏而不掩」。
- English: Real letters hide inside an innocent message, extracted by position (e.g. lowercase letters, even positions). Like grilles, it hides existence rather than content.
- 游戏：`bacon`
- 章节：bacon

### Homophonic with Nomenclator（含名词名表的同音密码）
- 中文：把「高频字母多替身+人地官名专属码元」两种手段叠在一起的文艺复兴高级体制——即使是频率分析高手也无法只凭统计穿透其第 2 层。
- English: The Renaissance high-grade system that stacks homophones plus dedicated codewords for people, places and offices — beyond the reach of bare frequency analysis.
- 游戏：`nihilist`
- 章节：bacon

### Codebook（码本（编码簿））
- 中文：词句→码组对照簿（如 JN-25 的 5 位数字码）：与逐字母变换的密码（cipher）相对，「码本 + 每日加表」的双层结构是二战海军密码的标准配置。
- English: A word-to-codegroup book (e.g. JN-25's five-digit groups): as opposed to letter-by-letter ciphers, the codebook-plus-daily-additive double layer was the standard of WWII naval codes.
- 游戏：`jn25`
- 章节：midway, venona

### Navajo Code Talkers（纳瓦霍语密码通话员）
- 中文：二战美军以纳瓦霍语为基底的「语言密码」：无文字、语法极复杂的语言自带壁垒，再叠 400 条军用词汇码（坦克=乌龟、潜艇=铁鱼）——日军截收到终战未能破译；1968 解密，2001 年 Original 29 获国会金质奖章。
- English: The WWII US military's language cipher: an unwritten, grammatically forbidding native language as the barrier, stacked with ~400 military codewords (tank=turtle, submarine=iron fish). Japan never broke it; declassified 1968, the Original 29 received Congressional Gold Medals in 2001.
- 游戏：`navajo-talker`
- 章节：midway

### Red Army Radio Cipher（红军电报密码）
- 中文：20 世纪 30 年代中国工农红军无线电密码：自编密语表 + 手工换码，配合机要译电；破译方面则以曾希圣为代表的无线电侦察队伍从国军惯用重复电文中还原情报，是「自己用密码、同时破对方密码」的双线样本。
- English: Red Army radio ciphers of 1930s China: hand-built code tables plus manual transposition, with a signals-intelligence corps (Zeng Xisheng) reconstructing enemy traffic from habitual repetitions — both encrypting and breaking at once.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
