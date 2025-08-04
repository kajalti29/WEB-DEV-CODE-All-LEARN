

let arr = [10, 20, 30, 40, 50];

function getSum(arr) {
    let len = arr.length;
    let sum = 0;
    for(let index = 0; index < len; index++) {
        sum = sum + arr[index]; // 🔁 corrected here
    }
    return sum;
}

let totalSum = getSum(arr);
console.log(totalSum); // Output: 150
