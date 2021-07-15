### 1. What does it mean when we say JavaScript is an "object-oriented" language?

- JavaScript is modeled around objects with properties and methods which can be handled in a modular fashion.

### 2. What happens to the website and the code when you write code in the browser console?

- Code in the browser console impacts the current browser instance only. It exists in the console for as long as the window is open.

## 3. What is an indicator of someone being a good JavaScript developer?

- They follow standards, invest in learning, use formatting and linting tools for consistency, and write accessible code.

### 4. What is the natural environment for JavaScript?

- The browser, server environments, and your computer.

### 5. What is ECMAScript?

- The specification describing how browsers should implement and interpret JavaScript.

### 6. Where should you develop and test your JavaScript code?

- Develop in a code editor, test in as many browsers as you can get your hands on.

### 7. Why have command line and automation tools become popular in JavaScript development?

- They simplify complex processes and introduce features to help developers write better code.

### 8. When does the browser execute JavaScript?

- By default: When the script is encountered. If the script is set to "async", when the script is fully loaded. If the script is set to "defer", when the entire HTML page is rendered.

### 9. What is the correct markup for adding an external JavaScript file to an HTML document?

- <script src="javascript.js" async></script>
- Feedback: While `<script src="javascript.js"></script>` is technically correct, it is recommended to always async or defer your script unless you have a specific reason for the script to cause render blocking.

### 10. What happens when you defer JavaScript?

- The browser loads the JavaScript asynchronously when it is encountered, then waits until all HTML is rendered before executing the script.

### 11. JavaScript modules are heavily used in frameworks like React and Vue. What is the advantage of using modules?

- Modules enable modularization of code where individual functions, components, data objects, and other parts can be separated into individual files.

### 12. Given the code below, how do you access the property named in let propName?

    let propName = "color";
    const myObject = { ID = 3, color = "pink", propLength = 4, use = false };

- Using bracket notation: myObject[propName]

### 13. In the following object, what is the code in the second line called?

    const myObject = { color: "pink"};

- An object property with a property name and a property value.

### 14. Why is the best-practice to place objects inside constants?

- So the object isn't accidentally altered or overwritten.

### 15. Which of the below object property names are not valid?

    const myObject = {
        propName = "property",         // line 1
        prop-name = "hyphenated",      // line 2
        3rdProp = "numbered",          // line 3
        $prop = "dollar",              // line 4
        %prop = "percentage",          // line 5
        prop name = "space"            // line 6
    };

- Lines 2, 3, 5, and 6

### 16. How do you access an object in JavaScript?

- Call the object by naming its container.

### 17. Can an object created from a class be given the same name as the class?

- No: If the class is a constant, this will cause an error. If the class is not a constant, the new object will overwrite the class.

### 18. How do you define an object in JavaScript?

- Create a variable, give it a name, and assign it an object using curly brackets:
  const myObject = { // Properties and methods go here. };

### 19. What does the this keyword refer to in a class?

- this refers to the current object created from the class.

### 20. Where do you go to find official documentation and code examples for standard built in (global) objects?

- The MDN Web Docs for standard built-in objects

### 21. How do you create a new object from a class?

- Using the new keyword, naming the class, and passing the properties as parameters.

### 22. What is one advantage to using a class over an object constructor method?

- Classes can be extended.

### 23. What is the established convention for formatting objects?

- All properties and methods are listed on their own separate line.

### 24. What is the difference between a function and a method?

- A function is a stand-alone function. A method is a function within an object.

### 25. Can you use arrow functions to create object methods?

- No, object methods must be declared using function expressions or the method definition shorthand.

### 26. When creating a class, the prototype methods are added inside the constructor method.

- False

### 27. How do you declare a JavaScript expression inside a template literal?

- Using a dollar symbol followed by curly brackets:
  const myString = `Some text and an ${expression}.`;

### 28. What does the following code output in the console?

    let number = 5;
    let subtracted = 5-1;
    console.log("The number before" + number + "is" + subtracted + ".");

- The number before5is4.
