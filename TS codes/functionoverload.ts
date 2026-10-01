//one function supports multiple parameter types

function hello(value :string):void ;
function hello(value :number):void ;

function hello(value: string | number): void {
    console.log(value);
}

hello("abhishek"); // Output: abhishek
hello(123); // Output: 123


// lets try annonymous function 

 const greet = function(name: string): string {
    
    return "hi, " + name;
 };
 console.log(greet("abhishek")); // Output: hi, abhishek