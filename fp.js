console.log( "Practice Question on Function Programming" );
console.log(
  "Why it is necessory because it gives a mental model using which you can write better react code"
);
// CAN BE ASSIGN TO VARIABLE

/* 
REAL WORLD SCENARIO EXAMPLE
Imagine you run a bakery, and you have different types of cookies. You want a function that calculates the price of cookies based on their cost per cookie and the number of cookies a customer buys.*/

// function createPricingPerCookie(pricePerCookie){
//     return function(quantity){
//         return quantity * pricePerCookie
//     }
// }
// OR
const createPricingPerCookie = ( pricePerCookie ) => ( quantity ) =>
  quantity * pricePerCookie;

const chocoletPriceCookie = createPricingPerCookie( 50 );
const outmealPriceCookie = createPricingPerCookie( 25 );
console.log( chocoletPriceCookie( 5 ) );
console.log( outmealPriceCookie( 8 ) );

/* Question 1: Multiply Numbers
Write a function called createMultiplier that accepts a number as an argument and returns a function. The returned function should multiply its input by the number passed to createMultiplier. */
// const createMultiplier = num => multipleNum => num * multipleNum;
// OR
function createMultiplier( num ) {
  return function( multipleNum ) {
    return num * multipleNum;
  };
}
const double = createMultiplier( 9 );
console.log( double( 2 ) );
const triple = createMultiplier( 5 );
console.log( triple( 3 ) );

/* Question 2: Greeting Message
Create a function called greet that takes a greeting as a parameter (like "Hello") and returns another function. The returned function should take a name as a parameter and log a greeting message.
const sayHello = greet("Hello");
sayHello("Alice"); // Output: Hello, Alice!
*/

function greet( greeting ) {
  return function( name ) {
    return greeting + name;
  };
}

// OR
// const greet = greeting => name => greeting + name;
const sayHello = greet( "Hello," );
console.log( sayHello( "Alice" ) );
const sayHi = greet( "HI," );
console.log( sayHi( "BoB" ) );
const sayGoodBuy = greet( "Good By Get well soon!" );
console.log( sayGoodBuy( " Anurag" ) );

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
// function applyToAll(array,func){
// // Spread creates a shallow copy, ensuring immutability does not change original one
// return [...array].map(func);
// }
const applyToAll = ( array, func ) => [...array].map( func );

/* The spread operator ensures a copy is made, maintaining immutability.
The .map() method processes the copied array without altering the original. */

const numbers = [1, 2, 3, 4, 5];
const cube = ( num ) => num * num * num;
console.log( applyToAll( numbers, cube ) );

// BY Using rest parameter
// function applyToAllNum(incre, ...num){
//     return num.map(incre)
// }
const applyToAllNum = ( incre, ...num ) => num.map( incre );
const increment2 = ( num ) => num + 2;
console.log( applyToAllNum( increment2, 4, 9, 8, 7, 12 ) );

/* When to Use Rest vs. Spread:
Spread (...array): Used to create a copy of an existing array or to spread elements into individual arguments.
Rest (...params): Used to gather multiple individual arguments into an array.
-Combines all arguments into an array.
-Makes the function flexible to accept multiple elements as inputs.

In Short:
Use the rest parameter if you want the function to accept individual values as arguments.
Use the spread operator if you’re processing an existing array immutably.
*/

/* Question 4: Function as a Timer
Write a function createTimer that takes a delay in milliseconds and returns another function. The returned function should log a message after the specified delay when it’s called. */

// function createTimer(delay){
//   return function(){
//     setTimeout(()=>{
//     console.log("Times Up! after 5 sec")
//     },delay)
//   }
// }
// OR
const createTimer = ( delay ) => () => {
  setTimeout( () => {
    // console.log( "Times Up! after 5 sec" );
  }, delay );
};

const fiveSecondTimer = createTimer( 5000 );
// fiveSecondTimer(); // Logs "Time's up!" after 5 seconds

/*
Question 5: Filter Words
Create a function filterWords that takes an array of words and a filtering function. The filtering function decides which words to keep. Return a new array of filtered words.*/

// function filterWords(word,func){
//   return word.filter(func)
// }
// OR
const filterWords = ( word, func ) => word.filter( func );
const words = ["cherry", "date", "apple", "anuj", "banana"];
const startWithA = ( words ) => words.startsWith( "a" );
console.log( filterWords( words, startWithA ) );
/* 
-startsWith(): A string method used to check the beginning of a string
-The .startsWith() method is a string method, not an array method or a variable. */

/* Question 5: Assign and Call
Write a function add that takes two numbers as parameters and returns their sum. Assign this function to a variable called sumFunction and use the variable to call the function. */
// function add(a,b){
//   return a + b
// }
const add = ( a, b ) => a + b;
const sumFunction = add;
console.log( sumFunction( 3, 7 ) );
console.log( sumFunction( 3, 12 ) );
/* Question 7: Function as a Variable
Create a function greet that takes a name as a parameter and returns a greeting message. Assign this function to a variable called sayHello. Use sayHello to greet multiple people. */
// function greets(name){
//   return `Good Morning! to you ${name}`
// }
const greets = ( name ) => `Welcome ${ name }`;
const sayGoodMornig = greets;
console.log( sayGoodMornig( "Anuj" ) );
const sayBuy = greets;
console.log( sayBuy( "Rushikesh" ) );
const printName = ( printtLength ) =>
  console.log( `My name is ${ printtLength } long` );
printName( 8 );

// SENT TO OTHER FUNCTION AS ARGUMENTS

/*
Real-World Scenario: Task Delegation in a Team
Imagine you're a team leader. Your job is to assign tasks to team members based on their expertise (e.g., design, coding, or testing). You give the task and let the team member (a function) handle it in their specific style. */

const taskDesign = (task)=> `Designing ${task}`
const taskCoding = (task)=> `Using react Js Design ${task}`
const teastingTask = (task)=>`Teasting ${task}`

// Team leader base on experties assign task! 
function assignTask(task,teamMember){
  return teamMember(task)
}
console.log(assignTask("Homepage",taskDesign));
console.log(assignTask("Payment Gatway ",taskCoding));
console.log(assignTask("Login Page",teastingTask))

/* 
a leader doesn’t do everything themselves but depends on experts (functions) to handle specific tasks efficiently. It showcases flexibility and reuse in both teamwork and coding! */

/*  Question: Restaurant Order
Write a prepareFood function that takes a foodItem (like "chicken") and a cookingStyle function as arguments. The cookingStyle function defines how the food should be prepared.*/

const grilled = (testFood)=> `Grilled-Spicy ${testFood}`
const fried = (testFood)=> `fried ${testFood}`
const prepareFood = (foodItem,cookingStyle)=>cookingStyle(foodItem)

console.log(prepareFood("Checken",grilled));
console.log(prepareFood("fish",fried));
// OR 
// const withSpicyRice = (test)=>`Made with Spicy Rice ${test}`
// function prepareFood(item,madeItemVariety){
//   return madeItemVariety(item)
// }
// console.log(prepareFood("checken",withSpicyRice));