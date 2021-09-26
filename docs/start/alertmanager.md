# Alertmanager 安装

Alertmanager 安装很简单，只需要一份配置文件，并在启动 Alertmanager 时指定配置文件即可开启告警功能，alertmanager.yml 配置文件可以配置告警分组、告警路由、告警抑制、告警静默等配置。下面配置一份很简单的告警配置

## alertmanager.yml 文件
```yaml
global: # 全局配置，比如配置邮箱服务，邮箱服务也可以单独在每个email_configs节点中进行配置
  smtp_smarthost: 'smtp.qq.com:465' # 告警邮件发送者SMTP地址
  smtp_from: 'your email@qq.com'  # 发件者邮箱
  smtp_auth_username: 'username'  # 账号
  smtp_auth_password: 'password'  #邮箱专用授权码，不是QQ登录密码，在QQ邮箱中设置
  smtp_require_tls: false  # 关闭TLS授权
route: # 定义告警路由规则
  group_by: ['group']  # 分组配置，在 Prometheus 的 rules 中进行分组的定义，一个分组内的告警会在一个邮件中
  group_wait: 10s  # 分组等待时间
  receiver: 'tos'  # 告警接受者，具体信息将在 receivers 区域中配置
  routes:
  - group_by: []
receivers: # 告警邮件接受者配置部分
- name: 'tos' # 和上面 route 部分中的 receiver 一致
  email_configs:  # 接收者邮件配置
  - to: 'to your email@qq.com'  # 接收者邮箱
    send_resolved: true # 接收告警恢复邮件
```

## docker-compose 配置

```yaml
version: '3.8'

services:
  alertmanager:
    image: prom/alertmanager:v0.23.0
    container_name: alertmanager
    restart: always
    networks:
      - traefik_net
    expose:
      - 9093
    volumes:
        - ./alertmanager:/etc/alertmanager # 映射配置文件所在目录路径
        - ./alertmanager/data:/alertmanager # 映射 alertmanager 根目录
    command:
      - '--config.file=/etc/alertmanager/config.yml' # 通过命令方式指定配置文件
      - '--storage.path./alertmanager' # 通过命令设置数据存储路径

networks:
  traefik_net:
    external: true
```

## 启动

```sh
docker-compose up -d
```
