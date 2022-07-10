import type { Plugin } from 'vuepress';
import { path, fs } from '@vuepress/utils';
import { version } from 'prismjs/package.json';

import markdownItPlugin from './markdownItPlugin';
import type { PrismPluginOptions, PluginListType, PrismPluginType } from '../shared';

const defaultCss = () => {
  let codeScssPath = 'node_modules/@vuepress/theme-default/lib/client/styles/code.scss';
  fs.writeFileSync(path.resolve(codeScssPath), '');
  codeScssPath = 'node_modules/@vuepress/theme-default/lib/client/styles/code-group.scss';
  fs.writeFileSync(path.resolve(codeScssPath), '');
}

const loadPlugin = (plugins?: PluginListType): PrismPluginType => {
  const prismPlugins = {};
  if (plugins && plugins.length) {
    plugins.forEach(plugin => {
      if (typeof plugin === 'string') {
        prismPlugins[plugin] = plugin;
      } else {
        prismPlugins[plugin.name] = plugin;
      }
    })
  }
  return prismPlugins;
}


export const prismPlugin = (options: PrismPluginOptions = {
  name: 'Prism',
  theme: '',
  plugins: ['line-numbers', 'show-language', 'line-highlight', {
    name: 'copy-to-clipboard',
    options: {
      copy: '复制',
      error: '按Ctrl+C复制',
      success: '已复制',
    }
  }, {
      name: 'download-button',
      options: {
        label: '下载'
      }
    }, 'show-invisibles', 'autolinker', 'inline-color', 'previewers'],
  vPreBlock: true,
  vPreInline: true,
  tabSize: 4,
}): Plugin => {
  defaultCss();
  const prismPlugins = loadPlugin(options.plugins);
  return {
    name: 'vuepress-plugin-prism',
    extendsMarkdown(md) {
      md.use(markdownItPlugin, options, prismPlugins);
    },
    clientConfigFile: path.resolve(__dirname, '../client/config.ts'),
    define: {
      __PRISM_COMPONENT_NAME__: options.name || 'Prism',
      __PRISM_PLUGINS__: prismPlugins,
      __PRISM_THEME__: options.theme || '',
      __PRISM_VERSION__: version
    },
  }
}
