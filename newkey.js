"use strict";
//create object with new keyword
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const p = new Person("John", 30);
console.log(p.name); // Output: John
console.log(p.age); // Output: 30
