# Markdown-it Named Headers

A plugin for markdown-it. Makes header elments have name attributes.

```
# Example Header   -->   <h1 name="example-header">Example</h1>
```

Cribbed heavily from https://github.com/valeriangalliat/markdown-it-anchor



## Usage

```js
var md   = require('markdown-it'),
    mdnh = require('markdown-it-named-headers');

md.use(mdnh, options);
```

### Options

```js
{
   slugify: my_slug_function
}
```

We use [string.js](http://stringjs.com/)'s [slugify](http://stringjs.com/#methods/slugify) method to translate the header text into a name.
