// Original type
type User = {
    id: number;
    name: string;
    email: string;
    age: number;
};

// Partial<User> makes all properties optional
type PartialUser = Partial<User>;

// Object can contain any combination of properties
let user1: PartialUser = {
    name: "Abhishek"
};

let user2: PartialUser = {
    email: "abhi@example.com",
    age: 25
};

let user3: PartialUser = {}; // Also valid

console.log(user1);
console.log(user2);
console.log(user3);