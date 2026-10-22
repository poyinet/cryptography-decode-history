# 密码学知识源 + 知识分站 · 详细实现计划 v2

> 版本 v2 · 2026-10-22 · 状态：待用户评审
> 范围：**仅**①密码学知识源（`poyinet/cryptography-decode-history`）②知识分站（`crypto.poyi.net`）
> **主站 poyi.net 本轮完全不动**，仅在数据层预留接口。
> v2 相对 v1 的变更：去掉一切硬指标与上下限；补入全网检索底稿；呈现方式大幅扩展；中英同步；内容仓与分站计划细化到可直接执行。

---

## 〇、v2 相对 v1 的六项修订

| # | v1 | v2 |
|---|---|---|
| 1 | 大量数字门限（"术语 750""tier1 ≥2 条出处""110–145 人日""≥2 条引用"） | **全部删除**。改为"覆盖即完整、质量靠抽检、进度靠矩阵自陈"的开放制 |
| 2 | 分类靠自拟 | **全网检索打底**：已入库 `_meta/research/` 两份底稿（分类体系 / 古典密码全谱 / 标准目录 / 算法清单 / 攻击分类 / 理论 / 实体 / 中文体系 / 已知空白） |
| 3 | 呈现 9 视图 | **呈现方式扩为四大类、多层多维**（见 §五） |
| 4 | 内容仓与分站计划偏粗 | **细化到可直接执行**（每阶段拆到子步骤、文件级产物、门禁实现要点） |
| 5 | 中文优先 | **中英同步**：每条内容双语同源同生，无"待补英文"状态 |
| 6 | — | 主站不动：新增字段全部可选，19 个旧生成器保持 parity 全绿 |

---

## 一、前提与边界

### 1.1 本轮确定的前提

| 项 | 决定 | 理由 |
|---|---|---|
| 分站域名 | **`crypto.poyi.net`** | 语义精确；与主站"玩"的分工一眼可辨；不影响现有 poyi.net 部署 |
| `file://` 直开 | **放弃** | 可用 ESM / fetch / 构建 / Worker / IndexedDB / 现代 CSS；效率优先 |
| 运行时零外部依赖 | **保留** | 产物纯静态，无 CDN、无外链字体 |
| 纯文字出处、零外链 | **保留** | 每条内容有可核查的纯文字引用 |
| 零遥测 / 纪录仅本地 | **保留** | 无后端、无统计、无账号 |
| 主站 poyi.net | **不动** | 本轮只做知识面；游戏主站是下一阶段 |
| 硬指标 | **取消** | 见 §1.2 |

### 1.2 为什么取消硬指标

v1 用"术语 750 / tier1 ≥2 条出处 / 覆盖率 ≥95%"这类数字做验收，副作用有三：

1. **指标一旦成为目标，就会被生产出来**——为了凑数写出"术语 750"里注水的 468 条，比老老实实写好 200 条更糟。
2. **"完整"本身不可证伪**——密码学没有公认的"全集"，任何数字都是人为切割。
3. **质量与广度被绑死**——为满足"tier1 必须两条权威出处"，会把本该写成 tier3 索引级的长尾硬写成 tier1，成本失控。

**v2 的替代机制**：

| 机制 | 替代了什么 |
|---|---|
| **知识总目录（inventory）** | 替代"数量指标"。它定义"应该存在什么"，比"应该有多少条"更本质 |
| **覆盖矩阵（coverage matrix）** | 替代"覆盖率阈值"。缺口以热力图与队列呈现，**永远可见、持续收敛**，而不是一个过了就没人看的百分比 |
| **质量分档（tier1/2/3）+ 抽检** | 替代"硬门限"。广度靠 tier2/3 铺满，深度靠 tier1 精写 + 人工抽检（抽检发现的问题回流到具体条目，而不是记成一个数字） |
| **出处可核查性（结构化 + 链接可达）** | 替代"条数门限"。出处必须是真实可点击/可查的纯文字引用，而不是计数 |
| **"同源"纪律** | 替代"一致性检查"。主站与分站读同一份数据，天然一致 |

### 1.3 硬性红线（仍然保留，这些不是指标而是底线）

- 出处必须是**真实可核查**的引用（书 / 论文 / 标准 / RFC / 博物馆档案 / 口述史 / 报纸），**禁止**为凑数编造或拼接
- 史实数字（年份、人名、事件）必须可追溯到出处；无出处的一律标 `quality: draft` 且在站点上**显式标注"待核证"**
- 术语的**规范名唯一**，别名/异译/旧称可多条但必须指向唯一规范名
- 正文内**不嵌外链**（引用以纯文字著录形式给出）
- 不引入后端、统计、账号、遥测

---

## 二、现状（2026-10-22 实测，含本轮修复后）

### 2.1 知识源仓 `poyinet/cryptography-decode-history`

| 维度 | 现状 | 本轮变化 |
|---|---|---|
| .md | 233 | 233（+2 份研究底稿，非内容） |
| 时代 | 19（`02-eras/e01…e19/`，51 个 md） | — |
| 技术域 | 24（`tech/d02…d24` + `01-foundations.md`） | — |
| 人物 / 密件 / 机器 | 88 / 49 / 8 | — |
| 术语 / 测验 | 282 / 252 | — |
| 时间线 / 地图 / 关系 / 冷知识 / 名言 | 77 / 47 / 52 / 81 / 60 | — |
| 生成器 | 19 个（`tools/mdgen/`） | — |
| **管线健康** | ❌ 断（硬编码路径） | ✅ **已修**（`POYI_ROOT` 环境变量 + 相对探测） |
| **parity** | ❌ 崩 | ✅ **985 · FAIL 0** |
| **git** | 1 次提交 + 117 处未提交 | ✅ **已提交并推送**（`bd4bfb4`） |
| **研究底稿** | 无 | ✅ **新增 2 份**（`_meta/research/`，约 126 KB） |

### 2.2 分站 `crypto.poyi.net`

