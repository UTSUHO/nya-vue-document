import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: '/nyabb-document/',
  lang: 'zh-CN',
  title: 'NyaBB',
  description: 'NyaBB Document',
  port: 10131,

  plugins: [searchPlugin()],

  theme: defaultTheme({
    navbar: [{ text: '开发笔记', link: '/develop-note' }],
  }),
})
