const arr = [1,2,3,4,5]

for (let i= 0; i <=5; i++) {
    const element = arr[i];
    // console.log(element);   

}

let i=0
while( i < 3 ){
    // console.log(arr[i]);
    i++
    
}

// **** for in loop ** //

const person ={
    name : 'Dhiraj',
    age : 25,
    city : 'Mumbai'
}

for (const key in person) {
//    console.log(`${key} : ${person[key]}`);
   
}

const fruits = ["apple","banana","mango"]

for (const key in fruits) {
 
    // console.log(`${key}: ${fruits[key]}`);
}

// **** for of loop

const myArray = [1,2,3,4,5]

for (const element of myArray) {
    // console.log(element);
    
}

const greetings = "Hello World"
 for (const greets of greetings) {
    console.log(`each chaar is : ${greets}`);
    
 }

