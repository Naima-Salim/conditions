//Block scope
function children(){
    var name="yusuf"
    console.log(name);
}
children();

//function scope
function family(){
    var names="salim yusuf"
    let name2="naima"
    const name3="mima"
    console.log(names);
    console.log(name2);
    console.log(name3);
}
family();

//nested scope
function num(){ //parent scope
    var a =2;
    function add(){ //child scope
        var b=3;
        var c=a+b;
        console.log(c);
    }
    add();
}
num();

//closure

//loop
var num = [1,2,3,4,5,6,7,8,9]
for (let i=0; i<num.length; i++){
    console.log(num[i])
}

//hoisting
add(10);
function add(){
    var a =10;
    console.log(a);
}

//strict mode

