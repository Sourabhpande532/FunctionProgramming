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
      return `No Order found`;
    } else {
      return this.orders.map(
        ( order ) =>
          `orderd ${ order.name } Ordered item i.e ${ order.item }, for RS ${ order.price }`
      );
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
    this.orders = this.orders.filter( ( itemName ) => itemName.name !== name );
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
  },
};

orderSystem.addOrder( "harish", "pizza", 34 );
orderSystem.addOrder( "Dhamu The killar", "pizza", 90 );
orderSystem.addOrder( "Baman", "pizza", 34 );
orderSystem.addOrder( "Mahesh", "Rasgulla", 35 );
orderSystem.addOrder( "Hitesh", "Kulfi", 35 );
orderSystem.removeOrder( "harish" );
orderSystem.removeOrder( "Baman" );
console.log( orderSystem.orders );
// OR
// orderSystem.listOrder()
// List Order
let orderListSummary = orderSystem.listOrder();
console.log( orderListSummary );
if ( Array.isArray( orderListSummary ) ) {
  console.log( "Summary List" );
  orderListSummary.forEach( ( summary ) => console.log( summary ) );
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
    { id: 3, name: "Keep your kichen clean" },
  ],

  // RESPOSIBLE FOR ADD TASK
  addTaskss( id, name ) {
    this.tasks = [...this.tasks, { id, name }];
    console.log( `add task id${ id } and ${ name }` );
  },

  // RESPOSIBLE FOR TASK LIST
  taskList() {
    if ( this.tasks.length === 0 ) {
      return "No Such task found";
    } else {
      console.log( "List Task" );
      return this.tasks.map(
        ( task ) => `Task Id: ${ task.id } And work assign that is ${ task.name }`
      );
    }
  },

  // RESPOSIBLE FOR TASK LIST
  removeTaskItem( taskName ) {
    // Save the Original length of array list item
    let originalLenght = this.tasks.length;
    // remove item
    this.tasks = this.tasks.filter( ( task ) => task.name !== taskName );

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
  },
  // getTotalList(){
  // let total = this.tasks.reduce((acc,sum)=>acc+sum.id,0)
  // return total;
  // }
};

todoList.removeTaskItem( "Clen the store" );
todoList.addTaskss( 4, "Gas Godaun" );
const taskListSum = todoList.taskList();

if ( Array.isArray( taskListSum ) ) {
  console.log( "List of Task Item" );
  taskListSum.map( ( summary ) => console.log( summary ) );
} else {
  console.log( taskListSum );
}
let resultTotal = todoList.getTotalList();
console.log( resultTotal );
console.log( todoList.tasks );

console.log( "---- ---- ----" );
/* 
Create an object student with the following functions:
addGrade(subject, grade) - Adds a grade for a specific subject.
getGrade(subject) - Returns the grade for the given subject.
calculateAverage() - Calculates and returns the average of all grades.
console.log(student.getGrade("Math")); // Output: 90
console.log(student.calculateAverage()); // Output: 87.5
*/
const student = {
  // Use an object to store grades with subjects as keys and grades as values
  // Internal object to store grades
  grades: {},

  // addGrade(subject, grade) - Adds a grade for a specific subject.
  addGrade( subject, grade ) {
    this.grades[subject] = grade;
    console.log( this.grades[subject] );
  },

  //Retrieve Grades: given send subject
  //Implement getGrade(subject) to fetch/return the grade for a specific subject;
  getGrade( subject ) {
    return this.grades[subject] || "No Grade For This Subject";
  },

  // Calculates and returns the average of all grades
  calculteAverage() {
    // The Object.values() static method returns an array of a given object value specially
    // get all grade Value
    const gradeValue = Object.values( this.grades );
    console.log( "Retive grade", gradeValue );
    if ( gradeValue.length === 0 ) return 0;
    // const total = gradeValue.reduce((sum,val)=>sum + val,0);
    let total = 0;
    for ( const add of gradeValue ) {
      total += add;
    }
    return total / gradeValue.length;
  },
};

student.addGrade( "Math", 88 );
student.addGrade( "Science", 89 );
console.log( student.getGrade( "Math" ) );
console.log( student.getGrade( "Science" ) );
console.log( student.calculteAverage() );

