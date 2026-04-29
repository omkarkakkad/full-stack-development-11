let a = 5;
let b = 2;

let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}

if (mode === "light") {
  color = "white";
}

console.log(color);

console.log("a = ", a, " & b = ", b);
console.log("a + b = ", a + b);

console.log("a - b = ", a - b);

let c = 6;
let d = 2;

let age = 25;

if (age > 18) {
  console.log(" you can vote");
}

console.log("c = ", c, "d = ", d);
c = c + 1;
console.log("c = ", c);

console.log("a == b", a == b);

// let num = 10;

// if (num % 2 === 0) {
//   console.log(num, "num is even");
// } else {
//   console.log(num, "num is odd");
// }

// let age = 25;

// let result = age >= 18 ? "adult" : "not adult";
// console.log(result);

let num = prompt("enter a number: ");

if (num % 5 === 0) {
  console.log(num, "is a multiple of 5");
} else {
  console.log(num, "is not a multiple of 5");
}
