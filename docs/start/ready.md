# 准备项

1. 安装 Ubuntu 系统服务器一台（其实Windows、CentOS等系统均可以），也可以多台，这里选择单机部署
2. 安装好 Docker，因为所有服务都采用容器部署
3. 安装好 docker-compose，为了配置方便采用 docker-compose 配置容器
4. 有一个域名 example.com，也可以直接用 IP 访问，但这里为了方便采用云服务器+域名
5. 80/443 端口已打开，也可以采用其他端口，但为了方便最好是开启 80/443 端口
