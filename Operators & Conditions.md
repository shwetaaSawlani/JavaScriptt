1. Arithmetic Operators

| Operator | Description         | Example        |
| -------- | ------------------- | -------------- |
| `+`      | Addition            | `a + b`        |
| `-`      | Subtraction         | `a - b`        |
| `*`      | Multiplication      | `a * b`        |
| `/`      | Division            | `a / b`        |
| `%`      | Modulus (remainder) | `a % b`        |
| `**`     | Exponentiation      | `a ** b`       |
| `++`     | Increment           | `a++` or `++a` |
| `--`     | Decrement           | `a--` or `--a` |


2. Assignment Operators
| Operator | Description         | Example   |
| -------- | ------------------- | --------- |
| `=`      | Assign value        | `a = b`   |
| `+=`     | Add and assign      | `a += b`  |
| `-=`     | Subtract and assign | `a -= b`  |
| `*=`     | Multiply and assign | `a *= b`  |
| `/=`     | Divide and assign   | `a /= b`  |
| `%=`     | Modulus and assign  | `a %= b`  |
| `**=`    | Exponent and assign | `a **= b` |

3. Comparison Operators
| Operator | Description                  | Example   |
| -------- | ---------------------------- | --------- |
| `==`     | Equal (loose)                | `a == b`  |
| `===`    | Equal (strict: value + type) | `a === b` |
| `!=`     | Not equal (loose)            | `a != b`  |
| `!==`    | Not equal (strict)           | `a !== b` |
| `>`      | Greater than                 | `a > b`   |
| `<`      | Less than                    | `a < b`   |
| `>=`     | Greater than or equal to     | `a >= b`  |
| `<=`     | Less than or equal to        | `a <= b`  |

4. Logical Operators
| Operator | Description | Example  |           
| -------- | ----------- | -------- | 
| `&&`     | Logical AND | `a && b` |          
| `||`     | LOgical OR             |    
| `!`      | Logical NOT | `!a`     |          


&& returns true if both operands are true.
|| returns true if at least one operand is true.
! negates the boolean value.

5. Type Operators
| Operator     | Description           | Example                |
| ------------ | --------------------- | ---------------------- |
| `typeof`     | Returns type of value | `typeof 123`           |
| `instanceof` | Checks instance       | `obj instanceof Array` |

6. Ternary operator
| Syntax                      | Description       |
| --------------------------- | ----------------- |
| `condition ? expr1 : expr2` | If-else shorthand |

7. Bitwise operator 
| Operator | Description           | Example   |     
| -------- | --------------------- | --------- | 
| `&`      | AND                   | `a & b`   |     
| ` | `    | OR                    |  ' a| b`  | 
| `^`      | XOR                   | `a ^ b`   |     
| `~`      | NOT                   | `~a`      |     
| `<<`     | Left shift            | `a << 2`  |     
| `>>`     | Right shift           | `a >> 2`  |        
| `>>>`    | Zero-fill right shift | `a >>> 2` |     

8. Nullish Coalescing & Optional Chaining

| Operator | Description                         | Example     |
| -------- | ----------------------------------- | ----------- |
| `??`     | Nullish coalescing (null/undefined) | `a ?? b`    |
| `?.`     | Optional chaining                   | `obj?.prop` |

 ?? Nullish Coalescing Operator
Purpose:
Returns the right-hand value only if the left-hand value is null or undefined.
It does NOT treat 0, false, or "" as nullish.

let x = null;
let y = "Hello";
console.log(x ?? y); // Output: Hello

let a = 0;
console.log(a ?? 100); // Output: 0 (because 0 is NOT null or undefined)

let b;
console.log(b ?? "Default"); // Output: "Default"


?. Optional Chaining Operator
Purpose:
Safely access nested object properties or methods without throwing an error if a reference is null or undefined.

 Syntax:

let value = obj?.property;
let result = obj?.method?.();
 
 Examples:

let user = {
  name: "Shweta",
  address: {
    city: "Indore"
  }
};

console.log(user.address?.city); // Output: Indore
console.log(user.contact?.phone); // Output: undefined (no error thrown)
 Without ?., this would throw an error:

console.log(user.contact.phone); // ❌ Error: Cannot read properties of undefined

9. !!
The !! (double exclamation mark) in JavaScript is used to convert any value to a boolean (true/false).

 What it does:
!value — converts the value to boolean and negates it.

!!value — converts the value to boolean without negation.

Syntax:

let result = !!value;
Examples:

console.log(!!"hello");   // true  (non-empty string)
console.log(!!"");        // false (empty string)
console.log(!!123);       // true  (non-zero number)
console.log(!!0);         // false (zero is falsy)
console.log(!!null);      // false
console.log(!!undefined); // false
console.log(!!{});        // true  (object is truthy)
console.log(!![]);        // true  (array is truthy)