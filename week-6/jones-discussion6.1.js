/*
============================================
; Title:  Discussion Board 6.1 - Objects
; Author: Kevin Jones
; Date: 23 November 2020
; Description: Object property program with
; at least two errors.
;===========================================
*/

// create objects
let playerOne = {
  name: "LeBron James",
  age: 35,
  height: "6 ft. 9 in."
  weight: 250
};

let playerTwo = {
  name: "Kevin Durant",
  age: 32,
  height: "6 ft. 10 in.",
  weight: 240
};

// display output
console.log(
  "\n" +
    "Who would win a one on one between " +
    playerOne +
    " and " +
    playerTwo +
    "?"
);
console.log(
  playerOne.name +
    " is " +
    playerOne.age +
    " years old, is " +
    playerOne.height +
    " and weighs " +
    playerOne.weight +
    " pounds."
);
console.log(
  playerTwo.name +
    " is " +
    playerTwo.age +
    " years old, is " +
    playerTwo.height +
    " and weighs " +
    playerTwo.weight +
    " pounds."
);

/* Expected Output
Who would win a one on one between LeBron James and Kevin Durant?
LeBron James is 35 years old, is 6 ft. 9 in. and weighs 250 pounds.
Kevin Durant is 32 years old, is 6ft. 10 in. and weighs 240 pounds.
 */
