console.log("Function Programming")
/* Function Programming it just like bread and butter for React as i know and function as first class citizen why
after 2 years of experience you'll not write features,you'll writing your own code,own function,your own error handling framework,api's, your logging framework on frontend,some abstraction on state management not only features base if ther is card if i click the state should be change. so how it helps us see fp*/

/*🕯️🕯️🕯️ Note: Do Homework all 5 concept of function Programming in depth manner */

// 1) it can be assign to variable .
const printName = (printLength)=>console.log(`Oh! my name is ${printLength} long`)
printName("Sourabh Pande")
// 2) sents the other functions as argument 
/* while learning about callback,learning about promises... */

// Function that accepts another function as an argument (callback)
let processString = (input,callback)=>{
console.log(`processing input is: ${input}`)
callback(input.length)
}
// A callback function
const printLength2 = (len)=>{
    console.log(`the length of string is ${len}`)
}

// using the function
processString("sourabh prashant pande",printLength2)
processString("Damini Sayasikamal",printLength2)

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
Obj.printName = (printAge)=>console.log(`The age in between ${printAge}`);
Obj.printName(45)
// 4) can be added to array as well 
arr = ["1","2", (printStatement)=>console.log(`The statment is about ${printStatement}`),"Rahim"]
arr[2]("Publicaly abuse")

// 5) can be return from other function 
// A function that returns another function
function foodStall(dishType){
    // return `here is your ${dishType}`
    return function(ingredient){
        return `Here is your ${dishType} made with ${ingredient}`
    }
}
// Calling the food stall to get a chef for 'pasta'
const pastaChef = foodStall("Pasta")

// Now using the chef to make pasta with 'tomato sauce'
console.log(pastaChef("tomato sauce"))
// Output: Here is your pasta made with tomato sauce

const pizzaChef = foodStall("Pizza");
console.log(pizzaChef("Cheese"))

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
console.log("----- ----- -----")
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

/* How to do functional Programming ? see below The concept of immutibility
what does it mean?? 
-it do not change any data Always return a new copy
-?How does it happen Take an object with your mother's name and your age:
Now,Create an obj for your sibling(e.g tanvi) by age difference by 4 from into your age*/

let sourabh = {mother:"Savita",age:24};
console.log(sourabh)
let mrunal = {...sourabh,age:sourabh.age - 4}
console.log(mrunal) //called immutibility doesn't change the data 

// create a copy of sourabh (avoid)
mrunal = sourabh;
console.log("mrunal age",mrunal)
mrunal.age = sourabh.age - 4
console.log("Mrunal Age Updated",mrunal)
// This is anothr way to change age but it won't help us it show inconcitency because it chane value of sourabh see below e.g.
console.log("Sourabh's Age Updated",sourabh)
