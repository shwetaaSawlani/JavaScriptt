let arr = ["apple", "banana", "cherry"];

console.log(arr.at(1));             // "banana"
console.log(arr.concat(["date"])); // ["apple", "banana", "cherry", "date"]
console.log(arr.toString());       // "apple,banana,cherry"
arr.unshift("kiwi");               // ["kiwi", "apple", "banana", "cherry"]
arr.shift();                       // ["apple", "banana", "cherry"]
console.log(arr.slice(0, 2));      // ["apple", "banana"]
arr.splice(1, 1, "grape");         // ["apple", "grape", "cherry"]
arr.sort();                        // ["apple", "cherry", "grape"]
arr.copyWithin(1, 0, 2);           // ["apple", "apple", "cherry"]
arr.push("orange");                // ["apple", "apple", "cherry", "orange"]
arr.pop();                         // ["apple", "apple", "cherry"]
console.log(arr.join(" - "));      // "apple - apple - cherry"
console.log(arr.includes("apple"));// true

//every 
let arr2=[2,8,20];
let iseven= arr2.every((num)=>{
    return num%2==0;
});
console.log(iseven);

//filter
let arr3=[2,8,2,7,9,23,46,10];
let is= arr3.filter((num)=>{
    return num%2==0;
});
console.log(is);

//reduce 
let arr4= [1,2,3,45,6,7];
let sum = arr4.reduce((start, end)=> {
    return start+end;

});
console.log(sum);

//Map
let mapp= arr4.map((a)=>{
    return a*5;
})
console.log(mapp)

//Enteries
let arr5=arr4.entries()
console.log(arr5.next().value);
console.log(arr5.next().value);
console.log(arr5.next().value);

//Fill
let arr6 = [1, 2, 3, 4];
arr.fill(0, 1, 3);
console.log(arr6); // [1, 0, 0, 4]

//find
let numbers = [3, 8, 12, 5];

let found = numbers.find(num => num > 10);
console.log(found); // 12

//some
let numbers1 = [1, 3, 5, 6];

let hasEven = numbers1.some(num => num % 2 === 0);
console.log(hasEven); // true
