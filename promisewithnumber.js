"use strict";
const myPromise = new Promise((resolve) => {
    resolve(100);
});
myPromise.then((data) => {
    console.log(data); // Outputs: 100
});
