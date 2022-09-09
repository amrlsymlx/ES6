const personPrototype ={

    greeting : function(){

        return `Hello ${this.firstName} ${this.lastName}`
    }
};


const user = Object.create(personPrototype);
user.firstName = 'Sara';
user.lastName = 'Smith';

console.log(user);
console.log(user.greeting());

cost newUser = Object.create (personPrototype,{
    firstName: {value:'Sara'},
    lastName: {value'Smith}
});

console.log(newUser);

// review this