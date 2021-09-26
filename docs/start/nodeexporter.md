# Node Exporter 安装

Node Exporter 安装同样只需要一份 docker-compose 配置文件即可

## docker-compose 配置

```yaml
version: '3.8'

services:
  node-exporter:
    image: prom/node-exporter:v1.2.2
    container_name: node-exporter
    restart: unless-stopped
    expose:
      - 9100
    networks:
      - traefik_net
    volumes: # 映射系统相关文件
      - /proc:/host/proc:ro
      - /sys:/host/sys:ro
      - /:/rootfs:ro
      - ./node_exporter:/node_exporter/prom
    command:
      - '--path.procfs=/host/proc'
      - '--path.rootfs=/rootfs' # 启动容器以进行主机监视
      - '--path.sysfs=/host/sys'
      - '--collector.textfile.directory=/node_exporter/prom' # 指定本地文本收集路径，收集文本信息
      - '--collector.filesystem.ignored-mount-points=^/(sys|proc|dev|host|etc|rootfs/var/lib/docker/containers|rootfs/var/lib/docker/overlay2|rootfs/run/docker/netns|rootfs/var/lib/docker/aufs)($$|/)' # 通过正则表达式忽略某些文件系统挂载点的信息收集

networks:
  traefik_net:
    external: true
```

## 运行查看

```sh
docker-compose up -d
```
