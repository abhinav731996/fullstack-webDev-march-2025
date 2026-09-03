//+++++++++++ for each ++++++++

const coading = ["js", "python", "ruby"]
 
// coading.forEach(function (val) {
//     console.log(val);
// })

// coading.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item) {
//     console.log(item);
// }

// coading.forEach(printMe);

coading.forEach((item, index, arr)=>{
    console.log(item, index, arr);
})

const myCoading = [
    {
        languageName : "javascript",
        fileName : "js"
    },
    {
        languageName : "java",
        fileName : "java"
    },
    {
        languageName : "python",
        fileName : "py"
    }
]
myCoading.forEach((item)=>{
    console.log(item.languageName);
})