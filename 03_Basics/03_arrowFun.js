// normal function

function chai (){
    console.log("normal function");
    
}
chai()

// another way
const oneCupChai = function(){
    console.log("another way to define function")
    
}
oneCupChai()

//  *** Arrow function ****

//  simply remove the function keyword from the expression func and add arrow after parenthesis

const coffe = () => {
    console.log("arrow function");
    
}
coffe()

// ** paasing values in arrrow functon as arguments 

const argsFunction = (num1, num2)=> {
    console.log("addition= ", num1+num2);
    
}
argsFunction(2,4)



const argsFunc = (username)=> {
    console.log(`name is ${username}`);
    
}
argsFunc("Dhiraj")

// let trial = function (){
//     console.log("using let keyword");
    
// }
// trial()

// trial = () => {
//     console.log("override");
    
// }
// trial()