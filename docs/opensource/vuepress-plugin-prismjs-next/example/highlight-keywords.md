# highlight-keywords

> 关键字突出显示，添加后默认全局开启，需自己添加关键字样式类，这里我添加了 `.keyword-return`与`.keyword-if` 两个样式类

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['javascript'],
      plugins: ['highlight-keywords']
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
