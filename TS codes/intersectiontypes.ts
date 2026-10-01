// Intersection Types allow us to combine multiple types into a single type.

// & means this and that.

// Defining a type Person
type Person = {
    name: string; // The name property is of type string
};

// Defining a type Employee
type Employee = {
    salary: number; // The salary property is of type number
};

// Combining the Person and Employee types into a single type Staff
type Staff = Person & Employee; //intersection type

// Creating an object of type Staff
const staff: Staff = {
    name: "John Doe", // The name property is set to "John Doe"
    salary: 75000, // The salary property is set to 75000
};

// Logging the staff object to the console
console.log(staff);