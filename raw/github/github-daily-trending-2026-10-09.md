# GitHub 每日趋势榜 2026-10-09

## 今日概览

2026-10-09 GitHub Trending（daily）共收录 **9 个项目**——数量明显低于近期常见的 20+ 条，已按 `Box-row` 条目数二次核对页面，确认是 GitHub 当日榜单本身只放出 9 条，不是解析丢失。

**核心主题：Agent 工具链与二进制/系统底层的双向扩张。**

今天榜单呈现出一条很清晰的分界线：一边是 **Agent 能力向下沉**（`morluto/rea` 用 Agent 做逆向、`thedotmack/claude-mem` 给 Agent 装跨会话记忆、`mattpocock/skills` 把 Agent 技能配置化、`anthropics/knowledge-work-plugins` 把 Agent 插件铺给非程序员），另一边是 **工具链向上顶**（`boykopovar/AnyPS5` 移植 PS5 可执行文件、`EpicGames/raddebugger` 原生图形化调试器、`storytold/artcraft` 创作引擎）。中间夹着唯一的非技术向条目 `liquidslr/system-design-notes`，属于面试季的常规回升。

语言分布上 TypeScript 2 席、C/C++ 2 席，其余 HTML / Shell / Python / Rust / 未标注各 1 席——没有出现单一语言压倒性集中的情况。增量榜首是 `morluto/rea`（+7,744），但它总 Star 只有 24,081，属于"小体量高爆发"；`mattpocock/skills` 以 280,926 的总 Star 成为榜上体量最大的仓库。

## 重点项目

### 1. boykopovar/AnyPS5

| 字段 | 内容 |
|------|------|
| 项目名称 | boykopovar/AnyPS5 |
| 地址 | https://github.com/boykopovar/AnyPS5 |
| 简介 | Tool for automatic PS5 executables porting to Linux and Windows |
| 主要语言 | C++ |
| 总 Star | 14,997 |
| 每日新增 | 4,640 stars today |
| 标签 | C++、游戏兼容层、逆向工程、跨平台、主机移植 |

自动把 PS5 可执行文件移植到 Linux / Windows 的工具，目标是让主机游戏二进制脱离专用硬件运行。今日新增 4,640 星、位列增量第二，讨论度集中在"工程可行性验证"而非开箱即用的成品体验——这类项目的价值通常先体现在技术验证，成熟度和合法性边界都还需要时间观察。

### 2. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 项目名称 | cathrynlavery/diagram-design |
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Factory Droid, and Pi. 42 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 主要语言 | HTML |
| 总 Star | 46,155 |
| 每日新增 | 1,163 stars today |
| 标签 | HTML、SVG、图表设计、AI 编程助手、设计体系 |

面向 Claude Code、Codex、Copilot 等编码助手的"编辑级"图表设计规范，提供 42 种自包含 HTML+SVG 图型，并明确拒绝阴影与默认 Mermaid 观感。上榜原因是它解决了一个很实际的痛点：AI 生成的架构图能看但不好看。适合希望 AI 产出物直接达到出版级观感的团队作为样式基线引入。

### 3. morluto/rea

| 字段 | 内容 |
|------|------|
| 项目名称 | morluto/rea |
| 地址 | https://github.com/morluto/rea |
| 简介 | Reverse engineer anything with agents, from app behavior down to native binaries. |
| 主要语言 | TypeScript |
| 总 Star | 24,081 |
| 每日新增 | 7,744 stars today |
| 标签 | TypeScript、Agent、逆向工程、二进制分析、AI |

用 Agent 实现从应用行为到原生二进制的全链路逆向，是今天的增量榜首（+7,744）。它把大模型编排能力下沉到二进制分析这一高门槛专业场景，是"Agent 进入专业工具链"的代表性尝试。需要注意的是总 Star 仅 2.4 万却单日涨 7,744，属于典型的爆发早期，实际可用性还待验证。

### 4. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 项目名称 | mattpocock/skills |
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 主要语言 | Shell |
| 总 Star | 280,926 |
| 每日新增 | 1,770 stars today |
| 标签 | Agent、开发者工具、工程实践、Shell、提示工程 |

作者把个人 `.agents` 目录里的工程化 Agent 技能集直接公开，是榜上体量最大的仓库（28 万星）。今日 +1,770 属于长期高热项目的常规波动，反映"Agent 技能/配置即代码"正在成为开发者的标准化工作流，而不只是个人效率技巧。

### 5. thedotmack/claude-mem

