# treeview

> 文件目录展示语法高亮，添加后默认全局开启

```ts:no-mb
export default {
  plugins: [
    ['vuepress-plugin-prismjs-next', {
      languages: ['treeview'],
      plugins: ['treeview']
    }],
  ]
}
```

```treeview:no-ln
root_folder/
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
