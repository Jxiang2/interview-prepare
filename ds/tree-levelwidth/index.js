// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, '->']
  const widths = [0]

  while (arr.length > 1) {
    const node = arr.shift()
    if (node === '->') {
      console.log('ready to process next level')
      arr.push('->')
      widths.push(0)
    } else {
      widths[widths.length - 1]++
      arr.push(...node.children)
    }
  }

  return widths
}

module.exports = levelWidth
