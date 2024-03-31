// conversions and operations

let score = "33sa"
console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score); 
console.log(typeof valueInNumber);
console.log(valueInNumber); //NaN if string is alphanumeric

let temp = null
console.log(Number(temp));  //0

let b = undefined
console.log(Number(b)); // NaN

let isLoggedIn = 0;
console.log(Boolean(isLoggedIn));  //zero - false nonzero - true emptystring - false   non-empty string - true

let d = 33
let dstring = String(d)
console.log(dstring);
console.log(typeof dstring);
