//map() ek array method hai jo array ke har element pe operation lagata hai, aur ek naya array return karta hai.

//Original array change nahi hota

//syntax:let newArray = oldArray.map(function(element, index, array) {
    // return new value
//});

let numbers = [1,2,3,4,5];

let doubleds = numbers.map(function(num){
    return num * 2

});
console.log(doubleds);




