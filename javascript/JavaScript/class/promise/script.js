/*
    // ---------- Syntex -----------

    const promise1 = new Promise((resolve, reject)=>{
        Operations
        if(success) resolve("Successful message/data")
        else reject("Error message")
        })
*/

// let number = prompt("Enter a number");

// // ---------- using .then/.catch method -------

// let isEven = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(number %2 === 0) resolve("number is even")
//         else reject("number is odd")
//     },1000)
// });

// isEven.then((val)=> console.log(val)).catch((error)=> console.log(error)).finally(()=> console.log("From finally block"));


// function fetchData(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(number %2 === 0) resolve("number is even")
//                 else reject("number is odd")
//         },1000)
//     })
// };

// let isEven = fetchData();

// isEven.then((val)=> console.log(val)).catch((error)=> console.log(error)).finally(()=> console.log("From finally block"));



// // ------- using async/await method (in this error is occure)--------

// function fetchData(number){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(number %2 === 0) resolve("number is even")
//                 else reject("number is odd")
//         },1000);
//     })
// };


// async function printData() {
//     let number = prompt("Enter a number");
//     let result = await fetchData(number);
//     console.log(result)
    
// }
// printData();

// setTimeout(()=>{
//     document.querySelector("form").classList.add("show")
// }, 10000)

// let count = 0;
// let timer;
// timer = setInterval(()=>{
//             console.log(count+=1);
//             if(count == 10) clearInterval(timer)
//         }, 1000)

// console.log(timer);
        

let userPromise = fetch("https://jsonplaceholder.typicode.com/users");
// console.log(userPromise);

userPromise.then((response)=>response.json()).then((data)=>console.log(data))
