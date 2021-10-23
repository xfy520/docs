# vuepress-plugin-prismjs-next

## 介绍

`Vuepress 2.0` 代码美化，基于 `prismjs` 二次封装，使其支持 `SSR` 渲染，[项目地址](https://github.com/xfy520/vuepress-plugin-prismjs-next)，[NPM](https://www.npmjs.com/package/vuepress-plugin-prismjs-next)

主要功能列表：

> - 语言预加载
> - 主题设置
> - 链接突出显示、跳转
> - `diff` 语法高亮
> - 关键字高亮
> - 内联颜色
> - 行高亮
> - 行号显示
> - 括号匹配
> - 样式预览器
> - 显示隐藏符号
> - 工具栏、复制、语言显示
> - 树型目录突出
> - 更多功能期待大家的提出

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
