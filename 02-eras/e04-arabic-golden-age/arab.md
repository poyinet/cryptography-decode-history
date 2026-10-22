---
title: 阿拉伯的破译者
title_en: The Arab Codebreaker
type: era
era: e04-arabic-golden-age
sources:
  - Al-Kindi, A Manuscript on Deciphering Cryptographic Messages (c. 850)
  - Ibrahim A. Al-Kadit, Origins of Cryptology: The Arab Contributions
---

# 阿拉伯的破译者（The Arab Codebreaker）

> 时代 e04-arabic-golden-age · 本章 arab

## 概念

📊 频率分析：统计字母出现次数，对照语言自然规律

**English**: Frequency analysis: count letter occurrences, match language norms

## 正文

**中文**：公元 9 世纪的巴格达，是当时世界的智识之都。阿拔斯王朝的哈里发在此营建「智慧宫」，把希腊、波斯、印度的典籍源源译成阿拉伯文——数学、天文、医学、哲学，尽数交汇。宫里住着一位百科全书式的学者：[肯迪](../../people/kindi.md)。他一生写了两百多部著作，涵盖哲学、光学、音乐与数学；而其中一卷薄薄的手稿，后来被称作密码分析学的出生证明——《解译加密信息手稿》。

在这部约写于 850 年的手稿中，肯迪给出了一个石破天惊的论断：破解单表替换密码，是有方法可循的。他的方法是频率分析——先数一数密文里每个字母各出现几次，再与这门语言的自然频率对照。他写道：如果我们知道一种语言里哪个字母出现得最多，那么把密文中出现最多的那个字母当成它，就能解开。阿拉伯语如此，任何语言皆然。

用今天的英语打比方：E 出现得最多，约占 12.7%，其后是 T、A、O、I、N——老密码迷把这五个字母念成 ETAOIN。假如一封替换密文里，字母 X 出现频率最高，那么 X 十有八九就是 E。猜中一两个字母，单词的轮廓便开始浮现，整篇密文像多米诺骨牌一样倒下。

这一招，让沿用上千年的单表替换密码「死」了——只要密文够长，频率分析几乎必破。它的意义远不止于密码本身：这是人类第一次证明，破译不是碰运气或靠直觉，而是一门可以用统计与推理攻克的科学。约十一个世纪后，布莱切利园里的人们所做的，本质上仍是肯迪做过的事——数字母、找规律、撬开规则。频率分析，是一切破译的起点。

频率分析照亮巴格达的两百年后，东方的军中密语也在生长：北宋《武经总要》以把四十条军情对应一首四十字、字不重复的诗，逐字定位即得密写，另备多首同类诗逐日换钥——这套「字验」；明将戚继光后来更从本土音韵学中造出「反切码」。统计破译与换表加密的竞赛，从来不只发生在一种文字里。

**English**: In the ninth century, Baghdad was the intellectual capital of the world. Under the Abbasid caliphs, the House of Wisdom gathered scholars who translated Greek, Persian and Indian learning into Arabic — mathematics, astronomy, medicine, philosophy, all meeting in one city. Among them lived [Al-Kindi](../../people/kindi.md), the Philosopher of the Arabs: a polymath who wrote hundreds of works on philosophy, optics, music and mathematics. And in one slim volume, written around 850, he produced what many call the birth certificate of cryptanalysis — A Manuscript on Deciphering Cryptographic Messages.

In that manuscript Al-Kindi made a stunning claim: breaking a monoalphabetic substitution is a method, not a miracle. His method was frequency analysis. Count how often each letter appears in the ciphertext, then compare those counts with the natural frequencies of the language. If we know which letters appear most often in a language, he wrote, then the most frequent letter in the cipher is very likely that letter. The argument works for Arabic — and for any language.

In modern English the same trick reads as ETAOIN: E appears about 12.7 percent of the time, then T, A, O, I, N. If X is the most frequent letter in a substitution ciphertext, X is almost certainly E. Guess one or two letters, and the shapes of words begin to emerge; the whole message topples like dominoes.

With that single idea, Al-Kindi killed the monoalphabetic substitution that had served for a thousand years — as long as the ciphertext is long enough, frequency analysis nearly always wins. Its importance reaches far beyond ciphers: for the first time, decoding was shown to be a science of statistics and inference, not luck. Nine centuries later, the people of Bletchley Park were still doing what Al-Kindi did: count letters, find patterns, pry open the rules. Frequency analysis is where all decoding begins.

Two centuries after frequency analysis lit up Baghdad, military secrecy was quietly maturing in the East as well: the Song-dynasty Wujing Zongyao wove forty tactical reports into "ziyan" poems whose key characters changed daily, and Ming general Qi Jiguang would later forge his fanqie code from native phonology. The contest of statistics and substitution has never belonged to one script alone.

## 人物

- [`kindi`](../../people/kindi.md)

## 关联游戏

- freq, substitution, codebreak, bifid, trifid, homophonic, book-cipher

## 关联密件

- [`kindi`](../../artifacts/kindi.md)

## 出处

- Al-Kindi, A Manuscript on Deciphering Cryptographic Messages (c. 850)
- Ibrahim A. Al-Kadit, Origins of Cryptology: The Arab Contributions

## 延伸阅读

- Simon Singh, The Code Book
- Ibrahim A. Al-Kadit, Origins of Cryptology: The Arab Contributions
- Violet Moller, The Map of Knowledge: A Thousand-Year History of How Classical Ideas Were Lost and Found (2019)

## 测验

1. **中文**：频率分析是谁发明的？
   - 选项：A. 肯迪（Al-Kindi）  B. 凯撒  C. 培根  D. 商博良
   - 答案：**A** · 约 850 年，阿拉伯学者肯迪。
   **English**: Who invented frequency analysis?
   - Answer: **A** · The Arab polymath Al-Kindi, c. 850.

2. **中文**：频率分析主要对付哪类密码？
   - 选项：A. 单表替换  B. 换位密码  C. OTP  D. RSA
   - 答案：**A** · 字母频率分布会泄露替换关系。
   **English**: What does frequency analysis defeat?
   - Answer: **A** · Letter-frequency patterns leak the substitution.

3. **中文**：英文中最常见的字母是？
   - 选项：A. E  B. A  C. T  D. O
   - 答案：**A** · E 约占 12.7%，频率分析的第一参考。
   **English**: The most common English letter?
   - Answer: **A** · E at ~12.7% — the first anchor of frequency analysis.
