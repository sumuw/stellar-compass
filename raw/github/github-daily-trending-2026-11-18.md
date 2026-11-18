# GitHub daily趋势榜 2026-11-18

## 今日概览

今日榜单 20 席，较昨日 15 席明显放量（脚本回查页面 Box-row 计数同为 20）。对 11-17 的 15 席留存 **9 席**（Claude-BugHunter、cursor/plugins、last30days-skill、arcane、paper-orchestra、stitch-skills、svelte、superpowers、ECC）；掉榜 6 席：open-code-review、LoopForge、univer、ag-ui、plannotator、minimind（昨日「Agent 交付链」五席一日退潮）；回归 3 席：NVIDIA/SkillEvaluator（11-16 后重现）、nvm-sh/nvm（常青树）、jiangshan-map（隔日回归）；新面孔 8 席。

主题出现本月第二次「**经典基建大盘回归**」：nvm、uv、jquery、svelte、appwrite、openvino、n8n、solid、awesome-mcp-servers 等常青树/成熟平台集体回榜，AI 新贵占比降至约一半，与 11-07 那次换棒呼应。技能包赛道仍守 6 席（Claude-BugHunter、last30days-skill、SkillEvaluator、stitch-skills、superpowers、ECC），其中 NVIDIA 评测层与 Google 官方技能库同日回归，「生产 → 分发 → 垂类 → 评测」链条闭合。

**今日最反常的信号是榜首与增量王重合**：Claude-BugHunter +2,322 登顶，打破近期「增量王屈居后排」的脱钩常态；但 paper-orchestra +1,529 排第 9、ECC +1,109 排第 16、last30days +1,062 排第 4，脱钩仍在另一端延续。低增量高排位同样极端：openvino +18 排第 14、solid +37 排第 19、awesome-mcp-servers +52 排第 20。大厂/官方 6 席（NVIDIA、Google×2、Intel/OpenVINO、Cursor、港大 HKUDS），中文背景项目 2 席（jiangshan-map、HKUDS/CLI-Anything）。语言 Python 5、TypeScript 5、JavaScript 4、Shell 2，Go/Rust/C++/Unknown 各 1。

## 重点项目

### 1. elementalsouls/Claude-BugHunter

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elementalsouls/Claude-BugHunter |
| 简介 | A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices. |
| 语言 | Python |
| 总 Star | 11,183 |
| 今日新增 | 2,322 stars today |
| 标签 | AI、安全、红队测试、Claude Code、技能包 |

安全垂类技能包连续第三日上榜并登顶，+2,322 为今日增量王，榜首与增量王罕见重合。82 个技能 + 15 个斜杠命令，把 681 个已披露漏洞报告模式浓缩成 24 大漏洞类别的可复用攻击/排查矩阵，还带企业身份与基础设施攻击面清单。

### 2. cursor/plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cursor/plugins |
| 简介 | Cursor plugin specification and official plugins |
| 语言 | TypeScript |
| 总 Star | 17,158 |
| 今日新增 | 315 stars today |
| 标签 | Cursor、IDE、插件系统、AI 编程、TypeScript |

Cursor 官方插件规范仓库连续第二日上榜、排名升至第 2。AI 编辑器生态从「内置功能」走向「开放插件平台」，+315 的低位增量说明是规范发布后的持续传播而非单点爆发。

### 3. HKUDS/CLI-Anything

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/CLI-Anything |
| 简介 | "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/ |
| 语言 | Python |
| 总 Star | 59,627 |
| 今日新增 | 384 stars today |
| 标签 | Agent、CLI、工具化、Python、开源 |

港大 HKUDS 团队新面孔，主张「让一切软件 Agent-Native」——把传统软件封装成 CLI 供 Agent 调用，配套 CLI-Hub 索引站。近 6 万星却仅 +384，且最后推送停在 09-22（停更约 57 天），属长尾惯性上榜。

### 4. mvanhorn/last30days-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mvanhorn/last30days-skill |
| 简介 | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary |
| 语言 | Python |
| 总 Star | 69,901 |
| 今日新增 | 1,062 stars today |
| 标签 | AI、Agent、信息检索、舆情分析、技能包 |

任意话题在 Reddit/X/YouTube/HN/Polymarket 五源近 30 天讨论的聚合检索与有据综述生成器，6.9 万星的话题研究垂类头部，连续第三日上榜且 +1,062 保持放量。

### 5. getarcaneapp/arcane

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/getarcaneapp/arcane |
| 简介 | Modern Docker Management, Designed for Everyone |
| 语言 | Go |
| 总 Star | 9,762 |
| 今日新增 | 547 stars today |
| 标签 | Docker、容器管理、运维、DevOps、Go |

面向所有人的现代化 Docker 管理面板，界面优先的轻量容器运维方案，连续第三日上榜且今日仍有活跃推送，需求面稳定。

