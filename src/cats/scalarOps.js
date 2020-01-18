import * as Base from "./base.js";

// Function: reverse a string
export const strReverse = s =>
  Base.str(s)
    .split("")
    .reverse()
    .join("");

// Function: increment a number
export const numInc = n => Base.num(n) + 1;
