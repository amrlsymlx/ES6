// Object Literals

// const user = {
//     userName: 'Alex',
//     age: 35
// };

// console.log(user);

// Prototype: its an object which is associated with every object and
// function in JS by default.

// The prototype object is a special type of object with additional properties
// and methods, which will be shared across all the object instances
// of its constructor function

// Constructor function

// function User() {
//     this.name = 'Alex';
//     this.age = 30;
// };

// const user_1 = new User();
// user_1.gender = 'male';
// console.log(user_1);

// const user_2 = new User();
// console.log(user_2);

// Prototype
function Student() {
    this.name = 'Sara';
    this.age = 15;
}

Student.prototype.gender = 'female';

const student_1 = new Student();
console.log(student_1);

const student_2 = new Student();
console.log(student_2);

// How to caccess to the prototype
console.log(student_1.prototype); // Undefined
console.log(Student.prototype); // Object
console.log(student_1.__proto__); // Object