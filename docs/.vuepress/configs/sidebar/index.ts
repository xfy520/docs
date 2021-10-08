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
        '/start/promtail.md',
        '/start/alertmanager.md',
        '/start/loki.md',
        '/start/cadvisor.md',
        '/start/nodeexporter.md',
        '/start/prometheus.md',
        '/start/grafana.md',
        '/start/end.md',
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
        '/opensource/vue3-menus/options.md',
        '/opensource/vue3-menus/example/1.md',
        '/opensource/vue3-menus/example/2.md',
        '/opensource/vue3-menus/example/3.md',
        '/opensource/vue3-menus/example/4.md',
        '/opensource/vue3-menus/example/5.md',
        '/opensource/vue3-menus/example/6.md',
        '/opensource/vue3-menus/example/7.md',
        '/opensource/vue3-menus/example/8.md',
        '/opensource/vue3-menus/example/9.md',
        '/opensource/vue3-menus/example/10.md',
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
        '/opensource/vue3-seamless-scroll/options.md',
        '/opensource/vue3-seamless-scroll/example/1.md',
        '/opensource/vue3-seamless-scroll/example/2.md',
        '/opensource/vue3-seamless-scroll/example/3.md',
        '/opensource/vue3-seamless-scroll/example/4.md',
        '/opensource/vue3-seamless-scroll/example/5.md',
        '/opensource/vue3-seamless-scroll/example/6.md',
        '/opensource/vue3-seamless-scroll/example/7.md',
        '/opensource/vue3-seamless-scroll/example/8.md',
        '/opensource/vue3-seamless-scroll/example/9.md',
        '/opensource/vue3-seamless-scroll/example/10.md',
        '/opensource/vue3-seamless-scroll/example/11.md',
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
  '/frontend/css/': [
    '/frontend/css/README.md'
  ]
};

export default sidebar;
