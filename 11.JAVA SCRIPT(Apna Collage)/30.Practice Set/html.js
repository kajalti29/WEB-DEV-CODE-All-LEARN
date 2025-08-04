
//Create an arrow function to perform the same task
const countVowels = (str) => {
    let count = 0;
    for (let char of str.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count++;
        }
    }
    return count;
};

// Example:
console.log(countVowels("ApnaCollege"));  // Output: 5
