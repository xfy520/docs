import type { PluginConfig } from '@vuepress/core';
import type { DefaultThemeOptions } from '@vuepress/theme-default';
import type { DarkModeRef } from '@vuepress/theme-default/lib/client';


export interface FleetThemeOptions extends DefaultThemeOptions {
  plugins?: PluginConfig;
}


export interface MermaidPluginOptions {
  name?: string;
  mermaidOptions?: Partial<MermaidOptions>;
  style?: {
    [key: string]: string | number;
  };
}

export interface MermaidPrposTypes {
  id: string,
  code: string,
  style: object,
  useDarkMode: () => DarkModeRef,
}

export interface MermaidOptions {
  securityLevel?: MermaidSecurityLevel | undefined;

  theme?: MermaidTheme | undefined;

  themeVariables?: any;

  themeCSS?: string | undefined;

  maxTextSize?: number | undefined;

  darkMode?: boolean | undefined;

  fontFamily?: string | undefined;

  logLevel?: MermaidLogLevel | undefined;

  startOnLoad?: boolean | undefined;

  arrowMarkerAbsolute?: boolean | undefined;

  secure?: Array<keyof MermaidOptions> | undefined;

  deterministicIds?: boolean | undefined;

  deterministicIDSeed?: string | undefined;

  flowchart?: MermaidFlowChartConfig | undefined;

  sequence?: MermaidSequenceDiagramConfig | undefined;

  gantt?: MermaidGanttConfig | undefined;

  journey?: any;

  class?: any;

  git?: any;

  state?: any;

  pie?: any;

  requirement?: any;
}

export enum MermaidSecurityLevel {
  Strict = 'strict',

  Loose = 'loose',

  Antiscript = 'antiscript',

  Sandbox = 'sandbox'
}

export enum MermaidTheme {
  Base = 'base',

  Forest = 'forest',

  Dark = 'dark',

  Default = 'default',

  Neutral = 'neutral'
}

export enum MermaidLogLevel {
  Debug = 1,
  Info,
  Warn,
  Error,
  Fatal
}

interface MermaidFlowChartConfig {
  diagramPadding?: number | undefined;

  htmlLabels?: boolean | undefined;

  nodeSpacing?: number | undefined;

  rankSpacing?: number | undefined;

  curve?: string | undefined;

  padding?: number | undefined;

  useMaxWidth?: boolean | undefined;
}

interface MermaidSequenceDiagramConfig {
  diagramMarginX?: number | undefined;

  diagramMarginY?: number | undefined;

  actorMargin?: number | undefined;

  width?: number | undefined;

  height?: number | undefined;

  boxMargin?: number | undefined;

  boxTextMargin?: number | undefined;

  noteMargin?: number | undefined;

  messageMargin?: number | undefined;

  mirrorActors?: boolean | undefined;

  bottomMarginAdj?: number | undefined;

  useMaxWidth?: boolean | undefined;

  rightAngles?: boolean | undefined;
}

interface MermaidGanttConfig {
  titleTopMargin?: number | undefined;

  barHeight?: number | undefined;

  barGap?: number | undefined;

  topPadding?: number | undefined;

  leftPadding?: number | undefined;

  gridLineStartPadding?: number | undefined;

  fontSize?: number | undefined;

  fontFamily?: string | undefined;

  numberSectionStyles?: number | undefined;

  axisFormat?: string | undefined;
}

export interface PrismPluginOptions {
  name?: string;

  theme?: PrismPluginThemeType;

  plugins?: PrismPluginListType;

  languages?: PrismLanguagesListType;

  vPreBlock?: boolean;

  vPreInline?: boolean;

  tabSize?: number;
}

export interface PrismHighlightLanguage {
  name: string

  ext: string

  aliases: string[]
}

export type PrismPluginThemeType = 'coy' | 'dark' | 'funky' | 'okaidia' | 'solarizedlight' | 'twilight' | '';

export type PrismPluginListType = Array<
  'line-numbers' | 'show-language' | 'line-highlight' | 'data-uri-highlight' | 'remove-initial-line-feed' |
  'previewers' | 'match-braces' | 'inline-color' | 'autolinker' | 'show-invisibles' | 'diff-highlight' | 'highlight-keywords' | 'treeview' |
  {
    name: 'copy-to-clipboard';
    options?: {
      copy?: string;
      error?: string;
      success?: string;
    }
  } |
  {
    name: 'download-button',
    options?: {
      label?: string;
    }
  } | {
    name: 'normalize-whitespace',
    options?: {
      'remove-trailing'?: boolean,
      'remove-indent'?: boolean,
      'left-trim'?: boolean,
      'right-trim'?: boolean,
      'break-lines'?: number,
      'indent'?: number,
      'remove-initial-line-feed'?: boolean,
      'tabs-to-spaces'?: number,
      'spaces-to-tabs'?: number,
    }
  }>;

export type PrismPluginType = {
  'line-numbers'?: string;
  'show-language'?: string;
  'line-highlight'?: string;
  'copy-to-clipboard'?: {
    name: 'copy-to-clipboard';
    options?: {
      copy: string,
      error: string,
      success: string,
    }
  };
  'download-button'?: {
    name: 'download-button',
    options?: {
      label?: string;
    }
  };
  'show-invisibles'?: string;
  'autolinker'?: string;
  'inline-color'?: string;
  'previewers'?: string;
  'match-braces'?: string;
  'diff-highlight'?: string;
  'highlight-keywords'?: string;
  'treeview'?: string;
  'data-uri-highlight'?: string;
  'remove-initial-line-feed'?: string;
  'normalize-whitespace'?: {
    name: 'normalize-whitespace',
    options?: {
      'remove-trailing'?: boolean,
      'remove-indent'?: boolean,
      'left-trim'?: boolean,
      'right-trim'?: boolean,
      'break-lines'?: number,
      'indent'?: number,
      'remove-initial-line-feed'?: boolean,
      'tabs-to-spaces'?: number,
      'spaces-to-tabs'?: number,
    }
  };
};

