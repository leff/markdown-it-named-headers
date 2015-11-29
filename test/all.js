var assert = require('assert'),
    MarkdownIt = require('markdown-it'),
    md_nh = require('../');


describe('MarkdownIt', function() {
  describe('#named-headers', function() {
    var md = MarkdownIt().use(md_nh);

    describe('#render()', function(){
      it('one word headers should have names', function(){
        assert.equal( md.render('# test'), '<h1 id="test">test</h1>\n');
      });

      it('case should be normalized', function(){
        assert.equal( md.render('# Test'), '<h1 id="test">Test</h1>\n');
      });

      it('spaces should be dashes', function(){
        assert.equal( md.render('# test string'), '<h1 id="test-string">test string</h1>\n');
      });

      it('header levels 1 to 6 should be supported', function(){
        assert.equal( md.render('# test'), '<h1 id="test">test</h1>\n');
        assert.equal( md.render('## test'), '<h2 id="test">test</h2>\n');
        assert.equal( md.render('### test'), '<h3 id="test">test</h3>\n');
        assert.equal( md.render('#### test'), '<h4 id="test">test</h4>\n');
        assert.equal( md.render('##### test'), '<h5 id="test">test</h5>\n');
        assert.equal( md.render('###### test'), '<h6 id="test">test</h6>\n');
      });

      it('identical headers should have unique ids', function(){
        assert.equal( md.render('# test\n# test'), '<h1 id="test">test</h1>\n<h1 id="test">test</h1>\n');
        assert.equal( md.render('# test\n## test'), '<h1 id="test">test</h1>\n<h2 id="test">test</h2>\n');
      });
    });

  });
});
