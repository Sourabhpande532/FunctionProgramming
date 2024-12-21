console.log( "Function Programming" );
/* Function Programming it just like bread and butter for React as i know and function as first class citizen why
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
const word = ["sourabh","prashant","pande","Savita","Bhiwapur"];
const result = word.filter((words)=> words.length > 6);
console.log(result)

/* Problem Statement: 
Write a function which can tell whether a number is less than 10 or not, supply this function to Array.filter() to get an array with more than  no 10's in it*/
const numberArray = [2,34,5,6,66,4,9,10];
//it's more readable and constructive methode
const isMoreThan10 = num => num > 10; 
// Declarative 
let supplyFunction = numberArray.filter(isMoreThan10) 
// const resultArr = numberArray.filter((num)=>num.length < 10)
console.log(supplyFunction)

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
const isIncrementBy2 = num => num + 2; 
/*
 why outside? if you feel it can use this multiple no. of times it Saves Times/best practice instead individual it's ok outside as well as inside np; */
console.log("Updated",numberArray.map(isIncrementBy2))
console.log(numberArray === numberArray.map(isIncrementBy2)) //false


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
const array1 = [1,2,3,4];
// create function separately for reuse & use pure function
const reducer = (preVal,currVal)=>preVal + currVal;
/* this reducer is function & you'r returning this if you don't return this values the next iteration it's run it will not have previous value it'll have undefined how becz the preVal become currVal And this is how it'll preVal 0 by default
1,2,3,4; 0+1 => 1; 1 + 2 = 3; 3+3=6; 6+4=10
return of function(preVal+currVal) it's become preVal play's crusial role for next iteration How does it see follow example
NOTE: preVal Always by default zero
*/
console.log(array1.reduce(reducer))//10
console.log(array1.reduce(reducer,5))//15

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
let reducers = [1,3,5,99,11,12];
let numberSum = (acc,curr)=>{
  if(curr < 10){
    acc = acc + curr
  }
  return acc;
};
let supp = reducers.reduce(numberSum,0)
console.log(supp)//9
/* H.W: [1,3,5,2,22,11,9]
Question1: Find the sum of odd number in the array i.e 33;
Question2: return an object with sum of odd number and sum of even number i.e {oddSum:55,evenSum:88}
*/
let itemArray = [1,3,5,2,22,11,9];
let sumOdd = (acc,curr)=>{
  //For each element in the array, check if it's odd. If true, add it to acc[0].
  if(curr % 2 !== 0){
    acc[0] = acc[0] + curr
  }
  return acc
}
 // Initialize with an array containing [0]
let findResult = itemArray.reduce(sumOdd,[0])
console.log(findResult)
let sumOddEven = (acc,curr)=>{
  if(curr % 2 !== 0){
    acc.oddSum = acc.oddSum + curr
  }else{
    acc.evenSum = acc.evenSum + curr
  }
  return acc
}
let sumEvenResult = itemArray.reduce(sumOddEven,{oddSum:0,evenSum:0})
console.log(sumEvenResult)

