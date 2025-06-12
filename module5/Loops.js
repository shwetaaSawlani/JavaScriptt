
// Loops in JavaScript for of and for in 

// for in : obj
//for of : array
let arr= [1, 2 ,3, 4]
for (let key in arr){
    console.log(key);
}
 console.log("break");
 
for (let key of arr){
    console.log(key*2);
}
 console.log("break");

const obj ={
    "name" :"shw",
    "age" : 18,
}
for (let key in obj){
    console.log (key, obj[key]);
}