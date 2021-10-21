import { defineUserConfig } from '@vuepress/cli';
import { HeadConfig } from '@vuepress/shared';
import { PluginConfig } from '@vuepress/core';
import { resolve } from 'path';
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import { navbar, sidebar } from './configs';

const isProd = process.env.NODE_ENV === 'production';

const head: HeadConfig[] = [
  ['link', { rel: 'stylesheet', type: 'text/css', href: '/style/index.css' }],
  ['script', { type: 'text/javascript', src: '/js/script/autopush-baidu.js' }],
  ['script', { type: 'text/javascript', src: '/js/script/count-baidu.js' }],
  ['script', { type: 'text/javascript', src: '/js/script/autopush-360.js' }],
  ['link', { rel: 'icon', href: '/favicon.ico' }],
];

const plugins: PluginConfig[] = [
  [
    '@vuepress/plugin-search',
    {
      placeholder: '搜索',
      hotKeys: ['s', '/'],
    },
  ],
  [
    'vuepress-plugin-prismjs-next',
    {
      languages: ['less', 'css', 'javascript', 'sass', 'html', 'scss', 'stylus', 'yaml', 'java', 'diff'],
      plugins: [
        'inline-color', 'autolinker', 'data-uri-highlight', 'normalize-whitespace', 'show-invisibles', // node
       'diff-highlight', 'treeview', 'highlight-keywords', // prismjs
      'match-braces', 'line-numbers', 'line-highlight', 'toolbar', 'show-language', 'copy-to-clipboard', 'download-button', 'previewers',
      ],
    },
  ],
  [
    '@vuepress/plugin-google-analytics',
    {
      id: 'G-5SQHLTK55C',
    },
  ],
];

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',
  lang: 'zh-CN',
  title: '技术杂谈',
  description: '欢迎来到闲聊世界',
  head,
  plugins,
  themeConfig: {
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
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
    themePlugins: {
      prismjs: false,
    },
  },
  bundler: process.env.DOCS_BUNDLER ?? (isProd ? '@vuepress/webpack' : '@vuepress/vite'),
  dest: `${__dirname}../../../.dist`,
  temp: `${__dirname}../../../.temp`,
  cache: `${__dirname}../../../.cache`,
  port: 8081,
  open: false,
  alias: {
    '@js': resolve(__dirname, './public/js'),
  },
  markdown: {
    code: {
      preWrapper: false,
    },
    customComponent: false,
    importCode: {
      handleImportPath: (str) => str.replace(/^@js/, resolve(__dirname, 'public/js')),
    },
  },
});
