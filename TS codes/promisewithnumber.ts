const myPromise = new Promise<number>((resolve) => {
    resolve(100);
});

myPromise.then((data) => {
    console.log(data); // Outputs: 100
});
//output is 100