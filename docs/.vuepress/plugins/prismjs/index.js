const fs = require("fs");
const CleanCSS = require('clean-css');
const Prism = require("prismjs");
const loadLanguages = require("prismjs/components/index");

const config = require('prismjs/components');
const getLoader = require('prismjs/dependencies');

loadLanguages.silent = true;

let load = false;

const pluginList = {
  autolinker: true,
  "inline-color": true,
  "diff-highlight": true,
  "data-uri-highlight": true
};

const languageNameMap = {
  html: "markup",
  vue: "markup",
}

const docLangMap = {
  csharp: "xml-doc",
  fsharp: "xml-doc",
  java: "javadoc",
  javascript: "jsdoc",
  php: "phpdoc",
  typescript: "jsdoc",
}

function loadCode(language) {
  const lang = languageNameMap[language] || language;
  let langsToLoad = [lang];
  if (docLangMap[lang]) {
    langsToLoad.push(docLangMap[lang]);
  }
  langsToLoad = langsToLoad.filter((item) => !Prism.languages[item]);
  if (langsToLoad.length) {
    loadLanguages(langsToLoad);
  }
  if (!Prism.languages[lang]) {
    return null;
  }
  return (code) => Prism.highlight(code, Prism.languages[lang], lang);
}

const getPath = type => name =>
  `prismjs/${config[type].meta.path.replace(/\{id\}/g, name)}`;

const isPlugin = dep => config.plugins[dep] != null;

const getNoCSS = (type, name) => !!config[type][name].noCSS;

const getThemePath = theme => {
  if (theme.includes("/")) {
    const [themePackage, themeName] = theme.split("/");
    return `${themePackage}/themes/prism-${themeName}.css`
  }
  if (theme === "default") {
    theme = "prism";
  } else {
    theme = `prism-${theme}`;
  }
  return getPath("themes")(theme);
};

const getPluginPath = getPath("plugins");

function loadPlugins(app, css, plugins) {
  app.siteData.head = app.siteData.head || [];
  plugins.forEach(plugin => {
    if (pluginList[plugin]) {
      require(`./plugins/${plugin}`);
    }
  });
  if (css) {
    const pluginCss = getLoader(config, [...plugins]).getIds().reduce((deps, dep) => {
      const css = [];
      if (isPlugin(dep) && !getNoCSS("plugins", dep)) {
        css.unshift(getPluginPath(dep) + '.css');
      }
      return [...deps, ...css];
    }, ([]));
    pluginCss.forEach(async cssPath => {
      try {
        fs.accessSync(`node_modules/${cssPath}`);
        console.log(`node_modules/${cssPath}`);
        const minifiedCSS = new CleanCSS({}).minify((fs.readFileSync(`node_modules/${cssPath}`).toString()));
        if (minifiedCSS.styles) {
          app.siteData.head.push(['style', { type: 'text/css' }, minifiedCSS.styles]);
        }
      } catch (error) {
      }
    });
  }
}

const themeCss = {
  coy: "#fdfdfd",
  dark: "#4c3f33",
  funky: `url('data:image/svg+xml;charset=utf-8,<svg%20version%3D"1.1"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20width%3D"100"%20height%3D"100"%20fill%3D"rgba(0%2C0%2C0%2C.2)">%0D%0A<polygon%20points%3D"0%2C50%2050%2C0%200%2C0"%20%2F>%0D%0A<polygon%20points%3D"0%2C100%2050%2C100%20100%2C50%20100%2C0"%20%2F>%0D%0A<%2Fsvg>')`,
  okaidia: "#272822",
  solarizedlight: "#fdf6e3",
  tomorrow: "#2d2d2d",
  twilight: "hsl(0, 0%, 33%)"
}

function loadTheme(app, css, theme = null) {
  if (css && theme) {
    app.siteData.head.push(['style', { type: 'text/css' }, `div[class*=language-] {
      background-color: ${themeCss[theme] ? themeCss[theme] : '#b3d4fc'} !important;
    }`])
    const themeCssPath = getThemePath(theme);
    try {
      fs.accessSync(`node_modules/${themeCssPath}`);
      app.siteData.head = app.siteData.head || [];
      const minifiedCSS = new CleanCSS({}).minify((fs.readFileSync(`node_modules/${themeCssPath}`).toString()));
      console.log(`node_modules/${themeCssPath}`)
      if (minifiedCSS.styles) {
        app.siteData.head.push(['style', { type: 'text/css' }, minifiedCSS.styles]);
      }
    } catch (error) {

    }
  }
}

module.exports = ({ languages = ["markdown", "jsdoc", "yaml"], plugins = [], theme = null, css = true }, app) => ({
  name: "vuepress-plugin-prismjs",
  extendsMarkdown(md) {
    if (!load) {
      loadTheme(app, css, theme);
      loadPlugins(app, css, plugins);
    }
    load = true;
    if (languages?.length !== 0) {
      const langsToLoad = languages.filter((item) => !Prism.languages[item]);
      if (langsToLoad.length) {
        loadLanguages(langsToLoad);
      }
    }
    md.options.highlight = (code, lang) => {
      const load = loadCode(lang);
      return load?.(code) || "";
    }
  },
});

