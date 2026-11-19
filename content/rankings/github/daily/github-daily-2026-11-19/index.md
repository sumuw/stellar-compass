---
title: GitHub 每日趋势榜 2026-11-19
description: 2026-11-19 GitHub Trending 榜首为 elementalsouls/Claude-BugHunter，当日共收录 16 个项目。
date: '2026-11-19'
rankingKey: '2026-11-19'
slug: github-daily-2026-11-19
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

今日榜单 16 席，较昨日 20 席明显缩量（脚本回查页面 Box-row 计数同为 16）。对 11-18 的 20 席留存仅 **7 席**（Claude-BugHunter、superpowers、CLI-Anything、cursor/plugins、openvino、last30days-skill、stitch-skills）；掉榜 13 席，昨日「经典基建大盘回归」几乎一日退潮——nvm、uv、jquery、svelte、appwrite、n8n、solid、awesome-mcp-servers 集体消失，仅 openvino 留守；技能包赛道的 SkillEvaluator、ECC 也同步掉榜。回归 2 席：minimind（11-17 后隔日回归）、diagram-design（10-11~13 连榜后长期重现）；新面孔 7 席，为近期较高换血。

主题转向「**技能包横向下沉 + 中文工具扎堆**」：技能包仍守 6 席（Claude-BugHunter 安全、last30days-skill 话题研究、stitch-skills 官方设计、superpowers 方法论，加上新面孔 diagram-design 图表设计规范、app-store-compliance 合规守门），从「生产 → 分发 → 垂类 → 评测」进一步下沉到**设计规范与合规审查**两个此前未覆盖的环节。中文背景项目 3 席（minimind、Ghost-Downloader-3、autoclip）为近期高位，且均为实用工具/教程型。经典基建只剩 nginx、openvino、AFFiNE 三席，其中 nginx 与 AFFiNE 均为本榜追踪期内首次上榜。

**增量王与榜首再次脱钩但差距温和**：superpowers +2,029 排第 2 为增量王，榜首 Claude-BugHunter +1,353 屈居第二增量；另一端低增量高排位依旧极端——opensre +25 排第 13、nginx +66 排第 7、autoclip +110 排第 16、AFFiNE +170 排第 14。机构/大厂 5 席（Google、Intel、Cursor、港大 HKUDS、Tracer-Cloud）。语言分布 Python 7、TypeScript 4、Shell 2，C/C++/HTML 各 1。时效标注 2 条：CLI-Anything 停更约 58 天、superpowers 停更约 16 天，两者合计 +2,928 约占全天增量四分之一，惯性传播仍是不可忽视的成因。

## 重点项目

### 1. elementalsouls/Claude-BugHunter

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/elementalsouls/Claude-BugHunter |
| 简介 | A Claude Code skill bundle for bug hunting and external red-team work - 82 skills, 15 slash commands, 681 disclosed-report patterns curated across 24 core vulnerability classes, plus enterprise identity + infrastructure attack matrices. |
| 语言 | Python |
| 总 Star | 12,338 |
| 今日新增 | 1,353 stars today |
| 标签 | AI、安全、红队测试、Claude Code、技能包 |

安全垂类技能包连续第四日上榜并蝉联榜首，+1,353 仍居前排但让出增量王。82 个技能 + 15 个斜杠命令把 681 个已披露漏洞报告模式沉淀成 24 大漏洞类别的排查/攻击矩阵，企业身份与基础设施攻击面清单是其差异化所在。

### 2. obra/superpowers

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/obra/superpowers |
| 简介 | An agentic skills framework & software development methodology that works. |
| 语言 | Shell |
| 总 Star | 321,988 |
| 今日新增 | 2,029 stars today |
| 标签 | Agent、技能框架、开发方法论、Shell、开源 |

Agent 技能框架 + 软件开发方法论仓库，昨日回归今日即冲到第 2，+2,029 为今日增量王、总星 32.2 万全榜第一。最后推送停在 11-03（约 16 天），属高星惯性叠加社区持续发酵。

### 3. HKUDS/CLI-Anything

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/HKUDS/CLI-Anything |
| 简介 | "CLI-Anything: Making ALL Software Agent-Native" -- CLI-Hub: https://clianything.cc/ |
| 语言 | Python |
| 总 Star | 60,467 |
| 今日新增 | 899 stars today |
| 标签 | Agent、CLI、工具化、Python、港大 |

港大 HKUDS 团队项目连续第三日上榜，主张「让一切软件 Agent-Native」，把传统软件封装成 CLI 供 Agent 调用并配套 CLI-Hub 索引站。近 6 万星 +899，但最后推送停在 09-22（停更约 58 天），是典型的长尾惯性上榜。

