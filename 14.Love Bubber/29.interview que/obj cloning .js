//spred oprator
/*
let src = {
    age:12,
    wt:60,
    ht:180,
};
let dest = {...src};

src.age = 90;

console.log("src:", src);
console.log("dest:", dest);
*/


//assign(obj cloning)
/*
let src = {
    age:12,
    wt:60,
    ht:180,
};

let src2 = {
    value:101,
    name:"Love babbar"
}

let dest =  Object.assign({}, src, src2);

src.age = 90;

console.log("src:", src);
console.log("dest:", dest);

*/


//iteration method
let src = {
    age:12,
    wt:60,
    ht:180,
};

let dest = {};
//cloning using iteration
for(let key in src){
    let newKEY = key;
    let newValue = src[key];
    //insert newKey and value in dest and create a clone 
    dest[newKEY] = newValue;
}


console.log("src:", src);
console.log("dest:", dest);