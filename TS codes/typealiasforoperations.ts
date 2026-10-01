//instead of writing function type repeatedly, we can use type alias to define a function type once and reuse it throughout the codebase.

type mathops = (a: number, b: number) => number;
let add: mathops = (a, b) => a + b;
let multiply: mathops = (a, b) => a * b;

//lets display the results of the operations

console.log(add(10, 20)); // Output: 30
console.log(multiply(10, 20)); // Output: 200
