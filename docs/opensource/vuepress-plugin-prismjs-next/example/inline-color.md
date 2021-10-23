# inline-color

> 内联颜色，在样式代码中会突显出颜色预览小方块，该插件会默认对所有样式添加预览小方块，如需关闭某个代码块该功能请配置 `:no-ic` 或者 `:no-inline-color`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置一样，多个禁用操作符可以追加

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['css', 'less', 'html'],
      plugins: ['inline-color']
    }],
  ]
}
```

```css:no-mb:no-pw
span.foo {
  background-color: navy;
  color: #BFD;
  background: rgba(105, 0, 12, .38);
  color: hsl(30, 100%, 50%);
  border-color: transparent;
  background: linear-gradient(left, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%);
}
```

```less:no-mb:no-pw
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
  background: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
  color: rgba(105, 0, 12, .38);
}
@nice-blue: #5B83AD;
.example-color {
  color: hsla(102, 53%, 42%, 0.4);
  background: hsl(30, 100%, 50%);
}
```

```html:no-mb:no-pw
<style>
  a.not-a-class {
    color: red;
  }
</style>
<body style="color: black">
</body>
```

**禁用 `inline-color`**

```css:no-mb:no-pw:no-ic
span.foo {
  background-color: navy;
  color: #BFD;
  background: rgba(105, 0, 12, .38);
  color: hsl(30, 100%, 50%);
  border-color: transparent;
  background: linear-gradient(left, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%);
}
```
