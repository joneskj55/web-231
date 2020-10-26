/*
============================================
; Title:  Function Properties
; Author: Kevin Jones
; Date:   26 October 2020
; Description: Function properties exercise
;===========================================
*/

// Node or CommonJS `require` function to read and execute the jones-header.js file
const header = require("../jones-header");

// header output
console.log(header.display("Kevin", "Jones", "Exercise 2.3"));

// space
console.log("");

// create function 'myName' with property of my name
function myName() {
  myName.kevin = "Kevin";
  return myName.kevin;
}

// output
console.log("Hello " + myName() + " Jones!");
