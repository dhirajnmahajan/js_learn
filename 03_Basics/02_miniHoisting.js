
// this can be called before writing its defination
addOne()

function addOne(){
    console.log("basic function called ");
    
}

// can not called before its defination
// also called expression function

// addTwo()    // => Cannot access 'addTwo' before initialization
const addTwo = function (){
    console.log("expression called-  addTwo");
    
}

addTwo()