"use strict";
//somtimes one type is not enough , we Use multiple generic types. 
//Here we are using multiple generic types such as `t` and `u` in parameters. 
function pair(first, second) {
    return {
        first,
        second
    };
}
const result = pair(1, "Apple");
console.log(result);
