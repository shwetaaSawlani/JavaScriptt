let str = "gammaedge";

if (str.length >= 2) {
  let firstChar = str[0].toUpperCase();
  let middle = str.slice(1, -1);
  let lastChar = str[str.length - 1].toUpperCase();

  let result = firstChar + middle + lastChar;
  console.log(result); 
} else if (str.length === 1) {
  console.log(str.toUpperCase());
} else {
  console.log("Empty string");
}
