(function () {

  if (typeof Prism === 'undefined' || typeof document === 'undefined' || !document.querySelector) {
    return;
  }

  Prism.plugins.toolbar.registerButton('download-file', function (env) {

    var pre = env.element.parentNode;
    if (!pre || !/pre/i.test(pre.nodeName) || !pre.hasAttribute('data-url') || !pre.hasAttribute('download-label')) {
      return;
    }
    var src = pre.getAttribute('data-url');
    var a = document.createElement('a');
    a.textContent = pre.getAttribute('download-label') || 'Download';
    a.setAttribute('download', '');
    a.href = src;
    return a;
  });

}());
