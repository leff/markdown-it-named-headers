# Markdown-it Named Headers

A plugin for [markdown-it](https://github.com/markdown-it/markdown-it). Makes header elments have name attributes.

```
# Example Header   -->   <h1 name="example-header">Example</h1>
```

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
   slugify: my_slug_function
}
```

We use [string.js](http://stringjs.com/)'s [slugify](http://stringjs.com/#methods/slugify) method to translate the header text into a name.