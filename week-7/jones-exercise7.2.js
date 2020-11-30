/*
============================================
; Title: Exercise 7.2 Constructor Functions
; Author: Kevin Jones
; Date: 30 November 2020
; Description: Program that creates a cons-
; ructor object and an array from said object,
; loops over the array and outputs the results.
;===========================================
*/

// Read and execute the jones-header.js file and display the output.
const header = require("../jones-header");
console.log(header.display("Kevin", "Jones", "Exercise 7.2"));

// Space for formatting.
console.log("");

// Create an employee constructor object with four (4) parameters/fields.
function Employee(id, firstName, lastName, title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}

// Populate an array with five (5) Employee objects.
let employees = [
  new Employee(1, "Thomas", "Edison", "Software Engineer"),
  new Employee(2, "Benjamin", "Franklin", "Programmer"),
  new Employee(3, "Nikola", "Tesla", "Project Manager"),
  new Employee(4, "Charles", "Babbage", "Product Manager"),
  new Employee(5, "Alexander", "Bell", "Business Analyst"),
];

// Loop over the array and output the results.
employees.forEach(function (employee) {
  console.log(
    employee.id +
      " " +
      employee.firstName +
      " " +
      employee.lastName +
      " " +
      employee.title
  );
});
