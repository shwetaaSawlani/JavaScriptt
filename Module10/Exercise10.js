let arr = [1, 2, 3 , 3, 5, 7, 32 , 5, 1, 12, 67, 6, 5 , 2 ,1, 12];
console.log("Original Array: ", arr);


let s1 = new Set(arr);
console.log("Set: ", s1);

//Character Frequency Map

let str = "hello world";


let freqMap = {};

for (let char of str) {
  freqMap[char] = (freqMap[char] || 0) + 1;
}

console.log(freqMap);



const obj1 = {
    name: "John",
    age: 30,
    city: {
        name: "New York",
        zip: "10001"
    }
}
const obj2 = {
    contact:{
    phone: "123-456-7890",
    email: "jane@example.com",
    }
    
}
const obj = Object.assign(obj1, obj2);   // shallow merge
console.log("Merged Object: ", obj);


const obj3 = JSON.parse(JSON.stringify(obj1,obj2)); // deep copy
console.log("Deep Copied Object: ", obj3);