// String interpolation is a technique used in programming to embed expressions or variables directly into strings in a concise and readable way. Instead of manually concatenating strings with + or similar operators, you use a special syntax that evaluates the expression and inserts the result into the string.

// String interpolation in JavaScript is done using Template Literals (also called template strings), introduced in ES6 (ECMAScript 2015).

const name = "Akram";
const age = 26;
const city = "Darjeeling";

// Basic interpolation
console.log(`Hello, my name is ${name} and I am ${age} years old.`);
// → Hello, my name is Alice and I am 28 years old.

// Expressions inside ${}
console.log(`Next year ${name} will be ${age + 1} years old.`);
// → Next year Alice will be 29 years old.

console.log(`I live in ${city.toUpperCase()}.`);
// → I live in TOKYO.

// Multi-line strings (no need for \n)
console.log(`Welcome ${name}!

Thank you for joining us.
Your account is now active.`);
// Preserves line breaks and formatting
