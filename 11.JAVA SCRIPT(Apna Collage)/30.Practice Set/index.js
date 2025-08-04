//Create a function the "function" keywords that takes a String as an argument & returns the number of vowels in the string.
function countVowels(str) {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    return count;
}

// Example usage:
console.log(countVowels("ApnaCollege"));  // Output: 5

