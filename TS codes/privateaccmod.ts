//private property can only be used inside the class, it cannot be accessed outside the class

class hello {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }
    //create a private method
    private greet() {
        console.log(`Hello, ${this.name}`);
    }
    //create a public method to access the private method
    public getGreeting() {
        return this.greet();
    }
}
//create a constant with new keyword
const Hello = new hello("John");
Hello.getGreeting(); //hello, john is the op


