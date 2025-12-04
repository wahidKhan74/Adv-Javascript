function fetchUser(name, callback) {
    console.log(`Fetching data for ${name}...`);
    setTimeout(() => {
        const user = { 
            name: name, 
            age: 25, 
            location: "USA" 
        };
        callback(user);
    }, 2000); // Simulating async operation with 2 seconds delay

}

// callback function to display user data
function display(user) {
    console.log(`User Name: ${user.name}`);
    console.log(`User Age: ${user.age}`);
    console.log(`User Location: ${user.location}`);
}

// function call with callback
fetchUser("Alice", display); 
fetchUser("Alice", display); 
