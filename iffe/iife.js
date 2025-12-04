// IIFE : Immediately Invoked Function Expression
(function(){
    console.log("This function runs immediately upon definition!");
})();

// Another example with parameters
(function(name){
    console.log("Hello, " + name + "!");
})("Alice");

// IIFE with return value
var result = (function(a, b){
    return a + b;
})(5, 10);

console.log("The result of the addition is: " + result);


// IIFE to create a private scope
var counter = (function(){
    var count = 0; // private variable  2

    return {
        increment: function(){
            count++;
            return count;
        },
        decreament: function(){
            count--;
            return count;
        }
    }
})();


// console.log(count);  // Uncaught ReferenceError: count is not defined
console.log("Counter increment: " + counter.increment());
console.log("Counter increment: " + counter.increment());

console.log("Counter decreament: " + counter.decreament());
console.log("Counter decreament: " + counter.decreament());


