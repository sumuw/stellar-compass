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

2026-10-12 GitHub Trending 共收录 8 个项目，榜首 morluto/rea（25,585 stars today）。语言分布：TypeScript 1、C++ 1、Rust 1、HTML 1、JavaScript 1、Python 1。

## 重点项目

### 1. morluto/rea

- 地址：https://github.com/morluto/rea
- 简介：Reverse engineer anything with agents, from app behavior down to native binaries.
- 语言：TypeScript
- 今日新增：25,585 stars today
- 标签：Agent、MCP、逆向工程、二进制分析、TypeScript

把逆向工程能力封装成 CLI + MCP 服务，让 Agent 直接驱动 Hopper / Ghidra 等反汇编器，从应用行为一路查到原生二进制，并产出可复现的 Evidence 记录。今日以远超其余项目的增量登顶，是「Agent 工具链」主线的一次集中爆发。

### 2. boykopovar/AnyPS5

- 地址：https://github.com/boykopovar/AnyPS5
- 简介：Tool for automatic PS5 executables porting to Linux and Windows
- 语言：C++
- 今日新增：3,977 stars today
- 标签：C++、游戏、兼容层、二进制重链接、逆向工程

不做硬件模拟，而是用重链接器把 PS5 的 ELF 可执行文件转成 Windows PE / Linux ELF，再用自实现的 PRX 系统库顶替索尼的运行时调用；着色器重编译器已能产出通过 SPIRV-Tools 校验的 SPIR-V。实测游戏已能跑到 logo、主菜单并带音频进入 gameplay，但主项目尚未发布正式版本。

### 3. storytold/artcraft

- 地址：https://github.com/storytold/artcraft
- 简介：ArtCraft is an intentional crafting engine for artists, designers, and filmmakers
- 语言：Rust
- 今日新增：2,956 stars today
- 标签：Rust、AI 生成、图像/视频、创作工具、3D

把「写提示词碰运气」改造成「先搭场景再生成」：在 2D/3D 画布上完成摆位、合成、角色姿势与机位设定后才调用模型，重点解决跨镜头的角色与场景一致性。近日刚将许可证换成 MIT OR Apache-2.0，并新增纯 Rust 桌面端 artcraft-native，是本次上榜的直接触发点。

### 4. cathrynlavery/diagram-design

- 地址：https://github.com/cathrynlavery/diagram-design
- 简介：Editorial diagram design for Claude Code, Codex, GitHub Copilot, Cursor, Factory Droid, and Pi. 44 diagram types. Self-contained HTML + SVG. No shadows. No Mermaid slop.
- 语言：HTML
- 今日新增：1,083 stars today
- 标签：Agent Skills、数据可视化、SVG、设计系统、HTML

面向 Claude Code / Codex / Copilot / Cursor 等 Agent 宿主的图表技能，输出带品牌配色的单文件 HTML + SVG，覆盖 44 种图表类型，并硬性规定「无阴影、无 Mermaid 味」。可自动抓取站点配色与字体完成品牌对齐，把「让 Agent 画张图」推进到「能直接挂上官网」的水准。

### 5. bilawalsidhu/gods-eye-view

- 地址：https://github.com/bilawalsidhu/gods-eye-view
- 简介：A spy satellite simulator in your browser, except the data is real. Live open source spatial intelligence on a photorealistic 3D globe.
- 语言：JavaScript
- 今日新增：872 stars today
- 标签：JavaScript、3D 可视化、地理空间、WebGL、开源情报

以真实开源空间情报数据驱动的浏览器端「间谍卫星模拟器」，在写实 3D 地球之上呈现卫星轨道与影像覆盖。把原本属于情报分析环节的可视化搬进网页，真实数据与强交互的结合是它上榜的主要原因。

### 6. pytorch/pytorch

- 地址：https://github.com/pytorch/pytorch
- 简介：Tensors and Dynamic neural networks in Python with strong GPU acceleration
- 语言：Python
- 今日新增：314 stars today
- 标签：深度学习、框架、Python、GPU、基础设施

老牌深度学习框架，提供张量与动态神经网络计算并强调 GPU 加速。累计 star 为今日榜首但日增仅 314，属于大体量仓库的常态稳定增长，上榜更多依靠基数而非当日事件。

### 7. lyogavin/airllm

- 地址：https://github.com/lyogavin/airllm
- 简介：AirLLM 70B inference with single 4GB GPU
- 语言：Jupyter Notebook
- 今日新增：541 stars today
- 标签：LLM、推理优化、显存优化、Python、开源

主打极低显存的大模型推理，目标是让 70B 级别模型在单张 4GB GPU 上跑起来，靠分层加载与内存调度换取可行性。适合没有大显存却必须本地跑大模型的场景。

### 8. chrislgarry/Apollo-11

- 地址：https://github.com/chrislgarry/Apollo-11
- 简介：Original Apollo 11 Guidance Computer (AGC) source code for the command and lunar modules.
- 语言：Assembly
- 今日新增：496 stars today
- 标签：汇编、航天、历史档案、计算机史、教育

阿波罗 11 号制导计算机（AGC）的原始源码，含指令舱与登月舱两部分。作为计算史上的一手材料被长期引用与研读，今日上榜属于经典仓库的周期性回流。

## 观察

- morluto/rea 今日 25,585 stars today，居当日增量第 1 位。
- boykopovar/AnyPS5 今日 3,977 stars today，居当日增量第 2 位。
- storytold/artcraft 今日 2,956 stars today，居当日增量第 3 位。
