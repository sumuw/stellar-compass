# GitHub 每日趋势榜 2026-11-05

## 今日概览

今日共 15 条（回查 GitHub Trending 页面 `Box-row` 计数同为 15），日增合计 13,276。对比基期 11-04 的 16 席：留住 9 席（auto-ontology、mattpocock/skills、gstack、Scrapling、agent-desktop、worktrunk、scenario-labs/skills、floci、DiscImageStudio），7 席掉榜（claude-mem、spec-kit、pr-agent、MoneyPrinterTurbo、kimi-k3-in-c、90DaysOfDevOps、Horizon），新入 5 席（lz4/lz4、google/skills、agent-browser、garden-skills、VibeVoice），1 席回归（ai-goofish-monitor，11-03 曾在榜）。留存率 9/16 为近期最高，榜单进入「留存型」格局。

语言分布：**Python 6 席第一**，Rust 3 席（agent-desktop、agent-browser、worktrunk），Shell、TypeScript、C、Java、C#、JavaScript 各 1 席。

今天最值得注意的信号有三条：

1. **「技能包」赛道占榜 5 席，Google 官方入场。** mattpocock/skills（315k）、gstack（139k，YC 掌门人）、scenario-labs/skills（Scenario 官方）、garden-skills（ConardLi 中文技能包）之外，Google 官方 skills 仓库（22k）今日首次入榜 —— 继 NVIDIA、GitHub、Vercel、Spotify 之后又一家大厂官方占位，「公开 agent 配置」赛道彻底从个人玩法升级为官方竞技场。
2. **Vercel「computer use 双子星」同榜。** agent-desktop（+2,173）连续第三天增量前列仍只排第 6，agent-browser（45k 星）同日入榜 —— 桌面控制 + 浏览器自动化组成完整 Agent 基建矩阵，当天两仓均有推送。
3. **排序与日增脱钩出现最极端样本。** lz4/lz4 今日仅 +16 星却排在第 8（2014 年老牌 C 项目、当天有推送，疑似新版发布带动回流）；增量第二 agent-desktop（+2,173）排第 6、增量第三 Scrapling（+1,661）排第 5 —— 名次与日增量依旧无关，读榜时不要拿名次当天增量用。

## 重点项目

### 1. NVIDIA/auto-ontology

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/NVIDIA/auto-ontology |
| 简介 | Auto Ontology is a Python framework for building semantic, graph-based reasoning layers over data. It enables deterministic query generation, better context retrieval, and more explainable AI for LLM and agent workflows. |
| 语言 | Python |
| 总 Star | 7,110 |
| 今日新增 | 2,707 stars today |
| 标签 | 本体、知识图谱、语义推理、LLM、Python |

NVIDIA 官方的语义层框架：在数据之上构建图结构推理层，为 LLM/Agent 工作流提供确定性查询生成与可解释性。连续第三天霸榜榜首，总星从 4,658 涨到 7,110，今天 +2,707 仍为增量第一，当天有推送。

### 2. mattpocock/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mattpocock/skills |
| 简介 | Skills for Real Engineers. Straight from my .agents directory. |
| 语言 | Shell |
| 总 Star | 315,014 |
| 今日新增 | 2,053 stars today |
| 标签 | AI、技能包、Shell、工程实践、Claude |

Matt Pocock（Total TypeScript 作者）公开的个人 .agents 技能目录，315,014 星为全榜总星第一。连续第三天在榜，技能包赛道头部地位稳固，Google 官方入场后头部竞争升级。

### 3. garrytan/gstack

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/garrytan/gstack |
| 简介 | Use Garry Tan's exact Claude Code setup: 23 opinionated tools that serve as CEO, Designer, Eng Manager, Release Manager, Doc Engineer, and QA |
| 语言 | TypeScript |
| 总 Star | 139,873 |
| 今日新增 | 608 stars today |
| 标签 | Claude Code、技能包、Agent、TypeScript、名人配置 |

Y Combinator 掌门人 Garry Tan 公开自己的 Claude Code 配置：23 个工具分别扮演 CEO、设计师、工程经理、发布经理、文档工程师和 QA。连续第二天在榜，与 mattpocock/skills 的名人技能包对垒延续。

### 4. Usagi-org/ai-goofish-monitor

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Usagi-org/ai-goofish-monitor |
| 简介 | 基于 Playwright 和AI实现的闲鱼多任务实时/定时监控与智能分析系统，配备了功能完善的后台管理UI。帮助用户从闲鱼海量商品中，找到心仪产品。 |
| 语言 | Python |
| 总 Star | 17,480 |
| 今日新增 | 242 stars today |
| 标签 | 闲鱼、监控、Playwright、AI分析、中文 |

