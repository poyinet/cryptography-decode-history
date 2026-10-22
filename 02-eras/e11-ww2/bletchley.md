---
title: 布莱切利园的机器
title_en: The Machines of Bletchley Park
type: era
era: e11-ww2
sources:
  - Andrew Hodges, Alan Turing: The Enigma (1983)
  - Gordon Welchman, The Hut Six Story (1982)
  - F.H. Hinsley, British Intelligence in the Second World War
---

# 布莱切利园的机器（The Machines of Bletchley Park）

> 时代 e11-ww2 · 本章 bletchley

## 概念

⚙️ 机器密码学：转子机 Enigma + 已知明文攻击（Bombe）

**English**: Machine ciphers: Enigma rotors + known-plaintext attack (Bombe)

## 正文

**中文**：一战落幕，密码的军备竞赛却未停歇——战间期的欧洲，一台新机器正在重新武装德国；而最先看穿它的，是一群波兰数学家。1939 年，战争爆发前夜，一群数学家、棋手与语言学家被悄悄召集到伦敦以北五十英里的布莱切利园——一座维多利亚式庄园。他们的任务只有一个：读懂德国人用 Enigma 加密的每一份电报。德国人相信这台机器不可战胜，而英国人相信：只要是人造的锁，就有人能配出钥匙。

这座庄园的内里，其实是一排排编号的木屋——破解 Enigma 的工程，正是按木屋切分的。Hut 6 负责陆军与空军的 Enigma：北非沙漠、东线战壕、西线天空发回的战术电文，在这里变成可读的军情；Hut 8 则专攻最难啃的硬骨头——海军 Enigma，它守着大西洋的潜艇战，钥匙每转一格，都关系着几十艘商船与海员的生死。两座木屋并不各自为战：Hut 6 破出的陆军电文里常藏着海军的蛛丝马迹，Hut 8 解出的潜艇航线又反哺空军的反潜搜索——图灵和他的同事们，就在这交错的分工里，把 Enigma 这张大网一格格撕开。

Enigma 看起来像一台打字机。按下字母键，电流穿过三个转子、经过反射器再折返，点亮另一个字母。每按一键，转子就转一格；转子位置变了，同一个字母的加密结果就不同。机器前部还有插线板，可以把成对字母互换。三者相乘，密钥空间大到无法穷举——德军每天更换转子顺序、插线板设置与起始位置，即「每日密钥」。更狡猾的是，Enigma 加密即解密：收发双方用同一设置，密文在另一台机器上就是明文。

破绽在于：机器不是随机的，而是「确定性的复杂」。[图灵](../../people/turing.md)发现，只要猜中一段「已知明文」（crib）——比如天气预报固定开头的「WETTER」——就能把转子设置从天文学数字中筛出来。他设计的 Bombe 是一台两人高的机电怪兽：同时模拟三十六组三转子 Enigma 等效组合，用电路在数小时内扫描上亿种可能。但真正的加速来自[韦尔奇曼](../../people/welchman.md)的对角线板：他把 Enigma 的自反特性变成一张逻辑网，让 Bombe 在十几分钟内完成过去数小时的搜索。从此，Enigma 不再是墙，而是漏水的筛子。

而在另一排机房里，Bombe 机昼夜轰鸣。操作这些两人高怪兽的，是约两千名操作员，绝大多数是年轻女性——来自皇家海军女子服务队（Wrens）。她们三班倒、24 小时不停机：按当天的候选设置装好转子与插线板、上电、记录每一次「停机」读数，再在刺耳的机械声与闷热的气流里等待下一轮。她们大多不知道自己在找什么，只知道这台机器每停一次，或许就有几条德国电文被撕开。正是这群不署名的操作员，撑起了 Ultra 得以运转的血肉。

