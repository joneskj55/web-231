/*
============================================
; Title:  Functions (Assignment 2.4)
; Author: Kevin Jones
; Date:   26 October 2020
; Description: Function properties exercise
;===========================================
*/

// Node or CommonJS `require` function to read and execute the jones-header.js file
const header = require("../jones-header");

// header output
console.log(header.display("Kevin", "Jones", "Exercise 2.4"));

function fullName(firstName, lastName) {
  return firstName + " " + lastName;
}

function dateWriter(year, month, day) {
  return month + "/" + day + "/" + year;
}

function formatNumber(number, numOfFixedPositions) {
  return number.toFixed(numOfFixedPositions);
}

console.log("\n" + "Hello my name is " + fullName("Kevin", "Jones") + "!");

console.log(
  "\n" +
    "Today's date is " +
    dateWriter(2020, 10, 26) +
    " and the current temperature is " +
    formatNumber(33.599999, 1) +
    " degrees."
);
