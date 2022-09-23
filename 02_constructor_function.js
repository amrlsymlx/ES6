//object literal

// const student = {
//     firstName: 'sara',
//     lastName:'Smith',
//     age:16
// };

// console.log(student.age);

//constructor function
// function Student(){
//     this.firstName = 'Sara';
//     this.lastName = 'Smith';
//     this.age= 16;
// };

// const student_1 = new Student();
// console.log(student_1);


function Student(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName =lastName;
    this.age= age;
};

const student_1 = new Student('sara','smith',16);
const student_2 = new Student('kim','possible',17);
console.log(student_1);
console.log(student_2);