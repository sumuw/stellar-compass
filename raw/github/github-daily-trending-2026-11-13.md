# GitHub daily趋势榜 2026-11-13

## 今日概览

今日榜单共 **12 个项目**（脚本 Box-row 解析同为 12），较昨日 13 席微降。对昨日 13 席留存仅 **3/13**（GoogleChrome/modern-web-guidance-src、openai/codex-security、we-promise/sure），掉榜 10 席（nvm、nodejs/node、llama.cpp、qwen-code、TensorFold、HermesEnabler、OpenBot、free-claude-code、agent-skills、astryx），为近两周最大换血日；新面孔 7 个（plannotator、uptime-kuma、buzz、tailcat、Veyra-NRVideo、chrome-devtools-mcp、claude-trading-skills），回归 2 席（alibaba/open-code-review 上次在榜 10-10、ZhuLinsen/daily_stock_analysis 上次在榜 11-12 前夜）。

语言分布：TypeScript 4、Go 2、Python 2、Ruby 1、JavaScript 1、Rust 1、C++ 1。中文项目 1 席（daily_stock_analysis 回归）。时效方面：tailscale/tailcat 最后推送 11-05（停更 8 天）、Likely7/Veyra-NRVideo 最后推送 11-11（2 天），其余 10 席今日（11-13）均有推送。

主题上，「AI 审代码 / Agent 工具链」叙事继续演化：阿里 open-code-review（确定性流水线 + LLM 混合架构代码评审）回归即登顶，ChromeDevTools/chrome-devtools-mcp（给编码 Agent 用的 Chrome 调试工具）携 5.5 万星入榜，加上 plannotator（Agent 工作区）、claude-trading-skills（Claude 技能包），Agent 周边工具占约半席。大厂/官方密度维持高位：Google 系两席（Chrome + DevTools 团队）、OpenAI、阿里两席、Block、Tailscale。排序与增量脱钩延续：榜首 open-code-review 仅 +206 星，而增量王 modern-web-guidance-src（+1,875）屈居第 2，+944 的 sure 排第 5、+324 的 tailcat 排第 10。

## 重点项目

### 1. alibaba/open-code-review

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/alibaba/open-code-review |
| 简介 | Secure, fast, efficient, battle-tested at Alibaba's scale. Hybrid architecture code review tool: deterministic pipelines + LLM Agent, precise line-level comments, built-in multi-language ruleset (NPE, thread-safety, XSS, SQL injection), OpenAI & Anthropic compatible. |
| 语言 | Go |
| 总 Star | 50,513 |
| 今日新增 | 206 stars today |
| 标签 | 代码评审、LLM Agent、Go、安全、阿里巴巴 |

阿里开源的混合架构代码评审工具：确定性规则流水线 + LLM Agent 双层设计，内置 NPE、线程安全、XSS、SQL 注入等跨语言规则集，产出精确到行的评论，兼容 OpenAI/Anthropic 接口。5 万星项目时隔一个月回归即空降榜首——但仅 +206 星，是排序权重加持与「AI 审代码」叙事合力的结果，今日仍有推送。

### 2. GoogleChrome/modern-web-guidance-src

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/GoogleChrome/modern-web-guidance-src |
| 简介 | Keep your coding agent up to date with the latest web best practices |
| 语言 | TypeScript |
| 总 Star | 4,676 |
| 今日新增 | 1,875 stars today |
| 标签 | Web、文档、Chrome、TypeScript、AI Agent |

Google Chrome 团队的「现代 Web 开发指南」源码仓库，连续第三日在榜，从榜首退至第 2，但今日 +1,875 为全榜增量王——总星两日翻倍逼近 5,000，传播仍在加速。目标受众直接写成 coding agent，「为 Agent 写文档」这一官方新姿势持续被市场验证。

### 3. openai/codex-security

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/openai/codex-security |
| 简介 | OpenAI's Codex Security CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities. npm: https://www.npmjs.com/package/@openai/codex-security |
| 语言 | TypeScript |
| 总 Star | 13,057 |
| 今日新增 | 754 stars today |
| 标签 | 安全、OpenAI、CLI、TypeScript、AI Agent |

