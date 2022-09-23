function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    this.login = function () {
        console.log(this.email, 'has logged in');
        
    }
    
}

let user_1 = new User('asd@gmail.com', 'Amir')
let user_2 = new User('qwertyuiop@yahoo.com', 'Yoshi')

console.log(user_1);
user_2.login();