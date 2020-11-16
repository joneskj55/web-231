/*
============================================
; Title: Assignment 5.4 Filtering/Reducing
; Complex Data Structures
; Author: Kevin Jones
; Date: 16 November 2020
; Description: Program that uses map() to
; filter an array for specific data and
; forEach() to iterate and output said data.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Assignment 5.4"));

// Space for formatting.
console.log("");

// Array from exercise 5.3
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

// Formatting
console.log("-- COMPOSER BY RATING --");

// Using JavaScripts built-in map() function, create a filtered array of composers by rating.
let composersByRating = composers.map(function (composer) {
  return "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName;
});

// Using JavaScripts built-in forEach() function, iterate over composersByRating and output the results.
composersByRating.forEach(function (composer) {
  console.log(composer + "\n");
});

// Formatting
console.log("-- COMPOSER BY GENRE--");

// Using JavaScripts built-in map() function, create a filtered array of composers by genre.
let composersByGenre = composers.map(function (composer) {
  return "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName;
});

// Using JavaScripts built-in forEach() function, iterate over composersByGenre and output the results.
composersByGenre.forEach(function (composer) {
  console.log(composer + "\n");
});
