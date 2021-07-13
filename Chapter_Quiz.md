### 1. What does it mean when we say JavaScript is an "object-oriented" language?
* JavaScript is modeled around objects with properties and methods which can be handled in a modular fashion.

### 2. What happens to the website and the code when you write code in the browser console?
* Code in the browser console impacts the current browser instance only. It exists in the console for as long as the window is open.

## 3. What is an indicator of someone being a good JavaScript developer?
* They follow standards, invest in learning, use formatting and linting tools for consistency, and write accessible code.

### 4. What is the natural environment for JavaScript?
* The browser, server environments, and your computer.

### 5. What is ECMAScript?
* The specification describing how browsers should implement and interpret JavaScript.

### 6. Where should you develop and test your JavaScript code?
* Develop in a code editor, test in as many browsers as you can get your hands on.

### 7. Why have command line and automation tools become popular in JavaScript development?
* They simplify complex processes and introduce features to help developers write better code.

### 8. When does the browser execute JavaScript?
* By default: When the script is encountered. If the script is set to "async", when the script is fully loaded. If the script is set to "defer", when the entire HTML page is rendered.

### 9. What is the correct markup for adding an external JavaScript file to an HTML document?
* <script src="javascript.js" async></script>
* Feedback: While `<script src="javascript.js"></script>` is technically correct, it is recommended to always async or defer your script unless you have a specific reason for the script to cause render blocking.

### 10. What happens when you defer JavaScript?
* The browser loads the JavaScript asynchronously when it is encountered, then waits until all HTML is rendered before executing the script.

### 11. JavaScript modules are heavily used in frameworks like React and Vue. What is the advantage of using modules?
* Modules enable modularization of code where individual functions, components, data objects, and other parts can be separated into individual files.