"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const line_numbers_1 = __importDefault(require("./line-numbers"));
exports.default = (md, pluginMap, app) => {
    md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
        var _a, _b;
        const preClassList = [];
        const preStyleList = [];
        const codeStyleList = [];
        let lines = null;
        const token = tokens[idx];
        const info = token.info ? md.utils.unescapeAll(token.info).trim() : '';
        const lang = ((_a = info.match(/^([a-zA-Z]+)/)) === null || _a === void 0 ? void 0 : _a[1]) || 'text';
        const html = ((_b = options.highlight) === null || _b === void 0 ? void 0 : _b.call(options, token.content, lang, '')) || md.utils.escapeHtml(token.content);
        const languageClass = `${md.options.langPrefix}${md.utils.escapeHtml(lang)}`;
        preClassList.push(languageClass);
        if (pluginMap['line-numbers']) {
            lines = (0, line_numbers_1.default)(token, info, token.content, preStyleList, app);
            if (lines) {
                preClassList.push('line-numbers');
                preStyleList.push(`counter-reset: linenumber ${lines[0] - 1};`);
            }
        }
        const codeStr = `<code class='${languageClass}'>${html}${lines ? lines[1] : ''}</code>`;
        return `<pre class='${preClassList.join(' ')}' style='${preStyleList.join('')}'>${codeStr}</pre>`;
    };
};
