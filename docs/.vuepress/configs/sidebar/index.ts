import type { SidebarConfig } from '@vuepress/theme-default'

// 左侧导航栏
const sidebar: SidebarConfig = {
  '/start/': [
    {
      text: '监控',
      children: [
        '/start/README.md',
      ],
    },
  ],
  '/rearend/java': [
    {
      text: 'Java',
      children: [
        '/rearend/java/README.md',
      ],
    }
  ]
}

export default sidebar;
