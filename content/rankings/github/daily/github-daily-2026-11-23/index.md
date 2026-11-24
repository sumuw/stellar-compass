---
title: GitHub 每日趋势榜 2026-11-23
description: 2026-11-23 GitHub Trending 榜首为 elementalsouls/Claude-BugHunter，当日共收录 16 个项目。
date: '2026-11-23'
rankingKey: '2026-11-23'
slug: github-daily-2026-11-23
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

2026-11-23 的 GitHub 每日趋势榜共 **16 席**，与此前一期的 16 席再次完全相同、**名次逐位不变**——继 11-20 之后连续第二次出现「零换血 + 零换位」，说明技能包 / 中文工具 / 经典基建三线格局已连续多日固化，无新面孔进入。全天 16 席合计新增 **11,791 star**（上一期 11,870，基本持平、微降约 0.7%）。技能包赛道仍占 **6 席**（Claude-BugHunter、superpowers、CLI-Anything、diagram-design、last30days-skill、stitch-skills、app-store-compliance 中的六者），垂类覆盖安全漏洞、开发方法论、Agent-Native CLI、设计规范、话题研究、UI 设计与合规审查；其中安全漏洞挖掘的 Claude-BugHunter 以 +2,029 蝉联榜首并同时蝉联增量王。中文项目 **4 席**（minimind、Ghost-Downloader-3、autoclip、AFFiNE），合计 +3,417，占全天增量约 29%，Ghost-Downloader-3（+1,087）与 autoclip（+907）分列增量第二、第四。经典基建 nginx 与 Intel OpenVINO 留榜但增量垫底（+174 / +184），排序与增量继续脱钩。时效提示：superpowers 最后推送停在 11-03（停更约 21 天，全榜最久），CLI-Anything 停在 11-20，其余 14 席在 11-23 至 11-24 有推送。

## 重点项目

### 1. elementalsouls/Claude-BugHunter

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elementalsouls/Claude-BugHunter |
| 简介 | A Claude Code skill bundle for bug hunting and external red-team work - 84 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices. |
| 语言 | Python |
| 总 Star | 19,798 |
| 今日新增 | 2,029 stars today |
| 标签 | Claude Code、Agent Skills、安全、漏洞挖掘、红队 |

把 84 个技能、15 条斜杠命令与 681 个真实披露漏洞模式打包成 Claude Code 漏洞挖掘工具集，覆盖 24 类核心漏洞与企业身份/基础设施攻击矩阵。今日 +2,029 放量约 22% 蝉联榜首，并再度同时拿下增量第一。

### 2. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 325,080 |
| 今日新增 | 840 stars today |
| 标签 | Agent Skills、开发方法论、Shell、工作流、开源框架 |

以 Shell 实现的 agentic 技能框架与软件开发方法论，32.5 万总星为全榜最大体量。今日 +840 稳居第 2，但仓库最后推送停在 11-03（停更约 21 天），属惯性传播。

### 3. HKUDS/CLI-Anything

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/CLI-Anything |
| 简介 | "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/ |
| 语言 | Python |
| 总 Star | 63,657 |
| 今日新增 | 790 stars today |
| 标签 | Agent-Native、CLI、自动化、Python、HKUDS |

港大团队项目，主张把任意软件改造成 Agent 原生可调用的 CLI，并配套 CLI-Hub 分发入口。今日 +790 连续守住第 3，最后推送 11-20，热度略有停顿。

### 4. jingyaogong/minimind

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/jingyaogong/minimind |
| 简介 | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours. |
| 语言 | Python |
| 总 Star | 69,466 |
| 今日新增 | 828 stars today |
| 标签 | LLM、模型训练、Python、中文开源、小模型 |

两小时从零训练 64M 小模型的中文开源教程式项目，主打低成本上手。今日 +828 与上一期基本持平，稳居第 4，11-23 有新推送。

### 5. cursor/plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cursor/plugins |
| 简介 | Cursor plugin specification and official plugins |
| 语言 | TypeScript |
| 总 Star | 18,811 |
| 今日新增 | 397 stars today |
| 标签 | Cursor、插件规范、TypeScript、开发工具、IDE |

