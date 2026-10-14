---
title: DES 数据加密标准
title_en: DES (Data Encryption Standard)
type: machine
era: e14-standardization
sources: 
  - IBM, 《Data Encryption Standard》, FIPS 46, 1977（NIST 采纳）
---

# DES 数据加密标准（DES (Data Encryption Standard)）

> 机器图鉴 · 1977–2005 · 美国 / 1977–2005 · USA

## 概述

**中文**：第一个世界级公开加密标准：56 位密钥统治全球金融二十年——也是被暴力计算正面击碎的第一王座。它的倒下直接催生了公开竞赛选出的 AES。

**English**: The first world-scale public encryption standard: a 56-bit key ruled global finance for two decades — and became the first throne smashed head-on by brute computation. Its fall directly triggered the open competition that crowned AES.

## 历史

**中文**：源自 IBM 的 Lucifer 方案，NSA 参与修订后于 1977 年被 NIST 标准化。学界首次系统研究真实密码的设计（S 盒、差分分析的思想源头），但 56 位密钥始终是心结：1998 年 EFF 用 25 万美元的「Deep Crack」机器 56 小时穷举破译；1999 年与 distributed.net 联手压到 22 小时 15 分。NBS（NIST 前身）随即启动公开竞赛，Rijndael 胜出成为 AES（见上一台）。DES 的真正遗产不是算法本身，而是「密码必须经得起全世界公开攻击」这一范式。

**English**: Born from IBM's Lucifer and revised with NSA input, DES was standardized by NIST in 1977. It gave academia the first real cipher to study (S-boxes; the seeds of differential cryptanalysis) — yet the 56-bit key was always the achilles heel: in 1998 EFF's $250k "Deep Crack" brute-forced it in 56 hours, and in 1999 with distributed.net in 22h15m. NBS (later NIST) then ran the open competition that produced AES (previous exhibit). DES's true legacy is not the algorithm but the paradigm: ciphers must survive worldwide open attack.

## 关键参数

| 参数 | 值 |
| --- | --- |
| 密钥（Key） | 56 位（含校验共 64） / 56 bits (64 with parity) |
| 分组/轮数（Block/Rounds） | 64 位 / 16 轮 Feistel / 64 bits / 16 Feistel rounds |
| 终结者（Undone by） | EFF Deep Crack（22h15m · 1999） / EFF Deep Crack (22h15m, 1999) |

## 关联

- 游戏：（无）
