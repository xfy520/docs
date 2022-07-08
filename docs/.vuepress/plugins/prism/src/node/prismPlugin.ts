import type { Plugin } from 'vuepress';
import { path } from '@vuepress/utils';

import markdownItPlugin from './markdownItPlugin';
import type { PluginOptions, PrismOptions } from '../shared';

export interface PrismPluginOptions {
  name?: string;
  prismOptions?: Partial<PrismOptions>;
  pluginOptions?: Partial<PluginOptions>;
  style?: {
    [key: string]: string | number;
  };
}

export const prismPlugin = ({
  name = 'Prism',
  prismOptions = {},
  pluginOptions = {},
  style = {},
}: PrismPluginOptions = {}): Plugin => {
  return {
    name: 'vuepress-plugin-prism',
    extendsMarkdown(md) {
      md.use(markdownItPlugin, pluginOptions);
    },
    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),
    define: {
      __PRISM_COMPONENT_NAME__: name,
      __PRISM_DEFAULT_OPTIONS__: prismOptions,
      __PLUGIN_DEFAULT_OPTIONS__: pluginOptions,
      __PRISM_DEFAULT_STYLE__: style,
    },
  }
}
