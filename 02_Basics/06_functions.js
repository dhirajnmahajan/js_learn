function sampleFunction(){

    // console.log("hello Dhiraj");
}
sampleFunction()


// *** function with parameters 

function paraFunction(num1, num2){
  
    // console.log("addition= ", num1+num2);
    
}
paraFunction(2,4)

// *** fun with para and return value
function  funcWithParaReturnV(num1, num2){
    let sum = num1 + num2
    return sum
}
console.log(funcWithParaReturnV(3,7)); // one way 

let result = funcWithParaReturnV(2, 3)
console.log("Result =", result);