基于 Playwright + AI 的闲鱼多任务实时/定时监控与智能分析系统，配后台管理 UI，帮用户从海量商品中找心仪产品。11-03 曾在榜、昨日掉榜、今日回归。⚠️ 最后推送 2026-10-10，已约 26 天未更新，靠惯性传播在榜。

### 5. D4Vinci/Scrapling

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/D4Vinci/Scrapling |
| 简介 | 🕷️ The BEST Web Scraping framework that handles everything from a single request to a full-scale crawl! Don't be shy, join here: https://discord.gg/EMgGbDceDQ and follow here for daily tips and tricks: https://x.com/Scrapling_dev |
| 语言 | Python |
| 总 Star | 97,832 |
| 今日新增 | 1,661 stars today |
| 标签 | 爬虫、数据采集、反爬对抗、Python、框架 |

自适应选择器 + 反爬对抗的爬虫框架，覆盖从单请求到全站爬取。连续第三天在榜，今天 +1,661 是增量第四；97,832 星，当天有推送。

### 6. vercel-labs/agent-desktop

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/vercel-labs/agent-desktop |
| 简介 | Computer use CLI for AI agents |
| 语言 | Rust |
| 总 Star | 16,690 |
| 今日新增 | 2,173 stars today |
| 标签 | Agent、桌面控制、computer use、Rust、Vercel |

Vercel 官方实验室的 computer use CLI，让 AI agent 直接操作桌面。连续第三天为全榜增量王之一（今天 +2,173 仅次于 auto-ontology），却只排第 6 —— 排序与日增脱钩的极端样本，当天有推送。

### 7. max-sixty/worktrunk

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/max-sixty/worktrunk |
| 简介 | Worktrunk is a CLI for Git worktree management, designed for parallel AI agent workflows |
| 语言 | Rust |
| 总 Star | 11,451 |
| 今日新增 | 546 stars today |
| 标签 | Git、worktree、CLI、Rust、Agent |

面向并行 AI agent 工作流的 Git worktree 管理 CLI，把「一个 agent 一棵 worktree」做成开箱即用。连续第四天在榜，总星 11,451 破万后继续走高，慢热留存型条目。

### 8. lz4/lz4

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/lz4/lz4 |
| 简介 | Extremely Fast Compression algorithm |
| 语言 | C |
| 总 Star | 12,338 |
| 今日新增 | 16 stars today |
| 标签 | 压缩算法、C、高性能、存储、经典项目 |

以极致速度著称的 LZ4 无损压缩算法，2014 年创建的老牌 C 项目。今天仅 +16 星却排在第 8，是「排序与日增脱钩」最极端的一例；当天有推送，疑似新版发布带动榜单回流。

### 9. google/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google/skills |
| 简介 | Agent Skills for Google products and technologies |
| 语言 | Python |
| 总 Star | 22,302 |
| 今日新增 | 199 stars today |
| 标签 | 技能包、Google官方、Agent Skills、Python、大厂官方 |

Google 官方入场技能包赛道：面向 Google 产品与技术栈的 Agent Skills 集合。22,302 星、+199，当天有推送 —— 继 NVIDIA、GitHub、Vercel、Spotify 之后又一家大厂官方占位，技能包赛道彻底官方化。

### 10. vercel-labs/agent-browser

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/vercel-labs/agent-browser |
| 简介 | Browser automation CLI for AI agents |
| 语言 | Rust |
| 总 Star | 45,804 |
| 今日新增 | 181 stars today |
| 标签 | Agent、浏览器自动化、CLI、Rust、Vercel |

Vercel 官方的浏览器自动化 CLI，与 agent-desktop 组成「桌面 + 浏览器」computer use 双子星，45,804 星。当天有推送，Vercel 两件套同榜是其 Agent 基建矩阵的集中展示。

### 11. scenario-labs/skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/scenario-labs/skills |
| 简介 | Get production-ready images, video, audio, and 3D from any AI agent: skills that pick the right model, price before spending, and keep characters and brands consistent through the Scenario MCP, plus expert teams that drive Blender, Maya, ZBrush, Unreal, and Unity. |
| 语言 | Python |
| 总 Star | 2,976 |
| 今日新增 | 674 stars today |
| 标签 | MCP、媒体生成、AIGC、Python、3D |

