import assert from 'node:assert/strict'
import test from 'node:test'
import {u} from 'unist-builder'
import {toString} from './index.js'
import * as mod from './index.js'

test('toString', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['toString'],
    'should expose the public api'
  )

  assert.throws(
    () => {
      // @ts-expect-error: runtime.
      toString()
    },
    /undefined/,
    'should throw when not given a node (#1)'
  )

  assert.throws(
    () => {
      // @ts-expect-error: missing `type`.
      toString({value: 'foo'})
    },
    /\[object Object]/,
    'should throw when not given a node (#2)'
  )

  assert.equal(toString(u('TextNode', 'AT')), 'AT', 'should support texts')

  assert.equal(
    toString(
      u('WordNode', [
        u('TextNode', 'AT'),
        u('SymbolNode', '&'),
        u('TextNode', 'T')
      ])
    ),
    'AT&T',
    'should support parents'
  )

  assert.equal(
    toString([u('TextNode', 'AT'), u('SymbolNode', '&'), u('TextNode', 'T')]),
    'AT&T',
    'should support nodes'
  )

  assert.equal(
    toString(
      // @ts-expect-error: custom.
      u('WordNode', [
        u('TextNode', 'AT'),
        u('SomeNode', [u('TextNode', '&')]),
        u('TextNode', 'T')
      ])
    ),
    'AT&T',
    'should support parents with mixed children'
  )

  assert.equal(
    toString(
      // @ts-expect-error: custom.
      u('WordNode', [
        u('TextNode', 'AT'),
        u('WordNode', [u('TextNode', '&')]),
        u('TextNode', 'T')
      ]),
      ','
    ),
    'AT,&,T',
    'should support separators'
  )

  // @ts-expect-error: custom node.
  assert.equal(toString(u('VoidNode')), '', 'should support voids')
})
