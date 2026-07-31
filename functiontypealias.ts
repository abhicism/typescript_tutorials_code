// Defining a type MathOperation which is a function that takes two numbers and returns a number
type MathOperation = (a: number, b: number) => number;

// Defining an add function that takes two numbers and returns their sum
const add: MathOperation = (a, b) => a + b;

// Defining a subtract function that takes two numbers and returns their difference
const subtract: MathOperation = (a, b) => a - b;

// Defining a multiply function that takes two numbers and returns their product
const multiply: MathOperation = (a, b) => a * b;

// Defining a divide function that takes two numbers and returns their quotient
const divide: MathOperation = (a, b) => a / b;

// Logging the result of adding 10 and 20 to the console
console.log(add(10, 20)); // Output: 30

// Logging the result of subtracting 20 from 10 to the console
console.log(subtract(10, 20)); // Output: -10

// Logging the result of multiplying 10 and 20 to the console
console.log(multiply(10, 20)); // Output: 200

// Logging the result of dividing 10 by 20 to the console
console.log(divide(10, 20)); // Output: 0.5