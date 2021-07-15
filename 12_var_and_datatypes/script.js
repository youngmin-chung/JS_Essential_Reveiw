/**
 * Arithmetic operators
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators
 */

let a = 5
let b = 4
let c = 3.2

console.log(`let a: ${a} (${typeof a})`)
console.log(`let b: ${b} (${typeof b})`)

if (a == b) {
  console.log(`Match! let a and let b are the same value.`)
} else {
  console.error(`No match: let a and let b are NOT same value.`)
}

console.log(`let a: ${a} (${typeof a})`)
console.log(`let b: ${b} (${typeof b})`)
console.log(`let c: ${c} (${typeof c})`)

let result = a + b

console.log('Result: ', result)

// String:
let stringDemo = 'A string of text.'
console.log('String:', stringDemo)

// Numbes:
let integerDemo = 4
console.log('Integer:', integerDemo)

let floatDemo = 5.6
console.log('Floating point number:', floatDemo)

// Boolean:
let booleanDemo = true
console.log('Boolean value:', booleanDemo)

// Null value (nothing):
let nullDemo = null
console.log('Null value:', nullDemo)

// Undefined:
let undefinedDemo
console.log('Undefined:', undefinedDemo)

let undefinedAssignedDemo = undefined
console.log('Undefined assigned:', undefinedAssignedDemo)

// Object:
const objectDemo = {
  dance: 'Mambo',
  number: 5,
}
console.log('Object:', objectDemo)

// Array:
const arrayDemo = ['tango', 'foxtrot', 'waltz', 'rumba', 'bolero']
console.log('Array:', arrayDemo)
