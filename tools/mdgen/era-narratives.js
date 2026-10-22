#!/usr/bin/env node
/* ============================================================
   era-narratives.js — 19 时代的权威双语叙述台账（轴1 编年叙事真源）
   背景：poyi 源数据只有 5 个时代有叙述，其余 14 个时代无正文（编年轴是空的）。
   此处由仓库自己维护全部 19 个时代的叙述，说人话、讲清"这一代密码长什么样 /
   谁在用 / 被谁破"，配真实人名与日期。gen-eras-fill.js 读本台账生成每个 era.md。
   字段：t（中文标题）/ te（英文标题）/ span（时间跨度）/ zh / en（叙述正文）
   ============================================================ */
'use strict';

const NARRATIVES = {
  'e01-origins': {
    t: '古代起源', te: 'Ancient Origins', span: '前 500 BCE 前',
    zh: '在「密码」这个词出现之前，人类已经偷偷通信了很久。最早的密写不是写字，而是「记」：中国结绳记事把结的位置当信息，苏美尔人在楔形文字泥板上故意写错来藏真意，古埃及人把象形符号画进只有祭司读得懂的暗记。斯巴达人用「密码棒」（scytale）——把一条皮条卷在圆棒上写字，只有持同样圆棒的人展开才能读。这一代还没有「加密算法」的概念，秘密靠的是**载体本身**：没有那根棒、那本泥板，密文就是一团乱。它的思想内核延续至今——「密钥就在那根棒上」，只是今天的棒变成了数字参数。',
    en: 'Long before the word "cipher" existed, humans had been keeping secrets for a long time. The earliest ciphers were not writing but "recording": Chinese knotted cords encoded information in the position of knots, Sumerians deliberately wrote errors on cuneiform tablets to hide the true meaning, and ancient Egyptians painted hieroglyphs only priests could read. The Spartans used the scytale — a leather strip wound around a rod, letters written, only the matching rod unrolls it legibly. This generation had no concept of an "encryption algorithm"; secrecy rested on the **carrier itself** — without that rod or tablet, the ciphertext is a scramble. Its core idea survives to today: "the key is on that rod" — only now the rod is a number.',
  },
  'e02-classical': {
    t: '古典希腊罗马', te: 'Classical Greece & Rome', span: '前 500–476 CE',
    zh: '这一代第一次把密写变成**可操作的规则**。斯巴达的 scytale 之外，还有 Laconic 暗号（约定某些词代表特定意思）；凯撒把整个字母表向后移 3 位——史上第一个「移位密码」，他本人用它加密军令，还留下「Veni, vidi, vici」的名句。犹太人发明的 Atbash（把 a 变 z、b 变 y，字母表对折）是替换思想的另一种形态。波利比奥斯设计了 5×5 的格子，把字母变成坐标——这个「坐标替字母」的思路，两千年后还在格密码里活着。这一代的核心是**替换与换位的手艺**，破译靠的是猜和字典，还没人意识到「频率」里藏着破绽。',
    en: 'This generation was the first to turn secrecy into **operable rules**. Beyond the Spartan scytale there was the Laconic (agreed words standing for specific meanings); Caesar shifted the whole alphabet back by three — the first "shift cipher" in history, which he used for military orders, and which left the famous "Veni, vidi, vici." The Atbash invented by the Jews (a→z, b→y, folding the alphabet in half) was another form of the substitution idea. Polybius designed a 5×5 grid, turning letters into coordinates — the idea of "coordinates standing for letters" still lives in grid ciphers two millennia later. The core of this generation was the **craft of substitution and transposition**; breaking it relied on guesswork and dictionaries, and no one yet realized the flaw hid in "frequency."',
  },
  'e03-byzantine-islamic': {
    t: '拜占庭与早期伊斯兰', te: 'Byzantine & Early Islamic', span: '476–800',
    zh: '西罗马 476 年陷落，但东罗马（拜占庭）把罗马的密写传统一路带进中世纪——行政与军情仍依赖移位与替换。真正的转折发生在伊斯兰世界：阿拉伯语从 7 世纪起成为科学语言，密码学随之进入「翻译—记录」阶段。阿拉伯学者不仅保存了希腊密码思想，更开始用阿拉伯文字母的频率特性研究密码——为下一个时代的黄金时代埋下种子。',
    en: 'After the fall of the Western Roman Empire in 476, the Eastern (Byzantine) Empire carried Roman cipher practice into the medieval era — administration and military traffic still relied on shift and substitution. The real pivot came in the Islamic world: Arabic became the language of science from the 7th century, and cryptography entered a "translation-and-recording" phase. Arab scholars preserved Greek cipher ideas and began analyzing ciphers using the letter-frequency properties of the Arabic script — planting the seed for the coming Golden Age.',
  },
  'e04-arabic-golden-age': {
    t: '阿拉伯黄金时代', te: 'Islamic Golden Age', span: '800–1258',
    zh: '密码学从「手艺」变成「学问」，是在阿拉伯世界。巴格达的智慧宫（House of Wisdom）里，阿拉伯学者把希腊的密写文献译成阿拉伯文，并开始用**数学**研究它。最重要的转折是频率分析：al-Kindi（约 850 年）在《论破译密信》里指出，每种语言的字母出现频率是固定的——阿拉伯语「ا」最多，就像英文「e」最多——数一数密文里哪个符号最频繁，替换密码就现形了。这一招对**单表替换**（凯撒、Atbash 那一族）是致命的，因为它们的频率没被抹平。频率分析是密码分析学的起点，它把「破译」从猜测升级成统计，奠定了此后一千年的破译范式。',
    en: 'Cryptography became a *discipline* rather than a craft in the Arab world. In Baghdad’s House of Wisdom, Arab scholars translated Greek cipher texts into Arabic and began to study them **mathematically**. The decisive turn was frequency analysis: al-Kindi (c. 850) wrote in *On Deciphering Cryptographic Messages* that every language has fixed letter frequencies — Arabic «ا» is most common, as «e» is in English — so counting the most frequent symbol in a ciphertext exposes a substitution cipher. This trick was fatal to **monoalphabetic substitution** (the Caesar/Atbash family), because their frequencies were left untouched. Frequency analysis was the beginning of cryptanalysis, elevating "breaking" from guesswork to statistics, and setting the paradigm for the next thousand years.',
  },
  'e05-medieval-europe': {
    t: '中世纪欧洲', te: 'Medieval Europe', span: '1258–1450',
    zh: '1258 年蒙古 sack 巴格达，阿拉伯黄金时代落幕，密码学重心移回欧洲。中世纪欧洲的密写服务于**秘密外交**：教廷、各国王室各有一套「名册」（nomenclator）与代号体系，机密信件以替换或密语写成。这段时期的密码是**国家机密**而非科学，直到文艺复兴，数学才重新介入，密码学才从手艺变成学问。',
    en: 'After the 1258 sack of Baghdad, the Arab Golden Age ended and cryptography’s center of gravity shifted back to Europe. Medieval European secrecy served **secret diplomacy**: the papacy and royal courts each kept a "nomenclator" and code system, with confidential letters written in substitution or code. Cipher practice was a state secret, not a science — until the Renaissance, when mathematics re-entered and cryptography became a field of study again.',
  },
  'e06-renaissance': {
    t: '文艺复兴与宗教改革', te: 'Renaissance & Reformation', span: '1450–1600',
    zh: '多表替换的发明，让密码学第一次「赢」了频率分析。阿尔贝蒂 1467 年设计的密码盘（一个可旋转的字母环）是同代人最早的机械多表；维吉尼亚 1553 年的维吉尼亚表则系统化地用「密钥逐字母轮换」——同一个明文字母在不同位置变成不同密文字母，字母频率被彻底抹平。从此单表频率分析失效，维吉尼亚密码号称「不可解」（la chiffre indéchiffrable）。这一代还有苏格兰玛丽女王的悲剧：她一生用替换密码写信，1586 年她写给合谋者的密信被巴比宁用「数重复字母间隔」猜破，成为她死刑的证据。隐写与外交密码在这一代成熟，培根的双字体、书密码都出自这个时期。',
    en: 'The invention of polyalphabetic substitution was the first time cryptography *beat* frequency analysis. Alberti’s 1467 cipher disk (a rotating letter ring) was the earliest mechanical multi-table of its day; Vigenère’s 1553 table systematized "the key rotates letter by letter" — the same plaintext letter becomes a different cipher letter at different positions, so letter frequencies are flattened completely. Monoalphabetic frequency analysis died here, and the Vigenère cipher was called "the indecipherable cipher." This generation also holds the tragedy of Mary Queen of Scots: she wrote her whole life in substitution, and in 1586 a letter she sent to a co-conspirator was cracked by Babington via "counting repeated-letter intervals" — the evidence for her execution. Steganography and diplomatic ciphers matured here; Bacon’s biliteral scheme and book ciphers all come from this period.',
  },
  'e07-early-modern-steganography': {
    t: '近代早期与隐写', te: 'Early Modern & Steganography', span: '1600–1789',
    zh: '这一代的主角不是「改字母」而是「藏信息」。隐写（steganography）指把通信本身的存在藏起来——培根的双字体（字母 A/B 用印刷粗细两种字形编码，普通读者只看到一篇散文）是经典例子；卡当格栅（在一张打孔的卡片上按孔位置写字，收信人把卡片对齐才能读出隐藏的行）把密文藏进无害的纸面。书密码（以某本书为密钥，密文是页码行号）也在此期成熟。同时，欧洲外交的「名册密码」（nomenclator，常用词配码）仍是主流，频率分析被「同音码」（给高频字母分配多个替身符号）部分化解。这一代证明了一件事：**「有没有通信」本身也可以是秘密**，这条「藏而不掩」的路线与「改字母」的路线从此并行。',
    en: 'The star of this generation was not "changing letters" but "hiding information." Steganography means hiding the *existence* of communication itself — Bacon’s biliteral cipher (letters A/B encoded by two font weights, so ordinary readers see only plain prose) is the classic case; the cardan grille (write letters through holes in a punched card, and only the aligned card reveals the hidden rows) hides the message inside an innocent sheet. Book ciphers (a book as key, ciphertext is page-and-line numbers) also matured here. Meanwhile, Europe’s diplomatic "nomenclator" (common words as codes) remained the mainstream, and frequency analysis was partly deflected by "homophones" (multiple aliases for high-frequency letters). This generation proved a point: **whether communication happens at all can itself be a secret** — the "hide, don’t alter" route now runs in parallel with the "alter letters" route.',
  },
  'e08-codebreakers': {
    t: '破译者时代', te: 'Age of Codebreaking', span: '1789–1914',
    zh: '电报的到来把密码学从外交柜子里拽出来，变成国家机器的核心。1844 年摩斯发明电码，电报通信瞬间成为战争与外交的命脉——而电报加密就是密码学的新战场。这一代是「破译」的黄金期：法国人巴比宁（Painvin，1893 年独立破译维吉尼亚，被军方雪藏到 1929 才发表）、美国人弗里德曼、德军 40 号房，把频率分析和统计方法练成一套工业化的破译流程。维吉尼亚密码在 19 世纪被巴贝奇（1854）和卡西斯基（Kasiski 1863，用重复字母的间隔找周期）相继打穿，「不可解」的头号名号终于易主。这一代确立了「密码分析是一门学科」的事实，为 20 世纪机器时代的到来铺好了路。',
    en: 'The telegraph dragged cryptography out of the diplomatic cabinet and into the heart of the state machine. When Morse invented the code in 1844, telegraph traffic became the lifeline of war and diplomacy overnight — and telegraph encryption became cryptography’s new battlefield. This generation was the golden age of *breaking*: the Frenchman Painvin (who independently broke Vigenère in 1893 but was suppressed by the army until 1929), the American Friedman, and the German Room 40 turned frequency analysis and statistics into an industrialized breaking pipeline. The Vigenère cipher was cracked in the 19th century by Babbage (1854) and Kasiski (1863, using repeated-letter intervals to find the period) in turn, and the "indecipherable" title finally changed hands. This generation established that "cryptanalysis is a discipline," paving the way for the machine age of the 20th century.',
  },
  'e09-ww1': {
    t: '第一次世界大战', te: 'World War I', span: '1914–1918',
    zh: '第一次战争让密码学第一次成为**生死攸关**的工业。德军用 ADFGVX（结合换位与替换的格子密码）加密无线电，英军 40 号房逐份破译；美军的萨福德接手美国版「40 号房」，破译德军潜艇密码。这一代有标志性的胜利：1917 年英军破译齐默尔曼电报（德国外长密令墨西哥进攻美国），直接推动美国参战——这是「一份密电改变战争走向」的经典。Playfair 双表密码被英军广泛使用，恩尼格玛的前身（Scherbius 的转子机）开始出现。第一次大战证明：电报加密的胜负，直接决定战线。机器还没登场，但舞台已经搭好。',
    en: 'The first war made cryptography a **life-or-death** industry for the first time. Germany used ADFGVX (a grid cipher combining transposition and substitution) for its radio traffic, and Britain’s Room 40 broke it piece by piece; the American Safford took over the US "Room 40" and broke German submarine codes. This generation has a landmark victory: in 1917 the British cracked the Zimmermann Telegram (the German Foreign Secretary secretly urging Mexico to attack America), directly pushing the US into the war — the classic case of "one telegram changes the course of the war." Playfair’s double-square cipher was widely used by the British army, and the precursor of Enigma (Scherbius’s rotor machine) appeared. WWI proved that the outcome of telegraph encryption directly decides the front lines. Machines had not yet arrived, but the stage was set.',
  },
  'e10-interwar': {
    t: '战间期', te: 'Interwar Period', span: '1918–1939',
    zh: '两次大战之间，转子机从德军的 Enigma 升级为**国家安全工具**，而密码学第一次成为一门**工业**。波兰密码局（Biuro Szyfrów）的雷耶夫斯基、罗życki、齐加利斯克在 1932–39 年间连续破解德军 Enigma——这是「人类 vs 机器」的第一次胜利。德国则把 Enigma 加到 4 转子、加插线板，为二战的大对决上了膛。这段时期确立了「破译即工业」的新范式。',
    en: 'Between the wars, rotor machines rose from the German Enigma to a **national-security tool**, and cryptography became an **industry** for the first time. The Polish Cipher Bureau’s Rejewski, Różycki, and Zygalski broke the Wehrmacht Enigma in 1932–39 — the first human victory over a machine. Germany, in turn, hardened the Enigma to 4 rotors and a plugboard, loading the great WW2 duel. This period established the "codebreaking as industry" paradigm.',
  },
  'e11-ww2': {
    t: '第二次世界大战', te: 'World War II', span: '1939–1945',
    zh: '二战是密码学第一次「人类 vs 机器」的大对决。德军把恩尼格玛用到极致（4 转子 + 插线板，组合数高达天文数字），英军图灵的 Bombe 和波兰三杰（雷耶夫斯基、罗życki、齐加利斯克）用数学把不可能穷举的转子设置筛了出来；Colossus 是历史上第一台「为了破译而造的电子计算机」，专门破洛伦兹。太平洋战场，美军破译日本紫密（Rowlett 带队）和 JN-25（中途岛海战的关键），纳瓦霍语密码通话员全程没被日军破开。这一代确立了「密码战决定战争胜负」，战后布莱切利园的保密成果直到 1970 年代才解密——人类史上最大规模的保密，反过来喂养了密码学的进步。',
    en: 'WWII was the first "humans vs. machines" duel in cryptography. Germany pushed Enigma to its limit (4 rotors + plugboard, combinations of astronomical size); Turing’s Bombe and the Polish trio (Rejewski, Różycki, Zygalski) used mathematics to sieve rotor settings that brute force could never reach. Colossus — the first electronic computer built *to break a cipher* — was dedicated to the Lorenz. In the Pacific, the Americans broke Japan’s Purple (Rowlett’s team) and JN-25 (the key to the Battle of Midway), while the Navajo Code Talkers’ language was never broken by the Japanese. This generation established "codebreaking decides wars," and Bletchley Park’s classified results stayed secret until the 1970s — the largest secrecy in human history, which in turn fed cryptography’s advance.',
  },
  'e12-cold-war-info-theory': {
    t: '冷战与信息论转折', te: 'Cold War & Information Theory', span: '1945–1975',
    zh: '冷战让密码学第一次有了**理论根基**。1949 年香农发表《通信的数学理论》，用信息论的形式化给「完美保密」下了定义——他证明 Vernam 的一次性密码（OTP）是唯一能达到完美保密的密码，也给出了熵、混淆、扩散这些至今仍是密码学基石的概念。同一时期，美苏的 VENONA 工程（美方从 1940 年代开始破译苏联密钥）暴露了 OTP 复用（同一条密钥流用两次）的致命漏洞——数学上的「唯一完美」被人为的「省事」击穿。这一代还见证了 NSA 和 GCHQ 的成立，密码学从战场工具变成情报工业的支柱。',
    en: 'The Cold War gave cryptography its first **theoretical foundation**. In 1949 Shannon published *A Mathematical Theory of Communication*, giving "perfect secrecy" a formal definition in information theory — he proved Vernam’s one-time pad (OTP) is the only cipher that can reach perfect secrecy, and introduced entropy, confusion, and diffusion, concepts that remain cryptography’s bedrock. In the same period, the US-Soviet VENONA project (America breaking Soviet keys from the 1940s) exposed the fatal flaw of OTP *reuse* (using the same keystream twice) — the mathematical "unique perfection" was pierced by human "convenience." This generation also saw the founding of NSA and GCHQ, cryptography moving from a battlefield tool to the pillar of the intelligence industry.',
  },
  'e13-public-key': {
    t: '公钥革命', te: 'Public-key Revolution', span: '1976–1990',
    zh: '公钥密码的诞生，彻底解决了「密钥怎么给」这个困扰密码学千年的难题。1976 年 Diffie 和 Hellman 提出密钥交换：两人不必事先共享密钥，却能协商出一个共享秘密，而窃听者算不出来——这是公钥的开端。次年 RSA（Rivest-Shamir-Adleman）把公钥加密变成可计算的算法，基于「大数分解难」。同一时期，默克尔（Merkle）在公钥签名、可证明安全上独立推进。公钥的意义不只是「加密」，而是**密钥可以公开**——这催生了数字签名、PKI、整个互联网的信任体系。1976 到 1990 这十四年，是密码学史上思想密度最高的时期。',
    en: 'The birth of public-key cryptography finally solved "how to deliver the key," the problem that had plagued cryptography for a thousand years. In 1976 Diffie and Hellman proposed key exchange: two parties need not share a key in advance yet can agree on a shared secret that an eavesdropper cannot compute — the start of public-key. The following year RSA (Rivest-Shamir-Adleman) turned public-key encryption into a computable algorithm, based on "integer factorization is hard." In the same period, Merkle independently pushed forward public-key signatures and provable security. The meaning of public-key is not just "encryption" but **keys can be public** — this spawned digital signatures, PKI, and the entire trust system of the internet. 1976–1990 is the most ideationally dense period in cryptography’s history.',
  },
  'e14-standardization': {
    t: '标准化时代', te: 'Age of Standardization', span: '1977–2001',
    zh: '算法从论文走进标准，是这一代的主题。1977 年美国把 IBM 的 Lucifer 改进后定为 DES（数据加密标准，56 位密钥），它是第一个「全民共用」的对称算法；但 DES 的密钥太短，20 世纪末已被暴力破解淘汰。于是 NIST 公开征集新一代算法，1997 年起评，2001 年宣布 Rijndael（荷兰人 Daemen 与 Rijmen）胜出，成为 AES——128 位分组、128/192/256 位密钥、10/12/14 轮，至今仍是事实标准。同代还有 SHA 系列（SHA-1 已被攻破、SHA-256 现役）成为哈希标准。这一代确立「开放、公开评审」的算法选择方式，算法安全从此靠全世界的破解尝试来检验。',
    en: 'Algorithms moving from paper into standards is this generation’s theme. In 1977 the US adopted IBM’s Lucifer (improved) as DES (Data Encryption Standard, 56-bit key) — the first "everyone uses the same one" symmetric algorithm; but DES’s key was too short and was brute-forced out by the end of the century. So NIST opened a public search for the next generation, ran the evaluation from 1997, and in 2001 declared Rijndael (Dutchmen Daemen and Rijmen) the winner, becoming AES — 128-bit blocks, 128/192/256-bit keys, 10/12/14 rounds, still the de facto standard today. The SHA family (SHA-1 broken, SHA-256 current) became the hash standard. This generation established "open, publicly reviewed" algorithm selection; algorithm security is now tested by the whole world’s attempts to break it.',
  },
  'e15-web-protocols': {
    t: '网络与协议时代', te: 'Web & Protocol Era', span: '1991–2010',
    zh: '算法成熟后，战场移到「协议」——怎么把加密拼成真正可用的安全通信。TLS（传输层安全，HTTPS 的底层）用 Diffie-Hellman 做密钥交换、用 AES 加密、用数字签名防篡改，一个往返完成握手；PGP 和 S/MIME 让电子邮件加密走进普通用户；X.509 证书把「这个公钥属于这个人」的信任交给证书颁发机构（CA）的链条，Let’s Encrypt 后来让免费证书成为常态。这一代的敌人不再是「破算法」，而是「实现与协议漏洞」——心跳攻击、降级攻击、中间人。密码学第一次意识到：算法再强，协议有洞就全白搭。',
    en: 'Once algorithms matured, the battlefield moved to "protocols" — how to assemble encryption into genuinely usable secure communication. TLS (Transport Layer Security, the base of HTTPS) uses Diffie-Hellman for key exchange, AES for encryption, digital signatures against tampering, completing the handshake in one round trip; PGP and S/MIME brought email encryption to ordinary users; X.509 certificates delegated "this public key belongs to this person" to a chain of certificate authorities (CAs), and Let’s Encrypt later made free certificates routine. This generation’s enemy was no longer "breaking the algorithm" but "implementation and protocol flaws" — heartbleed, downgrade attacks, man-in-the-middle. Cryptography first realized: however strong the algorithm, a hole in the protocol wastes it all.',
  },
  'e16-quantum-turn': {
    t: '量子转折', te: 'Quantum Turn', span: '1984–2019',
    zh: '量子力学从物理课走进了密码学，而且是双向的。1984 年 Bennett 和 Brassard 提出 BB84 协议，利用量子不可克隆定理做密钥分发（QKD）——窃听即扰动、扰动即被发现，安全性由物理定律保证而非计算困难。同一时期，Shor 算法（1994）证明量子计算机能多项式时间分解大数、解离散对数——这意味着今天的 RSA、ECC 在足够大的量子机面前全部失守。Grover 算法给出量子搜索的平方加速，对称密码的密钥长度因此要加倍。这一代是「量子既是武器也是盾牌」的开端：量子既能破掉公钥，也能用物理原理造出无法被偷听的新通信。',
    en: 'Quantum mechanics walked into cryptography from the physics classroom — in both directions. In 1984 Bennett and Brassard proposed BB84, using the no-cloning theorem for quantum key distribution (QKD) — eavesdropping perturbs the state, and perturbation is detection, so security rests on physical law rather than computational hardness. In the same period, Shor’s algorithm (1994) showed a quantum computer can factor integers and solve discrete logs in polynomial time — meaning today’s RSA and ECC all fall before a sufficiently large quantum machine. Grover’s algorithm gives quadratic speedup for quantum search, so symmetric keys must double in length. This generation is the start of "quantum as both sword and shield": quantum can break public-key, yet physical law can build new communication that cannot be eavesdropped.',
  },
  'e17-post-quantum': {
    t: '后量子时代', te: 'Post-Quantum Era', span: '2016–今',
    zh: '既然量子机会破掉 RSA 和 ECC，密码学必须换「计算困难」的数学根基。答案藏在**格密码**里：基于「格上最短向量」或「环上带误差」的难题，这些在已知模型下抗量子也抗经典。NIST 从 2016 年开始公开征集后量子算法，2024 年 8 月正式发布首批标准：ML-KEM（Kyber，密钥封装）、ML-DSA（Dilithium，签名）、SLH-DSA（SPHINCS+，哈希签名）。这些算法的密钥比经典大得多（几千字节到几百 KB），但数学上安全。过渡期用「混合方案」（经典算法 + 后量子算法叠一起）兜底，一边迁移一边观察。这是密码学第一次被迫「整体换地基」，而非打补丁。',
    en: 'Since a quantum computer will break RSA and ECC, cryptography must change its "computational-hardness" math foundation. The answer hides in **lattice cryptography**: problems like "shortest vector in a lattice" or "ring with errors," which resist both quantum and classical attacks under known models. NIST began a public search for post-quantum algorithms in 2016 and released the first batch in August 2024: ML-KEM (Kyber, key encapsulation), ML-DSA (Dilithium, signatures), SLH-DSA (SPHINCS+, hash-based signatures). These algorithms’ keys are far larger than classical (thousands of bytes to hundreds of KB) but mathematically secure. The transition uses "hybrid schemes" (classic + post-quantum layered) as a backstop, migrating while observing. This is the first time cryptography has had to "replace the foundation wholesale" rather than patch it.',
  },
  'e18-frontier': {
    t: '前沿', te: 'The Frontier', span: '今 / Today',
    zh: '当下的三条前沿线：**完全同态加密（FHE）**——在密文上直接计算，解密前不出结果；**后量子迁移**——NIST 2024 标准（ML-KEM/ML-DSA/SLH-DSA）正式上岗，混合方案成为过渡默认；**AI 与密码分析**——大模型与对抗机器学习开始参与密码分析与侧信道推断。量子安全网络、隐私计算、AI 安全是未来十年的主战场。',
    en: 'Three frontier lines today: **fully homomorphic encryption (FHE)** — compute on ciphertext without decrypting; **post-quantum migration** — NIST’s 2024 standards (ML-KEM/ML-DSA/SLH-DSA) have entered service and hybrid schemes are the transitional default; **AI and cryptanalysis** — LLMs and adversarial ML are beginning to participate in cryptanalysis and side-channel inference. Quantum-safe networks, privacy computing, and AI security are the next decade’s main battlegrounds.',
  },
  'e19-china': {
    t: '中国平行线', te: "China's Parallel Line", span: '横切 / Cross-cutting',
    zh: '中国密码学从先秦**阴符**（兵符验信）到《六韬》**阴书**（拆信防截），到明将戚继光**反切码**，是一条与西方并行的密写传统。1930 年龙冈战斗缴获的**半部电台**，发展为曾希圣领导的红军无线电侦察——与同时代任何信号情报部队并驾齐驱。当代中国以 **SM2/SM3/SM4/ZUC** 四件套与《密码法》（2020）从「用标准」走向「立标准」，并率先把量子密钥分发投入运营。',
    en: 'Chinese cryptography runs parallel to the West, from the pre-Qin **yinfu** (tally authentication) and the Liu Tao’s **yinshu** (split-letter anti-intercept) to Qi Jiguang’s **fanqie** code — a distinct secrecy tradition. The "half radio" captured at Longgang (1930) grew into Zeng Xisheng’s Red Army signals intelligence, matching any contemporary SIGINT force. Modern China moved from "using standards" to "making standards" via the SM2/SM3/SM4/ZUC family and the Cryptography Law (2020), and first to operationalize quantum key distribution.',
  },
};

module.exports = { NARRATIVES };
