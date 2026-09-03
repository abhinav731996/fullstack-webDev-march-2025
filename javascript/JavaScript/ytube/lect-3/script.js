// // loops

// for (let index = 0; index < 5; index++) {
//     console.log("hello world");
// }

// let sum = 0;
// for (let i = 1; i <=5; i++) {
//     sum = sum + i;
// }

// console.log("sum = ", sum);

// // do while loop
// let i = 1;
// do {
//     console.log(`3 * ${i} = ${3*i}`);
//     i++;
// } while (i<=10);

// // while
// while (i<=10) {
//     console.log(`4 * ${i} = ${4*i}`);
//     i++;
// };


// for of loop 

// let str = "JavaScript";

// let size = 0;

// for (const i of str) {
//     console.log("i = ", i);
//     size++;
// }
// console.log("string size =", size);



// for in loop 

// let student ={
//     name : "Rahul",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true,
// }

// for(let key in student){
//     // console.log(key);
//     console.log("key =", key, "value = ", student[key]);
    
// }


// Questions-1
// find even number from 0-100

// for (let num = 0; num <=10; num++){
//     if (num%2===0) {
//         console.log("num =", num, "even number");
        
//     }
//     else{
//         console.log("num =", num, "odd number");
        
//     }
// };


// Question-2
// guss the number


// let gameNumber = 25;

// let userNum = prompt("Guess the game number: ");
// console.log(userNum);

// while (userNum != gameNumber) {
//    userNum = prompt("You enterd wrong number please try again....")
// }

// console.log("Congratulation your enter the right number!!");


// template literials
// let obj = {
//     item: "pen",
//     price: 10,
// }
// console.log(`the price of ${obj.item} is ${obj.price} rupees`);


// Question-3

let fullName = prompt("Enter your fullname without space: ");
let userName = "@" + fullName + fullName.length
console.log(userName);

