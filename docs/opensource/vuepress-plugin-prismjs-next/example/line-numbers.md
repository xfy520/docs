# line-numbers

> 行号显示，支持设置起始行行号，添加后默认全局开启，如需关闭某个代码块该功能请配置 `:no-ln` 或者 `:no-line-numbers`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置一样，多个操作符可以追加

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['javascript'],
      plugins: ['line-numbers']
    }],
  ]
}
```

```js:no-mb
(function () {
 if (typeof Prism === 'undefined') {
  return;
 }
 Prism.hooks.add('wrap', function (env) {
  if (env.type !== 'keyword') {
   return;
  }
  env.classes.push('keyword-' + env.content);
 });
}());
```

**起始行 `-5`**

```js:no-mb:-5
(function () {
 if (typeof Prism === 'undefined') {
  return;
 }
 Prism.hooks.add('wrap', function (env) {
  if (env.type !== 'keyword') {
   return;
  }
  env.classes.push('keyword-' + env.content);
 });
}());
```
