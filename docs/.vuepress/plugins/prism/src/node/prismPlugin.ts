import type { Plugin } from 'vuepress';
import { path } from '@vuepress/utils';

import markdownItPlugin from './markdownItPlugin';
import type { PrismOptions } from '../shared';

export interface PrismPluginOptions {
  name?: string;
  options?: Partial<PrismOptions>;
  style?: {
    [key: string]: string | number;
  };
}

export const prismPlugin = ({
  name = 'Prism',
  options = {},
  style = {},
}: PrismPluginOptions = {}): Plugin => {
  return {
    name: 'vuepress-plugin-prism',
    extendsMarkdown(md) {
      md.use(markdownItPlugin);
    },
    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),
    define: {
      __PRISM_COMPONENT_NAME__: name,
      __PRISM_DEFAULT_OPTIONS__: options,
      __PRISM_DEFAULT_STYLE__: style,
    },
  }
}
