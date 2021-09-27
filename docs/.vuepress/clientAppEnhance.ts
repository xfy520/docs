import { defineClientAppEnhance } from '@vuepress/client';
import Vue3Menus from 'vue3-menus/lib';

export default defineClientAppEnhance(({ app }) => {
  app.use(Vue3Menus);
})
