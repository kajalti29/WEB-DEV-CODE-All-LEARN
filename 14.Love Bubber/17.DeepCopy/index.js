//Deep copy ka matlab hota hai original object ka bilkul naya duplicate banana — top-level aur andar ke nested object dono ka.
let original = {
    name:"kajalati",
    address:{
        city:"Indore"
    }
};
//Deep copy
let copy = JSON.parse(JSON.stringify(original));

//change in copy
copy.name = "ti";
copy.address.city = "Bhopal";

console.log("original:", original);
console.log("copy:",copy);