const array = {
  name: " Akram",
  age: 26,
  address: { city: "Darjeeling", state: "West-Bengal" },
};
console.log(array);

array.address.city = "Noida";
array.address.state = "Uttar Pradesh";
const shallowCopy = { ...array };
console.log(shallowCopy);

const array2 = {
  name: "Akram",
  age: 29,
  address: { city: "Darjeeling", state: "West-Bengal" },
};

console.log(array2);
const deepCopy = structuredClone(array2);
console.log(deepCopy);

deepCopy.address.city = "Noida";
deepCopy.address.state = "Uttar Pradesh";

console.log(deepCopy);

//----------------------------------------------------------------------------------------//
const numberArray = [1, 23, 4, 5];
// console.log(numberArray);

// console.log(numberArray.push(12));

const shallowCopyArray = [...numberArray];
// console.log(shallowCopyArray);
// console.log(numberArray);

const arrrrrr = numberArray;

// console.log(arrrrrr);

const number = [1, 2, 3, 4, 5];
// console.log(number);

// const deepCopy = structuredClone(number.push(11));
// console.log(number);

// console.log(deepCopy);

const numbers = [33, 44, 55, 66, 77];
// console.log(numbers);

const deepCopy2 = JSON.parse(JSON.stringify(numbers));
// console.log(deepCopy2 + "," + "\nSize" + deepCopy2.push(99));
