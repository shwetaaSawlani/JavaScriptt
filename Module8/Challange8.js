const calculator ={
    add:function(a,b){
        return a+b;
    },
    subtract:function(a,b){
        return a-b;
    },
    multiply:function(a,b){
        return a*b;
    },
    divide:function(a,b){
        if(b!==0){
            return a/b;
        }else{
            return "Division by zero error";
        }
    }
}
console.log(calculator.add(5,3)); // 8



//In JavaScript, a closure is a function that remembers the variables from the place where it was defined, even if it's executed in a different scope.

//Simple Definition:
//A closure is created when a function is defined inside another function, and the inner function accesses variables from the outer function.


function outer(){
    let count =0;
    
    function inner(){
        count++;
        console.log("Count is: " + count);
    }

    return inner;
}

outer();
const c = outer();

c(); 
c();// Increment count


/*What’s happening:
outer() defines count and returns inner.

inner() uses count, which is from outer()'s scope.

Even after outer() has finished executing, inner() still remembers count.*/

function greetUser(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}!`);
    };
}
/*Write a closure (function returning a function).*/
const hi= greetUser("Hi");
console.log(hi("Alice")); // "Hi, Alice!"
const hello = greetUser("Hello");
console.log(hello("Bob")); // "Hello, Bob!"