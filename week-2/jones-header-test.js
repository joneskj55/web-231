/*
============================================
; Title:  header-test.js
; Author: Kevin Jones
; Date:   26 October 2020
; Description: This will display a formatted
; header
;===========================================
*/

// Node or CommonJS `require` function to read and execute the jones-header.js file
const header = require("../jones-header");

// header output
console.log(header.display("Kevin", "Jones", "2.2 - Header"));
