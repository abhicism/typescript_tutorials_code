// Define a generic function `printLength`
// The generic type T must extend an object that has a `length` property of type number
function printLength<T extends { length: number }>(
    item: T // The parameter `item` must be of type T, which guarantees it has a `length` property
) {
    // Print the length property of the item to the console
    console.log(item.length);
}

// Example usage: strings in JavaScript have a `length` property, so this works
printLength("Hello"); // Output: 5


//The T extends { length: number } constraint ensures that only objects with a length property can be passed.