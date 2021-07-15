/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Backpack from './Backpack.js'

const everydayPack = new Backpack(
  'Everyday Backpack',
  30,
  'grey',
  15,
  26,
  26,
  false,
  'July 15, 2021 15:00:00 EST'
)

console.log('The everydayPack object:', everydayPack)
console.log('Date acquired:', everydayPack.dateAcquired)
console.log('Days since acquired:', everydayPack.backpackAge())