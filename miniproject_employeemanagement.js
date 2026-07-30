"use strict";
//using inheritance and super
//class person and class employee extends of person
class person {
    name;
    age;
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //public method of the person class
    introduce() {
        console.log("name", this.name);
    }
}
class employee extends person {
    department;
    constructor(name, age, department) {
        //pass inherited properties to the parent class constructor
        super(name, age);
        this.department = department;
    }
    //child class method adds up here
    work() {
        console.log(this.name + "works in" + this.department);
    }
}
//intiate object on child class
const Employee = new employee("abhishek", 33, "gemini");
//call methods through object
Employee.work();
Employee.introduce();
