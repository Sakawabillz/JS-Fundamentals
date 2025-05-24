#!/usr/bin/node

// Get the argument from command line
const x = parseInt(process.argv[2], 10);

// Check if the argument is a valid integer
if (isNaN(x) || x < 1) {
  console.log("Missing number of occurrences");
} else {
  console.log("C is fun\n".repeat(x).trim());
}
