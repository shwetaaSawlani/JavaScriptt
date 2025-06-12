1. for Loop
Used when the number of iterations is known.

for (initialization; condition; increment) {
  // code to run
}

2. while Loop
Used when the number of iterations is unknown; loop continues as long as the condition is true.

while (condition) {
  // code to run
}
3. do...while Loop
Similar to while, but it runs the code block at least once, even if the condition is false.

4. for...in Loop
 Purpose:
Used to iterate over the keys (property names) of an object (or an array, though not recommended for arrays).

Syntax:

for (let key in object) {
  // access object[key]
}

5. for...of Loop
✅ Purpose:
Used to iterate over values in iterable objects like arrays, strings, maps, sets, etc.

✅ Syntax:

for (let value of iterable) {
  // use value directly
}