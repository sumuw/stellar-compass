---
title: GitHub 每日趋势榜 2026-11-25
description: 2026-11-25 GitHub Trending 榜首为 elementalsouls/Claude-BugHunter，当日共收录 16 个项目。
date: '2026-11-25'
rankingKey: '2026-11-25'
slug: github-daily-2026-11-25
categories:
  - github
periods:
  - daily
tags:
  - GitHub
  - 开源
  - 趋势
draft: false
---

## 今日概览

2026-11-25 的 GitHub 每日趋势榜共 **16 席**，名单与名次与 11-24 期完全一致——继 11-20、11-23、11-24 之后**连续第四次「零换血 + 零换位」**，同一批项目锁死前 16 名已达四期，技能包 / 中文工具 / 经典基建三线格局进一步固化。全天 16 席合计新增 **12,396 star**（上一期 12,241，微升约 **1.3%**），增量总额在 1.2 万台阶上趋于平稳。技能与 Agent 方法论相关项目仍占 **7 席**（Claude-BugHunter、superpowers、CLI-Anything、diagram-design、last30days-skill、stitch-skills、app-store-compliance），覆盖安全漏洞、开发方法论、Agent-Native CLI、设计规范、话题研究、UI 设计与合规审查。榜首 Claude-BugHunter +1,644 蝉联增量第一（较 11-24 的 +1,833 回落约 10%）；diagram-design 从 +794 放量至 **+1,133（约 +43%）**跃居增量第二，firecrawl +1,131 紧随其后。中文项目 **4 席**（minimind、AFFiNE、Ghost-Downloader-3、autoclip），合计 +3,224，占全天增量约 **26%**。nginx 与 Intel OpenVINO 继续以 +174 / +188 垫底脱钩。时效提示：superpowers 最后推送更新到 11-24，**结束此前约 21 天的停更**；CLI-Anything 停在 11-20，minimind 停在 11-23，其余 13 席在 11-24/11-25 有推送。

## 重点项目

### 1. elementalsouls/Claude-BugHunter

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elementalsouls/Claude-BugHunter |
| 简介 | A Claude Code skill bundle for bug hunting and external red-team work - 84 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices. |
| 语言 | Python |
| 总 Star | 22,819 |
| 今日新增 | 1,644 stars today |
| 标签 | Claude Code、Agent Skills、安全、漏洞挖掘、红队 |

把 84 个技能、15 条斜杠命令与 681 个真实披露漏洞模式打包成 Claude Code 漏洞挖掘工具集，覆盖 24 类核心漏洞与企业身份/基础设施攻击矩阵。今日 +1,644 较 11-24 的 +1,833 回落约 10%，但仍蝉联榜首兼增量第一，11-25 有新推送。

### 2. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 326,527 |
| 今日新增 | 902 stars today |
| 标签 | Agent Skills、开发方法论、Shell、工作流、开源框架 |

以 Shell 实现的 agentic 技能框架与软件开发方法论，32.7 万总星为全榜最大体量。今日 +902 较 11-24 的 +1,006 回落约 10%，排第 2 但增量仅列第 7；关键是仓库最后推送已更新到 11-24，结束此前约 21 天的停更。

### 3. HKUDS/CLI-Anything

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/CLI-Anything |
| 简介 | "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/ |
| 语言 | Python |
| 总 Star | 65,597 |
| 今日新增 | 1,094 stars today |
| 标签 | Agent-Native、CLI、自动化、Python、HKUDS |

港大团队项目，主张把任意软件改造成 Agent 原生可调用的 CLI，并配套 CLI-Hub 分发入口。今日 +1,094 与 11-24 的 +1,075 基本持平，稳居增量第四，最后推送仍停在 11-20。

### 4. jingyaogong/minimind

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/jingyaogong/minimind |
| 简介 | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours. |
| 语言 | Python |
| 总 Star | 70,891 |
| 今日新增 | 828 stars today |
| 标签 | LLM、模型训练、Python、中文开源、小模型 |

两小时从零训练 64M 小模型的中文开源教程式项目，主打低成本上手。今日 +828 较 11-24 的 +727 回升约 14%，稳在第 4，最后推送 11-23。

