"use strict";

var add = function add(a, b) {
  return a + b;
};
var subtract = function subtract(a, b) {
  return a - b;
};
var multiply = function multiply(a, b) {
  return a * b;
};
var divide = function divide(a, b) {
  return a / b;
};

// ES6+ Code
var nums = [1, 2, 3, 4];
var squared = nums.map(function (n) {
  return n * n;
});
module.exports = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide
};