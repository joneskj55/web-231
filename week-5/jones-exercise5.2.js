/*
============================================
; Title: Exercise 5.2 ES5 - Built-In Functions
; Author: Kevin Jones
; Date: 16 November 2020
; Description: Program that utilizes forEach()
; to iterate over an array of foods.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 5.2"));

// Space for formatting.
console.log("");

// Create a String array of my five favorite food types.
let favFoods = ["Oysters", "Shrimp", "Steak", "Tacos", "Sushi"];

// Using JavaScripts built-in forEach() function, iterate over the array and output the results.
favFoods.forEach(function (food) {
  console.log(food);
});
