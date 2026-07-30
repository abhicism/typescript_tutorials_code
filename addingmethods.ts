//classes can contain function called methods 

class student {
    name: string;
//create constructor to initialize the object with class properties
    constructor(name: string) {
        this.name = name;
    }

//add a method to the class

greet() : void{
    console.log(`Hello, my name is ${this.name}`);//${this.name} placeholder for the this.name property of the object
}
}
const s = new student("John");
//call the method greet with the object s
s.greet();
