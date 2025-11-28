const add = (num1, num2) => {
  return num1 + num2;
};
// console.log(add(12, 12));

const add1 = (num1, num2) => num1 + num2;
// console.log(add1(2, 4));

const add2 = (num1, num2) => num1 + num2;
// console.log(add2(2, 4));

const person = {
  name: "Akram",
  email: "akram@123.com",

  welcomeMessage: function () {
    console.log(`${this.name} ,welcome to my website`);
    console.log(this);
  },
};

// person.welcomeMessage();
// person.name = "Danish";
// person.welcomeMessage();

// console.log(this); //Empty in Node js but default object is printed in browser

function chai() {
  let username = "Akram";
  console.log(this); //some values are printed
  console.log(this.username); //undefined is printed
}
// chai();

const chai1 = () => {
  let username = "Akram";
  console.log(this); //some values are printed
  console.log(this.username); //undefined is printed
};

// chai1();

function regular() {
  console.log(arguments); // Works
}
// regular();

const arrow = () => {
  console.log(arguments); // ReferenceError or refers to arguments from outer scope
};
// arrow(1, 2, 3);

// Solution: use rest parameters
const arrow1 = (...args) => {
  console.log(args); // [1, 2, 3]
};
// arrow1(1, 2, 3);

const Person = (name) => {
  console.log((this.name = name));
};

// Person("Alice"); // TypeError: Person is not a constructor

const man = (name) => {
  console.log((this.name = name));
};

man("Akram"); // TypeError: Person is not a constructor
