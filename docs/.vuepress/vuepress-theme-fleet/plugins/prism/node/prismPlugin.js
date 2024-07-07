"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.prismPlugin = void 0;
const utils_1 = require("@vuepress/utils");
const package_json_1 = require("prismjs/package.json");
const markdownItPlugin_1 = __importDefault(require("./markdownItPlugin"));
const defaultCss = () => {
    let codeScssPath = 'node_modules/@vuepress/theme-default/lib/client/styles/code.scss';
    utils_1.fs.writeFileSync(utils_1.path.resolve(codeScssPath), '');
    codeScssPath = 'node_modules/@vuepress/theme-default/lib/client/styles/code-group.scss';
    utils_1.fs.writeFileSync(utils_1.path.resolve(codeScssPath), '');
};
const writePuglin = (plugins = ['line-numbers', 'show-language', 'line-highlight']) => {
    let pluginStr = '';
    if (plugins && plugins.length) {
        plugins.forEach(plugin => {
            try {
                let buffer;
                if (plugin === 'download-button' || plugin === 'autolinker') {
                    buffer = utils_1.fs.readFileSync(utils_1.path.resolve(__dirname, `../client/static/plugins/prism-${plugin}.js`));
                }
                else {
                    buffer = utils_1.fs.readFileSync(`node_modules/prismjs/plugins/${plugin}/prism-${plugin}.min.js`);
                }
                pluginStr += buffer.toString();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    utils_1.fs.writeFileSync(utils_1.path.resolve(__dirname, '../client/static/plugins/prism-plugin.js'), pluginStr);
};
const writeLanguages = (languages = ['css', 'python', 'java', 'javascript', 'typescript', 'less',
    'markdown', 'bash', 'go', 'go-module', 'docker', 'sql', 'yaml', 'cpp',]) => {
    let languageStr = '';
    if (languages && languages.length) {
        languages.forEach(language => {
            try {
                if (language === 'cpp' && !languages.includes('c')) {
                    const buffer = utils_1.fs.readFileSync(`node_modules/prismjs/components/prism-c.min.js`);
                    languageStr += buffer.toString();
                }
                const buffer = utils_1.fs.readFileSync(`node_modules/prismjs/components/prism-${language}.min.js`);
                languageStr += buffer.toString();
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    utils_1.fs.writeFileSync(utils_1.path.resolve(__dirname, '../client/static/language/prism-languages.js'), languageStr);
};
const loadPlugin = (plugins) => {
    const prismPlugins = {};
    if (plugins && plugins.length) {
        plugins.forEach(plugin => {
            if (typeof plugin === 'string') {
                prismPlugins[plugin] = plugin;
            }
            else {
                prismPlugins[plugin.name] = plugin;
            }
        });
    }
    return prismPlugins;
};
const prismPlugin = (options = {
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
        }, 'show-invisibles', 'autolinker', 'inline-color', 'previewers', 'match-braces',
        'highlight-keywords', 'treeview', {
            name: 'normalize-whitespace',
            options: {
                'remove-trailing': true,
                'remove-indent': true,
                'left-trim': true,
                'right-trim': true,
            }
        }],
    languages: ['css', 'python', 'java', 'javascript', 'typescript', 'less',
        'markdown', 'bash', 'go', 'go-module', 'docker', 'sql', 'yaml', 'cpp'],
    vPreBlock: true,
    vPreInline: true,
    tabSize: 4,
}) => {
    defaultCss();
    const prismPlugins = loadPlugin(options.plugins);
    writePuglin(Object.keys(prismPlugins));
    writeLanguages(options.languages);
    return {
        name: 'vuepress-plugin-prism',
        extendsMarkdown(md) {
            md.use(markdownItPlugin_1.default, options, prismPlugins);
        },
        clientConfigFile: utils_1.path.resolve(__dirname, '../client/config.js'),
        define: {
            __PRISM_COMPONENT_NAME__: options.name || 'Prism',
            __PRISM_THEME__: options.theme || '',
            __PRISM_NORMALIZE_WHITESPACE__: prismPlugins['normalize-whitespace'],
            __PRISM_VERSION__: package_json_1.version
        },
    };
};
exports.prismPlugin = prismPlugin;
