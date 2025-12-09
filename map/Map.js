// Map : Map is a kay-value data structure that holds key-value pairs 
// and maintains the insertion order of keys , It allows any type of keys including objects ,
//  functions , and primitive types.

let userObj = {
    id: 1,
    name: 'John Doe',
    gender: 'male'
}

console.log("userObj" , userObj);

// Creating a new Map
let userMap = new Map();

// Adding key-value pairs to the Map
userMap.set('name', 'Alice');
userMap.set('age', 30);
userMap.set('gender', 'male');
userMap.set(userObj, 'User Object Value');
userMap.set(1, 'Number One');
userMap.set(true, 'Boolean True');

console.log("userMap", userMap);

// Accessing values from the Map
console.log(userMap.get('name')); // Output: Alice
console.log(userMap.get(userObj)); // Output: User Object Value
console.log(userMap.get(1)); // Output: Number One

// Checking if a key exists in the Map
console.log(userMap.has('age')); // Output: true
console.log(userMap.has('address')); // Output: false

// Getting the size of the Map
console.log("size : ", userMap.size); // Output: 6

// Deleting a key-value pair from the Map
userMap.delete('gender');
console.log("After deletion", userMap);

console.log("size after deletion : ", userMap.size); // Output: 5

console.log("---- Iterating over Map ----");

// Iterating over the Map
userMap.forEach((value, key) => {
    console.log(`${key} : ${value}`);
});

console.log("---- Iterating over Map with for of ----");
// for ..of loop
for (let [key, value] of userMap) {
    console.log(`${key} = ${value}`);
}

// declare maping with array of arrays
let employeeMap = new Map([
    ['empId', 101],
    ['empName', 'Bob Smith'],
    ['empDept', 'IT']
]);

console.log("employee", employeeMap);






