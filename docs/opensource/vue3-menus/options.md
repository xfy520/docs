# 配置

## 组件使用时参数

### menus

- 类型：[MenusItemOptions](#menusitemoptions)[]

- 是否必填：`true`

- 默认值：`[]`

- 描述：菜单列表信息

### menusClass

- 类型：`string`

- 是否必填：`fasle`

- 默认值：`null`

- 描述：菜单外层 `div` 的 `class` 名

### itemClass

- 类型：`string`

- 是否必填：`fasle`

- 默认值：`null`

- 描述：菜单每一项的 `class` 名

### event

- 类型：`Event`

- 是否必填：与 `position` 必填一项

- 默认值：`{}`

- 描述：鼠标事件信息(`指令使用时可以不传`)

### maxWidth

- 类型：`number | string`

- 是否必填：`false`

- 默认值：`none`

- 描述：菜单容器最大宽度

### minWidth

- 类型：`number | string`

- 是否必填：`false`

- 默认值：`none`

- 描述：菜单容器最小宽度

### zIndex

- 类型：`number | string`

- 是否必填：`false`

- 默认值：`3`

- 描述：菜单层级

### direction

- 类型：`left | right`

- 是否必填：`false`

- 默认值：`right`

- 菜单打开方向

### open

- 类型：`boolean`

- 是否必填：`true`

- 默认值：`false`

- 描述：控制菜单组件显示

### args

- 类型：`unknown`

- 是否必填：`false`

- 默认值：`undefined`

- 描述：菜单附加参数

### default

- 类型：`Slot`

- 是否必填：`false`

- 默认值：`-`

- 描述：默认插槽

- 插槽传入值：`{activeIndex: 当前选中项, menu: 当前菜单项 MenusItemOptions, index: 当前菜单索引}`

### icon

- 类型：`Slot`

- 是否必填：`false`

- 默认值：`-`

- 描述：图标插槽

- 插槽传入值：`{activeIndex: 当前选中项, menu: 当前菜单项 MenusItemOptions, index: 当前菜单索引}`

### label

- 类型：`Slot`

- 是否必填：`false`

- 默认值：`-`

- 描述：菜单标题插槽

- 插槽传入值：`{activeIndex: 当前选中项, menu: 当前菜单项 MenusItemOptions, index: 当前菜单索引}`

### suffix

- 类型：`Slot`

- 是否必填：`false`

- 默认值：`-`

- 描述：菜单后缀插槽

- 插槽传入值：`{activeIndex: 当前选中项, menu: 当前菜单项 MenusItemOptions, index: 当前菜单索引}`

## 指令与方法使用参数

### menus

- 类型：[MenusItemOptions](#menusitemoptions)[]

- 是否必填：`true`

- 默认值：`[]`

- 描述：菜单列表信息

### menusClass

- 类型：`string`

- 是否必填：`fasle`

- 默认值：`null`

- 描述：菜单外层 `div` 的 `class` 名

### itemClass

- 类型：`string`

- 是否必填：`fasle`

- 默认值：`null`

- 描述：菜单每一项的 `class` 名

### minWidth

- 类型：`number | string`

- 是否必填：`false`

- 默认值：`none`

- 描述：菜单容器最小宽度

### maxWidth

- 类型：`number | string`

- 是否必填：`false`

- 默认值：`none`

- 描述：菜单容器最大宽度

### zIndex

- 类型：`number | string`

- 是否必填：`false`

- 默认值：`3`

- 描述：菜单层级

### direction

- 类型：`left | right`

- 是否必填：`false`

- 默认值：`right`

- 菜单打开方向

## MenusItemOptions

### label

- 类型：`string`

- 是否必填：`true`

- 默认值：`''`

- 描述：菜单项标题

### style

- 类型：`object`

- 是否必填：`fasle`

- 默认值：`{}`

- 描述：每一项菜单的自定义样式

### icon

- 类型：`string | unknown`

- 是否必填：`fasle`

- 默认值：`undefined`

- 描述：图标参数，内部支持html字符串图标，传入组件时需要实现icon插槽

### disabled

- 类型：`boolean`

- 是否必填：`fasle`

- 默认值：`undefined`

- 描述：是否禁用菜单项

### divided

- 类型：`boolean`

- 是否必填：`fasle`

- 默认值：`undefined`

- 描述：是否显示分割线

### tip

- 类型：`string`

- 是否必填：`fasle`

- 默认值：`''`

- 描述：没项菜单后面的小提示

### hidden

- 类型：`boolean`

- 是否必填：`fasle`

- 默认值：`undefined`

- 描述：是否显示该项菜单

### click

- 类型：(menu: [MenusItemOptions](#menusitemoptions), args: unknown) => unknown

- 是否必填：`fasle`

- 默认值：`undefined`

- 描述：菜单项点击事件，返回 `null` 或 `false` 不关闭菜单

### enter

- 类型：(menu: [MenusItemOptions](#menusitemoptions), args: unknown) => unknown

- 是否必填：`false`

- 默认值：`undefined`

- 描述：菜单项移入事件，返回`null`或`false`不展开子菜单


### children

- 类型：[MenusItemOptions](#menusitemoptions)[]

- 是否必填：`fasle`

- 默认值：`undefined`

- 描述：子菜单列表信息

## 指令使用配置

| 指令使用方式  |            描述            |   参数类型    | 参数是否必填 | 默认值 |
| :-----------: | :------------------------: | :-----------: | :----------: | :----: |
|    v-menus    |    绑定元素右击打开菜单    | `MenuOptions` |    `true`    |   -    |
|  v-menus:all  | 绑定元素左右击均可打开菜单 | `MenuOptions` |    `true`    |   -    |
| v-menus:left  |      绑定元素左击打开      | `MenuOptions` |    `true`    |   -    |
| v-menus:right |      绑定元素右击打开      | `MenuOptions` |    `true`    |   -    |
