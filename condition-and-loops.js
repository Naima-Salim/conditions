// Assignment 1: Conditionals & Loops
//1. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five print
// "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
function nums(){
    for(let a=1; a<=100; a++){
        if(a%3==0 && a%5==0){
            console.log("FizzBuzz");    
        }
          if (a%3==0){
            console.log("Fizz");
        }
          if (a%5==0){
            console.log("Buzz");
        }
            else{
                console.log(a)
            }
    }
}
nums();

// 2. Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
function addition(){
    var sum=0;
for(let num=0; num<1000; num++){
    if(num%3===0 && num%5===0){
        sum+=num    
    }
}
console.log(sum);
}
addition();



// 3. Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"
function check_numbers(){
    for(let type=0; type<=20; type++){
        if(type%2==0){
            console.log(type, "is even");
        }
        else{
            console.log(type, "is odd")
        }
    }
}
check_numbers();


// 4. Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]
let num=[-2, 4, -5, 6, 0]
var big=0;
for(let i=0; i<=num.length; i++){
    if(num[i]>big){
        big=num[i]
    }
}
console.log(big)



// 5. Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40
let numbers=[10,20]
var largest=0;
for(let i=0; i<numbers.length; i++){
    if(numbers[i]>largest){
        largest=numbers[i]
    }
}
console.log(largest)

//6. Write a JavaScript program to find leap years from 2000 to 2022
function check_year(){
    let firstyear=2000;
    let secondyear=2022;
    for(var year=firstyear; year<=secondyear; year++){
        if (year%4===0 || year%400===0){
            console.log(`${year} is a leap year`);
    }
    else{
        console.log(`${year}`);
    }
}
}
check_year();