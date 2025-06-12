
/* I. Primitive Data Types (7 types)


**String***

Represents textual data.
Enclosed in single quotes ('...'), double quotes ("..."), or backticks (`...`) for template literals.
Examples: 'Hello', "World", `My name is ${name}`


Number

Represents both integer and floating-point numbers.
Unlike some other languages, JavaScript doesn't distinguish between integers and floats; all numbers are stored as double-precision floating-point numbers (64-bit binary format).
Special Number values: Infinity, -Infinity, NaN (Not-a-Number, indicating an invalid or unrepresentable numerical value).
Examples: 10, 3.14, -5, 0, NaN, Infinity


Boolean

Represents a logical entity.
Has only two possible values: true or false.
Used for conditional logic.
Examples: true, false


Undefined

Represents a variable that has been declared but has not yet been assigned a value.
It's also the default return value for functions that don't explicitly return anything.
Example:

let myVariable;
console.log(myVariable); // Output: undefined

Null

Represents the intentional absence of any object value.
It is a primitive value, but typeof null returns "object" – this is a historical bug in JavaScript that cannot be fixed without breaking existing code.
Example:

let car = null;
console.log(car); // Output: null

Symbol (ES6+)

Represents a unique and immutable value.
Often used to create unique object property keys to avoid naming collisions.
Every Symbol() call creates a new unique symbol.
Example:


const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // Output: false (they are unique)

BigInt (ES2020+)

Represents integers with arbitrary precision (can store numbers larger than 2 
53−1, which is the maximum safe integer for Number).
Created by appending n to an integer literal or by calling the BigInt() constructor.
Example:

const largeNumber = 9007199254740991n; // Add 'n' for BigInt
const anotherLargeNumber = BigInt("123456789012345678901234567890");
console.log(largeNumber + 1n);

Non-Primitive (Reference) Data Types (1 type, but many forms)
These store references to objects in memory. They are mutable.

Object

This is the parent type for all non-primitive values. It's a collection of properties, where each property has a key (string or symbol) and a value (any data type, including other objects).
When you copy an object variable, you're copying the reference to the object, not the object itself. Changes to the object through one reference will be visible through other references.

Forms of Objects:
Plain Objects: General-purpose collections of key-value pairs. */


const person = {
    name: 'Alice',
    age: 30,
    isStudent: false
};

/*To make object immutable (not writable, not configurable, not extensible):
Use:

Object.freeze(obj);
This will:

Prevent adding, removing, or changing properties.

But note: values of nested objects can still be changed unless you deeply freeze them.*/


const obj = Object.freeze({
  name: "John",
  age: 30
});

obj.name = "Doe";                   // Fails silently in non-strict mode or throws in strict mode
console.log(obj.name);             // Still prints "John"

/*If you want to block even reading, that’s not possible directly via Object.freeze(). But you can use:
 Proxy to deny read/write access:*/

const secret = {
  password: "123456"
};

const secured = new Proxy(secret, {
  get() {
    throw new Error("Access Denied");
  },
  set() {
    throw new Error("Modification Denied");
  }
});

secured.password;                   //  Throws "Access Denied"
secured.password = "abc";           //  Throws "Modification Denied"


/*Object.seal(obj) is used to partially lock an object:

What it does:
Prevents adding new properties

Prevents deleting existing properties

Allows modifying existing property values

prevents changing property descriptors (e.g., writable, configurable)*/


const user = {
  name: "Alice",
  age: 25
};

Object.seal(user);

// You can still change existing values
user.age = 30; // Allowed

// You cannot add new properties
user.email = "alice@example.com"; //  Ignored or error in strict mode

// You cannot delete properties
delete user.name; // Ignored or error in strict mode

console.log(user); // { name: "Alice", age: 30 }
//How to check if an object is sealed:
Object.isSealed(user); // true

/*Arrays: Ordered Collections of values, indexed by numbers (starting from 0). Arrays are technically objects with special properties and methods.
JavaScript */

const colors = ['red', 'green', 'blue'];
const mixed = [1, 'hello', true, {key: 'value'}];

/*Functions: Callable objects that can execute code. Functions are first-class citizens in JavaScript, meaning they can be passed as arguments, returned from other functions, and assigned to variables.
JavaScript*/

function greet(name) {
    return `Hello, ${name}!`;
}
const add = (a, b) => a + b;

//Dates: Objects for working with dates and times.


const now = new Date();

//RegExp (Regular Expressions): Objects for pattern matching with strings.


const pattern = /[a-z]+/;

//Maps and Sets: (ES6+) Data structures that offer more efficient ways to store and retrieve data than plain objects or arrays in certain scenarios.


const myMap = new Map();
myMap.set('name', 'Bob');

const mySet = new Set([1, 2, 3, 3]); // Contains only 1, 2, 3


/*JavaScript is a dynamically typed language, meaning you don't declare the type of a variable when you declare it. The type is determined automatically at runtime 
based on the value it holds.Variables can change their data type during execution (though this is generally discouraged for clarity). */


/* The Math object in JavaScript is a built-in static object that provides properties and methods for mathematical constants and functions. 
Unlike other built-in objects like Date or Array, you don't create instances of Math (you don't use new Math()). You simply access its properties and call its methods
 directly on the Math object itself.

1. Rounding Methods

These methods are used to round numbers to integers or to a specified precision.

Math.round(x)

Returns the value of x rounded to the nearest integer.*/

console.log(Math.round(4.9));   // 5
console.log(Math.round(4.5));   // 5
console.log(Math.round(4.4));   // 4
console.log(Math.round(-4.5));  // -4

