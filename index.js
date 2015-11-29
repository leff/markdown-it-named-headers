(function(){

var string = require('string');

var default_slugify = function(s, used_headers) {
  var slug = string(s).slugify().toString();
  if( used_headers[slug] ) {
    used_headers[slug]++;
    slug += used_headers[slug];
  } else {
    used_headers[slug] += '-' + 1;
  }
  return slug;
};

var namedheaders = function(md, opts) {
  var slugify = (opts && opts.slugify) ? opts.slugify : default_slugify;
  var originalHeadingOpen = md.renderer.rules.heading_open;

  md.renderer.rules.heading_open = function (tokens, idx, something, somethingelse, self) {
    var used_headers = {};

    tokens[idx].attrs = tokens[idx].attrs || [];

    var title = tokens[idx + 1].children.reduce(function (acc, t) {
        return acc + t.content;
      }, '');

    var slug = slugify(title, used_headers);
    tokens[idx].attrs.push(['id', slug]);

    if (originalHeadingOpen) {
      return originalHeadingOpen.apply(this, arguments);
    } else {
      return self.renderToken.apply(self, arguments);
    }
  };
};

module.exports = namedheaders;

})();
