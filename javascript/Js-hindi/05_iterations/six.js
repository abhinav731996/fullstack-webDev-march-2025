
const coading = ["js", "python", "ruby"]

// const value = coading.forEach((item)=>{
//     console.log(item);
//     return item 
// })
// console.log(value);

const myNum = [1, 2, 3, 4, 5, 6, 7]

// const newNum = myNum.filter((num) => num > 4)
                                                              // +++++ filter ++++
// const newNum = myNum.filter((Num) => {
//     return Num > 4
// })

const newNum = []
myNum.forEach((num)=>{if (num>4) {
    newNum.push(num)
}})
// console.log(newNum);


const books = [
    {title:'book one', genr:'friction', publish: 1982, eddition: 2000},
    {title:'book two', genr:'non-friction', publish: 1973, eddition: 2010},
    {title:'book three', genr:'history', publish: 1992, eddition: 2020},
    {title:'book four', genr:'physics', publish: 1997, eddition: 2022},
    {title:'book five', genr:'bio', publish: 1957, eddition: 2021},
    {title:'book six', genr:'friction', publish: 1999, eddition: 2007}
]

let userBooks = books.filter((bk)=> bk.genr === 'history')
userBooks = books.filter((bk) => {
    return bk.eddition >= 2020 && bk.genr==="physics"})
console.log(userBooks);

