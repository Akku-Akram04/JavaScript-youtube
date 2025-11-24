let score = "33";
console.log(typeof score); //string
console.log(score); //33

let valueInNumber = Number(score);

console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33
// ------------------------------------
let runs = "33abc";
console.log(typeof runs); //string
console.log(runs); //33abc

let valInNum = Number(runs);

console.log(typeof valInNum); //number
console.log(valInNum); //Nan

// ------------------------------

let value = null;
console.log(typeof value); //object
console.log(value); //null

let number = Number(value);
console.log(typeof number); // number
console.log(number); // 0
