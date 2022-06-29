let name = "naima"
if(name != "mima"){
    console.log("hey there");
    if(name.length<=3){
        console.log("name is too short");
    }else{
        console.log("name accepted");
    }
}
else{
    console.log("no name")
}

let g = 20;
let b = 10;
let add = g+b

if(add >= 30 || g > 20){
    console.log(true);
}
else{
console.log(false);
}

//switch
const d = 20;
switch (true) {
    case d < 10: //if
        console.log('not a cow');
        break;

    case d>=20: //if else
        console.log('he is the one');
        break;

    default: //else
        console.log('found it');
        break;
}

let i = 10;
switch(i){
    case 0:
        console.log("i is zero");
        break;
    case 2:
        console.log("i is one");
        break;
    case 2:
        console.log("i is two");
        break;
    default:
        console.log("i is greater than 2");
}


//ternery operators, question mark stands for (if)
const a = 20;
let c = a>20 ?true: false;
if(a>20){
    console.log(false);
}else{
    console.log(false);
}
console.log(c);