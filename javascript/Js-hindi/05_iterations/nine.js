//+++++++++++++ reduce ++++++++++++++
const myNumber = [1,2,3]

// const myTotal = myNum.reduce(function (acc, currval){
//     return acc + currval
// }, 0)

const myTotal = myNumber.reduce((acc,currval)=> {return acc+currval},0)

console.log(myTotal);

const shoppingCart = [
    {
        item : 'js', price : 299
    
    },
    {
        item : 'python', price : 599
    
    },
    {
        item : 'react', price : 899
    
    },
    {
        item : 'datascience', price : 1299
    
    },
]

const totalShopping = shoppingCart.reduce((acc, item)=>{return acc+item.price}, 0)

console.log(totalShopping);