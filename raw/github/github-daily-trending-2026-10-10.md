# GitHub 每日趋势榜 2026-10-10

## 今日概览

2026-10-10 GitHub Trending 共收录 11 个项目（已回查页面 `Box-row` 计数确认为 11，非解析丢失）。今日榜单被 **Agent 工具链** 彻底主导：11 个项目里有 7 个直接服务于 AI 编码 Agent——逆向工程 MCP、Agent Skills 合集、图表设计规范、官方插件仓库、代码评审工具、SwiftUI Skill，形成一条完整的"让 Agent 干工程活"的供给链。

增量头部极其陡峭：榜首 `morluto/rea` 单日 +15,335，是第二名的 2.6 倍；前两名合计贡献了当日全部增量的近七成。与之相对，榜单尾部几个项目（`litellm` +95、`lingbot-map` +109、`SwiftUI-Agent-Skill` +88）增量温和，属于存量仓库的常规呼吸或学术成果的慢热扩散。

语言分布上 Python 以 3 席居首，TypeScript / C++ / Shell / HTML / Go / JavaScript / Rust 各 1 席，1 个项目未标注主语言。值得注意的是 **Rust 与 Go 同时出现在榜单中**，且都指向"性能敏感的基础设施"这一诉求。

**核心主题：Agent 工具链工业化 —— 从"帮 Agent 写代码"转向"给 Agent 配齐工程装备"**

| 维度 | 情况 |
|------|------|
| 收录项目数 | 11 |
| 单日增量最高 | morluto/rea（+15,335） |
| 语言 Top | Python 3、TypeScript 1、C++ 1、Shell 1、HTML 1、Go 1、JavaScript 1、Rust 1、未标注 1 |
| 主题集中度 | 高（7/11 与 AI Agent 工具链直接相关） |

## 重点项目

### 1. morluto/rea

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/morluto/rea |
| 简介 | Reverse engineer anything with agents, from app behavior down to native binaries. |
| 语言 | TypeScript |
| 总 Star | 42,854 |
| 今日新增 | 15,335 stars today |
| 标签 | AI Agent、MCP、逆向工程、二进制分析、TypeScript |

通过 MCP 把 Hopper、Ghidra 等逆向工具接给编码 Agent，让 Agent 能在没有源码的前提下调查第三方应用某个功能的实现方式，并给出带证据链的解释和可用复刻。刚发布的 4.1.0 补齐了 Android APK 静态分析（headless JADX）、固件解包（Binwalk/Unblob）与 Windows x64 只读分析，正是这波密集发布把它推上了当日增量第一。

### 2. boykopovar/AnyPS5

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/boykopovar/AnyPS5 |
| 简介 | Tool for automatic PS5 executables porting to Linux and Windows |
| 语言 | C++ |
| 总 Star | 21,594 |
| 今日新增 | 5,925 stars today |
| 标签 | C++、游戏移植、重链接、兼容层、逆向工程 |

不做传统模拟：PS5 用的是 AMD Zen 2 的 x86-64，指令本身无需翻译，项目因此改用 relinker 把 PS5 的 ELF 直接转成 Windows PE / Linux ELF，再自实现 PRX 系统库做动态链接，配合把主机着色器重编译为 SPIR-V。仓库状态显示实际游戏已能跑到 logo、主菜单并进入带声音的 gameplay，但官方要等"至少一款游戏完整跑通"才发第一个 release。

### 3. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 282,482 |
| 今日新增 | 1,696 stars today |
| 标签 | Agent Skills、开发者工具、工程实践、AI 编程、Shell |

Matt Pocock 把自己 `.agents` 目录里真实在用的 Agent skills 原样开源，主打"给真实工程师用"而非演示玩具。存量星数已经极大，当日仍能吸 1,696 星，说明 Agent Skills 这种"把工程经验打包成可复用指令"的形态正处在 mainstream 化阶段。

