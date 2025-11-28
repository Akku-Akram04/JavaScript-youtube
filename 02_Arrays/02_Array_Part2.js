const arr = [1, 2, 3, [4, 5, [6, 7]]];
const arr2 = [10, 11, 12, [13, 14, 15]];

const arrConcat = arr.concat(arr2); //Concat
console.log(arrConcat);

console.log(...arrConcat); //spread operator

const newArr = arrConcat.flat(Infinity); //flat operator
console.log(arrConcat);
console.log(newArr);

c;
