# line-highlight

> 行高亮，与 `Vuepress`行高亮配置，可以与行号一起使用，添加后默认全局开启

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['javascript'],
      plugins: ['line-highlight']
    }],
  ]
}
```

```js:no-mb:no-ln{1,3-5,9}
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

**与`line-numbers`一起**

```js:no-mb{1,3-5,8}
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
