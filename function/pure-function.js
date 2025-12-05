//Pure Function : A pure function is a function that, 
// given the same input, will always return the same output and does not have any side effects 
// (i.e., it does not modify any external state or variables).

function calculateBill(price, qauntity, taxRate) {
    const total = price * qauntity;
    const tax = total * taxRate;
    return total + tax;
}

// Example usage:
const bill1 = calculateBill(100, 2, 0.05); // 210
console.log(bill1); // 210
const bill2 = calculateBill(100, 2, 0.05);   // 210
console.log(bill2); // 210

// Both calls to calculateBill with the same arguments return the same result (210)
// and do not modify any external state, making it a pure function.


let discountRate = 0.1; // External variable

// Impure function: This function relies on an external variable (discountRate),
// which can lead to different outputs for the same inputs if discountRate changes.
function calculateDiscountedBill(price, quantity) {
    const total = price * quantity;
    const discount = total * discountRate;
    return total - discount;
}

// Example usage:
const discountedBill1 = calculateDiscountedBill(100, 2); // 180
console.log(discountedBill1); // 180

// Changing the external variable
discountRate = 0.2;
const discountedBill2 = calculateDiscountedBill(100, 2); // 160
console.log(discountedBill2); // 160
