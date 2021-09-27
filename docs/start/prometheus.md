# Prometheus 安装

Prometheus 配置主要分两部分，一是配置服务相关设置，二是配置 Prometheus 告警规则，详细配置请[前往]()。

## 服务启动配置

```yaml
global:
  scrape_interval:     15s # 抓取周期
  evaluation_interval: 15s # 估算规则的周期

  external_labels: # 和外部系统（例如AlertManager）通信时为时间序列或者警情（Alert）强制添加的标签列表
      monitor: 'my-project'

rule_files: # 规则文件列表
  - 'alert.rules'

alerting: # Alertmanager相关配置
  alertmanagers:
  - scheme: http # 请求格式
    static_configs:
    - targets:
      - 'alertmanager:9093' # Alertmanager 服务地址

scrape_configs: # 抓取配置列表
  - job_name: 'nodeexporter'
    scrape_interval: 5s # 抓取时间周期
    static_configs:
      - targets: ['node-exporter:9100'] # 日志抓取目标，可以写成主机+端口，这里使用的容器名+端口

  - job_name: 'cadvisor'
    scrape_interval: 5s
    static_configs:
      - targets: ['cadvisor:8080']

  - job_name: 'prometheus'
    scrape_interval: 10s
    static_configs:
      - targets: ['prometheus:9090']
```

## 规则文件配置

具体告警规则配置[前往](README.md)

```yaml
groups:
- name: <string> # 警报规则组的名称
  rules:
  - alert: <string> # 警报规则的名称
    expr: <string> # 使用PromQL表达式完成的警报触发条件，用于计算是否有满足触发条件
    for:  [ <duration> | default 0 ] # 等待时间
    labels: # 自定义标签，允许自行定义标签附加在警报上，比如high warning
      [ <lable_name>: <label_value> ]
    annotations: # 用来设置有关警报的一组描述信息，其中包括自定义的标签，以及expr计算后的值。
      [ <lable_name>: <tmpl_string> ]
```

## docker-compose 配置

```yaml
version: '3.8'

services:
  prometheus:
    image: prom/prometheus:v2.30.0
    container_name: prometheus
    restart: always
    user: "root" # 设置启动用户
    expose:
      - 9090
    networks:
      - traefik_net
    volumes:
      - ./prometheus/:/etc/prometheus/ # 映射 Prometheus 配置文件所在目录
      - ./prometheus/prometheus_data:/prometheus # 映射 Prometheus 数据目录
    command:
      - '--config.file=/etc/prometheus/prometheus.yml' # 命令设置配置文件
      - '--storage.tsdb.path=/prometheus' # 命令设置 Prometheus 数据存放目录
      - '--web.console.libraries=/etc/prometheus/console_libraries' # 控制台还可以访问在标志指向的目录
      - '--web.console.templates=/etc/prometheus/consoles' # 控制台在输出标志指向的目录
      - '--storage.tsdb.retention.time=200h' # 何时删除旧数据
      - '--web.enable-lifecycle' # 如果 Prometheus 未使用，启动--web.enable-lifecycle
    labels:
      - "traefik.enable=true" # 启用 Traefik 容器扫描
      - "traefik.backend=prometheus"
      - "traefik.docker.network=traefik_net"
      - "traefik.http.routers.prometheus.entrypoints=https" # 入口点 HTTPS
      - "traefik.http.middlewares.prometheus-auth.basicauth.users=user:$2y$05$OLpOZMjQq1H700uxQX49CuptuFfu6GYbPI.wMY4Gqgoqta9lYSkF6" # 基础认证账号密码，运行命令：htpasswd -Bbn user password
      - "traefik.http.middlewares.prometheus-auth.basicauth.removeheader=true"
      - "traefik.http.middlewares.prometheus-compress.compress=true" # 开启压缩中间件
      - "traefik.http.routers.prometheus.middlewares=prometheus-auth,prometheus-compress" # 添加认证与压缩中间件
      - "traefik.http.routers.prometheus.rule=Host(`prometheus.example.com`)" # 设置路由规则
      - "traefik.http.services.prometheus.loadbalancer.server.port=9090"

networks:
  traefik_net:
    external: true
```

## 运行容器查看

```sh
docker-compose up -d
```

浏览器输入 `https://prometheus.example.com/targets` 查看，输出如下图中类似信息则安装成功

![prometheus](/images/prom.png)
