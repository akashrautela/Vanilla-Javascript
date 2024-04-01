// Objects - advanced
//non singleton object
const obj = {};

//singleton
const tinderUser = new Object();

tinderUser.name = 'akash'
tinderUser.id = 'IN-12121'

const user = {
    email : 'aka@google.com',
    fullname : {
        userfullname :{
            firstname : 'akash',
            lastname : 'rautela'
        }
    }
}


// console.log(user?.fullname?.userfullname);

const obj1 = {
    1 : 'a', 2: 'd'
};

const obj2 = {
    3 :'c', 4:'e'
}


// const obj3 = {obj1, obj2};
// const obj3 = Object.assign({},obj1, obj2)\
const obj3 = {...obj1, ...obj2} //modern syntax - spread operator

console.log(obj3);


const users = [
    {
        id: 1,
        name : 'akash'
    },
    {
        id: 2,
        name : 'man'
    }
]

console.log(users[0].name)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

console.log(tinderUser.hasOwnProperty('name'));
