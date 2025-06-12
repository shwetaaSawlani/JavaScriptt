| Feature         | `setTimeout`                                  | `setInterval`                                  |
| --------------- | --------------------------------------------- | ---------------------------------------------- |
| 📌 Purpose      | Runs code **once after a delay**              | Runs code **repeatedly at intervals**          |
| 🔁 Repeats?     |  No (runs only once)                          |  Yes (runs again and again)                   |
| ⏱️ Timing       | Executes after a delay (once)                 | Executes repeatedly after every delay          |
| 🔙 Return Value | Timer ID (used to cancel with `clearTimeout`) | Timer ID (used to cancel with `clearInterval`) |
| ❌ Cancel with   | `clearTimeout(id)`                            | `clearInterval(id)`                            |


What is Synchronous JavaScript?
In synchronous programming, operations are performed one after the other, in sequence. So, basically each line of code waits for the previous one to finish before proceeding to the next. This means that the program executes in a predictable, linear order, with each task being completed before the next one starts.
Example: In this example, we have shown the synchronous nature of JavaScript.
console.log("Hi");
console.log("Geek");
console.log("How are you?");


this is straightforward and easy to follow, but it has some drawbacks, especially when dealing with time-consuming tasks like fetching data from a server or reading a large file. If such a task is included in the sequence, it will block the execution of the rest of the code until it’s finished, leading to potential delays and a bad user experience.
What is Asynchronous JavaScript?

Asynchronous programming, on the other hand, allows multiple tasks to run independently of each other. In asynchronous code, a task can be initiated, and while waiting for it to complete, other tasks can proceed. This non-blocking nature helps improve performance and responsiveness, especially in web applications.



**How Asynchronous JavaScript Works Behind the Scenes***
To understand asynchronous behavior better, it’s important to know about the JavaScript runtime environment, specifically the event loop and call stack:
Call Stack: The call stack is where functions are executed in the order they’re called. In synchronous operations, each function is added to the stack and executed before moving to the next.

Web APIs (in Browsers): Functions like setTimeout, HTTP requests, and event listeners are handled by Web APIs in the browser. When an asynchronous function like setTimeout is called, it is passed to these Web APIs, which manage the timing without blocking the main call stack.

Callback Queue: Once the Web API has finished its job (like waiting for the timeout), it pushes the callback function (like the one in setTimeout) to the callback queue.

Event Loop: The event loop continuously checks the call stack. If it’s empty, it pushes the functions from the callback queue onto the stack for execution. This is why the delayed message “Geek” is logged after other code has finished
When one task needs to wait for another to complete before running, this is known as dependent asynchronous tasks. Since JavaScript is non-blocking and asynchronous, we must explicitly control the order of such tasks.

What is a Callback in JavaScript?
A callback is a function passed as an argument to another function, which is then invoked (called) later, often after some task or event.
 Why Use Callbacks?
JavaScript is asynchronous and event-driven. Callbacks help:
Handle tasks that take time (like API calls, reading files, timers).


A function can accept another function as a parameter.
Callbacks allow one function to call another at a later time.
A callback function can execute after another function has finished.
1. What is Callback Hell?
Callback Hell in JavaScript can be defined as the situation where we have nested callbacks(functions passed as arguments to other functions) which makes the code difficult to read and debug. The term “callback hell” 

describes the deep nesting of functions that can result in poor code readability and difficulty in debugging, especially when handling multiple asynchronous operations.
2. Inversion of Control
When you pass your callback to someone else’s code (like a library), you lose control over when and how it is called.
If the callback is misused or called multiple times, your app may misbehave.


The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
A Promise is in one of these states:
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed successfully.
rejected: meaning that the operation failed.
✅ Why Promises are Used:
Handle Asynchronous Tasks:


Promises allow you to write code that works with things that take time (like API calls, file loading, etc.).


Avoid Callback Hell:


With .then() chaining, Promises are easier to read and manage than nested callbacks.


Better Error Handling:


Promises use .catch() to handle errors in a cleaner, centralized way.


Chaining:


You can perform a sequence of async operations in order using .then() chaining.


Improves Readability:


Code becomes more structured and cleaner than using multiple callbacks.


Promise.all()
Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
Promise.any()
Fulfills when any of the promises fulfills; rejects when all of the promises reject.

Promise.race()
Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.



function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Here is your data");
            } else {
                reject("Error fetching data");
            }
        }, 2000);
    });
}

fetchData()
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });


    | Method                 | Description                                                                 | Syntax Example                     |
| ---------------------- | --------------------------------------------------------------------------- | ---------------------------------- |
| `Promise.resolve()`    | Returns a promise that is resolved with the given value.                    | `Promise.resolve(42)`              |
| `Promise.reject()`     | Returns a promise that is rejected with the given reason.                   | `Promise.reject("Error!")`         |
| `Promise.then()`       | Handles resolved value of a promise.                                        | `promise.then(value => { ... })`   |
| `Promise.catch()`      | Handles errors (rejected promises).                                         | `promise.catch(error => { ... })`  |
| `Promise.finally()`    | Executes code after promise settles (resolved or rejected).                 | `promise.finally(() => { ... })`   |
| `Promise.all()`        | Waits for all promises to resolve or any to reject.                         | `Promise.all([p1, p2, p3])`        |
| `Promise.race()`       | Returns first resolved or rejected promise from the array.                  | `Promise.race([p1, p2, p3])`       |
| `Promise.allSettled()` | Waits for all promises to settle (resolve/reject), returns result array.    | `Promise.allSettled([p1, p2, p3])` |
| `Promise.any()`        | Resolves as soon as **any** promise resolves. If all reject, returns error. | `Promise.any([p1, p2, p3])`        |


Async and Await in JavaScript


Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.

Async Function
The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked. Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.
Await Keyword
The await keyword is used to wait for a promise to resolve. It can only be used within an async block. Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.

Advantages of Async and Await
Improved Readability: Async and Await allow asynchronous code to be written in a synchronous style, making it easier to read and understand.
Error Handling: Using try/catch blocks with async/await simplifies error handling.
Avoids Callback Hell: Async and Await prevent nested callbacks and complex promise chains, making the code more linear and readable.
Better Debugging: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.


async makes a function return a Promise.

await pauses the execution of an async function until the Promise is resolved or rejected.

async function getPost() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log("Post Title:", data.title);
  } catch (error) {
    console.error("Error:", error);
  }
}

getPost();


 Explanation:
async function getPost()
Declares an async function so you can use await inside it.

await fetch(...)
Pauses execution until the fetch Promise resolves. Stores the response object in response.

await response.json()
Converts the response body into a JSON object (again, waiting for it).


control other programs, or add functionality — often without needing to compile the code.
Cookies in JavaScript
Cookies are small pieces of data stored in the user's browser. They are sent back and forth between the client (browser) and the server with every HTTP request. Cookies can be used to store user preferences, session data, authentication tokens, etc.
Setting a Cookie:
You can set a cookie by assigning a string to document.cookie. The string typically includes:
The name and value of the cookie.


The expiration date (optional).


The path or domain (optional).


Secure flag (optional).
Setting a Cookie:
document.cookie = "username=Ramesh; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

Reading Cookies:
console.log(document.cookie); // Output: "username=Ramesh; sessionID=abc123"
