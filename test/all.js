var assert = require('assert'),
    MarkdownIt = require('markdown-it'),
    md_nh = require('../');


describe('MarkdownIt', function() {
  describe('#named-headers', function() {
    var md = MarkdownIt().use(md_nh);

    describe('#render()', function(){
      it('one word headers should have names', function(){
        assert.equal( md.render('# test'), '<h1 name="test">test</h1>\n');
      });

      it('case should be normalized', function(){
        assert.equal( md.render('# Test'), '<h1 name="test">Test</h1>\n');
      });

      it('spaces should be dashes', function(){
        assert.equal( md.render('# test string'), '<h1 name="test-string">test string</h1>\n');
      });

      it('header levels 1 to 6 should be supported', function(){
        assert.equal( md.render('# test'), '<h1 name="test">test</h1>\n');
        assert.equal( md.render('## test'), '<h2 name="test">test</h2>\n');
        assert.equal( md.render('### test'), '<h3 name="test">test</h3>\n');
        assert.equal( md.render('#### test'), '<h4 name="test">test</h4>\n');
        assert.equal( md.render('##### test'), '<h5 name="test">test</h5>\n');
        assert.equal( md.render('###### test'), '<h6 name="test">test</h6>\n');
      });
    });

  });
});
