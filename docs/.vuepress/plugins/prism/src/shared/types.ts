export interface PrismOptions {
}

export interface PluginOptions {
  lineNumbers?: boolean | number;

  vPre?: boolean
}

export interface PrposTypes {
  id: string,
  code: string | undefined,
  options: Partial<PrismOptions>,
  style: object,
}
