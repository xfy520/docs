import { defineClientAppEnhance } from '@vuepress/client';
import { Vue3Menus, menusEvent } from 'vue3-menus';

export default defineClientAppEnhance(({ app }) => {
  // @ts-ignore
  if (!__VUEPRESS_SSR__) {
    import('vue3-seamless-scroll').then(module => {
      app.use(module.default)
    })
  }
  app.component('vue3-menus', Vue3Menus);
  app.config.globalProperties.$menusEvent = menusEvent;
})
