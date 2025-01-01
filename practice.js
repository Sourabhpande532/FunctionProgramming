console.log("About function programming")
// why pure function effective
// It always produces the same output for the same input.
//It doesn’t depend on or modify external variables (no side effects).
function sum(a,b){
    return a + b // Only depends on its inputs
}
console.log(sum(2,3)) // 5 same input,same output 

// example of impure funtion 
let multiplier = 3;
function multiple(a){
    return a * multiplier //depend on external variable 
}
console.log(multiple(3)) //9
multiplier = 5; //state change output as well
console.log(multiple(3)) //same input, different output //15

// assign variable to cost 
/* Question 1: Multiply Numbers
Write a function called createMultiplier that accepts a number as an argument and returns a function. The returned function should multiply its input by the number passed to createMultiplier. */
// function createMultiplier(number){
//     // Process machine
//     return function(input){
//     // Ready-to-use tool or final product for the customer.
//     return input * number
//     }
// }
// OR 
const createMultiplier = number => input => input * number;
const double = createMultiplier(6);
console.log(double(2))
const triple = createMultiplier(9);
console.log(triple(3))

// Less Reliance on Global State Makes Debugging Easier below create mess see later
let globalCounter = 5;
function incrementCounter(){
    globalCounter++; //6
} 
function decrementCounter(){
    globalCounter-- //5
}
incrementCounter();
decrementCounter();
console.log(globalCounter)
globalCounter = 100;
console.log(globalCounter) //100 

// How it defferent from others 
function createCounter(initialValue){
    let counter = initialValue;
    return {
        increment: ()=>counter++,
        decrement: ()=>counter--,
        getValue: () =>counter
    }
}
const myCounter = createCounter(9);
myCounter.increment();
myCounter.decrement()
console.log(myCounter.getValue())
// Debugging made easy
const anotherCounter = createCounter(100);
console.log(anotherCounter.getValue())
