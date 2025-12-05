// Rest Operator : A rest operator allows a function to accept an 
// indefinite number of arguments as an array.

function sumAll(num1, num2, num3,){
    return num1 + num2 + num3;
}

function sumRestAll(...numbers){
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Example usage:
const total1 = sumAll(10, 20, 30); // 60
console.log("Total 1", total1); // 60

const total2 = sumRestAll(10, 20, 30, 40, 50); // 150
console.log("Total 2", total2); // 150

const total3 = sumRestAll(5, 15, 30, 40, 50, 56, 78, 89,100, 200); // 663
console.log("Total 3", total3); // 663


console.log("-----------------");

function addItesmsToCart(cartId, ...items) {
    console.log(`Cart ID: ${cartId}`);
    items.forEach((item, index) => {
        console.log(`Item ${index + 1}: ${item}`);
    });
}

// Example usage:
addItesmsToCart("CART123", "Apple", "Banana", "Orange", "Mango", "Grapes");

