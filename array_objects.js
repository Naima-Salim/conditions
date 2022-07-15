let a=[{name:"naima",
        age:22},
{name:"tessa",
age:34},
{name:"tut",
age:19}]

console.log(a[1]["age"]);
console.log(a.filter(item=>item.age>=20));
a.map(x=>console.log(x.age))
let b=a.find(x=>x.name==="naima")
return b