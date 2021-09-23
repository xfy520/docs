import type { NavbarConfig } from '@vuepress/theme-default'

// 顶部导航栏

const navbar: NavbarConfig = [
  {
    text: '开始',
    link: '/start/',
  },
  {
    text: '后端',
      children: [
        '/rearend/README.md',
      ],
  },
  {
    text: '前端',
    children: [
      '/frontend/README.md',
    ],
  },
  {
    text: '服务',
    children: [
      '/service/README.md'
    ],
  },
  {
    text: '扩展',
    children: [
      '/expand/README.md'
    ],
  },
];

export default navbar;
