console.log( "Practice Question on Function Programming" )
console.log( "Why it is necessory because it gives a mental model using which you can write better react code" );
// can be assign to variable 
/* Question 1: Multiply Numbers
Write a function called createMultiplier that accepts a number as an argument and returns a function. The returned function should multiply its input by the number passed to createMultiplier. */
// const createMultiplier = num => multipleNum => num * multipleNum;
// OR
function createMultiplier( num ) {
    return function ( multipleNum ){
        return num * multipleNum
    }
}
const double = createMultiplier( 9 )
console.log( double( 2 ) )
const triple = createMultiplier( 5 )
console.log( triple( 3 ) )
