var user={
    name: "naima",
    age: 30,
    country: "Kenya"
};
console.log(user['country']);
console.log(user.country);

//an instance of an object
var person = new Object(user);
console.log(person.name);
person["age"]=35;
console.log(person);

//keys and values
for ([key,values] of Object.entries(person)){
    console.log(`${key}: ${values}`);
}

Object.freeze(person)
person['school'] = "AkiraChix"
console.log(person);
console.log()

Object.seal() //you can modify but you can't add values
Object.assign(person, {school:"AkiraChix"}) //copying a objects to an existing object
console.log(person) 

//method is an object property in which a value is a function
var student={
    name:"Naima",
    country:"Kenya",
    hobby:function(){
        console.log(`My name is ${this.name}`); //is used to represent a global object property
        return "my favourite movie genre is Marvel";
    },
    //nested objects
    friends:{
        name:"mima",
        age:23,
        hobby:{
            first:"cooking",
            play:{
                now:"playing"
            }
        }
    }
}
console.log(student.hobby());
console.log(student.country);
console.log(student.friends.name);
console.log(student.friends.name.first);
console.log(student.friends.name.first.play);

