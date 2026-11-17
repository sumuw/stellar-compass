# GitHub daily趋势榜 2026-11-17

## 今日概览

今日榜单 15 席，较昨日持平；对 11-16 的 15 席留存 **10 席**，为近期高位。掉榜 5 席：claude-trading-skills、SkillEvaluator、chrome-devtools-mcp、jiangshan-map、ffmpeg-skill（昨日技能包/评测层小爆发回落）；新面孔 3 席：cursor/plugins、obra/superpowers、affaan-m/ECC；回归 2 席：Tencent/LoopForge（隔日回归）、jingyaogong/minimind（停更 21 天惯性回归）。

主题高度集中——**「Agent 交付链」一日成型**：监督层（plannotator 连续第四日）→ 编排层（LoopForge 人工审批门禁）→ 评审层（open-code-review）→ 协议层（ag-ui 连续第四日）→ 插件生态层（cursor/plugins 官方规范首次上榜）。叠加 5 个技能包席位（Claude-BugHunter、last30days、stitch-skills、superpowers、ECC），技能/框架赛道占 11 席，为历史峰值区间。

排序与增量继续脱钩：增量王 univer +1,776 只排第 5；ag-ui +1,444 排第 10；paper-orchestra +1,175 垫底第 15；榜首 Claude-BugHunter 仅 +1,007。大厂 5 席（Google×2、阿里、腾讯、Cursor 官方），中文项目 2 席（univer、minimind）。

## 重点项目

### 1. elementalsouls/Claude-BugHunter

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elementalsouls/Claude-BugHunter |
| 简介 | A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices. |
| 语言 | Python |
| 总 Star | 8,997 |
| 今日新增 | 1,007 stars today |
| 标签 | AI、安全、红队测试、Claude Code、渗透测试 |

安全垂类技能包登顶：82 个技能 + 15 个斜杠命令，把 681 个已披露漏洞报告模式浓缩成 24 大漏洞类别的可复用攻击/排查矩阵，还带企业身份与基础设施攻击面清单。连续第二日上榜即冲至榜首，「AI 红队」叙事持续放量。

### 2. mvanhorn/last30days-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mvanhorn/last30days-skill |
| 简介 | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary |
| 语言 | Python |
| 总 Star | 68,915 |
| 今日新增 | 772 stars today |
| 标签 | AI、Agent、信息检索、舆情分析、技能包 |

任意话题在 Reddit/X/YouTube/HN/Polymarket 五源近 30 天讨论的聚合检索与有据综述生成器，6.8 万星的话题研究垂类头部。连续第二日上榜，信息消费场景的技能包化仍在加速。

### 3. alibaba/open-code-review

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/alibaba/open-code-review |
| 简介 | Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible. |
| 语言 | Go |
| 总 Star | 53,649 |
| 今日新增 | 764 stars today |
| 标签 | 代码审查、LLM、Agent、Go、开发工具 |

阿里规模实战验证的混合架构审查工具：确定性规则管线 + LLM Agent 双轨，行级精准评论，内置 NPE/线程安全/XSS/SQL 注入多语言规则集，OpenAI/Anthropic 双兼容。三日内二度上榜，是「AI 审代码」主题里工程完成度最高的一席。

### 4. Tencent/LoopForge

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Tencent/LoopForge |
| 简介 | Self-hosted workflows for coding-agent delivery. Orchestrate CodeBuddy, Codex and Claude Code with scripts and human approval gates. Includes Local workflows for coding assistants. |
| 语言 | Go |
| 总 Star | 3,042 |
| 今日新增 | 590 stars today |
| 标签 | Agent、工作流、DevOps、Go、自动化 |

腾讯官方编码代理交付工作流：自托管编排 CodeBuddy/Codex/Claude Code，脚本化流水线 + 人工审批门禁，把「Agent 产出」变成「可控交付」。昨日掉榜今日即回归，企业侧 Agent 治理需求信号明确。

### 5. dream-num/univer

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/dream-num/univer |
| 简介 | Build your own AI office with Univer Office SDK. Bring editing, calculation, collaboration, and file processing into your product for people and AI agents. Built on an extensible open-source core. |
| 语言 | TypeScript |
| 总 Star | 28,841 |
| 今日新增 | 1,776 stars today |
| 标签 | 前端、SDK、办公协作、TypeScript、开源 |

今日增量王 +1,776 却只排第 5，脱钩再现。开源 Office SDK 把编辑/计算/协作/文件处理打包成可嵌入组件，明确面向「人类与 AI Agent 共用」的办公底座。连续第三日上榜且增量持续放大，国产项目在 AI 办公赛道卡位清晰。

### 6. getarcaneapp/arcane

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/getarcaneapp/arcane |
| 简介 | Modern Docker Management, Designed for Everyone |
| 语言 | Go |
| 总 Star | 9,252 |
| 今日新增 | 654 stars today |
| 标签 | Docker、容器管理、运维、DevOps、开源 |

面向所有人的现代化 Docker 管理面板，界面优先的容器运维方案。连续第二日上榜，今日仍在活跃推送，轻量容器运维的需求面稳定。

### 7. google-labs-code/stitch-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-labs-code/stitch-skills |
| 简介 | A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor. |
| 语言 | TypeScript |
| 总 Star | 10,045 |
| 今日新增 | 350 stars today |
| 标签 | Google、Agent Skills、MCP、前端、技能包 |

