for (let i = 1; i <= 4; i++){
    let s ="";
    for (let j =1; j <=5; j++){
        s+="*";

    }
    console.log(s);
}

console.log("   ");
console.log("  ")
console.log("   ");

for(let i =1; i <=4; i++){
    let s="";
    for (let j =1; j <=5; j++){
        if (i==1||i==4||j==1||j==5){
            s=s+"*";
        }
        else{
            s=s+" ";
        }

    }
    console.log(s);
}
console.log("  ");
console.log("   ")
console.log(" ");

for (let i = 1; i<=4; i++){
    let s="";
    for (let j= 1; j<=i; j++){
        s=s+"*";

    }
    console.log(s);
}
console.log("  ");
console.log(" ")
console.log(" ");

for(let i =5; i>=1; i--){
    let s="";
    for (let j=1; j<=i; j++){
        s=s+"*";
    }
    console.log(s);

}

console.log("");
console.log("");
console.log("");

for(let i =1; i<=4; i++ ){
    s="";
    for (let j =1; j<=4-i ; j++){
       s=s+" "; 

    }
    for (let j =1; j<=i ; j++){
        s=s+"*";
    }
    console.log (s);
}
console.log("");
console.log("");
console.log("");
for (let i =1; i <=5; i++){
    let s= "";
    for (let j =1; j <=i; j++){
        s=s+" "+j;

    }
    console.log(s);
}

console.log("");
console.log("");
console.log("");

for(let i = 5; i >= 1; i--){
    let s="";
    for(let j =1; j<=i; j++){
        s=s+" "+j;
    }
    console.log(s);
}

console.log("");
console.log("");
console.log("");
let number=1;
for(let i=1; i<=5; i++){
    let s="";
    
    for(let j =1; j<=i; j++){
       
        s=s+" "+number;
         number++;
       
    }
    console.log(s);

}

console.log("");
console.log("");
console.log("");
for(let i =1; i <=5 ; i++){
    let s="";
    for (let j =1; j<=i ; j++){
        let sum =i +j;
        if(sum%2==0){
            s=s+="*";

        }
    }
} 



