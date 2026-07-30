"use strict";
//one function supports multiple parameter types
function hello(value) {
    console.log(value);
}
hello("abhishek"); // Output: abhishek
hello(123); // Output: 123
// lets try annobyms function 
const greet = function (name) {
    return "hi, " + name;
};
console.log(greet("abhishek")); // Output: hi, abhishek
