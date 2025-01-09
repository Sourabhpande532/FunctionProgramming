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
/* callback,promises,then & catch */

/*
Real-World Scenario: Task Delegation in a Team
Imagine you're a team leader. Your job is to assign tasks to team members based on their expertise (e.g., design, coding, or testing). You give the task and let the team member (a function) handle it in their specific style. */

const taskDesign = ( task ) => `Designing ${ task }`;
const taskCoding = ( task ) => `Using react Js Design ${ task }`;
const teastingTask = ( task ) => `Teasting ${ task }`;

// Team leader base on experties assign task!
function assignTask( task, teamMember ) {
  return teamMember( task );
}
console.log( assignTask( "Homepage", taskDesign ) );
console.log( assignTask( "Payment Gatway ", taskCoding ) );
console.log( assignTask( "Login Page", teastingTask ) );

/* 
a leader doesn’t do everything themselves but depends on experts (functions) to handle specific tasks efficiently. It showcases flexibility and reuse in both teamwork and coding! */
/*  Question: Restaurant Order
Write a prepareFood function that takes a foodItem (like "chicken") and a cookingStyle function as arguments. The cookingStyle function defines how the food should be prepared.*/

const grilled = ( testFood ) => `Grilled-Spicy ${ testFood }`;
const fried = ( testFood ) => `fried ${ testFood }`;
const prepareFood = ( foodItem, cookingStyle ) => cookingStyle( foodItem );

console.log( prepareFood( "Checken", grilled ) );
console.log( prepareFood( "fish", fried ) );
// OR
// const withSpicyRice = (test)=>`Made with Spicy Rice ${test}`
// function prepareFood(item,madeItemVariety){
//   return madeItemVariety(item)
// }
// console.log(prepareFood("checken",withSpicyRice));

/* Question 1: Perform Operation
Write a function performOperation that takes two numbers and a callback function as arguments. The callback function should define the operation to perform (e.g., addition, subtraction, etc.). */

const addition = ( n1, n2 ) => n1 + n2;
const subtraction = ( n1, n2 ) => n1 - n2;
const product = ( n1, n2 ) => n1 * n2;
function performOperation( num1, num2, calculate ) {
  return calculate( num1, num2 );
}
console.log( performOperation( 8, 9, addition ) );
console.log( performOperation( 30, 14, subtraction ) );
console.log( performOperation( 34, 5, product ) );

/* Question 2: Filter Array
Create a function filterArray that accepts an array and a filtering function. The filtering function decides whether to keep each element in the array. */

const numbersArray = [1, 2, 3, 4, 5, 6];
const isEven = ( num ) => num % 2 === 0;
const isOdd = ( num ) => num % 2 !== 0;
const isDivisibleBy3 = ( num ) => num % 3 === 0;

function filterArray( arr, filtering ) {
  return arr.filter( filtering );
}
console.log( filterArray( numbersArray, isEven ) ); //[2,4,6]
console.log( filterArray( numbersArray, isOdd ) ); //[1,3,5]
console.log( filterArray( numbersArray, isDivisibleBy3 ) ); // [3,6]

/* Question 3: Transform Array
Write a function transformArray that takes an array and a transformation function as arguments. It should apply the transformation function to every element of the array and return a new array. */
let numberList = [1, 3, 5, 4, 5, 7, 56, 8];

const doubleNumber = ( num ) => num * 2;

function transformArray( arrs, processCalc ) {
  return arrs.map( processCalc );
}
console.log( transformArray( numberList, doubleNumber ) ); //[2,6,10,8,10,14,112,16]

/* Question 4: Custom Logger
Create a function customLogger that accepts a message and a logging function as arguments. The logging function should decide how to log the message (e.g., uppercase, prefix, etc.).
const toUpperCase = (msg) => console.log(msg.toUpperCase());
const addPrefix = (msg) => console.log(`INFO: ${msg}`);
customLogger("hello world", toUpperCase); // Output: HELLO WORLD
customLogger("hello world", addPrefix);   // Output: INFO: hello world
 */
