//higher order array loop
//forof loop

const arr = [1,2,3,4,5,6,7,8];

for (const num of arr) {
    console.log(num);
}

const greetings = 'hello world';
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//Maps - iteratble with forof loop

const map = new Map();

map.set('IN','India');
map.set('USA','United states of india');
map.set('FR','France');
map.set('IN','India');


// console.log(map);
for (const [key, value] of map) {
    console.log(`${key} -> ${value}`)
}


//objects iteratable by forin loop
const obj = {
    'game1':'NFS',
    'game2':'tekken',
    'js':'javascript',
    'swift':'swift by apple'
};

for (const key in obj) {
    console.log(`${key} --> ${obj[key]}`)
}


//for each loop

const coding = ['js','java','c#','python','cpp'];

// coding.forEach((val) =>{
//     console.log(val);
// }) ;


// function print(item){
//     console.log(item);
// }

// coding.forEach(print);

coding.forEach((val, key, arr) =>{
    console.log(val, key, arr);
}) ;


const code = [
    {
        language : 'javascript',
        name: 'js'
    },
    {
        language : 'C plus plus',
        name: 'cpp'
    },
    {
        language : 'java',
        name: '.java'
    },
]

code.forEach( (item) =>{
    console.log(`${item.language} -> ${item.name} `)
})
