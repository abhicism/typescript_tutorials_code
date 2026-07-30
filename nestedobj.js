"use strict";
//object can contain other objects as values
let student = {
    name: "abhishek",
    address: {
        street: "123 Main St",
        city: "Anytown",
        state: "CA"
    }
};
console.log(student.name); // Output: abhishek
console.log(student.address.street);
