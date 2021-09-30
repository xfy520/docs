# 介绍

Vue3.0 无缝滚动组件，支持 Vite2.0，目前组件支持上下左右无缝滚动，单步滚动，并且支持复杂图标的无缝滚动，目前组件支持平台与Vue3.0支持平台一致。[项目地址](https://github.com/xfy520/vue3-seamless-scroll/tree/v2)

<div class="vue3-seamless-scroll-scroll">
  <ClientOnly>
    <vue3-seamless-scroll :list="list">
      <div class="item" v-for="(item, index) in list" :key="index">
        <span>{{ item.title }}</span>
        <span>{{ item.date }}</span>
      </div>
    </vue3-seamless-scroll>
  </ClientOnly>
</div>

<script>
import { defineComponent, ref } from "vue";
import listData from "@js/vue3-scroll";

export default defineComponent({
  name: "App",
  setup() {
    const list = ref(listData);
    return { list }
  },
});
</script>

## 开始

### npm 安装

```sh
npm install vue3-seamless-scroll
```

### yarn 安装

```sh
yarn add vue3-seamless-scroll
```

### CDN 使用

```html
<script src="https://unpkg.com/vue3-seamless-scroll/dist/vue3-seamless-scroll.min.js">
```

## 使用

Vite2.0 使用方式完全一样

### 导入方式使用

- 全局组件注册 `install`

```JavaScript
  // **main.js**
  import { createApp } from 'vue';
  import App from './App.vue';
  import vue3SeamlessScroll from "vue3-seamless-scroll";
  const app = createApp(App);
  app.use(vue3SeamlessScroll);
  app.mount('#app');
```

- 单个.vue文件局部注册

```html
<script>
  import { defineComponent } from "vue";
  import { Vue3SeamlessScroll } from "vue3-seamless-scroll";
   export default defineComponent({
      components: {
        Vue3SeamlessScroll
      }
   })
</script>
```

### CDN 引入方式使用

> CDN 引入全局暴露 Vue3SeamlessScroll 对象，Vue3.0 需要手动挂载跟注册组件，具体详细使用方法请 [前往]()

```js
  const vue3Composition = {
    name: "dome",
    setup() {
      return {};
    }
  };
  Vue.createApp(vue3Composition).use(Vue3SeamlessScroll).mount("#app");
```

## 使用组件

```html
<template>
  <vue3-seamless-scroll :list="list" class="scroll">
    <div class="item" v-for="(item, index) in list" :key="index">
      <span>{{item.title}}</span>
      <span>{{item.date}}</span>
    </div>
  </vue3-seamless-scroll>
</template>
<script>
import { defineComponent, ref } from "vue";
import { Vue3SeamlessScroll } from "vue3-seamless-scroll";

export default defineComponent({
  name: "App",
  components: {
    Vue3SeamlessScroll
  },
  setup() {
    const list = ref([
      {
        title: "Vue3.0 无缝滚动组件展示数据第1条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第2条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第3条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第4条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第5条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第6条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第7条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第8条",
        date: Date.now(),
      },
      {
        title: "Vue3.0 无缝滚动组件展示数据第9条",
        date: Date.now(),
      },
    ]);
    return { list };
  },
});
</script>

<style>
.scroll {
  height: 270px;
  width: 500px;
  margin: 100px auto;
  overflow: hidden;
}

.scroll .item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3px 0;
}
</style>
```
