vuepress-theme-fleet Vuepress2.0 轻快主题，支持 Vuepress2.0，目前该Vuepress主题支持 `prism` 代码美化与 `mermaid` `Markdown`文档图表渲染。[项目地址](https://github.com/xfy520/vuepress-theme-fleet)

# 使用

## 安装

### npm 安装

```sh
npm install vuepress-theme-fleet –D
```

### yarn 安装

```sh
yarn add vuepress-theme-fleet --dev
```

### 使用配置

```ts
import { defineUserConfig } from 'vuepress';
import { VuepressThemeFleet } from 'vuepress-theme-fleet';
export default defineUserConfig({
  base: '/',
  theme: VuepressThemeFleet({}),
  ......
})
```

### prismPlugin使用配置

```ts
import { defineUserConfig } from 'vuepress';
import { VuepressThemeFleet, prismPlugin } from 'vuepress-theme-fleet';
export default defineUserConfig({
  base: '/',
  theme: VuepressThemeFleet({
    themePlugins: {
      prismjs: false,
    },
    plugins: [
      prismPlugin({}),
    ]
  }),
  markdown: {
    code: false,
    component: false,
  },
  ......
})
```

### prismPlugin 配置参数

**name**

- 描述：插件内部组件名。
- 类型：`String`
- 是否必填：`false`

**theme**

- 描述：代码美化主题。
- 类型：`String`
- 可选值: `coy` | `dark` | `funky` | `okaidia` | `solarizedlight` | `twilight` | `''`
- 是否必填：`false`

**plugins**

- 描述：代码美化启用插件。
- 类型：`PrismPluginListType`
- 是否必填：`false`
- 可选值

```ts
type PrismPluginListType = Array<'line-numbers' | 'show-language' | 'line-highlight' | 'data-uri-highlight' | 'remove-initial-line-feed' | 'previewers' | 'match-braces' | 'inline-color' | 'autolinker' | 'show-invisibles' | 'diff-highlight' | 'highlight-keywords' | 'treeview' | {
    name: 'copy-to-clipboard';
    options?: {
        copy?: string;
        error?: string;
        success?: string;
    };
} | {
    name: 'download-button';
    options?: {
        label?: string;
    };
} | {
    name: 'normalize-whitespace';
    options?: {
        'remove-trailing'?: boolean;
        'remove-indent'?: boolean;
        'left-trim'?: boolean;
        'right-trim'?: boolean;
        'break-lines'?: number;
        'indent'?: number;
        'remove-initial-line-feed'?: boolean;
        'tabs-to-spaces'?: number;
        'spaces-to-tabs'?: number;
    };
}>;
```

**languages**

- 描述：代码美化加载语言。
- 类型：`PrismLanguagesListType`
- 是否必填：`false`
- 可选值

```ts
export declare type PrismLanguagesListType = Array<'abnf' | 'actionscript' | 'ada' | 'agda' | 'al' | 'antlr4' | 'apacheconf' | 'apex' | 'apl' | 'applescript' | 'aql' |
'arduino' | 'arff' | 'armasm' | 'arturo' | 'asciidoc' | 'asm6502' | 'asmatmel' | 'aspnet' | 'autohotkey' | 'autoit' | 'avisynth' | 'avro-idl' | 'awk' | 'bash' |
'basic' | 'batch' | 'bbcode' | 'bicep' | 'birb' | 'bison' | 'bnf' | 'brainfuck' | 'brightscript' | 'bro' | 'bsl' | 'c' | 'cfscript' | 'chaiscript' | 'cil' |
'clike' | 'clojure' | 'cmake' | 'cobol' | 'coffeescript' | 'concurnas' | 'cooklang' | 'coq' | 'core' | 'cpp' | 'crystal' | 'csharp' | 'cshtml' | 'csp' |
'css' | 'csv' | 'cue' | 'cypher' | 'd' | 'dart' | 'dataweave' | 'dax' | 'dhall' | 'diff' | 'django' | 'dns-zone-file' | 'docker' | 'dot' | 'ebnf' |
'editorconfig' | 'eiffel' | 'ejs' | 'elixir' | 'elm' | 'erb' | 'erlang' | 'etlua' | 'excel-formula' | 'factor' | 'false' | 'firestore-security-rules' |
'flow' | 'fortran' | 'fsharp' | 'ftl' | 'gap' | 'gcode' | 'gdscript' | 'gedcom' | 'gettext' | 'gherkin' | 'git' | 'glsl' | 'gml' | 'gn' | 'go' |
'go-module' | 'graphql' | 'groovy' | 'haml' | 'handlebars' | 'haskell' | 'haxe' | 'hcl' | 'hlsl' | 'hoon' | 'hpkp' | 'hsts' | 'http' | 'ichigojam' |
'icon' | 'icu-message-format' | 'idris' | 'iecst' | 'ignore' | 'inform7' | 'ini' | 'io' | 'j' | 'java' | 'javadoc' | 'javadoclike' | 'javascript' |
'javastacktrace' | 'jexl' | 'jolie' | 'jq' | 'jsdoc' | 'js-extras' | 'json' | 'json5' | 'jsonp' | 'jsstacktrace' | 'js-templates' | 'jsx' | 'julia' |
'keepalived' | 'keyman' | 'kotlin' | 'kumir' | 'kusto' | 'latex' | 'latte' | 'less' | 'lilypond' | 'linker-script' | 'liquid' | 'lisp' |
'livescript' | 'llvm' | 'log' | 'lolcode' | 'lua' | 'magma' | 'makefile' | 'markdown' | 'markup' | 'markup-templating' | 'mata' | 'matlab' |
'maxscript' | 'mel' | 'mermaid' | 'mizar' | 'mongodb' | 'monkey' | 'moonscript' | 'n1ql' | 'n4js' | 'nand2tetris-hdl' | 'naniscript' | 'nasm' |
'neon' | 'nevod' | 'nginx' | 'nim' | 'nix' | 'nsis' | 'objectivec' | 'ocaml' | 'odin' | 'opencl' | 'openqasm' | 'oz' | 'parigp' | 'parser' |
'pascal' | 'pascaligo' | 'pcaxis' | 'peoplecode' | 'perl' | 'php' | 'phpdoc' | 'php-extras' | 'plant-uml' | 'plsql' | 'powerquery' | 'powershell' |
'processing' | 'prolog' | 'promql' | 'properties' | 'protobuf' | 'psl' | 'pug' | 'puppet' | 'pure' | 'purebasic' | 'purescript' | 'python' | 'q' |
'qml' | 'qore' | 'qsharp' | 'r' | 'racket' | 'reason' | 'regex' | 'rego' | 'renpy' | 'rescript' | 'rest' | 'rip' | 'roboconf' | 'robotframework' |
'ruby' | 'rust' | 'sas' | 'sass' | 'scala' | 'scheme' | 'scss' | 'shell-session' | 'smali' | 'smalltalk' | 'smarty' | 'sml' | 'solidity' |
'solution-file' | 'soy' | 'sparql' | 'splunk-spl' | 'sqf' | 'sql' | 'squirrel' | 'stan' | 'stata' | 'stylus' | 'supercollider' | 'swift' |
'systemd' | 't4-cs' | 't4-templating' | 't4-vb' | 'tap' | 'tcl' | 'textile' | 'toml' | 'tremor' | 'tsx' | 'tt2' | 'turtle' | 'twig' |
'typescript' | 'typoscript' | 'unrealscript' | 'uorazor' | 'uri' | 'v' | 'vala' | 'vbnet' | 'velocity' | 'verilog' | 'vhdl' | 'vim' |
'visual-basic' | 'warpscript' | 'wasm' | 'web-idl' | 'wiki' | 'wolfram' | 'wren' | 'xeora' | 'xml-doc' | 'xojo' | 'xquery' | 'yaml' |
'yang' | 'zig' | 'abap'>;
```

**vPreBlock**

- 描述：是否在代码块的 `<pre>` 标签上添加 `v-pre` 指令。
- 类型：`boolean`
- 默认值：`true`,
- 是否必填：`false`

**vPreInline**

- 描述：是否在行内代码的 `<code>` 标签上添加 `v-pre` 指令。
- 类型：`boolean`
- 默认值：`true`,
- 是否必填：`false`

**tabSize**

- 描述：tab键所占空格数。
- 类型：`number`
- 默认值：`2`,
- 是否必填：`false`

### mermaidPlugin

```ts
import { defineUserConfig } from 'vuepress';
import { VuepressThemeFleet, mermaidPlugin } from 'vuepress-theme-fleet';
export default defineUserConfig({
  base: '/',
  theme: VuepressThemeFleet({
    themePlugins: {
      prismjs: false,
    },
    plugins: [
      mermaidPlugin({}),
    ]
  }),
  markdown: {
    code: false,
    component: false,
  },
  ......
})
```

**name**

- 描述：插件内部组件名。
- 类型：`string`
- 是否必填：`false`

**mermaidOptions**

- 描述：mermaidjs 配置参数。
- 类型：`MermaidOptions`
- 是否必填：`false`

**style**

- 描述：markdown 图表渲染块样式。
- 类型：`object`
- 是否必填：`false`
