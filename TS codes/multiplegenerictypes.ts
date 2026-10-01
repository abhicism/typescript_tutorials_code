//somtimes one type is not enough , we Use multiple generic types. 
//Here we are using multiple generic types such as `t` and `u` in parameters. 

// Define a generic function 'pair' that takes two type parameters, T and U.
function pair <T,U> (
    // 'first' is a parameter of type T
    first : T,
    // 'second' is a parameter of type U
    second : U
){
    return {
        first,
        second
    }
}

// Call the 'pair' function, explicitly specifying 'number' for T and 'string' for U.
const result = pair<number, string>(
    1,
    "Apple"
);

// Log the resulting object to the console.
console.log(result);

//op is { first: 1, second: 'Apple' }