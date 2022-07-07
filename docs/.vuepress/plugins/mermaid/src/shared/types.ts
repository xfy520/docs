export interface PrposTypes {
  id: string,
  graph: string | undefined,
  options: Partial<MermaidOptions>,
  style: object,
}

export interface MermaidOptions {
  securityLevel?: SecurityLevel | undefined;

  theme?: Theme | undefined;

  themeVariables?: any;

  themeCSS?: string | undefined;

  maxTextSize?: number | undefined;

  darkMode?: boolean | undefined;

  fontFamily?: string | undefined;

  logLevel?: LogLevel | undefined;

  startOnLoad?: boolean | undefined;

  arrowMarkerAbsolute?: boolean | undefined;

  secure?: Array<keyof MermaidOptions> | undefined;

  deterministicIds?: boolean | undefined;

  deterministicIDSeed?: string | undefined;

  flowchart?: FlowChartConfig | undefined;

  sequence?: SequenceDiagramConfig | undefined;

  gantt?: GanttConfig | undefined;

  journey?: any;

  class?: any;

  git?: any;

  state?: any;

  pie?: any;

  requirement?: any;
}

export enum SecurityLevel {
  Strict = 'strict',

  Loose = 'loose',

  Antiscript = 'antiscript',

  Sandbox = 'sandbox'
}

export enum Theme {
  Base = 'base',

  Forest = 'forest',

  Dark = 'dark',

  Default = 'default',

  Neutral = 'neutral'
}

export enum LogLevel {
  Debug = 1,
  Info,
  Warn,
  Error,
  Fatal
}

interface FlowChartConfig {
  diagramPadding?: number | undefined;

  htmlLabels?: boolean | undefined;

  nodeSpacing?: number | undefined;

  rankSpacing?: number | undefined;

  curve?: string | undefined;

  padding?: number | undefined;

  useMaxWidth?: boolean | undefined;
}

interface SequenceDiagramConfig {
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

interface GanttConfig {
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
