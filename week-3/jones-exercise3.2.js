/*
============================================
; Title: Exercise 3.2 Pattern Matching
; Functions
; Author: Kevin Jones
; Date: 2 November 2020
; Description: Pattern Matching Functions
;===========================================
*/
// This `require` function will read and execute the jones-header.js file.
const header = require("../jones-header");

// This is our header output.
console.log(header.display("Kevin", "Jones", "Exercise 3.2"));

// ----------------------------- PROBLEM 1 ----------------------------- //

// This function compares two arguments and will return either true if arguments are truthy or false if falsy.
function match(param1, param2) {
  if (param1 === param2) {
    return true;
  } else {
    return false;
  }
}

// This will test our match() function.
console.log("\n" + match(1, NaN));
console.log(match(true, true));

// ----------------------------- PROBLEM 2 ----------------------------- //

// This function will log a statement saying that your input will not match regardless of whether they are truthy or falsy.
function logMismatch(paramOne, paramTwo) {
  let notAMatch = paramOne + " and " + paramTwo + " do not match!";
  return console.log("\n" + notAMatch);
}

// ----------------------------- PROBLEM 3 ----------------------------- //

// This function will log a statement saying that your input matches regardless of whether they are truthy or falsy.
function logMatch(oneParam, twoParam) {
  let theyMatch = oneParam + " and " + twoParam + " do match!";
  return console.log("\n" + theyMatch);
}

// ----------------------------- PROBLEM 4 ----------------------------- //

// Six local test variables with default values.
let firstVariable = "Truck";
let secondVariable = "Car";
let thirdVariable = "Bike";
let fourthVariable = "Bike";
let fifthVariable = "Four";
let sixthVariable = "Three";

// Conditional statements to test our functions.
if (match(firstVariable, secondVariable)) {
  logMatch(firstVariable, secondVariable);
} else {
  logMismatch(firstVariable, secondVariable);
}

if (match(thirdVariable, fourthVariable)) {
  logMatch(thirdVariable, fourthVariable);
} else {
  logMismatch(thirdVariable, fourthVariable);
}

if (match(fifthVariable, sixthVariable)) {
  logMatch(fifthVariable, sixthVariable);
} else {
  logMismatch(fifthVariable, sixthVariable);
}
