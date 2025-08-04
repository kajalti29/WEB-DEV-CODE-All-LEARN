// Get input from the user
let num = prompt("Enter a number:");

// Convert input to a number (optional but safe)
num = Number(num);

// Check if it's a multiple of 5
if (num % 5 === 0) {
       console.log(num + " is a multiple of 5");
} else {
       console.log(num + " is NOT a multiple of 5");
}
