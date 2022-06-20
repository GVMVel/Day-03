// For of loop.
var b = ["green", "red", "tree"]
let arrjson = JSON.stringify(b);
for(let ele of arrjson){
    console.log(arrjson);
}
// for in loop.
var a={
    name: "Balaji",
    age: 25,
    mail: "balaji@gmail"
}
let objJSON =JSON.stringify(a)
for(let ele in objJSON){
    console.log(+objJSON);
}
//For each loop.
var a=["apple", "orange", "cherry"];
let each = JSON.stringify(a);
a.forEach(myFunction);
console.log(each);
function myFunction(item, index, arr){
    arr[index]= item;
}
