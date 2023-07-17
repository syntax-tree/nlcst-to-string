import assert from 'node:assert/strict'
import test from 'node:test'
import {u} from 'unist-builder'
import {toString} from './index.js'

test('toString', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('./index.js')).sort(), [
      'toString'
    ])
  })

  await t.test('should throw when not given a node (#1)', async function () {
    assert.throws(function () {
      // @ts-expect-error: check how the runtime handles no node.
      toString()
    })
  })

  await t.test('should throw when not given a node (#2)', async function () {
    assert.throws(function () {
      // @ts-expect-error: check how the runtime handles no `type`.
      toString({value: 'foo'})
    })
  })

  await t.test('should support texts', async function () {
    assert.equal(toString(u('TextNode', 'AT')), 'AT')
  })

  await t.test('should support parents', async function () {
    assert.equal(
      toString(
        u('WordNode', [
          u('TextNode', 'AT'),
          u('SymbolNode', '&'),
          u('TextNode', 'T')
        ])
      ),
      'AT&T'
    )
  })

  await t.test('should support nodes', async function () {
    assert.equal(
      toString([u('TextNode', 'AT'), u('SymbolNode', '&'), u('TextNode', 'T')]),
      'AT&T'
    )
  })

  await t.test('should support parents with mixed children', async function () {
    assert.equal(
      toString(
        u('WordNode', [
          u('TextNode', 'AT'),
          u('SymbolNode', '&'),
          u('TextNode', 'T')
        ])
      ),
      'AT&T'
    )
  })

  await t.test('should support separators', async function () {
    assert.equal(
      toString(
        u('WordNode', [
          u('TextNode', 'AT'),
          u('SymbolNode', '&'),
          u('TextNode', 'T')
        ]),
        ','
      ),
      'AT,&,T'
    )
  })

  await t.test('should support voids', async function () {
    assert.equal(
      toString(
        // @ts-expect-error: check how the runtime handles custom nodes.

        u('VoidNode')
      ),
      ''
    )
  })
})
