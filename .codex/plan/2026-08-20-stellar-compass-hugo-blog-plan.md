# Stellar Compass Hugo 排行榜博客实现计划

> **面向 AI 代理的工作者：** 必需子技能：使用 superpowers:subagent-driven-development（推荐）或 superpowers:executing-plans 逐任务实现此计划。步骤使用复选框（`- [ ]`）语法跟踪进度。

## 执行进度（已暂停）

**暂停时间：** 2026-08-20 11:44:50 +08:00
**状态：** 用户要求停止，四个子代理均已关闭。未收到新的明确恢复指令前，不继续编码、测试、提交、推送或部署。

**工作位置：**

- 主工作区：`D:\work\workspace\codex\Stellar Compass`，分支 `main`，停在 `51088db`。
- 隔离 worktree：`D:\work\workspace\codex\Stellar Compass\.worktrees\hugo-blog`。
- 实现分支：`feature/hugo-blog`，当前 HEAD 为 `1da3561`。
- 远程：`origin = https://github.com/sumuw/Stellar-Compass.git`，尚未 push，远程仍未写入本次实现。

**已提交：**

- `51088db chore: establish Hugo project plan`：初始化本地 Git、保存本计划和忽略规则。
- `bb5bb7d chore: initialize Hugo toolchain`：Hugo 0.165.0 配置、npm 锁文件、本地 Hugo 安装/包装脚本；已验证 `npm run setup:hugo` 和 `npm run hugo -- version`。
- `aa120b9 feat: add Stellar Compass hero asset`：保存品牌首屏 PNG，并配置 `/rankings/:slug/` permalink。
- `1da3561 ci: add Pages deployment and site output checks`：已提交 Pages workflow、README、404、robots 和站点产物测试；该提交尚未经过集成构建或审查。

**已写入但未跟踪、未提交、未验证的草稿：**

- 内容层：`scripts/lib/ranking-content.mjs`、`scripts/validate-content.mjs`、`scripts/import-reference-rankings.mjs`。
- 内容测试：`tests/content-validation.test.mjs`、`tests/import-reference-rankings.test.mjs`。
- 模板层：`layouts/_default/**`、`layouts/home.html`、`layouts/partials/**`、`layouts/rankings/**`。
- 视觉层：`assets/css/main.css`。
- 上述草稿由运行中的子代理在被中止前写入；不得视为完成实现，恢复后必须先逐文件审查再决定保留或修改。

**尚未完成：**

- `archetypes/rankings.md`、`content/**` 尚未创建，参考项目的 10 篇榜单尚未迁移。
- 内容测试、导入测试、内容校验、Hugo production build、站点产物测试均未形成最终通过证据。
- 未启动本地 Hugo 服务，未做桌面/移动浏览器、控制台、可访问性或溢出检查。
- 未完成规格合规审查、代码质量审查、最终 verification、合并到 `main`、push 或 GitHub Pages 线上验收。

**恢复顺序：**

1. 在 `feature/hugo-blog` worktree 重新检查 `git status --short`，保持当前未跟踪草稿不丢失。
2. 先审查内容层草稿并运行两个聚焦测试，补齐 `archetypes/` 和 10 个 content bundles。
3. 再审查模板/CSS 草稿，运行 Hugo build，根据真实错误逐项修复。
4. 运行 `npm run check` 和真实浏览器验收，通过双阶段审查后再提交剩余文件。
5. 最后合并到 `main`，核对 remote 后 push，并验证 GitHub Pages。

**目标：** 在当前空目录中实现并发布一个名为 Stellar Compass 的 Hugo 排行榜博客，复刻参考站点的分类置顶、榜单时间倒序列表、详情榜单和 GitHub Pages 自动部署能力。

**架构：** 使用自定义 Hugo 模板，不引入第三方主题。每篇榜单采用 leaf bundle，将 AI 解读放在 `index.md`，将排名、链接、星标等事实数据放在同目录 `ranking.json`；Hugo taxonomy 生成分类页与周期页，公共 partial 统一列表和详情表格。Node 仅用于内容契约测试与构建产物断言，站点运行时仍是纯静态 HTML/CSS。

**技术栈：** Hugo 0.165.0、Go template、Markdown、JSON、CSS、Node.js 22 内置测试、gray-matter、GitHub Actions、GitHub Pages。

---

## 1. 已确认上下文

