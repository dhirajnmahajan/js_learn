// *** passing object in function *** //

// creating object 
const User = {
    username : "Dhiraj",
    age : 22
}

// creating function 
function getUserDetails(anyObject){
    // console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
    
}
// calling function
getUserDetails(User)

// another to pass object 
getUserDetails({
    username  : "Dhiru ",
    age : 23
})


// *** Passing Array in function ** // 

// creating array 
const myNewArray = [100, 200, 300, 400]

// creating function 
function getArray(arraayElement){
    return arraayElement[1]
}

// calling function
// console.log(getArray(myNewArray));


// **** Rest operator *** //

function calculatePrice(num,...num1){
    return num1
}
console.log(calculatePrice(10,20,40));
