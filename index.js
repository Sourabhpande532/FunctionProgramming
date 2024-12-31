console.log( "Function Programming for React");
/* 
-It just a building block,it just a mental model using which you can write better react  
-Function Programming it just like bread and butter for React as i know and function as first class citizen why
after 2 years of experience you'll not write features,you'll writing your own code,own function,your own error handling framework,api's, your logging framework on frontend,some abstraction on state management not only features base if ther is card if i click the state should be change. so how it helps us see fp*/

/*🕯️🕯️🕯️ Note: Do Homework all 5 concept of function Programming in depth manner */

// 1) it can be assign to variable .
const printName = ( printLength ) =>
  console.log( `Oh! my name is ${ printLength } long` );
printName( "Sourabh Pande" );
// 2) sents the other functions as argument
/* while learning about callback,learning about promises... */

// Function that accepts another function as an argument (callback)
let processString = ( input, callback ) => {
  console.log( `processing input is: ${ input }` );
  callback( input.length );
};
// A callback function
const printLength2 = ( len ) => {
  console.log( `the length of string is ${ len }` );
};

// using the function
processString( "sourabh prashant pande", printLength2 );
processString( "Damini Sayasikamal", printLength2 );

/* Home work
function inquiryThief(name,attemp){
    let totalCase = 8
    console.log(`The name of thief is ${name}`)
    attemp(totalCase)
}
const printCaseAttemp = (count)=>{
    console.log(`Murder: ${count}`)
}

inquiryThief("Rohit Thakur",printCaseAttemp) */

// 3) can be added to object
let Obj = {};
Obj.printName = ( printAge ) => console.log( `The age in between ${ printAge }` );
Obj.printName( 45 );

// 4) can be added to array as well
arr = [
  "1",
  "2",
  ( printStatement ) => console.log( `The statment is about ${ printStatement }` ),
  "Rahim",
];
arr[2]( "Publicaly abuse" );

// 5) can be return from other function
// A function that returns another function
function foodStall( dishType ) {
  // return `here is your ${dishType}`
  return function( ingredient ) {
    return `Here is your ${ dishType } made with ${ ingredient }`;
  };
}
// Calling the food stall to get a chef for 'pasta'
const pastaChef = foodStall( "Pasta" );

// Now using the chef to make pasta with 'tomato sauce'
console.log( pastaChef( "tomato sauce" ) );
// Output: Here is your pasta made with tomato sauce

const pizzaChef = foodStall( "Pizza" );
console.log( pizzaChef( "Cheese" ) );

/*🕯️🕯️🕯️ Note: Do Homework all 5 concept of function Programming in depth manner */

/* function createMultiple(multiplier){
return function (value){
    return value * multiplier;
}
}
// Creates a function to double a value
let double = createMultiple(2);
// Creates a function to triple a value
let triple = createMultiple(3);

console.log(double(5));
console.log(triple(5)) */

/* conclusion: A Function is core peace of Javascript, you can use Javascript for fn as well as imperative Programming
citizen kya hota hai : Javascript is country and function is first class citizen because they'v all the right's which the other citizen have whatever array,variable have whatever you can with those you can do with function as.*/
console.log( "----- ----- -----" );
/* Declarative Programming in js especiallly react uses ....

remember in vanila js we used to do thing .getElementById .innerhtml but with react you've never have to do such thing bcz we have seen how react abstract away DOM Creation given the this react library comes form function Programming..instead of saying how it should work say what should happen that's mantra
-and as we all fp is larger part of Programming
-why Declarative p : bcz it takes care all dom manipulation u'r innerhtml,innerText
*/

/* why function Programming(FP):
-Firstly it does not depend on global variable so due to that less bugs face 
-Easier to understand and read ...
-more code reuce (becz everything within small function and component)
-super easy to test
*/

/*🤔 How to do functional Programming ? see below The concept of 🤔immutibility
what does it mean?? 
-it do not change any data Always return a new copy
Note: function argument are refference to actual data in JS
-Question❓❓: How does it happen Take an object with your mother's name and your age:
Now,Create an obj for your sibling(e.g tanvi) by age difference by 4 from into your age*/

let sourabh = { mother: "Savita", age: 24 };
console.log( sourabh );
let mrunal = { ...sourabh, age: sourabh.age - 4 };
console.log( mrunal ); //called immutibility doesn't change the data

console.log( sourabh === mrunal );

// create a copy of sourabh (avoid)
mrunal = sourabh; //it create a refference not copy itself
console.log( "mrunal age", mrunal );
mrunal.age = sourabh.age - 4;
console.log( "Mrunal Age Updated", mrunal );
// This is anothr way to change age but it won't help us it show inconcitency because it chane value of sourabh see below e.g. mrunal age is Updated but along with sourabh also Updated we didn't want this we want immutibility(unchange) this copy didn't work
console.log( "Sourabh's Age Updated", sourabh );

