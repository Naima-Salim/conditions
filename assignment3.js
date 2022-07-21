class Mkulima{
constructor(){
this.farms = [];
this.products = [];
this.orders = [];
this.addFarm = (farmId, name, farmer, phoneNumber, address) => { // addFarm - params: farmId, name, farmer, phone, address
this.farms.push({farmId,name,farmer,phoneNumber,address})}

this.removeFarm = (farmId) => { //  removeFarm - params: farmId
let specific = this.farms.find(item => item.farmId ===farmId);
let farmIndex = this.farms.indexOf(specific);
this.farms.splice(farmIndex, 1);}

this.updateFarm = function(farmId, name, farmer, phone, address){ //  updateFarm - params: farmId, name, farmer, phone, address
let specificFarm = this.farms.find(item => item.farmId ===farmId)
specificFarm.farmId =farmId;
specificFarm.name =name;
specificFarm.farmer =farmer;
specificFarm.phone =phone;
specificFarm.address =address;}

this.getFarm = (farmId)=>{ //  getFarm - params: farmId - returns a farm object
console.log(this.farms.find(object=>object.Id===farmId))}

this.addProduct = (productId, name, price) => { //  addProduct - params: productId, name, price
this.product.push({productId,name,price})}


this.removeProduct = (productId) => { //  removeProduct - params: productId
let specific = this.product.find(item => item.productId ===productId);
let productIndex = this.product.indexOf(specific);
this.product.splice(productIndex, 1);}

this.updateProduct = function(productId,name, price){ //  updateProduct - params: productId, name, price
let specificProduct = this.product.find(item => item.productId ===productId)
specificProduct.productId =newProductId;
specificProduct.name = name;
specificProduct.price = price;}

this.getProduct = (productId)=>{ //  getProduct - params: productId - returns a product object
console.log(this.product.find(object=>object.product===productId))}

this.printProducts = ()=>{ //  printProducts - No param, console logs a list of product items with their prices.
console.log()}

this.calculateOrderCost = (productId,quantity)=>{ // calculateOrderCost - params: productId, quantity
let product = this.product.find(object=>object.productId===productId);
console.log(`${quantity} ${product.name} for KES ${quantity*product.price}`);}
}
}

let farmers = new Mkulima();
farmers.addFarm("456","Naima","Salim","0769523085", "Bajuri");
farmers.addFarm("543","Mima","Yusuf","0113247436", "Twaif");
farmers.addFarm("000","Tessa","Marie","0746582746", "Mkomani");
console.log(farmers.farms);

farmers.removeFarm("456");
console.log();