- 当前目录 `D:\work\workspace\codex\Stellar Compass` 为空，尚未初始化 Git。
- 远程仓库 `https://github.com/sumuw/Stellar-Compass.git` 可访问且没有 refs，可作为全新 `main` 仓库初始化。
- 本机已有 Node.js `v22.20.0`，没有全局 Hugo 或 Go。
- 参考项目位于 `D:\work\workspace\codex\my`，现有 9 篇 GitHub 日榜和 1 篇 GitHub 周榜，可迁移为 Hugo 内容样例。
- 目标是 GitHub 项目站，默认线上地址为 `https://sumuw.github.io/Stellar-Compass/`。

## 2. 范围

### 本次包含

- 首页：Stellar Compass 品牌首屏、顶部分类、最新 8 篇榜单、更多入口。
- 榜单归档页：所有榜单按实际日期倒序排列。
- 分类页：使用 Hugo taxonomy，按分类列出全部榜单并显示数量。
- 周期页：日榜、周榜、月榜可独立归档。
- 详情页：Markdown 的 AI 解读 + JSON 渲染的结构化榜单表格。
- 内容迁移：导入参考项目的 10 篇 GitHub 榜单。
- 工程能力：内容校验、构建产物测试、RSS、robots、404、GitHub Pages workflow。
- 交付：初始化 Git、设置 `origin`、提交并推送 `main`，验证 Pages workflow。

### 本次不包含

- 在线后台、数据库、登录、评论、站内搜索。
- 定时抓取 GitHub Trending 或直接调用 AI API；保留稳定内容契约和后续脚本入口。
- 自定义域名；本次使用 GitHub 提供的项目站域名。
- 影视或 AI 榜单的虚构数据；模板和 taxonomy 预留这些分类，但首批内容只迁移已有 GitHub 数据。

## 3. 方案比较与推荐

### 方案 A：自定义 Hugo 模板 + leaf bundle（推荐）

- 每篇内容放在 `content/rankings/<category>/<period>/<slug>/index.md`。
- 同目录 `ranking.json` 作为 page resource，由详情模板读取。
- 优点：内容与事实数据一一绑定、迁移和删除不易错配、模板可完全匹配参考站点、不会把所有历史 JSON 全部加载进全站数据对象。
- 代价：需要自行维护约 8 个模板/partial，但边界清晰且没有主题升级冲突。

### 方案 B：自定义 Hugo 模板 + 全局 `data/` 目录

- 最接近参考 Astro 项目的 `Markdown + data/rankings/**/*.json` 结构。
- 优点：迁移最直接，跨页面汇总 JSON 较方便。
- 代价：Markdown 与 JSON 路径需要双向校验；Hugo 构建时会把 `data/` 全量读入内存，长期每日榜单增长后不够理想。

### 方案 C：PaperMod/Blowfish 等主题 + 覆盖模板

- 优点：初始博客能力丰富。
- 代价：排行榜首页、列表和详情表格都要重写，主题依赖和升级成本高，最终代码反而更复杂，也难精确复刻参考站点。

**决定：** 采用方案 A。视觉上保留参考站点的紧凑、低干扰列表设计，同时把品牌改为 Stellar Compass，并使用一张专属位图作为首屏背景信号。

## 4. 目标文件结构

```text
.
├─ .github/workflows/hugo.yml              # 构建、测试并部署 Pages
├─ .codex/plan/2026-08-20-stellar-compass-hugo-blog-plan.md
├─ archetypes/rankings.md                   # 新榜单内容模板
├─ assets/css/main.css                      # 全站响应式样式
├─ content/
│  ├─ _index.md
│  └─ rankings/
│     ├─ _index.md
│     └─ github/{daily,weekly}/<slug>/
│        ├─ index.md                        # 标题、分类、日期、AI 解读
│        └─ ranking.json                    # 可验证的事实榜单
├─ layouts/
│  ├─ _default/baseof.html
│  ├─ _default/term.html
│  ├─ _default/taxonomy.html
│  ├─ home.html
│  ├─ rankings/list.html
│  ├─ rankings/single.html
│  └─ partials/{head,header,footer,category-strip,ranking-list,ranking-table}.html
├─ scripts/
│  ├─ hugo.ps1                              # PATH/项目内 Hugo 解析器
│  ├─ install-hugo.ps1                      # 下载并校验固定 Hugo 版本
│  ├─ import-reference-rankings.mjs         # 参考项目到 leaf bundle 的转换器
│  └─ validate-content.mjs                  # 内容契约校验入口
├─ static/
│  ├─ images/stellar-compass-hero.webp
│  └─ robots.txt
├─ tests/
│  ├─ content-validation.test.mjs
│  ├─ import-reference-rankings.test.mjs
│  └─ site-output.test.mjs
├─ .gitignore
├─ hugo.toml
├─ package.json
├─ package-lock.json
└─ README.md
```

