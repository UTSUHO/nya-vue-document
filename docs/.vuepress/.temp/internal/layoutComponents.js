import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("E:/FILE/programming_files/miao-yu-dian/forum/document/nyabb-document/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("E:/FILE/programming_files/miao-yu-dian/forum/document/nyabb-document/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