| 字段 | 内容 |
|------|------|
| 项目名称 | thedotmack/claude-mem |
| 地址 | https://github.com/thedotmack/claude-mem |
| 简介 | Persistent Context Across Sessions for Every Agent – Captures everything your agent does during sessions, compresses it with AI, and injects relevant context back into future sessions. |
| 主要语言 | TypeScript |
| 总 Star | 98,352 |
| 每日新增 | 662 stars today |
| 标签 | TypeScript、Agent、上下文管理、记忆、开发者工具 |

为各类编码 Agent 提供跨会话的持久记忆：捕获会话行为、AI 压缩后在后续会话中回注上下文，兼容 Claude Code、OpenClaw、Codex、Gemini、Copilot 等多种客户端。直击长周期项目里"每次重开都丢上下文"的痛点，是今日 Agent 工具链主题里工程完整度较高的一条。

### 6. EpicGames/raddebugger

| 字段 | 内容 |
|------|------|
| 项目名称 | EpicGames/raddebugger |
| 地址 | https://github.com/EpicGames/raddebugger |
| 简介 | A native, user-mode, multi-process, graphical debugger. |
| 主要语言 | C |
| 总 Star | 8,081 |
| 每日新增 | 283 stars today |
| 标签 | C、调试器、开发者工具、基础设施、游戏引擎 |

Epic Games 开源的原生用户态多进程图形化调试器，主打大型工程下的调试响应速度（启动、符号加载、断点命中延迟）。适合对调试器开销敏感的游戏与引擎开发场景，也能作为通用 C/C++ 工程的轻量替代方案。今日增量在榜内偏后，属于稳定积累型项目。

### 7. anthropics/knowledge-work-plugins

| 字段 | 内容 |
|------|------|
| 项目名称 | anthropics/knowledge-work-plugins |
| 地址 | https://github.com/anthropics/knowledge-work-plugins |
| 简介 | Open source repository of plugins primarily intended for knowledge workers to use in Claude Cowork |
| 主要语言 | Python |
| 总 Star | 27,455 |
| 每日新增 | 309 stars today |
| 标签 | Python、LLM、插件、生产力、知识工作 |

Anthropic 面向知识工作者的 Claude 插件开源集合，覆盖文档、表格、演示等常见办公场景。官方下场做"非程序员的 LLM 插件"，说明 Agent 应用的重心正从代码生成扩展到通用办公——这也是今日 Agent 主题中用户面最宽的一条。

### 8. storytold/artcraft

| 字段 | 内容 |
|------|------|
| 项目名称 | storytold/artcraft |
| 地址 | https://github.com/storytold/artcraft |
| 简介 | ArtCraft is an intentional crafting engine for artists, designers, and filmmakers |
| 主要语言 | Rust |
| 总 Star | 7,469 |
| 每日新增 | 2,510 stars today |
| 标签 | Rust、创意工具、设计、引擎、开源 |

面向艺术家、设计师与 filmmaker 的"意图化创作引擎"，强调可控的创作流程而不是一键生成结果。单日 +2,510 星、增量第三，是今天除逆向类之外热度最高的创意工具项目。Rust 实现保证了大体量素材下的性能，适合对生成过程可复现性有要求的专业用户。

### 9. liquidslr/system-design-notes

| 字段 | 内容 |
|------|------|
| 项目名称 | liquidslr/system-design-notes |
| 地址 | https://github.com/liquidslr/system-design-notes |
| 简介 | Notes of the book System Desgin Interview - An Insider's Guide |
| 主要语言 | 未标注 |
| 总 Star | 24,519 |
| 每日新增 | 398 stars today |
| 标签 | 系统设计、面试、学习笔记、架构、开源 |

《System Design Interview – An Insider's Guide》的结构化读书笔记，长期稳居系统设计学习资料清单。今日 +398 星属于面试季的常规回升，内容是笔记整理而非可执行代码，实用价值取决于读者是否正在准备系统设计面试。

## 今日趋势观察

- **Agent 工具链占据半壁**：9 条里 4 条（`rea`、`claude-mem`、`mattpocock/skills`、`knowledge-work-plugins`）直接服务于 Agent 的能力增强与持久化，是今天最集中的主题。
- **增量与体量背离**：增量前三的 `rea`（2.4 万星 / +7,744）、`AnyPS5`（1.5 万星 / +4,640）、`artcraft`（0.7 万星 / +2,510）都是中小体量新爆发；体量最大的 `mattpocock/skills`（28 万星）增量反而温和（+1,770）。
- **底层工具重回视野**：`AnyPS5` 与 `raddebugger` 一个是主机二进制移植、一个是原生调试器，同日上榜意味着系统/二进制层面的工具需求并未被 AI 话题完全挤走。
- **榜单整体缩量**：当日仅 9 条（已核对页面 `Box-row` 数确认为 GitHub 侧数据），主题集中度反而高于条目更多的日子。
