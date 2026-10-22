---
title: 保罗·科赫尔
title_en: Paul Kocher
type: person
era: e13-public-key
sources: 
  - Wikipedia, 《Paul Kocher》
  - Kocher, P. 《Timing Attacks on Implementations of Diffie-Hellman, RSA, DSS, and Other Systems》, CRYPTO 1996
---

# 保罗·科赫尔（Paul Kocher）

> 人物志 · ⌛ · 密码学家 · 侧信道攻击奠基人 · 1965– · 美国

## 简介

**中文**：美国密码学家，时序攻击的发明者。1996 年他发现 RSA 解密时，密钥不同的位会走不同的分支，分支耗时不同——测量一次解密的耗时，就能把私钥的一位位推出来。这是「算法没破、实现泄密」的头号案例。他后来又用「Bleichenbacher 填充预言攻击」证明 RSA 的填充实现（OAEP 之前）可以靠服务器回的错误消息逐位还原私钥。Kocher 的工作让「常数时间、防侧信道」从口号变成了工程规范。

**English**: An American cryptographer, the inventor of the timing attack. In 1996 he found that RSA decryption takes different times for different key bits — the different bits take different branches, and measuring one decryption's duration can peel out the private key bit by bit. This was the flagship case of "the algorithm is fine, the implementation leaks." He later used the "Bleichenbacher padding-oracle attack" to show pre-OAEP RSA padding implementations can have the private key recovered bit by bit from the error messages a server returns. Kocher's work turned "constant time, side-channel resistance" from a slogan into an engineering norm.

## 一句话

**中文**：他的时序攻击 1996 年发表，如今 TLS 服务端的 RSA 实现都要专门写成常数时间以躲开它。

**English**: His timing attack was published in 1996; today every RSA implementation on a TLS server is written to be constant-time specifically to dodge it.

## 名言

**中文**：—

**English**: —

## 关联

- 章节：modern
