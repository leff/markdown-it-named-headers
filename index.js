(function(){

var string = require('string'),
    Token = require('markdown-it/lib/token');

var default_slugify = function(s) {
  return string(s).slugify().toString();
};

var namedheaders = function(md, opts) {
  var slugify = (opts.slugify) ? opts.slugify : default_slugify;

  var originalHeadingOpen = md.renderer.rules.heading_open;

  md.renderer.rules.heading_open = function (tokens, idx, something, somethingelse, self) {

    tokens[idx].attrs = tokens[idx].attrs || [];

    var title = tokens[idx + 1].children.reduce(function (acc, t) {
        return acc + t.content;
      }, '');

    var slug = slugify(title);
    tokens[idx].attrs.push(['name', slug]);

    if (originalHeadingOpen) {
      return originalHeadingOpen.apply(this, arguments);
    } else {
      return self.renderToken.apply(self, arguments);
    }
  };
};

namedheaders.defaults = {
  slugify: slugify
};

module.exports = namedheaders;

})();