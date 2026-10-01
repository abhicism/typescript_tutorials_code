function x(student: {
    name: string;
    age: number;
    department: string;
}): void {
    console.log(student.name);
    console.log(student.age);
    console.log(student.department);
}

x({
    name: "Alice",
    age: 20,
    department: "Computer Science"
});

export {}; // Keeps the file in module scope