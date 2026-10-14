---
title: AES Rijndael
title_en: AES (Rijndael)
type: machine
era: e14-standardization
game: hashlab
sources: 
  - FIPS 197, 《Advanced Encryption Standard》, 2001（NIST 标准化）
---

# AES Rijndael（AES (Rijndael)）

> 机器图鉴 · 2001– · 比利时设计 / 美国标准 / 2001– · Belgium / USA · 关联游戏：`hashlab`

## 概述

**中文**：当代世界的万能锁：128 位分组、10/12/14 轮，SubBytes-ShiftRows-MixColumns-AddRoundKey 四拍循环——你每天的 HTTPS 都在跑它。

**English**: The universal lock of our era: 128-bit blocks, 10/12/14 rounds cycling SubBytes-ShiftRows-MixColumns-AddRoundKey — every HTTPS connection you make runs it.

## 历史

**中文**：1997 年 NIST 发起公开竞选，比利时密码学家 Daemen 与 Rijmen 的 Rijndael 从 15 个候选中胜出，2001 年成为 FIPS 197。开放设计、全球公开评审——与「保密才有安全」的旧世界彻底分道扬镳；王小云对 SHA-1 的攻击同样证明了公开竞赛的力量（见现代章）。下方动画用示意运算走一遍四拍数据流。

**English**: NIST launched an open competition in 1997; Belgian cryptographers Daemen & Rijmen won with Rijndael among 15 candidates, standardized as FIPS 197 in 2001. Open design, worldwide public review — a clean break from the old "security by secrecy" world; Xiaoyun Wang's SHA-1 breaks proved the same power of open contests (see the modern chapter). The animation below walks the four-beat data flow with illustrative ops.

## 关键参数

| 参数 | 值 |
| --- | --- |
| 分组（Block） | 128 位 / 128 bits |
| 密钥/轮数（Key/Rounds） | 128→10 · 192→12 · 256→14 / 128→10 · 192→12 · 256→14 |
| 结构（Structure） | SPN（替换-置换网络） / SPN (substitution-permutation) |

## 关联

- 游戏：`hashlab`
