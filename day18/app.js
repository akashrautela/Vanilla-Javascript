// arrow functions

//this keyword


const user = {
    username : 'akash',
    price: 999,
    welcome : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); //returns current context 
    }
}

// user.welcome();
user.username = 'SKY'
user.welcome();


//this keywords only works with objects
//not with functions
function f(){
    const username = 'akash'
    console.log(this.username)
}
// f();

const f2 = () =>{
    let username = 'akash'
    console.log(username);
}

// f2();


// const addTwo = (n1, n2) =>{
//     return n1+n2;
// }

const addTwo = (n1,n2) => n1+n2;

const addTwoNew = (a,b) => (a*b) // widely used in reactJs

console.log(addTwoNew(2,3));




