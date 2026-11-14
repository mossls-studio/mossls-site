# mossls 官网

mossls 的静态官网：首页、集合页、产品详情页、团队页。纯 HTML + CSS + 原生 JS，没有构建步骤，改完刷新就能看。

- 首页：开屏 logo 描线动画 → 字标与按钮自上而下高斯模糊淡入 → 脚本 / 插件 / 软件 三个分区，每区最多 3 个，超出时右侧给「查看全部 N」跳到集合页
- 集合页：`all.html`，全部项目每次打乱顺序；顶部搜索 + 「类型」（脚本/插件/软件）和「适用」（EffectCraft/DSH/Windows）两组标签，条件同时生效
- 产品页：`product.html?id=<产品 id>`，一个模板渲染全部产品
- 团队页：`team.html`，理念 + 成员 + GitHub 入口
- 语言：中文 / English / Español / Русский / Français / العربية（阿拉伯语自动 RTL）

顶栏搜索框任意页面都能用，回车跳到 `all.html?q=…`。集合页的搜索规则：中文按子串匹配；单个英文字母只匹配名字开头（输 `c` 只会出 Colorms，不会把所有带 EffectCraft 标签的项目都捞出来）；多个字母按子串匹配名字、标签和简介。

## 目录

```
mossls/site/
├── index.html          首页
├── all.html            集合页（全部项目 + 搜索 + 标签）
├── product.html        产品详情（?id=...）
├── team.html           团队
├── css/style.css       全部样式
├── js/
│   ├── data.js         产品、分类、成员数据（改这里）
│   ├── i18n.js         六种语言的界面文案
│   └── main.js         渲染和交互
├── assets/
│   ├── logo.png        原始 logo（透明底）
│   ├── logo-mark.png   裁掉留白的 logo（团队页、水印用）
│   ├── app-icon.png    黑色圆角图标（做 App icon / 社交头像用）
│   ├── favicon.png     128px 图标
│   └── avatar-koggua.webp
├── .nojekyll           让 Pages 跳过 Jekyll
└── README.md
```

原始素材（logo 源文件、成员头像原图、设计理念文档）放在上一级 `D:\mossls\`，不在站点目录里，不会被部署上去。

## 本地预览

```bash
cd D:\mossls\site
python -m http.server 8123
# 打开 http://127.0.0.1:8123/
```

直接双击 `index.html` 也能看，但 `?id=` / `?lang=` 这类查询参数在个别浏览器里对 `file://` 不友好，建议还是用本地服务器。

## 改内容

### 加一个产品：只改 `js/data.js`

在 `products` 数组里加一项：

```js
{
  id: "myapp",              // 唯一，product.html?id=myapp
  name: "MyApp",            // 显示名；需要按语言换名时用 names: { zh: "..." }
  initial: "M",             // 封面上的大字母
  repo: "MyApp",            // GitHub 仓库名（org 在文件顶部统一配）
  category: "software",     // scripts | plugins | software
  version: "v1.0.0",
  platform: "Windows",
  license: "MIT",           // 没有就写 null，详情页会自动少显示一格
  tags: ["Windows", "Rust"],
  c1: "#2F5BFF",            // 封面渐变色 1
  c2: "#7FF0D4",            // 封面渐变色 2
  tagline: { zh: "...", en: "...", es: "...", ru: "...", fr: "...", ar: "..." },
  desc:    { zh: "...", en: "...", es: "...", ru: "...", fr: "...", ar: "..." },
  shots:   ["assets/shots/demo-1.webp", "assets/shots/demo-2.webp"]  // 可选，详情页「预览」图
}
```

- 顺序就是页面顺序、导航下拉顺序和封面编号（数字跟着数组顺序走，不按分类重排）。
- 「下载」按钮固定指向 `https://github.com/<org>/<repo>/releases/latest`，所以仓库要**至少发过一个 Release**，否则会 404。
- 加完之后刷新页面即可，不用改 HTML；集合页的搜索和标签会自动包含新产品（名字、标签、简介都能搜）。
- `shots` 不写就退回原来的抽象占位图。图片统一放 `assets/shots/`，建议 1600×1000 WebP（约 60–100KB/张），2–3 张即可；页面按 16:10 裁切显示，重要内容别贴边。

### 改界面文案：`js/i18n.js`

六种语言各一段，key 相同。新增文案时六段都要补，缺了会回退到中文。

### 换 logo / 头像

替换 `assets/` 里的文件，名字保持一致即可。换 logo 时记得同时更新 `logo-mark.png`（团队页和 CTA 水印用的是裁切版）。

## 部署

线上地址：**https://mossls-studio.github.io/mossls-site/**
（仓库：`mossls-studio/mossls-site`，Pages 用 `main` 分支根目录，`.nojekyll` 已就位）

这台机器直连 github.com 的 git 通道会被重置，所以**改完用脚本发布**：

```powershell
cd D:\mossls
.\deploy.ps1 "改了首页文案"
```

脚本会读取 Windows 凭据管理器里的 GitHub token，把 `D:\mossls\site` 整份同步成**一个提交**（内容没变会跳过）。等 1 分钟左右刷新线上地址即可。

如果以后 git 能正常连（挂代理 / 换网络），也可以走常规流程：`git clone` 到别处、改完 `git push`，Pages 会自动重建；当前这份本地目录里的 `.git` 只是历史快照，第一次用 git 前先 `git reset --hard origin/main` 对齐。

## 部署后要确认的几件事

- 下载按钮：随便点一个，确认跳到 Releases 且最新版存在。
- `product.html?id=...` 在线上能开（Pages 支持任意 `.html` 路径）。
- 语言切换后刷新页面，语言保持（存在 localStorage）；也可以用 `?lang=ru` 直接分享某一语言版本。
- 手机宽度下顶栏搜索框会收窄，搜索仍可用；集合页的两组标签会各占一行。

## 已知限制

- 纯静态：搜索在前端做（本地过滤 `data.js`），没有后台、评论、统计。要「全站搜索 + 服务端」再加免费 API。
- 产品详情页的「预览」区块目前是 CSS 画的示意窗口（三张占位），不是真截图。以后有截图，把 `.shot` 里的 `.shot__win` 换成 `<img>` 即可。
- 文案是人工翻译的六语版本，正式上线前建议母语者过一遍阿拉伯语和俄语。

## 许可

各个项目按各自仓库的许可；这个站点的代码随便用。