/*H.W: Create an object employee that keeps track of an employee's performance in different projects and provides functions to:
addPerformance(project, score): Add a performance score for a specific project.
getPerformance(project): Retrieve the performance score for a given project.
calculateOverallPerformance(): Calculate and return the average performance score across all projects.
*/
const employee = {
  eScore: {},
  addPerformance( project, score ) {
    this.eScore[project] = score;
    console.log( this.eScore[project] );
  },
  getPerformance( project ) {
    return this.eScore[project] || "NO GRADE FOUND FOR THE PROJECt";
  },
  calculteOverallPerfomance() {
    let getAllScore = Object.values( this.eScore );
    if ( getAllScore.length === 0 ) return 0;
    let totalScore = getAllScore.reduce( ( sum, curr ) => sum + curr, 0 );
    return totalScore / getAllScore.length;
  },
};

employee.addPerformance( "PROJECT A", 85 );
employee.addPerformance( "PROJECT B", 98 );
employee.addPerformance( "SCIENCE EXIBITION", 67 );
console.log( employee.getPerformance( "PROJECT A" ) );
console.log( "Total AVERAGE", employee.calculteOverallPerfomance().toFixed( 2 ) );
console.log( employee.eScore );
// HW: can we store employee into array instead of object here

/* Question 2: Shopping Cart
Create an object shoppingCart with the following functions:
addItem(itemName, price) - Adds an item to the cart.
removeItem(itemName) - Removes an item from the cart.
getTotal() - Returns the total price of all items in the cart.

shoppingCart.addItem("Apple", 10);
shoppingCart.addItem("Banana", 5);
console.log(shoppingCart.getTotal()); // Output: 15
shoppingCart.removeItem("Apple");
console.log(shoppingCart.getTotal()); // Output: 5
*/

const shoppingCart = {
  cartStores: {},
  addItem( itemName, price ) {
    this.cartStores[itemName] = price;
    console.log( this.cartStores[itemName] );
  },
  getTotal() {
    let total = Object.values( this.cartStores );
    if ( total.length === 0 ) return 0;
    // let result = total.reduce((sum,curr)=>sum + curr,0);
    let result = 0;
    for ( let i = 0; i < total.length; i++ ) {
      result += total[i];
    }
    return result;
  },
  // removeItem( itemName ) {
  //   if ( this.cartStores.hasOwnProperty( itemName ) ) {
  //     delete this.cartStores[itemName]
  //     console.log( `Item ${ itemName } has been removed from cart` );
  //   } else {
  //     console.log( `Item ${ itemName } has been found from cart` );
  //   }
  // }
  // OR
  // removeItem(itemName){
  // if(this.cartStores.hasOwnProperty(itemName)){
  //   this.cartStores = Object.fromEntries(Object.entries(this.cartStores).filter(([key])=>key !== itemName));
  //   console.log(`${itemName} has been removed`);
  // }else{
  //   console.log(`${itemName} has yet found!`);
  // }
  // }
  /*
  Object.entries(this.cartStores) converts the object into an array of key-value pairs..filter(([key]) => key !== itemName) removes the entry with the specified key.
  Object.fromEntries() converts the filtered array back into an object. */
  // OR
  removeItem( itemName ) {
    let newCart = {};
    for ( let key in this.cartStores ) {
      if ( key !== itemName ) {
        newCart[key] = this.cartStores[key];
      }
    }
    // Replace cartStore Replaces the original cartStores object with the newly created newCart object.
    this.cartStores = newCart;
    console.log( `${ itemName } removed from the cartss.` );
  },
};
/* 
For key = "Laptop":
Condition: "Laptop" !== "Laptop" → False.
Skip this item.
-----------------
For key = "Iphone":
Condition: "Iphone" !== "Laptop" → True.
Add to newCart: newCart["Iphone"] = 130.
 */

shoppingCart.addItem( "Laptop", 120 );
shoppingCart.addItem( "Iphone", 130 );
shoppingCart.addItem( "washing machine", 100 );
console.log( shoppingCart.getTotal() );
shoppingCart.removeItem( "Laptop" );
console.log( shoppingCart.cartStores );
console.log( shoppingCart.getTotal() );

