"use strict";
//classes can contain function called methods 
class student {
    name;
    //create constructor to initialize the object with class properties
    constructor(name) {
        this.name = name;
    }
    //add a method to the class
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const s = new student("John");
//call the method greet with the object s
s.greet();