### 5. cursor/plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cursor/plugins |
| 简介 | Cursor plugin specification and official plugins |
| 语言 | TypeScript |
| 总 Star | 19,506 |
| 今日新增 | 408 stars today |
| 标签 | Cursor、插件规范、TypeScript、开发工具、IDE |

Cursor 官方插件规范与官方插件集合，代表 IDE 侧 Agent 扩展的标准化尝试。今日 +408 较 11-24 的 +359 回升约 14%，靠排序权重守住第 5，11-24 有新推送。

### 6. firecrawl/firecrawl

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/firecrawl/firecrawl |
| 简介 | Knowledge infrastructure to make your agents smarter. Search, scrape and access 550+ data providers through one API. |
| 语言 | TypeScript |
| 总 Star | 209,916 |
| 今日新增 | 1,131 stars today |
| 标签 | RAG、数据抓取、TypeScript、API、Agent基础设施 |

为 Agent 提供搜索、抓取与数据接入的统一知识层，通过单一 API 接入 550+ 数据供应商。今日 +1,131 较 11-24 的 +990 放量约 14%，升至增量第三，总星 21 万居全榜第二。

### 7. nginx/nginx

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nginx/nginx |
| 简介 | The official NGINX Open Source repository. |
| 语言 | C |
| 总 Star | 33,349 |
| 今日新增 | 174 stars today |
| 标签 | Web服务器、基础设施、C、反向代理、开源 |

NGINX 官方开源仓库，经典基建常青树连续第五日在榜。今日 +174 较 11-24 的 +158 略增，仍为全榜最低增量，排序与增量继续脱钩。

### 8. openvinotoolkit/openvino

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/openvinotoolkit/openvino |
| 简介 | OpenVINO™ is an open source toolkit for optimizing and deploying AI inference |
| 语言 | C++ |
| 总 Star | 12,631 |
| 今日新增 | 188 stars today |
| 标签 | AI推理、模型优化、C++、Intel、端侧部署 |

Intel 开源的 AI 推理优化与跨硬件部署工具链。今日 +188 与 11-24 的 +187 基本持平，连续五日以极低增量占据第 8，增量倒数第二。

### 9. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, Qoder, and Pi. 52 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 语言 | HTML |
| 总 Star | 72,909 |
| 今日新增 | 1,133 stars today |
| 标签 | Claude Code、设计规范、SVG、HTML、Agent Skills |

面向 Claude Code / Codex / Copilot / Cursor 等编码 Agent 的 52 类 editorial 图表设计技能，强调自包含 HTML+SVG、拒绝阴影与模板化 Mermaid 观感。今日 +1,133 较 11-24 的 +794 暴涨约 43%，为本期放量最猛项目、跃居增量第二。

### 10. mvanhorn/last30days-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mvanhorn/last30days-skill |
| 简介 | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary |
| 语言 | Python |
| 总 Star | 75,021 |
| 今日新增 | 950 stars today |
| 标签 | Agent Skills、信息研究、Python、社交媒体、摘要 |

跨 Reddit、X、YouTube、HN、Polymarket 与全网检索近 30 天话题并生成有据可依摘要的 Agent 技能。今日 +950 较 11-24 的 +695 放量约 37%，稳在第 10。

### 11. google-labs-code/stitch-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-labs-code/stitch-skills |
| 简介 | A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor. |
| 语言 | TypeScript |
| 总 Star | 12,943 |
| 今日新增 | 352 stars today |
| 标签 | Google、Agent Skills、TypeScript、MCP、UI设计 |

Google Labs 面向 Stitch MCP 的官方 Agent Skills 库，遵循开放技能标准、兼容 Gemini CLI / Claude Code / Cursor。今日 +352 较 11-24 的 +401 回落约 12%，最后推送 11-24。

### 12. mjmirza/app-store-compliance

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mjmirza/app-store-compliance |
| 简介 | Avoid common App Store and Google Play rejections. Open playbook and pre-submission guard with 124 documented rejection patterns and fixes, privacy manifest and Data safety checks, 114 tracked deadlines (EU AI Act, DSA, COPPA, age laws), and a skill for AI coding agents. |
| 语言 | Shell |
| 总 Star | 6,419 |
| 今日新增 | 853 stars today |
| 标签 | 合规审查、App Store、Google Play、Shell、Agent Skills |

