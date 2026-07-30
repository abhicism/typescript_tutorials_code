//one array contains multiple objects
let students = [
    {name: "Alice", age: 20, department: "Computer Science"},
    {name: "Bob", age: 22, department: "Mathematics"},
    {name: "Charlie", age: 21, department: "Physics"}
];

console.log(students[0].name); // Output: Alice
console.log(students[1].department); // Output: Mathematics 
console.log(students[2].age); // Output: 21
console.log(students[0]); // Output: {name: "Alice", age: 20, department: "Computer Science"}