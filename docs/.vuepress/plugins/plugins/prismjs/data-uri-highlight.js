"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prismjs_1 = __importDefault(require("prismjs"));
const autoLinkerProcess = (grammar) => {
    if (prismjs_1.default.plugins.autolinker) {
        prismjs_1.default.plugins.autolinker.processGrammar(grammar);
    }
    return grammar;
};
const dataURI = {
    pattern: /(.)\bdata:[^\/]+\/[^,]+,(?:(?!\1)[\s\S]|\\\1)+(?=\1)/,
    lookbehind: true,
    inside: {
        'language-css': {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?css,)[\s\S]+/,
            lookbehind: true,
        },
        'language-javascript': {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?javascript,)[\s\S]+/,
            lookbehind: true,
        },
        'language-json': {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?json,)[\s\S]+/,
            lookbehind: true,
        },
        'language-markup': {
            pattern: /(data:[^\/]+\/(?:[^+,]+\+)?(?:html|xml),)[\s\S]+/,
            lookbehind: true,
        },
    },
};
const candidates = ['url', 'attr-value', 'string'];
prismjs_1.default.plugins.dataURIHighlight = {
    processGrammar(grammar) {
        if (!grammar || grammar['data-uri']) {
            return;
        }
        prismjs_1.default.languages.DFS(grammar, function (key, def, type) {
            if (candidates.indexOf(type) > -1 && !Array.isArray(def)) {
                if (!def.pattern) {
                    this[key] = {
                        pattern: def,
                    };
                    def = this[key];
                }
                def.inside = def.inside || {};
                if (type === 'attr-value') {
                    prismjs_1.default.languages.insertBefore('inside', def.inside['url-link'] ? 'url-link' : 'punctuation', {
                        'data-uri': dataURI,
                    }, def);
                }
                else if (def.inside['url-link']) {
                    prismjs_1.default.languages.insertBefore('inside', 'url-link', {
                        'data-uri': dataURI,
                    }, def);
                }
                else {
                    def.inside['data-uri'] = dataURI;
                }
            }
        });
        grammar['data-uri'] = dataURI;
    },
};
prismjs_1.default.hooks.add('before-tokenize', (env) => {
    if (dataURI.pattern.test(env.code)) {
        for (const p in dataURI.inside) {
            if (dataURI.inside.hasOwnProperty(p)) {
                if (!dataURI.inside[p].inside && dataURI.inside[p].pattern.test(env.code)) {
                    const langs = p.match(/^language-(.+)/);
                    if (langs && langs.length > 2) {
                        const lang = langs[1];
                        if (prismjs_1.default.languages[lang]) {
                            dataURI.inside[p].inside = {
                                rest: autoLinkerProcess(prismjs_1.default.languages[lang]),
                            };
                        }
                    }
                }
            }
        }
    }
    prismjs_1.default.plugins.dataURIHighlight.processGrammar(env.grammar);
});
