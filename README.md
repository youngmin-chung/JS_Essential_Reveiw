## GOAL

### Apply Practical Skills

* Modern JavaScript and JavaScript tooling
* JSX and TypeScript
* Frameworks

### Navigate JavaScript

* JS is evolving now
* JavaScript - It's core language. Learn JavaScript first, then expand and specialize your knowledge.
* ECMAScript - European Computer Manufacturers Association Script. Not lang itself. The browser specification of JS lang
* ES6, ES2015, ES2017, ES2020, Etc. - Using ECMAScript usually means also using Babel.js to make it work in current browser implementations.
* TypeScript - Variation, dialect, or flavour of JS introducing features like strong typing
* React, Vue, Angular - JS frameworks allowing us to write JS-based front-end applications. Introduce new coding conventions like JSX and reliance on tools like Babel, WebPack, and Node.js
* npm, WebPack, Gulp - Build tools and infrastructure to automate the process of optimizing human-readable JS for the best browser performance
* Node.js - JS server runtime used to run JS everywhere; used to run npm, WebPack, Babel, and more on your computer

### Tools for Working with JavaScript

* Modern browser - for testing
* Code editor - VS Code is enough
* Live server environment - extension to VS Code such as "Live Server"

### Learning JavaScript

* Learning JavaScript requires not just understanding the basic premises and shapes and formulas of the code. To really learn this language, you need to find ways of making it make sense to you.

### Browser Loading
* Default - Browser stops rendering when JS is encountered. JS is executed before rendering continues. Often referred to as content blocking.

    HTML Parsing [HTML]        [HTML]
    JS download        [DW]
    JS execution           [EX]

* Async - Browser downloads JS in parallel while HTML renders. When JS is fully loaded, rendering stops while JS is executed.
    HTML Parsing [HTML]   [HTML]
    JS download    [DW]
    JS execution      [EX]
    
* Defer - Browser downloads JS in parallel while HTML renders, then defers execution of JS until HTML rendering is complete
    HTML Parsing [HTML]-[HTML]
    JS download    [DW]
    JS execution             [EX]

### JavaScript Object
* const backpack; // Variable holds data
* const backpack = {}; // Curly brace defines data as an Object
* this keyword refers to the current object
* Object container
* Objects are typically constants - We can change the properties of the object inside the container. We can't remove or replace the object from the container.
* Reminders
    * Pass value to a function inside the parenthesis
    * Refer to the current object as "this"
    * Assign any value to any property.# JS_Ess_Review