## 5. 内容契约

每篇 `index.md` 使用以下 front matter 字段；`date` 始终是可排序的真实日期，周榜另用 `rankingKey` 保存 `YYYY-Www` 展示键，避免模板自行解析 ISO week。

```yaml
---
title: "GitHub 每日趋势榜 2026-08-20"
description: "AI 编程与开发者工具是今日榜单的主要看点。"
date: 2026-08-20T08:00:00+08:00
rankingKey: "2026-08-20"
categories: ["github"]
periods: ["daily"]
tags: ["GitHub", "开源", "AI"]
draft: false
---
```

同目录 `ranking.json` 使用以下结构：

```json
{
  "category": "github",
  "period": "daily",
  "date": "2026-08-20",
  "source": "sample",
  "sourceUrl": "https://github.com/trending",
  "items": [
    {
      "rank": 1,
      "name": "openai/codex",
      "url": "https://github.com/openai/codex",
      "description": "Command-line coding agent focused on local workflows.",
      "language": "Rust",
      "stars": 45200,
      "delta": "+1280",
      "tags": ["AI", "CLI"],
      "comment": "开发者工作流类项目保持高关注度。"
    }
  ]
}
```

校验规则固定为：分类仅允许 `github/movie/tv/ai/other`，周期仅允许 `daily/weekly/monthly`；Markdown 与 JSON 的分类、周期、`rankingKey/date` 必须一致；排名必须从 1 连续递增；名称、HTTPS URL、描述不能为空。

## 6. 实现任务

### 任务 1：初始化工具链和项目配置

**文件：**
- 创建：`.gitignore`
- 创建：`hugo.toml`
- 创建：`package.json`
- 创建：`scripts/install-hugo.ps1`
- 创建：`scripts/hugo.ps1`

- [ ] **步骤 1：初始化 Git 并配置空远程**

```bash
git init -b main
git remote add origin https://github.com/sumuw/Stellar-Compass.git
git remote -v
```

预期：本地分支为 `main`，fetch/push 均指向用户提供的远程地址；不执行 pull，因为远程没有 refs。

- [ ] **步骤 2：写入 Hugo 配置**

`hugo.toml` 固定 `baseURL = 'https://sumuw.github.io/Stellar-Compass/'`、`languageCode = 'zh-CN'`、`title = 'Stellar Compass'`、`enableRobotsTXT = true`，配置 `category -> categories` 和 `period -> periods` 两个 taxonomy，并定义中英文标签映射。

- [ ] **步骤 3：写入本机 Hugo 安装脚本**

脚本固定下载 `hugo_0.165.0_windows-amd64.zip` 和官方 `hugo_0.165.0_checksums.txt`，校验 SHA-256 后解压到 `.tools/hugo/`。`.tools/` 和 `public/` 写入 `.gitignore`，二进制和构建产物不提交。

- [ ] **步骤 4：写入 Hugo 包装脚本**

`scripts/hugo.ps1` 优先使用 PATH 中的 `hugo`，否则使用 `.tools/hugo/hugo.exe`；两者均不存在时输出 `npm run setup:hugo` 并以非零状态退出。所有参数原样传给 Hugo。

- [ ] **步骤 5：安装 Node 依赖并生成锁文件**

运行：`npm install`

预期：生成 `package-lock.json`，仅包含开发期 front matter 解析依赖 `gray-matter`。

- [ ] **步骤 6：安装并核对 Hugo**

运行：`npm run setup:hugo`，随后运行 `powershell -NoProfile -File scripts/hugo.ps1 version`

预期：输出包含 `hugo v0.165.0`。

- [ ] **步骤 7：提交工具链里程碑**

```bash
git add .codex/plan/2026-08-20-stellar-compass-hugo-blog-plan.md .gitignore hugo.toml package.json package-lock.json scripts
git commit -m "chore: initialize Hugo toolchain"
```

### 任务 2：先测试内容契约，再实现校验器

**文件：**
- 创建：`tests/content-validation.test.mjs`
- 创建：`scripts/lib/ranking-content.mjs`
- 创建：`scripts/validate-content.mjs`

- [ ] **步骤 1：编写失败测试**