破译成果被命名为 Ultra，只许极少数人阅读。北非，蒙哥马利靠 Ultra 预知隆美尔补给船队的航线；大西洋，护航队靠它绕过狼群；诺曼底登陆前，盟军靠它确认加莱的装甲师不会增援诺曼底。每一次胜利都像巧合——因为保密本身就是武器。直到 1974 年《The Ultra Secret》出版，世界才知道这场「机器对机器」的战争：二战真正的隐形战场，在布莱切利园的木屋里。

北非的故事，最能说明 Ultra 的分量。1942 年，隆美尔的非洲军团离埃及只剩一步之遥，可他缺的不是坦克，而是油。德军补给船队横渡地中海的每一次出发时间与航线，都先经 Enigma 电文发出、再被布莱切利园读个干净；盟军海空军据此把伏击线画到准确的海域，一艘接一艘击沉运油船；蒙哥马利则凭它握住了隆美尔的底牌。等到阿拉曼的炮声响起，隆美尔的装甲师已油尽弹绝——蒙哥马利赢下的不只是兵力，更是情报上的先手：敌人的每一次「秘密行动」，早在出发前就已泄露。

胜利的代价里，还有一份迟到了几十年的沉默。战后，几乎所有接触过 Ultra 的人都签了保密令：不能对家人、朋友，甚至不能对彼此提起自己做过什么。有人回到家，几十年里被问起「战争中你做了什么」，只能含糊地答一句「文书工作」；有人直到 1974 年《The Ultra Secret》出版，才第一次对妻子讲出当年的真相。破译了敌人最深的秘密，却要半辈子守着自己的秘密——这种不能说出口的孤独，是布莱切利园留给他们最重的一枚勋章。

**English**: The war ended, but the cipher arms race did not — and the first to see through Germany's new machine were Polish mathematicians. On the eve of war in 1939, a strange assortment of mathematicians, chess players and linguists was quietly gathered fifty miles north of London, at Bletchley Park — a Victorian mansion. Their one task: read every German message enciphered on the Enigma machine. The Germans believed the machine was unbeatable; the British believed that any lock made by a human can be opened by a human.

The mansion's interior was really a line of numbered wooden huts, and the work of breaking Enigma was divided among them. Hut 6 handled the Army and Air Force Enigma: the tactical traffic from the North African desert, the Eastern Front trenches and the skies over Western Europe passed through it and emerged as readable intelligence. Hut 8 took on the hardest nut of all — the Naval Enigma — which guarded the U-boat war in the Atlantic; every turn of its key decided the fate of dozens of merchant ships and the men aboard them. The two huts did not work in isolation: a fragment recovered in Hut 6 could betray a naval habit, and a U-boat route read in Hut 8 could sharpen the RAF's anti-submarine hunt. Turing and his colleagues pulled the Enigma net apart, one knot at a time, across those interlocking shifts.

The Enigma looked like a typewriter. Press a key and current flows through three rotors, bounces off a reflector, and lights up another letter. Each keystroke turns a rotor one step, so the same letter encrypts differently every time. A plugboard on the front swapped pairs of letters for good measure. Multiplied together, the keyspace was too vast to search — and the Germans changed the rotor order, plugboard and starting positions every day: the daily key. Wickedest of all, encryption and decryption were the same operation: two machines set identically, and the ciphertext on one is the plaintext on the other.

The flaw: the machine was not random, it was deterministically complicated. [Turing](../../people/turing.md) saw that if you could guess a crib — a known plaintext, like the weather report's fixed opening "WETTER" — you could winnow the rotor settings out of the astronomical search space. His Bombe was an electromechanical monster the size of a wardrobe: it simulated thirty-six three-rotor Enigma equivalents at once, scanning hundreds of millions of settings in hours. The real speed-up came from [Welchman](../../people/welchman.md)'s diagonal board: it turned the Enigma's self-reciprocal wiring into a logic net, letting the Bombe finish in minutes what took hours. From then on, the Enigma was not a wall — it was a leaking sieve.