Google Labs 官方技能库，遵循 Agent Skills 开放标准、兼容 Antigravity/Gemini CLI/Claude Code/Cursor。⚠️ 最后推送 2026-08-17，停更 92 天仍凭官方背书惯性上榜，是「官方库长尾传播」的极端样本。

### 8. cursor/plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cursor/plugins |
| 简介 | Cursor plugin specification and official plugins |
| 语言 | TypeScript |
| 总 Star | 16,852 |
| 今日新增 | 196 stars today |
| 标签 | Cursor、IDE、插件系统、规范、AI 编程 |

Cursor 官方插件规范仓库首次上榜：AI 编辑器生态从「内置功能」走向「开放插件平台」的信号，+196 低位上榜说明是事件驱动（规范发布）而非惯性传播。

### 9. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 319,226 |
| 今日新增 | 598 stars today |
| 标签 | Agent、技能包、开发方法论、Shell、框架 |

总星 31.9 万、今日榜单总星第一的巨型技能框架：「头脑风暴 → 写计划 → TDD → 验证」的 Agent 开发方法论体系。⚠️ 最后推送 11-03（停更 14 天）仍保持近 600 日增，技能包赛道常青头部首次现身本榜。

### 10. ag-ui-protocol/ag-ui

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ag-ui-protocol/ag-ui |
| 简介 | AG-UI: the Agent-User Interaction Protocol. Bring Agents into Frontend Applications. |
| 语言 | TypeScript |
| 总 Star | 19,928 |
| 今日新增 | 1,444 stars today |
| 标签 | 协议、Agent、前端、TypeScript、标准化 |

Agent-前端交互协议标准，+1,444 日增全榜第二却只列第 10，脱钩极端再现。连续第四日上榜，前端集成 Agent 的协议层正在从「提案」走向「共识」。

### 11. backnotprop/plannotator

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/backnotprop/plannotator |
| 简介 | The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click. |
| 语言 | TypeScript |
| 总 Star | 13,016 |
| 今日新增 | 691 stars today |
| 标签 | Agent、代码审查、协作、前端、生产力 |

把「监督 Agent」做成工作台：规划、批注、审代码、团队共享，一键把反馈回传给 Agent。连续第四日上榜且日增回升，「人机协作监督层」从概念落成了产品形态。

### 12. sveltejs/svelte

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/sveltejs/svelte |
| 简介 | web development for the rest of us |
| 语言 | JavaScript |
| 总 Star | 89,555 |
| 今日新增 | 533 stars today |
| 标签 | 前端框架、JavaScript、开源、UI |

常青前端框架，无大事件惯性上榜，今日仍有活跃推送。编译时框架路线的代表选手。

### 13. affaan-m/ECC

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/affaan-m/ECC |
| 简介 | The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. |
| 语言 | JavaScript |
| 总 Star | 305,367 |
| 今日新增 | 902 stars today |
| 标签 | Agent、性能优化、Claude Code、记忆系统、工程纪律 |

新面孔即总星 30.5 万（全榜第二）：Agent harness 性能优化体系，「技能 + 本能 + 记忆 + 安全 + 研究先行」五层结构，横跨 Claude Code/Codex/Opencode/Cursor。+902 的增量配 30 万总星底座，是技能包赛道「头部巨型化」的最新样本。

### 14. jingyaogong/minimind

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/jingyaogong/minimind |
| 简介 | 🧠 Train a 64M-parameter LLM from scratch in just 2h! |
| 语言 | Python |
| 总 Star | 65,877 |
| 今日新增 | 188 stars today |
| 标签 | LLM、教育、PyTorch、开源、中文项目 |

2 小时从零训练 64M 参数小模型的中文教学标杆项目，LLM 入门首选之一。⚠️ 最后推送 10-27（停更 21 天）惯性回归，今日唯一中文项目席位。

### 15. google-research/paper-orchestra

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-research/paper-orchestra |
| 简介 | PaperOrchestra is a multi-agent framework for automated AI research paper writing. |
| 语言 | Python |
| 总 Star | 2,831 |
| 今日新增 | 1,175 stars today |
| 标签 | Google、多智能体、科研自动化、Agent、学术 |

Google Research 多智能体论文自动写作框架，+1,175 高增量却垫底第 15，为今日脱钩最极端样本。连续第二日上榜，「AI 科研自动化」叙事在学术工程圈持续发酵。

## 观察

1. **Agent 交付链一日集齐**：监督（plannotator）+ 编排审批（LoopForge）+ 评审（open-code-review）+ 交互协议（ag-ui）+ 插件生态（cursor/plugins）同日上榜，Agent 工程化从「单点工具」进入「链路整合」阶段。
2. **技能包赛道头部巨型化**：superpowers（31.9 万星）与 ECC（30.5 万星）两个 30 万+ 星巨型框架同日上榜，加上 3 个垂类技能包，赛道从「人人做技能」走向「头部集中」。
3. **中文项目 2 席均为各赛道标杆**：univer（AI 办公底座）连续放量，minimind（LLM 教学）停更仍惯性回归——中文开源的「长尾生命力」在榜单上表现稳定。
4. **脱钩持续且加剧**：增量前三（univer +1,776 / ag-ui +1,444 / paper-orchestra +1,175）分列 5/10/15 位，Trending 排序权重与社区热度进一步背离。
5. **时效标注 3 条**：stitch-skills 停更 92 天、minimind 停更 21 天、superpowers 停更 14 天，其余 12 席今日均有推送。
