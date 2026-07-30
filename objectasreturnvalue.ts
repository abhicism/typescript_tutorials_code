//we will create a function that returns an object as return value

function x() :
{
    name: string;
    age: number;
    department: string;
} {
    return {
        name: "John Doe",
        age: 30,
        department: "Engineering"
    }
}

//Create an object that will store this function. 
const y = x();
//diplay the values of the object returned by the function
console.log(y);