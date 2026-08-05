"use strict";
const promise = new Promise((resolve, reject) => {
    resolve("Data Loaded");
});
promise.then((data) => {
    console.log(data);
});
