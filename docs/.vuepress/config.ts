import { defineUserConfig } from '@vuepress/cli';
import { UserConfig } from 'vite';
import { Options } from '@vitejs/plugin-vue';
import type { DefaultThemeOptions } from '@vuepress/theme-default';

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
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
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
    home: '/',
    notFound: ['访问出错了!'],
    backToHome: '返回首页',
    themePlugins: {
      prismjs: true
    }
  },
  bundler: '@vuepress/vite',
  dest: `${__dirname}../../../dist`,
  temp: `${__dirname}../../../temp`,
  cache: `${__dirname}../../../cache`,
  port: 8081,
  open: false,
})
