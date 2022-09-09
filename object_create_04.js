const personPrototype = {
    greeting: function(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
};


const user = Object.create(personPrototype);
user.firstName = 'Sara';
user.lastName = 'Smith';

console.log(user);
console.log(user.greeting());

const newUser = Object.create(personPrototype, {
    firstName: {value: 'Kim'},
    lastName: {value: 'Smith'}
});

console.log(newUser);
console.log(newUser.greeting());