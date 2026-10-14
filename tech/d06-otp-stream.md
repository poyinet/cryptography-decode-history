---
title: OTP 与流密码
title_en: OTP & Stream Ciphers
type: domain
domain: d06
---

# OTP 与流密码（OTP & Stream Ciphers）

> 技术域 d06 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：OTP 与流密码：把随机**密钥流**与明文逐位异或。密钥若真随机、只用一次、绝不复用，就达到香农证明的**完美保密**；一旦复用，两条密文异或会直接泄出明文（Venona 的教训）。RC4/ChaCha20 用伪随机流替代真随机，快但有统计偏差的隐患。

**English**: OTP & stream ciphers: XOR a random **keystream** with the plaintext. If the key is truly random, used once, never reused, it reaches Shannon’s **perfect secrecy**; reuse leaks plaintext straight out (the Venona lesson). RC4/ChaCha20 substitute pseudorandom streams for speed, at the risk of statistical bias.
## 算法 / 协议

### OTP 与复用灾难（One-Time Pad）

**中文**：1917 年 AT&T 的 Gilbert Vernam 把电传打字电报与随机密钥流异或，发明了一次一密；1949 年 Shannon 证明：密钥真随机且绝不重复时，密文对攻击者不泄露任何信息——「完美保密」。但全部安全性只压在一个词上：一次。1942–46 年苏联 KGB/GRU 向多个站点重复发放同一批密码本页，1943 年起美国 Venona 项目靠「密钥复用 + crib 拖拽」破译了约 3000 条谍报电报。本演示：让两条消息共用同一条密钥，看密钥如何被抵消成白给。提示：永远从空格猜起（英文文本 0x20 最高发），再把猜出的词当作新的 crib 滚雪球。

**English**: In 1917, AT&T's Gilbert Vernam XORed teleprinter text with a random keystream — the one-time pad. In 1949 Shannon proved that with a truly random, never-reused key the ciphertext leaks nothing: "perfect secrecy". All of it rides on one word: ONE-time. In 1942–46 the Soviet KGB/GRU re-issued the same pad pages to multiple stations; starting 1943 the US Venona project exploited those reuses with crib dragging and partially decrypted ~3,000 coded messages. This demo: run two messages under the same key and watch the key cancel itself. Tip: always start from spaces (0x20 is the most frequent byte in English text), then snowball each recovered word into the next crib.

> 体验要点：**中文** 为什么「复用」直接泄底？C1 ⊕ C2 =（M1 ⊕ K）⊕（M2 ⊕ K）= M1 ⊕ M2——密钥完好无损地从算式中消失。剩下的是两份明文互相异或：它像一张叠影底片，你只需要猜中一条明文里的一句话，另一条的高余对应段立刻露出来。这就是 Venona 破译员的日常：从俄语电报的固定套路（问候语、日期、代号）入手，把「叠影」一片片刮亮。 · **English** Why does reuse leak everything? C1 ⊕ C2 = (M1 ⊕ K) ⊕ (M2 ⊕ K) = M1 ⊕ M2 — the key vanishes from the algebra untouched. What remains is the two plaintexts XORed together: a double-exposure where guessing one phrase in either message instantly exposes the other side of the sandwich. That was the Venona cryptanalyst's daily bread: start from the fixed rituals of Russian cable traffic (greetings, dates, code names) and scrape the overlay clean.

### RC4（RC4）

**中文**：RC4 曾加密过 WEP Wi-Fi 与半个互联网的 TLS 流量——却在 2015 年被 RFC 7465 全面禁用。死因有二：WEP 死于 IV 可预测导致的「密钥流重用」；TLS 中的 RC4 则死于输出统计偏置（FMS 2001 → RC4 NOMORE 2015），终被 RFC 7465 全面禁用。共同教训：本演示用真实 RC4（KSA+PRGA）复现 WEP 式灾难：固定密钥、只换 3 字节 IV，窃听者无需密钥就能读出两段明文的异或关系。

**English**: RC4 once encrypted WEP Wi-Fi and half the internet's TLS traffic — until RFC 7465 banned it outright in 2015. It died twice over: WEP fell to predictable-IV keystream reuse, while TLS RC4 was banned for output biases (FMS 2001 → RC4 NOMORE 2015, RFC 7465). Shared lesson: This demo reproduces the WEP-style disaster with REAL RC4 (KSA+PRGA): fixed key, only a 3-byte IV changes — and an eavesdropper reads the XOR of two plaintexts without any key.

### ChaCha20（ChaCha20）

