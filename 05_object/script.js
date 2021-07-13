/**
 * Create a Backpack object.
 * property separate by comma
 * property name is CamelCase
 *
 */

const backpack = {
  name: 'Everyday Backpack',
  volume: 30,
  color: 'grey',
  pocketNum: 15,
  strapLength: {
    left: 26,
    right: 26,
  },
  lidOpen: false,
  // contain function expression
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft
    this.strapLength.right = lengthRight
  },
}

console.log('The backpack object : ', backpack)
//dot notation
console.log('The pocket Num : ', backpack.pocketNum)
// bracket notation
console.log('The pocket Num by bracket: ', backpack['pocketNum'])
var query = 'pocketNum'
console.log('The pocket Num value by variable: ', backpack[query])

console.log('Left before: ', backpack.strapLength.left)

backpack.newStrapLength(10, 15)

console.log('Left before: ', backpack.strapLength.left)
