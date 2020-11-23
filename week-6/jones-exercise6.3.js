/*
============================================
; Title: Exercise 6.3 Object Literals
; Author: Kevin Jones
; Date: 23 November 2020
; Description: Program that creates a ticketing
; system using an object literal and prints
; the fields in a single string.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 6.3"));

// Space for formatting.
console.log("");

// Create an object literal for a ticketing system with id, name, and requestor fields.
let ticket = {
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones",
};

// Display each of the fields in a single string.
console.log(ticket);

// Formatting
console.log("");

// Same as above using getter and setter method.
console.log("-- USING GETTER AND SETTER --");
let ticket1 = {
  id: 101,
  name: "Help Desk Support",
  requestor: "Bob Jones",

  get completeTicket() {
    return (
      "{id: " +
      this.id +
      "," +
      " name: " +
      this.name +
      "," +
      " requestor: " +
      this.requestor +
      "}"
    );
  },

  set completeTicket(val) {
    this.completeTicket = val;
  },
};
console.log(ticket1.completeTicket);
