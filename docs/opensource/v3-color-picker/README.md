# 介绍

Vue3.0 原生颜色选择器，与浏览器自带几乎一样，支持 Vite2.0，[npm地址](https://www.npmjs.com/package/v3-color-picker)

![演示](/images/opensource/v3-color-picker.png)

<ClientOnly>
  <v3-color-picker v-model:value="color" btn></v3-color-picker>
  <v3-color-picker v-model:value="color" size="medium" btn></v3-color-picker>
  <v3-color-picker v-model:value="color" size="small" btn></v3-color-picker>
  <v3-color-picker v-model:value="color" size="mini" btn></v3-color-picker>
</ClientOnly>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const color = ref("rgba(255,0,0,0.5)");
    return { color }
  },
});
</script>

## 安装

### NPM

```shell
npm install v3-color-picker
```

或

```shell
yarn add v3-color-picker
```

### CDN

```html
<script src="https://unpkg.com/v3-color-picker/dist/v3-color-picker.umd.min.js">
```

## 使用（Vite 情况下同样使用）

```js
// 全局注册组件、指令、方法
import { createApp } from 'vue';
import V3ColorPicker from 'v3-color-picker';
import App from './App.vue';
const app = createApp(App);
app.use(V3ColorPicker);
app.mount('#app');
// 单个注册某个，以下三种方式均可在单个文件内使用
import { createApp } from 'vue';
import { directive, colorEvent, V3ColorPicker } from 'v3-color-picker';
import App from './App.vue';
const app = createApp(App);
app.component('v3-color-picker', V3ColorPicker); // 只注册组件
app.directive('color', directive); // 只注册指令
app.config.globalProperties.colorEvent = colorEvent; // 只绑定方法
app.mount('#app');
```

```html
<template>
  <div>
    <v3-color-picker v-model:value="color"></v3-color-picker>
    <div class="demo" v-color="colorOptions" :style="{backgroundColor: colorOptions.value}"></div>
    <div class="demo" @click="(event) => colorEvent(event, colorOptions)" :style="{backgroundColor: colorOptions.value}"></div>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const color = ref("rgba(255,0,0,0.5)");
    const colorOptions = ref({
      value: "rgba(255,0,0,0.5)",
      btn: true,
      theme: "light"
    });
    return { color, colorOptions }
  },
});
</script>

<style>
.demo {
  height: 100px;
  width: 100%;
}
</style>
```

```css

```

### 指令方式使用

```html
<template>
  <div class="demo" v-color="colorOptions" :style="{backgroundColor: colorOptions.value}">指令方式使用</div>
</template>
<script>
import { defineComponent, shallowRef } from "vue";
import { directives } from "v3-color-picker";

export default defineComponent({
  name: "App",
  directives: {
    color: directive
  },
  setup() {
    const colorOptions = ref({
      value: "rgba(255,0,0,0.5)",
      btn: true,
      theme: "light"
    });
    return { colorOptions }
  },
});
</script>
<style>
.demo {
  height: 100px;
  width: 100%;
}
</style>
```

### 方法方式使用

```html
<template>
  <div class="demo" @click="onClick" :style="{backgroundColor: colorOptions.value}"></div>
</template>
<script>
import { defineComponent, shallowRef } from "vue";
import { colorEvent } from "v3-color-picker";

export default defineComponent({
  name: "App",
  setup() {
    const colorOptions = ref({
      value: "rgba(255,0,0,0.5)",
      btn: true,
      theme: "light"
    });
    function onClick(event) {
      colorEvent(event, colorOptions.value);
      event.preventDefault();
    }
    return { onClick }
  },
});
</script>
```

### 组件方式使用

```html
<template>
  <v3-color-picker v-model:value="color" btn></v3-color-picker>
  <v3-color-picker v-model:value="color" size="medium" theme="light"></v3-color-picker>
  <v3-color-picker v-model:value="color" size="small"></v3-color-picker>
  <v3-color-picker v-model:value="color" :width="300"></v3-color-picker>
</template>
<script>
import { defineComponent, nextTick, ref, shallowRef } from "vue";
import { V3ColorPicker } from "v3-color-picker";

export default defineComponent({
  name: "App",
  components: {
    V3ColorPicker
  },
  setup() {
    const color = ref("rgba(255,0,0,0.5)");
    return { color }
  },
});
</script>
```
