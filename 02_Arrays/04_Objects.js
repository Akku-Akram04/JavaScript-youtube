const mySymbol = Symbol("key1");

const person = {
  name: "Akram",
  "full name": "Akram Ahmed",
  [mySymbol]: "mykey1",
  location: "Darjeeling",
  state: "West Bengal",
  email: "akram@1234@ggggg.com",
  isLoggedIn: true,
  lastLoginDays: ["Monday", "Tuesday", "Wednesday", "Thursday"],
};

// console.log(person["name"]);
// console.log(person.name);

// console.log(person["full name"]);

// console.log(person[mySymbol]);
// console.log(typeof person[mySymbol]);

console.log(person);
// Object.freeze(person); //Now updation will be done in person object as it is freezedn

person.greeting = function () {
  console.log("Hello JS users");
};

person.greetingTwo = function () {
  console.log(`Hello my name is ${this["full name"]}`);
};

console.log(person.greeting());
console.log(person.greetingTwo());
