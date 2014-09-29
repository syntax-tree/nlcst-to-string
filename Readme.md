# nlcst-to-string [![Build Status](https://img.shields.io/travis/wooorm/nlcst-to-string.svg)](https://travis-ci.org/wooorm/nlcst-to-string) [![Coverage Status](https://img.shields.io/coveralls/wooorm/nlcst-to-string.svg)](https://coveralls.io/r/wooorm/nlcst-to-string?branch=master)

Transform a Natural Language Syntax Tree (NCLST) node into a string

## Installation

npm:
```sh
$ npm install nlcst-to-string
```

Component.js:
```sh
$ component install wooorm/nlcst-to-string
```

Bower:
```sh
$ bower install nlcst-to-string
```

## Usage

````js
var nlcstToString = require('nlcst-to-string');

nlcstToString({
  "type": "WordNode",
  "data": {
    "partOfSpeech": [
      "NNP",
      "NN"
    ]
  },
  "children": [
    {
      "type": "TextNode",
      "value": "AT"
    },
    {
      "type": "PunctuationNode",
      "children": [
        {
          "type": "TextNode",
          "value": "&"
        }
      ]
    },
    {
      "type": "TextNode",
      "value": "T"
    }
  ]
});
/*
 * "AT&T"
 */
````

## Related

- [parse-latin](https://github.com/wooorm/parse-latin)
- [parse-dutch](https://github.com/wooorm/parse-dutch)
- [parse-english](https://github.com/wooorm/parse-english)
- [retext](https://github.com/wooorm/retext)
- [textom](https://github.com/wooorm/textom)

## License

MIT © Titus Wormer
