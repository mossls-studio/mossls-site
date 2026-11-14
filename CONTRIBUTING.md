# 怎么改这个站

纯静态站点：没有构建步骤，改完文件就是最终结果。`main` 分支 = 线上，合并进 `main` 后 GitHub Pages 大约 1 分钟自动更新。

线上地址：https://mossls-studio.github.io/mossls-site/

## 流程

```bash
git clone https://github.com/mossls-studio/mossls-site.git
cd mossls-site
git checkout -b style/你的改动名
# 改文件…
git add -A && git commit -m "style: 说明改了什么"
git push -u origin style/你的改动名
```

推完 GitHub 会提示 **Compare & pull request**，开 PR、写清楚动了哪些文件，等 review 合并。

不会用 git 就走网页：

1. 仓库首页 → 分支下拉 `main` → **View all branches** → **New branch**
2. 切到新分支 → 打开文件点铅笔（或 Add file → Upload files）
3. 提交后弹出 **Compare & pull request**

**不要直接推 `main`**：一推就上线，没有回看和回滚点。

## 本地预览

```bash
python -m http.server 8123 --directory .
```

打开 http://127.0.0.1:8123 。直接双击 `index.html` 也能看，但 `?lang=`、`?q=` 这类带参数的链接要起服务才正常。

## 合并前自测

- 手机宽度 390px：顶栏搜索、卡片、集合页标签是否换行正常
- 阿拉伯语：网址后加 `?lang=ar`，检查导航和卡片是否镜像、文字有没有溢出
- 搜索：顶栏输入回车、`all.html` 里点类型 / 适用标签、清空，三种状态都对
- 详情页：预览图能出、下载按钮跳 `releases/latest`、同类项目正常

## 发布版本

合并后站点已经上线了，打 tag 只是为了留一个可回看的版本快照：

仓库 → **Releases** → **Draft a new release** → 选一个 tag（如 `v1.1.0`，新建）→ 标题写版本 → **Generate release notes** 再补两句 → Publish。

回滚：把 `main` revert 到上一个 tag 的提交即可；历史版本都能在 Releases / Commits 里翻到。

## 别踩的坑

- `js/data.js` 里 `shots` 指向 `assets/shots/*.webp`，换风格时别改路径，否则详情页预览图会裂。
- `.nojekyll` 不能删（删了 Pages 会走 Jekyll，一些文件会被吞）。
- 别把大图直接塞进仓库根目录：图片统一进 `assets/`，单张建议 200KB 以内。
- 两个人同时改 `css/style.css` 几乎必冲突，改之前先在群里说一声。