In another block of rooms the Bombes thundered around the clock. The machines were tended by about two thousand operators, the great majority of them young women of the Women's Royal Naval Service — the Wrens. They worked three shifts, twenty-four hours a day: fitting rotors and plugboard settings to match each day's candidate keys, powering up, logging every "stop" the machine reported, then waiting through the mechanical roar and the hot, stuffy air for the next run. Most of them never knew exactly what they were hunting; they knew only that each stop of the machine might tear open another German message. These unnamed operators were the flesh and blood on which ULTRA ran.

The harvest was codenamed ULTRA, read by only a handful. In North Africa, Montgomery used it to know where Rommel's supply convoys would sail; in the Atlantic, convoys dodged the wolf packs; before D-Day, the Allies confirmed that the Panzers massed at Calais would not reinforce Normandy. Every victory looked like luck — because secrecy was itself a weapon. Not until 1974, with the publication of The Ultra Secret, did the world learn the truth: the war's true invisible battlefield had been fought in the wooden huts of Bletchley Park.

North Africa shows best what ULTRA was worth. In 1942 Rommel's Afrika Korps stood a step from Egypt — but what he lacked was not tanks, it was fuel. Every sailing and every route of the German supply convoys crossing the Mediterranean went out first as an Enigma message, and Bletchley read them clean; armed with that, Montgomery sent submarines and bombers to the right stretch of sea, sinking the tankers one after another. By the time the guns opened at El Alamein, Rommel's armour was running dry. Montgomery's edge lay not only in men and machines but in foreknowledge: the enemy's every "secret movement" had already leaked before it ever sailed.

Part of the price of victory was a silence that lasted decades. After the war nearly everyone who had touched ULTRA signed an order of secrecy: they could not tell their families, their friends, or even one another what they had done. Some went home and spent the rest of their lives answering "What did you do in the war?" with a vague "clerical work." Others first told their wives the truth only after The Ultra Secret appeared in 1974. They had read the enemy's deepest secrets and had to keep their own for half a lifetime — that unspoken solitude was the heaviest medal Bletchley ever pinned on them.

## 人物

- [`turing`](../../people/turing.md)
- [`welchman`](../../people/welchman.md)
- [`rejewski`](../../people/rejewski.md)
- [`scherbius`](../../people/scherbius.md)
- [`knox`](../../people/knox.md)
- [`alexander`](../../people/alexander.md)
- [`clarke`](../../people/clarke.md)
- [`zygalski`](../../people/zygalski.md)
- [`rozycki`](../../people/rozycki.md)

## 关联游戏

- enigma, bombe, plugboard, workshop, campaign, typex

## 关联密件

- [`ultra`](../../artifacts/ultra.md)

## 出处

- Andrew Hodges, Alan Turing: The Enigma (1983)
- Gordon Welchman, The Hut Six Story (1982)
- F.H. Hinsley, British Intelligence in the Second World War

## 延伸阅读

- Andrew Hodges, Alan Turing: The Enigma
- Simon Singh, The Code Book
- Dermot Turing, The Codebreakers of Bletchley Park (2020)

## 测验

1. **中文**：Bombe 是用来做什么的？
   - 选项：A. 筛出 Enigma 转子设置  B. 加密电报  C. 摩斯发报  D. 打印密文
   - 答案：**A** · 用已知明文（crib）快速排除不可能的转子设置。
   **English**: What was the Bombe for?
   - Answer: **A** · It used cribs to eliminate impossible rotor settings fast.

2. **中文**：「Crib」指什么？
   - 选项：A. 已知明文片段  B. 密钥  C. 密码机  D. 摩斯码
   - 答案：**A** · 猜测必然存在的明文片段，如固定的天气词。
   **English**: What is a "crib"?
   - Answer: **A** · A guessed fragment bound to appear, like a fixed weather word.

3. **中文**：Enigma 加密与解密的关系？
   - 选项：A. 同一设置下相同  B. 完全无关  C. 需要逆算法  D. 无法解密
   - 答案：**A** · 转子机的奇妙对称：加密=解密。
   **English**: How do Enigma encryption and decryption relate?
   - Answer: **A** · The rotor machine's eerie symmetry: encrypting equals decrypting.
