//FInd:find() ek JavaScript array method hai jo pehla element return karta hai jo condition ko satisfy karta hai.

/*let result = array.find(function(element) {
  return condition;
});
*/


// Example 1: Even Number Find Karna

let numbers = [1, 2, 3, 4, 5];

let newnumbers = numbers.find(num => num % 2 === 0);
console.log(newnumbers);