console.log( "----------------" );
/* Question 3: Library Management
Create an object library with the following functions:
addBook(bookName) - Adds a book to the library.
borrowBook(bookName) - Marks a book as borrowed if it exists.
listAvailableBooks() - Lists all books that are not borrowed. 
const library = {
  // Add functions here
};
library.addBook("The Alchemist");
library.addBook("1984");
library.borrowBook("1984");
console.log(library.listAvailableBooks()); // Output: ["The Alchemist"]
*/
let library = {
  bookStore: [],
  addBook( bookName ) {
    // Check if the book already exists to avoid duplicates
    if ( this.bookStore.find( ( book ) => book.name === bookName ) ) {
      console.log( `The ${ bookName } is already Exits` );
      return;
    }
    // Add the book with borrowed status set to false
    // this.bookStore.push({name:bookName,borrowed:false})
    // avoid immutability
    this.bookStore = [...this.bookStore, { name: bookName, borrowed: false }];
  },
  borrowedBook( bookName ) {
    const book = this.bookStore.find( ( book ) => book.name === bookName );
    if ( !book ) {
      console.log( `This ${ bookName } does not exist` );
    } else if ( book.borrowed ) {
      console.log( `This book ${ bookName } is already borrowed` );
    } else {
      book.borrowed = true;
      console.log( `it has been recently borrowed ${ bookName }` );
    }
  },
  listOfBorrowedAvailable() {
    return this.bookStore
      .filter( ( book ) => !book.borrowed )
      .map( ( book ) => book.name );
  },
};

library.addBook( "The Alchemist" );
library.addBook( "1948" );
library.addBook( "Jungle Book" );
console.log( library.bookStore );
library.addBook( "1948" ); //duplicate
library.borrowedBook( "1948" );
library.borrowedBook( "1948" ); //already borrowed
console.log( library.listOfBorrowedAvailable() );
// console.log(library.borrowBook("1948"));
// console.log(library.listOfAvailableBooks());
// console.log(library.bookStore);

/* Scenario: Car Rental Management
Create an object carRental with the following functions:
addCar(carName) - Adds a car to the rental system.
rentCar(carName) - Marks a car as rented if it's available.
listAvailableCars() - Lists all cars that are not currently rented.
const carRental = {
  // Add functions here
};
carRental.addCar("Toyota Corolla");
carRental.addCar("Honda Civic");
carRental.rentCar("Honda Civic");
console.log(carRental.listAvailableCars()); // Output: ["Toyota Corolla"]
*/
const carRental = {
  carStore: [],
  addCar( carName ) {
    let findCar = this.carStore.find( ( car ) => car.name === carName );
    if ( findCar ) {
      console.log( `Already exits!! This car ${ carName }` );
      return; // Stops execution of the function ensure not duplicate don't want to procced further i.e use return keyword
    }
    // This line won't run if the book already exists
    this.carStore = [...this.carStore, { name: carName, rent: false }];
    console.log( `This car has been added ${ carName }` );
  },

  /*   rentCar( carName ) {
      let car = this.carStore.find( markCar => markCar.name === carName );
      console.log( "find use:", car );
      if ( !car ) {
        console.log( `Car Does not Exit in list ${ carName }` );
      } else if ( car.rent ) {
        console.log( `Car already Rented` );
      } else {
        car.rent = true;
        console.log( `Mark! ${ carName } has been rented Recently` );
      }
    }, */
  rentCar( carName ) {
    let carIndex = this.carStore.findIndex( ( car ) => car.name === carName );
    if ( carIndex === -1 ) {
      console.log( `Car you are looking it for Not Avalable ${ carName }` );
    } else if ( this.carStore[carIndex].rent ) {
      console.log( `it has already rented ${ carName }` );
    } else {
      this.carStore = this.carStore.map( ( car, index ) =>
        index === carIndex ? { ...car, rent: true } : car
      );
      console.log( `${ carName } has been rented.` );
    }
  },

  listOfCarList() {
    return this.carStore.filter( ( car ) => !car.carName ).map( ( car ) => car.name );
  },
};
carRental.addCar( "Toyota Corolla" ); //added
carRental.addCar( "Toyota Corolla" ); //already exits
carRental.addCar( "Honda Civic" ); //added
carRental.addCar( "Swift Desire" );

carRental.rentCar( "Honda Civic" ); //has been rented
carRental.rentCar( "Honda Civic" ); //car already rented
console.log( carRental.listOfCarList() );
console.log( carRental.carStore );

