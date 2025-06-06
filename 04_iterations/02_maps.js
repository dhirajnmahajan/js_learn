const map = new Map()

map.set('IN',"india")
map.set('fr',"france")
map.set('uk',"united kingdom")

for (const [key,value] of map) {
    // console.log(key, ":", value);
    
}

const myNum = [1,2,3,4,5,6,7,8,9]

// const newNums = myNum.map( (num) => num*10)
// console.log(newNums);


// use of map twice and filter
const newNums = myNum
        .map( (num) => num*10)
        .map((num)=> num +1)
        .filter((num)=> num > 40 )
        
console.log(newNums);
