use case of closure

 1. Data Privacy / Encapsulation (like private variables)
In JavaScript, there's no built-in private keyword for function-scoped variables (like in Java or C++). Closures solve this.

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
 count is not accessible directly from outside — it’s private.

 2. State in Event Listeners
 function setupButton() {
  let clickCount = 0;

  document.getElementById("myBtn").addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}

setupButton();
Here, the event listener "remembers" the clickCount through closure.

A closure is the combination of a function and the lexical environment within which that function was declared.