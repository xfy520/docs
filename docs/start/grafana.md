# Grafana 安装

这里只是为了演示监控系统的搭建，所以安装 Grafana 也只是简单的利用 docker-compose 配置启动容器，详细配置请[前往]()，具体的配置如下。

## docker-compose 配置

```yaml
version: '3.8'

services:
  grafana:
    image: grafana/grafana:8.1.3
    container_name: grafana
    restart: always
    user: "root" # 同样设置root用户启动，因为需要写入数据
    networks:
      - traefik_net
    volumes:
      - ./grafana/provisioning/dashboards:/etc/grafana/provisioning/dashboards # 映射面板配置目录
      - ./grafana/provisioning/datasources:/etc/grafana/provisioning/datasources # 映射数据源配置目录
      - ./grafana/grafana_data:/var/lib/grafana # 映射数据存放目录
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=123456 # 设置登录密码环境变量，默认账号admin
      - GF_USERS_ALLOW_SIGN_UP=false # 设置为false时表示禁止⽤用户注册/创建用户账号
    labels:
      - "traefik.enable=true" # 暴露给 Traefik
      - "traefik.backend=grafana"
      - "traefik.docker.network=traefik_net"
      - "traefik.http.routers.grafana.entrypoints=https"
      - "traefik.http.middlewares.grafana_compress.compress=true" # 开启压缩中间件
      - "traefik.http.routers.grafana.middlewares=grafana_compress" # 设置压缩中间件
      - "traefik.http.routers.grafana.rule=Host(`grafana.example.com`)" # 设置路由规则
      - "traefik.http.services.grafana.loadbalancer.server.port=3000"

networks:
  traefik_net:
    external: true
```

## 运行

```sh
docker-compose up -d
```

## 查看

浏览器访问 `grafana.example.com`

![grafana](/images/grafana/1.png)

## 设置数据源

<div class="home-img">
  <img src="/images/grafana/2.png" alt="设置数据源"/>
  <img src="/images/grafana/3.png" alt="设置数据源"/>
  <img src="/images/grafana/4.png" alt="设置数据源"/>
</div>

 <div class="home-img" style="margin-top: 1%;">
  <img src="/images/grafana/5.png" alt="设置数据源"/>
  <img src="/images/grafana/6.png" alt="设置数据源"/>
  <img src="/images/grafana/10.png" alt="设置数据源"/>
</div>

## 设置面板

<div class="home-img">
  <img src="/images/grafana/7.png" alt="设置面板"/>
  <img src="/images/grafana/8.png" alt="设置面板"/>
  <img src="/images/grafana/9.png" alt="设置面板"/>
</div>

## Grafana 面板配置

[Docker 容器监控](docker_containers.json)

[Traefik 服务监控](traefik_services.json)

[服务指标监控](monitor_services.json)
