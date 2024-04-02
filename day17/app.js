//scopes in JS

//closures
function one(){
    const username = 'akash'

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    //console.log(website);
    two();
}

one();

//-----------interesting concept

addone(5); // will work
function addone(value){
    return value+1;
}


//hoisting example
addTwo(5); // will not work because of hoisting
const addTwo = function(num){
    return num+2;
}


