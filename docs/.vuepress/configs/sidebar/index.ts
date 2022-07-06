import type { SidebarConfig } from '@vuepress/theme-default';
import expand from './expand';
import opensource from './opensource';
import leetcode from './leetcode';
import rearend from './rearend';
import frontend from './frontend';

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
  ...opensource,
  ...leetcode,
  ...rearend,
  ...frontend,
  ...expand
};

export default sidebar;
