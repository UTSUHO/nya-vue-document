# REAMDE

- 这是 NyaBB 的静态文档。
- 使用 [VuePress2](https://v2.vuepress.vuejs.org/zh/) 实现。
- 关于本文档的使用方法有任何疑问请联系[雪域冰龍](https://setsuikihyoryu.github.io/)。

## 部属

更新 main 分支即可自动部属。

## 创建文章流程

※ 使用 `npm run docs:dev` 命令可以打实时查看修改后的渲染结果。

1. 在 `docs` 目录下创建子文件夹及文件。
   - 引用相对路径时，`/` 即指向 `docs` 目录。
   - 因为 HTML 是大小写不敏感的，所以文件夹及文件名采用全小写命名，使用 `-` 或 `_` 符号分割单词。
2. 打开根据情况选择是否书写 Frontmatter。
3. 书写文章。
4. git commit 文章。
5. git push 文章至 `main` 分支即可等待自动部属。
6. 部属成功后至 <http://root.nsdn.club/nyabb-document/> 查看更新是否成功（反映可能会有些延迟）。

## 路由

详情见[官方路由指南](https://v2.vuepress.vuejs.org/zh/guide/page.html#%E8%B7%AF%E7%94%B1)

## 配置文件

`docs\.vuepress\config.ts`

### 配置项

详情见[官方配置指南](https://v2.vuepress.vuejs.org/zh/guide/configuration.html)

### 默认主题配置

可以配置 sidebar, navbar, logo 等内容，详情见[官方默认主题配置参考](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)。  
※ 如果不使用默认主题，需要自己另外研究怎么配置画面内容。

## 单页面配置

可以在每个页面中单独进行配置，详情见[官方 Frontmatter 指南](https://v2.vuepress.vuejs.org/zh/guide/page.html#frontmatter)
