# 组件参数配置

## list

- 描述：无缝滚动列表数据，组件内部使用列表长度。
- 类型：`Array`
- 是否必填：`true`

## v-model

- 描述：通过v-model控制动画滚动与停止，默认开始滚动

- 类型：``boolean``,
- 默认值：`true`,
- 是否必填：`false`

## direction

- 描述：控制滚动方向，可选值`up`，`down`，`left`，`right`

- 类型：`string`,
- 默认值：`"up"`,
- 是否必填：`false`

## isWatch

- 描述：开启数据更新监听
- 类型：`boolean`,
- 默认值：`true`,
- 是否必填：`false`

## hover

- 描述：是否开启鼠标悬停
- 类型：`boolean`,
- 默认值：`false`,
- 是否必填：`false`

## count

- 描述：动画循环次数，默认无限循环
- 类型：`number`,
- 默认值：`"infinite"`,
- 是否必填：`false`

## limitScrollNum

- 描述：开启滚动的数据量，只有列表长度大于等于该值才会滚动
- 类型：`number`,
- 默认值：`5`,
- 是否必填：`false`

## step

- 描述：步进速度
- 类型：`number`,
- 是否必填：`false`

## singleHeight

- 描述：单步运动停止的高度
- 类型：`number`,
- 默认值：`0`,
- 是否必填：`false`

## singleWidth

- 描述：单步运动停止的宽度
- 类型：`number`,
- 默认值：`0`,
- 是否必填：`false`

## singleWaitTime

- 描述：单步停止等待时间(默认值 `1000ms`)
- 类型：`number`,
- 默认值：`1000`,
- 是否必填：`false`

## isRemUnit

- 描述：`singleHeight` and `singleWidth` 是否开启 `rem` 度量
- 类型：``boolean``,
- 默认值：`true`,
- 是否必填：`false`

## delay

- 描述：动画延时时间
- 类型：`number`,
- 默认值：`0`,
- 是否必填：`false`

## ease

- 描述：动画效果，可以传入贝塞尔曲线数值
- 类型：`string` | `cubic-bezier`,
- 默认值：`"ease-in"`,
- 是否必填：`false`

## copyNum

- 描述：拷贝列表次数，默认拷贝一次，当父级高度大于列表渲染高度的两倍时可以通过该参数控制拷贝列表次数达到无缝滚动效果
- 类型：`number`,
- 默认值：`1`,
- 是否必填：`false`

##  wheel

- 描述：在开启鼠标悬停的情况下是否开启滚轮滚动，默认不开启
- 类型：`boolean`,
- 默认值：`false`,
- 是否必填：`false`
