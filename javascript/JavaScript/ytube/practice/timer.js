// // SetTimeout

// console.log("start");
// setTimeout(() => {
//   console.log("Execute code after 2 sec");
// }, 2000);
// console.log("end");

// // setInterval

// console.log("Start");
// setInterval(() => {
//     console.log("code execute every 2 sec");
// }, 2000);

// console.log("end");


// // clearInterval
// let count = 0;
// const intervalId = setInterval(() => {
//     count++;
//     console.log("repeat code every 1sec");
//     if (count === 5){
//         clearInterval(intervalId);
//         console.log("interval cleared");
//     }
    
// }, 1000);


// clearTimeout
const timeOut = setTimeout(() => {
    console.log("this will not executed");
}, 5000);
clearTimeout(timeOut);
console.log("timeout cleared");
