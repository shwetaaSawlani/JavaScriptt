In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the primitive data types in JavaScript.

🔹 How to create a string:

let str1 = "Hello";
let str2 = 'World';
let str = new String("Hello");
let str3 = `Hi, ${str1} ${str2}`; // Template literal

| Type            | Code                             | Type of `str`        |
| --------------- | -------------------------------- | -------------------- |
| **Literal**     | `let str = "Hello";`             | `string` (primitive) |
| **Constructor** | `let str = new String("Hello");` | `object`             |


let str1 = "Hello";               // Primitive string
let str2 = new String("Hello");   // String object

console.log(typeof str1); // "string"
console.log(typeof str2); // "object"

console.log(str1 == str2);  // true (value comparison)
console.log(str1 === str2); // false (type + value)



|| Method                | Syntax                        | Description                                   |
| --------------------- | ----------------------------- | --------------------------------------------- |
| **`length`**          | `str.length`                  | Returns the number of characters              |
| **`charAt()`**        | `str.charAt(index)`           | Returns the character at given index          |
| **`toUpperCase()`**   | `str.toUpperCase()`           | Converts string to uppercase                  |
| **`toLowerCase()`**   | `str.toLowerCase()`           | Converts string to lowercase                  |
| **`trim()`**          | `str.trim()`                  | Removes whitespace from both ends             |
| **`trimStart()`**     | `str.trimStart()`             | Removes whitespace from the start             |
| **`trimEnd()`**       | `str.trimEnd()`               | Removes whitespace from the end               |
| **`substring()`**     | `str.substring(start, end)`   | Extracts part of string (excluding `end`)     |
| **`startsWith()`**    | `str.startsWith("text")`      | Checks if string starts with given text       |
| **`endsWith()`**      | `str.endsWith("text")`        | Checks if string ends with given text         |
| **`concat()`**        | `str.concat("more")`          | Concatenates (joins) strings                  |
| **`includes()`**      | `str.includes("text")`        | Checks if text is present in string           |
| **`lastIndexOf()`**   | `str.lastIndexOf("text")`     | Returns last index of substring               |
| **`indexOf()`**       | `str.indexOf("text")`         | Returns first index of substring              |
| **`padStart()`**      | `str.padStart(length, "pad")` | Pads string from the start                    |
| **`padEnd()`**        | `str.padEnd(length, "pad")`   | Pads string from the end                      |
| **`repeat()`**        | `str.repeat(count)`           | Repeats the string `count` times              |
| **`replaceAll()`**    | `str.replaceAll("a", "b")`    | Replaces all matches                          |
| **`slice()`**         | `str.slice(start, end)`       | Extracts part of a string                     |
| **`valueOf()`**       | `str.valueOf()`               | Returns the primitive string value            |
| **`split()`**         | `str.split("delimiter")`      | Splits string into array                      |
| **`fromCharCode()`**  | `String.fromCharCode(97)`     | Converts char code to character (`'a'`)       |
| **`fromCodePoint()`** | `String.fromCodePoint(9731)`  | Converts code point to character              |
| **`raw()`**           | `String.raw\`Hello\n\`\`      | Returns raw string without escapes            |
| **`localeCompare()`** | `str1.localeCompare(str2)`    | Compares strings based on locale              |
| **`search()`**        | `str.search(/regex/)`         | Searches string using regex                   |
| **`compare`**         | `str1.localeCompare(str2)`    | (No `compare()` method — use `localeCompare`) |

| `.split(",")`        | Splits string into array                | `"a,b,c".split(",")` → `["a", "b", "c"]` |

the only difference between slice and substring, that substring donot accept negative values.

compare() does not exist directly; use localeCompare() instead.

fromCharCode() and fromCodePoint() are static methods on the String class, not on string instances.

replaceAll() is available in modern browsers (ES2021+).

LocaleCompare()
 What it does:
Compares two strings based on locale (language & region rules).

Returns:

-1 → if string1 < string2

0 → if string1 == string2

1 → if string1 > string2

 search()
 What it does:
Searches a string using a regular expression.

Returns the index of the first match, or -1 if not found

String.raw()
 What it does:
It returns a raw string where escape sequences (like \n, \t) are not interpreted. or in file paths/.

Mainly used with template literals.


🔹 What are Template Literals?
Template literals are a modern way (introduced in ES6) to create strings in JavaScript using backticks (`) instead of single or double quotes.

Syntax:

`This is a template literal`
🔹 Features of Template Literals:
Multiline Strings
String Interpolation (Embedding variables & expressions)
Expression Evaluation

 What is String Interpolation?
It’s the process of inserting variables or expressions inside a string using ${} within a template literal.

🔸 Example:
let name = "Shweta";
let age = 22;

let message = `My name is ${name} and I am ${age} years old.`;

console.log(message);
// Output: My name is Shweta and I am 22 years old.