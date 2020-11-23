/*
============================================
; Title: Exercise 6.2 Exception Handling
; Author: Kevin Jones
; Date: 23 November 2020
; Description: Program that uses a try, catch,
; and finally block to catch and display an
; error.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 6.2"));

// Space for formatting.
console.log("");

// Create an array of berries.
let berryList = [
  "blueberry",
  "strawberry",
  "blackberry",
  "raspberry",
  "cranberry",
];

// Check to see if the amount in sumOfList equals the amount of berryList. If so, log the success message. If not, throw the error message.
try {
  let sumOfList = 4;
  if (sumOfList !== berryList.length)
    throw "Incorrect number of list elements.";
  console.log(
    berryList.length + " is the correct number of elements! Good job!"
  );
} catch (e) {
  console.log("Catch clause: " + e);
} finally {
  console.log("Finally clause reached...");
}