const toUpperCase = ( msg ) => console.log( msg.toUpperCase() );
const toLowerCase = ( msg ) => console.log( msg.toLowerCase() );
const addPrefix = ( msg ) => console.log( `lorem-text ${ msg }` );

function customLogger( msg, loggingUtils ) {
  loggingUtils( msg );
}
customLogger( "Hello Sammer", toUpperCase );
customLogger( "HELLOW BUDdy", toLowerCase );
customLogger( "zunk dfj dfj", addPrefix );

/* Question 5: Apply Discounts
Write a function applyDiscount that accepts a price and a discount function. The discount function should calculate the discounted price based on the original price. */

const flatDiscount = ( price ) => price * 0.5;
const percentageDiscount = ( price ) => price * 0.8;

function appleDiscount( price, discount ) {
  return discount( price );
}
console.log( appleDiscount( 100, flatDiscount ) ); //50
console.log( appleDiscount( 200, percentageDiscount ) ); //160

// CAN BE ADDED TO OBJECT EXAMPLE

let printIdea = {};
printIdea.idea = ( idea ) => console.log( `It All About ${ idea }` );
printIdea.idea( "Hello" );

/* 
Imagine you own a coffee shop, and you want to manage customer orders. You decide to create an object called orderSystem that stores functions to handle customer orders efficiently.
In the coffee shop example, the object orderSystem acts like a manager or system that handles all the operations. The functions (methods) are like tools added to this system, enabling it to perform tasks automatically without needing external intervention every time.
This is a real-world application where an object (in this case, orderSystem) contains methods to perform tasks (like addOrder or getTotalEarnings), which is exactly how we "add functions to an object" in JavaScript.
*/

let orderSystem = {
  orders: [],
  // OR
  // addOrder( name, item, price ) {
  //   this.orders.push( { name, item, price } );
  //   console.log( `${ name } ordered ${ item } for ${ price }` );
  // },

  // OR(Avoid .push )
  addOrder( name, item, price ) {
    this.orders = [...this.orders, { name, item, price }];
    console.log( `${ name } orderd ${ item } for Rs ${ price }` );
  },

  // OR
  // addOrder:(orders,name,item,price)=>{
  // const updateArray = [...orders,{name,item,price}];
  // console.log(`${name} orderd for ${item} Rs ${price}`);
  // return updateArray
  // },
  // orderSystem.orders = orderSystem.addOrder(orderSystem.orders, "Bob", "Latte", 5);
  // console.log(orderSystem.orders);

  /* Why { name, item, price } is Used:
     Object Representation: Each order is represented as an object to group related data (customer name, item, and price) together. This makes the data easier to manage and understand.
     const getPizzaList = orderSystem.orders.filter((order) => order.item === "pizza");
     console.log(getPizzaList); */

  // FUNCTION TO LIST ORDER
  // OR 
  // listOrder() {
  //   if ( this.orders.length === 0 ) {
  //     console.log( "No order deal" );
  //   } else {
  //     console.log( "Orderd List" );
  //     this.orders.forEach( ( order ) => {
  //       console.log( `${ order.name } order ${ order.item } for ${ order.price }` );
  //     } );
  //   }
  // },

  // OR 
  listOrder() {
    if ( this.orders.length === 0 ) {
      return `No Order found`
    } else {
      return this.orders.map( ( order ) => `orderd ${ order.name } Ordered item i.e ${ order.item }, for RS ${ order.price }` )
    }
  },


  // FUNCTION TO REMOVE ORDER
  // OR
  // removeOrder( name ) {
  //   // Find the first element with a string value name and return index
  //   let index = this.orders.findIndex( ( order ) => order.name === name );
  //   if ( index !== -1 ) {
  //     console.log( `Order for ${ this.orders[index].name } has been remove` );
  //     this.orders.splice( index, 1 );
  //   } else {
  //     console.log( `No order found for ${ name }` );
  //   }
  // },

  // OR 
  removeOrder( name ) {
    // save the original value length
    let originalLength = this.orders.length;
    // remove item 
    this.orders = this.orders.filter( itemName => itemName.name !== name );
    if ( this.orders.length < originalLength ) {
      console.log( `The ${ name } has been removed successfully` );
    } else {
      console.log( `The ${ name } still it remain` );
    }
  },

  // FUNCTION TO TOTAL ALL ITEM

  // getTotalOrder() {
  //   let total = this.orders.reduce(
  //     ( sum, itemPrice ) => sum + itemPrice.price,
  //     0
  //   );
  //   console.log( `Total of all orders is ${ total }` );
  //   return total;
  // },
  getTotalOrder() {
    let total = 0;
    for ( let i = 0; i < this.orders.length; i++ ) {
      total += this.orders[i].price;
    }
    console.log( total );
  }
};

