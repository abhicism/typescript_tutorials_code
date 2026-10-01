//define a custom type for employee record

type employeeRecord = {
    id : number;
    name : string;
    department : string;
    salary : number;
};

//create an object and assign the values

const employee1: employeeRecord = {
    id: 1,
    name: "John Doe",
    department: "Engineering",
    salary: 75000
};

console.log(employee1);