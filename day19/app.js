//immediately invoked function expressions (IIFE)
// (function defination)(executuing function);

(function chai(){
    console.log('DB connected')
})();

((name)=>{
    console.log(`db connected again by ${name}`);
})('akash');
