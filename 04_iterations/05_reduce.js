const myNums = [ 1,2,3]

let acc = 0
// const newNums = myNums.reduce((acc,currentV)=> {
//     console.log(`acc: ${acc} and cureenV : ${currentV}`);
    
//     return acc + currentV
// },0)

// console.log(newNums);

// shopping cart 

const shoppingCart = [
    {
        itemName : 'js Course',
        price : 1999
    },
    {
        itemName : 'java Course',
        price : 3999
    },
    {
        itemName : 'android Course',
        price : 5999
    },
]

const totalPrice = shoppingCart.reduce( (acc,item)=> {
    return acc + item.price
},0)

console.log(`totalPrice: ${totalPrice}`);
