# 介绍

Vue3.0 自定义右键菜单，支持 Vite2.0，Vue3.0 原生实现完全自定义右键菜单组件, 零依赖，可根据可视区域自动调节显示位置，可支持插槽完全重写每一项菜单，[项目地址](https://github.com/xfy520/vue3-menus)

![vue3-menus](/images/opensource/vue3-menus.png)

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
<script src="https://unpkg.com/vue3-menus/dist/vue3-menus.min.js">
```

## 使用

Vite2.0 使用方式完全一样

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

## 使用组件

### 指令方式使用

```html
<template>
  <div class="vue3-menus-item" v-menus:left="menus">指令方式左击打开菜单</div>
  <div class="vue3-menus-item" v-menus:right="menus">指令方式右击打开菜单</div>
  <div class="vue3-menus-item" v-menus:all="menus">指令方式左右击打开菜单</div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { directive } from 'vue3-menus';

export default defineComponent({
  name: "App",
  directives: {
    menus: directive
  },
  setup() {
    const menus = ref({
      menus: [
        {
          label: "返回(B)",
          tip: 'Alt+向左箭头',
          click: () => {
            window.history.back(-1);
          }
        },
        {
          label: "点击不关闭菜单",
          tip: '不关闭菜单',
          click: () => {
            return false;
          }
        }
      ]
    })
    return { menus }
  },
});
</script>
```

### 方法使用方式

```html
<template>
  <div class="vue3-menus-item" @contextmenu="rightClick">方法方式右键打开菜单</div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { menusEvent } from 'vue3-menus';

export default defineComponent({
  name: "App",
  setup() {
    const menus = ref({
      menus: [
        {
          label: "返回(B)",
          tip: 'Alt+向左箭头',
          click: () => {
            window.history.back(-1);
          }
        },
        {
          label: "点击不关闭菜单",
          tip: '不关闭菜单',
          click: () => {
            return false;
          }
        }
      ]
    });
    function rightClick(event) {
      menusEvent(event, menus.value);
      event.preventDefault();
    }
    return { rightClick }
  },
});
</script>
```

### 组件使用方式

```html
<template>
  <div class="vue3-menus-item" @contextmenu="rightClick">组件方式打开菜单</div>
  <vue3-menus :open="isOpen" :event="eventVal" :menus="menus" hasIcon>
    <template #icon="{menu,activeIndex, index}">{{activeIndex}}</template>
    <template #label="{ menu,activeIndex, index}">插槽：{{ menu.label }}</template>
  </vue3-menus>
</template>
<script>
import { defineComponent, nextTick, ref } from "vue";
import { Vue3Menus } from 'vue3-menus';

export default defineComponent({
  name: "App",
  components: {
    Vue3Menus
  },
  setup() {
    const isOpen = ref(false);
    const eventVal = ref({});
    function rightClick(event) {
      isOpen.value = false;
      nextTick(() => {
        eventVal.value = event;
        isOpen.value = true;
      })
      event.preventDefault();
    }
    const menus = ref([
      {
        label: "返回(B)",
        tip: 'Alt+向左箭头',
        click: () => {
          window.history.back(-1);
        }
      },
      {
        label: "点击不关闭菜单",
        tip: '不关闭菜单',
        click: () => {
          return false;
        }
      }
    ]);
    return { menus, isOpen, rightClick, eventVal }
  },
});
</script>
```
