1. Inline Event Handling (HTML attribute)
You attach JavaScript directly to an element using attributes like onclick, onchange, etc.


<button onclick="alert('Button clicked!')">Click Me</button>
🔹 Pros:
Simple and quick for small tasks
🔹 Cons:
Mixing HTML and JS is not clean
Harder to maintain
Limited flexibility

2. Event Properties 
You assign a function directly to an element’s event property in JavaScript.

<button id="myBtn">Click</button>

<script>
  const btn = document.getElementById("myBtn");
  btn.onclick = function () {
    alert("Clicked using .onclick");
  };
</script>
🔹 Pros:

Easy to understand

Keeps JavaScript out of HTML

🔹 Cons:

Only one handler at a time (new one replaces the old one)

3. addEventListener() 
The best and most powerful method.

<button id="myBtn">Click</button>

<script>
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", function () {
    alert("Handled by addEventListener");
  });

  // You can even add more than one
  btn.addEventListener("click", function () {
    console.log("Second event handler");
  });
</script>
🔹 Pros:

Multiple listeners allowed
Can remove listeners easily
Supports capturing and bubbling
Clean and modular

🔹 Cons:
Slightly more code (but totally worth it!)

Syntax for Removing an Event

element.removeEventListener("eventType", functionReference);

 What is a "function reference"?
It means you store a function in a variable (or name), and use that same reference for both:

addEventListener

removeEventListener

✅ Example: Function Reference Works

function greet() {
  console.log("Hello!");
}

button.addEventListener("click", greet);          // add event
button.removeEventListener("click", greet);       // remove event ✅
✔️ This works because the function greet is the same reference both times.

❌ What does NOT work?

button.addEventListener("click", function () {
  console.log("Hello!");
});

button.removeEventListener("click", function () {
  console.log("Hello!");
});
This fails because you're passing two different anonymous functions — even if they do the same thing, they are different in memory.


The event object in JavaScript is a special object that gets passed to an event handler when an event occurs (like a click, keypress, mouseover, etc.). It contains detailed information about the event, such as:

What type of event occurred (click, keydown, etc.)

What element triggered the event

Mouse coordinates, keyboard key pressed, etc.

Whether default action was prevented

Bubbling/capturing phase details

<button id="btn">Click me</button>

<script>
  document.getElementById("btn").addEventListener("click", function(event) {
    console.log(event);                // The full event object
    console.log(event.type);          // "click"
    console.log(event.target);        // The button element
    console.log(event.clientX, event.clientY); // Mouse coordinates
  });
</script>

| Property             | Description                              |
| -------------------- | ---------------------------------------- |
| `type`               | Type of event (e.g., "click", "keydown") |
| `target`             | Element on which event occurred          |
| `currentTarget`      | Element that the listener is attached to |
| `clientX`, `clientY` | Mouse coordinates relative to viewport   |
| `key`                | Key pressed (in keyboard events)         |
| `preventDefault()`   | Stops default browser behavior           |
| `stopPropagation()`  | Stops event from bubbling up             |


🔄 What is Event Delegation in JavaScript?
Event Delegation is a technique where instead of adding event listeners to each individual child element, you attach a single listener to a parent element, and use the event.target property to determine which child triggered the event.

This works because of event bubbling—events "bubble up" from the target element to its ancestors.

✅ Why Use Event Delegation?
🔹 Efficient: Fewer event listeners, especially for many dynamic elements.

🔹 Handles dynamically added elements automatically.

🔹 Easier to manage and clean up.

<ul id="fruitList">
  <li>Apple</li>
  <li>Banana</li>
  <li>Orange</li>
</ul>

<script>
  document.getElementById("fruitList").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
      alert("You clicked: " + event.target.textContent);
    }
  });
</script>


There are three different phases during the lifecycle of a JavaScript event.

Capturing Phase
Target Phase
Bubbling Phase
They follow the same order as listed above.

Capturing Phase is when the event goes down to the element. The target phase is when the event reaches the element and the Bubbling phase is when the event bubbles up from the element.