覆盖 5 个行为：合法 bundle 通过；缺少 `ranking.json` 失败；Markdown/JSON 日期不一致失败；排名不连续失败；项目 URL 不是 HTTPS 失败。测试使用 `node:test` 和临时目录，不污染仓库。

- [ ] **步骤 2：运行测试确认失败**

运行：`node --test tests/content-validation.test.mjs`

预期：FAIL，原因是 `scripts/lib/ranking-content.mjs` 不存在或导出未实现。

- [ ] **步骤 3：实现最小校验器**

导出 `discoverBundles(root)`、`readBundle(bundlePath)` 和 `validateBundle(bundle)`；入口脚本扫描 `content/rankings/**/index.md`，汇总所有错误后一次性退出，成功时输出 `ranking content valid (10 bundles)`。

- [ ] **步骤 4：运行测试确认通过**

运行：`node --test tests/content-validation.test.mjs`

预期：5 个测试全部 PASS。

- [ ] **步骤 5：提交内容契约里程碑**

```bash
git add tests/content-validation.test.mjs scripts/lib/ranking-content.mjs scripts/validate-content.mjs
git commit -m "test: define ranking content contract"
```

### 任务 3：测试并迁移参考项目内容

**文件：**
- 创建：`tests/import-reference-rankings.test.mjs`
- 创建：`scripts/import-reference-rankings.mjs`
- 创建：`archetypes/rankings.md`
- 创建：`content/_index.md`
- 创建：`content/rankings/_index.md`
- 创建：`content/rankings/github/**/index.md`
- 创建：`content/rankings/github/**/ranking.json`

- [ ] **步骤 1：编写失败测试**

用临时 Astro Markdown + JSON fixture 验证转换结果：输出路径包含分类/周期/slug；`dataFile` 被移除；`categories`、`periods`、`rankingKey` 被写入；周榜 `2026-W34` 的可排序 `date` 固定为该 ISO 周一 `2026-08-17T08:00:00+08:00`。

- [ ] **步骤 2：运行测试确认失败**

运行：`node --test tests/import-reference-rankings.test.mjs`

预期：FAIL，原因是导入器尚未实现。

- [ ] **步骤 3：实现导入器**

默认源目录为 `D:\work\workspace\codex\my`，也允许通过命令行传入其他源目录和目标目录。读取 gray-matter front matter，复制 JSON 原始事实字段，输出 Hugo leaf bundle；已存在目标时先比较内容，只有显式 `--overwrite` 才覆盖不一致文件。

- [ ] **步骤 4：运行测试并迁移 10 篇内容**

运行：

```powershell
node --test tests/import-reference-rankings.test.mjs
node scripts/import-reference-rankings.mjs "D:\work\workspace\codex\my" "."
node scripts/validate-content.mjs
```

预期：导入测试 PASS；迁移 10 个 bundle；校验输出 `ranking content valid (10 bundles)`。

- [ ] **步骤 5：提交内容迁移里程碑**

```bash
git add archetypes content scripts/import-reference-rankings.mjs tests/import-reference-rankings.test.mjs
git commit -m "feat: migrate ranking content to Hugo bundles"
```

### 任务 4：实现 Hugo 页面模板

**文件：**
- 创建：`layouts/_default/baseof.html`
- 创建：`layouts/_default/term.html`
- 创建：`layouts/_default/taxonomy.html`
- 创建：`layouts/home.html`
- 创建：`layouts/rankings/list.html`
- 创建：`layouts/rankings/single.html`
- 创建：`layouts/partials/head.html`
- 创建：`layouts/partials/header.html`
- 创建：`layouts/partials/footer.html`
- 创建：`layouts/partials/category-strip.html`
- 创建：`layouts/partials/ranking-list.html`
- 创建：`layouts/partials/ranking-table.html`

- [ ] **步骤 1：建立公共页面骨架**

`baseof.html` 只负责语义结构；`head.html` 输出 title、description、canonical、RSS；导航只保留首页、全部榜单、GitHub 三个高频入口，全部使用 `.RelPermalink`/`relURL` 以兼容 `/Stellar-Compass/` base path。

- [ ] **步骤 2：实现首页和公共榜单列表**

首页从 `rankings` section 获取 `.RegularPagesRecursive.ByDate.Reverse`，展示前 8 篇。`category-strip.html` 从 `.Site.Taxonomies.categories` 读取分类、数量和最近日期；`ranking-list.html` 统一渲染日期、周期、标题、描述、分类。更多按钮固定指向 `/rankings/`，不依赖第一个分类。