// Question❓❓: take an arry with 5 color create another arry by adding two color on it
let arr1 = ["red", "green", "blue", "pink", "white"];
let arr2 = [...arr1, "yellow", "black"];
console.log( "Updated One", arr2 );
console.log( "Original One", arr1 );
console.log( arr1 === arr2 );

/* 🤔 Pure Functions 
input ➡️➡️⬆️📔 ➡️➡️⬆️Output
for same input the Output will Always be same 
it has 3 rule Always follow 
-🍽️At least one Argument,
-🍽️return a value or other function
-🍽️should not mutate any of it's Argument
Statement: write a function birthday() to take a person name's and age in an objects and increase age. 
*/

// old approach
// function birthday(name,age){
// console.log(`The name of birthday boy is ${name} & and now his turn it into ${age+1}`)
// }
// let birthdayInfo = {name:"Manushi",age:21};
// birthday(birthdayInfo.name, birthdayInfo.age)

/* 
Only if you want to change one peace of object age so follow this methode using ES6 So today you know name and age but some times or tommarow that person can have address,email,details then what you would do anything which inside object{} copy all like this ...person and change rest of thing and change one peace of code i.e age we didn't change Original obj */

const calculateBirthAge = ( person ) => ( {
  ...person,
  // name: person.name = "Vaishnavi Sinha",
  address: ( person.address = "Guru deo Ward No. 8 bhiwapur" ),
  age: person.age + 1,
} );
let rahulBirthday = { name: "Rahul Sinha", address: "Vimal Chouk", age: 34 };
console.log( "current age", rahulBirthday );
let afterBirthdayAge = calculateBirthAge( rahulBirthday );
console.log( "Updated age", afterBirthdayAge );
console.log( rahulBirthday === afterBirthdayAge );

/* 🤔 Higher Order function 
- it can take function as Arguments
- return function (it can)
- or both 

FILTER:
firstly understand: what is Array.filter() and what filter does here -filter takes an function an run its on every element of array see example e.g see 
-it's return an array 
first it'll check if condition true or false if true Then put it into an array [] if condition false Discard value ....
Note: filter is chota bhai aap map
similary for filter there is function defined 
[3,34,4,23,4].filter(fn)
let fn = num => num < 10 //return either true or false 
1)filter'll see there is array & function & i've been called i'll take one by one e.g 3 => 3 < 10 :true = 3
34 = 3< 34 :false = discard ... all value put into new array and this is how All works!

*/
const word = ["sourabh", "prashant", "pande", "Savita", "Bhiwapur"];
const result = word.filter( ( words ) => words.length > 6 );
console.log( result );

/* Problem Statement: 
Write a function which can tell whether a number is less than 10 or not, supply this function to Array.filter() to get an array with more than  no 10's in it*/
const numberArray = [2, 34, 5, 6, 66, 4, 9, 10];
//it's more readable and constructive methode
const isMoreThan10 = ( num ) => num > 10;
// Declarative
let supplyFunction = numberArray.filter( isMoreThan10 );
// const resultArr = numberArray.filter((num)=>num.length < 10)
console.log( supplyFunction );

/*Problem Statement: 
-❓Given an array of number, return an array with all number incremented by 2.
-❓Given an array of numbers return an object for each item. 
*/
// const isIncreBy2 = numberArray.map((num)=>{
//   return num+2
// })
// console.log(isIncreBy2) Or .map is immutate and pure function it doesn't change Original one

/* MAP 
Explanation:let's have  
NOTE: 
-.Map takes a function run that function for every element in the array and every iteration it return one item at a time talk about function(fn) this function return one item at time see below 
-And Map takes this all item and put it into new array and return it.
CODE:
[2,3,4,345,3].map(fn)
let fn = num => num + 2; 
it'll start check one by one 2 => 2+2 = 4;...till 3 = 3+2 = 5;
.map is emmutate and pure function it doesn't change Original one
*/
const isIncrementBy2 = ( num ) => num + 2;
/*
 why outside? if you feel it can use this multiple no. of times it Saves Times/best practice instead individual it's ok outside as well as inside np; */
console.log( "Updated", numberArray.map( isIncrementBy2 ) );
console.log( numberArray === numberArray.map( isIncrementBy2 ) ); //false

