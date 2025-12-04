// fetch user data from an API and log the user's name

// Regular function to fetch user data
function fetchUser(name, callback) {
    console.log(`Fetching data for ${name}...`);

    const user = { 
        name: name, 
        age: 25, 
        location: "USA" 
    };

    callback(user);
}

// callback function to display user data
function display(user) {
    console.log(`User Name: ${user.name}`);
    console.log(`User Age: ${user.age}`);
    console.log(`User Location: ${user.location}`);
}


// function call with callback
fetchUser("Alice", display); 
// Alice -> name passed to fetchUser, 
// display -> is the callback function