| 项 | 状态 |
|---|---|
| GitHub 仓 `poyinet/crypto` | ✅ 已创建，公开 |
| 分支 / 提交 | ✅ `main` / `30d493b` |
| GitHub Pages | ✅ `status: built`，`cname=crypto.poyi.net` |
| 产物 | `index.html`（建设中占位页，含 24 点晶格动画）· `CNAME` · `README.md` · `robots.txt` · `.nojekyll` |
| **DNS** | ⚠️ **待配**：需在 Cloudflare 加 `crypto CNAME poyinet.github.io`（`poyi.net` 的 NS 已是 Cloudflare） |
| CI 自动发布 | ⬜ 待建（§六 K4） |

### 2.3 主站 poyi.net

**不动。** 现状保持上一轮交付：119 款密码游戏 · 门禁 25/25 · e2e 613/613。本轮仅保证：

- 知识源新增字段**全部可选**，主站 19 个生成器与 parity 门禁保持绿
- 主站内容与分站内容**同源**（同一批生成数据），不存在双份手改

---

## 三、知识源：详细实现计划

### 3.1 知识总目录（inventory）——「应该存在什么」

**位置**：`_meta/inventory/*.yaml`

**为什么用清单而不是数据库**：清单是人可读可审可 diff 的，与 Markdown 正文同构；评审时能直接看到"还差什么"。

#### 3.1.1 清单文件清单

| 文件 | 内容 | 依据来源 |
|---|---|---|
| `eras.yaml` | 19 个时代，每时代下必收主题 | 知识仓已有 19 时代结构 |
| `domains.yaml` | 24 个技术域，每域下必收子主题 | 已有 24 域；子主题为新增层 |
| `subtopics.yaml` | 子主题总表（跨域汇总，供矩阵用） | 由 domains 派生 |
| `people.yaml` | 人物收录标准 + 名单 | 研究底稿 §7.1（Wikipedia Cryptographers 分类等） |
| `artifacts.yaml` | 密件类型学（real / dramatized / reconstructed）+ 名单 | 研究底稿 §7.3（Wikipedia List of ciphertexts 等） |
| `machines.yaml` | 密码机与装置 | 研究底稿 §7.2 |
| `terms.yaml` | 术语词表 | 研究底稿 §4/§6 + HAC 术语表 |
| `algorithms.yaml` | 算法全谱（古典 + 分组 + 流 + 哈希 + 公钥 + PQC） | 研究底稿 §4 |
| `protocols.yaml` | 协议族 | 研究底稿 §3.3（IETF RFC 逐条核验） |
| `standards.yaml` | 标准化文件（FIPS / SP / ISO-IEC / IEEE / GB·GM / CA） | 研究底稿 §3.1–3.6 |
| `attacks.yaml` | 攻击模型 + 攻击手法 + 侧信道 + 社会工程 | 研究底稿 §5 |
| `theorems.yaml` | 定理、归约、安全定义 | 研究底稿 §6.2–6.8 |
| `events.yaml` | 关键事件与标准发布 | 研究底稿 §7.3 + 标准目录 |
| `cn-history.yaml` | 中国古代 → 近现代 → 商业密码 的分期与条目 | 研究底稿 §8.5–8.6 |

#### 3.1.2 条目 schema

```yaml
- id: affine
  title: 仿射密码
  title_en: Affine Cipher
  status: done              # done | todo | draft | exempt
  quality: tier1            # tier1 | tier2 | tier3
  domain: [d02-monoalphabetic]
  subtopic: [monoalphabetic-substitution]
  era: [e02-classical]
  level: 2                  # 1 入门 / 2 进阶 / 3 专家 / 4 研究
  prereq: [caesar, substitution]
  aliases: [仿射密码, affine, 仿射替换]
  apps: [military, education]
  threats: [CPA, CCA]
  playable: true            # 供主站游戏化预留
  archetype: shift-wheel
  sources:
    - { title: "Affine cipher", kind: reference }
  note: ""                  # status: exempt 时必填理由
```

**字段语义**

| 字段 | 作用 | 谁消费 |
|---|---|---|
| `id` | 全局唯一规范 ID | 门禁（唯一性）、图谱、索引 |
| `status` | done / todo / draft / exempt | 覆盖矩阵、门禁 |
| `quality` | tier1 / tier2 / tier3 | 抽检策略、深度模板要求 |
| `domain` / `subtopic` / `era` | 三条主轴 | 多维筛选、交叉矩阵 |
| `level` | 难度 | 学习路径、难度徽章 |
| `prereq` | 前置依赖 | 前置 DAG、路径编排 |
| `aliases` | 异译/旧名/英文名/缩写 | 检索、别名消歧 |
| `apps` | 应用场景 | 多维筛选、场景视图 |
| `threats` | 威胁模型 | 多维筛选、攻防视图 |
| `playable` / `archetype` | 供主站游戏化 | 主站（下一阶段） |
| `sources` | 纯文字著录 | 出处门禁、实体页出处区 |
| `note` | 豁免理由 | 门禁 |

#### 3.1.3 门禁 `check-inventory.js`（实现要点）

| 检查 | 实现 | 失败条件 |
|---|---|---|
| id 唯一 | 全清单收集 `id` 建 Set | 任一 id 出现多次 |
| 状态完整 | 遍历全部条目 | `status` ∉ {done,todo,draft,exempt} |
| todo 有交代 | 检查 `priority`/`note` | `status: todo` 且缺 priority 或 target |
| exempt 有理由 | 检查 `note` 非空 | `status: exempt` 且 note 空 |
| done 有实体 | 检查对应 md 存在 | `status: done` 但文件不存在 |
| 有货无账 | 扫描全部 md 的 frontmatter `id` | md 存在但不在任何清单 |
| 双向轴一致 | md 的 `domain`/`era` 与清单一致 | 不一致（列出差异） |
| 别名不冲突 | 别名 → 规范名 一对一 | 一个别名指向多个规范名 |
| 引用可解析 | `prereq`/`sources` 中的 id | 指向不存在的 id |

