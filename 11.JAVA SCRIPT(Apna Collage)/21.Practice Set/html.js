//Create a game where you start with any random game number.Ask the user to keep gussing the game number until the user enter correct value.
let gameNum = 25;
let userNum = Number(prompt("Guess the game number:"));

while (userNum !== gameNum) {
  userNum = Number(prompt("You entered wrong number. Guess again:"));
}

console.log("Congratulations, you entered the right number!");
