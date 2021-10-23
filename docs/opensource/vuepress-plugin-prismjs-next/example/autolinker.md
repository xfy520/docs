# autolinker

> 自动添加超链接，支持 `Markdown` 链接语法，添加后默认全局开启，如需关闭某个代码块该功能请配置 `:no-al` 或者 `:no-autolinker`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置一样，多个操作符可以追加

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

```css
@font-face {
 src: url(http://lea.verou.me/logo.otf);
 font-family: 'LeaVerou';
}
```

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
