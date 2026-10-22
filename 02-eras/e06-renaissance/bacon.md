---
title: 培根的隐形墨水
title_en: Bacon's Invisible Ink
type: era
era: e06-renaissance
sources:
  - Francis Bacon, De Augmentis Scientiarum (1623)
  - Blaise de Vigenère, Traicté des chiffres (1586)
---

# 培根的隐形墨水（Bacon's Invisible Ink）

> 时代 e06-renaissance · 本章 bacon

## 概念

🖋️ 双字体隐写：两种字形编码 5 位 A/B 二进制

**English**: Biliteral steganography: two typefaces encode 5-bit A/B binary

## 正文

**中文**：1623 年，伦敦的印刷机吐出一卷厚重的拉丁文著作《学术的进展》（De Augmentis Scientiarum）。作者[培根](../../people/bacon.md)是英国最耀眼也最矛盾的大脑：女王面前的政治家、英格兰大法官，更是「科学方法之父」。别人在书里写哲学，他却在第 6 卷悄悄藏了一份给未来的礼物——一种把秘密缝进普通文字的方法：双字体密码。

原理朴素得惊人：把 26 个字母编号 0 到 25，每个编号写成 5 位 A/B 串（A=0，B=1），再用两种字体代替 A 与 B——普通字体与加粗字体。于是「ENGLISH」变成三十五个 A/B 符号，伪装成一页散文里三十五个字形的细微差异。表面是书页，内里是密信。这就是隐写术（steganography）：加密是把信锁进保险箱，隐写是把信画成墙纸——它隐藏的不是内容，而是「内容存在」这件事本身。

几乎同时，欧洲另一端锻造出另一面更硬的盾。法国外交官[布莱斯·德·维吉尼亚](../../people/vigenere.md)在 1586 年出版《密码论》——后世把这类多表替换冠以他的名字（真正的首发者是 1553 年的贝拉索，见本章冷知识）：密钥逐字母决定用 26 张字母表中的哪一张替换当前字母。凯撒只有一张字母表，词频分析一戳就破；维吉尼亚每个位置换一张表，「E」一会儿变 A、一会儿变 Q，频率被抹平。整整三百年，欧洲人叫它「不可破译的密码」。

讽刺的是，培根的双字体在 17 世纪几乎没有实战价值；维吉尼亚却被当作铁壁用了三百年，直到 19 世纪才被 Kasiski 检验撬开裂缝。而培根那 5 位 A/B 的思路，两百年后启发了莫尔斯电码与二进制——原来「两种符号」就是一切计算的起点。

**English**: In 1623, London's presses produced a weighty Latin volume, De Augmentis Scientiarum. Its author, [Bacon](../../people/bacon.md), was one of England's brightest and most contradictory minds: a politician before the Queen, Lord Chancellor of the realm, and the father of the scientific method. Where others wrote philosophy, he hid a gift for the future in Book VI — a way to sew a secret into ordinary text: the biliteral, two-font cipher.

The principle is almost embarrassingly simple. Number the 26 letters 0 to 25; write each number as five symbols of A and B (A = 0, B = 1); let A stand for a normal letter and B for a bold one. "ENGLISH" becomes thirty-five A/B symbols, disguised as thirty-five tiny differences in typeface across a page of prose. On the surface a book; underneath, a letter. This is steganography: encryption locks a letter in a safe, steganography paints it into the wallpaper — hiding not the content, but the very fact that content exists.

At almost the same moment, the far side of Europe forged a harder shield. The French diplomat [Blaise de Vigenère](../../people/vigenere.md) published his polyalphabetic cipher in 1586: a keyword decides, letter by letter, which of 26 alphabets replaces the current letter. Caesar had one alphabet, and frequency analysis punctured it; Vigenère switches alphabets every position, so "E" becomes A here and Q there, flattening the frequencies. For three hundred years, Europe called it "the indecipherable cipher."

The irony: Bacon's two fonts saw little real use in the 1600s, while Vigenère was trusted as an iron wall for three centuries — until the Kasiski test found its crack in the 19th century. And Bacon's five A/B symbols? Two centuries later they inspired Morse code, and binary itself. Two symbols, it turns out, are where all computing begins.

## 人物

- [`bacon`](../../people/bacon.md)
- [`vigenere`](../../people/vigenere.md)
- [`trithemius`](../../people/trithemius.md)
- [`kasiski`](../../people/kasiski.md)
- [`babbage`](../../people/babbage.md)
- [`kerckhoffs`](../../people/kerckhoffs.md)
- [`bellaso`](../../people/bellaso.md)
- [`alberti`](../../people/alberti.md)
- [`cardano`](../../people/cardano.md)

## 关联游戏

- bacon, vigenere, morse, starflag, autokey, acrostic, stepping-switch, cardan-grille, fanqie

## 关联密件

- [`bacon-book`](../../artifacts/bacon-book.md)

## 出处

- Francis Bacon, De Augmentis Scientiarum (1623)
- Blaise de Vigenère, Traicté des chiffres (1586)

## 延伸阅读

- Simon Singh, The Code Book
- Blaise de Vigenère, Traicté des chiffres (1586)
- Sinclair McKay, The Hidden History of Code-Breaking: The Secret World of Cyphers, Uncrackable Codes, and Elusive Encryptions (2023)

## 测验

1. **中文**：培根双字体密码用几种字形编码？
   - 选项：A. 2 种  B. 5 种  C. 26 种  D. 8 种
   - 答案：**A** · 两种字形（如粗细），5 位一组表示一个字母。
   **English**: How many typefaces does Bacon's cipher use?
   - Answer: **A** · Two (e.g. bold/plain), five bits per letter.

2. **中文**：培根密码的本质是？
   - 选项：A. 二进制编码  B. 换位  C. 多表替换  D. 公钥
   - 答案：**A** · A/B 两种字形 = 0/1，是二进制的先声。
   **English**: What is Bacon's cipher at heart?
   - Answer: **A** · Two typefaces = bits: an early binary.

3. **中文**：培根密码属于哪一类技术？
   - 选项：A. 隐写术  B. 分组密码  C. 哈希  D. 数字签名
   - 答案：**A** · 秘密藏在普通文本的外观里，隐藏秘密的存在本身。
   **English**: Bacon's cipher is a form of?
   - Answer: **A** · It hides the secret in the look of text — steganography.
