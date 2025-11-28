const array = [1, 2, 3, 4];

// const intitialValue = 5;

const sumWithInitial = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
  //   intitialValue
);

console.log(sumWithInitial);
