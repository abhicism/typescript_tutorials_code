"use strict";
// TypeScript allows using the `typeof` keyword in a type context
// to infer a type directly from an existing JavaScript object or variable.
// 1. Declare a standard JavaScript object constant
const user = {
    name: "John Doe",
    age: 30,
};
// 3. Create a new object 'user1' explicitly typed as 'User'
const user1 = {
    name: "John Doe",
    age: 30,
};
// 4. Log the object to the console
console.log(user1); // Output: { name: 'John Doe', age: 30 }
