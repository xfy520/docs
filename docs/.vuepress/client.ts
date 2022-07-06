import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  async enhance({ app }) {
    // @ts-ignore
    if (!__VUEPRESS_SSR__) {
      const vue3SeamlessScroll = await import('vue3-seamless-scroll')
      app.use(vue3SeamlessScroll.default)
      const v3ColorPicker = await import('v3-color-picker')
      app.use(v3ColorPicker.default)
      const vue3Menus = await import('vue3-menus')
      app.use(vue3Menus.default)
    }
  },
  setup() { },
  rootComponents: [],
})
