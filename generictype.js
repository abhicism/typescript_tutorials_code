"use strict";
// Generic function that takes a value of any type T and returns a value of the same type T
function getvalue(value) {
    return value;
}
// Call the generic function with different types
console.log(getvalue(100));
console.log(getvalue("abhishek"));
console.log(getvalue(true));