**输出**：
- `docs/coverage-matrix.md`（人读）：时代 × 技术域热力矩阵，格内 `t1/t2/t3/—`
- `build/gaps.json`（机读）：按 `priority` 排序的缺口队列，**这就是下一轮的工作清单**
- `build/inventory.json`：合并后的规范化清单（下游生成器的唯一输入）

#### 3.1.4 清单的产出方法

1. **AI 依据研究底稿起草**——底稿已含各权威目录的逐条清单（Wikipedia 分类、Kahn/HAC/Stallings 目录、RFC 逐条、标准目录、算法清单、攻击分类、实体清单、中文体系），起草时**照抄目录不臆造**
2. **人工评审**——重点看三件事：条目是否真的属于密码学、粒度是否与相邻条目一致、别名是否收全
3. **"⚠待核"标记的处理**——研究底稿中标 `⚠待核` 的条目（如某些 ISO 编号、某些 FIPS/SP 编号、RFC 9800/9801 的实际归属），**必须到官方目录核验后才能 `done`**；核验前记 `draft` 并在 `note` 写明"待核：<拟查证的 URL>"
4. **持续维护**——新知识出现时先加进清单再写内容，杜绝"有货无账"

### 3.2 实体模型升级（frontmatter v2）

#### 3.2.1 v2 字段

```yaml
---
title: 仿射密码
title_en: Affine Cipher
id: affine
type: algorithm              # era|domain|person|artifact|machine|term|protocol
                           # |algorithm|standard|attack|theorem|event|quote|fact
                           # |timeline|map|relation|egg|quiz
era: [e02-classical]
domain: [d02-monoalphabetic]
subtopic: [monoalphabetic-substitution]
apps: [military, education]
threats: [CPA, CCA]
level: 2
prereq: [caesar]
layer: 3
tier: tier1
quality: verified            # draft | verified
aliases: [仿射密码, affine]
related: [caesar, atbash]
sources:
  - { title: "…", author: "…", kind: primary|authoritative|tertiary }
---
```

**设计要点**

| 字段 | 为什么加 | 影响 |
|---|---|---|
| `id` | 原先靠文件名隐式当 ID，无法跨清单引用 | 清单 → 实体 → 图谱 → 分站的引用链打通 |
| `aliases` | 用户的检索词是多样的（"仿射"/"affine"/"仿射密码"） | 检索命中；别名消歧 |
| `era`/`domain` 改多值 | 实体常跨轴（如 ADFGVX 既属 d04 又属 d09） | 交叉矩阵、交叉筛选 |
| `apps` / `threats` | 新增两条正交轴：**应用场景**与**威胁模型** | "按威胁模型浏览"成为一等视图 |
| `level` / `prereq` / `layer` | 支持多层次学习 | 学习路径 DAG、难度徽章、层级导航 |
| `tier` / `quality` | 广度与深度解耦 | 抽检策略；`draft` 在站点上显式标注 |
| `sources` 结构化 | 从"字符串数组"到"带 kind 的对象" | 可区分一手史料/权威二手/百科；可生成出处页 |

#### 3.2.2 升级实施

- **机械升级**：写 `tools/mdgen/upgrade-frontmatter.js`，读旧 frontmatter → 补默认值 → 写回；**不改正文**
- **别名表**：`_meta/aliases.yaml`（人工维护，跨实体的别名/异译/缩写/旧称），upgrade 脚本据此回填 `aliases`
- **不破坏旧生成器**：v2 字段全是**新增**；`gen-people` / `gen-machines` / `gen-glossary` 等 19 个生成器读旧字段即可继续工作 → parity 保持绿
- **门禁**：`check-frontmatter.js`（必填字段、类型、id 唯一、aliases 规范、prereq 无悬空、sources 结构合法）

### 3.3 加工管线：八段（收 → 炼 → 范 → 织 → 标 → 编 → 呈 → 校）

| 段 | 输入 | 处理 | 产物 | 工具（新增/改造） |
|---|---|---|---|---|
| **① 收** | 权威目录 + 研究底稿 | 按总目录采集原始素材，起草条目骨架 | 草稿 md | `tools/ingest/`（新增） |
| **② 炼** | 草稿 | 补三层深度（为什么重要 / 现实哪里用 / 怎么被破）+ 事实核证 + 结构化出处 | tier1 正文 | 扩展 `term-notes.js` 的模式到全实体 |
| **③ 范** | 全部 md | 归一化：别名/异译消歧、id 规范、年份/单位/术语大小写格式统一 | frontmatter v2 + `_meta/aliases.yaml` | `normalize.js`（新增） |
| **④ 织** | 全部 md | 生成交叉引用图谱（多轴）+ 前置依赖 DAG | `build/graph.json` | `gen-graph.js`（新增） |
| **⑤ 标** | 全部 md | 补多轴标注（apps/threats/level/layer/tier） | frontmatter | `enrich.js`（新增） |
| **⑥ 编** | inventory + graph | 按总目录分门别类 → 六层 IA + 学习路径编排 | `build/ia.json` | `gen-ia.js`（新增） |
| **⑦ 呈** | ia + graph + md | 生成九视图数据 + 实体页 + 路径页 + 搜索索引 | `build/site/**` | `gen-site.js`（新增） |
| **⑧ 校** | 全部产物 | 门禁（覆盖/出处/死链/对称/深度/口径/别名） | 报告 + 退出码 | `check-*.js`（扩充） |

**每段的实现细节**

**① 收**
- 素材来源分级：`primary`（一手史料：原始电报、专利、标准原文、论文）> `authoritative`（权威专著：Kahn、HAC、Stallings、学术史）> `tertiary`（百科/博物馆说明）
- AI 起草时**必须附素材出处**；无出处 → `quality: draft`
- 中英同源起草：一次产出 zh + en 两版，**不允许"中文先写、英文后补"**

**② 炼**（三层深度模板，扩展到全部实体类型）

