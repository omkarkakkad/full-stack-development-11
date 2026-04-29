let gameNum = 5;

let userNum = prompt("Guess the game number: ");

while (userNum != gameNum) {
  userNum = prompt("you entered wrong number. Guess again : ");
}

console.log("congratulations, you entered the right number");

let marks = [97, 82, 75, 64, 36];
console.log(marks);
console.log(marks.length);

let heroes = ["ironman", "thor", "spiderman", "hulk"];

console.log(heroes);

let cities = ["mumbai", "pune", "bengaluru", "delhi"];

for (let city of cities) {
  console.log(city.toUpperCase());
}
