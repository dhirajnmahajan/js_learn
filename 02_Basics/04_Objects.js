// nesting object 

const myObj = {
    email : "abc@gmail.com",
    name : {
        userFull :{
            firstname : "dhiraj",
            lastname : "mahajan"
        }
    }
}

// console.log(myObj.email);
// console.log(myObj.name.userFull);

// console.log(myObj.name.userFull.firstname);

// merge two arrays 

const obj1 = {
    1: 'a',
    2: 'b'
}

const obj2 = {
    3: 'y',
    4:'z'
}

const obj3 = Object.assign({},obj1, obj2)
console.log(obj3);


