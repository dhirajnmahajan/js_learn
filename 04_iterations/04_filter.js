const myNums = [1,2,3,4,5]
 
//  const newNums = myNums.filter( (num) => num < 4)

let newNums = myNums.filter( (num) => {
    return num < 4})
 
// console.log(newNums);

// another way by using foreach 

 newNums = []
myNums.forEach( (num) => {
    if(num < 4){
        newNums.push(num)
    }
})
// console.log(newNums);

// 

const books = [
    {
        title : 'Book One', genre : 'fiction',
        publish : '1999', edition : '2004'
    },
    
    {
        title : 'Book Two', genre : 'History',
        publish : '1979', edition : '2001'
    },
    {
        title : 'Book Three', genre : 'non-fiction',
        publish : '1986', edition : '1989'
    },
    {
        title : 'Book Four', genre : 'science',
        publish : '1992', edition : '2010'
    },
    {
        title : 'Book Five', genre : 'History',
        publish : '1979', edition : '2004'
    },

];

let userBooks = books.filter( (bk) => bk.genre === 'History')

// console.log(userBooks);

userBooks = books.filter( (bk) => bk.publish > 1990 )

console.log(userBooks);