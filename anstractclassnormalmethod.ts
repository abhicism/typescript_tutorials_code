// Define an abstract base class 'animal'
abstract class animal {

    // Constructor with parameter property shorthand ('public name')
    constructor(
      public name: string,  
    ){}

    // Normal (concrete) method with implementation — inherited by all subclasses
    sleep(): void {
        console.log(this.name + " is sleeping");
    }

    // Abstract method declaration — subclasses MUST provide an implementation for this
    abstract sound(): void;
}
  
// Child class 'Dog' inherits from abstract class 'animal'
class Dog extends animal {

    // Concrete implementation of the required abstract method 'sound'
    sound(): void {
        console.log("Woof!");
    }

}

// Instantiate a new 'Dog' object (invokes inherited constructor from 'animal')
const dog = new Dog("Bruno");

// Call the normal method defined in the parent abstract class
dog.sleep(); // Outputs: Bruno is sleeping

// Call the overridden abstract method implemented in the child class
dog.sound(); // Outputs: Woof!