| 实体类型 | 三层含义 |
|---|---|
| 术语 | 为什么重要 / 现实哪里用 / 怎么被破 |
| 人物 | 为什么重要（贡献的独特性）/ 现实哪里用（影响了什么）/ 怎么被破（被误解或被超越的部分） |
| 机器 | 为什么重要（技术定位）/ 现实哪里用（战时角色）/ 怎么被破（破解史与残余安全性） |
| 密件 | 为什么重要（历史意义）/ 现实哪里用（当时的情境）/ 怎么被破（破解路径与代价） |
| 算法 | 为什么重要（解决了什么瓶颈）/ 现实哪里用（落地场景）/ 怎么被破（已知攻击与安全性） |
| 标准 | 为什么重要（生态地位）/ 现实哪里用（合规要求）/ 怎么被破（已知弱点与替代） |
| 攻击 | 为什么重要（威胁模型位置）/ 现实哪里用（真实事故）/ 怎么被破（防御措施） |

**③ 范**
- 别名归一的三类来源：① 同一实体的不同语言名 ② 历史改称 ③ 缩写/型号别名
- 消歧规则：同一别名若指向多个实体 → 报错，**强制人工裁定**，不允许"多值别名"
- 年份统一为公历；区间用 `–`；人名保留原文 + 规范中文译名

**④ 织**
- 图谱边类型：`same-era` `in-domain` `used-with` `attacked-by` `invented-by` `standardized-as` `precedes`（前置）`appears-in`
- 前置 DAG：从 `prereq` 导出，需**无环**（有环即报错）

**⑤ 标**
- `apps` 取值域固定（见 §五 多维轴定义），保证可聚合
- `threats` 取值域固定（CPA / CCA / KPA / CKA / CCA2 / adaptive-CCA / related-key / known-key / forward / inverse / side-channel / physical / social / implementation / protocol / quantum）
- `level` 由三档来源综合判定：清单登记 > 抽检修正 > AI 建议

**⑥ 编**
- 六层 IA 由 inventory 的层级直接展开（见 §五）
- 学习路径编排：每条路径是"实体有序列表 + 每步任务 + 前置校验"

**⑦ 呈**（详见 §五、六）

**⑧ 校**（详见 §六 K6）

### 3.4 出处体系

| 项 | 规则 |
|---|---|
| 结构 | `{ title, author, kind, year, locator }`，`kind ∈ primary / authoritative / tertiary` |
| 真实 | **禁止编造**。AI 起草的出处必须来自研究底稿或官方目录原文 |
| 待核 | 底稿中标 `⚠待核` 的 → `kind: tertiary` + `note: 待核证` |
| 展示 | 实体页出处区列出；`primary` 置顶并标注"一手史料" |
| 溯源 | 分站 `/sources/` 页按 kind 分组，可从任意实体跳到出处，再从出处跳回所有引用它的实体 |
| 门禁 | 见 §六 K6 |

### 3.5 知识源仓目录（改造后）

```
cryptography-decode-history/
├─ README.md / README.en.md        知识源说明（双语）
├─ LICENSE / CONTRIBUTING.md
├─ 01-foundations.md                D01 基础与术语
├─ 02-eras/e01…e19/                19 时代（README + era.md + 专题）
├─ tech/d02…d24.md                 24 技术域
├─ people/ artifacts/ machines/    实体（一人/一件/一台一文件）
├─ algorithms/ protocols/ standards/ attacks/ theorems/ events/   ★新增实体目录
├─ quiz/ facts/ quotes/ timeline/ map/ relations/ eggs/ zh-crypto/ toolkit/
├─ _meta/
│  ├─ schema.md                    frontmatter v2 规范
│  ├─ aliases.yaml                 别名/异译归一表
│  ├─ inventory/*.yaml             知识总目录（14 份清单）
│  └─ research/*.md                全网检索底稿（已入库）
├─ docs/
│  ├─ PLAN-KNOWLEDGE-SOURCE-AND-SUBSITE.md   本计划
│  ├─ coverage-matrix.md                      覆盖矩阵（生成物）
│  └─ BUILD-CONTRACT.md                       三仓构建契约
├─ tools/
│  ├─ mdgen/                       19 个既有生成器（保持 parity 全绿）
│  ├─ site/                        ★新增分站生成器
│  │  ├─ build.js                  静态生成主入口
│  │  ├─ render/                   各视图与页面模板
│  │  └─ client/                   客户端源码（esbuild 打包）
│  ├─ check/                        ★新增门禁集
│  └─ oneoff/                      一次性脚本
└─ build/                          生成物（gitignore）
   ├─ inventory.json  graph.json  ia.json  search-index.json
   └─ site/                        分站产物（CI 推送到 poyinet/crypto）
```

---

## 四、呈现方式：四大类 · 多维 · 多层

> 用户要求"内容呈现的方式要多维度，方便用户"。v1 的 9 视图偏"并列的页面"，v2 改为**四个正交视角 + 统一的跨维过滤 + 六个钻取层级**，任何一个实体都能从任一维度被找到。

### 4.1 六轴标注（每条实体都带）

| 轴 | 取值域 | 作用 |
|---|---|---|
| **轴 1 · 时间** | 19 时代（可多值） | 历史脉络 |
| **轴 2 · 技术** | 24 域 → 子主题（可多值） | 体系归属 |
| **轴 3 · 应用场景** | 军事 / 外交 / 金融 / 通信 / 隐私 / 执法 / 版权 / 学术 / 日常 / 反恐 / 基建 / 医疗 | "这个技术在什么领域用" |
| **轴 4 · 威胁模型** | CKA / KPA / CPA / CCA / CCA2 / adaptive-CCA / related-key / known-key / side-channel / physical / social / implementation / protocol / quantum | "它在什么威胁下成立" |
| **轴 5 · 难度** | 入门 / 进阶 / 专家 / 研究 | 学习者自我定位 |
| **轴 6 · 层级** | L1 板块 … L6 出处 | 多层次钻取 |

外加**关联轴**（图谱边）：`invented-by` `used-with` `attacked-by` `standardized-as` `precedes` `appears-in` `same-era` `in-domain`。

### 4.2 四个正交视角

