# GitHub 每日 Trending · 2026-10-07

> 抓取时间：2026-10-07 23:47 / 23:49 / 23:50（GMT+8），三种独立 UA 抓取，`stars today` 与条目顺序 **13/13 完全一致**。
> 数据来源：https://github.com/trending?since=daily（共 13 个仓库）+ GitHub API 元数据 + 各仓库 README 原文复核。

> ⚠️ **阅读提醒：页面顺序 ≠ 增量顺序。** 速览表按 GitHub 页面顺序排列，但所有集中度指标（Top1/Top3/Top5）
> 均**先按增量降序再计算**，两者不可混用。今天二者差距最大的一对是：**页面第 13 位的 openGym 是全榜增量第三**（+1,494），
> 而**页面第 9 位的 cmux 是全榜末位**（+50）——前后相差 10 个位次。

---

## 一、速览

| # | 项目 | 主要语言 | 今日新增 | 总 Star | 标签（≤5） |
|---|------|---------|---------|---------|-----------|
| 1 | [morluto/rea](https://github.com/morluto/rea) | TypeScript | **+4,666** | 12,813 | Agent 逆向工程 / MCP 工具链 / 本地优先 / MIT / 增量第一 |
| 2 | [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | **+1,406** | 279,119 | 反 vibe coding 技能集 / grill-me 对齐 / MIT / 第 18 次在榜 / 连续第二日 |
| 3 | [boykopovar/AnyPS5](https://github.com/boykopovar/AnyPS5) | C++ | **+2,725** | 9,034 | PS5 可执行程序移植 / relinker+PRX / GPL-2.0 / 第 3 次在榜 / 全榜涨幅第一 |
| 4 | [ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd) | Python | +620 | 54,851 | ADHD 友好输出 / 10 条输出规则 / MIT / 第 5 次在榜 / 连续第二日 |
| 5 | [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | HTML | +828 | 44,643 | 42 种图表类型 / 自包含 HTML+SVG / MIT / 第 8 次在榜 / 连续第二日 |
| 6 | [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | +453 | 102,517 | 生产级技能集 / 质量门禁 / MIT / 第 15 次在榜 / 隔 2 天回归 |
| 7 | [EpicGames/raddebugger](https://github.com/EpicGames/raddebugger) | **C** | +82 | 7,761 | 原生图形调试器 / RDI+Linker / ALPHA / API=MIT / 首次在榜 |
| 8 | [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | +578 | 97,516 | 跨会话记忆 / 上下文压缩 / 默认云端托管 / Apache-2.0 / 连续第五日 |
| 9 | [manaflow-ai/cmux](https://github.com/manaflow-ai/cmux) | Swift | +50 | 27,743 | Ghostty 系 macOS 终端 / 纵向标签页 / GPL-3.0+BSL 双许可 / 首次在榜 / 全榜末位 |
| 10 | [trycua/cua](https://github.com/trycua/cua) | Rust | +229 | 28,630 | 电脑操作 Agent / 本地 VM 集群 / MIT / 第 4 次在榜 / 隔 15 天回归 |
| 11 | [cloudflare/security-audit-skill](https://github.com/cloudflare/security-audit-skill) | JavaScript | +538 | 25,771 | 六阶段安全审计 / 机器可读结论 / MIT / 第 6 次在榜 / 停更 22 天 |
| 12 | [tester-army/e2e](https://github.com/tester-army/e2e) | TypeScript | **+1,391** | 7,094 | 自然语言写测试 / Agent 驱动 App / Apache-2.0 / 第 4 次在榜 / 唯一负增长留存项 |
| 13 | [DuarteSantos8/openGym](https://github.com/DuarteSantos8/openGym) | JavaScript | **+1,494** | 6,555 | 自托管健身追踪 / passkey 登录 / AGPL-3.0 / 第 3 次在榜 / 增量第三 |

**今日三项关键读数**

1. **morluto/rea 第二日不但没回落，反而从 +2,963 放大到 +4,666（+57.5%）**。这是本系列 32 期里**第一次出现
   "首次在榜即头名、第二日继续放大"**的项目，也是单项目增量的**历史第 2 高**（仅次于 09-29 的 VoiceStudio +4,712）。
   它单独占掉 Top1 **30.98%**，与 AnyPS5 合计占 Top2 **49.08%**——两个项目吃掉全榜近一半。日增速 **57.27% 全榜最高**。
   ⚠️ **治理事件**：rea 的 README 今日新增了 `## Disclaimer` 段（昨日为零命中，见 §3.6 第 1 条与数据说明的更正）。
2. **总量冲到 32 期第 4 高，但抬升全部发生在头部，尾部反而塌下去**。总量 15,060（+28.7%）、均值 1,158.46（第 2 高）、
   破千 5 席（并列第 2 高）都很亮眼，可是**末位从昨日的历史最高 +227 直接掉到 +50（−78%）**——
   昨日"整条榜单一起变厚"的判断今日被推翻，真实形态是**头部拉高 + 尾部回吐**。Top5 77.57%（32 期第 4 高）已经把话说完。
3. **非 Agent 项目占据了增量的第 2、第 3 名**。AnyPS5（+2,725，涨幅 +189% 全榜第一）与 openGym（+1,494）
   分列增量二三位，加上首次在榜的原生调试器 raddebugger，D 簇（非 Agent）**3 席 4,301，占 28.56%**。
   Agent 相关（A+B 簇）合计 **10,759，占 71.44%**，连续第三日落在 65%~85% 的观察区间。

---

## 二、逐项详情

### 1. morluto/rea — 增量第一，连续第二日且增量放大 57.5%

- **项目地址**：https://github.com/morluto/rea
- **简介**：Reverse engineer anything with agents, from app behavior down to native binaries.（用 Agent 逆向一切，从应用行为一路下探到原生二进制。）
- **主要语言**：TypeScript | **今日新增**：**+4,666** | **总 Star**：12,813 | **Fork**：1,364
- **仓库状态**：建库 176 天，**今日仍在推送（0 天）**，110 open issues
- **许可**：MIT（README 有 License 段与 MIT badge）
- **标签**：`Agent 逆向工程` `MCP 工具链` `本地优先` `MIT` `增量第一`

**评论**：昨天判定它"首次在榜即头名"，今天它把 Amplification 的倍数直接写到了日志里：**+2,963 → +4,666（+57.5%）**，
总 Star 从 7,617 涨到 12,813，真实增量 5,196 甚至高于日榜计数器的 4,666（差 −10.2%，说明还有一部分星没被 24h 窗口圈进）。
日增速 **57.27% 全榜最高**。README 的结构也变好了：新增 Ubuntu/Ghidra/Hopper 的分语言安装说明与多条语言版本。

能力边界上它把自己讲得很清楚：**一个 MCP 打通原生二进制、JS/Electron 应用、.NET 程序集与网站四层**，
"分析工具与被启动的目标进程**都以你的用户权限运行**"，且明说 *"Process Capture records behavior and is not a security sandbox"*——
**它不是沙箱**。原生 UI 捕获依赖 macOS 的辅助功能与屏幕录制授权；静态 JS 分析不需要 Hopper/Ghidra，原生分析才需要，
setup 可在你同意后替你安装 Hopper（独立商业许可）。优点是默认纯本地：*"REA does not upload the app to a hosted analysis service"*。

> **⚠️ 合规使用提示**：逆向工程能力的合法性高度依赖你对目标是否有授权。用它分析第三方闭源程序前，
> 请先确认授权范围与适用法律（项目自身已在 Disclaimer 中把这一点交回给使用者）。

### 2. mattpocock/skills — 第 18 次在榜，连续第二日并重新破千

- **项目地址**：https://github.com/mattpocock/skills
- **简介**：Skills for Real Engineers. Straight from my .agents directory.（给真正写代码的工程师用的技能集，直接从我的 .agents 目录里搬出来。）
- **主要语言**：Shell | **今日新增**：**+1,406** | **总 Star**：279,119 | **Fork**：23,382
- **仓库状态**：建库 246 天，**今日仍在推送（0 天）**，153 open issues
- **许可**：MIT（README **无 License 段**，以 API 的 SPDX 值为准）
- **标签**：`反 vibe coding 技能集` `grill-me 对齐` `MIT` `第 18 次在榜` `连续第二日`

**评论**：回归第二日就从 +1,028 涨到 **+1,406（+36.8%）**，重回破千俱乐部，是本系列在榜次数最多的项目。
它的卖点一如既往地反"氛围编程"：README 开篇就点名 **`grill-me` / `grill-with-docs`**——在动手前逼 Agent 反过来盘问你
需求细节，而不是直接吐代码。Fork/Star 8.38%，Fork 绝对数 23,382 为全榜最高。

需要注意：README 正文里挂着 newsletter 推广位；**open issues 由 10-06 报告记载的 419 变成今日 API 的 153**
（本日重新拉取 REST API 复核后仍为 153，差异疑为批量清理，已在数据说明记录待后续观察）。

### 3. boykopovar/AnyPS5 — 全榜涨幅第一（+189%），把 PS5 移植打到增量第二

- **项目地址**：https://github.com/boykopovar/AnyPS5
- **简介**：Tool for automatic PS5 executables porting to Linux and Windows.（把 PS5 可执行程序自动移植到 Linux 与 Windows 的工具。）
- **主要语言**：C++ | **今日新增**：**+2,725** | **总 Star**：9,034 | **Fork**：671
- **仓库状态**：建库 65 天，**今日仍在推送（0 天）**，231 open issues
- **许可**：GPL-2.0（README 明示 *"GNU General Public License version 2 only"*）
- **标签**：`PS5 可执行程序移植` `relinker+PRX` `GPL-2.0` `第 3 次在榜` `全榜涨幅第一`

**评论**：今日最大事件之一。**+943 → +2,725，涨幅 +189.0%，是全榜涨幅第一**，名次从昨日的第 5 位跳到第 2 位，
日增速 43.19%（2,725 / 6,309）仅次于 rea。它不是 AI 项目，靠的是硬核工程密度：
内置 **relinker**（把可执行文件转成目标系统原生格式）+ **自行实现的 PRX 系统库**，
README 明确写着 **"No emulation or separate runtime process"**（没有模拟层，也没有独立运行时进程），
着色器重编译器已能产出 **SPIR-V**（可用 SPIRV-Tools 校验），并给出了已验证游戏清单——
Dreaming Sarah 在 GTX 1050 Ti / i5-7500 上稳定 60 fps。

同量级 Community Note：它**明确不支持也不分发固件与密钥**，Disclaimer 写明仅用于互操作、研究、保存与兼容目的，
**合法性由使用者自行保证**（原文：*"It does not include, distribute, or require copyrighted software, firmware,
cryptographic keys, or proprietary libraries"*）。231 open issues 为全榜第二高。

### 4. ayghri/i-have-adhd — 第 5 次在榜，隔 25 天回归后连续放大

- **项目地址**：https://github.com/ayghri/i-have-adhd
- **简介**：A skill to stop your coding agent from burying the answer. ADHD-friendly output.（一个阻止你的编码 Agent 把答案埋起来的技能，输出对 ADHD 友好。）
- **主要语言**：Python | **今日新增**：+620 | **总 Star**：54,851 | **Fork**：3,146
- **仓库状态**：建库 147 天，**今日仍在推送（0 天）**，73 open issues
- **许可**：MIT（README 有 License 段）
- **标签**：`ADHD 友好输出` `10 条输出规则` `MIT` `第 5 次在榜` `连续第二日`

**评论**：隔 25 天回归后第二天就从 +318 涨到 **+620（+95.0%）**，是本系列的常青面孔（曾在 09-09 拿过 +4,624）。
它的内容极简——**10 条输出规则**（README 原文 *"10 rules"*），第一条就是 *"Lead with the next action"*：
先给下一步动作，再给解释。这在今天一堆"大而全的技能包"里反而是最容易落地的一个。
10-06 报告标注的"16 天未推送"今日已归零。

### 5. cathrynlavery/diagram-design — 第 8 次在榜，隔 27 天回归后翻近四倍

- **项目地址**：https://github.com/cathrynlavery/diagram-design
- **简介**：Editorial diagram design for Claude Code, Codex, GitHub Copilot, Factory Droid, and Pi. 42 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.（面向 Claude Code、Codex、GitHub Copilot、Factory Droid 与 Pi 的编辑级图表设计：42 种图表类型，自包含 HTML+SVG，无阴影，没有 Mermaid 那套糊弄产物。）
- **主要语言**：HTML | **今日新增**：+828 | **总 Star**：44,643 | **Fork**：2,869
- **仓库状态**：建库 174 天，**今日仍在推送（0 天）**，91 open issues
- **许可**：MIT（README **无 License 段**，以 API 的 SPDX 值为准）
- **标签**：`42 种图表类型` `自包含 HTML+SVG` `MIT` `第 8 次在榜` `连续第二日`

**评论**：昨日刚以全榜末位（+227）回归，今日直接 **+828（+264.8%，全榜涨幅第二）**，从末位跳到第 6 位——
这是 6p 说的"刚进榜、计数器未填满"的典型反例：昨日的 +227 确实只是回归首日的半截数据，今天才补齐。
README 里最有意思的一段是品牌 token 提取：它会**读取你的站点**再建议一组色板，经你确认后写入
`references/style-guide.md`。托管安装方式下，包更新会覆盖这个文件，需要走 `~/.diagram-design/profiles/` 存 profile。

### 6. addyosmani/agent-skills — 第 15 次在榜，隔 2 天回归

- **项目地址**：https://github.com/addyosmani/agent-skills
- **简介**：Production-grade engineering skills for AI coding agents.（面向 AI 编码 Agent 的生产级工程技能集。）
- **主要语言**：JavaScript | **今日新增**：+453 | **总 Star**：102,517 | **Fork**：10,743
- **仓库状态**：建库 234 天，**3 天未推送**，132 open issues
- **许可**：MIT（README 有 License 段）
- **标签**：`生产级技能集` `质量门禁` `MIT` `第 15 次在榜` `隔 2 天回归`

**评论**：上次在榜是 10-04（+336），缺勤 10-05、10-06 两天后今天回来并拿到 +453，比缺勤前还高 34.8%。
它是今天 A 簇里唯一挂着完整 CI badge 与贡献者名录的技能包式仓库，README 的组织方式是"把资深工程师的工作流、
质量门禁与最佳实践编码成 Agent 可直接调用的技能"。Fork/Star **10.48%** 为 Agent 技能类里最高（skills 8.38%），
说明被二次分发的比例很高。停更 3 天是全榜第二长（仅次于 security-audit-skill 的 22 天）。

### 7. EpicGames/raddebugger — 首次在榜，1,001 天的原生调试器

- **项目地址**：https://github.com/EpicGames/raddebugger
- **简介**：A native, user-mode, multi-process, graphical debugger.（原生、用户态、多进程的图形化调试器。）
- **主要语言**：**C** | **今日新增**：+82 | **总 Star**：7,761 | **Fork**：377
- **仓库状态**：建库 **1,001 天**（全榜最老），**今日仍在推送（0 天）**，315 open issues
- **许可**：README **未写明许可**（GitHub API 返回 MIT）
- **标签**：`原生图形调试器` `RDI+Linker` `ALPHA` `API=MIT` `首次在榜`

**评论**：今天唯一的"老派硬核工具"，也是全榜唯一用 **C** 的项目。它由 Epic 维护，README 的自我介绍很克制：
**currently in *ALPHA***，且**目前只支持本地 Windows x64 + PDB**（Linux 与 DWARF 还在计划里）。
真正值得关注的是它带的另外两件东西：**RAD Debug Info（RDI）**——一个自研调试信息格式（PDB/DWARF 按需转换进 RDI），
以及**面向超大 PE/COFF 可执行文件优化性能的 RAD Linker**。也就是说它不只是个调试器，而是在替换整套原生工具链的调试层。

三个"倒数"同时落在它身上：Fork/Star **4.86%**（全榜第二低）、315 open issues（全榜第二高）、+82 增量（倒数第二）。
README 里没有 license 字样，许可信息只能以 API 的 MIT 为准。

### 8. thedotmack/claude-mem — 连续第五日，增量连续两日几乎原地踏步

- **项目地址**：https://github.com/thedotmack/claude-mem
- **简介**：Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. Works with Claude Code, OpenClaw, Codex, Gemini, Hermes, Copilot, OpenCode + More（为每个 Agent 提供跨会话的持久上下文——捕获 Agent 在会话中的一切行为，用 AI 压缩，再把相关上下文注回后续会话。支持 Claude Code、OpenClaw、Codex、Gemini、Hermes、Copilot、OpenCode 等。）
- **主要语言**：TypeScript | **今日新增**：+578 | **总 Star**：97,516 | **Fork**：8,584
- **仓库状态**：建库 402 天，**今日仍在推送（0 天）**，111 open issues
- **许可**：Apache-2.0（README 有 License 段）
- **标签**：`跨会话记忆` `上下文压缩` `默认云端托管` `Apache-2.0` `连续第五日`

**评论**：连续第五日在榜，但 **+536 → +578，只涨 7.8%**，是全榜最"稳"也最缺乏弹性的一项——
在一个普遍放大的榜单里连续两日几乎不动，名次从上不去也下不来（增量降序第 8、页面第 8），
是今天唯一体现出"产品已过爆发期、转入稳态存量"的位置。
它的产品定位没变：**把你所有会话里的 Agent 行为全部捕获 → AI 压缩 → 注回未来会话**，
覆盖面已经铺到 Claude Code / OpenClaw / Codex / Gemini / Hermes / Copilot / OpenCode。

**连续第四日提示的风险**：README 原文 *"Default is CMEM Pro, the hosted memory. Local observer is opt-in: `--provider host`"*——
**默认是 CMEM Pro 云端托管记忆**，本地模式要显式开启；另有 **Cloud Sync** 会把记忆备份到 cmem.ai。
安装过程需要浏览器登录换取 memory key。把一整年的会话上下文交出去之前，值得先想清楚。

### 9. manaflow-ai/cmux — 首次在榜、全榜末位，且是全榜 open issues 最高

- **项目地址**：https://github.com/manaflow-ai/cmux
- **简介**：Open source Ghostty-based macOS terminal with vertical tabs and notifications for AI coding agents. Built for multitasking, organization, and programmability.（基于 Ghostty 的开源 macOS 终端，为 AI 编码 Agent 提供纵向标签页与通知。为多任务、组织性与可编程性而建。）
- **主要语言**：Swift | **今日新增**：+50 | **总 Star**：27,743 | **Fork**：2,458
- **仓库状态**：建库 252 天，**今日仍在推送（0 天）**，**3,182 open issues（全榜最高）**
- **许可**：**混合许可**——客户端 GPL-3.0-or-later，服务端 Business Source License 1.1（API 返回 NOASSERTION）
- **标签**：`Ghostty 系 macOS 终端` `纵向标签页` `GPL-3.0+BSL 双许可` `首次在榜` `全榜末位`

**评论**：今日末位 +50。按 6rr 的规矩做了间隔确认：**三份快照（23:47 / 23:49 / 23:50）的 `stars today` 一字未变（50/50/50）**，
Star 总数亦停在 27,743，因此判定为真实低值，不是"刚进榜计数器未填满"的伪值。

产品本身很讨巧：**原生 Swift + AppKit（非 Electron）**，直接读你现有的 `~/.config/ghostty/config` 拿主题字体颜色，
核心差异化是**通知环 + 通知面板**——当某个 pane 里的编码 Agent 需要你决策时，格子会亮蓝环、标签会亮起。
README 提供 18 种语言的翻译版本，是今日 README 国际化程度最高的项目。

但它是今天**许可项目里最复杂的一个**，详见 §3.6 第 2 条：**客户端 GPL-3.0-or-later，服务端系 BSL 1.1**。

### 10. trycua/cua — 第 4 次在榜，隔 15 天回归

- **项目地址**：https://github.com/trycua/cua
- **简介**：Scale computer-use 2.0 with open-source drivers, cross-OS fleets, and benchmarks for training, evaluation, and data generation.（用开源驱动、跨操作系统集群与基准测试来规模化 computer-use 2.0，覆盖训练、评测与数据生成。）
- **主要语言**：Rust | **今日新增**：+229 | **总 Star**：28,630 | **Fork**：2,034
- **仓库状态**：建库 614 天，**今日仍在推送（0 天）**，1,163 open issues
- **许可**：MIT（README 多处提及；模型权重单独托管，各有各的许可与限制）
- **标签**：`电脑操作 Agent` `本地 VM 集群` `MIT` `第 4 次在榜` `隔 15 天回归`

**评论**：09-21 之后隔 15 天回来。它的主张是"给 Agent 一台能用的电脑"：仓库里装着 **Cua Driver**（跨 macOS/Windows/Linux 的桌面操作驱动）、
**Lume**（Apple Silicon 上的本地 macOS/Linux 虚拟机）、**CUA-S1 决策模型**与 **Cua Bench** 评测基准。
README 自己划清了边界：*the source is MIT-licensed*，但**模型权重托管在 Hugging Face，每个模型卡/数据集各有自己的
scope、limitations 与 artifact-specific license**——用之前得逐个看。1,163 open issues 是全榜第三高。

运行前请留意：它会在你的机器上开虚拟机给 Agent 用，**资源占用与隔离边界需要自己划好**。

### 11. cloudflare/security-audit-skill — 第 6 次在榜，停更 22 天仍拿到 +538

- **项目地址**：https://github.com/cloudflare/security-audit-skill
- **简介**：A coding-agent skill for multi-phase security audits with independently verified, machine-readable findings（供编码 Agent 使用的多阶段安全审计技能，产出经过独立验证、机器可读的结论。）
- **主要语言**：JavaScript | **今日新增**：+538 | **总 Star**：25,771 | **Fork**：1,549
- **仓库状态**：建库 111 天，**22 天未推送（全榜最长）**，55 open issues（全榜最低）
- **许可**：MIT（README 有 License 段）
- **标签**：`六阶段安全审计` `机器可读结论` `MIT` `第 6 次在榜` `停更 22 天`

**评论**：09-16~09-20 连续五日在榜后，隔 16 天今天回来并保持 +538 的中等偏上热度。它最有价值的不是"AI 找漏洞"这个提法，
而是**把审计流程工程化了六道工序**：侦察（画架构/信任边界/输入面）→ 覆盖率驱动的猎杀 → 候选一的独立证伪 →
结构化输出（confirmed / needs_validation / rejected 三档写成 findings.json）→ **独立记录复核** → target-neutral 报告。
每一步都有 `.cjs` 校验脚本兜着（coverage ledger 与 findings schema），"命中即证据"这件事被显式区分了三档结论。

这直接推翻了一个旧结论：10-06 依据 Agent-Reach 得出"20 天大致是本榜对停更项目的容忍上限"，
**本项目在停更 22 天的情况下重返榜单并拿到 538**——停更耐受度上限需要上调。

> **⚠️ 合规使用提示**：这是实打实的攻击面枚举工具。README 中 authorization / permission 关键词 **0 命中**，
> 未提供目标授权的取得方式与合规须知；对不属于自己的目标使用前请务必先拿到书面授权。

### 12. tester-army/e2e — 第 4 次在榜，今日唯一负增长的留存项

- **项目地址**：https://github.com/tester-army/e2e
- **简介**：Next generation e2e testing framework for web and mobile apps.（面向 Web 与移动应用的下一代端到端测试框架。）
- **主要语言**：TypeScript | **今日新增**：**+1,391** | **总 Star**：7,094 | **Fork**：314
- **仓库状态**：建库 77 天，**今日仍在推送（0 天）**，73 open issues
- **许可**：Apache-2.0（README 有 License 段）
- **标签**：`自然语言写测试` `Agent 驱动 App` `Apache-2.0` `第 4 次在榜` `唯一负增长留存项`

**评论**：三级跳之后第一次回落：**+344（10-04）→ +1,430（10-05）→ +1,720（10-06）→ +1,391（今日，−19.1%）**，
是 8 个留存项里**唯一负增长**的那个。放在绝度量上看仍然是全榜第 5、仍破千，且日增速 24.39% 排第四。
真实的 Star 增量是 1,246，比计数器低 11.6%——两套口径的差异今日在它身上偏大。
README 自述仍在通往 1.0（*"e2e is in active development on the way to 1.0. APIs and config can still change between minor releases"*），
Fork/Star **4.43% 为全榜最低**（7,094 星只有 314 个 fork），说明使用者几乎不分叉、纯消费。

风险控制提示（连续第三日）：**CLI 默认开启匿名遥测**，README 明示不含测试内容、应用内容与凭据，
可 `npx e2e telemetry disable` 或 `E2E_TELEMETRY_DISABLED=1` 关闭，并有单独的 telemetry 字段清单页面。

### 13. DuarteSantos8/openGym — 第 3 次在榜、增量第三，守住破千

- **项目地址**：https://github.com/DuarteSantos8/openGym
- **简介**：Self-hosted gym & body-weight tracker — plan routines, log workouts (supersets, warm-ups, cardio), see which muscles are trained, fatigued or detrained, import from FitNotes/Strong/Hevy, passkey login. Your data, your server.（自托管的健身与自重训练追踪器——规划训练日程、记录训练（超级组、热身、有氧）、查看哪些肌群被练到/疲劳/退化，支持从 FitNotes/Strong/Hevy 导入，passkey 登录。你的数据，在你的服务器上。）
- **主要语言**：JavaScript | **今日新增**：**+1,494** | **总 Star**：6,555 | **Fork**：879
- **仓库状态**：建库 81 天，**今日仍在推送（0 天）**，144 open issues
- **许可**：AGPL-3.0（README 有 License 段）
- **标签**：`自托管健身追踪` `passkey 登录` `AGPL-3.0` `第 3 次在榜` `增量第三`

**评论**：连续第三日在榜，+1,419 → +1,494，稳在中高位，日增速 29.52%（全榜第三）。
它是今天纯 Adoption 角度最健康的项目：**Fork/Star 13.41% 为全榜最高**（6,555 星 / 879 fork），
配置也写得最实用——`./data` 一把梭就能备份全部，`secret` 是会话 cookie 的签名密钥，
支持从 FitNotes / Strong / Hevy 与 Apple Health 导入。

隐私项是它的老问题：持续记录训练与身体数据，但 README 的**免责声明 / 数据合规类关键词连续第三日 0 命中**。
优点是 passkey 那条写得很硬：*"Passkey private keys never reach the server"*（私钥永远不上服务器）。

---

## 三、横向分析

### 3.1 分布与集中度（32 期可比样本中的位置）

| 指标 | 今日 | 昨日（10-06） | 变化 | 历史降序分位 |
|------|------|--------------|------|-------------|
| 席位 | **13** | 12 | **+1** | 第 26/32 |
| 增量总量 | **15,060** | 11,705 | **+28.7%** | **第 4/32** |
| 中位数 | **620** | 782 | **−162** | 第 8/32 |
| 均值 | **1,158.46** | 975.42 | +183.04 | **第 2/32**（仅低于 09-28 的 1,684.75） |
| Top1 占比 | **30.98%** | 25.31% | **+5.67pp** | 第 7/32 |
| Top2 占比 | **49.08%** | 40.01% | **+9.07pp** | 第 6/32 |
| Top3 占比 | **59.00%** | 52.13% | **+6.87pp** | 第 8/32 |
| Top5 占比 | **77.57%** | 69.00% | **+8.57pp** | **第 4/32** |
| 末位增量 | **50** | 227 | **−177（−78.0%）** | 第 12/32 |
| 破千席数 | **5** | 4 | +1 | **并列第 2/32**（最高 8 @ 09-16） |

**读法**：这是一张**"头部拉高、尾部回吐"**的榜单，与昨日"整条榜单一起变厚"的判断完全相反。
- **头部再上一级**：Top1 +5.67pp、Top2 +9.07pp、Top5 +8.57pp，**四个集中度指标同步上行**，
  Top5 已经到 77.57%（32 期第 4 高）——7 个项目的总量里，前 5 名拿走近八成。
- **尾部被打回原形**：昨日末位 +227 创历史最高，今日直接掉到 +50（回到 32 期的中游第 12 位）。
  → **昨日判据 #3（末位门槛 ≥200）今日明确不成立**，昨日的高门槛是一次性的，不是榜单整体的结构抬升。
- **总量与均值好看，中位数却在跌**：总量第 4 高、均值第 2 高，**中位数却从 782 掉到 620**——
  典型的"少数尖峰拉高均值，中间段没有跟上"。这两个指标的背离本身就说清了今天的形态。
- 破千 5 席（rea 4,666 / AnyPS5 2,725 / openGym 1,494 / skills 1,406 / e2e 1,391），13 席里占 38.5%。

### 3.2 换血结构（留存 / 离榜 / 新入）

| 分组 | 席数 | 今日增量 | 昨日增量 | 变化 |
|------|------|---------|---------|------|
| **留存** | 8 | **13,708** | 9,154 | **+49.7%** |
| **离榜** | 4 | — | 2,551 | 带走 2,551 |
| **新入** | 5 | **1,352** | — | 带来 1,352 |

平衡校验：13,708 + 1,352 = **15,060** ✅；昨日 9,154（留存部分）+ 2,551（离榜部分）= 11,705 ✅

**留存率**：61.5%（留存/今日席位，8/13）／66.7%（留存/昨日席位，8/12）｜**掉榜率 33.3%**（4/12）

**8 个留存项的涨跌（7 涨 1 跌）**

| 项目 | 昨日 → 今日 | 变化 |
|------|------------|------|
| diagram-design | +227 → +828 | **+264.8%** 涨 |
| AnyPS5 | +943 → +2,725 | **+189.0%** 涨 |
| i-have-adhd | +318 → +620 | **+95.0%** 涨 |
| rea | +2,963 → +4,666 | **+57.5%** 涨 |
| skills | +1,028 → +1,406 | **+36.8%** 涨 |
| claude-mem | +536 → +578 | +7.8% 涨 |
| openGym | +1,419 → +1,494 | +5.3% 涨 |
| e2e | +1,720 → +1,391 | **−19.1%** 跌 |

**今日涨的不是"低基数反弹"，而是中高位项目继续放大**：涨幅前四里 diagram-design（昨 227）之外，
AnyPS5、i-have-adhd、rea 昨日就已在中高位。**唯一的下跌来自 e2e（−19.1%）**，而它仍是全榜第 5 并把 open issues 从 64 推到 73。

**离榜 4 项的 API 复核：全部仍在涨**

| 项目 | 昨日快照 | 当前 | 增量 |
|------|---------|------|------|
| pbakaus/impeccable | 77,480 | 78,140 | **+660** |
| msitarzewski/agency-agents | 157,638 | 158,167 | **+529** |
| earthtojake/text-to-cad | 17,791 | 18,244 | **+453** |
| deepseek-ai/DeepGEMM | 8,604 | 8,848 | **+244** |
| **合计** | | | **+1,886** |

**离榜 4 项今日仍增长 1,886，相当于它们在榜时贡献 2,551 的 73.9%**
→ **"离榜 ≠ 衰退"第 9 次量化成立**（昨日 95.7% 刷新纪录，今日回落到常见区间）。

**回归率**：新入 5 席中 **3 席**有历史在榜记录（agent-skills 隔 2 天、cua 隔 15 天、security-audit-skill 隔 16 天），
**2 席为首次在榜**（raddebugger / cmux）→ **回归率 60.0%**（昨日 66.7%）。

> **6uu 的今日观察（续）**：8 个留存项的「日榜计数器 vs 真实 Star 增量」**4 正 4 负**，
> 区间 **−19.1% ~ +11.6%**，极差 **30.8pp**，中位数 **−0.4%**。
> 与昨日（3 正 3 负，区间 −9.9%~+7.3%，极差 17.2pp，中位 +1.3%）相比，**极差重新扩大、中位数下移到负值**，
> 主要由 AnyPS5 造成（计数器 2,725 / 真实 3,370，−19.1%，说明它在 24h 窗口外还有 645 颗星没被圈进来）。
> → 连续四日看，两套口径在这个增量区间内**没有稳定的系统性偏差**，差异仍更像项目级的随机波动。

### 3.3 判据复核（10-06 §3.7 留下的 9 条）

> 沿用 7t/7y 的三分支写法，判据一律挂结构指标。9 条**全部可判定**。

| # | 判据 | 今日实测 | 结论 |
|---|------|---------|------|
| 1 | rea 第二日（昨 +2,963）：≥2,000 / 1,200~1,999 / <1,200 | **+4,666（+57.5%）** | **✅ 成立（高分支）** → 首个"首次在榜即头名、第二日继续放大"的项目；单项目增量历史第 2 |
| 2 | Top1 集中度（昨 25.31%，刚过阈值）：>25% / 20~25% / <20% | **30.98%（+5.67pp）** | **✅ 成立（高分支且不再踩线）** → 头部集中得到确认 |
| 3 | 末位门槛（昨 +227，历史最高）：≥200 / 100~199 / <100 | **+50（−78.0%）** | **❌ 不成立（低分支）** → 昨日高门槛为一次性事件，**"榜单整条变厚"被推翻** |
| 4 | 席位（昨 12，连续三日收缩）：≤12 / 13~15 / ≥16 | **13（+1）** | **⚠️ 落入中间档 → 观察** → 收缩中断，进入横盘 |
| 5 | B 簇能否守住对 A 簇的反超（昨 5,219 vs 3,761，差 1,458） | B **6,914** vs A **3,845**，差 **3,069** | **✅ 成立（且差距扩大一倍以上）** → B 连续第三日领先 |
| 6 | C 簇空缺能否被填补（昨 0 席） | 仍 **0 席** | **⚠️ 连续第二日空席 → 继续观察**（按既有规则，需第三日仍空才能定性为退潮） |
| 7 | Agent 占比（昨 76.72%）：≥85% / 65~85% / ≤65% | **71.44%** | **⚠️ 落入中间档 → 观察**（连续第三日落在同一区间） |
| 8 | e2e / openGym 能否双双守住 ≥1,000 | e2e **1,391**、openGym **1,494** | **✅ 成立（高分支）** → 千级常客梯队坐实，今日破千席数已达 5 |
| 9 | 破千席数（昨 4）：≥4 / 3 / ≤2 | **5**（并列历史第 2） | **✅ 成立（高分支）** → 高位增量扩散得到延续 |

**汇总：5 条明确成立（#1 #2 #5 #8 #9）/ 3 条维持观察（#4 #6 #7）/ 1 条不成立（#3）。**
按 6nn 的提醒检查同源性：#2 #5 #9 三条本质上都由 rea + AnyPS5 这两个项目驱动，属于同一事实的不同侧面；
真正独立的信号是 **#1（rea 的二次放大）**、**#3（末位回落）**与 **#8（千级梯队守住了）**这三条。

### 3.4 主题聚类（4 簇，合计 = 15,060）

| 簇 | 主题 | 席位 | 增量 | 占比 | 成员 |
|----|------|------|------|------|------|
| **A** | Agent 技能与方法论 | 5 | **3,845** | **25.53%** | mattpocock/skills 1,406 / diagram-design 828 / i-have-adhd 620 / security-audit-skill 538 / agent-skills 453 |
| **B** | Agent 运行时与基础设施 | 5 | **6,914** | **45.91%** | rea 4,666 / e2e 1,391 / claude-mem 578 / cua 229 / cmux 50 |
| **C** | Agentic 内容生产 | **0** | 0 | 0% | — （连续第二日空席） |
| **D** | 非 Agent | 3 | **4,301** | **28.56%** | AnyPS5 2,725 / openGym 1,494 / raddebugger 82 |

- **Agent 相关（A+B）= 10,759，占 71.44%**；非 Agent 4,301，占 **28.56%**（昨日 23.28%、前日 34.88%）
  → 中间档第三天，"Agent 单一主题期"仍未恢复。
- **B 簇连续第三日压过 A 簇，且差距从 1,458 扩大到 3,069**。但要注意：B 簇 6,914 里有 **4,666（67.5%）来自 rea 一个项目**，
  单点依赖比昨日更重（昨日 56.8%）；剔除 rea 后 B 簇只剩 2,248，反而低于 A 簇的 3,845。
  → 这条主线信号**仍然高度依赖单一项目**，写结论时不能读作"整体转向运行时/基础设施"。
- **C 簇连续第二日空席**。规则上需要第三日才能定性，但已经可以记：这条线在本榜上**连续两期没有代表**。
- **D 簇 3 席里有 2 席是全榜增量的第 2、第 3 名**（AnyPS5 / openGym），且三席（PS5 移植、健身追踪、原生调试器）
  **与 AI 完全无关**——今日非 Agent 一侧的存在感是这三期里最强的一次。

### 3.5 语言与许可

- **语言**：TypeScript 3 / JavaScript 3 / Shell 1 / C++ 1 / Python 1 / HTML 1 / **C 1** / **Swift 1** / Rust 1
  → **9 种语言，是本系列语言多样性最高的一期**（往期多为 5~7 种）；TS+JS 合计 6/13（46.2%）。
  **C 与 Swift 均为本系列首次出现**（raddebugger / cmux），Rust 则是 09-21 以来再度出现（cua）。
- **许可**：MIT 8 / Apache-2.0 2 / GPL-2.0 1 / **AGPL-3.0 1** / **NOASSERTION 1**
  → **copyleft 合计 3 席（23.1%）**，并以 GPL-2.0 + AGPL-3.0 + GPL-3.0 三种不同版本同台为特点；MIT 仍占 61.5%。
- **许可信息不一致，需要人工判定 3 例**：
  ① **cmux** 的 API 值为 NOASSERTION，README 实为「客户端 GPL-3.0-or-later + 服务端 BSL 1.1」的混合许可；
  ② **raddebugger** 的 README **通篇没有 license 字样**，只能以 API 的 MIT 为准；
  ③ **README 无 License 段**：mattpocock/skills、cathrynlavery/diagram-design（两项均以 API 的 SPDX 值为准）。

### 3.6 需要注意（风险与缺口，12 条）

1. **morluto/rea**（今日头号）——**对昨日结论的更正**：昨日（10-06）报告把它列为风险第 1 条并写明
   "README 中免责声明类关键词零命中"。**今日重新抓取 README，该结论已不成立**：README 新增了 `## Disclaimer` 段，
   原文为 *"REA provides tools for lawful reverse-engineering research, analysis, and reconstruction.
   You are responsible for obtaining any required authorization and complying with applicable laws.
   The project does not endorse illegal or unauthorized use."* 按 6jj/7d 的规则，此处显式撤回昨日的"零命中"判定。
   仍需保留的边界：README 明示 *"Analysis tools and launched targets run with your user permissions"*、
   *"Process Capture records behavior and **is not a security sandbox**"*；macOS 原生 UI 捕获仍依赖辅助功能与屏幕录制权限；
   setup 可在你同意后安装 Hopper（独立商业许可）。MIT，110 open issues。
2. **manaflow-ai/cmux**——**全榜许可结构最复杂的一项**：README 原文
   *"cmux is open source under GPL-3.0-or-later. The cmux server software (`web/`, the Cloudflare workers,
   and the relay services ...) uses the Business Source License 1.1 instead: you can read, modify, and run it
   for **non-production use**, and production use or self-hosting **requires a commercial license**."*
   → 典型的 open-core 拆分，GitHub API 因此返回 NOASSERTION。另有 **3,182 open issues 为全榜最高**
   （第二名的 10 倍），252 天建库；仅 macOS + DMG 分发，README 未提供公证/签名的说明。
3. **boykopovar/AnyPS5**——**GPL-2.0**。Disclaimer 原文：*"It does not include, distribute, or require copyrighted
   software, firmware, **cryptographic keys**, or proprietary libraries. Users are responsible for ensuring that any
   binaries used with this project are obtained and used in accordance with applicable laws..."*
   → **合法性完全交给使用者**。231 open issues 全榜第二高。今日 +189% 为全榜最大涨幅。
4. **EpicGames/raddebugger**——README 明示 **currently in \*ALPHA\***，且**只支持本地 Windows x64 + PDB**
   （Linux/DWARF 仍在计划）；README 内**找不到任何 license 表述**（API 为 MIT）；建库 1,001 天、
   **Fork/Star 4.86%（全榜第二低）**、315 open issues（全榜第二高）。今日 +82 为倒数第二。
5. **cloudflare/security-audit-skill**——**停更 22 天**（全榜最长）却拿到 +538 并重返榜单，
   直接推翻了 10-06 给出的"20 天是容忍上限"的结论；README 中 **authorization / permission 关键词 0 命中**，
   **未提供目标授权的取得方式与合规须知**，而这个技能产出的是实打实的攻击面枚举与漏洞候选。
   使用前必须自行取得书面授权。55 open issues 为全榜最低。
6. **trycua/cua**——会给 Agent 交付**完整桌面与本地虚拟机**（Lume 在 Apple Silicon 上跑 macOS/Linux VM），
   隔离与资源边界需自己划定；README 明示模型权重单独托管在 Hugging Face，
   **每个模型卡/数据集各有自己的 scope、limitations 与 artifact-specific license**。1,163 open issues 全榜第三高。
7. **DuarteSantos8/openGym**——**AGPL-3.0**。持续记录**体重与训练等身体数据**，免责声明 / 数据合规类关键词
   **连续第三日 0 命中**。`secret` 为会话 cookie 签名密钥，需与 `./data` 一并备份。
   优点写明 *"Passkey private keys never reach the server"*。144 open issues。
8. **tester-army/e2e**——**CLI 默认开启匿名遥测**（明示不含测试/应用内容与凭据，可 `npx e2e telemetry disable`
   或 `E2E_TELEMETRY_DISABLED=1` 关闭）；**Fork/Star 4.43% 全榜最低**；README 自述仍在通往 1.0、
   API 与配置仍会变；open issues 从昨日 64 升到 **73**。今日为唯一负增长留存项（−19.1%）。
9. **thedotmack/claude-mem**——**默认走 CMEM Pro 云端托管记忆**（README 原文
   *"Default is CMEM Pro, the hosted memory. Local observer is opt-in: `--provider host`"*），
   Cloud Sync 会备份到 cmem.ai，安装需浏览器登录换 memory key。**连续第四日提示。**
10. **mattpocock/skills**——README **无 License 段**（API 为 MIT）；正文含 newsletter 推广位；
    **open issues 由 10-06 报告记载的 419 变为今日 API 的 153**（本日重复拉取 API 复核仍为 153，
    差异疑为批量清理或前期读数问题，已在数据说明中留痕）。Fork 23,382 为全榜最高。
11. **cathrynlavery/diagram-design**——README **无 License 段**（API 为 MIT）；会**读取你的站点**
    提取品牌 token 写入 `references/style-guide.md`；托管安装方式下该文件会被包更新覆盖。91 open issues。
12. **addyosmani/agent-skills**——README 的 License 只有一行（MIT），未提供更细的条款说明；
    Fork/Star 10.48% 偏高意味着大量二次分发；**3 天未推送**（全榜第二长），132 open issues。

> **关键词扫描（按惯例，13 份 README）**：
> 加密代币类 → agent-skills 命中 "ico "（实为贡献者人名 **"federico bartoli"**）→ **误报，实质 0 命中**；
> 私钥类 → openGym 命中 "private key"（实为 **"Passkey private keys never reach the server"** 的正向安全声明）→ **误报，实质 0 命中**；
> **免责声明类 → 2 处真实命中**（rea 今日新增的 Disclaimer、AnyPS5 的互操作/研究/保存 Disclaimer）
> ——**昨日此项只有 1 处命中且判定 rea 零命中，本期已更正**；
> OSINT / 监控类 **0 命中**；jailbreak / 去对齐类 **0 命中**。

### 3.7 明日观察点

> 沿用三分支写法，判据一律挂结构指标，不挂单个项目。

1. **rea 的第三日（今日 +4,666，已连续两日在榜）**
   若 **≥3,000** → 确认出现"四千级"常客；若 **<1,500** → 今日是二次脉冲的一次性释放；1,500~2,999 → 观察。
2. **Top1 集中度（今日 30.98%，明显高于 25% 阈值）**
   若仍 **>25%** → 头部集中彻底确认；若 **<20%** → 回到扁平化；20%~25% → 观察。
3. **末位门槛（今日 +50，昨日 +227）**
   若末位 **≥200** → 昨日的抬升才是真信号；若 **<100** → 确认为单日偶然；100~199 → 观察。
4. **席位（今日 13，四日来首次回升）**
   若 **≤12** → 收缩延续；若 **≥16** → 进入扩张；13~15 → 横盘。
5. **B 簇对 A 簇的领先（今日 6,914 vs 3,845，差 3,069，但 B 的 67.5% 来自单一项目）**
   若剔除最大成员后 B 仍 > A → 主线切换可信；若仍靠单一项目 → 维持"单点依赖"表述不下结论。
6. **C 簇能否连续第三日空席**（今日 0 席）
   若明日仍 **0 席** → 按既有规则定性为"Agentic 内容生产"在本榜退潮；若 **≥1 席回归** → 只是两日空缺。
7. **Agent 占比（今日 71.44%，连续三日落在 65%~85%）**
   若 **≥85%** → 回归单一主题期；若 **≤65%** → 双轨并行确认；中间 → 观察（连续四日维持建议改写法）。
8. **AnyPS5 的第二日（今日 +2,725，涨幅 +189% 全榜第一）**
   若 **≥2,000** → 非 Agent 项目首次跨入"两千级"；若 **<800** → 今日为单日事件；800~1,999 → 观察。
9. **破千席数（今日 5，并列历史第 2）**
   若 **≥5** → 高位扩散延续；若 **≤3** → 回到少数项目主导；4 → 观察。

---

## 数据说明

- **抓取**：Python `urllib.request` 以三种 UA（Chrome/Windows、Chrome/macOS、Chrome/Linux）在
  23:47 / 23:49 / 23:50 各抓一次原始 HTML，间隔约 75 秒。三次解析所得 `stars today` **13/13 完全一致**，
  仓库名与条目顺序 13/13 一致（总 Star 的 1~15 差异为抓取间隔内的自然增长；详见 §2.9 cmux 的末位确认）。
- **交叉校验**：条目数三路核对（`<article>` 计数 / `stars today` 计数 / 解析结果 = **13/13/13**）。
  独立通道（WebFetch）复核返回 **13 条，与原始 HTML 完全一致**，其 `stars today` **13/13 与快照吻合**
  （本期未复现 7v 的漏条目问题）；WebFetch 的总 Star 取自更早的缓存版本（如 rea 12,636 vs 快照 12,813），
  故总 Star 一律以快照为准（7w）。
- **元数据**：GitHub REST API `/repos/{owner}/{repo}` 取 created_at / pushed_at / license.spdx_id /
  stargazers_count / forks_count / open_issues_count / default_branch。
  「建库天数」以 2026-10-07 为基准；「未推送天数」以 API 返回的 pushed_at 与抓取时刻的 UTC 差值计。
- **口径统一**：速览表中的「总 Star」「Fork」一律采用 **trending 页面快照值**（与 `stars today` 同源）；
  §3.2 离榜复核中涉及的 Star 采用 **API 值**（两处口径不同，已在各自小节注明）。
- **用词水的更正记录（本期两条）**：
  ① **rea 免责声明**：10-06 报告判定其 README「免责声明类关键词零命中」，**今日复核已失效**——
  README 现已增 `## Disclaimer` 段，见 §3.6 第 1 条，该判定撤回。
  ② **mattpocock/skills 的 open issues**：10-06 记载 419，今日 API 复核为 **153**（重复拉取仍为 153），
  差异原因未确定，已在 §3.6 第 10 条留痕，后续继续观察。
- **在榜次数**：本期起改用**脚本统一重算**（5 个兼容正则匹配「一、速览」表格行与各期详情标题，
  兼容 08 月报告的三种写法；10-01 重复快照不计）。**本脚本对 10-06 的重算结果为：skills 17 次、diagram-design 7 次**，
  与 10-06 正文手写的 18 / 6 相差 1，属历史手工计数偏差；**自本期起一律以脚本口径为准**。
  同一口径下的 `上次在榜日期`（用于计算"隔 N 天回归"）与历史报告一致，未受影响。
- **集中度**：Top1/Top2/Top3/Top5 均**先按增量降序排序再计算**，与页面顺序无关（6s）。
- **可比样本**：**32 期**（不含今日；08 月的 14 期报告无「一、速览」章节式表格但已用详情标题兜底计入，
  10-01 为重复快照不计）。
- **历史锚点校验**：09-17 = 20 席 / 18,280、09-16 = 21 席 / 16,369、09-22 = 8 席 / 4,286，均与 6t 要求一致 ✅。
- **历史单项目增量极值参考**：Top3 为 09-29 VoiceStudio +4,712、**今日 rea +4,666**、09-09 i-have-adhd +4,624。
