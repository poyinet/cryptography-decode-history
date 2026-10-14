---
title: VENONA 与冷战间谍
title_en: VENONA and the Cold War Spies
type: era
era: e12-cold-war-info-theory
sources:
  - Robert Louis Benson, The Venona Story (NSA, 2001)
  - John Earl Haynes & Harvey Klehr, Venona: Decoding Soviet Espionage in America (1999)
---

# VENONA 与冷战间谍（VENONA and the Cold War Spies）

> 时代 e12-cold-war-info-theory · 本章 venona

## 概念

🕸️ 密钥复用灾难：一次性密码本被重复使用即破

**English**: Key-reuse disaster: a one-time pad used twice is broken

## 正文

**中文**：一次性密码本（one-time pad），是密码史上唯一被数学证明「绝对安全」的加密法。收发双方各持一叠随机密钥页：密钥与明文等长、每一页只加密一封电报、用完即焚。于是密文里的每个字母都可能是任何字母，破译者没有任何立足点。二战后期至冷战之初，苏联情报机构把它当作不可战胜的保险柜：只要密钥页不泄露，再强的监听也只是一堆乱码。理论上，它无懈可击。

1943 年，美国陆军信号情报机构开始截获苏联驻美机构发出的加密电报，代号 VENONA。起初这些电文只是一串串毫无规律的数码组，破译员苦熬数年，一无所获。直到有人撞见一个不该出现的现象：某些电报的密钥片段竟然完全相同。后来的解密史料显示：1942 年莫斯科的密钥车间生产吃紧，华盛顿办事处奉命补印密钥页，那里疲惫的印刷工为了「提高效率」偷偷多印了一本——一次性密码本，被复用了。

复用就是灾难。把两封用了同一段密钥的电文相减，密钥被彻底消去，只剩下两段明文的差；再拿猜出的词语（crib）在差值上试位，密钥与明文便同时浮出水面。1946 年，与 FBI 合作的破译员梅瑞狄斯·加德纳第一次撬开密钥，此后每个代号都被记入档案，与真实身份逐一对应。线索从伦敦一路烧到纽约：克劳斯·富克斯、哈里·戈尔德、大卫·格林格拉斯，一环扣一环，最后指向[罗森伯格夫妇](../../people/rosenberg.md)——朱利叶斯与埃塞尔·罗森伯格夫妇，被控把原子弹机密交给苏联，1953 年在电椅上双双赴死。同一张网牵出的线索，最终让潜伏二十年的剑桥五杰——伯吉斯、麦克莱恩、菲尔比、布伦特、凯恩克罗斯——先后因不同节点陆续暴露。VENONA 解密持续了整整四十年，直到 1980 年才落幕。

最深的教训藏在结尾：绝对安全的密码，败给的不是敌方天才，而是己方一个疲惫的印刷工。再完美的数学，也敌不过人的疲劳、轻慢与侥幸——而破译者等的，就是那唯一一次失手。密码学的战争，从来不只发生在数学里。

**English**: The one-time pad is the only cipher in history proven mathematically unbreakable. Both sides hold matching stacks of random key pages: the key is as long as the message, each page encrypts exactly one cable and is then burned. Every letter in the ciphertext could be any letter — a codebreaker has no foothold at all. In the early Cold War Soviet intelligence treated it as an invincible vault: as long as the key pages never leaked, even the most powerful eavesdropper saw only gibberish. In theory, it is flawless.

In 1943 the U.S. Army's Signal Intelligence Service began intercepting encrypted Soviet cables under the code name VENONA. At first the traffic was nothing but number groups without rhyme or reason, and the codebreakers laboured for years in the dark. Then someone met a pattern that should not exist: fragments of key shared between different messages. The declassified record shows why: in 1942 Moscow's key-printing shop fell behind, so the Washington station was ordered to print extra copies of the key pages — and a tired clerk quietly made a duplicate. The one-time pad had been used twice.

Reuse is ruin. Subtract two cables encrypted with the same key and the key vanishes completely — only the difference of the two plaintexts remains; slide guessed words (cribs) across that difference and both the key and the messages surface at once. In 1946 codebreaker Meredith Gardner, working with the FBI, pried the key open for the first time; after that every code name was filed away and matched against a real identity. The trail burned from London to New York: Klaus Fuchs, Harry Gold, David Greenglass, one link to the next, finally pointing at [The Rosenbergs](../../people/rosenberg.md) — Julius and Ethel Rosenberg, convicted of handing atomic secrets to Moscow and sent to the electric chair together in 1953. In the same net, the Cambridge Five — Burgess, Maclean, Philby, Blunt, Cairncross and others — were exposed after twenty years inside British diplomacy and intelligence. VENONA decrypts ran for forty years, until 1980.

The deepest lesson is at the end: the unbreakable cipher fell not to an enemy genius but to a tired clerk on our own side. The most perfect mathematics cannot defeat human fatigue, carelessness and wishful thinking — and the codebreaker is only waiting for that one slip. The war of ciphers was never fought in mathematics alone.

## 人物

- [`rosenberg`](../../people/rosenberg.md)
- [`gardner`](../../people/gardner.md)
- [`tiltman`](../../people/tiltman.md)

## 关联游戏

- venona, detective, freq, sheep, diceluck, catch, roperescue, ballpop

## 关联密件

- [`venona`](../../artifacts/venona.md)

## 出处

- Robert Louis Benson, The Venona Story (NSA, 2001)
- John Earl Haynes & Harvey Klehr, Venona: Decoding Soviet Espionage in America (1999)

## 延伸阅读

- Robert Louis Benson, The Venona Story (NSA)
- John Earl Haynes & Harvey Klehr, Venona: Decoding Soviet Espionage in America
- Ben Macintyre, Agent Sonya: Moscow's Most Daring Wartime Spy (2020)

## 测验

1. **中文**：VENONA 破译利用了哪个漏洞？
   - 选项：A. 一次性密码本被复用  B. 密码太弱  C. 密钥太短  D. 算法公开
   - 答案：**A** · 苏联违规复用密钥流，两密相减抵消密钥。
   **English**: What flaw did VENONA exploit?
   - Answer: **A** · The Soviets reused key streams; subtracting cancels the key.

2. **中文**：VENONA 目标是哪国的通信？
   - 选项：A. 苏联  B. 德国  C. 日本  D. 英国
   - 答案：**A** · 美英联合拦截破译苏联间谍电报。
   **English**: Whose traffic did VENONA target?
   - Answer: **A** · US-UK joint interception of Soviet spy traffic.

3. **中文**：罗森伯格夫妇因何被捕？
   - 选项：A. 原子间谍网电报  B. 伪造货币  C. 叛国文书  D. 泄密文件
   - 答案：**A** · VENONA 电报暴露其间谍身份。
   **English**: Why were the Rosenbergs caught?
   - Answer: **A** · VENONA telegrams exposed their spy ring.