console.log( "------------------" );
/* 
Question 4: Bank Account
Create an object bankAccount with the following functions:

deposit(amount) - Adds money to the account.
withdraw(amount) - Deducts money if the balance is sufficient.
getBalance() - Returns the current balance.
const bankAccount = {
  // Add functions here
};

bankAccount.deposit(1000);
bankAccount.withdraw(200);
console.log(bankAccount.getBalance()); // Output: 800
*/
let bankAccount = {
  balance: 0,
  deposit( amount ) {
    if ( amount <= 0 ) {
      console.log( `Amount must be greter than 0` );
      return;
    }
    this.balance += amount;
    console.log( `Deposited: ${ amount }, Updated Balance New: ${ amount }` );
  },
  withdraw( amount ) {
    if ( amount <= 0 ) {
      console.log( `Withdraw amount must be greater than 0` );
      return;
    }
    if ( amount > this.balance ) {
      console.log( "Insufficient Balance: Please Try later" );
      return;
    }
    this.balance -= amount;
    console.log( `Withdraw: ${ amount }, current Balance: ${ this.balance }` );
  },
  getList() {
    return this.balance;
  },
};
bankAccount.deposit( 1000 );
bankAccount.withdraw( 200 );
console.log( `Available Balance:`, bankAccount.getList() );
/* PRACTICE: 
Create an object wallet with the following functionalities:
addMoney(amount): Adds money to the wallet.
spendMoney(amount): Deducts money if there is enough balance.
checkBalance(): Returns the current balance in the wallet.*/
const wallet = {
  balance: 0,
  addMoney( amount ) {
    if ( amount <= 0 ) {
      console.log( `Amount should be greater than 0` );
      return;
    }
    this.balance += amount;
    console.log( `ADD MONEY: ${ amount }` );
  },
  spendMoney( amount ) {
    if ( amount <= 0 ) {
      console.log( `Amount Greter than Zero` );
      return;
    }
    if ( amount > this.balance ) {
      console.log( `Insufficient Funds` );
      return;
    }
    this.balance -= amount;
    console.log( `Withdraw: ${ amount }, Current Balance: ${ this.balance }` );
  },
};
wallet.addMoney( 500 );
wallet.addMoney( 530 );
wallet.spendMoney( 130 );

/* ORR : SOLVE BY ARRAY:
   Method to add a transaction (positive for deposit, negative for spending)*/
const walletP = {
  transaction: [],
  addTransaction( amount ) {
    this.transaction = [...this.transaction, amount];
  },
  checkBalance() {
    const balance = this.transaction.reduce(
      ( total, current ) => total + current,
      0
    );
    return balance;
  },
  getTrasactionList() {
    return this.transaction;
  },
};
walletP.addTransaction( -500 );
walletP.addTransaction( 300 );
walletP.addTransaction( 400 );
walletP.addTransaction( 500 );
console.log( "Balance:", walletP.checkBalance() );
console.log( walletP.getTrasactionList() );

/* Question 5: Car Operations
Create an object car with the following functions:
start() - Starts the car.
stop() - Stops the car.
drive(speed) - Logs a message with the current speed.
const car = {
  // Add functions here
};
car.start(); // Output: "Car started"
car.drive(60); // Output: "Car is driving at 60 km/h"
car.stop(); // Output: "Car stopped"
*/
const car = {
  isRunning: false,
  starts() {
    if ( this.isRunning ) {
      console.log( "Already Started,Keep a track on it" );
    } else {
      this.isRunning = true;
      console.log( "Car Started" );
    }
  },
  stop() {
    if ( !this.isRunning ) {
      console.log( "Already Stopped" );
    } else {
      this.isRunning = false;
      console.log( "Car Stopped" );
    }
  },
  drive( speed ) {
    if ( this.isRunning ) {
      console.log( `Is in range of ${ speed } km` );
    } else {
      console.log( `You need to start the car first` );
    }
  },
};
car.starts();
car.drive( 45 );
car.stop();
/* NEW Lession: ------------------- */

/* 4)  IT CAN BE ADDED TO ARRAY AS WELL*/
arr = [
  "1",
  "2",
  ( printStatement ) => console.log( `The statment is about ${ printStatement }` ),
  "Rahim",
];
arr[2]( "Publicaly abuse" );

