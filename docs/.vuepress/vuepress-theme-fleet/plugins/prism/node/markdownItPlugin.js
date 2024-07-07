"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolveDataSrc_1 = require("./utils/resolveDataSrc");
const resolveLanguage_1 = __importDefault(require("./utils/resolveLanguage"));
const resolveLineHighlight_1 = require("./utils/resolveLineHighlight");
const resolveLineNumbers_1 = require("./utils/resolveLineNumbers");
const resolveVPre_1 = __importDefault(require("./utils/resolveVPre"));
const markdownItPlugin = (md, { name = 'Prism', vPreBlock = true, vPreInline = true, tabSize = 4, } = {}, prismPlugins = {}) => {
    md.renderer.rules.fence = (tokens, idx, options) => {
        var _a;
        const token = tokens[idx];
        const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
        const { content } = token;
        const code = md.utils.escapeHtml(content);
        const classList = [];
        classList.push('vuepress-plugin-prism');
        const attrList = [];
        const styleList = [];
        styleList.push(`tab-size: ${tabSize};`);
        const language = (0, resolveLanguage_1.default)(info);
        const languageClass = `${options.langPrefix}${language.name}`;
        classList.push(languageClass);
        if (prismPlugins['line-numbers'] && (0, resolveLineNumbers_1.resolveLineNumbers)(info)) {
            classList.push('line-numbers');
            attrList.push(`data-start="${(0, resolveLineNumbers_1.startLine)(info, content)}"`);
            const space = (0, resolveLineNumbers_1.whiteSpace)(info);
            space && styleList.push(`white-space: ${space};`);
        }
        else {
            classList.push('no-line-numbers');
        }
        if (prismPlugins['download-button']) {
            const dataSrc = (0, resolveDataSrc_1.resolveDataSrc)(info);
            if (dataSrc) {
                const down = prismPlugins['download-button'];
                attrList.push(`data-url="${dataSrc}"`);
                attrList.push(`download-label="${(down.options && down.options.label) || 'Download'}"`);
            }
        }
        if (prismPlugins['line-highlight']) {
            const lineHighlight = (0, resolveLineHighlight_1.resolveLineHighlight)(info);
            lineHighlight && attrList.push(`data-line="${lineHighlight}"`);
        }
        if (prismPlugins['copy-to-clipboard']) {
            const copy = prismPlugins['copy-to-clipboard'];
            attrList.push(`data-prismjs-copy="${(copy.options && copy.options.copy) || 'copy'}"`);
            attrList.push(`data-prismjs-copy-error="${(copy.options && copy.options.error) || 'Ctrl+C Copy'}"`);
            attrList.push(`data-prismjs-copy-success="${(copy.options && copy.options.success) || 'success'}"`);
        }
        if (prismPlugins['match-braces']) {
            classList.push('match-braces');
            if (/:no-brace-hover\b/.test(info)) {
                classList.push('no-brace-hover');
            }
            if (/:no-brace-select\b/.test(info)) {
                classList.push('no-brace-select');
            }
            if (!(/:no-rainbow-braces\b/.test(info))) {
                classList.push('rainbow-braces');
            }
        }
        let result = `<pre style="${styleList.join(' ')}" class=" ${classList.join(' ')}" ${attrList.join(' ')}><code style="${styleList.join(' ')}">${code}</code></pre>`;
        const useVPre = (_a = (0, resolveVPre_1.default)(info)) !== null && _a !== void 0 ? _a : vPreBlock;
        if (useVPre) {
            result = `<pre v-pre${result.slice('<pre'.length)}`;
        }
        return `<ClientOnly><${name}>${result}</${name}></ClientOnly>`;
    };
    if (vPreInline) {
        const rawInlineCodeRule = md.renderer.rules.code_inline;
        md.renderer.rules.code_inline = (tokens, idx, options, env, slf) => {
            const result = rawInlineCodeRule(tokens, idx, options, env, slf);
            return `<code v-pre${result.slice('<code'.length)}`;
        };
    }
};
exports.default = markdownItPlugin;
