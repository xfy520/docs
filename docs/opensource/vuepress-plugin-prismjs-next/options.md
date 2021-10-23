# 配置参数

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

## 添加插件

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['shell', 'javascript', 'java'],
      plugins: ['inline-color', 'autolinker', 'show-invisibles'] // 在这里添加你要使用的插件
    }],
  ]
}
```

## 主题配置

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['shell', 'javascript', 'java'],
      plugins: ['inline-color'], // 在这里添加你要使用的插件
      theme: 'dark', // funky | okaidia | twilight | coy | solarized | tomorrow 默认采用 Vuerepss代码高亮主题
    }],
  ]
}
```

## vPre

> 是否开启代码块支持 `Vue` 解析，默认不解析

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['shell', 'javascript', 'java'],
      plugins: ['inline-color'], // 在这里添加你要使用的插件
      theme: 'dark', // funky | okaidia | twilight | coy | solarized | tomorrow 默认采用 Vuerepss代码高亮主题
      vPre: true // 设置为 false 支持解析
    }],
  ]
}
```

## lineNumbers

> 设置最少行数开启行号显示，默认超过 `3` 行开启行号显示

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['shell', 'javascript', 'java'],
      plugins: ['inline-color'], // 在这里添加你要使用的插件
      theme: 'dark', // funky | okaidia | twilight | coy | solarized | tomorrow 默认采用 Vuerepss代码高亮主题
      vPre: true, // 设置为 false 支持解析
      lineNumbers: 5
    }],
  ]
}
```

## NormalizeWhitespace

> 空白规范化显示配置，具体配置同 `Prismjs` [`normalize-whitespace`](https://prismjs.com/plugins/normalize-whitespace/) 插件配置

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['shell', 'javascript', 'java'],
      plugins: ['inline-color'], // 在这里添加你要使用的插件
      theme: 'dark', // funky | okaidia | twilight | coy | solarized | tomorrow 默认采用 Vuerepss代码高亮主题
      vPre: true, // 设置为 false 支持解析
      lineNumbers: 5,
      NormalizeWhitespace?: {
          'remove-trailing'?: boolean, // 删除所有行的尾随空格
          'remove-indent'?: boolean, // 如果整个代码块缩进太多，它会删除额外的缩进
          'left-trim'?: boolean, // 删除代码块顶部的所有空格
          'right-trim'?: boolean, // 删除代码块底部的所有空格
          'break-lines'?: number, // 以特定长度断开长行的简单方法（默认为 80 个字符）
          'indent'?: number, // 向每一行添加一定数量的选项卡
          'remove-initial-line-feed'?: boolean,
          'tabs-to-spaces'?: number,
          'spaces-to-tabs'?: number
        }
    }],
  ]
}
```

## 插件配置

|         插件         |              功能              | 默认状态 |                                                                              配置指令                                                                              |
| :------------------: | :----------------------------: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      autolinker      |       链接突出显示与跳转       | 默认开启 |                                                     `no-al` \| `no-autolinker` 关闭单个代码块 `autolinker`功能                                                     |
|    diff-highlight    |         `diff`语法高亮         | 默认开启 |                                                                                `无`                                                                                |
|  highlight-keywords  |           关键字高亮           | 默认开启 |                                                                                `无`                                                                                |
|     inline-color     |          内联颜色显示          | 默认开启 |                                                   `no-ic` \| `no-inline-color` 关闭单个代码块 `inline-color`功能                                                   |
|    line-highlight    |             行高亮             | 默认开启 |                          与 [`Vuepress`](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97) 行高亮配置一样                          |
|     line-numbers     |              行号              | 默认开启 |                                      `no-ln` \| `no-line-numbers` 关闭单个代码块 `line-numbers`功能，`:-5`:表示从`-5`开始计数                                      |
|     match-braces     |            括号匹配            | 默认开启 | `no-mb` \| `no-match-braces` 关闭单个代码块 `match-braces`功能，`:brace-hover`:鼠标移入、`:brace-select`:单击匹配突出、`:no-rainbow-braces`:关闭彩虹颜色，默认开启 |
| normalize-whitespace |           空白规范化           | 默认关闭 |                                              `nw` \| `normalize-whitespace` 开启单个代码块 `normalize-whitespace`功能                                              |
|      previewers      |            颜色预览            | 默认开启 |                                                     `no-pw` \| `no-previewers` 关闭单个代码块 `previewers`功能                                                     |
|   show-invisibles    |          显示隐藏符号          | 默认关闭 |                                                   `si` \| `show-invisibles` 开启单个代码块 `show-invisibles`功能                                                   |
|       toolbar        | 工具栏，复制、显示语言插件前提 | 默认开启 |                                                        `no-tb` \| `no-toolbar` 开启单个代码块 `toolbar`功能                                                        |
|       treeview       |          树型目录高亮          | 默认开启 |                                                                                `无`                                                                                |
|    show-language     |            显示语言            | 默认开启 |                                                                                `无`                                                                                |
|  copy-to-clipboard   |            复制功能            | 默认开启 |                                                                                `无`                                                                                |

**`配置命令`**

```md
```less:-5{1,5-7,9}:si:brace-hover:normalize-whitespace
```

```less:-5{1,5-7,9}:si:brace-hover:normalize-whitespace
// [vuepress-plugin-prismjs-next](/opensource/vuepress-plugin-prismjs-next/)
// https://github.com/xfy520/vuepress-plugin-prismjs-next

.example-gradient {
 background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
 background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
 background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
 background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
 background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
}
@angle: 3rad;
.example-angle {
 transform: rotate(.4turn)
}
@nice-blue: #5B83AD;
.example-color {
 color: hsla(102, 53%, 42%, 0.4);
}
@easing: cubic-bezier(0.1, 0.3, 1, .4);
.example-easing {
 transition-timing-function: ease;
}
@time: 1s;
.example-time {
 transition-duration: 2s;
}
```
