---
title: 换位
title_en: Transposition
type: domain
domain: d04
---

# 换位（Transposition）

> 技术域 d04 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

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
- 游戏：`railfence`
- 章节：ww1

### Rail Fence（栅栏密码）
- 中文：把明文按锯齿形写进多行，再逐行读出，是最朴素的换位密码。
- English: Plaintext is written in a zigzag across rows, then read off row by row — the plainest transposition.
- 游戏：`railfence`
- 章节：ww1

### ADFGVX
- 中文：德军一战的终极密码：6×6 方阵替换 + 密钥列换位的双层加密。
- English: Germany's WWI ultimate: a 6×6 Polybius substitution plus keyed columnar transposition.
- 游戏：`adfgvx`
- 章节：ww1

### Bifid Cipher（Bifid 密码）
- 中文：把字母换成 5×5 方格坐标再重组的分块密码。
- English: Letters become grid coordinates, then get shuffled — a blocky substitution.
- 游戏：`bifid`
- 章节：arab

### Trifid Cipher（Trifid 密码）
- 中文：3×3×3 立体分块：替换与换位的三维合流。
- English: A 3×3×3 cubic block cipher mixing substitution and transposition.
- 游戏：`trifid`
- 章节：arab

### Scytale（斯巴达密码棒）
- 中文：公元前 5 世纪斯巴达的换位工具：羊皮纸条绕在特定粗细的木棒上书写，解下来即成乱码，只有同粗细木棒能复原。最早的军用换位密码实物。
- English: A fifth-century-BCE Spartan transposition tool: a strip wound around a rod of fixed diameter is written on, and reads as gibberish unwound. Only an identical rod restores it — the earliest physical military cipher.
- 游戏：`campaign`
- 章节：dawn

### Double Transposition（双重换位密码）
- 中文：同一明文做两次密钥列换位（第二次用不同密钥写作另一宽度的表格）：字母不变、位置被连续打散——古典密码学里最顽强的换位体系，冷战初期由苏联间谍与荷兰抵抗组织使用。
- English: Two keyed columnar transpositions applied in sequence (second pass with a different key/width): letters unchanged, order scrambled twice — the toughest classical transposition, used by Dutch resistance and early Cold War spies.
- 章节：ww1

### Half-a-Radio（半部电台）
- 中文：1930 年底龙冈战斗缴获的国民党军电台：发报机已坏、收报机尚好——红军用它起监听破译的“家”，随后发展出完整无线电侦察体系；毛泽东评价“半部电台起家”是红军情报工作的起点。
- English: A Kuomintang radio captured at Longgang in late 1930 — transmitter smashed, receiver intact — became the Red Army's listening and codebreaking "home", growing into a full signals-intelligence system.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
