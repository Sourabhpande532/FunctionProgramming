console.log("Practice Question on Function Programming");
console.log(
  "Why it is necessory because it gives a mental model using which you can write better react code"
);
// can be assign to variable

/* Question 1: Multiply Numbers
Write a function called createMultiplier that accepts a number as an argument and returns a function. The returned function should multiply its input by the number passed to createMultiplier. */
// const createMultiplier = num => multipleNum => num * multipleNum;
// OR
function createMultiplier(num) {
  return function (multipleNum) {
    return num * multipleNum;
  };
}
const double = createMultiplier(9);
console.log(double(2));
const triple = createMultiplier(5);
console.log(triple(3));

/* 
REAL WORLD SCENARIO EXAMPLE
Imagine you run a bakery, and you have different types of cookies. You want a function that calculates the price of cookies based on their cost per cookie and the number of cookies a customer buys.*/

// function createPricingPerCookie(pricePerCookie){
//     return function(quantity){
//         return quantity * pricePerCookie
//     }
// }
// OR
const createPricingPerCookie = (pricePerCookie) => (quantity) =>
  quantity * pricePerCookie;
const chocoletPriceCookie = createPricingPerCookie(50);
const outmealPriceCookie = createPricingPerCookie(25);
console.log(chocoletPriceCookie(5));
console.log(outmealPriceCookie(8));

/* Question 2: Greeting Message
Create a function called greet that takes a greeting as a parameter (like "Hello") and returns another function. The returned function should take a name as a parameter and log a greeting message.
const sayHello = greet("Hello");
sayHello("Alice"); // Output: Hello, Alice!
*/

function greet(greeting){
    return function(name){
        return greeting + name
    }
}

// OR
// const greet = greeting => name => greeting + name;
const sayHello = greet("Hello,")
console.log(sayHello("Alice"))
const sayHi = greet("HI,");
console.log(sayHi("BoB"))
const sayGoodBuy = greet("Good By Get well soon!");
console.log(sayGoodBuy(" Anurag"));

/* 
Question 3: Array Mapping

Write a function applyToAll that accepts an array and a function. It should apply the function to every element of the array and return a new array.
const numbers = [1, 2, 3, 4];
const square = (num) => num * num;
console.log(applyToAll(numbers, square)); // Output: [1, 4, 9, 16]
*/
// OR 
// function applyToAll(array,func){
//     return array.map(func)
// }

// BY Using Spread operator 
// OR 
function applyToAll(array,func){
// Spread creates a shallow copy, ensuring immutability does not change original one 
return [...array].map(func);
}
/* The spread operator ensures a copy is made, maintaining immutability.
The .map() method processes the copied array without altering the original. */

const numbers = [1,2,3,4,5];
const cube = num => num * num * num;
console.log(applyToAll(numbers,cube));


// BY Using rest parameter
function applyToAllNum(incre, ...num){
    return num.map(incre)
}
const increment2 = num => num + 2;
console.log(applyToAllNum(increment2, 4,9,8,7,12))

/* When to Use Rest vs. Spread:
Spread (...array): Used to create a copy of an existing array or to spread elements into individual arguments.
Rest (...params): Used to gather multiple individual arguments into an array.
-Combines all arguments into an array.
-Makes the function flexible to accept multiple elements as inputs.

In Short:
Use the rest parameter if you want the function to accept individual values as arguments.
Use the spread operator if you’re processing an existing array immutably.
*/
// H.W Conver all into arrow function