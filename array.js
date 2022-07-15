let fruits=["Mango","Oranges"];
console.log(fruits)
fruits=["Mango","Oranges"];
console.log(fruits)
let fruit= new Array("Mango","Oranges");
// console.log(fruit)

let fruits1=["Mango","Oranges"];
fruits1.push("Apple")
fruits1.pop()
fruits1.unshift("grapes")
fruits1.shift()

let d =fruits1.map(item=> `i love ${item}`);
console.log(d);
let e = fruits1.map(function(item){ // a function without a name is called anonymous function
    return `i love ${item}`
})
// console.log(e);

//splicing method
fruit=["mango","oranges","pineapple","apple"];
console.log(fruit.splice(1,2))

//callback function
function students(a,callback){
    console.log(a);
    console.log(callback);
}
students(24,people())

var names = ["naima","Shirleen","Tessa"];
var [ mima, ...others]=names
console.log(mima);
console.log(others);