# GitHub daily趋势榜 2026-11-15

## 今日概览

- 本期共 **12 条**（周日缩量，较昨日 15 条继续回落）。语言分布：TypeScript 7、Go 2、Python 2、C++ 1。
- 对昨日 15 席留存 **8 席**：univer、ag-ui、plannotator、chrome-devtools-mcp、open-code-review、LoopForge、modern-web-guidance、claude-trading-skills；掉榜 7 席（sure、uptime-kuma、Veyra-NRVideo、airgorah、caveman、qwen-code、TensorFold）；新面孔 4：google-labs-code/stitch-skills、ggml-org/ggml、elementalsouls/Claude-BugHunter、NVIDIA/SkillEvaluator。
- **大厂/官方 6 席**：Google 双仓（google-labs-code、GoogleChrome）、ChromeDevTools、阿里、腾讯、NVIDIA。中文背景 2 席（univer、LoopForge）。
- 主题延续「Agent 生态全面化」：协议层（ag-ui）、编排层（LoopForge）、调试层（chrome-devtools-mcp）、评审层（open-code-review）之后，本期新增「技能包生态」四席齐现——Google 官方技能库（stitch-skills）、安全垂类（Claude-BugHunter）、金融垂类（claude-trading-skills）、评测框架（SkillEvaluator），生产→分发→垂类→评测的链条一次成型。

## 重点项目

### 1. dream-num/univer

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/dream-num/univer |
| 简介 | Build your own AI office with Univer Office SDK. Bring editing, calculation, collaboration, and file processing into your product for people and AI agents. Built on an extensible open-source core. |
| 语言 | TypeScript |
| 总 Star | 25518 |
| 今日新增 | 1,041 stars today |
| 标签 | TypeScript、前端、电子表格、协作、Agent |

开源 AI 办公套件 SDK：表格/文档/幻灯片的编辑、计算、协作与文件处理能力统一打包，供人和 AI Agent 共用。国产开源团队作品，新上榜即登顶（+1,041），「AI 办公」叙事的直接受益者。

### 2. ag-ui-protocol/ag-ui

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ag-ui-protocol/ag-ui |
| 简介 | AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications. |
| 语言 | TypeScript |
| 总 Star | 17772 |
| 今日新增 | 393 stars today |
| 标签 | TypeScript、Agent、协议、前端、开源标准 |

Agent-用户交互协议（AG-UI），标准化把 Agent 接入前端应用的通信层。昨日 +9 排第 8，今日 +393 跳升第 2 加速明显，Agent-前端协议层赛道升温的信号。

### 3. google-labs-code/stitch-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-labs-code/stitch-skills |
| 简介 | A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor. |
| 语言 | TypeScript |
| 总 Star | 9233 |
| 今日新增 | 248 stars today |
| 标签 | TypeScript、Agent、技能包、MCP、Google |

Google Labs 官方 Agent Skills 库，配合 Stitch MCP server 做 UI 设计生成，兼容 Antigravity、Gemini CLI、Claude Code、Cursor。注意：仓库最后推送 2026-08-17，停更约 3 个月靠惯性传播上榜。

### 4. backnotprop/plannotator

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/backnotprop/plannotator |
| 简介 | The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click. |
| 语言 | TypeScript |
| 总 Star | 11763 |
| 今日新增 | 860 stars today |
| 标签 | TypeScript、Agent、代码审查、工作流、生产力 |

人机协同工作台：对 Agent 的产出做计划、标注、审查与团队共享，反馈一键回发给 Agent。连续在榜第三天，+860/日稳居高位，「人在回路」监督赛道头部。

### 5. ChromeDevTools/chrome-devtools-mcp

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ChromeDevTools/chrome-devtools-mcp |
| 简介 | Chrome DevTools for coding agents |
| 语言 | TypeScript |
| 总 Star | 56843 |
| 今日新增 | 718 stars today |
| 标签 | TypeScript、MCP、Chrome、调试、Agent |

Chrome 官方为编码 Agent 开放的 DevTools 通道（网络、性能、控制台）。5.7 万星体量仍保持 +718/日，连续在榜，官方背书的 Agent 调试基础设施。

### 6. alibaba/open-code-review

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/alibaba/open-code-review |
| 简介 | Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible. |
| 语言 | Go |
| 总 Star | 51950 |
| 今日新增 | 688 stars today |
| 标签 | Go、代码审查、LLM、静态分析、阿里 |

混合架构代码评审工具：确定性流水线 + LLM Agent，行级精准评论，内置 NPE、线程安全、XSS、SQL 注入多语言规则集，在阿里规模生产验证。5.2 万星持续上榜。

