---
title: GitHub 每日趋势榜 2026-10-12
description: 2026-10-12 GitHub Trending 榜首为 morluto/rea，当日共收录 8 个项目。
date: '2026-10-12T08:00:00+08:00'
rankingKey: '2026-10-12'
slug: github-daily-2026-10-12
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

2026-10-12 GitHub Trending 共收录 **8** 个项目（已回查页面 `Box-row` 计数确认为 8，非解析丢失）。今日榜单规模明显收缩，但主线异常清晰：**8 个项目里有 5 个是「给 AI 或给 Agent 做工具」**——逆向工程 Agent 桥接、图表生成技能、AI 影像编排 IDE、低显存大模型推理、深度学习框架本身。剩下 3 个分别是主机游戏兼容层、浏览器端地理空间可视化，以及一份计算史档案。

值得注意的信号是**「Agent 能力向下沉到专业工种」**：`rea` 让 Agent 接管原本属于逆向工程师的流程，`diagram-design` 让 Agent 接管原本属于设计师的图表输出，`artcraft` 则把影视/设计的前期分镜与合成环节交给可控编排。三者都不再是「帮 Agent 写代码」，而是把某个专业岗位的判断与流程标准化成 Agent 可执行的产物。这是本周连续第 3 天延续该主线，且今日进一步从工程侧扩散到了设计侧。

榜首 `morluto/rea` 单日新增 25,585 star，是第 2 名的 6 倍以上，头部集中度极高；尾部 `pytorch` 日增仅 314，属于体量型仓库的常态进入。

## 重点项目

### 1. morluto/rea

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/morluto/rea |
| 简介 | Reverse engineer anything with agents, from app behavior down to native binaries. |
| 语言 | TypeScript |
| 总 Star | 99,724 |
| 今日新增 | 25,585 stars today |
| 标签 | Agent、MCP、逆向工程、二进制分析、TypeScript |

把逆向工程能力封装成 CLI + MCP 服务，让 Agent 直接驱动 Hopper / Ghidra 等反汇编器，从应用行为一路查到原生二进制，并产出可复现的 Evidence 记录。今日以远超其余项目的增量登顶，是「Agent 工具链」主线的一次集中爆发。

### 2. boykopovar/AnyPS5

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/boykopovar/AnyPS5 |
| 简介 | Tool for automatic PS5 executables porting to Linux and Windows |
| 语言 | C++ |
| 总 Star | 29,666 |
| 今日新增 | 3,977 stars today |
| 标签 | C++、游戏、兼容层、二进制重链接、逆向工程 |

不做硬件模拟，而是用重链接器把 PS5 的 ELF 可执行文件转成 Windows PE / Linux ELF，再用自实现的 PRX 系统库顶替索尼的运行时调用；着色器重编译器已能产出通过 SPIRV-Tools 校验的 SPIR-V。实测游戏已能跑到 logo、主菜单并带音频进入 gameplay，但主项目尚未发布正式版本。

### 3. storytold/artcraft

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/storytold/artcraft |
| 简介 | ArtCraft is an intentional crafting engine for artists, designers, and filmmakers |
| 语言 | Rust |
| 总 Star | 17,437 |
| 今日新增 | 2,956 stars today |
| 标签 | Rust、AI 生成、图像/视频、创作工具、3D |

把「写提示词碰运气」改造成「先搭场景再生成」：在 2D/3D 画布上完成摆位、合成、角色姿势与机位设定后才调用模型，重点解决跨镜头的角色与场景一致性。近日刚将许可证换成 MIT OR Apache-2.0，并新增纯 Rust 桌面端 artcraft-native，是本次上榜的直接触发点。

### 4. cathrynlavery/diagram-design

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/cathrynlavery/diagram-design |
| 简介 | Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, and Pi. 44 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop. |
| 语言 | HTML |
| 总 Star | 50,155 |
| 今日新增 | 1,083 stars today |
| 标签 | Agent Skills、数据可视化、SVG、设计系统、HTML |