Cursor 官方插件规范与官方插件集合，代表 IDE 侧 Agent 扩展的标准化尝试。今日 +397 较 11-20 的 +292 回升约 36%，但仍属低增量靠排序权重守住第 5。

### 6. firecrawl/firecrawl

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/firecrawl/firecrawl |
| 简介 | Knowledge infrastructure to make your agents smarter. Search, scrape and access 550+ data providers through one API. |
| 语言 | TypeScript |
| 总 Star | 207,936 |
| 今日新增 | 924 stars today |
| 标签 | RAG、数据抓取、TypeScript、API、Agent基础设施 |

为 Agent 提供搜索、抓取与数据接入的统一知识层，通过单一 API 接入 550+ 数据供应商。今日 +924 为增量第三，但较 11-20 的 +1,226 回落约 25%；总星 20.8 万为全榜第二大体量。

### 7. nginx/nginx

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nginx/nginx |
| 简介 | The official NGINX Open Source repository. |
| 语言 | C |
| 总 Star | 33,057 |
| 今日新增 | 174 stars today |
| 标签 | Web服务器、基础设施、C、反向代理、开源 |

NGINX 官方开源仓库，经典基建常青树连续第三日在榜。今日 +174 较 11-20 的 +246 回落，为全榜最低增量，排序与增量继续脱钩。

### 8. openvinotoolkit/openvino

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/openvinotoolkit/openvino |
| 简介 | OpenVINO™ is an open source toolkit for optimizing and deploying AI inference |
| 语言 | C++ |
| 总 Star | 12,285 |
| 今日新增 | 184 stars today |
| 标签 | AI推理、模型优化、C++、Intel、端侧部署 |

Intel 开源的 AI 推理优化与跨硬件部署工具链。今日 +184 为全榜倒数第二（仅高于 nginx），连续三日以极低增量占据第 8，11-24 有新推送。

### 9. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, Qoder, and Pi. 52 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 语言 | HTML |
| 总 Star | 70,978 |
| 今日新增 | 620 stars today |
| 标签 | Claude Code、设计规范、SVG、HTML、Agent Skills |

面向 Claude Code/Codex/Copilot/Cursor 等编码 Agent 的 52 类 editorial 图表设计技能（较 11-20 的 45 类扩充），强调自包含 HTML+SVG、拒绝阴影与模板化 Mermaid 观感。今日 +620 基本持平。

### 10. mvanhorn/last30days-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mvanhorn/last30days-skill |
| 简介 | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary |
| 语言 | Python |
| 总 Star | 73,448 |
| 今日新增 | 797 stars today |
| 标签 | Agent Skills、信息研究、Python、社交媒体、摘要 |

跨 Reddit、X、YouTube、HN、Polymarket 与全网检索近 30 天话题并生成有据可依摘要的 Agent 技能。今日 +797 较 11-20 的 +685 回升约 16%，稳在第 10。

### 11. google-labs-code/stitch-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-labs-code/stitch-skills |
| 简介 | A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor. |
| 语言 | TypeScript |
| 总 Star | 12,299 |
| 今日新增 | 422 stars today |
| 标签 | Google、Agent Skills、TypeScript、MCP、UI设计 |

Google Labs 面向 Stitch MCP 的官方 Agent Skills 库，遵循开放技能标准、兼容 Gemini CLI/Claude Code/Cursor。今日 +422 较 11-20 的 +315 放量约 34%，11-23 有新推送。

### 12. mjmirza/app-store-compliance

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mjmirza/app-store-compliance |
| 简介 | Avoid common App Store and Google Play rejections. Open playbook and pre-submission guard with 124 documented rejection patterns and fixes, privacy manifest and Data safety checks, 112 tracked deadlines (EU AI Act, DSA, COPPA, age laws), and a skill for AI coding agents. |
| 语言 | Shell |
| 总 Star | 4,980 |
| 今日新增 | 761 stars today |
| 标签 | 合规审查、App Store、Google Play、Shell、Agent Skills |

