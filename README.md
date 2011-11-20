# node-introspect ![project status](http://dl.dropbox.com/u/2208502/maintained.png)

A fast and powerful Function introspection. This is such a kind of experiment, any thought on this is welcomed.

## Engine

- nodejs v0.4.12+ (tested with v0.6.x)

## Installation with npm

    $ npm install introspect

## Syntax

```javascript
introspect(fn);
```

##Parameters

1. `fn` _(Function)_: a function to be introspected

##Notes

Introspect returns an array of all the function parameters names

##Example

```javascript
var introspect = require('introspect');

function fn (foo, bar, callback) {
  // function body
}

var arguments = introspect(fn);
console.log(arguments);
```

## Benchmark

Benchmark results are pretty good.

    npm run-script benchmark

![profile](http://f.cl.ly/items/2L2G183k1Z071C3a3E3x/introspect_v0.0.1.png)

## Test

Tests depends on http://vowsjs.org/ then

    npm install -g vows
    npm install
    npm test

![tests](http://f.cl.ly/items/2G2V0M3A1C423q1v1E3V/introspect_v0.0.1.png)

## License

_This software is released under the MIT license cited below_.

    Copyright (c) 2010 Kilian Ciuffolo, me@nailik.org. All Rights Reserved.

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the 'Software'), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:
    
    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.