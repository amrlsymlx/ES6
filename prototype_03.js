//object literals

// const user = {
//     userName:'alex',
//     age:35
// };

// console.log(user);

//Prototype : its an object which is associated with every object and 
//functions in js by default.

//The prototype object is a special type of object with addtional propertis
//and methods , which will be shared across all the object instances 
//of its constructor function

//constructor function 

// function User (){
//     this.name = 'alex';
//     this.age= 30;
// };

// const user_1 = new User();
// user_1.gender = 'male';
// console.log(user_1);

// const user_2 = new User();
// console.log(user_2);

//prototype
function Student(){
    this.name  = 'sara';
    this.age = 15;
}

Student.prototype.gender = 'female';

const student_1 = new Student();
console.log(student_1);

const student_2 = new Student();
console.log(student_2);

//How to access to the prototype 
console.log(student_1.prototype); // undefined
console.log(Student.prototype); //object
console.log(student_1.__proto__); //object