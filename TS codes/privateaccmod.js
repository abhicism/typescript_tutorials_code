"use strict";
//private property can only be used inside the class, it cannot be accessed outside the class
class hello {
    name;
    constructor(name) {
        this.name = name;
    }
    //create a private method
    greet() {
        console.log(`Hello, ${this.name}`);
    }
    //create a public method to access the private method
    getGreeting() {
        return this.greet();
    }
}
//create a constant with new keyword
const Hello = new hello("John");
Hello.getGreeting(); //hello, john is the op