### 4. jingyaogong/minimind

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/jingyaogong/minimind |
| 简介 | 🧠 两小时从 0 训出你的 64M 大模型。Train your own 64M LLM from scratch in 2 hours. |
| 语言 | Python |
| 总 Star | 66,796 |
| 今日新增 | 301 stars today |
| 标签 | LLM、大模型训练、中文、教育、Python |

中文社区项目隔期回归（上次 11-17），主打「两小时从 0 训出 64M 大模型」的极简教程式仓库。11-18 刚有推送、+301 稳定放量，低门槛 LLM 训练教案持续吸引新星。

### 5. cursor/plugins

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cursor/plugins |
| 简介 | Cursor plugin specification and official plugins |
| 语言 | TypeScript |
| 总 Star | 17,517 |
| 今日新增 | 383 stars today |
| 标签 | Cursor、IDE、插件系统、AI 编程、TypeScript |

Cursor 官方插件规范仓库连续第三日上榜，排名回落至第 5、+383。AI 编辑器从「内置功能」走向「开放插件平台」的规范层项目，增量温和说明是规范发布后的持续传播而非单点爆发。

### 6. firecrawl/firecrawl

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/firecrawl/firecrawl |
| 简介 | Knowledge infrastructure to make your agents smarter. Search, scrape and 550+ data providers through one API. |
| 语言 | TypeScript |
| 总 Star | 204,049 |
| 今日新增 | 795 stars today |
| 标签 | 数据采集、Agent、API、搜索、TypeScript |

新面孔，20 万星的成熟 Agent 知识基础设施（搜索/抓取 + 550+ 数据供应商统一 API）首次进入本榜。今日 +795 且当天有推送，反映 Agent 数据采集层的价值被重新发现。

### 7. nginx/nginx

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/nginx/nginx |
| 简介 | The official NGINX Open Source repository. |
| 语言 | C |
| 总 Star | 32,295 |
| 今日新增 | 66 stars today |
| 标签 | 基础设施、反向代理、Web 服务器、C、开源 |

经典基建大盘再添一员——NGINX 官方开源仓库首次进入本榜，+66 的低位增量却排第 7，排序与增量脱钩。昨日有推送，属成熟基础设施的长尾稳定传播。

### 8. openvinotoolkit/openvino

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/openvinotoolkit/openvino |
| 简介 | OpenVINO™ is an open source toolkit for optimizing and deploying AI inference |
| 语言 | C++ |
| 总 Star | 11,532 |
| 今日新增 | 246 stars today |
| 标签 | AI 推理、模型优化、Intel、边缘计算、C++ |

Intel OpenVINO 连续第二日上榜且排名从第 14 升至第 8，+246。AI 推理优化/部署工具在端侧与边缘场景的价值被持续发现，今日仍有推送。

### 9. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, Qoder, and Pi. 45 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 语言 | HTML |
| 总 Star | 68,558 |
| 今日新增 | 332 stars today |
| 标签 | 设计、图表、Claude Code、技能包、HTML |

回归项（上次 10-11~10-13 连榜），为 Claude Code / Codex / Copilot / Cursor 等提供 45 种编辑式图表设计的自包含 HTML + SVG 规范，主打「拒绝 Mermaid 模板感」。6.8 万星 +332，今日有推送。

### 10. mvanhorn/last30days-skill

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mvanhorn/last30days-skill |
| 简介 | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web - then synthesizes a grounded summary |
| 语言 | Python |
| 总 Star | 70,717 |
| 今日新增 | 952 stars today |
| 标签 | Agent、技能包、话题研究、信息聚合、Python |

话题研究技能包连续第四日上榜，排名回落至第 10 但 +952 仍居增量前排。跨 Reddit/X/YouTube/HN/Polymarket 检索并生成有据可依的综述，是「给 Agent 装上网」的代表技能。

### 11. google-labs-code/stitch-skills

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/google-labs-code/stitch-skills |
| 简介 | A library of Agent Skills designed to work with the Stitch MCP server. Each skill follows the Agent Skills open standard, for compatibility with coding agents such as Antigravity, Gemini CLI, Claude Code, Cursor. |
| 语言 | TypeScript |
| 总 Star | 10,667 |
| 今日新增 | 303 stars today |
| 标签 | Google、Agent Skills、MCP、设计工具、TypeScript |

Google 官方 Agent Skills 库连续第四日上榜，配套 Stitch MCP server，遵循 Agent Skills 开放标准、兼容 Antigravity/Gemini CLI/Claude Code/Cursor。+303，昨日仍有推送，恢复更新后保持稳定。

