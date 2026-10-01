interface Address {
    city: string;
    state: string;
}

interface Student {
    name: string;
    age: number;
    address: Address;
}

//create an object
const student1: Student = {
    name: "John Doe",
    age: 20,
    address: {
        city: "New York",
        state: "NY"
    }
};  

console.log(student1.name); // Output: John Doe
console.log(student1.address.city); // Output: New York