"use strict";
//create generric class with constructor
class box {
    value;
    constructor(value) {
        this.value = value;
    }
}
const user = new box(100);
const user1 = new box("abhishek");
console.log(user);
console.log(user1);
