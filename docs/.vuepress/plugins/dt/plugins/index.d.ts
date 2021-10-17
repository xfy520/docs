import { App } from '@vuepress/core';
import MarkdownIt from 'markdown-it';
import { optionsType } from '..';
declare function loadPlugins(md: MarkdownIt, plugins: Array<string> | undefined, app: App): undefined;
declare function loadLanguages(languages?: Array<string>): void;
declare function loadCss(app: App, options?: optionsType): undefined;
export { loadPlugins, loadLanguages, loadCss, };
