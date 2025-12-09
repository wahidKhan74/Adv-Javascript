const bigBasketballGame = new Promise((resolve, reject) => {
    const gamePlayed = false; // Simulating whether the game was played or not
    // asynchronous operation
    if(gamePlayed) {
        resolve("Big basketball game was played successfully!");
    } else {
        reject("Big basketball game was canceled!");
    }
});

bigBasketballGame.then((message) => {
    console.log(message);
    console.log("Celebrating the victory!");
}).catch((error) => {
    console.error(error);
    console.log("Better luck next time!");
    console.log("Request Refund from ticket seller.");
});