/*Math.ceil(x) (Ceiling)

Returns the smallest integer greater than or equal to x. (Rounds up)*/

console.log(Math.ceil(4.9));    // 5
console.log(Math.ceil(4.1));    // 5
console.log(Math.ceil(-4.9));   // -4

/*Math.floor(x) (Floor)

Returns the largest integer less than or equal to x. (Rounds down).*/


console.log(Math.floor(4.9));   // 4
console.log(Math.floor(4.1));   // 4
console.log(Math.floor(-4.1));  // -5


/*Math.trunc(x) (Truncate)

Returns the integer part of a number by removing any fractional digits. It does not round.*/

console.log(Math.trunc(4.9));   // 4
console.log(Math.trunc(-4.9));  // -4

/*Arithmetic / Calculation Methods
These methods perform various mathematical calculations.

Math.abs(x) (Absolute Value)

Returns the absolute value of x.*/


console.log(Math.abs(-4.7)); // 4.7
console.log(Math.abs(4.7));  // 4.7

/*Math.pow(x, y) (Power)

Returns x raised to the power of y (x^y).*/

console.log(Math.pow(8, 2));   // 64 (8 * 8)
console.log(Math.pow(2, 10));  // 1024

/*Math.sqrt(x) (Square Root)

Returns the square root of x.*/


console.log(Math.sqrt(64));  // 8
console.log(Math.sqrt(9));   // 3

/*Math.cbrt(x) (Cube Root - ES6+)

Returns the cube root of x.*/


console.log(Math.cbrt(8));   // 2
console.log(Math.cbrt(27));  // 3

/*Math.exp(x) (Exponent)

Returns e 
x
 , where e is Euler's number (approximately 2.718).*/


console.log(Math.exp(1)); // 2.718281828459045 (e)

/*Math.log(x) (Natural Logarithm)

Returns the natural logarithm (base e) of x.*/


console.log(Math.log(Math.E)); // 1

/* Math.log2(x) (Base-2 Logarithm - ES6+)

Returns the base-2 logarithm of x.*/


console.log(Math.log2(8)); // 3

/* Math.log10(x) (Base-10 Logarithm - ES6+)

Returns the base-10 logarithm of x. */


console.log(Math.log10(100)); // 2

/*Math.max(x1, x2, ..., xN)

Returns the number with the highest value among its arguments. */

console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
console.log(Math.max()); // -Infinity (if no arguments)
/* Math.min(x1, x2, ..., xN)

Returns the number with the lowest value among its arguments. */


console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
console.log(Math.min()); // Infinity (if no arguments)

/* Math.sign(x) (Sign - ES6+)

Returns the sign of a number, indicating whether the number is positive, negative, or zero.
1 if x is positive.
-1 if x is negative.
0 if x is 0.
-0 if x is -0.
NaN if x is NaN. */


console.log(Math.sign(5));    // 1
console.log(Math.sign(-5));   // -1
console.log(Math.sign(0));    // 0
console.log(Math.sign(-0));   // -0
console.log(Math.sign(NaN));  // NaN

/*Math.hypot(x1, x2, ..., xN) (Hypotenuse - ES6+)

Returns the square root of the sum of squares of its arguments. Useful for calculating the hypotenuse of a right-angled triangle, or the Euclidean distance for multiple
dimensions.*/


console.log(Math.hypot(3, 4));    // 5 (sqrt(3*3 + 4*4) = sqrt(9 + 16) = sqrt(25))
console.log(Math.hypot(3, 4, 5)); // 7.071...

/*Math.fround(x) (Float 32 Round - ES6+)

Returns the nearest single-precision floating-point representation of a number. Useful for performance-sensitive contexts where 32-bit floats are sufficient.*/


console.log(Math.fround(0.1 + 0.2)); // 0.30000001192092896 (illustrates float precision

/*Math.random()
Returns a floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).*/

console.log(Math.random()); // e.g., 0.123456789
//Math.PI: Ratio of a circle's circumference to its diameter (approx. 3.14159).
console.log(Math.PI); // 3.141592653589793

/*Boolean: A wrapper object for boolean primitive values (true/false). Rarely used directly as a constructor (new Boolean()), but its methods can be accessed on
 primitive booleans.
 
 BigInt: Used for arbitrarily large integers. (Covered in data types, also a built-in constructor).
JavaScript

const bigNum = BigInt(9007199254740991) + 1n; */


The Number object in JavaScript is a wrapper object that allows you to work with numerical values and provides several 
properties and methods to handle numbers.
Number.EPSILON	: The smallest interval between two representable numbers.
Number.MAX_SAFE_INTEGER	: The maximum safe integer (2^53 - 1).
Number.MIN_SAFE_INTEGER	: The minimum safe integer (-(2^53 - 1)).
Number.MAX_VALUE	      : The largest possible number in JavaScript (~1.79e+308).
Number.MIN_VALUE	      : The smallest positive number (~5e-324).
Number.NaN	Special value representing "Not a Number".
Number.NEGATIVE_INFINITY	Represents negative infinity.
Number.POSITIVE_INFINITY	Represents positive infinity.

3. NaN is not equal to itself: NaN Stands for “Not-a-Number”, It is used to represent a computational error. NaN is technically of type number.
1
console.log(typeof NaN);
2
console.log(NaN === NaN);


Output
number
false


4. A Symbol is Never Equal to Another One : Symbol is a unique and immutable data type often used for creating private properties and methods. Symbols are never equal to any other Symbol.
1
let s1 = Symbol("abc");
2
let s2 = Symbol("abc");
3
console.log(s1 === s2);


Output
false



