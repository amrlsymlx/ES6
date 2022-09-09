// the constructor method is a special method,
// it has the exact name as constructot
// it is executed auto when new object is neign create
// it is used to initialize the properties of an object
// if we dont define the constructor function, js will 
// an empty constructor function

// js classes are the templates for js objects
// a js class IS NOT AN OBJECT





// syntax
// class ClassName{
//     constructor(){

//     }
// }


// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

// we can use classes to create objects;
const student_1 = new Student ('sara',22);
const student_2 = new Student ('kim',25);

// console.log(student_2,student_1);

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    dob(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

console.log

// review