# show-invisibles

> 显示隐藏符号，添加后默认不开启，如需某个代码块开启该功能请配置 `:si` 或者 `:show-invisibles`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置语法一样，多个操作符可以追加

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['css'],
      plugins: ['show-invisibles']
    }],
  ]
}
```

```css:no-mb:no-pw:si
span.foo {
  background-color: navy;
  color: #BFD;
  background: rgba(105, 0, 12, .38);
  color: hsl(30, 100%, 50%);
  border-color: transparent;
  background: linear-gradient(left, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%);
}
```
