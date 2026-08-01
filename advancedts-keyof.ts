// Define the structure of a User object using an interface
interface user {
    name: string;
    age: number;
    department: string;
}

// Extract a union of property names ("name" | "age" | "department") using the `keyof` operator
type userkeys = keyof user; 

// Assign a valid property name ("name") to a variable constrained by the `userkeys` type
const key: userkeys = "name";

// Output the key string ("name") to the console
console.log(key);

// Create an object that matches the `user` interface structure
const user: user = {
    name: "abhishek",
    age: 20,
    department: "IT"
};

// Access the object property dynamically using bracket notation (prints "abhishek")
console.log(user[key]);