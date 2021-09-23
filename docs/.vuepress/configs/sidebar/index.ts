import type { SidebarConfig } from '@vuepress/theme-default'

// 左侧导航栏
const sidebar: SidebarConfig = {
  '/start/': [
    {
      text: '开始',
      children: [
        '/start/README.md',
      ],
    },
  ],
  '/rearend/': [
    {
      text: '后端',
      children: [
        '/rearend/README.md',
      ],
    },
  ],
  '/frontend/': [
    {
      text: '前端',
      children: [
        '/frontend/README.md',
      ],
    },
  ],
  '/service/': [
    {
      text: '服务',
      children: [
        '/service/README.md'
      ],
    },
  ],
  '/expand/': [
    {
      text: '扩展',
      children: [
        '/expand/README.md'
      ],
    },
  ]
}

export default sidebar;
