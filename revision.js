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
        name: "sam",
        age: 60
    },
    {
        name: "karan",
        age: 36
    }, {
        name: "bull",
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

const family = [
    {
        name:"Ramesh",
        haveCycle: true
    },
    {
        name:"surbhi",
        haveCycle: false
    },
    {
        name:"Anjali",
        haveCycle: true
    },
    {
        name:"makhana",
        haveCycle: false
    }
]

// ensuring immutability 
const getArrayIfCycle = (acc,member)=>member.haveCycle?[...acc,member.name]:[...acc]
const resultList = family.reduce(getArrayIfCycle,[])
console.log(resultList)
// whoHasCycle

// NOTE: .push change original one arry
// OR
// const container = family.reduce((acc,member)=>{
//     if(member.haveCycle){
//         acc.push(member.name)
//     }
//     return acc
// },[])
// console.log(container)

// const result = family.filter((member)=>member.haveCycle).map((exe)=>exe.name)
// console.log(result)

// OR
// const container = family.filter((member)=>member.haveCycle).reduce((acc,member)=>{
// acc.push(member.name)
// return acc;
// },[])
// console.log(container)

// OR
// let container = [];
// for(let i=0; i<family.length; i++){
//     if(family[i].haveCycle === true){
//         container.push(family[i].name)
//     }
// }
// console.log(container)
// 57