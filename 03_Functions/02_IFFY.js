(() => console.log("Hello"))();

(function (name) {
  console.log("Hi " + name);
})("Alice");

const myName = (name) => {
  console.log(`Hi, ${name}`);
};

myName("Akram");

// 1. Most common style (grouped with parentheses)
(function () {
  var secret = "I'm private!";
  console.log("Hello from 2010!");
})();

// 2. Crockford style (parentheses inside)
(function () {
  console.log("Also valid");
})();