OpenAI 官方的安全漏洞查找/验证/修复 CLI 与 SDK，连续第三日在榜（第 2→第 2→第 3），今日 +754，总星破 1.3 万。与榜首阿里 open-code-review 同框，「AI 审代码」赛道大厂对垒格局从 Web 文档延伸到安全与评审全链路，今日仍有推送。

### 4. ZhuLinsen/daily_stock_analysis

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ZhuLinsen/daily_stock_analysis |
| 简介 | LLM 驱动的多市场股票智能分析系统：多源行情、实时新闻、决策看板与自动推送，支持零成本定时运行。 LLM-powered multi-market stock analysis system with multi-source market data, real-time news, decision dashboard, automated notifications, and cost-free scheduled runs. |
| 语言 | Python |
| 总 Star | 71,510 |
| 今日新增 | 272 stars today |
| 标签 | LLM、股票分析、Python、数据分析、自动化 |

LLM 驱动的多市场股票智能分析系统，7.1 万星的中文头部项目，掉榜一日即回归。垂类 AI 应用（金融分析 + 零成本定时运行）的刚需属性使其具备较强的反复上榜能力，今日仍有推送。

### 5. we-promise/sure

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/we-promise/sure |
| 简介 | The personal finance app for everyone (by everyone) |
| 语言 | Ruby |
| 总 Star | 14,647 |
| 今日新增 | 944 stars today |
| 标签 | 个人财务、Ruby、社区共建、开源、生产力 |

社区共建记账应用，连续第四日在榜，今日 +944 为全榜增量第二，总星突破 1.4 万。「by everyone」的众包开发模式是最大卖点，与同榜的 daily_stock_analysis 形成「个人财务/理财」双席位，今日仍有推送。

### 6. backnotprop/plannotator

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/backnotprop/plannotator |
| 简介 | The workspace to stay in the loop and on top of agents - shape, decide, plan, annotate, review code, share with team, and send all feedback to agents with one click. |
| 语言 | TypeScript |
| 总 Star | 10,393 |
| 今日新增 | 100 stars today |
| 标签 | AI Agent、协作、TypeScript、开发工具、工作流 |

新面孔：一个面向「人类监督 Agent」的工作区——塑造、决策、规划、批注、审代码、团队共享，一键把反馈发回给 Agent。定位是 Agent 时代的人机协作指挥台，与本周「Agent 执行层资源栈」叙事互补（执行层之外补管理层），1 万星起步，今日仍有推送。

### 7. louislam/uptime-kuma

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/louislam/uptime-kuma |
| 简介 | A fancy self-hosted monitoring tool |
| 语言 | JavaScript |
| 总 Star | 93,803 |
| 今日新增 | 61 stars today |
| 标签 | 监控、自托管、JavaScript、运维、常青树 |

久违上榜的自托管监控工具常青树，9.4 万星、仅 +61 星排第 7，排序权重对老仓库扶持的又一极端样本。自托管/运维题材与 Agent 工具链并置，说明榜单口味仍有宽度，今日仍有推送。

### 8. block/buzz

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/block/buzz |
| 简介 | A hive mind communication platform |
| 语言 | Rust |
| 总 Star | 37,272 |
| 今日新增 | 95 stars today |
| 标签 | Rust、通信平台、Block、协作、Agent |

新面孔：Block（Square 母公司）开源的「蜂群思维通信平台」，Rust 实现，3.7 万星。面向多 Agent/多人之间的信息同步与协作通信，是本周「Agent 基建」叙事的通信层拼图，大厂官方出品，今日仍有推送。

### 9. tradermonty/claude-trading-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/tradermonty/claude-trading-skills |
| 简介 | Claude Code skills for equity investors and traders — market analysis, technical charting, economic calendars, screeners, and trading strategy development. |
| 语言 | Python |
| 总 Star | 4,098 |
| 今日新增 | 60 stars today |
| 标签 | Claude Skills、交易、Python、金融、AI Agent |