| 视角 | 回答的问题 | 主交互 | 落地页 |
|---|---|---|---|
| **① 编年视角** | "密码学是怎么一步步走到今天的" | 3000 年多轨时间轴，事件/人物/机器/密件/标准分层；缩放、筛选、下钻 | `/eras/`、`/timeline/` |
| **② 体系视角** | "这块技术到底包含什么" | 24 域 → 子主题的可折叠技术树，节点可展开到实体 | `/domains/` |
| **③ 关系视角** | "谁和谁有关系" | 人物网络（力导向）、物证—机器—机构案例链 | `/people/`、`/network/` |
| **④ 检索视角** | "我要找的那个东西在哪" | 全文 + 别名 + 多维过滤 + 拼音；结果直接给实体页与视图联动 | `/search/` |

**这四个视角共享同一套过滤状态**：用户在时间轴上选了"二战 + 分组密码"，切到技术树时条件仍然生效（URL 状态同步，可分享/可回退）。

### 4.3 视图清单（分站具体页面）

| # | 视图 | 路径 | 形态 | 关键能力 |
|---|---|---|---|---|
| V1 | **首页 · 三维知识晶格** | `/` | 3D 力导向晶格（时代 × 技术域 × 实体），可旋转缩放筛选 | 悬停高亮、点击下钻、轴过滤、随机探索 |
| V2 | **编年时间轴** | `/timeline/` | 3000 年多轨，事件/人物/机器/密件/标准分轨 | 时间缩放、类型过滤、跳实体 |
| V3 | **技术树** | `/domains/` | 域 → 子主题 → 实体折叠树 | 依赖边显示、路径跳转、按难度过滤 |
| V4 | **人物网络** | `/people/` | 力导向图（师承/合作/对立/同机构/同时代） | 关系类型过滤、关系链追溯 |
| V5 | **物证与机器图谱** | `/artifacts/`、`/machines/` | 案例链（谁用什么机器破的什么密件） | 沿链下钻、机器按年代排列 |
| V6 | **术语词典** | `/terms/` | 10 分类 + 首字母 + 难度 + 检索 | 全文高亮、别名跳转、反链 |
| V7 | **标准与协议表** | `/standards/`、`/protocols/` | 可排序表（机构 × 族 × 年份 × 状态徽章） | 现行/弃用/草案徽章、深链到实体 |
| V8 | **交叉矩阵** | `/matrix/` | 时代 × 域热力图 | 点击格下钻到该时代该域的实体集 |
| V9 | **学习路径** | `/paths/` | 前置依赖 DAG + 分级路径 | 路径进度（本地）、逐步任务 |
| V10 | **攻防对照** | `/attacks/` | 攻击模型 × 对应防御 × 真实事故 | 按威胁模型浏览、跳转防御原语 |
| V11 | **中国密码学** | `/china/` | 古代 → 近现代 → 商业密码分期 | 中文独有条目、与其他视图互通 |
| V12 | **出处总表** | `/sources/` | 按 kind 分组的引用库 | 从出处反查所有引用实体 |
| V13 | **应用场景索引** | `/applications/` | 按场景聚合实体 | 面向"我想了解某场景用了什么" |

> 13 个视图不是 13 个孤立页面：它们共用 `build/graph.json` 与 `build/inventory.json`，过滤状态用 URL query 共享。

### 4.4 六层钻取（每个实体都能被六层到达）

```
L1 板块      时代 / 技术 / 人物与事件 / 物证与机器 / 术语 / 标准与协议
L2 主题域    19 时代 · 24 域+子主题 · 人物群 · 物证群 · 术语分类 · 标准族
L3 实体      术语 人物 密件 机器 算法 协议 标准 攻击 定理 事件
L4 详情      摘要 · 三层深度 · 交互卡 · 多轴标签 · 关联图谱 · 学习卡 · 出处摘要
L5 原始出处  著录全文 + 书目信息 + 同源其他条目
```

**每层都有"上一层/下一层"与"在其他视图打开"**——不迷路。

### 4.5 实体详情页（统一模板）

```
面包屑（板块 › 主题域 › 实体）
标题 · 英文名 · 别名 chips · 状态徽章（现行/弃用/待核证/一手史料）
一句话定位
──── 多轴标签行：时代 / 域 / 子主题 / 应用 / 威胁 / 难度 / 层级 / 可游戏化
──── 深度区
  · 是什么
  · 为什么重要
  · 现实哪里用
  · 怎么被破
──── 交互卡（真算的小部件）        ← 差异化核心
──── 关联图谱（前后左右 + 抽屉小图）
──── 学习卡：前置是什么 / 学完能做什么 / 下一站
──── 出处区（primary 置顶）→ L5
──── 底部：相关内容网格 / 上一条 下一条
──── 尾部：引用本文的条目（反向索引）
```

**交互卡清单**（每个实体至少一张，能算就算）

| 实体 | 交互卡 |
|---|---|
| 术语 | 真算示例（频率直方图 / 差分分布表 / 模幂 / 格基 / 状态转移） |
| 人物 | 成果时间线 + 关系跳转 |
| 机器 | 转子结构可转（Enigma/紫密/Typex） |
| 密件 | 密文可试解 + 破解路径逐步展开 |
| 算法 | 输入 → 密文真算（多组向量） |
| 标准 | 版本演进对比 + 状态徽章 |
| 攻击 | 可复现的脆弱演示（如 padding oracle 交互） |

> 交互卡复用主站 `workshop.js` / `protocols.js` 的真引擎思路——**同一份算法实现在主站与分站共用**，避免两套实现漂移。

### 4.6 检索（第四视角的实现）

| 能力 | 做法 |
|---|---|
| 中文分词 | bigram 索引（无需第三方分词器） |
| 英文前缀 | 前缀树/trie 匹配 |
| 别名 | 归一表直接进倒排 |
| 拼音 | 可选：首字母缩写进倒排 |
| 结构化过滤 | 轴 1–6 任意组合 → 结果集 |
| 性能 | 索引 JSON 独立分片 + Web Worker 构建/查询 + IndexedDB 缓存 |
| 结果 | 高亮 + 类型徽章 + "在 X 视图中查看" + 直达实体页 |