/* Scenario: Customer Support System
Imagine a customer support system where customers can log their issues, and specific actions (like responding to the query or escalating it) are added as functions inside an array. */
const customerSupport = [
  "Pending Support Ticket",
  ( issue ) => console.log( `Logging Issue: ${ issue }` ),
  ( responce ) => console.log( `Responding: ${ responce }` ),
  ( priority ) => console.log( `Escalating ticket with priority: ${ priority }` )
]
// e.g Log an issue 
console.log( customerSupport[0] );
customerSupport[1]( "Cannot Access Account" )
// 2. Respond to the issue
customerSupport[2]( "Reset Your Passed using below link" );
// 3. Escalate the ticket
customerSupport[3]( "High" );

/* Scenario: Classroom Management System
In a classroom management system, a teacher wants to keep track of student activities throughout the day. Activities include marking attendance, assigning homework, and recording grades. Each activity is handled by a function that is added to an array. */

const classroomActivities = [
  //Each function performs a specific task, ensuring modularity.
  // markAttendance 
  ( student, status ) => {
    student.attendence = status ? "Present" : "Absent";
    return student;
  },
  // Assign Homework
  ( student, homework ) => {
    student.homework = homework;
    return student
  },
  // Assign Grade 
  ( student, grade ) => {
    student.grade = grade;
    return student;
  },

  ( student ) => {
    console.log( "Student Report" );
    console.log( `Name: ${ student.name }` );
    console.log( `Attendance: ${ student.attendence }` );
    console.log( `Homework: ${ student.homework }` );
    console.log( "Grade:", student.grade );
    // return student
  }

]
let scholar = { name: "Alex" };
scholar = classroomActivities[0]( scholar, true );
scholar = classroomActivities[1]( scholar, "MATH EXERCISE 5" )
classroomActivities[2]( scholar, "A" )
classroomActivities[3]( scholar )

/* Scenario: E-Commerce Order Processing System
In an e-commerce system, orders go through multiple stages, such as adding to the cart, applying discounts, calculating tax, and generating a summary. Each stage is implemented as a function stored in an array. */

const orderPipeline = [
  // Adding a cart 
  (order, item) => {
    if (item) {
      // order.items.push(item);
      order.items = [...order.items, item]
    } else {
    }
    return order;
  },
  /* OR:
   (order, item) => {
    order.items.push(item); // Assumes valid items only
    return order;
  }, */

  // apple discount 
  ( order ) => {
    if ( order.totalAmount > 50 ) {
      order.discount = 10;
      order.totalAmount -= order.discount;
    }
    return order;
  },

  // calculate tax 
  ( order ) => {
    order.tax = order.totalAmount * 0.08
    order.totalAmount += order.tax;
    return order
  },

  ( order ) => {
    if ( order.totalAmount > 95 ) {
      order.deliveryStatus = "Free Delivery"
    } else {
      let deliveryStatus = 50
      order.deliveryStatus = `Additional Charge RS ${ deliveryStatus }`
      order.totalAmount += deliveryStatus;
    }
    return order;
  },

  ( order ) => {
    console.log( `Order Item name: ${ order.items.join( ", " ) }` )
    console.log( `Discount: ${ order.discount || 0 }` )
    console.log( `Tax: ${ order.tax.toFixed( 2 ) }` );
    console.log( `Total Price: ${ order.totalAmount.toFixed( 2 ) }` );
    console.log( `Delivery Status: ${ order.deliveryStatus }` );
    return order
  }
]

const addItem = (order,itemList)=>{
itemList.forEach((item)=>{
  order = orderPipeline[0](order,item)
});
return order;
}

let myOrder = { items: [], totalAmount: 0 }
myOrder = addItem(myOrder, ["Laptop","Pen","Pencil"])

// myOrder = orderPipeline[0]( myOrder, "Laptop" )
// myOrder = orderPipeline[0]( myOrder, "Pen" )
myOrder.totalAmount = 90;

myOrder = orderPipeline.reduce((order,step) => step(order),myOrder)

// myOrder = orderPipeline[1]( myOrder ) //apple Discount
// myOrder = orderPipeline[2]( myOrder ) //Calculate Tx
// myOrder = orderPipeline[3]( myOrder ) //Deliver status  
// myOrder = orderPipeline[4]( myOrder ) //Generate Summary 
console.log( myOrder )