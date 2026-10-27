---
title: GitHub 每日趋势榜 2026-10-13
description: 2026-10-13 GitHub Trending 榜首为 morluto/rea，当日共收录 9 个项目。
date: '2026-10-13T08:00:00+08:00'
rankingKey: '2026-10-13'
slug: github-daily-2026-10-13
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

今日榜单共 **9 个项目**（已回查 Trending 页面 `Box-row` 计数同为 9，非解析丢失，属近期低位）。

- **语言分布**：TypeScript 2、Python 2、JavaScript / Rust / HTML / Jupyter Notebook / C++ 各 1。
- **主题高度集中：9 个项目里 8 个与 AI 直接相关**，是本榜近期少见的高集中度。其中 **5 个**（rea、context-mode、diagram-design、free-claude-code、open-webui）直接服务于"AI 编码 Agent 工具链"，覆盖了**逆向分析、上下文治理、图表产出、供应商路由、交互界面**五个不同环节——Agent 生态正在从"能不能写代码"转向"整条工作流怎么被托管"。
- **唯一非 AI 项目**是 gods-eye-view（地理空间可视化），靠"把十余路公开实时数据叠成一颗 3D 地球"出圈。
- **值得注意的信号**：榜首 rea 单日 45,495 星，是全场唯一量级断层；artcraft 单日 4,106 星位列第二梯队。两者共同点是**把原本需要人类专家执行的高门槛操作（逆向工程、镜头调度）交给 Agent 或工具完成**。

## 重点项目

### 1. morluto/rea

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/morluto/rea |
| 简介 | Reverse engineer anything with agents, from app behavior down to native binaries. |
| 语言 | TypeScript |
| 总 Star | 151,269 |
| 今日新增 | 45,495 stars today |
| 标签 | AI Agent、MCP、逆向工程、二进制分析、TypeScript |

把 MCP 服务器接到 Hopper / Ghidra / IDA，让编码 Agent 在没有源码的情况下拆解第三方 App 与原生二进制，并给出带证据链的解释与复现版本。4.1.0 刚补上 Android APK 静态分析（headless JADX）与固件解包（Binwalk / Unblob）。单日 4.5 万星的断层式增长说明"让 Agent 自己去看清别人的功能怎么做"正在成为新刚需，其 README 也并未回避这背后的合规争议。

### 2. bilawalsidhu/gods-eye-view

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/bilawalsidhu/gods-eye-view |
| 简介 | A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe. |
| 语言 | JavaScript |
| 总 Star | 53,412 |
| 今日新增 | 1,903 stars today |
| 标签 | 可视化、地理空间、OSINT、3D、JavaScript |

用 CesiumJS 加 Google Photorealistic 3D Tiles，把 ADS-B 航班、AIS 船舶、CelesTrak 卫星、USGS 地震、NASA FIRMS 火点与公开摄像头等十余路公开实时信号叠在一颗照片级 3D 地球上，支持座舱跟机、FLIR/夜视滤镜与语音操控。全部数据都是公开可得的，但组合出的"上帝视角"恰恰是作者本人在文章里反复追问的隐私与安全边界。

### 3. mksglu/context-mode

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/mksglu/context-mode |
| 简介 | Context window optimization for AI coding agents. Sandboxes tool output (98% reduction), persists session memory, and enforces routing across 17 platforms via MCP + hooks. |
| 语言 | TypeScript |
| 总 Star | 27,187 |
| 今日新增 | 394 stars today |
| 标签 | AI Agent、MCP、上下文工程、开发工具、TypeScript |

把工具输出关进沙箱、只让 console.log 结果进入上下文，官方称最高削减 98% 占用（文档示例：315 KB 输出压缩到 5.4 KB）；同时用本地 SQLite FTS5 记录文件改动、git 操作与决策，上下文压缩后靠 BM25 检索恢复状态。需注意许可证是 Elastic License v2，非 OSI 认证开源，商用前应确认条款。

### 4. storytold/artcraft

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/storytold/artcraft |
| 简介 | ArtCraft is an intentional crafting engine for artists, designers, and filmmakers |
| 语言 | Rust |
| 总 Star | 21,502 |
| 今日新增 | 4,106 stars today |
| 标签 | Rust、AI 生成、图像/视频、创意工具、3D |

面向艺术家与 filmmaker 的"AI 创作 IDE"：用图像转位置、图像转 3D 网格、角色摆姿与 Kit Bashing 做场景调度，把抽卡式的提示词工程变成可控、可复现的镜头搭建。内接十余家图像/视频模型（含 Seedance、Sora、Veo、可灵），Rust 实现保证实时操控下的延迟表现。

