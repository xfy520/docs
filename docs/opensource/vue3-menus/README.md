# 介绍

Vue3.0 自定义右键菜单，Vue3.0 原生实现完全自定义右键菜单组件, 零依赖，可根据可视区域自动调节显示位置，可支持插槽完全重写每一项菜单

## 开始

### npm 安装

```sh
npm install vue3-menus
```

### yarn 安装

```sh
yarn add vue3-menus
```

### CDN 使用

```html
<script src="https://unpkg.com/vue3-menus/dist/vue3-menus.umd.min.js">
```

## 使用

### 导入方式使用

```js
  // 全局注册组件、指令、方法
  import { createApp } from 'vue';
  import Menus from 'vue3-menus';
  import App from './App.vue';
  const app = createApp(App);
  app.use(Menus);
  app.mount('#app');
  // 单个注册某个，以下三种方式均可在单个文件内使用
  import { createApp } from 'vue';
  import { directive, menusEvent, Vue3Menus } from 'vue3-menus';
  import App from './App.vue';
  const app = createApp(App);
  app.component('vue3-menus', Vue3Menus); // 只注册组件
  app.directive('menus', directive); // 只注册指令
  app.config.globalProperties.$menusEvent = menusEvent; // 只绑定方法
  app.mount('#app');
```

### CDN 引入方式使用

> CDN 引入全局暴露 Vue3Menus 对象，Vue3.0 需要手动挂载跟注册组件，具体详细使用方法请 [前往](https://codepen.io/xfy520/pen/yLXNqzy)

```js
  const vue3Composition = {
    name: "dome",
    setup() {
      return {};
    }
  };
  Vue.createApp(vue3Composition).use(Vue3Menus).mount("#app");
```
