/** Challenge Objectives
 * Create new object type named "book"
 * Use Class, object constructor function, or individual objects
 * Add properties and methods
 * Add at least five book objects
 */

class Book {
  constructor(title, author, ISBN, price, rating, publisher, published_date) {
    this.title = title
    this.author = author
    this.ISBN = ISBN
    this.price = price
    this.rating = rating
    this.publisher = publisher
    this.published_date = published_date
  }
  toggleRating(ratingStar) {
    this.rating = ratingStar
  }

  bookAge() {
    let now = new Date()
    let acquired = new Date(this.published_date)
    let elapsed = now - acquired // elapsed time in milliseconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 * 24))
    return daysSinceAcquired
  }
}

export default Book
