/**
 * Use the global Date() object to transform dates.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 */

import Book from './book.js'

const Book1 = new Book(
  "Harry Potter - Sorcerers' stone",
  'Joan K. Rolling',
  9780590353427,
  19.99,
  5,
  'Scholastic',
  'December 25, 1998 09:00:00 GMT'
)

console.log(Book1)
