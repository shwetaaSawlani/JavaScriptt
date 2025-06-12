//Create, append, and remove elements.
let arr= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "a", "b", "c", "d", "e", "f", "g", "h", "i", "a", "b", "c", "d", "e", "f", "g", "h", "i"];
console.log(arr);
arr.push("j");
console.log(arr);
arr.pop()
console.log(arr);

//flaten the array 
let arr2 =["abc", ["efg", "hij",] , "klm"];
console.log(arr2.flat());

//count the number of occurances
const arr3 = ["apple", "banana", "apple", "orange", "banana", "apple"];

const counts = {};

for (let item of arr3) {
  counts[item] = (counts[item] || 0) + 1;
}

console.log(counts);


// Flatten a nested array recursively
function flattenArray(arr) {
    let result = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flattenArray(item)); // recursive call
        } else {
            result.push(item);
        }
    }

    return result;
}
