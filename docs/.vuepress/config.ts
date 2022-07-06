import { defineUserConfig } from "vuepress";
import type { HeadConfig } from '@vuepress/shared';
import type { Plugin } from '@vuepress/core';
import { viteBundler } from '@vuepress/bundler-vite';
import { webpackBundler } from '@vuepress/bundler-webpack';
import { searchPlugin } from '@vuepress/plugin-search'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics';
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { resolve } from 'path';
import wssioTheme from './theme';
import { mermaidPlugin } from './plugins'
import { navbar, sidebar } from './configs';

const isProd = process.env.NODE_ENV === 'production';

const head: HeadConfig[] = [
  ['link', { rel: 'icon', href: '/favicon.ico' }],
  ['meta', { name: 'application-name', content: '技术聊斋' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: '技术聊斋' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['link', { rel: 'stylesheet', type: 'text/css', href: '/style/index.css' }],
  ['script', { type: 'text/javascript', src: '/js/script/autopush-baidu.js' }],
  ['script', { type: 'text/javascript', src: '/js/script/count-baidu.js' }],
];

const plugins: Plugin[] = [
  searchPlugin({
    locales: {
      '/': {
        placeholder: '搜索',
      },
    },
    hotKeys: ['s', '/'],
  }),
  googleAnalyticsPlugin({
    id: 'G-5SQHLTK55C',
  }),
  mermaidPlugin(),
];


if (isProd) {
  plugins.push(shikiPlugin({ theme: 'dark-plus' }))
}

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '技术聊斋',
      description: '欢迎来到闲聊世界',
    },
  },
  theme: wssioTheme({
    logo: '/home.png',
    repo: 'xfy520/docs',
    docsDir: 'docs',
    locales: {
      '/': {
        navbar,
        sidebar,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
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
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      }
    },
    themePlugins: {},
  }),
  bundler: isProd ? webpackBundler({
    postcss: {},
    vue: {},
  }) : viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  dest: `${__dirname}../../../.dist`,
  temp: `${__dirname}../../../.temp`,
  cache: `${__dirname}../../../.cache`,
  port: 8081,
  open: false,
  alias: {
    '@js': resolve(__dirname, './public/js'),
  },
  markdown: {
    importCode: {
      handleImportPath: (str) => str.replace(/^@js/, resolve(__dirname, 'public/js')),
    },
  },
  plugins,
});
