// Hoisting in Javascript
// console.log(getName);

// var x = 7;
// function getName(){
//     console.log("Namaste Javascript")
// }
// getName();
// console.log(x);
// console.log(getName)

// Functions
// var x = 1;
// a()
// b()
// console.log(x)
// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// Shortest Javascript Program is the blank

// Undefined and not defined;
// var a = 7;

// Lexical Environment and scope chain

// function a() {
//   var b = 10;
//   c();
//   function c() {
//   }
// }
// a();
// console.log(b);

// let & const in JS
// let a = 10;
// var b = 100;
// a = 200

// console.log(a);

// var a = 20;
// {
//     let a = 30;
//     console.log(a)
// }
// console.log(a)

// Closures

// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   return y;
// }
// const z = x();
// z();

// Interview

// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function close(y) {
//       setTimeout(function () {
//         console.log(y);
//       }, y * 1000);
//     }
//     close(i);
//   }
// function x() {
//   for (var i = 1; i <= 5; i++) {
//     function y(val){
//         setTimeout(function () {
//           console.log(val);
//         }, 1000 * val);
//     }
//     y(i)
//   }
// }
// x()
//   console.log("Namaste Javascript");
// }
// x();

// function outer() {
//   var a = 10;
//   return function inner() {
//     console.log(a);
//   };
// }
// outer()();

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//   };
// }

// function Counter() {
//   var count = 0;
//   this.increment = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrement = function () {
//     count--;
//     console.log(count);
//   };
// }

// var counter1 = new counter();

// counter1.increment()

// function statement aka function Declaration
// a();
// function a() {
//   console.log("a called");
// }

// // function expression
// console.log(b);
// var b = function () {
//   console.log("b called");
// };

// anonymous function
// function(){

// }
// Named function expression

// Deifference between parameters and Argument?

// First Class Functions

// Arrow Functions

// Callbacks
// setTimeout(function () {
//   console.log("Timeout");
// }, 5000);
// function x(y) {
//   console.log('x');
//   y()
// }

// x(function y() {
//   console.log("y");
// });
// function counterFunc(){
//     let count = 0;
//     document
//       .getElementById("clickMe")
//       .addEventListener("click", function xyz() {
//         console.log("Button Clicked", ++count);
//       });

// }
// counterFunc();

// Event Loop

// Little brain work
// let arr = ["Gideon", "Okon", "Odiokine"];
// let currentCount = 0;
// setInterval(() => {
//     let randomIndex = Math.floor(Math.random() * arr.length);

//     console.log(arr[randomIndex])
// //   document.getElementById("name").innerHTML =` <p>Name: ${arr[currentCount]}</p>`;
// //   currentCount++;
// //   if (currentCount >= arr.length) {
// //     currentCount = 0;
// //   }
// }, 4000);

// Functional Programming and Higher Order Functions
// function x(){
//     console.log("Namaste")
// }

// function y(x){
//     console.log("Y")
//     x()
// }

const radius = [3, 1, 2, 4];

const calculateArea = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

const calculateCircumference = (radius) => {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i]);
  }
  return output;
};

// console.log(calculateArea(radius));
// console.log(calculateCircumference(radius));

// Optimise Version of the above code using functional programming

const area = (radius) => {
  return Math.PI * radius * radius;
};

const circumference = (radius) => {
  return Math.PI * radius;
};

const diameter = (radius) => {
  return 2 * Math.PI * radius;
};

// Array.prototype.calculate = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//     ``;
//   }
//   return output;
// };

// console.log(calculate(radius, area));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, diameter));
// console.log(radius.map((ele) => area(ele)));
// console.log(radius.map(area));
// console.log(radius.calculate(area));

// MAP, FILTER, REDUCE
const arr = [5, 1, 3, 2, 6];
// Array.prototype.loop = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//     output.push(logic(this[i]));
//   }
//   return output
// };

function double(item) {
  return item * 2;
}
function tripple(item) {
  return item * 3;
}
function binary(item) {
  return item.toString(2);
}

// const output = arr.map(binary);
// const result = radius.map((itx)=> Math.PI * itx * itx)
// console.log(result)
// console.log(output)

// Filter
// Array.prototype.removeFilter = function (logic) {
//   const output = [];
//   for (let i = 0; i < this.length; i++) {
//    if(logic(this[i])){
//      output.push(this[i])
//    }
//   }
//   return output;
// };

// function greaterThanFour(x) {
//   return x > 4;
// }
// // const output = arr.removeFilter(greaterThanFour);
// const output = arr.filter(greaterThanFour);

// console.log(output);

// Reduce
// Sum or max

// Array.prototype.reduce2 = function () {
//   let sum = 0;
//   let curr = 0;
//   for (let i = 0; i < this.length; i++) {
//     sum += this[i];
//     curr = this[i];
//   }
//   return sum;
// };

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }

// const output = arr.reduce(function (acc, curr) {
//   return (acc = acc + curr);
// }, 0);
// const outputMax = arr.reduce(function (max, curr) {
//   if (curr > max) {
//     max = curr;
//   }
//   return max
// }, 0);
// console.log(outputMax);
// console.log(findMax([5, 1, 3, 2, 6]));
// console.log([1, 2, 3, 4, 5, 6].reduce2());

const users = [
  { firstName: "Gideon", lastName: "Odiokine", age: 26 },
  { firstName: "Victor", lastName: "Samm", age: 97 },
  { firstName: "Okon", lastName: "Bassey", age: 67 },
  { firstName: "Atim", lastName: "John", age: 26 },
];

const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);

// console.log(fullNames)

// const output = users.reduce((user, curr) => {
//   if (user[curr.age]) {
//     user[curr.age]++;
//   } else {
//     user[curr.age] = 1;
//   }
//   return user;
// }, {});

// console.log(output);

// const ofThirty = users.filter((user) => user.age < 30);
// console.log(ofThirty);
