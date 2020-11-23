/*
============================================
; Title: Assignment 6.4 Nested Object Literals
; Author: Kevin Jones
; Date: 23 November 2020
; Description: Program that uses map() to
; filter an array for specific data and
; forEach() to iterate and output said data.
;===========================================
*/

// require() will read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Assignment 6.4"));

// Space for formatting.
console.log("");

// Create an object literal ticket with a nested object literal person.
let ticket = {
  id: 105,
  name: "Broken Link",
  dateCreated: new Date().toLocaleDateString(),
  priority: 1,
  person: {
    id: 199,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer 1",
  },
};

// Display the results.
console.log(
  "Ticket " +
    ticket.id +
    " was created on " +
    ticket.dateCreated +
    " and assigned to employee " +
    ticket.person.firstName +
    " " +
    ticket.person.lastName +
    " " +
    "(" +
    ticket.person.jobTitle +
    ")."
);
