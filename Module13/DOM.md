The JavaScript HTML DOM (Document Object Model) is a powerful tool that represents the structure of an HTML document as a tree of objects. It allows JavaScript to interact with the structure and content of a webpage. By manipulating the DOM, you can update the content, structure, and styling of a page without requiring a page reload.

Using JavaScript, developers can access, modify, or delete HTML elements on the webpage, enabling dynamic content updates.

Features of JavaScript DOM
Tree Structure: The DOM is organized like a family tree, with elements that have parent-child relationships. It is easy to find and change things based on their positions.
Element Access: You can use different methods like getElementById, getElementsByTagName, and querySelector to access specific elements on a webpage

console.dir(document)
console.dir(document.body);

**Accessing DOM Elements**


// By ID
const div = document.getElementById("myDiv");

// By class name
const texts = document.getElementsByClassName("text");

// By tag name
const allDivs = document.getElementsByTagName("div");

// Modern: querySelector
const firstBox = document.querySelector(".box"); // first matching element

// All matches
const allBoxes = document.querySelectorAll(".box");


***Modifying Content***
or getting content

div.textContent = "New Text"; // only text
div.innerHTML = "<strong>Bold Text</strong>"; // accepts HTML
div.innerText = "Visible Text"; // respects styles like display:none

***Changing Styles**

div.style.color = "red";
div.style.backgroundColor = "yellow";
div.style.fontSize = "20px";

**Attributes & Classes**

// Attributes
const input = document.querySelector("input");
input.setAttribute("type", "password");
input.getAttribute("type");
input.removeAttribute("type");

**Removing Elements**

const element = document.querySelector("#myDiv");
element.remove(); // modern

// Older way
element.parentNode.removeChild(element);

***Creating & Adding Elements**


1. append() — Adds at the end of an element

const parent = document.querySelector("#container");
const newEl = document.createElement("p");
newEl.textContent = "I'm added at the end!";
parent.append(newEl);

Can insert elements or text
Can insert multiple items at once (comma-separated)
Appends inside the element, after all existing children

2. prepend() — Adds at the beginning of an element

const parent = document.querySelector("#container");
const newEl = document.createElement("p");
newEl.textContent = "I'm added at the beginning!";
parent.prepend(newEl);
 Inserts at the start of the element
Same rules as append()

3. before() — Inserts before the element itself (as sibling)

const target = document.querySelector("#target");
const newEl = document.createElement("p");
newEl.textContent = "I'm inserted before the target!";
target.before(newEl);
Inserts as sibling before the element

Not inside the element — it's outside

4. after() — Inserts after the element itself (as sibling)

const target = document.querySelector("#target");
const newEl = document.createElement("p");
newEl.textContent = "I'm inserted after the target!";
target.after(newEl);
 Inserts as sibling after the element
Again, not inside — it's outside

