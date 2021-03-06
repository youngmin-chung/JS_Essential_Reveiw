## GOAL

### Apply Practical Skills

- Modern JavaScript and JavaScript tooling
- JSX and TypeScript
- Frameworks

### Navigate JavaScript

- JS is evolving now
- JavaScript - It's core language. Learn JavaScript first, then expand and specialize your knowledge.
- ECMAScript - European Computer Manufacturers Association Script. Not lang itself. The browser specification of JS lang
- ES6, ES2015, ES2017, ES2020, Etc. - Using ECMAScript usually means also using Babel.js to make it work in current browser implementations.
- TypeScript - Variation, dialect, or flavour of JS introducing features like strong typing
- React, Vue, Angular - JS frameworks allowing us to write JS-based front-end applications. Introduce new coding conventions like JSX and reliance on tools like Babel, WebPack, and Node.js
- npm, WebPack, Gulp - Build tools and infrastructure to automate the process of optimizing human-readable JS for the best browser performance
- Node.js - JS server runtime used to run JS everywhere; used to run npm, WebPack, Babel, and more on your computer

### Tools for Working with JavaScript

- Modern browser - for testing
- Code editor - VS Code is enough
- Live server environment - extension to VS Code such as "Live Server"

### Learning JavaScript

- Learning JavaScript requires not just understanding the basic premises and shapes and formulas of the code. To really learn this language, you need to find ways of making it make sense to you.

### Browser Loading

- Default - Browser stops rendering when JS is encountered. JS is executed before rendering continues. Often referred to as content blocking.

  HTML Parsing [HTML] [HTML]
  JS download [DW]
  JS execution [EX]

- Async - Browser downloads JS in parallel while HTML renders. When JS is fully loaded, rendering stops while JS is executed.
  HTML Parsing [HTML] [HTML]
  JS download [DW]
  JS execution [EX]
- Defer - Browser downloads JS in parallel while HTML renders, then defers execution of JS until HTML rendering is complete
  HTML Parsing [HTML]-[HTML]
  JS download [DW]
  JS execution [EX]

### JavaScript Object

- const backpack; // Variable holds data
- const backpack = {}; // Curly brace defines data as an Object
- this keyword refers to the current object
- Object container
- Objects are typically constants - We can change the properties of the object inside the container. We can't remove or replace the object from the container.
- Reminders
  - Pass value to a function inside the parenthesis
  - Refer to the current object as "this"
  - Assign any value to any property.

### DOM

- When you present a web browser with an HTML document, it creates an object model for the document, a document object model, or DOM for short. And this DOM describes the hierarchical tree structure for that document, how the different elements in the document
  relate to each other and are nested. This right here, being able to traverse the document object model tree to find the element or elements you're looking for, is an essential skill when working with JavaScript.

### Variable

- A container with some piece of data
- The var statement declares a "function-scoped" or "globally-scoped variable", optionally initializing it to a value. The var is only really useful if you want a mutable variable with global scope all the time, but that situation is quite rare and is a special case. So the default is, when you want a changeable or mutable variable use a let.
- The let statement declares a block-scoped local variable, optionally initializing it to a value.
- Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can't be changed through reassignment, and it can't be redeclared.
- == checks whether its two operands are equal, returning a Boolean result.
- === checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

### Array

- .join() - The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.
- .push() - The push() method adds one or more elements to the end of an array and returns the new length of the array.
- .unshift() - The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
- .shift() - The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
- .pop() - The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
- .forEach() - The forEach() method executes a provided function once for each array element.
- .find() - The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

### Function and Methods

- Standard function - The function keyword can be used to define a function inside an expression and also can define functions using the Function constructor and a function declaration.
- Arrow function - An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.
- Arrow function with this
- Function with parameters
- Callbacks
- Conditional statement
- Loop
- Map()

### Events

- Event handling is a key of JavaScript. Events are fired to notify code of "interesting changes" that may affect code execution. These can arise from user interactions such as using a mouse or resizing a window, changes in the state of the underlying environment (e.g. low battery or media events from the operating system), and other causes.
