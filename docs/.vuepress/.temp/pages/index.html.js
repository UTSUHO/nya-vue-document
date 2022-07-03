export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"NyaBB Document\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"description\":\"This is NyaBB Document\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"SAMPLE\",\"slug\":\"sample\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"index.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
