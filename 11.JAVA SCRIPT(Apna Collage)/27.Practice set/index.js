/*Create an array to store companies-"Bloomberg","Microsoft","Uber","Google","IBM","Netflix".
a. Remove the first company from the array
b. Remove uder and add Ola in its place
c. Add Amazon at the end

let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
companies.shift();  // removes "Bloomberg"
console.log(companies);


// b. Remove "Uber" and add "Ola" in its place
let index = company.indexOf("Uber");
if (index !== -1) {
    company.splice(index, 1, "Ola")
}

// c. Add "Amazon" at the end
company.push("Amazon");

console.log(company);
*/

let company = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// a. Remove the first company
company.shift();

// b. Remove "Uber" and add "Ola" in its place
let index = company.indexOf("Uber");
if (index !== -1) {
    company.splice(index, 1, "Ola");
}

// c. Add "Amazon" at the end
company.push("Amazon");

console.log(company);
