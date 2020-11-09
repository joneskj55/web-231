/*
============================================
; Title: Exercise 4.4 Predicates
; Author: Kevin Jones
; Date: 9 November 2020
; Description: Program that sorts array
; values alphabetically and filters values
; based on truthy or falsy state.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Assignment 4.4"));

// Space for formatting.
console.log("");

// Create a string array of 5 states.
let states = ["Alabama", "Nebraska", "Iowa", "California", "Nevada"];

// Display original array.
console.log("-- ORIGINAL ARRAY --");
for (let i = 0; i < states.length; i++) {
  console.log(states[i]);
}

// Add space for formatting.
console.log("");

// Sort array alphabetically.
console.log("-- SORTED ARRAY --");
for (let i = 0; i < states.length; i++) {
  console.log(states.sort()[i]);
}

// Create a function with two string parameters. Iterate over first param. Return the value if both params match.
function getState(param1, param2) {
  for (let i = 0; i < param1.length; i++) {
    if (param1[i] === param2) {
      return param1[i];
    }
  }
}

// Add space for formatting.
console.log("");

// Display selected value.
console.log("-- SELECTED VALUE --");
console.log(getState(states, "Iowa"));
