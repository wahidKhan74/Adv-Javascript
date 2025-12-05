// closures/counter.js
function createCounter() { 
    let count = 0; // Private variable

    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        },
        reset : function() {
            count = 0;
            return count;
        }
    }
}

const counter = createCounter();

// initial count
console.log("Intial count : " + counter.getCount());
console.log("After increament count : " + counter.increment());
console.log("After increament count : " + counter.increment());
console.log("After decreament count : " + counter.decrement());
console.log("After reset count : " + counter.reset());
console.log("Reset count : " + counter.getCount());
console.log(counter);
