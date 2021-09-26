# 监控套件介绍

服务器监控就是指将远程服务器运行数据通过各种方式记录下来，比如服务器的性能指标、Docker容器的使用情况、Traefik反向代理服务的运行情况等日志记录，并在需要时可以随时调用监控记录进行查看。

## Traefik

[Traefik](https://doc.traefik.io/) 跟 Nginx 都是一款优秀的Http反向代理、负载均衡工具。而 Traefik 又称之为边缘路由器(Edge Router)，Traefik 支持多种后台 ([Docker](https://doc.traefik.io/traefik/providers/docker/), [Kubernetes](https://doc.traefik.io/traefik/providers/kubernetes-ingress/), [Marathon](https://doc.traefik.io/traefik/providers/marathon/), [Consul](https://doc.traefik.io/traefik/providers/consul/), [Etcd](https://doc.traefik.io/traefik/providers/etcd/), [Zookeeper](https://doc.traefik.io/traefik/providers/zookeeper/), [File](https://doc.traefik.io/traefik/providers/file/)，[...](https://doc.traefik.io/traefik/providers/overview/)) 来自动化、动态的应用它的配置文件设置。因此 Traefik 具有如下一些特性：

- 它非常快
- 支持HTTP/2
- 后端断路器
- 支持Websocket
- 支持网络错误重试
- 漂亮的控制面板界面
- 支持高可用集群模式
- 前后台均支持SSL (包括SNI)
- 支持最小化 官方 docker 镜像
- metrics 的支持，对 prometheus 和 k8s 的集成
- 无需安装其他依赖，通过Go语言编写的单一可执行文件
- 与 Docker 的完美集成，基于 Container label 的配置
- 后台监控, 可以监听后台变化进而自动化应用新的配置文件设置
- 支持自动的服务发现与负载均衡，配置文件热更新，无需重启进程
- 支持Let’s Encrypt 与 Buypass 两种 TLS 证书 (自动更新HTTPS证书)
- 多种后台支持：Docker, Kubernetes, Marathon, Mesos, Consul, Etcd...

## Node-Exporter

[Node-Exporter](https://github.com/prometheus/node_exporter/) 是一款采用 Go 语言开发，专门用来收集 *NIX 系统中硬件、系统指标的开源工具。Node-Exporter 作用：收集操作系统的基本系统, 例如CPU， 内存, 硬盘空间等基本信息, 并对外提供 Api 接口用于 Prometheus 查询存储。既可以用二进制安装部署，也可以通过容器形式部署

## cAdvisor

[cAdvisor](https://github.com/google/cadvisor) 是 Google 用来分析 Docker 容器的资源占用以及性能特性的工具。cAdvisor 是一个运行中的守护进程用来收集、聚合、处理和导出运行容器相关的信息，每个容器保持独立的参数、CPU使用情况、内存使用情况、网络吞吐量及文件系统使用情况、历史资源使用情况和完整的资源使用数据。cAdvisor 不仅可以搜集一台机器上所有运行的容器信息，还提供基础查询界面和 Http 接口，方便其他组件如 Prometheus 进行数据抓取，或者 cAdvisor+ influxdb + grafna搭配使用。

## Prometheus

[Prometheus](https://prometheus.io/)(普罗米修斯) 是一款开源监控报警系统和时序列数据库(TSDB)，Prometheus 采用 Go 语言开发，是Google BorgMon监控系统的开源版本。2016年由 Google 发起的 Linux 基金会旗下的原生云基金会(Cloud Native Computing Foundation), 将Prometheus纳入其下第二大开源项目。 目前 Prometheus 开源社区相当活跃。 Prometheus 功能完善、全面。Prometheus 性能也足够支撑上万台规模的集群。

- 多维度数据模型。
- 灵活的查询语言。
- 不依赖分布式存储，单个服务器节点是自主的。
- 通过基于HTTP的pull方式采集时序数据。
- 可以通过中间网关进行时序列数据推送。
- 通过服务发现或者静态配置来发现目标服务对象。
- 支持多种多样的图表和界面展示，比如 Grafana 等。

## Alertmanager

Prometheus 监控平台主要是提供了数据采集和存储功能，当要根据事件触发告警时则需要依赖 [Alertmanager](https://github.com/prometheus/alertmanager) 组件来完成或者使用 Grafana Alerting。AlertManager 支持告警分组，可以将同个分组下的多个告警告警到一封邮件中进行发送，减少骚扰；另外还有告警抑制功能，避免发生某个故障出现后导致其他一系列故障一起告警形成告警风暴的问题，还有告警静默功能，让同时间段内的告警不重复发出。

## Grafana

[Grafana](https://grafana.com/) 是一款采用 Go 语言编写的开源应用，是一款跨平台的开源的度量分析和可视化工具，通过将采集的数据查询然后可视化的展示，并及时通知，目前已支持大部分常用的时序数据库。

- 面板：从热图到直方图、图形到地理地图。Grafana 具有快速灵活的可视化功能，可让您以任何方式可视化数据[前往](https://grafana.com/grafana/dashboards)
- 数据源：Prometheus、Graphite、Elasticsearch、InfluxDB、OpenTSDB、CloudWatch、KairosDB等[前往](https://grafana.com/docs/grafana/latest/datasources/)
- 通知提醒：使用 Grafana 警报，您可以在一个简单的 UI 中创建、管理和静音所有警报 — 允许您轻松整合和集中所有警报[前往](https://grafana.com/docs/grafana/latest/alerting/)
- 面板编辑器：面板编辑器使您可以通过一致的 UI 轻松配置、自定义和浏览所有面板，以便跨所有可视化设置数据选项[前往](https://grafana.com/docs/grafana/latest/panels/)
- 注释：使用来自不同数据源的丰富事件注释图形。将鼠标悬停在事件上会显示完整的事件元数据和标签[前往](https://grafana.com/docs/grafana/latest/panels/)
- 插件：使用 Grafana 插件连接您的工具和您的团队。数据源插件通过 API 连接到现有数据源并实时呈现数据，而无需您迁移或摄取数据[前往](https://grafana.com/grafana/plugins/)
- 过滤器：Ad-hoc过滤器允许动态创建新的键/值过滤器，这些过滤器会自动应用于使用该数据源的所有查询

## Promtail

[Promtail](https://grafana.com/docs/loki/latest/clients/promtail/) 是将本地日志内容传送到私有 Loki 实例或 Grafana Cloud 的代理。它通常部署到每台具有需要监控的应用程序的机器上。具有：

- 发现目标
- 将标签附加到日志流
- 将它们推送到 Loki 实例。
- 目前 Promtail 可以从两个来源跟踪日志：本地日志文件和 systemd 日志（仅在 AMD64 机器上）

## Loki

[Grafana Loki](https://grafana.com/docs/loki) 是一个日志聚合工具，它是功能齐全的日志堆栈的核心。Loki 是一个有效保存日志数据而优化的数据存储。日志数据的高效索引将 Loki 与其他日志系统区分开来。与其他日志系统不同，Loki 索引是根据标签构建的，原始日志消息未编入索引。每个流标识与一组唯一标签相关联的一组日志。一组高质量的标签是创建既紧凑又允许高效查询执行的索引的关键。LogQL 是 Loki 的查询语言。具有：

- 用于索引日志的高效内存使用：通过在一组标签上建立索引，索引可以明显小于其他日志聚合产品。更少的内存使得操作成本更低。
- 多用户：Loki 允许多个用户使用单个 Loki 实例。不同用户的数据与其他用户完全隔离。通过在代理中分配租户 ID 来配置多租户。
- LogQL：Loki 的查询语言，Prometheus 查询语言 PromQL 的用户会发现 LogQL 熟悉且灵活，可用于生成针对日志的查询。该语言还有助于从日志数据中生成指标，这是一项远远超出日志聚合的强大功能。
- 可扩展性：Loki 在小范围内运行良好。在单进程模式下，所有需要的微服务都在一个进程中运行。单进程模式非常适合测试 Loki、在本地运行或小规模运行。Loki 还旨在为大规模安装进行横向扩展。Loki 的每个微服务组件都可以分解为单独的进程，并且配置允许对组件进行单独扩展。
- 灵活性：许多代理（客户端）都有插件支持。这允许当前的可观察性结构将 Loki 添加为他们的日志聚合工具，而无需切换可观察性堆栈的现有部分。
- Grafana 集成：Loki 与 Grafana 无缝集成，提供完整的可观察性堆栈。
