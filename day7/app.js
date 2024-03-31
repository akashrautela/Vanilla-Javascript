//data types - summary

//primitive DTs  --> call by value - copy

// string
// number
// boolean
// null
// undefined
// symbol
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false
// big int
const bigNumber = 731289712399812378321111131231232131231231211111n
console.log(typeof bigNumber);



// reference types - non primitive DTs

//array
let heros = ['akash','shaktiman','naagraj','doga']

//objects
let obj = {
    name:'akash',
    age:22
};

//functions
const myFunction = function(){
    console.log('hello world');
}

console.log(obj);