/* [].reduce(fn)
-To return one final value after inerating on every item in a array 
-basically it takes a function and it returns one value it reduces the array into one value 
-it takes accumalator and currentValue talk about accumalator it's basically function fn will take acc,curr kya accmulate kr rahe coming from previous one,what is current value and value of array one at a time 
#CODE: [].reduce(fn)
fn(acc,curr)
acc => coming from previous run  
curr => value of array one at a time 
return => Updated value of accumalator

-it's very important without this you'll not understand half of react like redux,useReducer 
-reducer function takes 4 Argument
-METHODE: 
NOTE: H.W Can you write your own reduce using for loop Ask in interview Question❓
How does it see follow example
*/
const array1 = [1, 2, 3, 4];
// create function separately for reuse & use pure function
const reducer = ( preVal, currVal ) => preVal + currVal;
/* this reducer is function & you'r returning this if you don't return this values the next iteration it's run it will not have previous value it'll have undefined how becz the preVal become currVal And this is how it'll preVal 0 by default
1,2,3,4; 0+1 => 1; 1 + 2 = 3; 3+3=6; 6+4=10
return of function(preVal+currVal) it's become preVal play's crusial role for next iteration How does it see follow example
NOTE: preVal Always by default zero
*/
console.log( array1.reduce( reducer ) ); //10
console.log( array1.reduce( reducer, 5 ) ); //15

/* reduce:Explanation
Task: sum of all the number which is less than 10 
[1,3,5,99,11,12].reduce(reducer,0)
-everytime that reducer function will run it'll get two value 
(acc,curr) value & you can run anything 
=>if(curr < 10){
acc = acc + curr
}
return acc; 
(0,1)=> 1<10; if true; then 0+1 = return 1(1 is stored)
(1,3)=> 3<10; if true; then 1+3 = return 4
(4,5)=> 5<10; if true; then 4+5 = return 9
(9,99)=> 99 < 10;if false return the accmulate value from previous i.e 9 
(9,11)
*/
// see above explanation
let reducers = [1, 3, 5, 99, 11, 12];
let numberSum = ( acc, curr ) => {
  if ( curr < 10 ) {
    acc = acc + curr;
  }
  return acc;
};
let supp = reducers.reduce( numberSum, 0 );
console.log( supp ); //9
/* H.W: [1,3,5,2,22,11,9]
Question1: Find the sum of odd number in the array i.e 33;
Question2: return an object with sum of odd number and sum of even number i.e {oddSum:55,evenSum:88}
*/
// data structure
let itemArray = [1, 3, 5, 2, 22, 11, 9];

// logic
let sumOdd = ( acc, curr ) => {
  //For each element in the array, check if it's odd. If true, add it to acc[0].
  if ( curr % 2 !== 0 ) {
    acc[0] = acc[0] + curr;
  }
  return acc;
};
// iteration peace
// Initialize with an array containing [0]
let findResult = itemArray.reduce( sumOdd, [0] );
console.log( findResult );
let sumOddEven = ( acc, curr ) => {
  if ( curr % 2 !== 0 ) {
    acc.oddSum = acc.oddSum + curr;
  } else {
    acc.evenSum = acc.evenSum + curr;
  }
  return acc;
};
let sumEvenResult = itemArray.reduce( sumOddEven, { oddSum: 0, evenSum: 0 } );
console.log( sumEvenResult );

// data structure
let numbersX = [2, 3, 5, 6, 44, 33, 23];
// logic Part
let oddSumVal = ( acc, curr ) => ( curr % 2 === 0 ? acc : acc + curr );
// you can use instead acc=sum and curr=num
// iteration peace come's from return
let resultOddSum = numbersX.reduce( oddSumVal, 0 );
console.log( resultOddSum ); //64
// Logic part
const reduceOddEven = ( getOddEven, num ) =>
  num % 2 === 0
    ? { ...getOddEven, even: getOddEven.even + num }
    : { ...getOddEven, odd: getOddEven.odd + num };
let oddEvenObj = { even: 0, odd: 0 };
// console.log(oddEvenObj === reduceOddEven(oddEvenObj,22)) //false
let resultOddEven = itemArray.reduce( reduceOddEven, oddEvenObj );
console.log( resultOddEven );

// odd
/* function reduceOddEven(getOddEven,num){
  if(num % 2 === 0){
    return {...getOddEven,
      even:getOddEven.even + num
    }
  }else{
    return {
      ...getOddEven,
      odd:getOddEven.odd + num
    }
  }
} 
let oddEvenObj = {even:0,odd:0}
let resultOddEven = itemArray.reduce(reduceOddEven,oddEvenObj);
console.log(resultOddEven)
*/


/* 
@CURRING
:When to use curying when we don't have specific value at that time 
-const add = (num1,num2) => num1+num2 as earlier we use see //previously below to more presice 351 line
-👍sometimes it's difficult to have both values at the same time it might will come later in some scenario so from that point of view currying come into play 
-👍you'll get one value & stored that value in function inside function bez you don't have global variable in function Programming so currying is basically way of saving one value into an function and then using & calling that function after it later 
-👍Let's supoose behind the API so you get first data from API then 2nd date will get after later e.g for API perspective use those currying ... for later coming part stored
-👍function 1 return function & function 2 will return addition of its number (value of both added)

Question: create a function which takes your name and return a function which would add your name to anything(msg)
*/

