/*
============================================
; Title:  Discussion Board 5.1 - Keyed -
; Collections
; Author: Kevin Jones
; Date: 16 November 2020
; Description: Keyed Collection program
; with at least two errors
;===========================================
*/

// declare new Map() variable
let javascriptTypes = new Map();

// add keys and values to javascriptTypes
javascriptTypes
  .set(46, "number")
  .set(true, "boolean")
  .set("cheeseburger", "string")
  .set({}, "object")
  .set(function () {}, "function");

// iterate through javascriptTypes & return keys and values in console
for (let [key, value] of javascriptTypes) {
  if (value === "object") {
    console.log(
      "In the JavaScript programming language " + key + " is an " + value + "."
    );
  } else {
    console.log(
      "In the JavaScript programming language " + key + " is a " + value + "."
    );
  }
}

/* Expected Output
In the JavaScript programming language 46 is a number.
In the JavaScript programming language true is a boolean.
In the JavaScript programming language cheeseburger is a string.
In the JavaScript programming language [object Object] is an object.
In the JavaScript programming language function() {} is a function. */