### 4.7 学习路径（多层次的具体化）

| 路径 | 读者 | 编排依据 | 每步结构 |
|---|---|---|---|
| **符号与语言** | 零基础 | 轴 5 = 入门 + 轴 2 = d01/d02 | 1 实体 + 1 动手任务 + 前置 + 预计时长 |
| **古典破译手** | 爱好者 | d02→d04→d07 顺序 + 轴 1 = 古代/中世纪 | 同上 |
| **机械时代** | 进阶 | d05 为主 + e11-ww2 | 同上 |
| **现代工程师** | 专业 | d08→d14 + 轴 3 = 通信/金融 | 同上 |
| **前沿与后量子** | 研究者 | d15→d22 + 轴 4 = quantum | 同上 |
| **攻防视角** | 安全从业者 | 按轴 4 编排 | 同上 |
| **查证者** | 写作/查证 | 按轴 2 纵深 + L5 出处 | 出处溯源任务 |
| **中国线** | 中文读者 | e19 + `cn-history.yaml` | 同上 |

**路径编排规则**：① 严格满足 `prereq`；② 同一路径内难度单调不减；③ 每步都有可操作的"动手任务"（算一次 / 做一次 / 查一次）；④ 路径可视化为 DAG，支持从任意节点进入。

---

## 五、分站 `crypto.poyi.net`：详细实现计划

### 5.1 仓库与部署

| 项 | 决定 |
|---|---|
| 仓 | `poyinet/crypto`（已建，公开） |
| 分支 | `main` |
| Pages | GitHub Pages，源分支 `main`，自定义域 `crypto.poyi.net`（CNAME 已推） |
| 产物来源 | **只由知识源仓 CI 推送**，分站不手改 |
| DNS | 待配：`crypto CNAME poyinet.github.io`（Cloudflare） |

### 5.2 构建管线

```
知识源仓 CI（GitHub Actions）
  ├─ npm ci
  ├─ node tools/mdgen/gen-all.js            既有 19 生成器（保持 parity 全绿）
  ├─ node tools/check/*.js                  知识源门禁集
  ├─ node tools/site/build.js               分站生成（增量）
  │    ├─ 读 build/inventory.json + build/graph.json + build/ia.json
  │    ├─ 渲染实体页 / 板块页 / 视图页 / 索引
  │    ├─ esbuild 打包客户端 JS（分片：core / crystal / graph / search）
  │    └─ 产出 build/site/**
  ├─ 门禁：死链 / 出处 / 口径 / 无 JS 可读 / 体积
  └─ 推送到 poyinet/crypto（deploy key）
```

### 5.3 静态生成器（自研，不引框架）

**为什么不用 Hugo/Astro/Jekyll**：内容是**高度结构化的实体集合**，不是 Markdown 博客流。自研生成器可以 1:1 映射数据模型、零模板阻抗、支持增量构建与按实体分片；框架的"内容优先 + 主题模板"优势在此用不上。

**技术选型**

| 项 | 选择 | 理由 |
|---|---|---|
| 生成器 | Node 自研 `tools/site/build.js` | 同上 |
| MD 渲染 | `markdown-it` | 支持表格/脚注/锚点/自定义容器 |
| frontmatter | `js-yaml` | 已有 YAML 清单，同解析器 |
| 客户端打包 | `esbuild` | 压缩 + 分片 + tree-shaking |
| HTML 安全 | `sanitize-html` | 生成 HTML 白名单清洗（防注入） |
| 3D | `three.js`（本地 vendor，**按需加载**） | 只 V1 晶格用，不进首屏关键路径 |
| 样式 | 原生 CSS + `@layer` + 容器查询 + `:has()` | 零运行时依赖 |

**增量构建**：内容哈希缓存（`build/.cache.json`），只重建受影响的实体页与其索引分片。

### 5.4 页面清单

| 路径 | 内容 | 生成方式 |
|---|---|---|
| `/` | 晶格首页 + 学习路径入口 + 随机探索 | 模板 + 客户端晶格 |
| `/eras/` `/eras/<id>/` | 19 时代列表 / 时代详情 | 模板 + 实体聚合 |
| `/domains/` `/domains/<id>/` | 24 域 / 域详情（含子主题树） | 模板 + 子主题聚合 |
| `/subtopics/<id>/` | 子主题页 | 模板 |
| `/people/` `/people/<id>/` | 人物列表 / 详情 | 模板 + 关系图 |
| `/artifacts/` `/artifacts/<id>/` | 密件列表 / 详情 | 模板 |
| `/machines/` `/machines/<id>/` | 机器列表 / 详情 | 模板 + 可转交互 |
| `/terms/` `/terms/<id>/` | 术语词典 / 详情 | 模板 + 交互卡 |
| `/algorithms/` `/protocols/` `/standards/` `/attacks/` `/theorems/` `/events/` | 各实体类列表 / 详情 | 模板 |
| `/timeline/` | 编年时间轴 | 客户端 + JSON |
| `/matrix/` | 交叉矩阵 | 客户端 + JSON |
| `/paths/` `/paths/<id>/` | 学习路径 | 模板 + 客户端 |
| `/sources/` | 出处总表 | 模板 |
| `/applications/` | 应用场景索引 | 模板 |
| `/china/` | 中国密码学 | 模板 |
| `/search/` | 检索 | 客户端 + Worker |
| `/about/` | 关于本站 · 内容说明 · 出处政策 · 许可 | 静态 |
| `/sitemap.xml` `/robots.txt` | SEO | 生成 |

### 5.5 客户端能力

| 模块 | 能力 | 加载策略 |
|---|---|---|
| `core.js` | 导航、主题、搜索框、语言切换、快捷键 | 首屏 |
| `crystal.js` | V1 三维晶格（three.js） | **按需**（进入首页且 WebGL 可用时） |
| `graph.js` | 人物网络 / 关联图谱（Canvas 2D 力导向，不引 d3） | 进入相关页时 |
| `timeline.js` | 时间轴渲染与缩放 | 进入时 |
| `matrix.js` | 交叉矩阵 | 进入时 |
| `search.js` | Worker 检索 | 首次聚焦时 |
| `paths.js` | 路径进度（localStorage） | 进入时 |
| `i18n.js` | 中英切换（`?lang=en` + localStorage） | 首屏 |

