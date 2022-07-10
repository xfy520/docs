export interface PrismPluginOptions {
  name?: string;

  theme?: PluginThemeType;

  plugins?: PluginListType

  vPreBlock?: boolean;

  vPreInline?: boolean;

  tabSize?: number;
}

export interface HighlightLanguage {
  name: string

  ext: string

  aliases: string[]
}

export type PluginThemeType = 'coy' | 'dark' | 'funky' | 'okaidia' | 'solarizedlight' | 'twilight' | '';

export type PluginListType = Array<
  'line-numbers' | 'show-language' | 'line-highlight' |
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
}
