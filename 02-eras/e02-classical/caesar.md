---
title: 凯撒的密令
title_en: Caesar's Secret Orders
type: era
era: e02-classical
sources:
  - Suetonius, The Twelve Caesars (Life of Julius Caesar, 56)
  - Julius Caesar, Commentarii de Bello Gallico
---

# 凯撒的密令（Caesar's Secret Orders）

> 时代 e02-classical · 本章 caesar

## 概念

🔤 移位替换：字母表整体平移固定位数

**English**: Shift substitution: the alphabet slides by a fixed number

## 正文

**中文**：罗塞塔石碑让我们看清了「破译」的本质——现在，把时间倒回两千年前，从罗马军团的一纸军令说起。公元前 58 年，罗马总督[凯撒](../../people/caesar.md)挥师北上，用八年时间征服高卢。前线与罗马城远隔千里，军情只能靠信使骑马传递——一旦信使被截，兵力部署便一览无余。于是凯撒想出一个简单的法子：写信时，把字母表里的每个字母都向后移三位——A 写成 D，B 写成 E，C 写成 F……收信人把字母移回三位，军令即复原。这便是史上最著名的密码：凯撒移位密码。

以今天的字母表举例：明文 ATTACK AT DAWN，把每个字母后移 3 位，就变成 DWWDFN DW GDZQ——A 变 D，T 变 W，这便是加密；把每个字母前移 3 位，密文又变回明文，这便是解密。凯撒的部下人人都会，而敌方即便截获书信，看到的也只是一串字母迷宫。罗马史料里倒真有一封密码信：西塞罗曾给部将普朗库斯写过加了密的信件，普朗库斯按约定读了出来——加密确确实实给书信上了一道保险。

这密码真的安全吗？并不。字母表只有 26 个字母，移位总共只有 25 种可能——从 1 试到 25，总有一个能让密文还原成通顺的拉丁文。所以凯撒密码不是「破不了」，而是「懒得破」：在高卢人眼中，罗马人的文字本身已是天书。这里还藏着一个重要区分：密码（cipher）改变的是字母，编码（code）替换的是单词。凯撒用的是密码——而今天所有的数字加密，其实都站在同一棵树下。

两千年后回望，我们才看清：凯撒的移位密码，不过是「替换密码」家族里最简单的一个特例——每个字母都被同一个固定的字母替换。它挡得住信使被劫，却挡不住一个会数字母的人。破译的天平，从这一刻起悄悄倾斜。

更早的东方，另一种答案早已成形：周人以「阴符」两半相合验证军情，《六韬》所记「阴书」更把一封密信拆作三份、分道而驰——单份被截，密不自泄。罗马在替换字母时，东方在分割与符验里，走向了保密的另一条岔路。

**English**: The Rosetta Stone showed what deciphering means — now rewind two thousand years, to a field order of the Roman legions. Between 58 and 50 BC the Roman commander [Caesar](../../people/caesar.md) marched his legions through Gaul. Orders had to travel hundreds of miles by mounted courier — and if a courier was caught, the whole plan lay open. So Caesar did something wonderfully simple: he wrote every letter three places further along the alphabet. A became D, B became E, C became F. The receiver simply shifted the letters back. Thus was born the most famous cipher in history: the Caesar shift.

Try it with today's alphabet. Write ATTACK AT DAWN; move every letter forward by three — A to D, T to W — and you get DWWDFN DW GDZQ. That is encryption. Shift everything back three places and the message returns. Caesar's officers could do it in their heads; an enemy who intercepted the letter saw only a jumble of letters. Roman records preserve one real cipher letter: Cicero wrote to his general Plancus in code, and Plancus read it by the agreed convention — encryption truly put a lock on the post.

Was it secure? Not really. An alphabet of twenty-six letters admits only twenty-five possible shifts; try each one, and one of them turns the ciphertext back into readable Latin. The Caesar cipher was less unbreakable than merely unbothered: to the Gauls, Latin itself was already a secret script. It also marks a distinction worth keeping: a cipher scrambles letters, while a code replaces whole words. Caesar used a cipher — and every modern encryption scheme, in a sense, stands under the same old tree.

Two thousand years later, we can see the Caesar shift for what it is: the simplest special case of the substitution family, in which every letter is replaced by one fixed letter. It could protect a letter from a courier who was caught — but not from a person who could count. From that moment, quietly, the balance of the decoding war began to tilt.

In those same centuries the East was shaping a different answer: Zhou commanders matched tally halves ("yinfu") to authenticate orders, and the Liu Tao records "yinshu" letters cut into three parts carried along separate routes — any single capture revealed nothing. While Rome substituted letters, China split and verified: another fork on the road of secrecy.

## 人物

- [`caesar`](../../people/caesar.md)

## 关联游戏

- caesar, substitution, affine, atbash, alberti-disc

## 关联密件

- [`caesar-report`](../../artifacts/caesar-report.md)

## 出处

- Suetonius, The Twelve Caesars (Life of Julius Caesar, 56)
- Julius Caesar, Commentarii de Bello Gallico

## 延伸阅读

- Suetonius, The Twelve Caesars
- Simon Singh, The Code Book
- Barry Strauss, Ten Caesars: Roman Emperors from Augustus to Constantine (2019)

## 测验

1. **中文**：凯撒密码的标准偏移量是多少？
   - 选项：A. 3  B. 5  C. 7  D. 10
   - 答案：**A** · 凯撒本人用偏移 3，但史载并不固定。
   **English**: What shift did Caesar use?
   - Answer: **A** · Caesar used shift 3, though records show it varied.

2. **中文**：凯撒密码属于哪一类？
   - 选项：A. 单表替换  B. 换位  C. 多表替换  D. 流密码
   - 答案：**A** · 每个字母按固定偏移换成另一字母。
   **English**: What kind of cipher is Caesar?
   - Answer: **A** · Each letter is replaced by a fixed shift.

3. **中文**：破解凯撒密码最朴素的方法？
   - 选项：A. 穷举 25 个偏移  B. 频率分析  C. Kasiski 检验  D. 彩虹表
   - 答案：**A** · 最多试 25 次，通顺英文即命中。
   **English**: The simplest way to break Caesar?
   - Answer: **A** · At most 25 tries; readable English wins.