- [ ] **步骤 3：实现归档和 taxonomy 页面**

`rankings/list.html`、`_default/term.html` 都按 `.Date` 倒序使用同一列表 partial；taxonomy 总览展示所有 term 及数量。空列表输出明确空状态，不渲染空容器。

- [ ] **步骤 4：实现详情榜单**

`rankings/single.html` 渲染 front matter 元数据和 `.Content`；`ranking-table.html` 使用 `.Resources.Get "ranking.json" | transform.Unmarshal` 读取数据。缺失或解析失败时使用 `errorf` 让构建失败，而不是发布不完整详情页。

- [ ] **步骤 5：先构建并记录模板错误**

运行：`npm run build`

预期：首轮若有 lookup、字段或模板语法错误则 FAIL，并按 Hugo 精确错误行修正；最终生成 `public/index.html`、`public/rankings/index.html`、`public/categories/github/index.html` 和 10 个详情页。

- [ ] **步骤 6：提交模板里程碑**

```bash
git add layouts
git commit -m "feat: add ranking blog templates"
```

### 任务 5：实现视觉系统与响应式体验

**文件：**
- 创建：`assets/css/main.css`
- 创建：`static/images/stellar-compass-hero.webp`

- [ ] **步骤 1：生成品牌位图**

使用 imagegen 生成 1600x900 横向位图：深色天文观测图与数据坐标感、清晰星点和罗盘轨迹、青色/琥珀/绿色有限强调色、无文字、无徽标、无模糊光斑。图片作为紧凑首屏背景，文本由 HTML 覆盖。

- [ ] **步骤 2：实现桌面样式**

保持参考站点的白色内容区、细边框、8px 最大圆角和紧凑榜单。首屏标题为 `Stellar Compass`，说明放在支持文案；首屏高度限制在 420px 内，确保 900px 高桌面首屏能看到分类区域开头。

- [ ] **步骤 3：实现移动样式**

在 760px 以下将榜单行改为单列，分类项允许换行，详情表格放入可横向滚动容器。所有按钮、链接和文本不能溢出或遮挡；字体不随 viewport 宽度缩放。

- [ ] **步骤 4：加入可访问性状态**

实现 `:focus-visible`、`prefers-reduced-motion`、颜色对比、语义 heading 顺序、表格 caption/scope 和外链 `rel="noreferrer"`。背景图标记为装饰，不让屏幕阅读器重复朗读。

- [ ] **步骤 5：提交视觉里程碑**

```bash
git add assets static/images
git commit -m "style: add Stellar Compass visual system"
```

### 任务 6：先写构建产物测试，再补齐站点能力

**文件：**
- 创建：`tests/site-output.test.mjs`
- 创建：`static/robots.txt`
- 修改：`package.json`
- 修改：`hugo.toml`

- [ ] **步骤 1：编写构建产物测试**

断言首页中分类区出现在最新榜单前；日期顺序为 2026-08-20、2026-08-19、2026-08-18、2026-W34；更多链接指向 `/Stellar-Compass/rankings/`；分类页和详情页存在；详情页包含 `#1`、项目链接和榜单明细；所有站内资源链接保留项目 base path。

- [ ] **步骤 2：运行测试确认失败**

在未构建或模板未完善时运行：`node --test tests/site-output.test.mjs`

预期：FAIL，明确指出缺失页面或结构。

- [ ] **步骤 3：补齐 RSS、robots、404 和构建脚本**

启用 Hugo 默认 RSS；robots 指向站点 sitemap；配置 404 页面复用全站骨架。`package.json` 提供 `setup:hugo`、`dev`、`validate:content`、`test:content`、`build`、`test:site` 和 `check` 七个命令。

- [ ] **步骤 4：运行完整本地检查**

运行：`npm run check`

预期：内容校验、导入器测试、Hugo production build、构建产物测试全部 PASS，Hugo 日志不含 broken refs 或 duplicate target path。

- [ ] **步骤 5：提交质量门禁里程碑**

```bash
git add hugo.toml package.json package-lock.json static/robots.txt tests/site-output.test.mjs
git commit -m "test: verify generated ranking site"
```

### 任务 7：配置 GitHub Pages

**文件：**
- 创建：`.github/workflows/hugo.yml`
- 创建：`README.md`

- [ ] **步骤 1：写入官方 Pages workflow**

