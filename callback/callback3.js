// A simple calculator that uses a callback function to perform operations 
// (addition, subtraction, multiplication, division)

function calculator(a, b, operation) {
    return operation(a, b);
}

// addition operation
function add(num1, num2) {
    return num1 + num2;
}

// subtraction operation
function subtract(num1, num2) {
    return num1 - num2;
}

// multiplication operation
function multiply(num1, num2) {
    return num1 * num2;
}

// division operation
function divide(num1, num2) {
    if (num2 === 0) { 
        return "Error: Division by zero";
    }
    return num1 / num2;
}

function avg(num1, num2) {
    return (num1 + num2) / 2;
}

// function calls with different operations
let addResult = calculator(100, 50, add);        // 150
console.log('Addition: '+ addResult);

let subResult = calculator(100, 50, subtract); // 50
console.log(`Subtraction: ${subResult}`);

let mulResult = calculator(100, 50, multiply); // 5000
console.log(`Multiplication: ${mulResult}`);

let divResult = calculator(100, 50, divide);   // 2
console.log(`Division: ${divResult}`);

let avgResult = calculator(100, 50, avg);   // 75
console.log(`Average: ${avgResult}`);




console.log("-------------- Strings ---------------");


// String literals
let str = "Hello World";
let str1 ='Hello World';

// String template literals
let str3 = ` Hello World ${2+3} , ${str}`; // Expression inside ${}
console.log(str3);