### 6. NVIDIA/SkillEvaluator

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/NVIDIA/SkillEvaluator |
| 简介 | Multi-tier framework for evaluating AI agent skills and plugins with quality gates, semantic overlap detection, synthetic evaluation dataset generation, and live agent evaluation that measures how skills affect agent behavior. |
| 语言 | Python |
| 总 Star | 3,657 |
| 今日新增 | 323 stars today |
| 标签 | AI、评测框架、Agent Skills、NVIDIA、质量门禁 |

NVIDIA 官方技能评测框架隔日回归（11-16 曾上榜）：分层质量门禁、语义重叠检测、合成评测集生成、实测技能对 Agent 行为的影响，为「技能包赛道」补上评测层。

### 7. nvm-sh/nvm

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nvm-sh/nvm |
| 简介 | Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions. |
| 语言 | Shell |
| 总 Star | 96,145 |
| 今日新增 | 111 stars today |
| 标签 | Node.js、版本管理、Shell、开发工具、常青树 |

Node 版本管理常青树回归，POSIX bash 脚本管理多版本 Node.js，9.6 万星 +111 低位上榜，无大事件惯性传播。

### 8. astral-sh/uv

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/astral-sh/uv |
| 简介 | An extremely fast Python package and project manager, written in Rust. |
| 语言 | Rust |
| 总 Star | 92,199 |
| 今日新增 | 260 stars today |
| 标签 | Python、包管理、Rust、开发工具、高性能 |

Rust 编写的极速 Python 包/项目管理器，9.2 万星，本轮「经典基建回归」中工程完成度最高的一席，今日仍有活跃推送。

### 9. google-research/paper-orchestra

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-research/paper-orchestra |
| 简介 | PaperOrchestra is a multi-agent framework for automated AI research paper writing. |
| 语言 | Python |
| 总 Star | 4,169 |
| 今日新增 | 1,529 stars today |
| 标签 | Google、多智能体、科研自动化、Agent、学术 |

Google Research 多智能体论文自动写作框架连续第三日上榜，+1,529 为今日增量第二却仅排第 9，脱钩延续；最后推送 11-15（停更 3 天）。

### 10. google-labs-code/stitch-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-labs-code/stitch-skills |
| 简介 | A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor. |
| 语言 | TypeScript |
| 总 Star | 10,372 |
| 今日新增 | 369 stars today |
| 标签 | Google、Agent Skills、MCP、前端、技能包 |

Google Labs 官方技能库，遵循 Agent Skills 开放标准、兼容 Antigravity/Gemini CLI/Claude Code/Cursor。此前长期停更（约 92 天）仍惯性上榜，⚠️ 今日 11-18 05:00 恢复推送，是官方库长尾传播里首个重新激活的样本。

### 11. sveltejs/svelte

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/sveltejs/svelte |
| 简介 | web development for the rest of us |
| 语言 | JavaScript |
| 总 Star | 89,739 |
| 今日新增 | 694 stars today |
| 标签 | 前端框架、JavaScript、UI、编译、开源 |

常青前端框架，编译时路线的代表选手，无大事件惯性上榜但今日仍有活跃推送，+694 在常青树里属放量。

### 12. jquery/jquery

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/jquery/jquery |
| 简介 | jQuery JavaScript Library |
| 语言 | JavaScript |
| 总 Star | 60,003 |
| 今日新增 | 268 stars today |
| 标签 | JavaScript、前端库、DOM、常青树、开源 |

前端元老级 DOM 库在本轮「经典基建回归」中罕见现身，6 万星 +268，属于典型的长尾惯性传播而非新事件。

### 13. appwrite/appwrite

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/appwrite/appwrite |
| 简介 | The open-source cloud for agents & devs. Including Auth, Databases, Storage, Functions, Messaging, Hosting, Realtime, WAF and more |
| 语言 | TypeScript |
| 总 Star | 58,199 |
| 今日新增 | 239 stars today |
| 标签 | BaaS、后端、TypeScript、开源、Agent |

开源后端云（Auth/Database/Storage/Functions/Realtime/WAF 一体），本轮把定位改成「面向 Agent 与开发者的开源云」，5.8 万星 +239，是基建回归里唯一明确绑定 Agent 叙事的一席。

### 14. openvinotoolkit/openvino

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/openvinotoolkit/openvino |
| 简介 | OpenVINO™ is an open source toolkit for optimizing and deploying AI inference |
| 语言 | C++ |
| 总 Star | 11,301 |
| 今日新增 | 18 stars today |
| 标签 | AI 推理、模型优化、C++、Intel、边缘计算 |

Intel 开源 AI 推理优化与部署工具包，+18 为全榜最低增量却仍进前 14，是今日「排序与增量脱钩」最极端样本；C++ 为今日唯一该语言席位。

### 15. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 319,953 |
| 今日新增 | 823 stars today |
| 标签 | Agent、技能框架、开发方法论、Shell、开源 |