workflow 在 `main` push 和手动触发时运行；权限固定为 `contents: read`、`pages: write`、`id-token: write`。构建 job 使用 `actions/checkout@v7`、`actions/configure-pages@v6`、`actions/setup-node@v6`，安装固定 Hugo 0.165.0，运行 `npm ci`、`npm run validate:content`、Node 测试和 `hugo --gc --minify --baseURL "${{ steps.pages.outputs.base_url }}/"`，最后用 `actions/upload-pages-artifact@v5` 上传 `public/`；deploy job 使用 `actions/deploy-pages@v5`。

- [ ] **步骤 2：写入 README**

README 说明项目用途、目录结构、`npm run setup:hugo`、`npm run dev`、新增榜单 bundle 的方法、内容契约、完整校验命令、GitHub Pages 首次启用路径和预期线上地址。

- [ ] **步骤 3：本地校验 workflow 和文档命令**

运行：`npm run check`

预期：全部 PASS；README 中所有本地命令与 `package.json` 一致。

- [ ] **步骤 4：提交部署里程碑**

```bash
git add .github/workflows/hugo.yml README.md
git commit -m "ci: deploy Hugo site to GitHub Pages"
```

### 任务 8：浏览器验证、推送和线上验收

**文件：**
- 可能修改：仅修复验证发现的问题；重大范围变化先更新本计划并重新确认。

- [ ] **步骤 1：启动本地服务**

运行：`npm run dev -- --bind 127.0.0.1 --port 1313`

预期：站点可访问 `http://127.0.0.1:1313/`。

- [ ] **步骤 2：桌面与移动浏览器验收**

使用真实浏览器检查 1440x900 和 390x844：首屏非空且背景图可见；分类区在榜单上方；日期倒序；首页、更多、分类、详情导航可达；表格不挤压页面；控制台无错误；页面没有水平溢出和文字重叠。

- [ ] **步骤 3：最终验证**

运行：

```powershell
node --test tests/content-validation.test.mjs
node --test tests/import-reference-rankings.test.mjs
npm run validate:content
npm run build
node --test tests/site-output.test.mjs
git status --short
```

预期：测试全部 PASS；内容校验为 10 bundles；Hugo 构建成功；Git 只包含预期提交或为干净状态。

- [ ] **步骤 4：核对远程并推送**

```bash
git remote -v
git push -u origin main
```

预期：fetch/push 均指向 `https://github.com/sumuw/Stellar-Compass.git`，`origin/main` 创建成功并触发 `hugo.yml`。

- [ ] **步骤 5：验证 Pages 部署**

确认仓库 Settings > Pages 的 Source 为 GitHub Actions；检查 workflow 结论为 success，并访问 `https://sumuw.github.io/Stellar-Compass/`。如果当前 GitHub 凭据无 Pages 管理权限，代码和 workflow 仍推送完成，并明确告知用户只需在 Settings > Pages 选择一次 GitHub Actions。

## 7. 测试策略

- 单元测试：内容发现、front matter/JSON 契约、ISO 周日期转换、导入覆盖保护。
- 集成测试：Hugo production build 后检查关键页面、排序、链接和详情表格。
- 视觉测试：真实浏览器桌面/移动截图、控制台、水平溢出和可操作链接。
- 部署测试：GitHub Actions build/deploy 状态与线上 HTML 关键结构。
- 回归边界：参考项目保持只读；不修改或删除 `D:\work\workspace\codex\my` 中任何文件。

## 8. 完成标准

1. 本地 `npm run check` 退出码为 0，且显示 10 个合法榜单 bundle。
2. 首页分类在上、最新榜单在下，日期严格倒序，“更多”进入全部榜单。
3. 分类页、周期页和 10 个详情页均生成，详情 JSON 与 Markdown 元数据一致。
4. 1440x900 与 390x844 下无空白首屏、溢出、遮挡或控制台错误。
5. `origin` 指向 `https://github.com/sumuw/Stellar-Compass.git`，`main` 推送成功。
6. GitHub Pages workflow 成功，线上地址可访问；若仅缺仓库 Pages 开关，则交付唯一且明确的人工设置步骤。

## 9. 参考依据

- Hugo 官方 taxonomy 会生成 taxonomy 总览和 term 内容列表，适合分类与周期归档。
- Hugo 官方建议对不需要全站常驻的数据使用 page/global resources；本项目因此用 leaf bundle 内的 `ranking.json`。
- Hugo 与 GitHub 官方都支持通过 Actions 构建静态产物并使用 Pages artifact/deploy actions 发布。
