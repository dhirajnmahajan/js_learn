// singleton 
// object.create

// symbol 
const mySym = Symbol("key1")

// object literals

const JsUser = {
    name: "Dhiraj",
    "full name" : "Dhiraj Mahajan", // here key is in double quote
    age : 18,
    location : "maharashtra",
    [mySym]: "key1",
    email : "abc@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","wednesday"]

}

// console.log(JsUser.name);

//  another way to access the value
// console.log(JsUser["full name"]) 

// console.log(JsUser);

JsUser.email= "xyz@gmail.com" // changing value 

// Object.freeze(JsUser) // values are freeze can't be changed

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello JS User, ${this.name}`); 
}
console.log(JsUser.greetingTwo());
 
