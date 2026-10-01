const promise = new Promise<string>((resolve, reject) => {
//resolve is a function that will be called when the promise is fulfilled, and reject is a function that will be called when the promise is rejected. In this case, we are calling the resolve function with the string "Data Loaded" to indicate that the promise has been fulfilled successfully.
    resolve("Data Loaded");

});
//data is the parameter that will be passed to the callback function when the promise is resolved. In this case, it will log "Data Loaded" to the console when the promise is fulfilled.
promise.then((data) => {
    console.log(data);
});