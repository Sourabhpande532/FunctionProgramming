// convert all even to odd number by adding 1 
const arr = [1,2,3,58,5,6,24,8,15,4];
const turnToOdd = num => num % 2 === 0 ? num + 1 : num
let resultArry = arr.map(turnToOdd);
console.log(resultArry)