// previously:
// -function 1 return function & function 2 will return addition of its number (value of both added)
const add = ( num1, num2 ) => num1 + num2;
console.log( add( 4, 4 ) ); //8
// after introduce es6 try to solve on terminal inspect
const addNum = ( num1 ) => ( num2 ) => num1 + num2;
// console.log(addNum(3)(9))//12
console.log( typeof addNum )

const addTwoNumber = addNum( 29 );
console.log( addTwoNumber( 71 ) );

const nameLogger = ( name ) => ( msg ) => console.log( `${ name } says, ${ msg }` );
const sourabhLogger = nameLogger( "Saahu" );
// console.dir(sourabhLogger)
// fetch("xyz").then(msg=>sourabhLogger(msg))//you can use calling api
sourabhLogger( "This movie is superstart" );

// or methode but diffent names
function statementLog( statement ) {
  return function( about ) {
    console.log( `${ statement } claimed, ${ about }` );
  };
}
const statementDeclared = statementLog( "Adani has" );
statementDeclared(
  "By USA CBI That you'r under warrent to make frauds of 500 corod"
);

/* function coffeeOrder(type) {
  return function(size) {
      if (type === "espresso") {
          if (size === "small") return "Your espresso costs $2.";
          if (size === "medium") return "Your espresso costs $3.";
          if (size === "large") return "Your espresso costs $4.";
      }
      if (type === "latte") {
          if (size === "small") return "Your latte costs $3.";
          if (size === "medium") return "Your latte costs $4.";
          if (size === "large") return "Your latte costs $5.";
      }
      return "Invalid coffee type or size!";
  };
}

// Step 1: Create an order for a latte
const latteOrder = coffeeOrder("latte");

// Step 2: Add the size to complete the order
const orderMessage = latteOrder("medium");

console.log(orderMessage); // Output: "Your latte costs $4." */


/* 
@COMPOSATION:
Mostly use in react 
output of 1 function as input to another function
in More details: Two function f(x),g(x) output of f(x) should go to g(x) i.e g(f(x))
e.g: const add = (num1,num2) => num1 + num2;
console.log(add(3,4)) //7 
-this is prime example of COMPOSATION the output of this function the input to outer function 
-is this callback No. in callback you call the function later when you callback it required function [].map() but when you do console.log(...data) it's require data

Question1:
Write a function which can log any text with your userName.
another function which can write any text with your userID.
Now,compose both function to pure one function which can log any text with book userName + userID; 
*/
const addNumbers = ( num1, num2 ) => num1 + num2;
// console.log(addNumbers(3,66))

const double = num => num * 2;
// double(addNumbers(45,55))
console.log( double( addNumbers( 45, 55 ) ) )
console.log( addNumbers( double( addNumbers( 2, 3 ) ), 10 ) )

const logWithMyName = msg => `Sourabh Says, ${ msg }`;
const logWithMyID = msg => `ID: 123456 :: ${ msg }`;
const logWithIDAndName = msg => logWithMyID( logWithMyName( msg ) )
console.log( logWithIDAndName( "Believe in process No matter how it is!" ) );

// INTERVIEW POINT OF VIEW (HW):: Write a function compose which can take any number of function and return a function which will run the given function in order when called with an argument
//NOTE: Write the function compose leater you can use n times needs 
// requirement:: currying,reduce,COMPOSATION rest parameter,we don't know how many values can be passed to compose
//e.g let increment = num => num + 1
//e.g let square = num => num * num
//e.g let incrementThenSquare = compose(increment,square) compose(2)//9

const compose = (...func) => (input) => func.reduce((acc,fn)=>fn(acc),input)
const increment = num => num + 2;
const minusOne = num => num -1;
const cube = num => num * num * num;
const processNumber = compose(increment,minusOne,cube);
console.log(processNumber(2))

/* @Explanation
First Iteration:
acc = 3 (initial value of input).
fn = doubleNum (first function in the array).
fn(acc) = doubleNum(3) = 3 * 2 = 6. */

// OR 
// function compose( ...fun ) {
//   // The ...functions rest parameter collects all the arguments passed to compose and stores them in an array.
//   return ( input ) => {
//     // The result of fn(acc) becomes the input (acc) for the next function.
//     return fun.reduce( ( acc, fn ) => fn( acc ), input );
//   };
// }
// const doubleNum = num => num * 2;
// const increment = num => num + 1;
// const square = num => num * num;
// let incrementThenSquare = compose( doubleNum, increment, square );
// console.log( incrementThenSquare( 3 ) )