**硬要求**：**实体页去掉 JS 仍能读全部正文**。晶格/搜索/图谱是增强，不是前提。

### 5.6 中英同步机制

| 机制 | 做法 |
|---|---|
| 同源起草 | 一条内容一次产出 zh + en；frontmatter 同时有 `title` / `title_en`，正文同时有 `## English / 英文版` |
| 同步门禁 | `check-i18n-sync.js`：每条实体 zh/en **必须同时存在且都非空**；任一缺失即失败（**不留"待补英文"状态**） |
| 术语对照 | `_meta/aliases.yaml` 同时承担"中文名 ↔ 英文名 ↔ 别名"的三向映射 |
| 页面 i18n | 界面文案（按钮、标签、说明）由 `build/site/i18n.json` 驱动，zh/en 对称 |
| 切换 | URL `?lang=en` 优先，其次 localStorage；切换不重载页面（客户端替换） |
| SEO | 每页 `<link rel="alternate" hreflang="zh-Hans">` / `"en"` + `og:locale` |

### 5.7 性能、可达性与离线

| 项 | 做法 |
|---|---|
| 首屏 | 实体页纯静态 HTML（无 JS 也能读），JS 延后加载 |
| 分片 | 客户端 JS 按视图分片；three.js 只在晶格视图拉取 |
| 字体 | 本地 OFL 子集（沿用 Fusion Pixel / Press Start 2P），`font-display: swap` |
| 缓存 | 静态资源长缓存 + 内容哈希指纹；HTML 短缓存 |
| 离线 | SW 预缓存外壳与最近访问实体；检索索引按需缓存 |
| 可达性 | 键盘全流程可达、`:focus-visible` 环、对比度 AA、标题层级不跳级、`prefers-reduced-motion`、图形视图提供等价的列表/表格视图 |
| 图形的替代文本 | 每个 3D/图谱视图配一个**等价的数据表视图**（可达性与 SEO 双得） |

---

## 六、分阶段实施（每阶段可独立发布）

> 无硬指标。每阶段的完成定义是**功能性/结构性**的，不是数字达标。

### K0 · 管线复活与仓库固化　【已完成】

| 项 | 状态 |
|---|---|
| `load-poyi.js` 参数化 | ✅ `POYI_ROOT` env → 相对探测 → 报错提示 |
| parity 复现 | ✅ **985 · FAIL 0** |
| 知识源 117 处改动提交 + 推送 | ✅ `bd4bfb4` |
| 研究底稿入库 | ✅ `_meta/research/` 两份（分类体系 / 理论实体 / 中文体系 / 空白分析） |
| 分站仓 + Pages + CNAME | ✅ `poyinet/crypto`，`status: built` |
| DNS | ⬜ **待配**：`crypto CNAME poyinet.github.io`（Cloudflare） |

### K1 · 知识总目录 + 覆盖矩阵　【进行中】

| 子步骤 | 交付 | 完成定义 |
|---|---|---|
| K1.1 | `_meta/inventory/eras.yaml` + `domains.yaml` | 19 时代 + 24 域的现有内容逐条登记（含子主题） |
| K1.2 | `people/artifacts/machines/terms` 四份清单 | 依据研究底稿 §7 起草，评审后定稿 |
| K1.3 | `algorithms/protocols/standards/attacks/theorems/events` 六份清单 | 依据研究底稿 §3–§6 起草 |
| K1.4 | `cn-history.yaml` | 依据研究底稿 §8.5–8.6 起草 |
| K1.5 | `check-inventory.js` 门禁 | §3.1.3 的九项检查全部实现并接入 CI |
| K1.6 | `gen-coverage.js` → `docs/coverage-matrix.md` + `build/gaps.json` | 热力图 + 缺口队列可生成 |
| K1.7 | 评审 | 抽样评审若干域/类，确认粒度与别名收全 |

**产出评审样例**：先做 **d07 破译方法** 的完整清单（域→子主题→算法→攻击→术语→定理），你确认粒度与风格后再批量。

### K2 · 实体模型 v2 + 归一　【待启动】

| 子步骤 | 交付 | 完成定义 |
|---|---|---|
| K2.1 | `_meta/aliases.yaml` 骨架 + 别名采集流程 | 能收集中英异译/旧称/缩写/型号别名 |
| K2.2 | `upgrade-frontmatter.js` | 机械升级全部 md 到 v2，**正文零改动** |
| K2.3 | `check-frontmatter.js` | 必填/类型/唯一/别名/prereq/sources 全部校验通过 |
| K2.4 | 旧生成器回归 | `gen-all` + parity 仍 **985 · FAIL 0** |

### K3 · 加工管线（织/标/编）　【待启动】

| 子步骤 | 交付 | 完成定义 |
|---|---|---|
| K3.1 | `gen-graph.js` → `build/graph.json` | 多轴边 + 前置 DAG；DAG 无环 |
| K3.2 | `enrich.js` | 补 apps/threats/level/layer/tier；取值域固定 |
| K3.3 | `gen-ia.js` → `build/ia.json` | 六层 IA + 学习路径编排生成 |
| K3.4 | `gen-index.js` → `build/search-index.json` | 倒排 + 前缀 + 别名 + bigram |

### K4 · 分站生成器 + 骨架　【待启动】

