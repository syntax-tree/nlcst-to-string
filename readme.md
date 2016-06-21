# nlcst-to-string [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

<!--lint disable heading-increment list-item-spacing-->

Stringify [NLCST][].

## Installation

[npm][npm-install]:

```bash
npm install nlcst-to-string
```

## Usage

Dependencies:

```javascript
var toString = require('nlcst-to-string');
```

Stringify:

```javascript
var node = {
    type: 'WordNode',
    children: [
        { type: 'TextNode', value: 'AT' },
        { type: 'PunctuationNode', value: '&' },
        { type: 'TextNode', value: 'T' }
    ]
};
var value = toString(node);
```

Yields:

```text
AT&T
```

## API

### `toString(node[, separator])`

Stringify the given [NLCST][] node (or list of nodes).

###### Parameters

*   `node` ([`NLCSTNode`][nlcst] or `Array.<NLCSTNode>`).
*   `separator` (`string`, optional, default: `''`)
    — Value to separate each item with.

###### Returns

`string`.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/nlcst-to-string.svg

[travis]: https://travis-ci.org/wooorm/nlcst-to-string

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/nlcst-to-string.svg

[codecov]: https://codecov.io/github/wooorm/nlcst-to-string

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[nlcst]: https://github.com/wooorm/nlcst
