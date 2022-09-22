//In a method , this refers to the owner object
// Alone , this refers to the global object (window)
//In a function , it refers to the global object
//In a function , in strict mode its undefined
//In an event , this refers to the element that received the event
//methods like call() and apply() can refer this to any object

const user_1 = {
    firstName : 'sara',
    lastName:'smith',
    id: 100,
    fullName: function(){
        return this.firstName+ " "+this.lastName;
    }
};

const user_2 = {
    firstName : 'kim',
    lastName:'smith',
    id: 102,
    fullName: function(){
        return this;
    }
};

//In an object method , this refers to the "owner" of the method
// The user object is the owner of the method
console.log(user_1);
console.log(user_1.fullName());

console.log(user_2);
console.log(user_2.fullName());

//This alone
//In a browser the global object is window

const x = this;
console.log(x);

//this  in the function
//in js function, the owner of the function 
// is the default binding for this
//it means this refers to the global object

function myFunction(){
    return this;
}

console.log(myFunction());

//Function binding 
//the call() and apply() methods are predefined js methods
//they can be both use to call an object method with another 
// object as argument

const customer = {
    fullName:function(){
        return this.firstName+ " "+this.lastName;
    }
};

const customer_1 = {
    firstName:'sara',
    lastName:'smith',
}

const test = customer.fullName.call(customer_1);
console.log(test);