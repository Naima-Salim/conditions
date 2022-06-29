//Write a JavaScript function that reverse a number
function numbers(){
    let num=23343;
    console.log(num[4]);
}
numbers();

//local variable
function numbers(){
    var x = 10; //this is a local variable
    console.log(x);
}
numbers();

// global variable
var x = 23; //this is a global variable
function numbers(){
    console.log(x);
}
numbers();