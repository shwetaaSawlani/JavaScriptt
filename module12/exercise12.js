function outer () {
    let count = 0;

    function inner() {
        count++;
        console.log("Count is: " + count);
    }

    return inner;
}   

let increment = outer();
increment(); 
increment(); 
increment(); 
increment();


function memoization(num){
    let cache = {};
    return function square() {
        if (cache[num]) {
            console.log("Using cached result...");
            return cache[num];
        } else {
            console.log("Calculating result...");
            let result = num * num;
            cache[num] = result;
            return result;
        }

    }

}

let square = memoization(5);
console.log(square()); // 25
console.log(square()); 