### 7. Tencent/LoopForge

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Tencent/LoopForge |
| 简介 | Self-hosted workflows for coding-agent delivery. Orchestrate CodeBuddy, Codex and Claude Code with scripts and human approval gates. Includes Local workflows for coding assistants. |
| 语言 | Go |
| 总 Star | 1401 |
| 今日新增 | 484 stars today |
| 标签 | Go、Agent、工作流、编排、腾讯 |

腾讯官方新仓：自托管工作流编排 CodeBuddy、Codex、Claude Code 等编码 Agent，脚本驱动 + 人工审批门禁。连续在榜第三天，1,400 星体量 +484/日，Agent 交付流程工程化的代表。

### 8. ggml-org/ggml

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ggml-org/ggml |
| 简介 | Tensor library for machine learning |
| 语言 | C++ |
| 总 Star | 15877 |
| 今日新增 | 53 stars today |
| 标签 | C++、推理、张量库、机器学习、端侧 |

llama.cpp 背后的张量库本体独立仓，端侧推理的事实标准底座。+53 极低增量仍排第 8，排序与增量脱钩的极端样本，常青惯性上榜（最后推送 11-13）。

### 9. elementalsouls/Claude-BugHunter

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elementalsouls/Claude-BugHunter |
| 简介 | A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices. |
| 语言 | Python |
| 总 Star | 6284 |
| 今日新增 | 221 stars today |
| 标签 | Python、安全、技能包、红队、Claude |

Claude Code 安全技能包：82 个技能 + 15 个 slash 命令 + 681 个已披露报告模式，覆盖 24 类核心漏洞与企业身份/基础设施攻击矩阵。安全垂类技能包新面孔，今日有推送。

### 10. GoogleChrome/modern-web-guidance-src

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/GoogleChrome/modern-web-guidance-src |
| 简介 | Keep your coding agent up to date with the latest web best practices |
| 语言 | TypeScript |
| 总 Star | 7031 |
| 今日新增 | 1,220 stars today |
| 标签 | TypeScript、Chrome、最佳实践、Agent、前端 |

Google Chrome 团队为编码 Agent 提供最新 Web 最佳实践的规则源库。连续第五天在榜，今日 +1,220 为全榜增量王但仅排第 10，排序与增量脱钩再现。

### 11. tradermonty/claude-trading-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/tradermonty/claude-trading-skills |
| 简介 | Claude Code skills for equity investors and traders — market analysis, technical charting, economic calendars, screeners, and trading strategy development. |
| 语言 | Python |
| 总 Star | 5432 |
| 今日新增 | 707 stars today |
| 标签 | Python、技能包、量化、金融、Claude |

面向股票投资者与交易员的 Claude Code 技能包：市场分析、技术图表、经济日历、选股器与策略开发。垂类技能包持续上榜，今日仍有推送。

### 12. NVIDIA/SkillEvaluator

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/NVIDIA/SkillEvaluator |
| 简介 | Multi-tier framework for evaluating AI agent skills with quality gates, semantic overlap detection, synthetic evaluation dataset generation, and live agent evaluation that measures how skills affect agent behavior. |
| 语言 | Python |
| 总 Star | 1576 |
| 今日新增 | 205 stars today |
| 标签 | Python、评测、Agent、技能包、NVIDIA |

NVIDIA 官方技能评测框架：质量门禁、语义重叠检测、合成评测集生成，量化技能对 Agent 实际行为的影响。与技能包生产/分发/垂类各席同日上榜，技能生态闭环里补上了「评测」一环。

## 观察

- **技能包生态闭环成型**：Google 官方库（stitch-skills）+ 安全垂类（Claude-BugHunter）+ 金融垂类（claude-trading-skills）+ NVIDIA 评测框架（SkillEvaluator）四席同日，加上此前连榜的 plannotator/LoopForge，Agent 生态叙事从「执行/评审」扩展到「技能全生命周期」。
- **大厂密度回升**：6 席官方/大厂（Google×2、ChromeDevTools、阿里、腾讯、NVIDIA），个人项目仅 plannotator、Claude-BugHunter、claude-trading-skills 等垂类/独立席位。
- **排序与增量脱钩持续**：增量王 modern-web-guidance +1,220 仅排第 10；ggml +53 排第 8；榜首 univer +1,041 与第 2 ag-ui +393 差距明显，排序权重更看总体热度曲线。
- **时效标注**：stitch-skills 停更约 3 个月（最后推送 08-17）靠惯性上榜；ggml 最后推送 11-13（2 天）；其余 10 席今日均有推送。
- 周日缩量效应明显（15→12 条），但高留存（8/15）说明核心 Agent 基建项目的热度曲线比单点爆发型更稳。
