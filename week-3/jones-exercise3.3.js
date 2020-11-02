/*
============================================
; Title: Exercise 3.3 Control Statements
; Author: Professor Krasso
; Date: 2 November 2020
; Modified By: Kevin Jones
; Description: Program that refactors if/else
; to switch statement.
;===========================================
*/
// This require() function will read and execute the jones-header.js file.
const header = require("../jones-header");

// This is our header output.
console.log(header.display("Kevin", "Jones", "Exercise 3.3"));

// Add a space for formatting.
console.log("");

// This is our program variable.
let eventKeyCode = 13;

// This is the refactored if/else statement.
switch (eventKeyCode) {
  case 13:
    console.log("The enter key was pressed.");
    break;
  case 16:
    console.log("The shift key was pressed.");
    break;
  case 32:
    console.log("The spacebar key was pressed.");
    break;
  case 8:
    console.log("The backspace / delete key was pressed.");
    break;
  default:
    console.log("Unrecognized key.");
}
