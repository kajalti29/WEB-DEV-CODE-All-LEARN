//console.log("k");

//shallow copy
let original = {
    name:"kajalti",
    address:{
        city:"Indore"
    }
};

let copy = {...original};
copy.name = "ti";
copy.address.city = "Bhopal";

console.log("original:", original);
console.log("copy:", copy);

