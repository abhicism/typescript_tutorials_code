"use strict";
//async function automatically returns a promise, and the value returned from the function is wrapped in a resolved promise. If an error is thrown inside the async function, it will be wrapped in a rejected promise.
//async function can be used with await keyword to wait for a promise to resolve.
async function greet() {
    return Promise.resolve("Hello, World!");
}
greet().then((data) => {
    console.log(data);
}); // Output: Hello, World!
