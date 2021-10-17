"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = __importDefault(require("prismjs"));
const LANGUAGE_REGEX = /^diff-([\w-]+)/i;
const HTML_TAG = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/gi;
const HTML_LINE = RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g, () => HTML_TAG.source), 'gi');
let warningLogged = false;
prismjs_1.default.hooks.add('before-tokenize', (env) => {
    if (!warningLogged && !prismjs_1.default.languages.diff && !prismjs_1.default.plugins.autoloader) {
        warningLogged = true;
        console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js)."
            + "Make sure the language definition is loaded or use Prism's Autoloader plugin.");
    }
    const lang = env.language;
    if (LANGUAGE_REGEX.test(lang) && !prismjs_1.default.languages[lang]) {
        prismjs_1.default.languages[lang] = prismjs_1.default.languages.diff;
    }
});
prismjs_1.default.hooks.add('wrap', (env) => {
    let diffLanguage;
    let diffGrammar;
    if (env.language !== 'diff') {
        const langMatch = LANGUAGE_REGEX.exec(env.language);
        if (!langMatch) {
            return;
        }
        diffLanguage = langMatch[1];
        diffGrammar = prismjs_1.default.languages[diffLanguage];
    }
    const PREFIXES = prismjs_1.default.languages.diff && prismjs_1.default.languages.diff.PREFIXES;
    if (PREFIXES && env.type in PREFIXES) {
        const content = env.content.replace(HTML_TAG, '');
        const decoded = content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
        const code = decoded.replace(/(^|[\r\n])./g, '$1');
        let highlighted;
        if (diffGrammar) {
            highlighted = prismjs_1.default.highlight(code, diffGrammar, diffLanguage);
        }
        else {
            highlighted = prismjs_1.default.util.encode(code);
        }
        const types = /\w+/.exec(env.type);
        if (types) {
            const prefixToken = new prismjs_1.default.Token('prefix', PREFIXES[env.type], [types[0]]);
            const prefix = prismjs_1.default.Token.stringify(prefixToken, env.language);
            const lines = [];
            let m;
            HTML_LINE.lastIndex = 0;
            while ((m = HTML_LINE.exec(highlighted))) {
                lines.push(prefix + m[0]);
            }
            if (/(?:^|[\r\n]).$/.test(decoded)) {
                lines.push(prefix);
            }
            env.content = lines.join('');
            if (diffGrammar) {
                env.classes.push(`language-${diffLanguage}`);
            }
        }
    }
});
