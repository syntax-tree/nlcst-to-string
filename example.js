// Dependencies:
var toString = require('./index.js');

// Stringify:
var node = {
    type: 'WordNode',
    children: [
        { type: 'TextNode', value: 'AT' },
        { type: 'PunctuationNode', value: '&' },
        { type: 'TextNode', value: 'T' }
    ]
};
var value = toString(node);

// Yields:
console.log('text', value);
