/*
============================================
; Title:  Function Properties
; Author: Kevin Jones
; Date:   26 October 2020
; Description: Function properties exercise
;===========================================
*/

// This `require` function will read and execute the jones-header.js file.
const header = require("../jones-header");

// This is our header output.
console.log(header.display("Kevin", "Jones", "Exercise 2.3"));

// space
console.log("");

// This will define the function 'myName' with the property of my actual name.
function myName() {
  myName.kevin = "Kevin";
  return myName.kevin;
}

// This will be the output.
console.log("Hello " + myName() + " Jones!");
