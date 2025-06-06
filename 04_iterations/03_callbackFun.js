const coding = ['python',"java","js","ruby"]

coding.forEach(function (item) {
    // console.log(item);

})

//  forEach( () => {})
// () => {} this arrow fun known as callback fun

// A function that is passed as an argument to another function, and is called inside that function.

coding.forEach( (val) => {
    // console.log(val);
    
})

coding.forEach( (item,index,array) => {
    // console.log(item,index,array);  
})

const myCoding = [
    {
        languageName : "javascript",
        filename : "js"
    },
    {
        languageName : "java",
        filename : "java"
    },
    {
        languageName : "pythpn",
        filename : "py"
    },
   
]

myCoding.forEach( (item) => {
    console.log(item.languageName,':', item.filename);
    
})