async function showMessage() {
//await keyword is used to wait for a promise to resolve or reject before continuing with the execution of the code. In this case, we are using await to wait for the getMessage function to return a promise that resolves to a string message. Once the promise is resolved, the message is logged to the console.
    const message = await getMessage();

    console.log(message);

}

// Define the getMessage function that returns a Promise<string>
async function getMessage(): Promise<string> {
    return "Hello from getMessage!";
}

showMessage();
//output is Hello from getMessage!