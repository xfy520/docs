import { defineClientAppEnhance } from '@vuepress/client';
import { Vue3Menus, menusEvent, directive } from 'vue3-menus';

export default defineClientAppEnhance(({ app }) => {
  app.component('vue3-menus', Vue3Menus);
  app.config.globalProperties.$menusEvent = menusEvent;
})
