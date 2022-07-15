class Student{ //use constractor functions to build an object
    constructor(name, age, school){
        this.name = name
        this.age = age
        this.school = school
        this.hobby=function(){
          return "i love eating"
        }
    }
}
Student.prototype.country=function(){
    return "i love my country"
}

var firstStudent = new Student("Mima",22, "AkiraChix");
console.log(firstStudent.age);

function Student(name, age, school){
        this.name = name
        this.age = age
        this.school = school
        this.hobby=function(){
          return "i love eating"
        }
} 
var secondStudent=new Student("Johra", 23, "AkiraChix");
console.log(secondStudent);
