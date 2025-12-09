function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(id <= 0) {
                return reject("Invalid user ID");
            }
            const user = { id: id, name: "John Doe" };
            resolve(user);
        }, 2000);
    });
}

function createOrder(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId <= 0) {
                return reject("Invalid user ID for order");
            }
            const order = { orderId: 101, item: "Gamming Laptop", userId: userId };
            resolve(order);
        }, 5000);
    });
}

function processUserOrder(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(userId <= 0) {
                return reject("Invalid user ID for processing order");
            }
            const processedOrder = { orderId: 101, status: "Processed", userId: userId };
            resolve(processedOrder);
        }, 1000);
    });
}

// Promise chaining
getUser(101).then(user => {
    console.log("User fetched:", user);
    return createOrder(user.id);
}).then(order =>{
    console.log("Order created:", order);
    return processUserOrder(order.userId);
}).then(pOrder=>{
    console.log("Order processed:", pOrder);
}).catch(error => {
    console.error("Error fetching user:", error);
});