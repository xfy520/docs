const url = /\b([a-z]{3,7}:\/\/|tel:)[\w\-+%~/.:=&@]+(?:\?[\w\-+%~/.:=?&!$'()*,;@]*)?(?:#[\w\-+%~/.:#=?&!$'()*,;@]*)?/;
const email = /\b\S+@[\w.]+[a-z]{2}/;
const linkMd = /\[([^\]]+)\]\(([^)]+)\)/;

const candidates = ['comment', 'doc-comment', 'url', 'attr-value', 'string'];

Prism.plugins.autolinker = {
  processGrammar: function (grammar) {
    if (!grammar || grammar['url-link']) {
      return;
    }
    Prism.languages.DFS(grammar, function (key, def, type) {
      if (candidates.indexOf(type) > -1 && !Array.isArray(def)) {
        if (!def.pattern) {
          def = this[key] = {
            pattern: def
          };
        }
        def.inside = def.inside || {};
        if (type == 'comment' || type == 'doc-comment') {
          def.inside['md-link'] = linkMd;
        }
        if (type == 'attr-value') {
          Prism.languages.insertBefore('inside', 'punctuation', { 'url-link': url }, def);
        } else {
          def.inside['url-link'] = url;
        }
        def.inside['email-link'] = email;
      }
    });
    grammar['url-link'] = url;
    grammar['email-link'] = email;
  }
};

Prism.hooks.add('before-tokenize', function (env) {
  Prism.plugins.autolinker.processGrammar(env.grammar);
});

Prism.hooks.add('wrap', function (env) {
  if (/-link$/.test(env.type)) {
    env.tag = 'a';
    let href = env.content;
    if (env.type === 'email-link' && href.indexOf('mailto:') !== 0) {
      href = 'mailto:' + href;
    } else if (env.type === 'md-link') {
      const match = env.content.match(linkMd);
      href = match[2];
      env.content = match[1];
    }
    env.attributes.href = href;
    if (env.type !== 'email-link') {
      env.attributes.target = '_blank';
    }
    env.attributes.style = 'text-decoration: underline;'
    try {
      env.content = decodeURIComponent(env.content);
    } catch (e) { }
  }
});
