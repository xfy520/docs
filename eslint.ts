import type { SidebarConfig } from '@vuepress/theme-default';

// 左侧导航栏
const sidebar: SidebarConfig = {
  '/start/': [
    {
      text: '监控',
      children: [
        '/start/README.md',
        '/start/ready.md',
        '/start/traefik.md',
      ],
    },
  ],
  '/opensource/wssio/': [
    {
      text: 'Wssio',
      children: [
        '/opensource/wssio/README.md',
      ],
    },
  ],
  '/opensource/wscio/': [
    {
      text: 'Wscio',
      children: [
        '/opensource/wscio/README.md',
      ],
    },
  ],
  '/opensource/vue3-menus/': [
    {
      text: 'vue3-menus',
      children: [
        '/opensource/vue3-menus/README.md',
      ],
    },
  ],
  '/opensource/v-page-generator/': [
    {
      text: 'v-page-generator',
      children: [
        '/opensource/v-page-generator/README.md',
      ],
    },
  ],
  '/opensource/vue3-seamless-scroll/': [
    {
      text: 'vue3-seamless-scroll',
      children: [
        '/opensource/vue3-seamless-scroll/README.md',
      ],
    },
  ],
  '/leetcode/array/': [
    '/leetcode/array/1.md',
    '/leetcode/array/2.md',
  ],
  '/leetcode/string/': [
    '/leetcode/string/1.md',
    '/leetcode/string/2.md',
  ],
  '/rearend/java': [
    {
      text: 'Java',
      children: [
        '/rearend/java/README.md',
      ],
    },
  ],
};

export default sidebar;
