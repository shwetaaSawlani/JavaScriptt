const name = "shweta";
let age = 21;
let ismarried = false;
let collegeName;
let accountNumber = BigInt(467890156890);
const mySymbol = Symbol('description');

console.log (typeof (name));
console.log( typeof (age));
console.log( typeof (ismarried));
console.log( typeof (collegeName));
console.log(typeof(accountNumber));
console.log(typeof mySymbol);      

console.log(typeof null);         // "object" (historical bug)
console.log(typeof 10n);          // "bigint"
console.log(typeof {});           // "object"
console.log(typeof []);           // "object" (arrays are objects)
console.log(typeof function(){}); // "function" (functions are a special type of object)
const isTrue = new Boolean(true); 
console.log(typeof isTrue);       // "object" 


/* Extra Challange : Swap two variables without a third variable.*/

let a = 5;
let b = 3;

a = a + b;  // a = 8
b = a - b;  // b = 5
a = a - b;  // a = 3

console.log("a =", a); 
console.log("b =", b); 

/*Destructuring (ES6) 
Destructuring is a feature in ES6 (ECMAScript 2015) that allows you to unpack values from arrays or properties from objects into distinct variables in a 
clean and readable way.*/
{
let a = 5;
let b = 3;

[a, b] = [b, a];

console.log("a =", a); // 3
console.log("b =", b); // 5

}
