"use strict";
//a function passed into another function as an argument is called a callback function. A callback function can be synchronous or asynchronous. In TypeScript, you can define the type of a callback function using function types.
// Define a function named processUser that takes two parameters:
// 1. name: a string representing the user's name
// 2. callback: a function that accepts a string message and returns nothing
function processUser(name, callback) {
    // Create a welcome message by concatenating "Welcome " with the user's name
    const message = "Welcome " + name;
    // Call the callback function, passing the welcome message as an argument
    callback(message);
}
// Call the processUser function with "Abhishek" as the name
// Provide a callback function that logs the message to the console
processUser("Abhishek", (msg) => {
    console.log(msg); // Output will be: Welcome Abhishek
});
