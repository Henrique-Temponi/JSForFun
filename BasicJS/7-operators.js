// {+ - / * ** %} -> arithmetics
console.log("Operations with arithmetics");
console.log("");

const num1 = 5;
const num2 = 10;
console.log(num1 + num2);

const num3 = 2;
const num4 = 10;
console.log(num3 ** num4);

console.log(num1 + num2 * num3);
console.log((num1 + num2) * num3);

console.log(num3 / num4);
console.log(num3 % num4);

console.log("");
console.log("counting operator");
console.log("");

let count = 1; // 1
console.log(count);
count++; // 2
console.log(count);

console.log(++count); //3
console.log(count++); //3
console.log(count); // 4

console.log(--count); // 3
console.log(count--); // 3
console.log(count); // 2



count = 0;

count = count = 2; // 2
console.log(count);
count = count = 2; // 4
console.log(count);
count = count = 2; // 6
console.log(count);

// or we can do

count = 0;

count += 2; //2
console.log(count);
count += 2; //4
console.log(count);
count += 2; //6
console.log(count);

console.log("");
console.log("Converting types");
console.log("");

//convert types
let numbers = parseInt('20'); // 20
console.log(numbers);

numbers = parseFloat("20.1"); // 20.1
console.log(numbers);

numbers = parseInt("yet"); // NaN
console.log(numbers);

numbers = Number('20'); // 20
console.log(numbers);