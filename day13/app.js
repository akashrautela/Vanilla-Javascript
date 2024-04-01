// objects in JS

//singleton

//object literals
// Object.create

const obj = {
    name:'akash rautela',
    'short description' : 'my name is akash',
    city: 'dehradun',
    pincode: 248005,
    age: 25,
    email:'akash@google.com',
    isLoggedIn : false,
    lastLoginDays : ['Monday', 'Saturday']
};

console.log(obj.name);
console.log(obj['email']);
console.log(obj['short description']);


// Object.freeze(obj);
obj['age'] = 30;


obj.greeting = function(){
    console.log('hello world');
};

obj.greetingTwo = function(){
    console.log(`hello world from ${this.name}`);
};

console.log(obj.greetingTwo());

//good practise to use . DOT operator when using keys in objects