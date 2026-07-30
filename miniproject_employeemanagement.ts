//using inheritance and super
//class person and class employee extends of person

class person {
    //constructor
    constructor(
       public name : string,
       public age : number
    ) {}

    //public method of the person class
    introduce() {
        console.log("name", this.name);
    }
}

class employee extends person {
    constructor(
        name: string,
        age:number,
        public department :string
    ){
    //pass inherited properties to the parent class constructor
        super(name,age);
    
    }
    //child class method adds up here
    work() {
        console.log(this.name + "works in "+ this.department);
    }
}

//intiate object on child class
const Employee = new  employee("abhishek", 33,"gemini");
//call methods through object
Employee.work();
Employee.introduce();