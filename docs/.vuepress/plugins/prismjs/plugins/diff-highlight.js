const LANGUAGE_REGEX = /^diff-([\w-]+)/i;
const HTML_TAG = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/gi;
const HTML_LINE = RegExp(/(?:__|[^\r\n<])*(?:\r\n?|\n|(?:__|[^\r\n<])(?![^\r\n]))/.source.replace(/__/g, function () { return HTML_TAG.source; }), 'gi');

let warningLogged = false;

Prism.hooks.add('before-tokenize', function (env) {
  if (!warningLogged && !Prism.languages.diff && !Prism.plugins.autoloader) {
    warningLogged = true;
    console.warn("Prism's Diff Highlight plugin requires the Diff language definition (prism-diff.js)." +
      "Make sure the language definition is loaded or use Prism's Autoloader plugin.");
  }
  const lang = env.language;
  if (LANGUAGE_REGEX.test(lang) && !Prism.languages[lang]) {
    Prism.languages[lang] = Prism.languages.diff;
  }
});

Prism.hooks.add('wrap', function (env) {
  let diffLanguage; var diffGrammar;
  if (env.language !== 'diff') {
    var langMatch = LANGUAGE_REGEX.exec(env.language);
    if (!langMatch) {
      return;
    }
    diffLanguage = langMatch[1];
    diffGrammar = Prism.languages[diffLanguage];
  }
  let PREFIXES = Prism.languages.diff && Prism.languages.diff.PREFIXES;

  if (PREFIXES && env.type in PREFIXES) {
    let content = env.content.replace(HTML_TAG, '');

    let decoded = content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');

    let code = decoded.replace(/(^|[\r\n])./g, '$1');

    let highlighted;
    if (diffGrammar) {
      highlighted = Prism.highlight(code, diffGrammar, diffLanguage);
    } else {
      highlighted = Prism.util.encode(code);
    }

    let prefixToken = new Prism.Token('prefix', PREFIXES[env.type], [/\w+/.exec(env.type)[0]]);
    let prefix = Prism.Token.stringify(prefixToken, env.language);

    let lines = []; let m;
    HTML_LINE.lastIndex = 0;
    while ((m = HTML_LINE.exec(highlighted))) {
      lines.push(prefix + m[0]);
    }
    if (/(?:^|[\r\n]).$/.test(decoded)) {
      lines.push(prefix);
    }
    env.content = lines.join('');
    if (diffGrammar) {
      env.classes.push('language-' + diffLanguage);
    }
  }
});
