// function expression 
// 1. labelled function expression

let displayMessage = function showMessage() {
    // function body
    console.log("Display :: Hello, World!");
    return 0;
}

// showMessage(); // This will cause an error: showMessage is not defined
// console.log(displayMessage);

displayMessage(); // Calling the function to display the message


// 2. function expression with anonymous function
let displayGreetings = function (name) {
    console.log("Hello, " + name + "!");
}

displayGreetings("Alice"); // Calling the function with an argument
displayGreetings("Bob");