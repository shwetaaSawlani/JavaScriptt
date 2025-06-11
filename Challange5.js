for (let i =1 ; i <=20 ; i++){
 console.log(i);
}
//list all even numbers to 100.
for (let i =1 ; i <=100 ; i++){
    if(i%2==0){
        console.log(i);
    }
}

// Write FizzBuzz for 1–100.
for (let i =1 ; i <=100 ; i++){
    if(i%3==0 && i%5 ==0){
        console.log("FrizzBuzz");
    }
    else if (i%5 ==0){
         console.log("Buzz");

    }
    else if (i%3 ==0 ){
         console.log("Frizz");

    }
    else {
         console.log(i);
    }
}
