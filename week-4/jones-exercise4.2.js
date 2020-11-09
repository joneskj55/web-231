/*
============================================
; Title: Exercise 4.2 Arrays
; Functions
; Author: Kevin Jones
; Date: 9 November 2020
; Description: Program that iterates over an
; array.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 4.2"));

// Space for formatting.
console.log("");

// Create a string array of five fruit items.
let fruit = ["Apple", "Orange", "Banana", "Mango", "Pear"];

// Create a function with one parameter. Iterate over parameterized array and output results.
function getFruit(arrayParam) {
  for (let i = 0; i < arrayParam.length; i++) {
    console.log(arrayParam[i]);
  }
}

// Call the function and pass in the fruit array.
getFruit(fruit);
