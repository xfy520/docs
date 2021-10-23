# previewers

> 样式预览，支持颜色、角度、时间、过渡、动画，添加后默认全局开启，如需关闭某个代码块该功能请配置 `:no-pw` 或者 `:no-previewers`，同 Vuepress [禁用行号](https://v2.vuepress.vuejs.org/zh/guide/markdown.html#%E4%BB%A3%E7%A0%81%E5%9D%97)配置一样，多个操作符可以追加

```css:no-mb
.example-gradient {
  background: -webkit-linear-gradient(left, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Chrome10+, Safari5.1+ */
  background: -moz-linear-gradient(left, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* FF3.6+ */background: -ms-linear-gradient(left, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* IE10+ */
  background: -o-linear-gradient(left, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Opera 11.10+ */background: linear-gradient(to right, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* W3C */
}
.example-angle {
 transform: rotate(10deg);
}
.example-color {
 color: rgba(255, 0, 0, 0.2);
 background: purple;
 border: 1px solid hsl(100, 70%, 40%);
}
.example-easing {
 transition-timing-function: linear;
}
.example-time {
 transition-duration: 3s;
}
```

```html:no-mb
<table bgcolor="#6E5494">
<tr style="background: lightblue;">
```

```less:no-mb
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
 background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
 background: -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
 background: -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
 background: -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
 background: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
}
@angle: 3rad;
.example-angle {
 transform: rotate(.4turn)
}
@nice-blue: #5B83AD;
.example-color {
 color: hsla(102, 53%, 42%, 0.4);
}
@easing: cubic-bezier(0.1, 0.3, 1, .4);
.example-easing {
 transition-timing-function: ease;
}
@time: 1s;
.example-time {
 transition-duration: 2s;
}
```

```sass:no-mb
$gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%)
@mixin example-gradient
 background: -moz-radial-gradient(center, ellipse cover, #f2f6f8 0%, #d8e1e7 50%, #b5c6d0 51%, #e0eff9 100%)
 background: radial-gradient(ellipse at center, #f2f6f8 0%, #d8e1e7 50%, #b5c6d0 51%, #e0eff9 100%)
$angle: 380grad
@mixin example-angle
 transform: rotate(-120deg)
.example-angle
 transform: rotate(18rad)
$color: blue
@mixin example-color
 color: rgba(147, 32, 34, 0.8)
.example-color
 color: pink
$easing: ease-out
.example-easing
 transition-timing-function: ease-in-out
$time: 3s
@mixin example-time
 transition-duration: 800ms
.example-time
 transition-duration: 0.8s
```

```scss:no-mb
$gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
$attr: background;
.example-gradient {
 #{$attr}-image: repeating-linear-gradient(10deg, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1) 10px, rgba(255, 0, 0, 0) 20px);
}
$angle: 1.8turn;
.example-angle {
 transform: rotate(-3rad)
}
$color: blue;
.example-color {
 #{$attr}-color: rgba(255, 255, 0, 0.75);
}
$easing: linear;
.example-easing {
 transition-timing-function: cubic-bezier(0.9, 0.1, .2, .4);
}
$time: 1s;
.example-time {
 transition-duration: 10s
}
```

```stylus:no-mb
gradient = linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%)
.example-gradient
 background-image: repeating-radial-gradient(circle, rgba(255, 0, 0, 0), rgba(255, 0, 0, 1) 10px, rgba(255, 0, 0, 0) 20px)
angle = 357deg
.example-angle
 transform: rotate(100grad)
color = olive
.example-color
 color: #000
easing = ease-in
.example-easing
 transition-timing-function: ease-out
time = 3s
.example-time
 transition-duration: 0.5s
```
