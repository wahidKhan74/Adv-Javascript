let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let multiply = (a, b) => a * b;
let divide = (a, b) => a / b;

// ES6+ Code
const nums = [1, 2, 3, 4];

const squared = nums.map(n => n * n);

module.exports = {
    add,
    subtract,
    multiply,
    divide
}