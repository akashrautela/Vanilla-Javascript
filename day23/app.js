// const code = ['js','cpp','py','java','cs']

// will not work like below
// const values = code.forEach( (item)=>{
//     return item;
// })

// console.log(values);



const num = [1,2,3,4,5,6,7,8,9,10];

// const values = num.filter( (n)=>{
//    return n > 4
// })

const values = num.filter( (n)=> n>4);

// console.log(values);


const numbers = [1,2,3,4,5,6,7,8];

// let newNumbers = numbers.map( (val) =>{
//     return val+10;
// })

// console.log(newNumbers);


//chaining of methods

let newNumbers = numbers.map( (val) =>{
    return val+10;
})
.map( (newVal)=>{
    return newVal * 2
})
.filter( (number)=>{
    return number > 30 
})

// console.log(newNumbers);



//Reduce method
const arr = [1,2,3,4];
let initial_value = 0;


// const sumWithInitial = arr.reduce((acc,curr) =>{
//     console.log(`acc = ${acc} and curr = ${curr}`);
//     return acc + curr
// }, initial_value);

const sumWithInitial = arr.reduce( (acc,curr) => acc+curr, 0)

console.log(sumWithInitial);