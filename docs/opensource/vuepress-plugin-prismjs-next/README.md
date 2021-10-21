# 介绍

## Inline color

```css:no-show-invisibles:no-line-numbers
span.foo {
 background-color:navy;
 color:#BFD;
}

span.bar {
 background:rgba(105, 0, 12, .38);
 color:hsl(30, 100%, 50%);
 border-color:transparent;
}
```

```less:no-show-invisibles:no-line-numbers
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
 background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
 background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
 background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
 background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
 background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
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

```html:no-show-invisibles:no-line-numbers
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>Example</title>
<style>
/* Also works here */
a.not-a-class {
 color:red;
}
</style>
<body style="color:black">
</body>
</html>
```

## autolinker

```js:no-show-invisibles:no-line-numbers
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 * Reach Lea at fake@email.com (no, not really)
 * And this is a Markdown link. Sweet, huh?
 */
var foo = 5;
// And a single line comment http://google.com
```

```css:no-show-invisibles:no-line-numbers
@font-face {
 src: url(http://lea.verou.me/logo.otf);
 font-family: 'LeaVerou';
}
```

```html:no-show-invisibles:no-line-numbers
<!-- Links in HTML, woo!
Lea Verou http://lea.verou.me or, with Markdown, Lea Verou -->
<img src="https://prismjs.com/assets/img/spectrum.png" alt="In attributes too!" />
<p>Autolinking in raw text: http://prismjs.com</p>
```

## data-uri-highlight

```css:no-show-invisibles:no-line-numbers
div {
    border: 40px solid transparent;
    border-image: 33.334% url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"> \
                          <circle cx="5" cy="5" r="5" fill="%23ab4"/><circle cx="15" cy="5" r="5" fill="%23655"/> \
                          <circle cx="25" cy="5" r="5" fill="%23e07"/><circle cx="5" cy="15" r="5" fill="%23655"/> \
                          <circle cx="15" cy="15" r="5" fill="hsl(15, 25%, 75%)"/> \
                          <circle cx="25" cy="15" r="5" fill="%23655"/><circle cx="5" cy="25" r="5" fill="%23fb3"/> \
                          <circle cx="15" cy="25" r="5" fill="%23655"/><circle cx="25" cy="25" r="5" fill="%2358a"/></svg>');
    padding: 1em;
    max-width: 20em;
    font: 130%/1.6 Baskerville, Palatino, serif;
}
```

## show-invisibles

```css:no-line-numbers
.token.tab:not(:empty),
.token.cr,
.token.lf,
.token.space {
 position: relative;
}
.token.tab:not(:empty):before,
.token.cr:before,
.token.lf:before,
.token.space:before {
 color: #808080;
 opacity: 0.6;
 position: absolute;
}
.token.tab:not(:empty):before {
 content: '\21E5';
}
.token.cr:before {
 content: '\240D';
}
.token.crlf:before {
 content: '\240D\240A';
}
.token.lf:before {
 content: '\240A';
}
.token.space:before {
 content: '\00B7';
}
```

## treeview

```treeview:no-line-numbers
|-- a first folder/
|   |-- holidays.mov
|   |-- javascript-file.js
|   `-- some_picture.jpg
|-- documents/
|   |-- spreadsheet.xls
|   |-- manual.pdf
|   |-- document.docx
|   `-- presentation.ppt
|       `-- test
|-- empty_folder/
|-- going deeper/
|   |-- going deeper/
|   |   `-- going deeper/
|   |        `-- going deeper/
|   |            `-- .secret_file
|   |-- style.css
|   `-- index.html
|-- music and movies/
|   |-- great-song.mp3
|   |-- S01E02.new.episode.avi
|   |-- S01E02.new.episode.nfo
|   `-- track 1.cda
|-- .gitignore
|-- .htaccess
|-- .npmignore
|-- archive 1.zip
|-- archive 2.tar.gz
|-- logo.svg
`-- README.md
```

```treeview:no-line-numbers
├── a first folder/
|   ├── holidays.mov
|   ├── javascript-file.js
|   └── some_picture.jpg
├── documents/
|   ├── spreadsheet.xls
|   ├── manual.pdf
|   ├── document.docx
|   └── presentation.ppt
└── etc.
```

## match-braces

```js:no-line-numbers
const func = (a, b) => {
 return `${a}:${b}`;
}
```

## line-numbers

```css
pre[class*="language-"].line-numbers {
 position: relative;
 padding-left: 3.8em;
 counter-reset: linenumber;
}
pre[class*="language-"].line-numbers > code {
 position: relative;
 white-space: inherit;
}
.line-numbers .line-numbers-rows {
 position: absolute;
 pointer-events: none;
 top: 0;
 font-size: 100%;
 left: -3.8em;
 width: 3em; /* works for line-numbers below 1000 lines */
 letter-spacing: -1px;
 border-right: 1px solid #999;
 -webkit-user-select: none;
 -moz-user-select: none;
 -ms-user-select: none;
 user-select: none;
}
.line-numbers-rows > span {
  display: block;
  counter-increment: linenumber;
}
.line-numbers-rows > span:before {
  content: counter(linenumber);
  color: #999;
  display: block;
  padding-right: 0.8em;
  text-align: right;
}
```

## line-highlight

```less:no-line-numbers{1,3-9,12}
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
 background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
 background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
 background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
 background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
 background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
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

```less{1,3-9,12}
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
 background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
 background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
 background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
 background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
 background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
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

## previewers

```css
.example-gradient {
 background: -webkit-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Chrome10+, Safari5.1+ */
 background:    -moz-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* FF3.6+ */
 background:     -ms-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* IE10+ */
 background:      -o-linear-gradient(left,     #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* Opera 11.10+ */
 background:         linear-gradient(to right, #cb60b3 0%, #c146a1 50%, #a80077 51%, #db36a4 100%); /* W3C */
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

```html
<table bgcolor="#6E5494">
<tr style="background: lightblue;">
```

```less
@gradient: linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%);
.example-gradient {
 background: -webkit-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Chrome10+, Safari5.1+ */
 background:    -moz-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* FF3.6+ */
 background:     -ms-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* IE10+ */
 background:      -o-linear-gradient(-45deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* Opera 11.10+ */
 background:         linear-gradient(135deg, #9dd53a 0%, #a1d54f 50%, #80c217 51%, #7cbc0a 100%); /* W3C */
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

```sass
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

```scss
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

```stylus
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
