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
      toString({value: 'foo'})
    },
    /\[object Object]/,
    'should throw when not given a node (#2)'
  )

  t.equal(toString(u('foo', 'AT')), 'AT', 'should support texts')

  t.equal(
    toString(u('foo', [u('bar', 'AT'), u('bar', '&'), u('bar', 'T')])),
    'AT&T',
    'should support parents'
  )

  t.equal(
    toString([u('bar', 'AT'), u('bar', '&'), u('bar', 'T')]),
    'AT&T',
    'should support nodes'
  )

  t.equal(
    toString(
      u('foo', [u('bar', 'AT'), u('foo', [u('bar', '&')]), u('bar', 'T')])
    ),
    'AT&T',
    'should support parents with mixed children'
  )

  t.equal(
    toString(
      u('foo', [u('bar', 'AT'), u('foo', [u('bar', '&')]), u('bar', 'T')]),
      ','
    ),
    'AT,&,T',
    'should support separators'
  )

  t.equal(toString(u('foo')), '', 'should support voids')

  t.end()
})