### 12. mjmirza/app-store-compliance

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mjmirza/app-store-compliance |
| 简介 | Avoid common App Store and Google Play rejections. Open playbook and pre-submission guard with 117 documented rejection patterns and fixes, privacy manifest and Data safety checks, 95 tracked deadlines (EU AI Act, DSA, COPPA, age laws), and a skill for AI coding agents. |
| 语言 | Shell |
| 总 Star | 1,749 |
| 今日新增 | 542 stars today |
| 标签 | 合规、移动开发、App Store、技能包、Shell |

新面孔，把 App Store / Google Play 的 117 种拒审模式 + 隐私清单/Data safety 检查 + 95 个法规期限做成开源提审前守门清单，还附带 AI 编程 Agent 技能。+542 冲到第 12，是「合规即技能包」的新垂类。

### 13. Tracer-Cloud/opensre

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Tracer-Cloud/opensre |
| 简介 | The open-source agent for CI/CD reliability. |
| 语言 | Python |
| 总 Star | 13,061 |
| 今日新增 | 25 stars today |
| 标签 | SRE、CI/CD、自动化、Agent、Python |

新面孔，「CI/CD 可靠性的开源 Agent」，+25 极低增量却排第 13，是本期排序与增量脱钩的最极端样本。今日有推送，属 Agent 向运维/SRE 层外溢的新信号。

### 14. toeverything/AFFiNE

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/toeverything/AFFiNE |
| 简介 | There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen knowledge base that brings planning, sorting and creating all together. Privacy first, open-source, customizable and ready to use. |
| 语言 | TypeScript |
| 总 Star | 75,068 |
| 今日新增 | 170 stars today |
| 标签 | 知识库、开源、生产力、协作、TypeScript |

新面孔（本榜追踪期内首次），定位「不止 Notion 和 Miro」的开源下一代知识库，把规划、整理、创作合为一体，隐私优先。7.5 万星 +170，昨日有推送，属成熟生产力工具的长尾回榜。

### 15. XiaoYouChR/Ghost-Downloader-3

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/XiaoYouChR/Ghost-Downloader-3 |
| 简介 | The only downloader you need. 下载器的集大成者。 |
| 语言 | Python |
| 总 Star | 12,589 |
| 今日新增 | 449 stars today |
| 标签 | 下载器、中文、工具、开源、Python |

中文项目新面孔，自称「下载器的集大成者」，+449 排第 15。当天有推送，是工具类项目在中文社区持续传播的典型样本。

### 16. zhouxiaoka/autoclip

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/zhouxiaoka/autoclip |
| 简介 | AutoClip｜一个链接，一键出片。开源 AI 视频剪辑桌面工具，将播客、访谈、课程等长视频自动剪成短视频，生成字幕、封面和发布文案，适配抖音、小红书、TikTok、Reels 与 YouTube Shorts。Open-source AI video clipping & content repurposing. |
| 语言 | Python |
| 总 Star | 11,147 |
| 今日新增 | 110 stars today |
| 标签 | AI 视频剪辑、中文、内容再利用、桌面工具、Python |

中文项目新面孔，开源 AI 视频剪辑桌面工具，「一个链接一键出片」——把播客/访谈/课程长视频自动切为短视频并生成字幕、封面、发布文案，适配抖音/小红书/TikTok/Reels/Shorts。+110，昨日有推送。

## 观察

- **技能包赛道横向下沉到设计规范与合规**：昨日 6 席（含 SkillEvaluator 评测层、ECC），今日 SkillEvaluator/ECC 掉榜却由 diagram-design（45 种图表设计规范）与 app-store-compliance（117 种拒审模式 + 95 个法规期限）补位，仍守 6 席。技能包从「怎么写代码」扩展到「怎么画图、怎么过审」，垂类细分继续加深。
- **经典基建大盘仅存续一日**：昨日 nvm/uv/jquery/svelte/appwrite/openvino/n8n/solid/awesome-mcp-servers 集体回榜，今日除 openvino 外全部掉榜，印证这类回榜多为短时波动而非趋势回归；今日新入的 nginx 与 AFFiNE 属另一波长尾成熟项目上榜。
- **中文项目 3 席为近期高位**：minimind（LLM 教程）、Ghost-Downloader-3（下载器）、autoclip（AI 视频剪辑）均为实用工具/教育型，且全部近两日有推送，与停更惯性上榜形成对照。
- **排序与增量脱钩从两端同时显现**：增量王 superpowers +2,029 排第 2、榜首 Claude-BugHunter +1,353 只排第二增量；尾端 opensre +25 排第 13、nginx +66 排第 7，GitHub Trending 的排序权重显然不只是 star 增量。
- **时效风险**：CLI-Anything 停更约 58 天、superpowers 停更约 16 天，两者合计 +2,928 占全天增量约四分之一；其余 14 席近两日均有推送，无其他停更标注。
