The Fetch API is a modern interface in JavaScript that allows you to make HTTP requests. It replaces the older XMLHttpRequest method and provides a cleaner and more flexible way to fetch resources asynchronously. The Fetch API uses Promises, making it easier to work with asynchronous data.

Syntax

fetch(url, options)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
url: The API endpoint from which data is fetched.
options (optional): Specifies method, headers, body, etc.
response.json(): Parses the response as JSON.
.catch(error): Handles any errors that occur during the request.
How Fetch API Works?
A request is sent to the specified URL.
The server processes the request and sends a response.
The response is converted to JSON (or another format) using .json().
Errors are handled using .catch() or try-catch blocks.

Common HTTP Request Methods in Fetch API
GET: This request helps to retrieve some data from another server.
POST: This request is used to add some data onto the server.
PUT: This request is used to update some data on the server.
DELETE: This request is used to delete some data on the server.

Basic Fetch Request
A simple GET request to fetch data from an API.


fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    Basic Fetch Request
A simple GET request to fetch data from an API.


fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

    fetch('https://api.example.com/data')
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Network response was not ok'); 
        }
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));

fetch(): Initiates a network request to the provided URL.
response.ok: Checks if the HTTP response status is in the range of 200–299, indicating success.
return response.json(): If the response is successful, the data is parsed as JSON for further use.
throw new Error(): If the status code indicates an error (e.g., 404 or 500), an error is thrown to handle it.
catch(error): Catches any errors (network or HTTP issues) and logs them to the console for debugging.

async function getP() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error); 
    }
}
getP()

async function getP(): This defines an asynchronous function, meaning it can handle tasks like fetching data without blocking the rest of the program.
await fetch(): The await keyword pauses the function until the fetch() request is complete, so the data can be used right after it’s retrieved.
response.ok: Checks if the fetch request was successful by ensuring the response status is in the 200-299 range.
await response.json(): If the response is successful, it converts the data from the server (usually in JSON format) into a JavaScript object.
try/catch block: Catches any errors that may happen (like network problems) and logs them, preventing the program from crashing.