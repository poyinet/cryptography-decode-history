---
title: 换位
title_en: Transposition
type: domain
domain: d04
---

# 换位（Transposition）

> 技术域 d04

## 概念

**中文**：换位：字母**不变**，只改变它们的**排列顺序**（栅栏、斯巴达密码棒、列方）。它不掩盖字母频率，常与替换组合成混合密码——单用换位极易被破，但与替换结合会大幅增加密钥空间。

**English**: Transposition: the letters stay the same, only their **positions** change (rail fence, Spartan scytale, columnar). It hides nothing about letter frequency, so it is usually combined with substitution. Alone it breaks easily; combined it multiplies the key space.
## 算法 / 协议

### 可交互算法（Workshop）

- `rail` · **栅栏 Rail Fence**（Rail Fence）· 密钥：轨道数 / Number of rails，默认 `3`
- `adfgvx` · **ADFGVX（替换层）**（ADFGVX (substitution layer)）· 密钥：密钥词 / Key word，默认 `CIPHER`
- `bifid` · **Bifid**（Bifid）· 密钥：密钥词 / Key word，默认 `CIPHER`
- `trifid` · **Trifid**（Trifid）· 密钥： / ，默认 ``
- `columnar` · **列换位 Columnar**（Columnar Transposition）· 密钥：密钥词 / Key word，默认 `CIPHER`

## 术语

### Transposition（换位密码）
- 中文：字母不变，只改变它们的排列顺序（如栅栏密码）。
- English: The letters stay the same but are rearranged (as in the rail fence).
- 为什么重要：不改变字母、只改变位置，是换位密码的母类。
- 现实哪里用：从凯撒盒到 ADF GVX 的换位层。
- 怎么被破：位置规律可被统计复原。
- 游戏：`railfence`
- 章节：ww1

### Rail Fence（栅栏密码）
- 中文：把明文按锯齿形写进多行，再逐行读出，是最朴素的换位密码。
- English: Plaintext is written in a zigzag across rows, then read off row by row — the plainest transposition.
- 为什么重要：按之字形多行写再读出，是最早的换位。
- 现实哪里用：教学与信号旗。
- 怎么被破：枚举行数 + 已知明文即破。
- 游戏：`railfence`
- 章节：ww1

### ADFGVX
- 中文：德军一战的终极密码：6×6 方阵替换 + 密钥列换位的双层加密。
- English: Germany's WWI ultimate: a 6×6 Polybius substitution plus keyed columnar transposition.
- 为什么重要：一战德军的"替换+换位"双层密码，曾被视为不可破。
- 现实哪里用：1918 年德军电报。
- 怎么被破：替换层被频度分析破，换位层被猜出周期。
- 游戏：`adfgvx`
- 章节：ww1

### Bifid Cipher（Bifid 密码）
- 中文：把字母换成 5×5 方格坐标再重组的分块密码。
- English: Letters become grid coordinates, then get shuffled — a blocky substitution.
- 为什么重要：用 5×5 表把字母变坐标，再按行重组，是替换+换位混合。
- 现实哪里用：近代与教学。
- 怎么被破：坐标可被还原，周期可猜。
- 游戏：`bifid`
- 章节：arab

### Trifid Cipher（Trifid 密码）
- 中文：3×3×3 立体分块：替换与换位的三维合流。
- English: A 3×3×3 cubic block cipher mixing substitution and transposition.
- 为什么重要：双位的扩展，按三维重组，更抗分析。
- 现实哪里用：近代。
- 怎么被破：同双位，复杂度更高但可破。
- 游戏：`trifid`
- 章节：arab

### Scytale（斯巴达密码棒）
- 中文：公元前 5 世纪斯巴达的换位工具：羊皮纸条绕在特定粗细的木棒上书写，解下来即成乱码，只有同粗细木棒能复原。最早的军用换位密码实物。
- English: A fifth-century-BCE Spartan transposition tool: a strip wound around a rod of fixed diameter is written on, and reads as gibberish unwound. Only an identical rod restores it — the earliest physical military cipher.
- 为什么重要：古希腊的绕棒换位，是军事口令。
- 现实哪里用：斯巴达。
- 怎么被破：棒径猜出即破，位置规律暴露。
- 游戏：`campaign`
- 章节：dawn

### Double Transposition（双重换位密码）
- 中文：同一明文做两次密钥列换位（第二次用不同密钥写作另一宽度的表格）：字母不变、位置被连续打散——古典密码学里最顽强的换位体系，冷战初期由苏联间谍与荷兰抵抗组织使用。
- English: Two keyed columnar transpositions applied in sequence (second pass with a different key/width): letters unchanged, order scrambled twice — the toughest classical transposition, used by Dutch resistance and early Cold War spies.
- 为什么重要：连续两次换位，放大位置复杂度。
- 现实哪里用：近代电报。
- 怎么被破：两次换位可逐一还原。
- 章节：ww1

### Half-a-Radio（半部电台）
- 中文：1930 年底龙冈战斗缴获的国民党军电台：发报机已坏、收报机尚好——红军用它起监听破译的“家”，随后发展出完整无线电侦察体系；毛泽东评价“半部电台起家”是红军情报工作的起点。
- English: A Kuomintang radio captured at Longgang in late 1930 — transmitter smashed, receiver intact — became the Red Army's listening and codebreaking "home", growing into a full signals-intelligence system.
- 为什么重要：一战德军"替换+换位"的复合电码。
- 现实哪里用：1917 年德军电报。
- 怎么被破：被布莱切利园用频度+结构分析破。
- 章节：modern
## 关联时代 / 人物 / 游戏

**关联时代**（轴1 编年叙事）
- [古代起源](../02-eras/e01-origins/README.md)
- [阿拉伯黄金时代](../02-eras/e04-arabic-golden-age/README.md)
- [第一次世界大战](../02-eras/e09-ww1/README.md)
- [公钥革命](../02-eras/e13-public-key/README.md)

**关联人物**（人物志）
- [托马斯·杰斐逊](../people/jefferson.md)

**关联游戏**（站内可玩 · 游戏 ID）
- `adfgvx` · ADFGVX
- `bifid` · Bifid
- `campaign` · 破译战役
- `railfence` · 栅栏密码
- `trifid` · Trifid 破译机
