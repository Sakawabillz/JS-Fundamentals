const number = parseInt(process.argv[2]);

if (isNaN(number) || number <= 0) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  let output = "";
  while (i < number) {
    output += "C is fun\n";
    i++;
  }
  console.log(output.trim());
}
