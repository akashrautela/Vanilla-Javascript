// strings datatypes

const name = 'akash'
const count = 50;

const newString = `hello my name is ${name} and i have ${count} candies.`;
console.log(newString);

const gameName = new String('Tekken8');
// console.log(gameName);

// console.log(gameName.length);


const s1 = newString.substring(0,4);
// console.log(s1);


const s2 = newString.slice(-9,12);
console.log(s2);

const s3 = '         akash ddas  ';
const s4 = s3.trim()
console.log(s3);
console.log(s4);


const url = 'https://google.com/akash%20rautela'
console.log(url.replace('%20','-'));

const s5 = 'akash-rautela-abc-hkj-312-3-ds'
console.log(s5.split('-'));