新面孔：面向股票投资者的 Claude Code 技能包——市场分析、技术图表、经济日历、选股器与交易策略开发。技能包赛道（本周末期仅剩 addyosmani 一席）换了个垂类方向回血，与同榜的 daily_stock_analysis 共同构成「AI + 金融」双席位，今日仍有推送。

### 10. tailscale/tailcat

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/tailscale/tailcat |
| 简介 | like netcat, but over Tailscale's data plane, without Tailscale's control plane |
| 语言 | Go |
| 总 Star | 9,390 |
| 今日新增 | 324 stars today |
| 标签 | 网络、Tailscale、Go、CLI、开发工具 |

新面孔：Tailscale 官方出品的 netcat 替代品——走 Tailscale 数据平面但无需其控制平面，跨网络调试利器。+324 星排第 10，官方新工具的传播起步信号；注意最后推送 11-05（停更 8 天），属发布后惯性上榜。

### 11. Likely7/Veyra-NRVideo

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Likely7/Veyra-NRVideo |
| 简介 | Bring PS5 GTA6 to 120FPS with DLSS 5. An advanced Windows video player and capture enhancement tool featuring real-time preview for videos, images, and capture card sources. Combine AI-powered Super Resolution, DLSS5 image enhancement, and Frame Generation to deliver a next-generation visual experience. |
| 语言 | C++ |
| 总 Star | 1,574 |
| 今日新增 | 245 stars today |
| 标签 | 视频增强、DLSS、C++、Windows、游戏画面 |

新面孔：Windows 平台视频播放/采集增强工具，主打 AI 超分 + DLSS5 画质增强 + 帧生成，「PS5 GTA6 冲 120FPS」的宣传语抓眼球。1,574 星的小项目靠 +245 增量进榜，个人作者的传播型题材，最后推送 11-11。

### 12. ChromeDevTools/chrome-devtools-mcp

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ChromeDevTools/chrome-devtools-mcp |
| 简介 | Chrome DevTools for coding agents |
| 语言 | TypeScript |
| 总 Star | 55,393 |
| 今日新增 | 145 stars today |
| 标签 | Chrome DevTools、MCP、TypeScript、AI Agent、调试 |

新面孔：Chrome DevTools 官方团队的 MCP 服务器——把浏览器调试能力（性能、网络、DOM 检查）开放给编码 Agent。5.5 万星的重仓项目，与同日 Google Chrome 的 modern-web-guidance 形成官方双子星，「Chrome 全家桶为 Agent 开放」是今日最强信号，今日仍有推送。

## 观察

1. **大换血 + 官方主导**：对昨日 13 席仅留存 3 席为近两周最大换血；换上的新面孔中官方/大厂占 6 席（Google Chrome 双仓、OpenAI、阿里双仓、Block、Tailscale、ChromeDevTools），个人头部作者几乎清场（仅 tradermonty、Likely7 等垂类/传播型项目）。
2. **「AI 审代码」三线并进**：阿里 open-code-review（评审）、OpenAI codex-security（安全）、ChromeDevTools chrome-devtools-mcp（调试）分别占据工程链路的不同环节，加上 plannotator（人监督 Agent）与 buzz（Agent 间通信），Agent 工具链从「执行」向「评审、监督、通信」全链路外溢。
3. **Chrome 官方双子星**：modern-web-guidance-src（连续三日、增量王 +1,875）与 chrome-devtools-mcp（5.5 万星新面孔）同日上榜，Google 两个团队分别从「知识供给」和「工具供给」两个方向拥抱 coding agent。
4. **脱钩极端再现**：榜首 open-code-review 仅 +206，+1,875 的增量王排第 2，+944 排第 5，+324 排第 10——排序权重与日增的相关性持续失效，读榜需同时看两列。
5. **金融 + AI 双席位**：daily_stock_analysis（7.1 万星中文项目）与 claude-trading-skills（Claude 技能包）同框，个人理财赛道再加 sure（+944）合计三席，垂类刚需题材热度上探。
