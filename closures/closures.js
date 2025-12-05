let firstName = 'John'; // Global scope variable

// Outer function
function fullName() {
    let middleName = 'Miller'; // Local scope variable // Outer function scope

    // Inner function // Closure
    function combine() {
        let lastName = 'Smith';  // Local scope variable // Inner function scope
        return `${firstName} ${middleName} ${lastName}`;
    }

    return combine(); // Call the inner function
}

console.log(lastName); // Error: lastName is not defined

console.log(fullName()); // Output: John Miller Smith