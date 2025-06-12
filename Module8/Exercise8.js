function sum (a , b){
    return a+b;
}
console.log(sum (2,3));

//Regular function
function greet(name){
    return `hello ${name}`;
}

console.log(greet("shweta"));

//Arrow functions
const summ=(a,b,c)=>{
    return a + b + c;
};
console.log(sum(1,2,3));


 
//function Expression
const mul =function (a , b){
    return a*b;
}
console.log(mul(2,3));

//Constructor function
class Person {
    constructor (name){
        this.name = name;
    }
}
 const person1 = new Person("John");
    console.log(person1.name); 

   
   // Arrow function vs Regular function
    const obj = {
  value: 10,
  regularFn: function() {
    console.log(this.value); // 10
  },
  arrowFn: () => {
    console.log(this.value); // undefined (or window/global in non-strict mode)
  }
};

obj.regularFn();
obj.arrowFn();
