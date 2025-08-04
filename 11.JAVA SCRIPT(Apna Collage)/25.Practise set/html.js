// For a given array with prices of 5 items -[250,645,300,900,50] All items have offer of 10% OFF on them. Change the array to store final price after applying offer.
let price = [250,654,300,900,50]
 
for(let i = 0; i < price.length; i++){
    let offer = price[i] * 10 / 100;
    price[i] = price[i] - offer;
}

console.log(price)