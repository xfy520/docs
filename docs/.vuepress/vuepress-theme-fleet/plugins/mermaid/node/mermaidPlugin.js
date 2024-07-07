"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mermaidPlugin = void 0;
const utils_1 = require("@vuepress/utils");
const markdownItPlugin_1 = __importDefault(require("./markdownItPlugin"));
const mermaidPlugin = ({ name = 'Mermaid', mermaidOptions = {}, style = {}, } = {}) => {
    return {
        name: 'vuepress-plugin-mermaid',
        extendsMarkdown(md) {
            md.use(markdownItPlugin_1.default, {
                name, mermaidOptions
            });
        },
        clientConfigFile: utils_1.path.resolve(__dirname, '../client/config.js'),
        define: {
            __MERMAID_COMPONENT_NAME__: name,
            __MERMAID_DEFAULT_OPTIONS__: mermaidOptions,
            __MERMAID_DEFAULT_STYLE__: style,
        },
    };
};
exports.mermaidPlugin = mermaidPlugin;
