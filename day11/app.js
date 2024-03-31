//dates and date types

let myDate = new Date()
// console.log(myDate.toLocaleDateString());

let createdDate = new Date(2023,0,23);
console.log(createdDate.toDateString());

let timeStamps = Date.now();
console.log(timeStamps);

console.log(timeStamps - createdDate.getTime());