把 124 种审核拒绝模式、隐私清单/数据安全检查与 114 项法规截止日（EU AI Act、DSA、COPPA 等）编成上架前守卫与 Agent 技能。今日 +853 较 11-24 的 +936 回落约 9%，总星升至 6,419，仍是低基数爆发样本。

### 13. Tracer-Cloud/opensre

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Tracer-Cloud/opensre |
| 简介 | The open-source agent for CI/CD reliability. |
| 语言 | Python |
| 总 Star | 15,485 |
| 今日新增 | 343 stars today |
| 标签 | SRE、CI/CD、Python、可观测性、Agent |

面向 CI/CD 可靠性的开源 Agent，主打自动诊断与修复流水线故障。今日 +343 较 11-24 的 +408 回落约 16%，守住第 13。

### 14. toeverything/AFFiNE

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/toeverything/AFFiNE |
| 简介 | There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use. |
| 语言 | TypeScript |
| 总 Star | 78,417 |
| 今日新增 | 578 stars today |
| 标签 | 知识库、协作工具、TypeScript、开源、隐私优先 |

国产开源的新一代知识库与规划协作工具，定位 Notion + Miro 替代、隐私优先且可自托管。今日 +578 与 11-24 的 +589 基本持平，仍稳在第 14。

### 15. XiaoYouChR/Ghost-Downloader-3

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/XiaoYouChR/Ghost-Downloader-3 |
| 简介 | The only downloader you need. 下载器的集大成者。 |
| 语言 | Python |
| 总 Star | 18,155 |
| 今日新增 | 950 stars today |
| 标签 | 下载器、Python、中文开源、多媒体、工具 |

中文社区集大成者下载器，聚合多站点资源下载能力。今日 +950 较 11-24 的 +1,102 回落约 14%，退出增量前三，仍是中文工具稳定高位的代表。

### 16. zhouxiaoka/autoclip

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/zhouxiaoka/autoclip |
| 简介 | AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪成短视频，生成字幕、封面和发布文案，适配抖音、小红书、TikTok、Reels 与 YouTube Shorts。Open-source AI video clipping & content repurposing. |
| 语言 | Python |
| 总 Star | 16,093 |
| 今日新增 | 868 stars today |
| 标签 | 视频剪辑、AI、Python、中文开源、内容再利用 |

一个链接一键出片的开源 AI 剪辑桌面工具，把长视频自动切条并生成字幕、封面与发布文案。今日 +868 较 11-24 的 +981 回落约 12%，垫底第 16 却仍在增量前八，脱钩持续。

## 观察

- **连续第四次零换血 + 零换位**：11-20、11-23、11-24、11-25 四期 16 席名单与名次逐位完全一致。滑动 24 小时窗口连续多日给出同一排序，说明这批项目的 star 增量已进入稳定平台期，短期内看不到新面孔挤入；榜单可参考性正在从「发现新项目」转向「观察存量项目增量节奏」。
- **增量与排序持续脱钩**：增量前三是 Claude-BugHunter（+1,644，排第 1）、diagram-design（+1,133，排第 9）、firecrawl（+1,131，排第 6）；另一头 nginx（+174，排第 7）与 OpenVINO（+188，排第 8）几乎垫底却卡在中上游。榜首与垫底的日增相差近 9 倍。
- **本期最大变量是 diagram-design**：从 11-24 的 +794 放量至 +1,133（约 +43%），把设计规范类技能推到增量第二；last30days-skill 也从 +695 升至 +950（约 +37%），话题研究类同步走强。技能包内部出现结构性此消彼长。
- **技能包生态仍是主线**：7 席覆盖漏洞挖掘、开发方法论、Agent-Native CLI、图表设计规范、话题研究、UI 生成与合规审查，垂类分工已相当细。app-store-compliance 总星仅 6,419 却单日 +853，低基数爆发在本期继续。
- **中文项目稳定四席**：minimind、AFFiNE、Ghost-Downloader-3、autoclip 合计 +3,224，占全天增量约 26%；其中 Ghost-Downloader-3（+950）、autoclip（+868）仍保持接近四位数的日增。
- **时效信号**：superpowers 最后推送更新到 11-24，结束此前约 21 天的停更，惯性传播得到新推送支撑；CLI-Anything 停在 11-20、minimind 停在 11-23，其余 13 席在 11-24/11-25 有推送。
