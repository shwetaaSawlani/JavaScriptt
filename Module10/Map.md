A Map is a data structure that stores key-value pairs, where each key is unique. It is similar to an object but has some advantages:

Inserts keys in the order they were added.
Allows keys of any type, not just strings and symbols.
Provides better performance when dealing with large datasets.

Creating a Map
Map() constructor allows two ways to create a Map in JavaScript.

Passing an Array to new Map().
Create a Map and use Map.set().



let myMap = new Map();
let anotherMap = new Map([
    ['name', 'GFG'],
    ['age', 30],
    ['city', 'Noida']
]);
console.log(anotherMap);

Properties of JavaScript Map
set(key, val) : Adds or updates an element with a specified key and value.
get(key) : Returns the value associated with the specified key.
has(key) : Returns a boolean indicating whether an element with the specified key exists.
delete(key) : Removes the element with the specified key.
clear(): Removes all elements from the Map.
size: Returns the number of key-value pairs in the Map.


const myMap = new Map();
myMap.set('name', 'Shweta');
myMap.set(1, 'Number One');
myMap.set(true, 'Boolean Value');
console.log(myMap.get('name'));      // Shweta
console.log(myMap.get(1));           // Number One
console.log(myMap.has('name'));      // true
console.log(myMap.has('age'));       // false
myMap.delete('age);
console.log(myMap.size);             // 2


🔸 Loop Through a Map

for (let [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}


 Convert Map to Array

const arr = [...myMap];    // or Array.from(myMap)
console.log(arr);    

Initialize Map with Array
const map2 = new Map([
  ['a', 1],
  ['b', 2]
]);
console.log(map2.get('a'));    // 1