the prototype is a container for methods and properties. When methods or properties are added to the prototype of a function, array, or string, they become shared by all instances of that particular object type. 

Object.prototype.print = function () {
    console.log('I am from object prototype')
}
let b = {
    name: 'Pranjal',
    age: 21
}
b.print()

Every JavaScript object has a prototype, which contains shared methods and properties that all instances of that object can use. It's like a template for objects.
When you add a method or property to an object’s prototype, all instances of that object automatically have access to it.
In this example, the print() method is added to Object.prototype, so any object (like b) can use it.
Using prototypes helps you avoid repeating code. Instead of defining the same methods for each object, you define them once in the prototype, and all objects can use them. This makes your code more efficient.

In JavaScript, each object has an internal [[Prototype]] property, which points to another object. This allows the object to inherit properties and methods from its prototype.
When you access a property or method on an object, JavaScript first checks the object itself. If it's not found, it looks in the object's prototype and continues up the prototype chain until it either finds the property or reaches null.
Functions in JavaScript have a prototype property. This is where you add properties or methods that you want to be available to all instances of objects created by that constructor function.
Objects created using a constructor function inherit properties and methods from the constructor's prototype. This allows for reusable code and shared behaviour across multiple objects.
You can add new properties or methods to an object's prototype, and all instances of that object will automatically have access to the new functionality. This is a common way to extend built-in objects like Array or Object.


***constructor***
function Person(name) {
    this.name = name;
}
Person.prototype.sayHello = function () {
    console.log(`Hello, my name is ${this.name}.`);
};
const n = new Person("Sheema");
n.sayHello();


A constructor function is a special function used to create and initialize new objects. In this case, Person is a constructor that takes a name argument and assigns it to the name property of the new object using this.
The sayHello method is added to the Person prototype, meaning all instances of Person will have access to this method, allowing them to say "Hello" with their name.
The expression new Person("Sheema") creates a new object using the Person constructor, passing "Sheema" as the name argument. The new object is stored in the name variable.
The sayHello() method is then called on the name object, which outputs "Hello, my name is Sheema." to the console.

What is Prototype Chaining in JavaScript?
Prototype chaining is how JavaScript implements inheritance. It means that if a property or method is not found on an object, JavaScript will look for it up the prototype chain — that is, in the object’s prototype, and then in that prototype’s prototype, and so on.

person1 --> Person.prototype --> Object.prototype --> null


class Person {
  #name; // private field

  constructor(name) {
    this.#name = name;
  }

  getName() {
    return this.#name;
  }

  setName(name) {
    this.#name = name;
  }
}

const p = new Person("Alice");
console.log(p.getName());   // ✅ "Alice"
p.setName("Bob");
console.log(p.getName());   // ✅ "Bob"

console.log(p.#name);       // ❌ SyntaxError: Private field '#name' must be declared in an enclosing class


🔹 Rules of Private Fields
Must start with #

Only accessible inside the class

Not visible using this.prop from outside

Not enumerable (won’t appear in for...in, Object.keys, etc.)

Must be declared before use (top of class body)

🔹 Static Methods in JavaScript
In JavaScript, static methods are methods that belong to the class itself, not to instances of the class.

📌 Key Points:
Declared using the static keyword.

Called on the class, not on objects created from the class.

Often used for utility or helper functions.

class Calculator {
  // static method
  static add(a, b) {
    return a + b;
  }

  // instance method
  multiply(a, b) {
    return a * b;
  }
}

console.log(Calculator.add(3, 5));  // ✅ 8 (called on class)

// ❌ This would cause an error:
// const calc = new Calculator();
// console.log(calc.add(3, 5)); // ❌ Error: calc.add is not a function
