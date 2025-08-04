//Filter methods:filter() JavaScript ka array method hai jo har element par condition (true/false) check karta hai aur sirf wahi elements return karta hai jo condition ko satisfy karte hain.

//👉 Ye naya array return karta hai.
//👉 Original array change nahi hota.

/*
let newArray = originalArray.filter(function(element, index, array) {
    return condition;
});
*/


//Example 1: Even Numbers Ko Filter Karna
let numbers = [1, 2, 3, 4, 5, 6];
let even = numbers.filter(num => num % 2 == 0);
console.log(even);

//Age > 18 wala log
/*let users = [
    {name: "kajalti", age:17},
    {name: "aayush", age:20},
    {name: "Asha", age:15},
    {name: "rani", age:22}
];
let adults = users.filter(user => user.age > 18);
console.log(adults); */


//String Filter karna
/*let names = ["apple", "banana", "grapes", "kiwi"];
let longNames = names.filter(name => name.length > 5);
console.log(longNames); // ["banana", "grapes"]
*/