面向 Claude Code / Codex / Copilot / Cursor 等 Agent 宿主的图表技能，输出带品牌配色的单文件 HTML + SVG，覆盖 44 种图表类型，并硬性规定「无阴影、无 Mermaid 味」。可自动抓取站点配色与字体完成品牌对齐，把「让 Agent 画张图」推进到「能直接挂上官网」的水准。

### 5. bilawalsidhu/gods-eye-view

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/bilawalsidhu/gods-eye-view |
| 简介 | A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe. |
| 语言 | JavaScript |
| 总 Star | 51,435 |
| 今日新增 | 872 stars today |
| 标签 | JavaScript、3D 可视化、地理空间、WebGL、开源情报 |

以真实开源空间情报数据驱动的浏览器端「间谍卫星模拟器」，在写实 3D 地球之上呈现卫星轨道与影像覆盖。把原本属于情报分析环节的可视化搬进网页，真实数据与强交互的结合是它上榜的主要原因。

### 6. pytorch/pytorch

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/pytorch/pytorch |
| 简介 | Tensors and Dynamic neural networks in Python with strong GPU acceleration |
| 语言 | Python |
| 总 Star | 104,425 |
| 今日新增 | 314 stars today |
| 标签 | 深度学习、框架、Python、GPU、基础设施 |

老牌深度学习框架，提供张量与动态神经网络计算并强调 GPU 加速。累计 star 为今日榜首但日增仅 314，属于大体量仓库的常态稳定增长，上榜更多依靠基数而非当日事件。

### 7. lyogavin/airllm

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/lyogavin/airllm |
| 简介 | AirLLM 70B inference with single 4GB GPU |
| 语言 | Jupyter Notebook |
| 总 Star | 36,375 |
| 今日新增 | 541 stars today |
| 标签 | LLM、推理优化、显存优化、Python、开源 |

主打极低显存的大模型推理，目标是让 70B 级别模型在单张 4GB GPU 上跑起来，靠分层加载与内存调度换取可行性。适合没有大显存却必须本地跑大模型的场景。

### 8. chrislgarry/Apollo-11

| 字段 | 内容 |
|------|------|
| 地址 | https://github.com/chrislgarry/Apollo-11 |
| 简介 | Original Apollo 11 Guidance Computer (AGC) source code for the command and lunar modules. |
| 语言 | Assembly |
| 总 Star | 74,166 |
| 今日新增 | 496 stars today |
| 标签 | 汇编、航天、历史档案、计算机史、教育 |

阿波罗 11 号制导计算机（AGC）的原始源码，含指令舱与登月舱两部分。作为计算史上的一手材料被长期引用与研读，今日上榜属于经典仓库的周期性回流。

## 观察

**1. Agent 工具链从工程侧扩散到设计侧。** `rea`（逆向工程）、`diagram-design`（图表）、`artcraft`（影像编排）三者虽然领域完全不同，产品形态却高度同构：把一个专业岗位的判断标准写死成规则与模板，再交给 Agent 执行，产出物要求「可直接交付」而非「大致能用」。`diagram-design` 那句 "No Mermaid slop" 是这种取向最直白的表述。

**2. 兼容层路线在主机游戏领域抬头。** `AnyPS5` 选择重链接而非模拟，依据是 PS5 与 PC 同为 x86-64，CPU 指令无需翻译。这条路线的理论开销远低于传统模拟器，但图形栈（PS5 渲染负载转 Vulkan）仍是最大难点——目前 SPIR-V 只做到「通过校验」，离「正确渲染一帧」还有距离。

**3. 榜单规模收缩，但无一是水榜。** 今日仅 8 个项目，是近期较低的一次；不过除了 `pytorch` 与 `Apollo-11` 两个靠体量/历史地位进入的常客，其余 6 个都带有明确的当日事件（换协议、发桌面端、冲榜首），整体信息密度反而高于前几日。

**4. 语言分布高度离散。** 8 个项目分属 8 种不同语言（TypeScript / C++ / Rust / HTML / JavaScript / Python / Jupyter Notebook / Assembly），没有出现单一语言占据多席的情况，说明今日热点由需求而非某一技术栈驱动。
