// Spread Operator : The spread operator allows an iterable such as an array or string 
// to be expanded in places where zero or more arguments (for function calls) 
// or elements (for array literals) are expected.

let amounts = [1000, 2000, 3000];
let updatedAmounts = [500, ...amounts, 4000, 5000];


let employee = {
    name: "John Doe",
    age: 30,
    department: "Sales" 
}

const updatedEmployee = {
    ...employee,
    role: "Manager",
    location: "New York",
    salary: 75000
};


console.log(updatedAmounts);

console.log(updatedEmployee);

