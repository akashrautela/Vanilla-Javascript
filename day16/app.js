//functions in js - advanced

function calculateCartPrice(val1, val2 , ...prices){ //rest operator
    return prices
}

console.log(calculateCartPrice(400,500,600,100));


const user = {
    username : 'akash',
    price: 199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject?.username} and price is ${anyobject?.price}`);
}

handleObject(user);