orderSystem.addOrder( "harish", "pizza", 34 );
orderSystem.addOrder( "Dhamu The killar", "pizza", 90 );
orderSystem.addOrder( "Baman", "pizza", 34 );
orderSystem.addOrder( "Mahesh", "Rasgulla", 35 );
orderSystem.addOrder( "Hitesh", "Kulfi", 35 );
orderSystem.removeOrder( "harish" );
orderSystem.removeOrder( "Baman" )
console.log( orderSystem.orders );
// OR
// orderSystem.listOrder()
// List Order 
let orderListSummary = orderSystem.listOrder();
console.log( orderListSummary );
if ( Array.isArray( orderListSummary ) ) {
  console.log( "Summary List" );
  orderListSummary.forEach( ( summary ) => console.log( summary ) )
} else {
  console.log( orderListSummary );
}
orderSystem.getTotalOrder();

// // FILTER OUT SPECIFIC ITEM
// const getPizzaList = orderSystem.orders.filter(
//   ( order ) => order.item === "pizza"
// );
// console.log( getPizzaList );


// /*
//  Imagine we are managing a to-do list, where each task is represented as an object in an array. Here's how filter and the logic you're struggling with work: */
const todoList = {
  tasks: [
    { id: 1, name: "Clen the store" },
    { id: 2, name: "Find Gloceries" },
    { id: 3, name: "Keep your kichen clean" }
  ],

  // RESPOSIBLE FOR ADD TASK
  addTaskss( id, name ) {
    this.tasks = [...this.tasks, { id, name }];
    console.log( `add task id${ id } and ${ name }` );
  },

  // RESPOSIBLE FOR TASK LIST 
  taskList() {
    if ( this.tasks.length === 0 ) {
      return "No Such task found"
    } else {
      console.log( "List Task" );
      return this.tasks.map( ( task ) => `Task Id: ${ task.id } And work assign that is ${ task.name }`
      )
    }
  },

  // RESPOSIBLE FOR TASK LIST 
  removeTaskItem( taskName ) {
    // Save the Original length of array list item
    let originalLenght = this.tasks.length;
    // remove item
    this.tasks = this.tasks.filter( task => task.name !== taskName );

    // Check if the task was removed
    if ( this.tasks.length < originalLenght ) {
      console.log( `The "${ taskName }" has been removed` );
    } else {
      console.log( `No such task found` );
    }
  },

  // RESPOSIBLE FOR TASK LIST 
  // OR 
  getTotalList() {
    let total = 0;
    for ( const task of this.tasks ) {
      total += task.id;
    }
    return total;
  }
  // getTotalList(){
  // let total = this.tasks.reduce((acc,sum)=>acc+sum.id,0)
  // return total;
  // }
}

todoList.removeTaskItem( "Clen the store" )
todoList.addTaskss( 4, "Gas Godaun" )
const taskListSum = todoList.taskList();

if ( Array.isArray( taskListSum ) ) {
  console.log( "List of Task Item" )
  taskListSum.map( ( summary ) => console.log( summary ) )
} else {
  console.log( taskListSum );
}
let resultTotal = todoList.getTotalList()
console.log( resultTotal );
console.log( todoList.tasks );

console.log("---- ---- ----")
/* 
Create an object student with the following functions:
addGrade(subject, grade) - Adds a grade for a specific subject.
getGrade(subject) - Returns the grade for the given subject.
calculateAverage() - Calculates and returns the average of all grades. */
const student = {

}
student.addGrade("Math",88);
student.addGrade("Science",89);
