# Promtail 安装

Promtail 是负责收集日志发送给 Loki 的代理程序，Promtail 默认通过一个 `config.yaml` 文件进行配置，其中包含 Promtail 服务端信息、存储位置以及如何从文件中抓取日志等配置。

这里只是为了搭建服务监控例子，所以只做简单配置，具体详细配置[前往](promtail.md)

## config.yml 配置

```yaml
server: # server 属性配置了 Promtail 作为 HTTP 服务器的行为
  http_listen_port: 9080 # HTTP 服务监听的端口
  grpc_listen_port: 0 # gRPC 服务监听的端口（0表示随机）

positions: # positions 属性配置了 Promtail 保存文件的位置，以便重启恢复日志读取。
  filename: /tmp/positions.yaml

clients: # clients 属性配置了 Promtail 如何连接到 Loki 服务
  - url: http://loki:3100/loki/api/v1/push # 这里的loki是容器名，如果不在同一个docker网络中换成Loki服务的真实主机地址

scrape_configs: # 配置日志抓取规则
- job_name: wssio # 用于在 Promtail 中识别该日志抓取规则名称
  static_configs: # 静态配置允许指定一个目标列表与标签集
  - targets:
      - localhost # 在当前节点中查找日志
    labels:
      job: wssio  # 在 Prometheus中，job 标签对于连接指标和日志很有用
      __path__: /var/log/*log # 抓取的日志路径
```

## docker-compose 配置

```yaml
version: '3.8'

services:
  promtail:
    image: grafana/promtail:k63-64e2a36-amd64
    container_name: promtail
    restart: always
    volumes:
      - /home/ubuntu/data/traefik/log:/var/log # Promtail 抓取日志路径映射
      - /home/ubuntu/data/promtail/config.yml:/etc/promtail/config.yml # 映射 Promtail 配置文件路径
      - /home/ubuntu/data/promtail/positions.yaml:/tmp/positions.yaml # 映射 Promtail 日志抓取进度记录文件路径
    command: -config.file=/etc/promtail/config.yml # 通过命令的方式设置配置文件
    networks:
      - traefik_net

networks:
  traefik_net:
    external: true
```

## 启动查看信息

```sh
docker-compose up -d
curl http://127.0.0.1:9080
```
