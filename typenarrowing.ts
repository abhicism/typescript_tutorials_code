//type narrowing is a process in which we can narrow down the type of a variable based on its value.

type value = string | number;

//function
function display (param: value){
    if(typeof param === "string"){
        console.log(param);
    }
    else if(typeof param === "number"){
        console.log(param);
    }

}
//call

display("abhishek"); // Output: abhishek
display(100); // Output: 100