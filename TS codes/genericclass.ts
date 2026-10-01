//create generric class with constructor

class box<T> {
    constructor(
        public value : T
    ){}
}
// Create instances of the generic Box class with different types
const userBox = new box(100);
const user1 = new box("abhishek");

console.log(userBox);
console.log(user1);