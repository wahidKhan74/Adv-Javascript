let promiseCallback = function(resolve, reject) {
    // asynchronous operation
    let success = false; // Simulating success or failure
    if(success) {
        resolve("Task resolved successfully!");
    } else {
        reject("Task failed!");
    }
};

let myPromise = new Promise(promiseCallback);

myPromise.then(function(result) {
    console.log(result);
}).catch(function(error) {
    console.error(error);
}).finally(function() {
    console.log("Finished processing the promise.");
});