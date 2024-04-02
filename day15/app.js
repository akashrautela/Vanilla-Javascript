//functions in JS - basics
function sayMyName(){
    console.log('Akash');
}
// sayMyName()

function add(a,b){
    return a+b;
}
const result = add(5,6);
console.log(result);


function loginUser(userName){
    // if(userName === undefined){
    if(!userName){
        console.log('please enter username');
        return;
    }
    return `${userName} just logged in`;
}
console.log(loginUser('akash'));
console.log(loginUser());









