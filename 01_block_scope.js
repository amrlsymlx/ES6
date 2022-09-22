//global scope
var a = 1;
let b = 2;
const c = 3;

//function scope
// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;

//     console.log('Function scope: ' , a,b,c);
// }

// test();

//block level  scope
if(true){
    var a = 4;
    let b = 5 ;
    const c = 6;

    console.log('Block level scope: ',a,b,c);
}


console.log('Global scope: ' , a,b,c);