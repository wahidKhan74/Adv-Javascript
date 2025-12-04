//Callback : A callback is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

function X(callback) {
    console.log("Inside function X");
    //console.log(callback);
    callback(); // function calling
}

function Y() {
    console.log("Inside function Y");
}


// X("XYZ"); // passing string as argument
X(Y); // passing function Y as argument

X(function(){
    console.log("Inside Anonymous function");
});