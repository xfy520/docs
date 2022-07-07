import type { Plugin } from 'vuepress';
import { path } from '@vuepress/utils';

import markdownItPlugin from './markdownItPlugin';
import type { MermaidOptions } from '../shared';

export interface MermaidPluginOptions {
  name?: string;
  options?: Partial<MermaidOptions>;
  style?: {
    [key: string]: string | number;
  };
}

export const mermaidPlugin = ({
  name = 'Mermaid',
  options = {},
  style = {},
}: MermaidPluginOptions = {}): Plugin => {
  return {
    name: 'vuepress-plugin-mermaid',
    extendsMarkdown(md) {
      md.use(markdownItPlugin);
    },
    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),
    define: {
      __MERMAID_COMPONENT_NAME__: name,
      __MERMAID_DEFAULT_OPTIONS__: options,
      __MERMAID_DEFAULT_STYLE__: style,
    },
  }
}
