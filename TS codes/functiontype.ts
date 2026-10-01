/*
operation → Variable

(a:number,b:number) → Function parameters

=> number → Function returns a number
*/

let operation: (a: number, b: number) => number;
operation = (x, y) => x + y;
console.log(operation(10, 20)); // Output: 30


