🔍 What Is an Execution Context?
When you run any JavaScript code, it is evaluated in a wrapper environment. That environment is called the execution context.
There are three types of execution contexts:

Global Execution Context (GEC)

Function Execution Context (FEC)

Eval Execution Context (less common; created inside eval())

1. 🌐 Global Execution Context (GEC)
Created when your JS script starts.

It's the default context.

It creates a global object:

window in browsers.

global in Node.js.

this keyword refers to the global object.


console.log(this); // In browser: window object
2. 🔁 Function Execution Context (FEC)
Created every time a function is invoked.

Each function has its own execution context.

New variables, this, arguments are created.


function greet(name) {
    let greeting = "Hello " + name;
    console.log(greeting);
}

greet("Shweta"); // Creates new FEC

⚙️ Execution Context: How It Works Internally
Every execution context has two phases:

✅ 1. Creation Phase:
Memory is allocated.

Variables are hoisted (set to undefined).

Functions are stored (with code reference).

this is determined.


console.log(x); // undefined (hoisted)
var x = 5;


🏃‍♀️ 2. Execution Phase:
Code is executed line-by-line.

Variables get assigned actual values.


| Type                       | Created When       | Contains                            |
| -------------------------- | ------------------ | ----------------------------------- |
| Global Execution Context   | JS file runs       | Global variables, functions, `this` |
| Function Execution Context | Function is called | Local variables, arguments, `this`  |
| Eval Execution Context     | `eval()` is used   | Code in `eval()`                    |



