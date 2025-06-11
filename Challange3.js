/*check if the string is palindrom or not */

function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  return str === reversed;
}


console.log(isPalindrome("madam"));     
console.log(isPalindrome("hello"));

/*reverse each word of string in a sentence */

function reverse(str) {
  let reversed = str.split('').reverse().join('');
  return reversed;
}

console.log(reverse(`hi my name is shweta`));  


