/*
============================================
; Title: Exercise 5.3 - Object Collections
; Author: Kevin Jones
; Date: 16 November 2020
; Description: Program that utilizes forEach()
; to iterate over an array of objects.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 5.3"));

// Space for formatting.
console.log("");

// Create an array of 5 composer objects with firstName, lastName, genre and rating variables.
let composers = [
  {
    firstName: "Ludwig van",
    lastName: "Beethoven",
    genre: "Classical",
    rating: 8,
  },
  {
    firstName: "Wolfgang",
    lastName: "Mozart",
    genre: "Classical",
    rating: 10,
  },
  {
    firstName: "Johann",
    lastName: "Bach",
    genre: "Classical",
    rating: 9,
  },
  {
    firstName: "Joseph",
    lastName: "Haydn",
    genre: "Classical",
    rating: 6,
  },
  {
    firstName: "Franz",
    lastName: "Schubert",
    genre: "Classical",
    rating: 5,
  },
];

console.log("-- COMPOSERS --");

// Using JavaScripts built-in forEach() function, iterate over the composer objects and output the results.
composers.forEach(function (composer) {
  console.log(
    "Last Name: " +
      composer.lastName +
      ", " +
      "Genre: " +
      composer.genre +
      ", " +
      "Rating: " +
      composer.rating
  );
});
