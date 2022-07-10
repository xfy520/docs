import type { PluginWithOptions } from 'markdown-it';
import type { PrismPluginOptions, PrismPluginType } from '../shared';
import { resolveDataSrc } from './utils/resolveDataSrc';
import resolveLanguage from './utils/resolveLanguage';
import { resolveLineHighlight } from './utils/resolveLineHighlight';

import { resolveLineNumbers, startLine, whiteSpace } from './utils/resolveLineNumbers';

import resolveVPre from './utils/resolveVPre';

const markdownItPlugin: PluginWithOptions<PrismPluginOptions> = (md: markdownit, {
  name = 'Prism',
  vPreBlock = true,
  vPreInline = true,
  tabSize = 4,

}: PrismPluginOptions = {}, prismPlugins: PrismPluginType = {}) => {
  console.log(prismPlugins)
  md.renderer.rules.fence = (tokens, idx: number, options: markdownit.Options) => {
    const token = tokens[idx];
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';

    const { content } = token;
    const code = md.utils.escapeHtml(content);

    const classList: Array<string> = [];
    classList.push('vuepress-plugin-prism');

    const attrList: Array<string> = [];

    const styleList: Array<string> = [];
    styleList.push(`tab-size: ${tabSize};`);

    const language = resolveLanguage(info);
    const languageClass = `${options.langPrefix}${language.name}`;
    classList.push(languageClass);

    if (prismPlugins['line-numbers'] && resolveLineNumbers(info)) {
      classList.push('line-numbers');
      attrList.push(`data-start="${startLine(info, content)}"`);
      const space = whiteSpace(info);
      space && styleList.push(`white-space: ${space};`)
    } else {
      classList.push('no-line-numbers')
    }

    if (prismPlugins['download-button']) {
      const dataSrc = resolveDataSrc(info);
      if (dataSrc) {
        const down = prismPlugins['download-button'];
        attrList.push(`data-url="${dataSrc}"`);
        attrList.push(`download-label="${(down.options && down.options.label) || 'Download'}"`);
      }
    }

    if (prismPlugins['line-highlight']) {
      const lineHighlight = resolveLineHighlight(info);
      lineHighlight && attrList.push(`data-line="${lineHighlight}"`);
    }

    if (prismPlugins['copy-to-clipboard']) {
      const copy = prismPlugins['copy-to-clipboard'];
      attrList.push(`data-prismjs-copy="${(copy.options && copy.options.copy) || 'copy'}"`);
      attrList.push(`data-prismjs-copy-error="${(copy.options && copy.options.error) || 'Ctrl+C Copy'}"`);
      attrList.push(`data-prismjs-copy-success="${(copy.options && copy.options.success) || 'success'}"`);
    }



    let result = `<pre style="${styleList.join(' ')}" class=" ${classList.join(' ')}" ${attrList.join(' ')}><code style="${styleList.join(' ')}">${code}</code></pre>`

    const useVPre = resolveVPre(info) ?? vPreBlock;
    if (useVPre) {
      result = `<pre v-pre${result.slice('<pre'.length)}`;
    }
    return `<ClientOnly><${name}>${result}</${name}></ClientOnly>`;
  }

  if (vPreInline) {
    const rawInlineCodeRule = md.renderer.rules.code_inline!
    md.renderer.rules.code_inline = (tokens, idx, options, env, slf) => {
      const result = rawInlineCodeRule(tokens, idx, options, env, slf);
      return `<code v-pre${result.slice('<code'.length)}`;
    }
  }

}

export default markdownItPlugin;
