# Markdown-it Named Headers

A plugin for [markdown-it](https://github.com/markdown-it/markdown-it). Makes header elments have name attributes.

```
# Example Header   -->   <h1 name="example-header">Example</h1>
```

By default, it uses [string.js](http://stringjs.com/)'s [slugify](http://stringjs.com/#methods/slugify) to translate header text into a url safe name. You can override this. See _Options_.

Cribbed heavily from https://github.com/valeriangalliat/markdown-it-anchor


## Usage

Use with plain old node:
```js
var md   = require('markdown-it'),
    mdnh = require('markdown-it-named-headers');

md.use(mdnh, options);
```

Use as part of a Gulp workflow:
```js
var gulp = require('gulp'),
    md = require('gulp-markdown-it');
gulp.task('md', [], function() {
    return gulp.src( '**/*.md' )
        .pipe(md({
            plugins: ['markdown-it-named-headers']
        }))
        .pipe(gulp.dest('dist'));
});
```


### Options

```js
{
   slugify: my_slug_function // default string.js's slugify()
}
```