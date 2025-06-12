1. Shallow Copy:
A shallow copy is like copying just the surface of an object.

It creates a new object, but the inner values (like objects/arrays inside) are still linked to the original.


let original = { name: "John", address: { city: "Delhi" } };

let shallow = Object.assign({}, original);

shallow.name = "Jane"; // OK, only 'name' changed
shallow.address.city = "Mumbai"; // Uh oh! Also changes 'original.address.city'

console.log(original.address.city); // Output: "Mumbai"
console.log(original.name); //John


2. Deep Copy:
A deep copy means copying everything, including all nested objects.

Changes to the new object won’t affect the original at all.

✅ Example:

let original = { name: "John", address: { city: "Delhi" } };

let deep = JSON.parse(JSON.stringify(original)); // Deep copy method

deep.address.city = "Mumbai";

console.log(original.address.city); // Output: "Delhi"




Object.assign() is a built-in method used to copy properties from one or more source objects to a target object.

🔹 Syntax:

Object.assign(target, ...sources)
target: The object that will receive the new properties.

sources: One or more source objects whose properties will be copied.

To Avoid Modifying Original Object:
Use an empty object {} as the target to create a new merged object:


const merged = Object.assign({}, obj1, obj2);
console.log(merged);

 What If Both Have Same Keys?
The later object overwrites properties of earlier ones:


const obj1 = { name: "John", age: 30 };
const obj2 = { age: 35, city: "Delhi" };

const merged = Object.assign({}, obj1, obj2);
console.log(merged);
// Output: { name: "John", age: 35, city: "Delhi" }



 1. Shallow Clone (only top-level properties are copied)
✅ Already in your code:


let shallow = Object.assign({}, original);
Or use spread syntax (shorter):


let shallow = { ...original };
⚠ Note: If the object has nested objects (like address), they are still linked.

🔹 2. Deep Clone (copies everything, even nested objects)
✔ Use JSON.parse(JSON.stringify()):


let deep = JSON.parse(JSON.stringify(original));
This is easy but:

It removes functions.

Can’t handle undefined, Dates, Maps, Sets, etc.


