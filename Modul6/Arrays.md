An array in JavaScript is a special variable that can hold multiple values in a single variable.

🔹 Syntax

let fruits = ["apple", "banana", "orange"];


Key Features
Arrays are ordered collections (index-based).

Index starts from 0.

Arrays can store any data type: numbers, strings, objects, even other arrays!

Examples

let numbers = [1, 2, 3, 4, 5];
let mixed = ["hello", 42, true, null];
let nested = [1, [2, 3], [4, 5]];

| Method                                     | Description                                      | Example                   |
| ------------------------------------------ | ------------------------------------------------ | ------------------------- |
| **`at(index)`**                            | Returns the element at a specific index          | `arr.at(1)`               |
| **`concat()`**                             | Merges two or more arrays                        | `[1, 2].concat([3, 4])`   |no
| **`toString()`**                           | Converts the array to a string                   | `[1, 2, 3].toString()`    |
| **`unshift(item)`**                        | Adds item(s) to the **start** of array           | `arr.unshift("a")`        |yes
| **`shift()`**                              | Removes and returns the **first** element        | `arr.shift()`             |yes
| **`slice(start, end)`**                    | Returns a portion of the array (non-destructive) | `arr.slice(1, 3)`         |no
| **`splice(start, deleteCount, items...)`** | Adds/removes elements (destructive)              | `arr.splice(1, 2, "x")`   |yes
| **`sort()`**                               | Sorts the array elements (as strings by default) | `arr.sort()`              |yes
| **`copyWithin(target, start, end)`**       | Copies a part of array to another location       | `arr.copyWithin(1, 2, 4)` |yes
| **`push(item)`**                           | Adds item(s) to the **end** of array             | `arr.push("z")`           |yes
| **`pop()`**                                | Removes and returns the **last** element         | `arr.pop()`               |yes
| **`join(separator)`**                      | Joins all elements into a string                 | `arr.join(", ")`          |no
| **`includes(value)`**                      | Checks if array contains a value                 | `arr.includes("apple")`   |no

| Method     | Purpose                        | Returns           |
| ---------- | ------------------------------ | ----------------- |
| `every()`  | All elements pass a condition? | `true` or `false` |
| `fill()`   | Replace elements with a value  | Modified array    |yes
| `reduce()` | Reduce array to a single value | Single value      |no
| `filter()` | Keep only elements that match  | New array         |
| `map()`    | Transform all elements         | New array         |no

Method	Purpose	Returns	Mutates original array?
find()	Returns first match based on a condition	Single element / undefined	
some()	Checks if at least one element matches	    true or false


Reduces the array to a single value by running a function on each element.
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 10

acc = accumulator (initial value or result so far)

curr = current element

0 = initial value of the accumulator

**map()**
Returns a new array by applying a function to each element.
**filter()**
Returns a new array with elements that pass a condition.

**splice**

let arr = [1, 34, 2, 2, 8 ,9];
console.log(arr.splice(1, 0, 8));
What it does:
Starts at index 1 (which is 34)

Deletes 0 elements

Inserts 8 at index 1

Result:
The splice() returns the removed elements, which in this case is an empty array ([])
The original array gets modified

**fill**
arr.fill (value, start, end); 
modifies the array