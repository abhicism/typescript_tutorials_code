/*

instanceof is a binary operator :
used to test whether an object's prototype chain
 contains the prototype property of a given constructor or class.
*/
class Dog {

    bark(): void {
        console.log("Woof");
    }

}

class Cat {

    meow(): void {
        console.log("Meow");
    }

}

function animalSound(animal: Dog | Cat): void {
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}   

const dog = new Dog();
const cat = new Cat();

animalSound(dog);
animalSound(cat);

