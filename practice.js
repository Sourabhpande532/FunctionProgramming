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
console.log(multiple(3)) 
multiplier = 5; //state change output as well
console.log(multiple(3)) //same input, different output