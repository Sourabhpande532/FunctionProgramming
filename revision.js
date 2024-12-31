//🕯️🕯️ NEW QUESTION (1)
// convert all even to odd number by adding 1
const arr = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4];
const addOneForEven = ( num ) => ( num % 2 === 0 ? num + 1 : num );
let resultArry = arr.map( addOneForEven );
// or
// let resultArry = [];
// for(let i=0; i<arr.length; i++){
//     resultArry.push(addOneForEven(arr[i]))
// }
// or
// let resultArry = [...arr].map(addOneForEven)
console.log( resultArry );

//🕯️🕯️ NEW QUESTION (2)
// QUESTION: Given an arry: Write a function to find the sum of ages of each person
// calculte total age & output should be 121
const userDetails = [
  {
    name: "sam",
    age: 60,
  },
  {
    name: "karan",
    age: 36,
  },
  {
    name: "bull",
    age: 16,
  },
  {
    name: "Joe",
    age: 9,
  },
];
const calculateAge = ( acc, curr ) => ( acc = acc + curr.age );
const resultDetails = userDetails.reduce( calculateAge, 0 );
console.log( resultDetails );

// aleterane approach
let totalAge = 0;
for ( let i = 0; i < userDetails.length; i++ ) {
  totalAge += userDetails[i].age;
}
console.log( "Total age:", totalAge );

//🕯️🕯️ NEW QUESTION (3)
const family = [
  {
    name: "Ramesh",
    haveCycle: true,
  },
  {
    name: "surbhi",
    haveCycle: false,
  },
  {
    name: "Anjali",
    haveCycle: true,
  },
  {
    name: "makhana",
    haveCycle: false,
  },
];

//🕯️🕯️ NEW QUESTION (4)
// ensuring immutability
const getArrayIfCycle = ( acc, member ) =>
  member.haveCycle ? [...acc, member.name] : [...acc];
const resultList = family.reduce( getArrayIfCycle, [] );
console.log( resultList ); //['Ramesh','Anjali']
// whoHasCycle

/* // NOTE: .push change original one arry


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
 */

//🕯️🕯️ NEW QUESTION (5)
// given an array: Convert it in to an object with key as the index of each elements and value as the element itself
const userList = ["You", "all", "are", "rockstars"];
// your output should be:
// {`0`: "you", '1':"all",'2':"are",'3':"rockstars"};

// OR
// let getObjectWithIndex = userList.reduce((result,curr,index)=>({...result,[index]:curr}),{})

/* // OR
// let getObjWithIndex = (acc,curr,i)=>{
//     return {
//         ...acc,
//         [i]:curr
//     }
// } */

const getObjWithIndex = ( acc, curr, i ) => ( { ...acc, [i]: curr } );
let resultIndexList = userList.reduce( getObjWithIndex, {} );
// OR
// const resultIndexList = userList.reduce((store,curr,i)=>({...store,[i]:curr}),{})

console.log( resultIndexList );

// OR
// let getObjectWithIndex = userList.reduce((acc,curr,i)=>{
// return {
//     ...acc,//to maintain immutability we stored previous result into new object by spreading
//     [i]:curr // why [i]: we don't know wheather it's string or number it's just dyanamic key that's why
//  }
// },{})
// console.log(getObjectWithIndex)

/*Short Explanation 
* want to use that variable as a key for object this is how we'r getting 
let val = 2;
console.log({val}) // {val:2}
console.log({val:"neog"}) // {val:"neog"}
console.log({[val]:"neog"}) // {2:neog}
let val = "Sourabh";
console.log({[val]:"pande"}) // {Sourabh:pande}

*/

//USES OF ARROW FUNCTION,RETURN

//🕯️🕯️ NEW QUESTION (6)
const userNameList = ["Alice", "Bob", "Charlie"];
// OR
// const getListWithIndex = ((acc,curr,index)=>({...acc,[index]:curr}));
// OR
const getListWithIndex = ( acc, curr, index ) => {
  return {
    ...acc,
    [index]: curr,
  };
};
// OR
// const resultOfArray = userNameList.reduce(getListWithIndex,{});
// OR
// let resultOfArray = userNameList.reduce((acc,curr,i)=>({...acc,[i]:curr}),{})
// OR
let resultOfArray = userNameList.reduce( ( acc, curr, i ) => {
  return {
    ...acc,
    [i]: curr,
  };
}, {} );

console.log( resultOfArray );

//🕯️🕯️ NEW QUESTION (7)
const colorList = [
  "Violet",
  "Indigo",
  "Blue",
  "Green",
  "Yellow",
  "Orange",
  "Red",
];
// OR
// let concateColorByDash = colorList.map((color)=>color).join("-");
// OR
let concateColorByDash = colorList.join( "-" );
console.log( concateColorByDash );
// Your output should be:
//Violet-Indigo-Blue-Green-Yellow-Orange-Red

//🕯️🕯️ NEW QUESTION (8)
const str = "Violet";
// const hyphenString = str.split("").join("-")
// OR
const hyphenString = [...str].join( "-" );
console.log( hyphenString );

//🕯️🕯️ NEW QUESTION (9)
// from interview point of view ask 

const input = [
  ["a", "b", "C"],
  ["C", "d", "e"],
  ["e", "d", "f"],
];
const flatArr = input.reduce( ( acc, curr ) => [...acc, ...curr], [] );
console.log( flatArr )

// HOMEWORKS 
// (1) Given an array, Write a function that takes in the given array and prints only the numbers which are less than 8 and also an even number 
const arrarNumList = [1, 2, 3, 58, 5, 6, 24, 8, 15, 4]
// your output should be: [2,6,8,4]
// (2) Given an array, Write a function that takes in the given array and prints only the words which are more than 5 characters in length.  
const wordList = ["eat", "sleep", "repeat", "code"];
// your output should be: ["repeat"]
// (3) Given an array. Write a function to get the sum of all elements which are greaterthat 50;
const numberList = [1, 2, 3, 58, 5, 6, 62, 8, 70]
// your output should be: 190
// (4) Given an array. Write a function to find the product of all elements which are even 
const productArray = [1, 2, 3, 7, 5, 6, 8, 9]
// your output should be: 96
// (5) Given an array of object. if the name of an item is more than 5 characters in length, add type as "vegetable". if the name of an item is less than or equal to 5 characters in length, add type as "fruit";

const fruitList = [
  { name: "Apple" },
  { name: "Mango" },
  { name: "Potato" },
  { name: "Guava" },
  { name: "CapsiCum" },
]
// your output should be: 
/* [
  { name: "Apple",
    type: "fruit" },
  { name: "Mango",
    type: "fruit" },
  { name: "Potato",
    type: "vegetable" },
  { name: "Guava",
    type: "fruit" },
  { name: "CapsiCum",
    type:"vegetable" },
] */
