"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = __importDefault(require("prismjs"));
const utils_1 = require("@vuepress/utils");
const plugins_1 = require("./plugins");
const plugin = (md, options, app) => {
    if (options) {
        (0, plugins_1.loadPlugins)(md, options.plugins, app);
        (0, plugins_1.loadLanguages)(options.languages);
    }
    (0, plugins_1.loadCss)(app, options);
    md.options.highlight = (code, lang) => {
        const prismLang = prismjs_1.default.languages[lang];
        const html = prismLang
            ? prismjs_1.default.highlight(code, prismLang, lang)
            : md.utils.escapeHtml(code);
        return html;
    };
};
exports.default = (options, app) => {
    console.log('\x1B[36m%s\x1B[0m', 'vuepress plugin loading');
    return {
        name: 'markdown-prismjs-plugin',
        extendsMarkdown(md) {
            app.siteData.head = app.siteData.head || [];
            app.siteData.head.push(['script', {}, '']);
            plugin(md, options, app);
        },
        clientAppEnhanceFiles: app.env.isBuild ? utils_1.path.resolve(__dirname, './clientAppEnhanceFiles.js') : utils_1.path.resolve(__dirname, './esm/clientAppEnhanceFiles.js'),
    };
};
