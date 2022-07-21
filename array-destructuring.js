let a = [2,4,7]
let [one, four, seven, ...others] = [2, 4, 7, 43, 6, 3]; //array destructuring
console.log({one});
console.log({four});
console.log({seven});
console.log(others);

let fruits = {
    name:"mango",
    color:"yellow",
    size:"small"
};

let {name1, ...rest}=fruits //object destructuring
let {name, color, size} = fruits;
console.log(name);
console.log(color);

//creating a promise
let promise = new  Promise((resolve,reject)=>{ //new is used to create an instance of a class
    if(false){
        resolve("Promise fullfilled");
    }
    else{
        reject("Promise not fullfilled")
    } 

}) 
//promises chaining
.then(()=>console.log("Successful")) //used when a promise is executed successfully
.catch(()=> console.log("Promise failed")) //used to catch errors
.catch(error=>console.log(error))
.finally(()=>console.log("Promises are fun")) //fullfilled or rejected
console.log(promise);

//async and await
let mother = "Beautiful"
console.log(mother); //async gives itself time to run, it returns a promise and does not disrupt any other work from functioning 
let people = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("Promise fullfilled"), 500)

})
async function student(){
    let person = await promise;
    console.log(person)
    console.log("Await is only used in async functions");
}
student();
let num = 34;
console.log(num + 2);



