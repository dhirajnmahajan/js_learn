// IIFE - Immediately Invoked Function Expression

// ** IIFE Function
(function IIFE () {
    console.log("DB connected successfully !")
    
})();

// wrapped function in parenthesis and outisde of parenthesis called that function using another parenthesis ()

// ** passing arguments 

(function sample(username){
    console.log(`name is ${username}`);
    
})("dhiraj");

// to write the multiple IIFE add semicolon after function call (); - manually

// *** Arrow IIFE fun 

// named IIFE
(ekCupChai = () => {
    console.log("arrow function");
    
}) ();

// unnamed IIFE
(() => {
    console.log(`Arrow two`);
    
})();

// passing arguments in arrow IIFE fun
( (name,age) =>{
    console.log(`name: ${name} and age: ${age}`);
    
})("dhiraj",22);