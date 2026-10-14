---
title: 洛伦兹与第一台计算机
title_en: Lorenz and the First Computer
type: era
era: e11-ww2
sources:
  - Jack Copeland, Colossus: The Secrets of Bletchley Park's Codebreaking Computers (2006)
  - Anthony Sale, The Colossus Rebuild Project (TNMoC)
---

# 洛伦兹与第一台计算机（Lorenz and the First Computer）

> 时代 e11-ww2 · 本章 lorenz

## 概念

💾 异或密钥流：明文 ⊕ 密钥 = 密文，差分统计破译

**English**: XOR keystream: plaintext ⊕ key = ciphertext; delta statistics

## 正文

**中文**：柏林与前线司令部之间的电传线路，藏着德军最高级的机密。电传机把每个字母编成五个比特的脉冲——五单位电传码——洛伦兹 SZ40 机再往这串脉冲上叠一层密钥：密文 = 明文 ⊕ 密钥，逐位异或。英军给它起了个鱼名：Tunny（金枪鱼）。机内十二个轮子昼夜旋转：五个 χ 轮、五个 ψ 轮，外加两个 μ 轮控制 ψ 轮的步进节奏，各轮针数互不相同，密钥流长得没有尽头。

比尔·塔特（Bill Tutte）为 Tunny 确立的是统计学的一刀：与其硬解十二个轮子的初始位置，不如先把相邻比特相减——差分；[图灵](../../people/turing.md)则改进出 Turingery 求密钥法。这一刀把 ψ 轮的贡献「稀释」掉大半：ψ 轮多数时候原地踏步，差分之后几乎消失，剩下的是 χ 轮那串较短、可猜的循环。破译员不必知道全部真相，只需在噪声里找到那一丝偏斜——这正是后来一切密码统计分析的雏形。

但差分计算快得惊人：一秒要处理五千个字符，继电器根本跟不上。工程师[弗劳尔斯](../../people/flowers.md)——汤米·弗劳尔斯——坚持用电子管：他从电话交换机的经验里知道，电子管可以做得足够可靠。1943 年底他造出 Colossus：一千五百多只电子管、穿孔纸带输入、程序可改——世界第一台可编程电子计算机。图灵给出数学的刀，弗劳尔斯磨出电子的刃：Colossus 每秒处理五千字符，把差分统计从「理论上可行」变成「实战中用得上」。诺曼底登陆前，英军已经读到德军最高层的命令。

战后，Colossus 被拆解，图纸被销毁，秘密守了三十年，直到 1970 年代才解密。它没机会像 ENIAC 那样登上教科书，但计算机的谱系从这里分岔：电子、可编程、每秒五千字符——这些词第一次同时出现在一台机器上。密码破译，就这样亲手生出了计算机。

**English**: The teleprinter lines between Berlin and the field headquarters carried Germany's highest secrets. A teleprinter encodes every letter as five pulses — the five-bit Baudot code — and the Lorenz SZ40 then laid a key stream over those pulses: ciphertext = plaintext ⊕ key, bit by bit — what we now call XOR. The British gave it a fishy codename: Tunny. Inside, twelve wheels turned day and night: five χ wheels, five ψ wheels, plus two μ wheels governing the stepping rhythm of the ψ wheels; each wheel had a different number of pins, and the key stream stretched on without end.

Bill Tutte's stroke for Tunny was a cut from statistics: instead of solving the starting positions of all twelve wheels, first subtract adjacent bits — the delta; [Turing](../../people/turing.md) later refined the Turingery method for recovering the wheel settings. That cut "dilutes" the ψ contribution: most of the time the ψ wheels did not step, so after differencing they nearly vanished, leaving the shorter, guessable cycle of the χ wheels. The codebreakers did not need the whole truth — only a faint statistical bias in the noise. It was the seed of every statistical cryptanalysis to come.

But the delta computation was ferociously fast: five thousand characters a second, far beyond relays. The engineer [Flowers](../../people/flowers.md) — Tommy Flowers — insisted on thermionic valves: he knew from telephone exchanges that valves could be made reliable enough. By the end of 1943 he had built Colossus: more than 1,500 valves, punched-tape input, reprogrammable — the world's first programmable electronic computer. Turing supplied the mathematical blade; Flowers honed the electronic edge. Colossus processed 5,000 characters per second and turned delta statistics from "theoretically possible" into "operationally real." Before the Normandy landings, the British were already reading the Wehrmacht's highest-level orders.

After the war Colossus was dismantled, its drawings destroyed, the secret kept for thirty years — declassified only in the 1970s. It never made the textbooks the way ENIAC did, but the lineage of the computer forks here: electronic, programmable, five thousand characters a second — for the first time those words described one machine. Codebreaking had given birth to the computer.

## 人物

- [`flowers`](../../people/flowers.md)
- [`turing`](../../people/turing.md)
- [`newman`](../../people/newman.md)
- [`tutte`](../../people/tutte.md)
- [`roberts`](../../people/roberts.md)

## 关联游戏

- lorenz, dungeon-cipher, binary, dungeon, platformer, pixeldino, pixelbird, asteroidf, blocks, brickbash

## 关联密件

- [`colossus`](../../artifacts/colossus.md)

## 出处

- Jack Copeland, Colossus: The Secrets of Bletchley Park's Codebreaking Computers (2006)
- Anthony Sale, The Colossus Rebuild Project (TNMoC)

## 延伸阅读

- Jack Copeland, Colossus: The Secrets of Bletchley Park's Codebreaking Computers
- David A. Price, Geniuses at War: Bletchley Park, Colossus, and the Dawn of the Digital Age (2021)
- Dermot Turing, Reflections of Alan Turing: A Relative Story (2021)

## 测验

1. **中文**：Colossus 是什么？
   - 选项：A. 世界第一台可编程电子计算机  B. 第一台转子机  C. 第一台摩斯机  D. 第一台打印机
   - 答案：**A** · 弗劳尔斯 1943 年建造，用于破译 Tunny。
   **English**: What was Colossus?
   - Answer: **A** · Built by Flowers in 1943 to break Tunny.

2. **中文**：洛伦兹（Tunny）密文基于什么编码？
   - 选项：A. 5 比特博多码  B. ASCII  C. 摩斯  D. BCD
   - 答案：**A** · 电传打字机的 5 比特博多码。
   **English**: What encoding underlies Tunny?
   - Answer: **A** · The 5-bit teleprinter code, Baudot.

3. **中文**：破解 Tunny 的核心数学工具？
   - 选项：A. 差分统计（Δ 运算）  B. 矩阵求逆  C. 傅里叶变换  D. 线性规划
   - 答案：**A** · 对比密钥流的差分，抵消规律性。
   **English**: The key tool for breaking Tunny?
   - Answer: **A** · Differencing the keystream cancels its structure.
