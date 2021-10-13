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
// let numOne = prompt("Enter the first number");
// let numTwo = prompt("Enter the second number");
// numOne = parseInt(numOne);
// numTwo = parseInt(numTwo);
// console.log(numOne >= numTwo);

// if (typeof numOne && typeof numTwo !== "number"){
//     alert(`This is not a number`)
// }
// const num1str = prompt('Enter n 1');
// const num2str = prompt('enter num 2');

// const num1 = parseInt(num1str);
// const num2 = parseInt(num2str);

// if (Number.isNaN(num1) || Number.isNaN(num2)) {
    
//     alert("Not a number");

// } else {

//     if (num1 > num2) {
//         alert(num1);
//     } else if (num1 === num2) {
//         alert('both equal');
//     } else {
//         alert(num2);
//     }
// }
/*

    Create a new codepen
    Write a function that accepts a number as an argument
    Alert the user whether the given number is even or odd
    Call your function

*/
// function oddEven(number) {
//     if (number %2 == 0) {
//         alert('even');
//     } else if (number !== Number){ //resolve this, doesnt run
//         alert('not a number');
//     } else {
//         alert('odd');
//     }
// }

// const typeNumber = prompt("enter even or odd #");

// oddEven(typeNumber);
// function NewPassword(inputtxt)
// {
//     const passWord = prompt('Enter password');
//     if(inputtxt.valueOf.match(passWord)){
//         alert("Correct")
//         return true;
//     } else {
//         alert('Wrong, please enter a password')
//         return false;
//     }
// }
// NewPassword()

// function isEven(number) {

//     const numberfied = Number(number);

//     if (Number.isNaN(numberfied) || numberfied % 1 !==0 || typeof number !== "number") {
//         throw Error("must be whole integer");
//     }

// console.log(number);

//     //modulus
//     //mod
//     //% <---- mod operator, means remainder
//     //remainder will be 0 if we divide an even number by 2

//     if (number % 2 === 0) {
//         return true;
//     }

//         return false;

// }

// console.log(isEven(-3));
// console.log(isEven(-2));
// console.log(isEven(-0));
// console.log(isEven(0));
// console.log(isEven(+8));
// console.log(isEven());
// console.log(isEven("sdlkfjsldf"));
// console.log(isEven("5"));
// console.log(isEven("2"));

// function isInRange(text, min, max) {

//     const passLength = text.length;

//     if(length >= min && length <= max) {
//         return true;
//     } 

//         return false;


// }

// console.log(isInRange("1234567", 6, 20));

// function startsWithLetter(text) {

//     const firstLetter = text.charAt(0).toLowerCase();

//     const letters = "abcdefghiklmnopqrstuvwxyz"

//     if (firstLetter && letters.includes(firstLetter)) {
//         return true;
//     }

//     return false


// }

// // console.log(startsWithLetter("abc"));
// // console.log(startsWithLetter("1bc"));
// // console.log(startsWithLetter("%bc"));
// // console.log(startsWithLetter(""));
// // console.log(startsWithLetter(4));
// // console.log(startsWithLetter(undefined));

// function isValidPass(password) {
//     if (startsWithLetter(password) && isInRange(password, 6, 20)) {
//         return true;
//     }

//     return false;


// }


// console.log(isValidPass("")); //false
// console.log(isValidPass("f1234")); // false
// console.log(isValidPass("f123456789")); //true
// console.log(isValidPass("F12345678")); //true
// console.log(isValidPass("%654576")); //false
// console.log(isValidPass("-%235564")); //false
// console.log(isValidPass("199834859893459838989548359834894589389589438953")); //false

//fizzbuzz challenge
// function fizzBuzz(){
//     for (let i = 1; i <= 100; i++){
//         if ( i % 3 === 0 && i % 5 === 0) {
//             console.log("FizzBuzz");
//         } else if ( i % 3 === 0) {
//             console.log("Fizz");
//         } else if ( i % 5 === 0) {
//             console.log("Buzz");
//         } else {
//             console.log(i);
//         }
//     }
// }
function fizzBuzz(){
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log("FizzBuzz");
        } else if (i % 3 === 0){
        console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}