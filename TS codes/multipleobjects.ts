//one class can create many objects


class student {
//constructor 

// TypeScript shortcut: 'public' in the constructor automatically 
// declares and assigns 'name' and 'age' as class properties
constructor(public name: string, public age: number) {}

}
//initiate the multiple objects from the class student
const s1 = new student("John", 20);
const s2 = new student("Jane", 22);

//access the properties of the objects
console.log(s1.name);
console.log(s1.age);
console.log(s2.name);
console.log(s2.age);