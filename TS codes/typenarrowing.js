"use strict";
//type narrowing is a process in which we can narrow down the type of a variable based on its value.
//function
function display(param) {
    if (typeof param === "string") {
        console.log(param);
    }
    else if (typeof param === "number") {
        console.log(param);
    }
}
//call
display("abhishek");
display(100);
