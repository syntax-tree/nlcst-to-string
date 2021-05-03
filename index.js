/**
 * @typedef {import('unist').Node} Node
 */

/**
 * Stringify one nlcst node or list of nodes.
 *
 * @param {unknown} node
 * @param {string} [separator='']
 * @returns {string}
 */
export function toString(node, separator = '') {
  var index = -1
  /** @type {Array.<Node>} */
  var children
  /** @type {Array.<string>} */
  var values

  // @ts-ignore Looks like an object.
  if (!node || (!Array.isArray(node) && !node.type)) {
    throw new Error('Expected node, not `' + node + '`')
  }

  // @ts-ignore Looks like a literal.
  if (typeof node.value === 'string') return node.value

  // @ts-ignore Looks like a list of nodes or parent.
  children = ('length' in node ? node : node.children) || []

  // Shortcut: This is pretty common, and a small performance win.
  if (children.length === 1 && 'value' in children[0]) {
    // @ts-ignore Looks like a literal.
    return children[0].value
  }

  values = []

  while (++index < children.length) {
    values[index] = toString(children[index], separator)
  }

  return values.join(separator)
}
