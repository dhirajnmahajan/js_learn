const Course = {
    name : "Dhiraj",
    courseName : "Javascript",
    price : 999,
    Owner : "Dhiraj Mahajan"
}

// console.log(Course);
console.log(Course.courseName);

// by destructuring object 
const {courseName : cName} = Course

console.log(cName);

console.log(`Course name is ${cName}`);


