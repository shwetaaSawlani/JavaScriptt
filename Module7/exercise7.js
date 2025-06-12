const Person ={
    "name": "Shweta",
    "age": 21,
    "gender":"female",
    "address":{
        "city":"indore",
        "contry":"india"

    }

}
//access
console.log(Person.name);      // Dot notation
console.log(Person["age"]);    // Bracket notation
//iterating 
for( let key in Person){
    console.log("key:", key, "Value:" ,Person[key]);
}


Object.entries(Person).forEach(([key, value]) =>{
console.log(`${key} ${value}`)
});

//destructing 
const {name, gender}= Person;
console.log(name);
console.log(gender);

/* Filter objects in an array by age >18.
*/
let arr= [{name: "shruti", age : 17}, {name : "tanvi", age :9, }, {name: "tisha ", age :20}];
console.log(arr.filter((arr)=>{
    return arr.age >18
}));



console.log(arr.sort((a,b)=>{
    return a.age-b.age;
}))

/*To sort an array of objects by a specific property in JavaScript, you use the .sort() method with a custom comparison function.

🔹 Syntax:

array.sort((a, b) => a.property - b.property); // For numbers
array.sort((a, b) => a.property.localeCompare(b.property)); // For strings*/