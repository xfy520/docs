import type { NavbarConfig } from '@vuepress/theme-default'

// 顶部导航栏

const navbar: NavbarConfig = [
  {
    text: '开始',
    link: '/start/',
  },
  {
    text: '开源项目',
    children: [
      {
        text: 'wssio',
        link: '/opensource/wssio/'
      },
      {
        text: 'wscio',
        link: '/opensource/wscio/'
      },
      {
        text: 'vue3-menus',
        link: '/opensource/vue3-menus/'
      },
      {
        text: 'v-page-generator',
        link: '/opensource/v-page-generator/'
      },
      {
        text: 'vue3-seamless-scroll',
        link: '/opensource/vue3-seamless-scroll/'
      },
    ]
  },
  {
    text: 'LeetCode',
    children: [
      {
        text: '数组（2）',
        link: '/leetcode/array/1'
      },
      {
        text: '字符串（2）',
        link: '/leetcode/string/1'
      }
    ]
  },
  {
    text: '后端',
    children: [
      {
        text: 'Java',
        children: [
          {
            text: 'Java',
            link: '/rearend/java/README.md'
          },
          {
            text: 'Spring Boot',
            link: '/rearend/java/springboot/README.md',
          }
        ],
      },
      {
        text: 'Golang',
        children: [
          {
            text: 'Golang',
            link: '/rearend/golang/README.md'
          },
          {
            text: 'Gin',
            link: '/rearend/golang/gin/README.md',
          }
        ],
      },
      {
        text: 'Node',
        children: [
          {
            text: 'Node.js',
            link: '/rearend/node/README.md',
          },
          {
            text: 'Fastify',
            link: '/rearend/node/fastify/README.md',
          }
        ],
      },
    ],
  },
  {
    text: '前端',
    children: [
      {
        text: 'Vue3.0',
        link: '/frontend/vue3/README.md',
      },
      {
        text: 'JavaScript',
        link: '/frontend/javascript/README.md',
      },
      {
        text: 'CSS',
        link: '/frontend/css/README.md',
      },
    ],
  },
  {
    text: '扩展',
    children: [
      {
        text: 'Docker',
        link: '/expand/docker/README.md',
      },
      {
        text: 'Docker-Compose',
        link: '/expand/dockercompose/README.md',
      },
      {
        text: 'Traefik',
        link: '/expand/traefik/README.md',
      },
      {
        text: 'Drone',
        link: '/expand/drone/README.md',
      },
      {
        text: 'Vite',
        link: '/expand/vite/README.md',
      },
    ],
  },
  {
    text: '数据库',
    children: [
      {
        text: 'MySQL',
        link: '/database/mysql/README.md'
      },
      {
        text: 'MongoDB',
        link: '/database/mongodb/README.md'
      },
      {
        text: 'Redis',
        link: '/database/redis/README.md'
      },
    ]
  },
  {
    text: '工具',
    children: [
      {
        text: 'Vs Code',
        link: '/tool/vscode/README.md'
      },
      {
        text: 'V2ray',
        link: '/tool/v2ray/README.md',
      },
    ],
  },
];

export default navbar;
