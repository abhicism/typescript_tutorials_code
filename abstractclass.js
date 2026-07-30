"use strict";
//cant create obj on abstract class
//so we will create child class on abstract class first
//then create obj on child class
class parents {
    name;
    constructor(name) {
        this.name = name;
    }
}
//create child class extends to abstract class
class children extends parents {
    work() {
        console.log(this.name + " is writing code");
    }
}
//another children extrend parents
class secondchild extends parents {
    work() {
        console.log(this.name + " is managing the team");
    }
}
//create objects for those child classes
const engineer = new children("abhishek");
engineer.work();
const manager = new secondchild("babunu");
manager.work();
