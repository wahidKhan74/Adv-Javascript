// function : function are resuable building block of code.

// non parameterized function
function showMessage() {
    console.log("Hello, Adv JavaScript World!");
}

// one parameterized function
function greet(name) {
    return "Hello, " + name + "!";
}

// multi parameterized function
function add(a, b) {
    return a + b;
}

// function calling

let result = showMessage(); // Output: Hello, Adv JavaScript World!
showMessage("Hi Today is a good day."); // Output: Hello, Adv JavaScript World!

console.log(result); // Output: undefined

let greetings1 = greet("Alice");
let greetings2 = greet("John");
console.log(greetings1);
console.log(greetings2);

let sum1 = add(5, 10);
let sum2 = add(20, 30);

console.log(sum1); // Output: 15
console.log(sum2); // Output: 50







