import { defineUserConfig } from '@vuepress/cli';
import { UserConfig } from 'vite';
import { Options } from '@vitejs/plugin-vue';
import type { DefaultThemeOptions } from '@vuepress/theme-default';

import { navbar, sidebar } from './configs'

export default defineUserConfig<DefaultThemeOptions, {
  viteOptions: UserConfig,
  vuePluginOptions: Options
}>({
  base: '/',
  lang: 'zh-CN',
  title: '技术杂谈',
  description: '欢迎来到闲聊世界',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  bundlerConfig: {},
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        placeholder: '搜索',
        hotKeys: ['s', '/']
      }
    ],
    [
      '@vuepress/plugin-prismjs',
      {
        preloadLanguages: ['java', 'css', 'javascript', 'typescript', 'html', 'json']
      }
    ]
  ],
  themeConfig: {
    navbar,
    sidebar,
    tip: '提示',
    warning: '注意',
    danger: '警告',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    themePlugins: {
      prismjs: true
    }
  },
  bundler: '@vuepress/vite',
  dest: `${__dirname}../../../.dist`,
  temp: `${__dirname}../../../.temp`,
  cache: `${__dirname}../../../.cache`,
  port: 8081,
  open: false,
})
