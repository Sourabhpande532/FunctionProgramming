// convert all even to odd number by adding 1 
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const addOneForEven = num => num % 2 === 0 ? num + 1 : num
let resultArry = arr.map( addOneForEven );
// or
// let resultArry = [];
// for(let i=0; i<arr.length; i++){
//     resultArry.push(addOneForEven(arr[i]))
// }
// or
// let resultArry = [...arr].map(addOneForEven)
console.log( resultArry )

// calculte total age & output should be 121
const userDetails = [
    {
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    }, {
        name: "Manny",
        age: 16
    }, {
        name: "Joe",
        age: 9
    }
]
const calculateAge = (acc,curr)=> acc = acc + curr.age;
const resultDetails = userDetails.reduce(calculateAge,0)
console.log(resultDetails)

// aleterane approach 
let totalAge = 0;
for(let i=0; i<userDetails.length; i++){
    totalAge += userDetails[i].age;
}
console.log("Total age:",totalAge)
// 35:00