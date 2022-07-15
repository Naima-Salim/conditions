// Write a program to calculate purchases from a kiosk. For e.g. given the fruit name 
// 'orange' the program should fetch its price (30.00) and multiply with the quantity 
// requested (2) and return total cost in this printed format (2 Oranges for KES 
// 60.00). 
// calculateFruitCost(fruitName, quantity)
// For example, calculateFruitCost('orange', 2) should return "2 Oranges for KES 
// 60.00"

function Fruits(price){
    this.price=price
    this.calculateFruitCost=function(name,quantity){
        let total_price=this.price*quantity
        return `${quantity} ${name} for KES ${total_price}`
    }
}
let fruit =new Fruits(25)
console.log(fruit.calculateFruitCost('orange',3));

//write a class  KisoskCalc that has the following fruitPriceList object.
//this.fruitsPriceList = {"orange":30, "mango":15, "avocado":40};
//and takes two parameter (fruit, quantity) when initialized i.e.
//var kioskCalc = new KioskCalc("orange",2);
//thereafter, it allows one to calculate the total cost of the fruit by accessing the get TotalCost()
//method.
//kioskCalc.getTotalCost() returns "2 orange for KES 60"

class kioskCalc{
    constructor(orangePrice){
        this.fruitsPriceList={"orange":30, "mango":15, "avocado":40};
        this.getTotalCost = function (fruit, quantity){
            return `${quantity} ${fruit} for KES ${orangePrice * quantity}.`
        }
    }
    
}
var kiosk = new kioskCalc(30)
console.log(kiosk.getTotalCost('mango',2));
kiosk.getTotalCost();
