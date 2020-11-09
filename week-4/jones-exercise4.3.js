/*
============================================
; Title: Exercise 4.3 Filtering
; Author: Kevin Jones
; Date: 9 November 2020
; Description: Program that checks if array
; value matches string value.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 4.3"));

// Space for formatting.
console.log("");

// Create an array of 5 vehicles.
let vehicles = ["Car", "Truck", "Motorcycle", "Airplane", "Bus"];

// Create a function with two parameters that iterates over the array parameter.
function getValue(arrayParam, stringParam) {
  // Check if string parameter matches current array value in loop.
  for (let i = 0; i < arrayParam.length; i++) {
    if (stringParam === arrayParam[i]) {
      // Output the matching value.
      console.log(arrayParam[i]);
    }
  }
}

// Display array items.
console.log("-- DISPLAYING ARRAY ITEMS --");
for (let i = 0; i < vehicles.length; i++) {
  console.log(vehicles[i]);
}

// Space for formatting.
console.log("");

// Display selected value.
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Motorcycle");

// Space for formatting.
console.log("");

// Display selected value.
console.log("-- SELECTED VALUE --");
getValue(vehicles, "Bus");