| 子步骤 | 交付 | 完成定义 |
|---|---|---|
| K4.1 | `tools/site/build.js` 主入口 | 一次运行产出全套站点；增量重建生效 |
| K4.2 | 实体页模板 | 三层深度 + 多轴标签 + 关联 + 学习卡 + 出处区 |
| K4.3 | 板块页/列表页 | 时代/域/人物/密件/机器/术语/标准/协议/攻击/定理/事件 |
| K4.4 | 客户端骨架 | 导航/主题/搜索框/语言切换/快捷键 |
| K4.5 | 中英机制 | `?lang=en` + localStorage + `i18n.json` + hreflang |
| K4.6 | CI 发布 | 知识源仓 Actions：门禁 → build → 推送 `poyinet/crypto` |
| K4.7 | 可达性/SEO 基线 | 键盘可达、对比度 AA、标题层级、结构化数据、sitemap |

### K5 · 多维视图　【待启动】

按 §4.3 的 V1–V13 逐个实现，共享过滤状态与图谱数据；每个图形视图配等价数据表视图。

### K6 · 门禁集　【待启动】

| 门禁 | 校验 | 归属 |
|---|---|---|
| `check-mdgen-parity` | 源↔产物等价（既有，已绿） | 知识源 |
| `check-inventory` | 总目录九项检查 | 知识源 |
| `check-frontmatter` | v2 字段完整性 | 知识源 |
| `check-alias` | 别名唯一/无环 | 知识源 |
| `check-i18n-sync` | zh/en 同时存在且非空 | 知识源 + 分站 |
| `check-sources` | 出处结构合法、可溯源、无编造 | 知识源 |
| `check-links` | 内部引用有效、双向对称 | 分站 |
| `check-numbers` | 三处口径一致 | 知识源 + 分站 |
| `check-nojs` | 实体页去 JS 后正文完整 | 分站 |
| `check-coverage` | 生成矩阵（不阻断，仅报告） | 知识源 |

### K7 · 内容扩容（长期、按缺口队列推进）

**推进方式**：以 `build/gaps.json` 为唯一工作清单，按域/类分批推进；每批结束站点可上线。
**质量做法**：tier1 精写 + 人工核证；tier2/3 批量；抽检发现问题回流到具体条目。

### K8 · 出处核证与国际化打磨　【长期】

逐条核证 `quality: draft` 的出处与事实；中英全文对齐润色；移动端与可达性终审。

---

## 七、接口预留（给将来的主站）

分站在数据层预留三个字段，**本轮不实现游戏逻辑**：

| 字段 | 用途 |
|---|---|
| `game` | 关联的主站游戏 id（已有） |
| `playable` | 该实体是否适合做玩法原型 |
| `archetype` | 建议的玩法原型 |

分站实体页据此显示"在游戏中试玩 →"（指向主站）；主站反之深链回分站。**这样 K1–K8 的内容加工成果将来能直接喂给游戏主站，一次加工两处用。**

---

## 八、需你拍板

| # | 议题 | 选项 | 建议 |
|---|---|---|---|
| 1 | **知识总目录的粒度** | A 到"实体"<br>B 加"子主题"层 | **B**——多层次展示的骨架就是这一层 |
| 2 | **清单条目的 status 语义** | A done/todo/exempt<br>B done/todo/draft/exempt（多一档"在写"） | **B**——让"已在写但未完"可见，避免 todo 队列虚高 |
| 3 | **子主题的粒度** | A 每个算法一条<br>B 按机制族聚合 | **B**——算法条目本身另立一类，子主题是"知识块" |
| 4 | **实体目录是否按类型分目录** | A 扁平<br>B `algorithms/ protocols/ standards/ attacks/ theorems/ events/` 分目录 | **B**——与总目录同构，生成器与门禁更简单 |
| 5 | **中英是同页并列还是双语分站** | A 同页并列（`## English` 段）<br>B 独立 en 站 | **A**——同页并列便于对照，且不增加域名与维护面 |
| 6 | **分站是否需要登录/同步** | A 不需要（本地进度）<br>B 需要 | **A**——保持零后端红线 |

---

## 九、立即可执行（不需等拍板）

1. **配 DNS**：`crypto CNAME poyinet.github.io`（Cloudflare）→ `crypto.poyi.net` 立即可访问
2. **K1.7 评审样例**：d07 破译方法的完整清单（域→子主题→算法→攻击→术语→定理）——一天内产出供你定调
3. **建知识源 CI**：`.github/workflows/` 里跑 `gen-all` + 门禁 + 构建 + 推 `poyinet/crypto`

---

## 附录 A · 与 v1 的差异索引

| v1 章节 | v2 处置 |
|---|---|
| §三 知识总目录 | 保留机制，去掉数量目标；扩为 14 份清单；补"清单产出方法"与 ⚠待核 处理流程 |
| §四 加工管线 | 八段保留；每段补实现细节与工具归属；实体模型 v2 补字段语义表 |
| §五 分站 | 4.1–4.7 全新：六轴标注 + 四正交视角 + 13 视图 + 六层钻取 + 实体页模板 + 检索 + 学习路径 + 中英机制 + 性能可达性 |
| §六 门禁 | 扩为 10 门禁矩阵，标注归属与完成定义 |
| §七 阶段 | 改为"每阶段可独立发布"，取消人日估算（v2 取消硬指标） |
| §十 拍板 | 6 项，全部与 v2 新机制相关 |
| — | 新增：现状实测（管线修复、仓库推送、分站上线）、DNS 待配项、接口预留 |

## 附录 B · 本轮已交付的技术事实

| 事实 | 值 |
|---|---|
| 知识源管线 | 已修，parity **985 · FAIL 0** |
| 知识源 git | 已推送 `bd4bfb4`（122 文件，Phase 2 成果首次入库） |
| 研究底稿 | `_meta/research/` 2 份，约 126 KB，含分类体系/古典密码全谱/标准目录/算法清单/攻击分类/理论/实体/中文体系/已知空白 |
| 分站仓 | `poyinet/crypto` 已建（公开），`main` 分支，提交 `30d493b` |
| 分站 Pages | `status: built`，`cname=crypto.poyi.net` |
| 分站产物 | `index.html`（建设中占位页）+ `CNAME` + `README.md` + `robots.txt` + `.nojekyll` |
| DNS | 待配 `crypto CNAME poyinet.github.io` |
| 主站 | 未动（119 款 / 门禁 25/25 / e2e 613/613 保持） |