export type PrismLanguagesListType = Array<'abnf' | 'actionscript' | 'ada' | 'agda' | 'al' | 'antlr4' | 'apacheconf' |
  'apex' | 'apl' | 'applescript' | 'aql' | 'arduino' | 'arff' | 'armasm' | 'arturo' | 'asciidoc' | 'asm6502' | 'asmatmel' | 'aspnet' |
  'autohotkey' | 'autoit' | 'avisynth' | 'avro-idl' | 'awk' | 'bash' | 'basic' | 'batch' | 'bbcode' | 'bicep' | 'birb' | 'bison' | 'bnf' |
  'brainfuck' | 'brightscript' | 'bro' | 'bsl' | 'c' | 'cfscript' | 'chaiscript' | 'cil' | 'clike' | 'clojure' | 'cmake' | 'cobol' |
  'coffeescript' | 'concurnas' | 'cooklang' | 'coq' | 'core' | 'cpp' | 'crystal' | 'csharp' | 'cshtml' | 'csp' | 'css' | 'csv' |
  'cue' | 'cypher' | 'd' | 'dart' | 'dataweave' | 'dax' | 'dhall' | 'diff' | 'django' | 'dns-zone-file' | 'docker' | 'dot' | 'ebnf' | 'editorconfig' |
  'eiffel' | 'ejs' | 'elixir' | 'elm' | 'erb' | 'erlang' | 'etlua' | 'excel-formula' | 'factor' | 'false' | 'firestore-security-rules' | 'flow' | 'fortran' |
  'fsharp' | 'ftl' | 'gap' | 'gcode' | 'gdscript' | 'gedcom' | 'gettext' | 'gherkin' | 'git' | 'glsl' | 'gml' | 'gn' | 'go' | 'go-module' | 'graphql' |
  'groovy' | 'haml' | 'handlebars' | 'haskell' | 'haxe' | 'hcl' | 'hlsl' | 'hoon' | 'hpkp' | 'hsts' | 'http' | 'ichigojam' | 'icon' | 'icu-message-format' |
  'idris' | 'iecst' | 'ignore' | 'inform7' | 'ini' | 'io' | 'j' | 'java' | 'javadoc' | 'javadoclike' | 'javascript' | 'javastacktrace' | 'jexl' |
  'jolie' | 'jq' | 'jsdoc' | 'js-extras' | 'json' | 'json5' | 'jsonp' | 'jsstacktrace' | 'js-templates' | 'jsx' | 'julia' | 'keepalived' |
  'keyman' | 'kotlin' | 'kumir' | 'kusto' | 'latex' | 'latte' | 'less' | 'lilypond' | 'linker-script' | 'liquid' | 'lisp' | 'livescript' |
  'llvm' | 'log' | 'lolcode' | 'lua' | 'magma' | 'makefile' | 'markdown' | 'markup' | 'markup-templating' | 'mata' | 'matlab' | 'maxscript' |
  'mel' | 'mermaid' | 'mizar' | 'mongodb' | 'monkey' | 'moonscript' | 'n1ql' | 'n4js' | 'nand2tetris-hdl' | 'naniscript' | 'nasm' | 'neon' | 'nevod' |
  'nginx' | 'nim' | 'nix' | 'nsis' | 'objectivec' | 'ocaml' | 'odin' | 'opencl' | 'openqasm' | 'oz' | 'parigp' | 'parser' | 'pascal' | 'pascaligo' |
  'pcaxis' | 'peoplecode' | 'perl' | 'php' | 'phpdoc' | 'php-extras' | 'plant-uml' | 'plsql' | 'powerquery' | 'powershell' | 'processing' |
  'prolog' | 'promql' | 'properties' | 'protobuf' | 'psl' | 'pug' | 'puppet' | 'pure' | 'purebasic' | 'purescript' | 'python' | 'q' |
  'qml' | 'qore' | 'qsharp' | 'r' | 'racket' | 'reason' | 'regex' | 'rego' | 'renpy' | 'rescript' | 'rest' | 'rip' | 'roboconf' | 'robotframework' | 'ruby' |
  'rust' | 'sas' | 'sass' | 'scala' | 'scheme' | 'scss' | 'shell-session' | 'smali' | 'smalltalk' | 'smarty' | 'sml' | 'solidity' | 'solution-file' | 'soy' |
  'sparql' | 'splunk-spl' | 'sqf' | 'sql' | 'squirrel' | 'stan' | 'stata' | 'stylus' | 'supercollider' | 'swift' | 'systemd' | 't4-cs' | 't4-templating' |
  't4-vb' | 'tap' | 'tcl' | 'textile' | 'toml' | 'tremor' | 'tsx' | 'tt2' | 'turtle' | 'twig' | 'typescript' | 'typoscript' | 'unrealscript' |
  'uorazor' | 'uri' | 'v' | 'vala' | 'vbnet' | 'velocity' | 'verilog' | 'vhdl' | 'vim' | 'visual-basic' | 'warpscript' | 'wasm' | 'web-idl' | 'wiki' | 'wolfram' |
  'wren' | 'xeora' | 'xml-doc' | 'xojo' | 'xquery' | 'yaml' | 'yang' | 'zig' | 'abap'>;
