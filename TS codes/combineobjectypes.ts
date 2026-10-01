type address = {
    city : string;
    state : string;
};

type person = {
    name : string;
}

//combine
type citizen = person & address;

const staff : citizen = {
    name : "abhishek",
    city : "pune",
    state : "maharashtra"
};

console.log(staff);
console.log(staff.name);
console.log(staff.city);
console.log(staff.state); 
//check op