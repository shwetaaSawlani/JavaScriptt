//Use map to double an array, filter for even numbers.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log (arr.map((arr)=>{
    return arr*2;
}));

console.log(arr.filter((arr)=>{
    return arr%2==0;
}));

//Use reduce to sum the array.
console.log(arr.reduce((start, end)=>{
    return start+end;
}));

//Sort an array of objects by price (high→low).
const arr2 = [{pid:1, price :90}, {pid:2, price :100}, {pid:3, price :120}];
console.log(arr2.sort((a,b)=>{
    return b.price - a.price; 
}));


