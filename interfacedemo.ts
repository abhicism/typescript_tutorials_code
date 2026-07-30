//An interface is a blueprint that defines the shape of an object.

interface student {
    name : string;
    age : number;
    department : string;
    passed: boolean;
}

const x :student = {
    name: "Alice",
    age: 20,
    department: "Computer Science",
    passed: true
}

console.log(x);