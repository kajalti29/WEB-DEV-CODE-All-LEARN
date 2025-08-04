//
let arr = [10, 20,30, 40];

let ans = arr.reduce((acc, curr) =>{
    return acc + curr;
}, 0);

console.log(ans);