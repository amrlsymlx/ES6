// Object Literals

// const student = {
//     firstName: 'Sara',
//     lastName: 'Smith',
//     age: '16',
// };

// console.log(student.age);

// Constructor function
// function Student(){
//     this.firstName = 'Sara';
//     this.lastName = 'Smith';
//     this.age = 16;   
// };

// const student_1 = new Student();
// console.log(student_1);

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
};

const student_1 = new Student('Sara', 'Smith', 16);
console.log(student_1);