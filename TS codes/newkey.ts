// Example: creating an object using the 'new' keyword
class Person {
    name: string;
    age: number;

    // Constructor initializes the object's properties
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// Create a new object instance of Person
const p = new Person("John", 30);

// Access and print the object's values
console.log(p.name); // Output: John
console.log(p.age);  // Output: 30