**中文**：ChaCha20 把 4×4 的 32 位字状态搅 20 轮：每轮先对四列、再对四条对角线各跑一次 quarter-round——八条指令（加法、异或、循环移位交替），现代 CPU 上快得飞起，且常数时间无查表侧信道。单步走一遍双轮的 64 条操作，亲眼看雪崩扩散。

**English**: ChaCha20 churns a 4×4 state of 32-bit words for 20 rounds: each round runs a quarter-round over the four columns then the four diagonals — eight instructions alternating add, XOR and rotation. Blazing fast on modern CPUs and constant-time with no table lookups. Single-step all 96 ops of one double round and watch the avalanche.

### A5/1 流密码（A5/1）

**中文**：GSM 手机的通话加密：三个不同长度的 LFSR（19/22/23 位）靠「少数服从多数」钟控——多数位决定谁走谁留，输出位是三个最高位的异或。简单、硬件便宜，却在 2009 年被 Karsten Nohl 用彩虹表实测攻破：如今它只活在教科书里。单步看多数投票与密钥流诞生。

**English**: GSM call encryption: three LFSRs (19/22/23 bits) clocked by majority vote — the majority clock-bit decides who steps, and each output bit is the XOR of three top cells. Cheap in hardware, broken in practice by Karsten Nohl's rainbow tables (2009). Today it lives only in textbooks. Step through the voting and the keystream.
### 可交互算法（Workshop）

- `xor` · **异或 XOR**（XOR）· 密钥：密钥词 / Key word，默认 `KEY`

## 术语

### One-Time Pad (OTP)（一次性密码本）
- 中文：密钥与明文等长、完全随机、只用一次的密码——香农证明其绝对不可破。
- English: A truly random key as long as the message, used once — Shannon proved it is unbreakable.
- 游戏：`otp-telegraph`
- 章节：venona

### XOR（异或）
- 中文：按位比较的运算：相同得 0、不同得 1。现代密码的原子，A⊕K⊕K=A。
- English: The bitwise operation where equal bits give 0 and different bits give 1 — the atom of modern crypto: A⊕K⊕K=A.
- 游戏：`xor`
- 章节：lorenz, modern

### One-Time Pad History（一次性密码本（史））
- 中文：1917 年 Vernam 发明，用穿孔纸带做密钥流。
- English: Invented by Vernam in 1917 using punched tape key streams.
- 游戏：`venona`
- 章节：venona

### RC4
- 中文：1987 年 Rivest 设计的软件流密码，把短密钥「拉长」成伪随机密钥流；曾撑起 WEP、早期 TLS 与 WPA，却因密钥流重用和输出偏差频遭攻击，如今已被全面弃用。
- English: A software stream cipher designed by Ron Rivest in 1987 that stretches a short key into a pseudorandom keystream. It powered WEP, early TLS and WPA, but keystream-reuse and bias attacks led to its complete deprecation.
- 游戏：`xor`
- 章节：lorenz, modern

### ChaCha20
- 中文：2008 年 Bernstein 在 Salsa20 基础上改进的流密码，纯软件实现飞快、对硬件要求低；TLS 1.3 和 WireGuard 都把它列为默认加密，是当今流密码的当红明星。
- English: A stream cipher designed by Daniel Bernstein in 2008 as an improved variant of his Salsa20. It is extremely fast in pure software and low-power, and is the default cipher in TLS 1.3 and WireGuard.
- 游戏：`xor`
- 章节：modern

### Pseudorandom Function (PRF)（伪随机函数）
- 中文：输入任意数据、输出看似随机结果的函数，不知道密钥的人无法把它与真随机函数区分；HMAC 是标准例子，分组密码也常被当 PRF 用。
- English: A function whose outputs look random to anyone without the key, indistinguishable from a truly random function. HMAC is the classic example, and block ciphers double as PRFs.
- 游戏：`xor`
- 章节：modern

### Pseudorandom Generator (PRG)（伪随机生成器）
- 中文：把一小段真随机种子「拉长」成大量看似随机的比特，流密码的密钥流就是这么来的；种子若不够随机，拉出来的全是伪随机。
- English: A function that stretches a short truly random seed into a long stream of random-looking bits—exactly how stream-cipher keystreams are produced. If the seed is weak, everything downstream is weak.
- 游戏：`xor`
- 章节：venona, modern

### Stream Cipher (Keystream)（流密码（密钥流））
- 中文：用一小段密钥流与明文逐位异或，像 OTP 但用确定性 PRNG 生成密钥流——RC4、A5/1、ChaCha20 都属此类。它们快、轻便，但常见事故的元凶（nonce 复用）。
- English: XOR plaintext bit by bit with a pseudorandom keystream — deterministic OTP without key distribution. RC4, A5/1 and ChaCha20 are members, and nonce reuse is the classic disaster.
- 游戏：`xor`
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
