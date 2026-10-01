//promise rejection is a way to handle errors or exceptional cases in asynchronous operations. When a promise is rejected, it means that the operation has failed, and the error can be handled using the catch method. In this example, we are creating a promise that will be rejected with an error message "Promise rejected due to an error." and we are handling the rejection using the catch method to log the error message to the console.

const promise = new Promise((resolve, reject) => {
    reject("Promise rejected due to an error.");
});

promise.catch((error) => {
    console.error(error);
    // Output: Promise rejected due to an error.

})