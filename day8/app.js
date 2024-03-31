//stack and heap memory

// all primitive datatypes use stack memory

// all non primitive datatypes user heap memory

let obj1 = {
    email : 'obj1@ybl',
    name: 'obj'
};

let obj2 = obj1

obj2.email = 'obj2@ybl';


console.log(obj1);
console.log(obj2);