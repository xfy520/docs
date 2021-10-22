# vuepress-plugin-prismjs-next

## 介绍

`Vuepress 2.0` 代码美化，基于 `prismjs` 二次封装，使其支持 `SSR` 渲染，[项目地址](https://github.com/xfy520/vuepress-plugin-prismjs-next)，[NPM](https://www.npmjs.com/package/vuepress-plugin-prismjs-next)

主要功能列表：

> - 语言预加载
> - 主题设置
> - 内联颜色
> - 链接突出显示、跳转
> - 数据 `uri` 突出显示
> - 格式化空白区域
> - 显示隐藏符号
> - 括号匹配
> - 行号显示
> - 行高亮
> - 工具栏、复制、语言显示
> - 样式预览器
> - 更多功能等待大家的提出

## 使用

### 安装

```shell
yarn add --dev vuepress-plugin-prismjs-next
或者
npm i vuepress-plugin-prismjs-next --save-dev
```

### Vuepress 配置

在 `.vuepress` 目录下 `config.ts` 配置文件中添加插件

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', true], // 开启插件
  ]
}
```

或者在 `.vuepress` 目录下 `config.js` 配置文件中添加插件

```js:no-mb
module.exports = {
  plugins: [
    ['vuepress-plugin-prismjs-next', true], // 开启插件
  ]
}
```

## 语言预加载

> 配置 `languages` 参数，传入预加载语言列表，默认情况下，语言会在解析 `Markdown` 文件时按需加载。然而， `Prism.js` 在动态加载语言时可能会遇到 [一些潜在的问题](https://github.com/PrismJS/prism/issues/2716)。为了避免这些问题，你可以使用该配置项来预加载一些语言。

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['shell', 'javascript', 'java'],
    }],
  ]
}
```

## 插件配置

> 以下均以 `config.ts` 配置文件为例

### inline-color

> 内联颜色，在样式代码中会突显出颜色预览小方块，该插件会默认对所有样式添加预览小方块，如需关闭某个代码块显示可以在指定代码语言后面添加 `:no-ic` 或者 `:no-inline-color`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置一样，多个禁用操作符可以追加

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

**css**

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

**less**

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

**html**

```html:no-pw
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

### autolinker

> 自动添加超链接，支持 `Markdown` 链接语法，添加后默认全局开启，如需关闭某个代码块显示可以在指定代码语言后面添加 `:no-al` 或者 `:no-autolinker`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置一样，多个禁用操作符可以追加

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['css', 'html', 'javascript'],
      plugins: ['autolinker']
    }],
  ]
}
```

**js**

```js
/**
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou https://github.com/xfy520
 * 邮箱 test@email.com
 * [Markdown跳转](/opensource/vuepress-plugin-prismjs-next/#autolinker)
 */
var foo = 5;
// http://google.com
```

**css**

```css
@font-face {
	src: url(http://lea.verou.me/logo.otf);
	font-family: 'LeaVerou';
}
```

**html**

```html
<!--Lea Verou http://lea.verou.me or, with Markdown, Lea Verou -->
<img src="https://prismjs.com/assets/img/spectrum.png" alt="In attributes too!" />
<p>Autolinking in raw text: http://prismjs.com</p>
```

**禁用 `autolinker`**

```js:no-al
/**
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou https://github.com/xfy520
 * 邮箱 test@email.com
 * [Markdown跳转](/opensource/vuepress-plugin-prismjs-next/#autolinker)
 */
var foo = 5;
// http://google.com
```

### data-uri-highlight

> 数据 `uri` 突出显示，该插件没有任何样式，需要手动添加样式类 `data-uri`，添加完后全局生效。

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['css'],
      plugins: ['data-uri-highlight']
    }],
  ]
}
```

```css
div {
    border: 40px solid transparent;
    border-image: 33.334% url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"> \
                          <circle cx="5" cy="5" r="5" fill="%23ab4"/><circle cx="15" cy="5" r="5" fill="%23655"/> \
                          <circle cx="25" cy="5" r="5" fill="%23e07"/><circle cx="5" cy="15" r="5" fill="%23655"/> \
                          <circle cx="15" cy="15" r="5" fill="hsl(15, 25%, 75%)"/> \
                          <circle cx="25" cy="15" r="5" fill="%23655"/><circle cx="5" cy="25" r="5" fill="%23fb3"/> \
                          <circle cx="15" cy="25" r="5" fill="%23655"/><circle cx="25" cy="25" r="5" fill="%2358a"/></svg>');
    padding: 1em;
    max-width: 20em;
    font: 130%/1.6 Baskerville, Palatino, serif;
}
```
