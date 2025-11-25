let score = "33";
// console.log(typeof score); //string
// console.log(score); //33

let valueInNumber = Number(score);

// console.log(typeof valueInNumber); //number
// console.log(valueInNumber); //33
// ------------------------------------
let runs = "33abc";
// console.log(typeof runs); //string
// console.log(runs); //33abc

let valInNum = Number(runs);

// console.log(typeof valInNum); //number
// console.log(valInNum); //Nan

// ------------------------------

let value = null;
// console.log(typeof value); //object
// console.log(value); //null

let number = Number(value);
// console.log(typeof number); // number
// console.log(number); // 0

let myNumber = undefined;
// console.log(typeof myNumber);
// console.log(myNumber);

let nullToNumber = Number(myNumber);
// console.log(typeof nullToNumber);
// console.log(nullToNumber);

// 33 => 33
// 33abc => Nan
// true => 1 false =>0

let isNumber = 1;
// console.log(typeof isNumber);
// console.log(isNumber);

let isBoolean = Boolean(isNumber);
// console.log(typeof isBoolean);
// console.log(isBoolean);

let str = ""; //If empty then false else true
console.log(str);

let strToBoolean = Boolean(str);
console.log(strToBoolean);
