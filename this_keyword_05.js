// in a method, this refres to the owner object
// alone, this refrers to the global object (window)
// in a fucntion, it refers to the global object
// in a fucntion, in strict mode its undefined
// in an event , this refers to the element the received this event
//methods like call() and apply() can refer to any object


const user_1 = {
    firstName : 'sara',
    lastName: 'smith',
    id:100,
    fullName: function(){
        return this.firstName+ " "+this.lastName;
    }
};

const user_2 = {
    firstName : 'kim',
    lastName: 'smith',
    id:100,
    fullName: function(){
        return this;
    }
};



console.log(user_1);
console.log(user_1.fullName());

console.log(user_2);
console.log(user_2.fullName());

// this alone
// in a browser the global object is window

const x = this;
console.log(x);

// this is in functiom
// in js function, the owner of the function
// is the default binding for this
// it means this refers to the global object

function myFunction(){
    return this;
};

console.log(myFunction());

// function binding
// the call() and apply() methods are predefined js methods
// they can be both used to call an object method with another
// object as argument

const customer= {
    fullName:function (){
        return this.firstName+ " "+this.lastName;
    }
};

const customer_1={
    firstName:'sara',
    lastName:''
}

// review this