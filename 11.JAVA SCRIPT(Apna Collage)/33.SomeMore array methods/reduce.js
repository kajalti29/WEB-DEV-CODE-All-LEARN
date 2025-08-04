const number = [1,2,3,4,5];

const sum = number.reduce(function(acc, curr){
    return acc + curr;

}, 0);

console.log(sum);