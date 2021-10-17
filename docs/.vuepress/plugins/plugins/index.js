"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadCss = exports.loadLanguages = exports.loadPlugins = void 0;
const components_1 = __importDefault(require("prismjs/components"));
const dependencies_1 = __importDefault(require("prismjs/dependencies"));
const index_1 = __importDefault(require("prismjs/components/index"));
const prismjs_1 = __importDefault(require("prismjs"));
const uglifycss_1 = __importDefault(require("uglifycss"));
const fs_1 = __importDefault(require("fs"));
const md_1 = __importDefault(require("./md"));
index_1.default.silent = true;
let globalPluginsLoad = true;
const localPluginList = {
    autolinker: true,
    'inline-color': true,
    'diff-highlight': true,
    'data-uri-highlight': true,
};
const pluginList = {
    treeview: true,
    'highlight-keywords': true,
};
const pluginMap = {};
const getPath = (type) => (name) => `prismjs/${components_1.default[type].meta.path.replace(/\{id\}/g, name)}`;
const isPlugin = (dep) => components_1.default.plugins[dep] != null;
const getNoCSS = (type, name) => !!components_1.default[type][name].noCSS;
const getThemePath = (theme) => {
    if (theme.includes('/')) {
        const [themePackage, themeName] = theme.split('/');
        return `${themePackage}/themes/prism-${themeName}.css`;
    }
    if (theme === 'default') {
        theme = 'prism';
    }
    else {
        theme = `prism-${theme}`;
    }
    return getPath('themes')(theme);
};
const getPluginPath = getPath('plugins');
function loadPlugins(md, plugins, app) {
    if (!globalPluginsLoad) {
        return;
    }
    globalPluginsLoad = false;
    if (plugins) {
        for (let index = 0; index < plugins.length;) {
            const plugin = plugins[index];
            if (localPluginList[plugin]) {
                Promise.resolve().then(() => __importStar(require(`./prismjs/${plugin}`)));
            }
            if (pluginList[plugin]) {
                Promise.resolve().then(() => __importStar(require(`prismjs/plugins/${plugin}/prism-${plugin}`)));
            }
            pluginMap[plugin] = true;
            index += 1;
        }
    }
    (0, md_1.default)(md, pluginMap, app);
}
exports.loadPlugins = loadPlugins;
function loadLanguages(languages) {
    const langsToLoad = languages === null || languages === void 0 ? void 0 : languages.filter((item) => !prismjs_1.default.languages[item]);
    if (langsToLoad === null || langsToLoad === void 0 ? void 0 : langsToLoad.length) {
        (0, index_1.default)(langsToLoad);
    }
}
exports.loadLanguages = loadLanguages;
function getPluginCssList(plugins) {
    const cssList = (0, dependencies_1.default)(components_1.default, [...plugins]).getIds().reduce((deps, dep) => {
        const temp = [];
        if (isPlugin(dep) && !getNoCSS('plugins', dep)) {
            temp.unshift(`${getPluginPath(dep)}.css`);
        }
        return [...deps, ...temp];
    }, ([]));
    return cssList;
}
function getFileString(file) {
    const data = fs_1.default.readFileSync(`node_modules/${file}`);
    return uglifycss_1.default.processString(data.toString(), { maxLineLen: 500, expandVars: true });
}
function loadCss(app, options) {
    let cssPathList = [];
    let themeCssPath;
    if (options && options.plugins) {
        cssPathList = getPluginCssList(options.plugins);
    }
    if (options && options.theme) {
        themeCssPath = getThemePath(options.theme);
    }
    const cssStrList = [];
    if (themeCssPath) {
        cssStrList.push(getFileString(themeCssPath));
    }
    cssPathList.forEach((file) => {
        cssStrList.push(getFileString(file));
    });
    if (cssStrList.length === 0) {
        return;
    }
    app.siteData.head = app.siteData.head || [];
    cssStrList.forEach((cssStr) => {
        if (cssStr && app.siteData) {
            app.siteData.head.push(['style', { type: 'text/css' }, cssStr]);
        }
    });
}
exports.loadCss = loadCss;
