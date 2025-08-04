//for...in:-Object ke keys (property names) ke liye

/*for (let key in object) {
  // object[key]
}
*/

let student = {
    name:"kaju",
    age: 21,
    city:"Indore"
};

for(let key in student){
    console.log("key:", student[key]);
}