### 4. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Factory Droid, and Pi. 42 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 语言 | HTML |
| 总 Star | 47,744 |
| 今日新增 | 1,744 stars today |
| 标签 | 图表设计、SVG、HTML、Agent Skills、前端 |

给 Claude Code / Codex / Copilot 等 Agent 用的编辑级图表设计规范，42 种图表类型，产物是自包含的 HTML + SVG，明确拒绝阴影和"Mermaid slop"。它解决的是 Agent 出图普遍丑陋且不可控的痛点，属于 Agent 工具链里偏"输出质感"的那一环。

### 5. alibaba/open-code-review

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/alibaba/open-code-review |
| 简介 | Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible. |
| 语言 | Go |
| 总 Star | 45,105 |
| 今日新增 | 323 stars today |
| 标签 | Go、代码评审、LLM Agent、静态分析、安全 |

阿里巴巴开源的代码评审工具，走"确定性流水线 + LLM Agent"混合架构：规则层负责 NPE、线程安全、XSS、SQL 注入等可判定的问题，Agent 层负责语义理解，评论精确到行。兼容 OpenAI 与 Anthropic 接口，强调已在阿里内部规模验证过。增量不高但企业落地属性最强。

### 6. anthropics/knowledge-work-plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/anthropics/knowledge-work-plugins |
| 简介 | Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork |
| 语言 | Python |
| 总 Star | 28,176 |
| 今日新增 | 714 stars today |
| 标签 | Python、官方插件、Claude、知识工作、生产力 |

Anthropic 官方维护的 Claude Cowork 插件开源仓库，目标用户明确是知识工作者而非开发者。官方亲自下场做插件生态，是把 Agent 能力往办公场景推的明确信号。

### 7. BerriAI/litellm

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/BerriAI/litellm |
| 简介 | The fastest, litest AI Gateway. Rust core with Python SDK. Call 100+ LLM APIs in OpenAI (or native) format with cost tracking, guardrails, load balancing, and logging [Bedrock, Azure, OpenAI, Anthropic, OpenAI, VertexAI, vLLM, Nvidia NIM] |
| 语言 | Python |
| 总 Star | 60,598 |
| 今日新增 | 95 stars today |
| 标签 | LLM、AI 网关、Python、Rust、基础设施 |

Rust 核心 + Python SDK 的 LLM 网关，用统一的 OpenAI 格式调用 100+ 模型 API，带成本追踪、guardrails、负载均衡与日志。6 万星的老牌基础设施项目，当日 +95 属于成熟项目的常规增长，出现在榜单里更多是靠庞大基数而非当日事件。

### 8. addyosmani/agent-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/addyosmani/agent-skills |
| 简介 | Production-grade engineering skills for AI coding agents. |
| 语言 | JavaScript |
| 总 Star | 103,901 |
| 今日新增 | 523 stars today |
| 标签 | Agent Skills、JavaScript、工程质量、AI 编程、工程规范 |

Addy Osmani 整理的面向 AI 编码 Agent 的生产级工程 skills，重点在工程质量纪律而非功能堆砌。10 万星体量下当日仍有 523 星增量，与 `mattpocock/skills` 一起印证了当日榜单的 Skills 主线。

### 9. storytold/artcraft

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/storytold/artcraft |
| 简介 | ArtCraft is an intentional crafting engine for artists, designers, and filmmakers |
| 语言 | Rust |
| 总 Star | 11,084 |
| 今日新增 | 3,723 stars today |
| 标签 | Rust、AIGC、图像生成、视频创作、3D 合成 |

想把 "prompting" 变成 "crafting" 的 AI 图像/视频创作引擎：提供角色姿态控制、场景调度（kit bashing）、3D 深度合成、Image-to-3D-Mesh 等空间控制能力，解决扩散模型跨镜头一致性差的老问题。Rust 实现，当日增量第三，是榜单里唯一面向纯创作者的重量级项目。

