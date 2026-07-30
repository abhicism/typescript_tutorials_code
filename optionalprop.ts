//some properties may not always exist ,use with (?) notation

let employee : {
    name: string;
    age?: number; // Optional property
    department?: string; // Optional property
}
employee = {
    name: "John Doe",
    age: 30
};

console.log(employee.name); // Output: John Doe
console.log(employee.age);