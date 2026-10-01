"use strict";
//use object as function parameter
function x(student) {
    console.log(student.name);
    console.log(student.age);
    console.log(student.department);
}
x({
    name: "Alice",
    age: 20,
    department: "Computer Science"
});