总星约 32 万、全榜总星第一的巨型技能框架，「头脑风暴 → 写计划 → TDD → 验证」的 Agent 开发方法论体系。⚠️ 最后推送 11-03（停更 15 天）仍保持 +823 日增，头部惯性依旧。

### 16. affaan-m/ECC

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/affaan-m/ECC |
| 简介 | The agent harness performance optimization system. Skills, instincts, memory, security, and research-first development for Claude Code, Codex, Opencode, Cursor and beyond. |
| 语言 | JavaScript |
| 总 Star | 306,401 |
| 今日新增 | 1,109 stars today |
| 标签 | Agent、性能优化、Claude Code、记忆系统、JavaScript |

总星 30.6 万（全榜第二）的 Agent harness 性能优化体系，「技能 + 本能 + 记忆 + 安全 + 研究先行」五层结构，横跨 Claude Code/Codex/Opencode/Cursor，+1,109 排第 16 仍脱钩。

### 17. DeanChensj/jiangshan-map

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/DeanChensj/jiangshan-map |
| 简介 | 江山时序 · 中国历史交互地图时间轴 (403 BCE – Present) | Interactive Historical Atlas of China across 18 dynasties, 198 territory snapshots, ancient-to-modern place genealogy & classical poetry routes |
| 语言 | JavaScript |
| 总 Star | 7,904 |
| 今日新增 | 280 stars today |
| 标签 | 数据可视化、历史地图、JavaScript、中文项目、数字人文 |

「江山时序」中国历史交互地图时间轴（公元前 403 年至今，18 朝代、198 幅疆域快照、古今地名谱系与古典诗词路线），昨日掉榜今日即回归，是榜单上罕见的中文数字人文项目。

### 18. n8n-io/n8n

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/n8n-io/n8n |
| 简介 | Fair-code workflow automation platform with native AI capabilities. Combine visual building with custom code, self-host or cloud, 400+ integrations. |
| 语言 | TypeScript |
| 总 Star | 211,009 |
| 今日新增 | 315 stars today |
| 标签 | 工作流自动化、AI、TypeScript、开源、集成 |

fair-code 工作流自动化平台，可视化编排 + 自定义代码、400+ 集成、原生 AI 能力，21 万星，本轮经典基建回归中体量最大的一席之一。

### 19. solidjs/solid

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/solidjs/solid |
| 简介 | A declarative, efficient, and flexible JavaScript library for building user interfaces. |
| 语言 | TypeScript |
| 总 Star | 36,535 |
| 今日新增 | 37 stars today |
| 标签 | 前端框架、响应式、TypeScript、UI、开源 |

声明式细粒度响应式 UI 库，+37 为全榜倒数第二增量却仍上榜，与 openvino 一同构成今日排序权重与社区热度背离的样本。

### 20. punkpeye/awesome-mcp-servers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/punkpeye/awesome-mcp-servers |
| 简介 | A collection of MCP servers. |
| 语言 | Unknown |
| 总 Star | 97,989 |
| 今日新增 | 52 stars today |
| 标签 | MCP、Agent、资源清单、开源、生态 |

MCP Server 资源合集，9.8 万星 +52，属「MCP 生态清单」类 long-tail 常青条目，语言字段为 Unknown，今日仍在维护推送。

## 观察

1. **经典基建大盘本月第二次回归**：20 席中 9 席为 nvm/uv/jquery/svelte/solid/appwrite/openvino/n8n/awesome-mcp-servers 等常青树或成熟平台，AI 新贵占比降至约一半，与 11-07 那次「13 席常青树、AI 新贵几乎清场」形成一个月内第二次换棒。
2. **技能包赛道头部巨型化 + 官方评测层固化**：superpowers（约 32 万星）、ECC（30.6 万星）两个 30 万+ 巨型框架继续在榜，NVIDIA SkillEvaluator（评测）与 Google stitch-skills（官方库）同日回归，生产 → 分发 → 垂类 → 评测的链条完全闭合；安全垂类 Claude-BugHunter 单日 +2,322 登顶，是本赛道今日最强增量。
3. **榜首与增量王罕见重合**：Claude-BugHunter +2,322 排第 1，打破近期「增量王屈居后排」的定式；但 paper-orchestra +1,529 排第 9、ECC +1,109 排第 16，脱钩在另一端延续。低增量高排位同样极端：openvino +18 排第 14、solid +37 排第 19——Trending 排序权重与社区热度的背离在本期同时出现在头部与尾部。
4. **stitch-skills 恢复推送**：此前长期停更（约 92 天）仍惯性上榜，今日 11-18 05:00 有新推送，是「官方库长尾传播」里首个重新激活的样本，下期看是否延续放量。
5. **中文项目 2 席、时效标注 3 条**：jiangshan-map（数字人文）隔日回归、HKUDS/CLI-Anything（港大）新入榜；⚠️ CLI-Anything 停更约 57 天、superpowers 停更 15 天、paper-orchestra 停更 3 天，其余 17 席近 1-2 天均有推送。
