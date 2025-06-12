Optional chaining is a feature (?.) that lets you safely access deeply nested object properties without causing an error if a property is null or undefined.

Syntax:

object?.property
object?.[expression]
object?.method?.()

const user = {
  profile: {
    name: "Shweta"
  }
};

console.log(user.profile.name);         //  Works
console.log(user.address.city);         //  Error: Cannot read property 'city' of undefined

console.log(user.address?.city);        //  undefined (no error)


Notes:
Only checks for undefined or null, not for other falsy values like false, 0, or ''.

Do not overuse it; it may hide bugs if you're expecting certain data to be there.