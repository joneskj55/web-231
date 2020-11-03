/*
============================================
; Title: Assignment 3.4 - Loops
; Author: Professor Krasso
; Date: 3 November 2020
; Modified By: Kevin Jones
; Description: Program that checks if
; numbers match.
;===========================================
*/
// This require() function will read and execute the jones-header.js file.
const header = require("../jones-header");

// This is our header output.
console.log(header.display("Kevin", "Jones", "Assignment 3.4"));

// Add a space for proper formatting.
console.log("");

// Game title.
console.log("-- DO THE NUMBERS MATCH GAME --");

// Create a variable and assign it a value between 1 and 10.
const myVar = 6;

// This function compares two arguments and will return either true if arguments are truthy or false if falsy.
function match(param1, param2) {
  if (param1 === param2) {
    return true;
  } else {
    return false;
  }
}

// This function will log a statement saying that your input will not match regardless of whether they are truthy or falsy.
function logMismatch(paramOne, paramTwo) {
  let notAMatch = paramOne + " does not match " + paramTwo + "!";
  return console.log(notAMatch);
}

// This function will log a statement saying that your input matches regardless of whether they are truthy or falsy.
function logMatch(oneParam, twoParam) {
  let theyMatch = oneParam + " does match " + twoParam + "!";
  return console.log(theyMatch);
}

// This for loop will loop through the numbers 1-10; the if/ else will decipher whether or not myVar matches localVar.
for (let i = 0; i < 10; i++) {
  let localVar = randomNumber(); // This will assign a random number to localVar.
  if (match(myVar, localVar)) {
    logMatch(myVar, localVar);
  } else {
    logMismatch(myVar, localVar);
  }
}

/**
 * Params: n/a
 * Response: integer value
 * Description: Returns a random integer value
 * Disclaimer: Do not remove this function as this is what you will be using to generate a random number
 */
function randomNumber() {
  return Math.floor(Math.random() * 10 + 1);
}
