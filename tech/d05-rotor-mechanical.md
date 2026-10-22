---
title: 转子/机械密码
title_en: Rotor & Mechanical Ciphers
type: domain
domain: d05
---

# 转子/机械密码（Rotor & Mechanical Ciphers）

> 技术域 d05

## 概念

**中文**：转子/机械密码：用**机电转子**自动完成换位与替换的联动（恩尼格玛、洛伦兹）。恩尼格玛的妙处是加密=解密的对称性，但**密钥设定**（转子序、环位、插线板）成了唯一弱点——波兰数学家的格罗夫与图灵的 Bombe 正是从这里入手。

**English**: Rotor & mechanical: electromechanical rotors automate linked substitution and permutation (Enigma, Lorenz). Enigma’s gift was encrypt-equals-decrypt symmetry, but its **key setup** (rotor order, ring settings, plugboard) was the only weak point — Polish grogs and Turing’s Bombe attacked exactly there.
## 算法 / 协议

（本域暂无独立工坊算法 / 协议演示，可玩实现见下方「关联游戏」）
## 术语

### Enigma（恩尼格玛）
- 中文：德军二战转子机：转子 + 插线板，加密等于解密的奇妙对称；曾被认为不可破译，最终被波兰与英国密码学家攻破。
- English: The German WWII rotor machine: rotors plus plugboard, with the eerie symmetry that encrypting equals decrypting. Once thought unbreakable, it was broken by Polish and British cryptanalysts.
- 为什么重要：二战德军最著名密码机，转子+插线板，曾被视为不可破。
- 现实哪里用：德军几乎所有电报。
- 怎么被破：波兰数学破译 + 英国 Bombe 穷举。
- 游戏：`enigma`
- 章节：bletchley

### Bombe（炸弹机（Bombe））
- 中文：图灵与韦尔奇曼设计的机电筛选机，用已知明文（crib）快速排除不可能的转子设置，大幅缩短破译时间。
- English: The electromechanical sieve designed by Turing and Welchman that used cribs to eliminate impossible rotor settings at speed.
- 为什么重要：图灵团队造的机电穷举机，专破 Enigma。
- 现实哪里用：布莱切利园，破译了数百万电报。
- 怎么被破：它是破译机器，不是被破对象。
- 游戏：`bombe`
- 章节：bletchley

### Purple（紫密（Purple））
- 中文：日本最高外交密码机：元音路与辅音路分路置换的步进开关。
- English: Japan's top diplomatic machine: stepping switches splitting vowels and consonants into separate paths.
- 为什么重要：日军的 150 亿种组合电传机，曾被视为不可破。
- 现实哪里用：日本驻美使馆通信。
- 怎么被破：美国用已知明文+结构分析破开。
- 游戏：`purple`
- 章节：purple

### JN-25
- 中文：日本海军密码：码本 + 每日加表双重加密，美军靠「深度」破译。
- English: The Japanese Navy cipher: codebook plus daily additive; broken by US depth analysis.
- 为什么重要：二战日军海军主力电码，单表+空字。
- 现实哪里用：太平洋战场。
- 怎么被破：靠破译者反复猜测+已知明文，中途岛前被突破。
- 游戏：`jn25`
- 章节：midway

### Typex（迪普克斯）
- 中文：英国 1934 年起以商用 Enigma 为基础自行改造的转子密码机：五只转子（两只固定、三只随键步进）+ 反射器 + 打字机直印明文/密文纸条，1937 年首批交付 RAF，Typex Mk II 打满二战；德军密码学家始终未能破译 Typex 通信。
- English: The British adaptation of the commercial Enigma, designed from 1934: five rotors (two static, three stepping), a reflector and a typewriter printing plaintext/ciphertext strips. The first Mk I batch reached the RAF in 1937 and the Mk II served through WWII — German codebreakers never read Typex traffic.
- 为什么重要：英国 Enigma 的"改良版"，多了一个字母位置。
- 现实哪里用：英军。
- 怎么被破：结构比 Enigma 略复杂，仍被 Bombe 系破。
- 游戏：`typex`
- 章节：bletchley

### Hagelin C-38（哈格林 C-38）
- 中文：瑞典工程师鲍里斯·哈格林 1930 年代设计的拉杆型机械密码机，美国以 M-209 之名装备全军 14 万台；其核心运算是博福特式自倒置，二战中起了巨大而低调的作用。
- English: Boris Hagelin's 1930s lug-based cipher machine, produced for the US as M-209 and fielded in 140,000 units. Its heart is a Beaufort-style self-inverse operation — the workhorse of WWII field cryptography.
- 为什么重要：机械化的"准 OTP"，瑞士设计，曾被视为安全。
- 现实哪里用：盟军特种部队（SOE）。
- 怎么被破：结构弱点+长明文统计被破。
- 游戏：`m209`
- 章节：ww1

### Rockex Cipher（罗克斯密码机）
- 中文：英国战后主力滚轮密码机（源自 Bletchley 的 Lorenz 研究，1943 年设计、战后列装）：转子加打印机直出密文，服务英国外交与英联邦电报直到 1960 年代。
- English: The UK's postwar workhorse rotor machine (built from Bletchley's Lorenz research, designed 1943, fielded after the war): rotors plus a printer, carrying British diplomatic traffic into the 1960s.
- 为什么重要：英军二战密码机，是 Enigma 的替代之一。
- 现实哪里用：英军。
- 怎么被破：被布莱切利园破译。
- 章节：lorenz

### Combined Cipher Machine (CCM)（联合密码机（CCM））
- 中文：二战后期英美互换加密电报的共电机：把英国 Typex 与美国 Mark 22 改装为同一加密体系，盟军跨大西洋通信第一次共同安全。
- English: The Anglo-American interoperable machine of late WWII: British Typex and US Mark 22 adapted to one cipher, giving Allied Atlantic traffic a single shared security.
- 为什么重要：英军"组合密码机"，一次串联两台 Enigma。
- 现实哪里用：英军。
- 怎么被破：被布莱切利园破译。
- 章节：lorenz
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [第一次世界大战](../02-eras/e09-ww1/README.md)
- [第二次世界大战](../02-eras/e11-ww2/README.md)

**关联人物**（人物志）
- [图灵](../people/turing.md)
- [韦尔奇曼](../people/welchman.md)
- [弗兰克·罗利特](../people/rowlett.md)
- [马里安·雷耶夫斯基](../people/rejewski.md)
- [耶日·鲁日茨基](../people/rozycki.md)
- [亨里克·齐加尔斯基](../people/zygalski.md)
- [阿图尔·谢尔比乌斯](../people/scherbius.md)
- [弗劳尔斯](../people/flowers.md)
- [杰里·罗伯茨](../people/roberts.md)
- [迪利·诺克斯](../people/knox.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `bombe` · 炸弹机
- `enigma` · 恩尼格玛
- `jn25` · JN-25 破译机
- `m209` · M-209 转轮密码机
- `purple` · 紫密破译机
- `typex` · Typex 打字密码机
