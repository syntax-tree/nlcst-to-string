import test from 'tape'
import {u} from 'unist-builder'
import {toString} from './index.js'

test('toString()', (t) => {
  t.throws(
    () => {
      // @ts-expect-error: runtime.
      toString()
    },
    /undefined/,
    'should throw when not given a node (#1)'
  )

  t.throws(
    () => {
      // @ts-expect-error: missing `type`.
      toString({value: 'foo'})
    },
    /\[object Object]/,
    'should throw when not given a node (#2)'
  )

  t.equal(toString(u('TextNode', 'AT')), 'AT', 'should support texts')

  t.equal(
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

  t.equal(
    toString([u('TextNode', 'AT'), u('SymbolNode', '&'), u('TextNode', 'T')]),
    'AT&T',
    'should support nodes'
  )

  t.equal(
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

  t.equal(
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
  t.equal(toString(u('VoidNode')), '', 'should support voids')

  t.end()
})
