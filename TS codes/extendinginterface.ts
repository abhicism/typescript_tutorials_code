interface Person {
    name: string;
    age: number;
}
//extending the Person interface to create a new interface Employee
interface Employee extends Person {
    department: string;
    salary: number;
}

const employeeA: Employee = {
    name: "John Doe",
    age: 30,
    department: "Engineering",
    salary: 75000
};

console.log(employeeA.name); // Output: John Doe
console.log(employeeA.department); // Output: Engineering