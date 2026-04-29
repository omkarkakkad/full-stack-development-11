// for (let count = 1; count <= 5; count++) {
//   console.log("omkar kakkad");
// }

let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}

console.log("sum = ", sum);

console.log("loop has ended");

let i = 1;
while (i <= 5) {
  console.log("i=", i);
  i++;
}

let student = {
  name: "omkar kakkad",
  age: 18,
  cgpa: 6.5,
  isPass: true,
};

for (let key in student) {
  console.log("key=", key, "value=", student[key]);
}

for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log("num =", num);
  }
}
