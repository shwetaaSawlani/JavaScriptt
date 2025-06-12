A Set in JavaScript is used to store a unique collection of items, meaning no duplicates are allowed.

Sets internally use a hash table which makes search, insert and delete operations faster than arrays. Please note that a hash table data structure allows these operations to be performed on average in constant time.
Set maintains the insertion of items. When we access items, we get them in the same order as inserted.
Only Unique Keys are allowed, if we insert the same key with a different value, it overwrites the previous one.
A set can be created either empty or by providing an iterable like array or string.



// using an array
let s1 = new Set([10, 30, 30, 40, 40]);
console.log(s1);
let s2 = new Set(["gfg", "gfg", "geeks"]);
console.log(s2);

// using string
let s3 = new Set("fooooooood");
console.log(s3);

// an empty set
let s4 = new Set();
console.log(s4);

Output
Set(3) { 10, 30, 40 }
Set(2) { 'gfg', 'geeks' }
Set(3) { 'f', 'o', 'd' }
Set(0) {}


How Set Internally Works in JavaScript
In JavaScript, hash tables are generally used to implement the property of unique values in the Set data structure. The core property of a Set is that it stores only unique values, and any duplicate values are automatically ignored.

Process of Storing Data in a Hash Table
Iteration Over Values: The first step involves iterating over all the values passed in an array, which is then passed to the Set constructor function. This iterator ensures that each value is processed individually.
Hashing with a Hash Function: A hash function, denoted as H(), is introduced. This function takes the value and converts it into a numerical index. The hash function’s purpose is to assign each unique value a specific index in the table.
Mapping Values to Hash Table: In this step, the respective indices for each value are mapped onto the hash table. For example, if the value 1 produces index 5 from the hash function, the value 1 will be stored at index 5 in memory.

Handling Duplicates: When a duplicate value is attempted to be added to the Set, the hash function produces the same index for that value. The algorithm then checks whether that index already contains a value. If the index is already occupied, the new value is discarded, and the previous value is retained, ensuring the uniqueness of values in the Set.

Value Retrieval from the Hash Table
In a hash table, each unique value is stored at a separate index. To retrieve a value from the hash table, the index must be known beforehand. This allows constant-time (O(1)) retrieval since the index is directly used to access the value.

Hash tables are considered optimized and fast for storing data, ensuring efficient management of the Set data structure's functionality, such as maintaining unique values and enabling quick lookups.

Key Characteristics of Sets
Unique Values: Sets only contain unique elements, automatically removing duplicates.
Ordered: Sets maintain the order of elements as they are inserted.
Iterable: You can iterate through Sets using loops like for...of or forEach.
No Indexing: Sets don’t support indexing; you must iterate to access elements.


Methods of Set in JavaScript
Set.add() : adds the new element with a specified value at the end of the Set object.
Set.delete() : deletes an element with the specified value from the Set object. 
Set.clear(): removes all the element from the set. 
Set.entries() : returns an iterator object which contains an array having the entries of the set, in the insertion order. 
Set.has() : returns true if the specified value is present in the Set object. 
Set.values() : returns all the values from the Set in the same insertion order.
Set.keys(): also returns all the values from the Set in the insertion order. 
Set.forEach() : executes the given function once for every element in the Set, in the insertion order.
Set.prototype[@@iterator]() : returns a Set iterator function which is values() function by default.
has(value) : Checks if a value exists in the Set.


**Creating a Set**
const mySet = new Set();
 **Adding Values**
mySet.add(1);
mySet.add(5);
mySet.add(1); // duplicate, ignored
mySet.add("hello");
console.log(mySet); // Set(3) {1, 5, "hello"}

**Check Existence**

console.log(mySet.has(5));   // true
console.log(mySet.has(10));  // false


 ***Delete an Element**

mySet.delete(1);
console.log(mySet); // Set(2) {5, "hello"}

**Size of Set**
console.log(mySet.size); // 2

 **Clear All Elements**

mySet.clear();
console.log(mySet.size); // 0

***Looping Through a Set**

const s = new Set(["apple", "banana", "cherry"]);

for (let item of s) {
  console.log(item);
}
// apple
// banana
// cherry