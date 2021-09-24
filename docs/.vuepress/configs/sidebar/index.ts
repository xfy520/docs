import type { SidebarConfig } from '@vuepress/theme-default'

// 左侧导航栏
const sidebar: SidebarConfig = {
  '/start/': [
    {
      text: '监控',
      children: [
        '/start/README.md',
        '/start/ready.md',
        '/start/traefik.md'
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
    }
  ]
}

export default sidebar;
