// Generic function that takes a value of any type T and returns a value of the same type T
function getvalue<T> (value : T) : T{
    return value;
}

// Call the generic function with different types
console.log(getvalue<number>(100));
console.log(getvalue<string>("abhishek"));
console.log(getvalue<boolean>(true));