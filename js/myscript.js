/*
adding a multiline comment for js
see
*/
//this is a single line comment
/*console.log(4 + 2)
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
*/
// Ask for the user's first name
/*const newFirst = prompt("Enter new first name");
// Ask for the user's last name
const newLast = prompt("Enter new last name");
// Log the user's first name to the console
console.log(newFirst);
// Alert the user's last name
alert(newLast);

// *BONUS* 
// Ask for the user's birthday
let userBirth = prompt("Enter your birthday", 07-25);
// Ask the user to confirm their birthday input
if (confirm(userBirth)){
    alert(userBirth);
}
// Alert the user's birthday*/
// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number
// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number
/*let firstNum = prompt("enter the first number");
let secondNum = prompt("enter the second number");
firstNum = parseInt(firstNum);
secondNum = parseInt(secondNum);

console.log(firstNum >= secondNum);

if (typeof firstNum && typeof secondNum !== "number"){
    alert && prompt(`This isn't a number.`)
} else if (firstNum > secondNum){
    alert(`${firstNum} is larger!`)
} else if(firstNum === secondNum) {
    alert(`${firstNum} is equal to ${secondNum}`)
} else {
    alert(`${secondNum} is larger!`)
}
*/
let numOne = prompt("Enter the first number");
let numTwo = prompt("Enter the second number");
numOne = parseInt(numOne);
numTwo = parseInt(numTwo);
console.log(numOne >= numTwo);

if (typeof numOne && typeof numTwo !== "number"){
    alert(`This is not a number`)
}
