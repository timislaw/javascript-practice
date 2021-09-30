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

// Ask for the user's first name
const newFirst = prompt("Enter new first name");
// Ask for the user's last name
const newLast = prompt("Enter new last name");
// Log the user's first name to the console
console.log(newFirst);
// Alert the user's last name
alert(newLast);

// *BONUS* 
// Ask for the user's birthday
let userBirth = prompt("Enter your birthday", 06/21/1992);
// Ask the user to confirm their birthday input
if (confirm(userBirth)){
    txt = "Happy belated birthday??";
}
    else {
        txt = "Looks like this was the wrong birthday";
    }


// Alert the user's birthday