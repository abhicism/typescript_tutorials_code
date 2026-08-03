"use strict";
/*

instanceof is a binary operator :
used to test whether an object's prototype chain
 contains the prototype property of a given constructor or class.
*/
class Dog {
    bark() {
        console.log("Woof");
    }
}
class Cat {
    meow() {
        console.log("Meow");
    }
}
function animalSound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else if (animal instanceof Cat) {
        animal.meow();
    }
}
const dog = new Dog();
const cat = new Cat();
animalSound(dog);
animalSound(cat);