### 10. Robbyant/lingbot-map

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Robbyant/lingbot-map |
| 简介 | [ECCV 2026 Best Paper Award Candidate] LingBot-Map: Geometric Context Transformer for Streaming 3D Reconstruction |
| 语言 | Python |
| 总 Star | 17,654 |
| 今日新增 | 109 stars today |
| 标签 | Python、3D 重建、计算机视觉、Transformer、ECCV 2026 |

ECCV 2026 最佳论文候选的工作开源：用 Geometric Context Transformer 做流式 3D 重建。增量温和，但它是当日榜单里唯一的顶级会议学术成果，含金量与其余工程工具类项目不在同一维度。

### 11. twostraws/SwiftUI-Agent-Skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/twostraws/SwiftUI-Agent-Skill |
| 简介 | SwiftUI agent skill for Claude Code, Codex, and other AI tools. |
| 语言 | 未标注 |
| 总 Star | 5,373 |
| 今日新增 | 88 stars today |
| 标签 | SwiftUI、iOS、Agent Skill、Swift、移动开发 |

Paul Hudson（twostraws）写的 SwiftUI Agent Skill，供 Claude Code、Codex 等 AI 工具调用，目标是让 Agent 生成更地道的 SwiftUI 代码而非臆造 API。GitHub 未给出主语言统计，故语言字段为未标注。

## 今日趋势观察

### 关键趋势

- **Agent 工具链已经从"写代码"外溢到"配装备"**：`rea`（逆向）、`diagram-design`（出图）、`open-code-review`（评审）、`SwiftUI-Agent-Skill`（框架专精）分属完全不同的环节，说明社区正系统性地为 Agent 补齐工程能力短板，而不是继续卷生成速度。
- **Skills 成为 Agent 能力的标准载体**：`mattpocock/skills`、`addyosmani/agent-skills`、`twostraws/SwiftUI-Agent-Skill` 三个仓库同日上榜，且都采用"把经验打包成可复用指令文件"的同一形态，这一范式基本已经定了。
- **榜首 rea 指向一个更微妙的方向**：让 Agent 去逆向第三方应用并"带回"功能实现。能力边界在扩张，随之而来的是这个能力该由谁来跑、边界在哪的问题——项目 README 对此并不回避。
- **AnyPS5 代表"不模拟、只重链接"路线的抬头**：与 KytyPS5 等模拟器路线正面分岔，靠 x86-64 同架构省掉指令翻译，代价是要自己重实现整套 PRX 系统库。
- **基础设施层语言在换血**：`litellm` 用 Rust 重写核心、`AnyPS5` 与 `artcraft` 直接选 Rust/C++，性能敏感型 AI 基础设施对 Python 的依赖正在松动。
- **尾部增量普遍温和**：第 7 名之后单日增量都在 100 上下，说明当日流量高度集中在头部三个项目，长尾只是常规呼吸。

## 观察

今日榜单是一张相当纯粹的"Agent 工具链供给图"。11 席中 7 席直接服务于 AI 编码 Agent，且覆盖逆向、评审、出图、框架专精、插件生态五个彼此不重叠的环节——这种分工密度在此前的每日榜里不常见。

增量结构极度头部化：`rea` 一个项目吃掉当日总增量的约一半，`rea` + `AnyPS5` 合计接近七成。这两个项目的共同点是都在做"把原本只有专家能做的事交给自动化"——前者自动化逆向工程，后者自动化主机游戏移植。二者都处于"已经跑通关键路径、但离生产可用还有距离"的状态，恰好是最容易引爆关注的阶段。

需要留意的是 `rea` 与 `AnyPS5` 都带有明确的法律与合规敏感性：前者逆向第三方应用，后者处理主机可执行文件。两个项目的 README 都主动写了免责声明并拒绝分发受版权保护的资产，但使用者各自的合规责任并不因此转移。

*本报告由自动化任务生成，数据源为 GitHub Trending 官方页面，标签与简评由 Agent 补充。相关 Skill：`skills/github-trending-reporter`。*
