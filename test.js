'use strict';

var test = require('tape');
var u = require('unist-builder');
var toString = require('.');

test('toString()', function (t) {
  t.throws(
    function () {
      toString();
    },
    /undefined/,
    'should throw when not given a node (#1)'
  );

  t.throws(
    function () {
      toString({value: 'foo'});
    },
    /\[object Object]/,
    'should throw when not given a node (#2)'
  );

  t.equal(
    toString(u('foo', 'AT')),
    'AT',
    'should support texts'
  );

  t.equal(
    toString(u('foo', [
      u('bar', 'AT'),
      u('bar', '&'),
      u('bar', 'T')
    ])),
    'AT&T',
    'should support parents'
  );

  t.equal(
    toString([
      u('bar', 'AT'),
      u('bar', '&'),
      u('bar', 'T')
    ]),
    'AT&T',
    'should support nodes'
  );

  t.equal(
    toString(u('foo', [
      u('bar', 'AT'),
      u('foo', [u('bar', '&')]),
      u('bar', 'T')
    ])),
    'AT&T',
    'should support parents with mixed children'
  );

  t.equal(
    toString(u('foo', [
      u('bar', 'AT'),
      u('foo', [u('bar', '&')]),
      u('bar', 'T')
    ]), ','),
    'AT,&,T',
    'should support separators'
  );

  t.end();
});