Scenario 官方技能包：让任意 AI agent 直接产出图片/视频/音频/3D，先选模型再估价，通过 Scenario MCP 保持角色与品牌一致性，另附驱动 Blender/Maya/ZBrush/Unreal/Unity 的专家团队。连续第二天在榜。

### 12. ConardLi/garden-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/ConardLi/garden-skills |
| 简介 | ConardLi's open-source Skills collection, featuring web design, knowledge retrieval, image generation, and more. |
| 语言 | JavaScript |
| 总 Star | 14,078 |
| 今日新增 | 241 stars today |
| 标签 | 技能包、中文、AIGC、JavaScript、开源集锦 |

ConardLi（前端知名博主）的开源 Skills 集合，涵盖网页设计、知识检索、图像生成等方向。14,078 星、+241，中文技能包新面孔；⚠️ 最后推送 2026-10-25，约 11 天未更新。

### 13. microsoft/VibeVoice

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/microsoft/VibeVoice |
| 简介 | Open-Source Frontier Voice AI |
| 语言 | Python |
| 总 Star | 55,781 |
| 今日新增 | 214 stars today |
| 标签 | 语音AI、TTS、Microsoft、开源模型、Python |

微软开源的前沿语音 AI（TTS/语音生成），55,781 星常青项目。今天 +214 回归榜单。⚠️ 最后推送 2026-10-08，已约 28 天未更新，靠惯性传播在榜。

### 14. floci-io/floci

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/floci-io/floci |
| 简介 | Light, fluffy, and always free - The AWS Local Emulator alternative |
| 语言 | Java |
| 总 Star | 30,324 |
| 今日新增 | 784 stars today |
| 标签 | AWS、本地模拟、Java、云开发、测试 |

轻量免费的 AWS 本地模拟器（LocalStack 替代），主打零配置本地起服务。连续第四天在榜，总星 30,324，当天有推送，慢热留存型条目。

### 15. JiaFeiMiao-K-Cat/DiscImageStudio

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/JiaFeiMiao-K-Cat/DiscImageStudio |
| 简介 | 全能的光盘盘面可见图像生成与刻录工具：用刻录光驱在 DVD / CD / 单层蓝光盘上刻蚀出肉眼可见的图像（多平台，C#/.NET 10，GPL-3.0）。（仓库未填写简介，此段来自 README） |
| 语言 | C# |
| 总 Star | 7,202 |
| 今日新增 | 977 stars today |
| 标签 | 光盘刻录、图像生成、C#、.NET、创意工具 |

全能的光盘盘面可见图像生成与刻录工具：用刻录光驱在 DVD/CD/单层蓝光盘上刻蚀出肉眼可见的图像（中文项目，GPL-3.0）。连续第二天在榜，总星 6,453 → 7,202，当天有推送。

## 观察

**一、留存 9/16 为近期最高，榜单进入「留存型」格局。** 11-04 的 16 席留住 9 席，掉榜 7 席中 claude-mem 结束了自 11-01 榜首起的连续五天在榜；kimi-k3-in-c、90DaysOfDevOps 两个停更项目掉榜符合预期。留存的 9 席当天全部有推送，「当天在推」仍是最强留存预测因子。

**二、技能包赛道 5 席同榜、Google 官方入场，赛道彻底官方化。** mattpocock/skills（315k，总星第一）、gstack（139k）、google/skills（22k，Google 官方）、scenario-labs/skills（Scenario 官方）、garden-skills（中文）—— 五席横跨个人作者、名人、大厂官方、垂类官方、中文社区，「公开 agent 配置」已从流量密码演化为生态标准位。

**三、Vercel Agent 基建矩阵成型。** agent-desktop（连续三天增量前列）与 agent-browser（45k 星）同榜，桌面控制 + 浏览器自动化双 CLI 覆盖 computer use 两大场景，两仓当天均活跃推送。

**四、⚠️ 三个需标注时效的条目。** ai-goofish-monitor 最后推送 2026-10-10（约 26 天未更新）、VibeVoice 最后推送 2026-10-08（约 28 天未更新）、garden-skills 最后推送 2026-10-25（约 11 天未更新）—— 三者均靠惯性传播在榜。

**五、排序与日增脱钩的最极端样本出现。** lz4 今日仅 +16 星排第 8，而增量第二的 agent-desktop（+2,173）排第 6、DiscImageStudio（+977）垫底第 15 —— GitHub Trending 的排序因子显然不只当日增量，读榜时名次与增量必须分开看。

**六、中文项目 3 席。** DiscImageStudio（光盘刻录图像，+977）、ai-goofish-monitor（闲鱼监控，回归）、garden-skills（中文技能包，新入）。
