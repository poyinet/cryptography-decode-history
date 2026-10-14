---
title: 应用安全工程
title_en: Applied Security Engineering
type: domain
domain: d23
---

# 应用安全工程（Applied Security Engineering）

> 技术域 d23 ·（Phase 0 占位 · 概念/算法/协议/术语待填充）

## 概念

**中文**：应用安全工程：算法之外才是真战场——口令强度（熵 = 字符集 × 长度）、argon2id 内存困难哈希、供应链完整性、零信任。再强的算法被 `password123` 和一次钓鱼点击击穿，「安全」是系统属性不是组件属性。

**English**: Applied security engineering: the real battlefield is outside the algorithm — password strength (entropy = charset × length), argon2id memory-hard hashing, supply-chain integrity, zero trust. Even the strongest algorithm falls to `password123` and one phishing click; "security" is a system property, not a component property.
## 算法 / 协议

### 口令破解成本（Password Cracking Cost）

**中文**：穷举时间 = 组合数 ÷ 每秒尝试数。拖动长度、勾选字符集、换算法与装备——你会看到：对抗快哈希时「长度」几乎就是一切；而 Argon2 这类内存困难算法能把百万卡集群打回原形。（速率为公开基准的量级估算，用于建立直觉）

**English**: Time = combinations ÷ guesses per second. Drag length, tick charsets, swap algorithms and rigs — against fast hashes, length is nearly everything; memory-hard Argon2 drags a million-GPU farm back to earth. (Rates are order-of-magnitude estimates from public benchmarks, for intuition.)
## 术语

### Format-Preserving Encryption (FPE)（格式保留加密）
- 中文：加密后密文与明文保持相同格式（如 16 位卡号仍为 16 位数字），让旧系统无需改动字段就能存下密文。
- English: Encryption in which the ciphertext keeps the same format as the plaintext (a 16-digit card number stays 16 digits), so legacy systems can store ciphertext without changing fields.
- 游戏：`sm4`
- 章节：modern

### Password Manager（口令管理器）
- 中文：用一个强主口令加密保管所有站点随机口令的工具（如 KeePassXC/Bitwarden）。它把「记住 N 个口令」降为「记住 1 个」，让每站唯一长随机口令成为现实。
- English: A tool that stores every site's unique random password under one strong master secret (KeePassXC, Bitwarden...). It turns "remember N passwords" into "remember one," making per-site long random secrets practical.
- 游戏：`password-vault`
- 章节：modern

### Supply Chain Attack（供应链攻击）
- 中文：不直接攻目标，而攻目标的「原料」：篡改上游依赖包、编译器、构建流水线或硬件固件，让被攻者亲手把后门装进自己系统。历史大案：SolarWinds（2020，篡改更新通道）、XZ Utils 后门（2024，投毒开源依赖）、3CX 事件。
- English: Attack the ingredients, not the target: tamper with upstream packages, compilers, build pipelines or firmware so the victim installs the backdoor by themselves. Landmark cases: SolarWinds (2020, poisoned update channel), the XZ Utils backdoor (2024, open-source dependency poisoning), 3CX.
- 章节：modern

### Zero-Day（零日漏洞）
- 中文：「零日」指厂商知晓与修补的窗口为零：漏洞被攻击者利用时，厂商还没发现或没补丁——无日志、无特征，防御方只能先假设有鬼。情报界称「令人绝望的对称性」：攻击者只要找到一个 0-day 就能突破一切、且难以探测。
- English: A vulnerability exploited before the vendor knows or patches it — the window is "zero days". No signatures, no logs: defenders must assume the worst. Intelligence services call it the "kill chain" all the way down: one unpatched flaw breaks any stack, invisibly.
- 章节：modern

### PRISM & 2013 Surveillance Disclosures（棱镜计划与 2013 年大规模监控披露）
- 中文：2013 年 6 月，前 NSA 承包商爱德华·斯诺登向媒体披露：美国国家安全局通过 PRISM 程序直接从微软、谷歌、雅虎等九大互联网公司服务器拉取数据，另有「上游」拦截与全球监听——引发全球加密使用大潮（HTTPS 比例从 2013 年的约 30% 升至如今 90%+）。
- English: In June 2013 NSA contractor Edward Snowden revealed mass surveillance: direct access to nine internet giants (PRISM), upstream cable interception and global tapping. The fallout pushed HTTPS from ~30% of web traffic in 2013 to over 90% today.
- 章节：modern

### CVE & Vulnerability Management（CVE 与漏洞管理）
- 中文：CVE（通用漏洞与暴露）为每个公开漏洞分配唯一编号（如 CVE-2014-0160 = Heartbleed）；配套 CVSS 打分定严重级、CWE 分类、NVD 数据库聚合。漏洞管理 = 资产清单 × 补丁节奏 × 利用情报，核心是把「被公开利用」的风险压到最小。
- English: The Common Vulnerabilities and Exposures registry gives every disclosed flaw a unique ID (CVE-2014-0160 = Heartbleed); CVSS scores severity, CWE classifies root causes, NVD aggregates it all. Vulnerability management = asset inventory × patch cadence × exploitation intelligence.
- 章节：modern
## 关联时代 / 人物 / 游戏
（待填）
