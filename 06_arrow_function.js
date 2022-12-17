// with function expression

// const greeting = function(){
//     return 'Welcome to AAA';
// }

// console.log(greeting());

// with arrow function
// const greeting = () => {
//     return 'Welcome to AAA';
// };

//it gets shorter if the function has only one statement
//and the statement returns a value , so we can eliminate
// curly braces and return keyword as well

// const greeting = () =>'Welcome to AAA';

//Arrow function with parameters
const greet = (user) => `Welcome to AAA ${user}`;

console.log(greet('sara'));


let sum = 2;

var hello = function () {}

var bye = ()=> console.log(sum) ;

bye()