把 124 种审核拒绝模式（较 11-20 增加 7 种）、隐私清单/数据安全检查与 112 项法规截止日（EU AI Act、DSA、COPPA 等）编成上架前守卫与 Agent 技能。今日 +761 继续放量，总星从 2,649 增至 4,980，仍是低基数爆发样本。

### 13. Tracer-Cloud/opensre

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Tracer-Cloud/opensre |
| 简介 | The open-source agent for CI/CD reliability. |
| 语言 | Python |
| 总 Star | 14,842 |
| 今日新增 | 436 stars today |
| 标签 | SRE、CI/CD、Python、可观测性、Agent |

面向 CI/CD 可靠性的开源 Agent，主打自动诊断与修复流水线故障。今日 +436 较 11-20 的 +465 小幅回落但守住第 13，此前 +25 到 +465 的爆发回归常态。

### 14. toeverything/AFFiNE

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/toeverything/AFFiNE |
| 简介 | There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use. |
| 语言 | TypeScript |
| 总 Star | 77,403 |
| 今日新增 | 595 stars today |
| 标签 | 知识库、协作工具、TypeScript、开源、隐私优先 |

国产开源的新一代知识库与规划协作工具，定位 Notion + Miro 替代、隐私优先且可自托管。今日 +595 较 11-20 的 +686 回落，仍稳在第 14。

### 15. XiaoYouChR/Ghost-Downloader-3

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/XiaoYouChR/Ghost-Downloader-3 |
| 简介 | The only downloader you need. 下载器的集大成者。 |
| 语言 | Python |
| 总 Star | 16,333 |
| 今日新增 | 1,087 stars today |
| 标签 | 下载器、Python、中文开源、多媒体、工具 |

中文社区集大成者下载器，聚合多站点资源下载能力。今日 +1,087 为增量第二，与 11-20 的 +1,082 几乎持平，是中文工具稳定高位的代表。

### 16. zhouxiaoka/autoclip

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/zhouxiaoka/autoclip |
| 简介 | AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪成短视频，生成字幕、封面和发布文案，适配抖音、小红书、TikTok、Reels 与 YouTube Shorts。Open-source AI video clipping & content repurposing. |
| 语言 | Python |
| 总 Star | 14,411 |
| 今日新增 | 907 stars today |
| 标签 | 视频剪辑、AI、Python、中文开源、内容再利用 |

一个链接一键出片的开源 AI 剪辑桌面工具，把播客/访谈/课程长视频自动切条并生成字幕、封面与发布文案。今日 +907 为增量第四、较 11-20 的 +983 略降，垫底第 16 却是增量前四，脱钩持续。

## 观察

1. **连续第二次「零换血 + 零换位」**：16 席与名次逐位一致（Claude-BugHunter → autoclip），仅增量变化；继 11-20 后再度出现，存量深耕格局进一步固化。
2. **技能包垂类纵深稳定**：Claude-BugHunter（安全）、superpowers（方法论）、CLI-Anything（Agent-Native CLI）、diagram-design（设计规范）、last30days-skill（话题研究）、stitch-skills（UI/Google 官方）、app-store-compliance（合规审查）多席同日；合规与设计两席继续放量（+761 / +620）。
3. **中文工具四席合计 +3,417 占全天约 29%**：Ghost-Downloader-3（+1,087，增量第二）、autoclip（+907，增量第四）、minimind（+828）、AFFiNE（+595），与上一期结构几乎一致。
4. **脱钩与低基数爆发**：榜首 Claude-BugHunter +2,029 同时是增量王；第 15/16 名的 Ghost-Downloader-3 与 autoclip 分列增量第二/第四，而第 7/8 名 nginx（+174）、openvino（+184）垫底。app-store-compliance 总星 4,980 却 +761，仍是典型低基数放大。
5. **时效与惯性**：superpowers 停更约 21 天仍以 +840 排第 2，CLI-Anything 停在 11-20；其余 14 席在 11-23 至 11-24 有推送，热度主要来自真实传播而非单点提交。
