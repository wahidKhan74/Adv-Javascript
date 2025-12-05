// Arrow function are a shorter syntax for writing function expressions in JavaScript.

function addition(num1, num2) {
    return num1 + num2;
}

console.log("Addition: " + addition(50, 100)); // Output: Addition: 150


// Using arrow function
// let sum =  (num1, num2) => {
//     return num1 + num2;
// }

let sum = (num1, num2) => num1 + num2; // concise body syntax
let sayHi = () => console.log("Hi there!"); // single line function body
let squreRoot = num => num * num;  // single parameter does not need parentheses


sayHi(); // Output: Hi there!
console.log("Square Root: " + squreRoot(5)); // Output: Square Root: 25
console.log("Sum: " + sum(50, 100)); // Output: Sum: 150