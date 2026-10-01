class product {
constructor(public name: string, public price: number) {}
greet(){
    console.log(`Hello, I am ${this.name} and I cost $${this.price.toFixed(2)}`);
}
}

//initilize the object of the class product
const p1 = new product("Laptop", 999.99);
//access the properties of the object
p1.greet(); // Output: Hello, I am Laptop and I cost $999.99