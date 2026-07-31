//A union means: A value can be one type OR another type.

type ID = string | number;

let userID :  ID;
userID = 101;
console.log(userID);

userID = "employee101";
console.log(userID);