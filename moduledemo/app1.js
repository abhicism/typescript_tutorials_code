//import student class from student.ts file and call it student
import { student } from "./student.js";
//create object from the class student
const s = new student("John", 20);
console.log(s.name);
console.log(s.age);
