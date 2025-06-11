const readline = require('readline');

// Create readline interface for input/output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt user for input
rl.question('Enter your name: ', (name) => {
  // Output the result
  console.log(`Hello, ${name}!`);

  // Close the interface
  rl.close();
});

/*
 the readline module provides an interface for reading input from a readable stream (like process.stdin) one line at a time.
 
readline.createInterface(options)
Creates an interface with input and optional output.

rl.question(prompt, callback)
Displays a prompt and waits for user input.

rl.on('line', callback)
Emits whenever the input stream receives a new line.

rl.close()
Closes the readline interface.
*/