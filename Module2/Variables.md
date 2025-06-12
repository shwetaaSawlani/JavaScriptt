Named Based Memory Location or a container. It is named used for memory location or address. we couldn't remember memory address,   that's why we use variables
it is a container to hold datatypes.


What is var, let and const in JavaScript?
var: Declares variables with function or global scope and allows re-declaration and updates within the same scope.
let: Declares variables with block scope, allowing updates but not re-declaration within the same block.
const: Declares block-scoped variables that cannot be reassigned after their initial assignment. 


Block Scope with let
Introduced in ES6, let provides block-level scoping. This means the variable is only accessible within the block (like loops or conditionals) where it is declared.

Block Scope: The variable age is declared with let inside the if block, so it is only accessible within that block and cannot be accessed outside of it.
Reference Error: The second console.log(age) will throw a Reference Error because age is not defined in the outer scope.

Immutability with const
const is used to declare variables that should not be reassigned after their initial assignment. This keyword is also block-scoped like let.

Const : Block Scope, Neither Re-assignable nor Re-declarabele


When to Use let:
Use let when you know a variable's value might need to change later in your code. It's the preferred choice for variables that are mutable and require block-level scoping. 






Hoisting: let variables are also hoisted, but they are not initialized. They enter a "Temporal Dead Zone" (TDZ) from the start of their block until their declaration. Attempting to access a let variable before its declaration will result in a ReferenceError.

Similar to let, const variables are hoisted but are in a Temporal Dead Zone (TDZ). You cannot access them before their declaration.

When to Use const:

Use const by default for variables that are not expected to change throughout their lifetime. This clearly communicates your intent and helps prevent accidental modifications, leading to more robust code. If you later find that a variable declared with const needs to be re-assigned, you can easily change it to let.


Important Note on Objects/Arrays with const:
 While const prevents re-assignment of the variable itself, it does not make the value immutable if that value is an object or an array. You can still modify the properties of an object or the elements of an array declared with const*/


Hoisting refers to the behaviour where JavaScript moves the declarations of variables, functions, and classes to the top of their scope during the compilation phase. This can sometimes lead to surprising results, especially when using var, let, const, or function expressions.
Hoisting applies to variable and function declarations.
Initializations are not hoisted, they are only declarations.

'var' variables are hoisted with undefined, while 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.
Before going to learn more about Hoisting it's important first to understand the Temporal Dead Zone

Temporal Dead Zone (TDZ)
The Temporal Dead Zone (TDZ) is a critical concept in JavaScript hoisting. It refers to the period between the entering of a scope (such as a function or block) and the actual initialization of a variable declared with let or const. During this time, any reference to the variable before its initialization will throw a ReferenceError.

How does the TDZ Work?

Variables declared with let and const are hoisted to the top of their scope, but they are not initialized until their declaration line is reached.
Any attempt to access these variables before their declaration will result in an error.
The TDZ exists only for variables declared using let and const. Variables declared with var do not have this issue, as they are hoisted and initialized to undefined.

console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;

Function Declaration Hoisting
Function declarations are hoisted with both their name and the function body. This means the function can be called before its definition in the code.




greet(); // "Hello, world!"
function greet() {
    console.log("Hello, world!");
}
greet(); // "Hello, world!"
function greet() {
    console.log("Hello, world!");
}
The function declaration is hoisted, and the entire function definition is available before its position in the code.

Function Expression Hoisting

Function expressions are treated like variable declarations. The variable itself is hoisted, but the function expression is not assigned until the line of execution. This means calling the function before its assignment will result in an error.


hello(); // TypeError: hello is not a function
var hello = function() {
    console.log("Hi!");
};
The variable hello is hoisted, but since it's a function expression, it’s not initialized until the line is executed.

 Hoisting with let and const in Functions
Variables declared with let and const inside a function are hoisted to the top of the function's scope, but they remain in the TDZ. This prevents access to them before they are initialized.


function test() {
    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 50;
}
test();
The variable x is hoisted inside the function but cannot be accessed until its declaration line due to the TDZ.

Hoisting with Classes
Classes are hoisted, but they cannot be accessed before they are declared, resulting in a ReferenceError.


const obj = new MyClass(); // ReferenceError
class MyClass {
    constructor() {
        this.name = "Example";
    }
}
Although the class MyClass is hoisted, it cannot be accessed before its declaration due to the TDZ, which is why the code throws a ReferenceError.

#Rules to Declare Variables in JavaScript

Use a declaration keyword:
JavaScript allows three ways to declare variables:

var (function-scoped)

let (block-scoped)

const (block-scoped and constant)

Variable name rules:

Must begin with a letter, underscore (_), or dollar sign ($).

Cannot start with a number.

Cannot use reserved keywords (like if, let, const, etc.).

Case-sensitive (name and Name are different).

Initialization (optional):

You can assign a value during declaration or later (except for const, which must be initialized at declaration).

| Feature            | `var`                            | `let`                        | `const`                      |
| ------------------ | -------------------------------- | ---------------------------- | ---------------------------- |
| **Scope**          | Function-scoped                  | Block-scoped                 | Block-scoped                 |
| **Hoisting**       | Yes (initialized as `undefined`) | Yes (but in TDZ\*)           | Yes (but in TDZ\*)           |
| **Re-declaration** | Allowed in same scope            | Not allowed                  | Not allowed                  |
| **Re-assignment**  | Allowed                          | Allowed                      | Not allowed                |
| **Initialization** | Optional                         | Optional                     |  Required                   |
| **Global Object**  | Adds property to `window`        | Does **not** add to `window` | Does **not** add to `window` |


Global Variable
These are variables that are defined in global scope i.e. outside of functions. These variables have a global scope, so they can be accessed by any function directly. In the case of global scope variables, the keyword they are declared with does not matter they all act the same. A variable declared without a keyword is also considered global even though it is declared in the function.

Local Variable
When you use JavaScript, local variables are variables that are defined within functions. They have local scope, which means that they can only be used within the functions that define them. Accessing them outside the function will throw an error