### 5. open-webui/open-webui

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/open-webui/open-webui |
| 简介 | User-friendly AI Interface (Supports Ollama, OpenAI API, ...) |
| 语言 | Python |
| 总 Star | 154,860 |
| 今日新增 | 142 stars today |
| 标签 | LLM、自托管、前端、Python、开源 |

老牌自托管大模型 Web 界面，支持 Ollama 与 OpenAI 兼容 API 等多种后端。今日属于高位稳定在榜——对 15 万星的体量而言，142 的日增量是常规热度而非事件驱动，可作为当日榜单的"基线参照项"看待。

### 6. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, and Pi. 44 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 语言 | HTML |
| 总 Star | 52,406 |
| 今日新增 | 2,100 stars today |
| 标签 | Agent Skills、图表、设计系统、HTML/SVG、开发工具 |

一个 Agent 技能包，让 Claude Code / Codex / Cursor 等直接产出单个自包含 HTML + SVG 文件，覆盖架构图、时序图、象限图、桑基图等 44 种类型，还能抓取目标站点的配色与字体做品牌对齐。README 里"No shadows, no Mermaid slop"的审美主张，是它传播速度异常快的主要原因——它解决的不是"画不出来"，而是"画出来设计师嫌丑"。

### 7. lyogavin/airllm

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/lyogavin/airllm |
| 简介 | AirLLM 70B inference with single 4GB GPU |
| 语言 | Jupyter Notebook |
| 总 Star | 37,422 |
| 今日新增 | 886 stars today |
| 标签 | LLM、推理优化、显存优化、Python、机器学习 |

主打"单张 4GB GPU 推理 70B 模型"，通过逐层加载与 KV 缓存卸载把显存门槛压到极低。适合手上没有高端卡的本地实验场景，代价是推理速度明显下降，属于典型的"用时间换显存"路线。

### 8. microsoft/BitNet

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/microsoft/BitNet |
| 简介 | Official inference framework for 1-bit LLMs |
| 语言 | C++ |
| 总 Star | 40,865 |
| 今日新增 | 134 stars today |
| 标签 | LLM、量化、推理框架、C++、Microsoft |

微软官方的 1-bit LLM 推理框架，配合 BitNet b1.58 这类三值权重方案，把低比特下的矩阵乘法替换为加法，主打 CPU 端能效与端侧部署。属于长期在榜的基础设施项目，今日 134 星为常规增量，无事件驱动特征。

### 9. Alishahryar1/free-claude-code

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/Alishahryar1/free-claude-code |
| 简介 | Use Claude Code, Codex, VSCode, Pi, and OpenCode (and 6 other harnesses) for free (1.3B+ free tokens) from your terminal, app, IDE, or phone, and now from the browser with native browser sessions (multi-harness + multi-model) like OpenClaw (voice supported + ToS friendly) |
| 语言 | Python |
| 总 Star | 58,935 |
| 今日新增 | 705 stars today |
| 标签 | AI Agent、API 代理、Python、开发工具、LLM |

一个本地反向代理，把 Claude Code / Codex 的 Anthropic Messages API 调用转发到 NVIDIA NIM、OpenRouter、DeepSeek、LM Studio 等 20 余家供应商，保留流式、工具调用与推理块，并支持按 Opus / Sonnet / Haiku 分级路由。它的核心价值是成本与供应商自主权，而非质量对齐——项目自己也只承诺"几分钱换七到八成的效果"。

## 观察

1. **Agent 工具链已分工成型**：rea（看懂别人的实现）→ context-mode（治理自己的上下文）→ diagram-design（产出给人看的图）→ free-claude-code（决定用谁的模型付钱）。四个项目恰好对应 Agent 工作流的四个断点，同日上榜并非巧合。
2. **"控制力"是今年的共同卖点**：artcraft 反对抽卡式提示词、diagram-design 反对 Mermaid 默认样式、rea 强调每条结论附证据与局限、context-mode 强调会话状态可回溯。用户要的已经不是"生成"，而是**可预期、可复现、可审计**的生成。
3. **基础设施项今日集体降温**：open-webui（142）、BitNet（134）都是常规量级，说明当日流量被上层应用工具吸走，底层项目进入稳态。
4. **非 AI 项目只剩一个**：gods-eye-view 是本榜唯一的地理空间可视化项目，也提醒本榜在 AI 主题高度集中时，其他技术方向的曝光正在被压缩。
