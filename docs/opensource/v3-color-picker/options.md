# 配置

## 方法使用所需参数

> colorEvent(event, options)，`event`：事件对象，`options`：公共参数与方法参数

## 公共参数

### value

- 类型：[`string`, `rbg`, `hsl`]

- 是否必填：`#fff`

- 默认值：`[]`

- 描述：初始颜色值

### theme

- 类型：[`dark`, `light`]

- 是否必填：`false`

- 默认值：`dark`

- 描述：主题

### height

- 类型：`number`

- 是否必填：`false`

- 默认值：`150`

- 描述：颜色选择器区域高度

### width

- 类型：`number`

- 是否必填：`false`

- 默认值：`233`

- 描述：颜色选择器区域宽度

### colors

- 类型：[string]

- 是否必填：`false`

- 默认值：`["#ff4500", "#ff8c00", "#ffd700", "#90ee9003", "#00ced1", "#1e90ff", "#c71585",
        "#ff4500ad", "#ff7800", "#fad400", "#90f09080", "#00babd", "#1f93ffba", "#c7158575"]`

- 描述：预选颜色列表

### btn

- 类型：`boolean`

- 是否必填：`false`

- 默认值：`false`

- 描述：是否显示按钮按钮

### zIndex

- 类型：`number`

- 是否必填：`false`

- 默认值：`2`

- 描述：菜单层级

## 组件参数

### size

- 类型：`undefined` | `medium` | `small` | `mini`

- 是否必填：`false`

- 默认值：`undefined`

- 描述：组件大小

### change

- 类型：`Function`

- 是否必填：`false`

- 默认值：`none`

- 描述：颜色值发生改变时触发事件

## 指令、方法参数

### change

- 类型：`Function`

- 是否必填：`false`

- 默认值：`none`

- 描述：颜色值发生改变时触发事件
