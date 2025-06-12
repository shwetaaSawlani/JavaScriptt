const add = (a, b) => a + b; //Arrow function

function add(a, b) {  //Regular Function
  return a + b;
}

2. this Binding
Arrow Functions:
❌ Do not have their own this.
✅ this is lexically bound, i.e., it inherits this from the enclosing scope.

Regular Functions:
✅ Have their own this, depending on how they're called.

const obj = {
  value: 10,
  regularFn: function() {
    console.log(this.value); // 10
  },
  arrowFn: () => {
    console.log(this.value); // undefined (or window/global in non-strict mode)
  }
};

obj.regularFn();
obj.arrowFn();

3. arguments Object
Arrow Functions: ❌ Do not have their own arguments object.

Regular Functions: ✅ Have access to arguements

function regularFn() {
  console.log(arguments);
}
const arrowFn = () => {
  console.log(arguments); // ReferenceError
};

4. Constructors
Arrow Functions: ❌ Cannot be used as constructors. Will throw an error if used with new.

Regular Functions: ✅ Can be used with new to create instances.

function Person(name) {
  this.name = name;
}
const p = new Person('Alice'); // ✅ works

const ArrowPerson = (name) => {
  this.name = name;
};
// const p2 = new ArrowPerson('Bob'); ❌ TypeError


Arrow Functions should not be used as object methods if you need this to refer to the object.

Regular Functions are better for object/class methods.


| Feature              | Regular Function | Arrow Function       |
| -------------------- | ---------------- | -------------------- |
| Syntax               | Verbose          | Concise              |
| Own `this`           | ✅ Yes            | ❌ No (lexical)       |
| Own `arguments`      | ✅ Yes            | ❌ No                 |
| Can be a constructor | ✅ Yes            | ❌ No                 |
| Suitable for methods | ✅ Yes            | ❌ No (in most cases) |
|

## Difference in arrow and normal function

1. Syntax.

2. No prototype object for an arrow function.

3. Arrow function cant be used as a constructor.

4. ‘this ’ Keyword can’t be used in an arrow function.If we try to access this in the arrow function it will return the this of the closest non-arrow parent function.

5. Duplicate-named parameters are not allowed.

6. Hoisting can’t be achieved by using arrow function. if we call an arrow function before initialization then it will throw an error like ReferenceError: Cannot access ….. before initialization.

#### # Immediately Invoked Function Expressions (IIFE)

An Immediately Invoked Function Expression (IIFE) is a code pattern that directly calls a function defined as an expression. It looks like this:

    (function () {
    // Do something
    })();

    const value = (function () {
    // Do something
    return someValue;
    })();