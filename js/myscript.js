/*
adding a multiline comment for js
see
*/
//this is a single line comment
console.log(4 + 2)
console.log("Tim Ross")
console.log("Pancakes")
//take-home update
// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string
const firstName = prompt("Enter your first name");
const reverseName = firstName.split('').reverse().join('')
alert(reverseName);

// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result
const oneNumber = prompt("Enter number value", 10);
const newNumber = prompt("Enter a new number", 10);
const addIt = parseInt(oneNumber) + parseInt(newNumber);
alert(addIt);
