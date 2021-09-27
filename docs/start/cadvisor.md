# cAdvisor 安装

cAdvisor 安装比较简单，直接编写 docker-compose 文件即可启动，详细配置请[前往]()。

## docker-compose 配置

```yaml
version: '3.8'

services:
  cadvisor:
    image: gcr.io/cadvisor/cadvisor:v0.40.0
    container_name: cadvisor
    restart: always
    privileged: true
    expose:
      - 8080
    networks:
      - traefik_net
    devices:
      - /dev/kmsg:/dev/kmsg
    volumes: # 映射 docker 相关文件
      - /:/rootfs:ro
      - /var/run:/var/run:ro
      - /sys:/sys:ro
      - /var/lib/docker/:/var/lib/docker:ro
      - /cgroup:/cgroup:ro
      - /dev/disk/:/dev/disk:ro

networks:
  traefik_net:
    external: true
```

## 运行查看

```sh
docker-compose up -d
```
