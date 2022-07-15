import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  base: '/nya-vue-document/',
  lang: 'zh-CN',
  title: 'Nya Vue',
  description: 'Nya Vue Document',
  port: 11123,

  theme: defaultTheme({
    navbar: [{ text: '开发笔记', link: '/develop-note' },{ text: 'PRD', link: '/PRD' }],
  }),
})
