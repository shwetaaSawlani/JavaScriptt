setTimeout(()=>{
console.log("Hello, World!");
}, 3000);

//----------------------

setInterval(()=>{
console.log("Hello, World!");
}
, 3000);
//----------------------


let count = 1;
const id = setInterval(() => {
  console.log("Hello", count);
  count++;

  if (count > 5) {
    clearInterval(id); // Stop after 5 times
  }
}, 1000);
//----------------------

const id2 = setTimeout(() => {
  console.log("You won't see this!");
}, 3000);

// Cancel the timeout before it runs
clearTimeout(id2);

