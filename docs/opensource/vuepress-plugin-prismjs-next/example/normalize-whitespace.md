# normalize-whitespace

> 空白规范化显示，添加后默认不开启，如需某个代码块开启该功能请配置 `:nw` 或者 `:normalize-whitespace`，插件配置参数看 `插件配置`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置语法一样，多个操作符可以追加

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['js'],
      plugins: ['normalize-whitespace']
    }],
  ]
}
```

**未开启`normalize-whitespace`**

```js:no-mb


    var example = {
        foo: true,

        bar: false
    };



```

**开启`normalize-whitespace`**

```js:no-mb:nw


    var example = {
        foo: true,

        bar: false
    };



```
