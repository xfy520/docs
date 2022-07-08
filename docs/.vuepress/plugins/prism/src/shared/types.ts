import type { DarkModeRef } from '@vuepress/theme-default/lib/client';
export interface PrismOptions {
}

export interface PluginOptions {
  lineNumbers?: boolean | number;
  vPre?: boolean;
}

export interface PrposTypes {
  id: string,
  code: string,
  language: string,
  vPre: boolean,
  lineNumbers: boolean | number,
  prismOptions: Partial<PrismOptions>,
  style: object,
  useDarkMode: () => DarkModeRef,
}

export interface HighlightLanguage {
  name: string

  ext: string

  aliases: string[]
}
