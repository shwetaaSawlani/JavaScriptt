In JavaScript, the this keyword refers to the context in which a function is called. Its value depends on how the function is called, not where it is written.

1. Global Context

console.log(this); // In browser: Window object

2. Inside a Regular Function

function show() {
  console.log(this);
}
show(); // In non-strict mode: Global object (Window), in strict mode: undefined

3. Inside a Object Function

const obj = {
  name: "Shweta",
  greet: function() {
    console.log(this.name);
  }
};

obj.greet(); // "Shweta"

4. Arrow Functions
Arrow functions do not have their own this. They inherit this from their surrounding (lexical) context.


const obj = {
  name: "Shweta",
  greet: () => {
    console.log(this.name);
  }
};

obj.greet(); // undefined (inherits from global context)

5. Constructor Function

function Person(name) {
  this.name = name;
}

const p = new Person("Shweta");
console.log(p.name); // "Shweta"

6. Using this in Event Listeners

document.querySelector("button").addEventListener("click", function () {
  console.log(this); // Button element
});

7. With bind, call, and apply
You can manually set this:


function greet() {
  console.log(this.name);
}

const user = { name: "Shweta" };

greet.call(user);  // "Shweta"
greet.apply(user); // "Shweta"
const boundGreet = greet.bind(user);
boundGreet();      // "Shweta"

| Method  | Usage                                                 | Arguments                                      | Executes Function? | Return Value                          |
| ------- | ----------------------------------------------------- | ---------------------------------------------- | ------------------ | ------------------------------------- |
| `call`  | `func.call(thisArg, arg1, arg2, ...)`                 | Arguments passed **individually**              | ✅ Yes              | Return value of function              |
| `apply` | `func.apply(thisArg, [argsArray])`                    | Arguments passed as an **array**               | ✅ Yes              | Return value of function              |
| `bind`  | `const newFunc = func.bind(thisArg, arg1, arg2, ...)` | Arguments passed individually (can be partial) | ❌ No               | A **new function** with bound context |


Use call when you want to invoke the function immediately with individual arguments.

Use apply when you want to invoke the function immediately with arguments as an array.

Use bind when you want to create a new function with a specific this, and call it later.

const user = {
  name: "Shweta"
};

function greet(greeting, punctuation) {
  console.log(greeting + " " + this.name + punctuation);
}


//call
greet.call(user, "Hello", "!"); // Hello Shweta!

//apply
greet.apply(user, ["Hi", "."]); // Hi Shweta.


//Bind
const greetUser = greet.bind(user, "Hey");
greetUser("?"); // Hey Shweta?
