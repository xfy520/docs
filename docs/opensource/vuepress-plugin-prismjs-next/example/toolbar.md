# toolbar

> 代码块工具栏，添加显示语言、复制的前置条件，添加后默认全局开启，如需关闭某个代码块该功能请配置 `:no-tb` 或者 `:no-toolbar`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置一样，多个操作符可以追加

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['javascript'],
      plugins: ['toolbar']
    }],
  ]
}
```

## show-language

> 显示语言，添加后默认全局开启

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['javascript'],
      plugins: ['toolbar', 'show-language']
    }],
  ]
}
```

## copy-to-clipboard

> 复制功能，添加后默认全局开启

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['javascript'],
      plugins: ['toolbar', 'copy-to-clipboard']
    }],
  ]
}
```
