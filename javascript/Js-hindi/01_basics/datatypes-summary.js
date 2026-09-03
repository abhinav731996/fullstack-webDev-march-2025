/* 
Primitive datatypes:-
7types:- String, Number, Boolean, Null, Undefined, Symbol, BingInt
*/

const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const ousideTmp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId);

const bigNumber = 687412612698n

/*
Reference datatype(Non-Permitive):-
3types:- Array, Object, Function
 */


const hero = ["Batmen", "saktiman",]
let myobj={
 Name: "Abhinav",
 Age: 24,
}

const myFunction = function()
{
    console.log("hello world");
    
}

console.log(typeof bigNumber)

//============================//
/* 2 types of memories
Stack(permitive), Heap(non-premitive)
*/

let youtubename = "abhinav"
let anothername = youtubename
console.log(youtubename);
anothername = "chaiaurcode"
console.log(anothername);

let userone ={
    email: "abhi@gmail.com",
    upi: "abkmk@njnk"
}
let usertwo =userone
usertwo.email = "samkj@gmail.com"

console.log(userone.email)
console.log(usertwo.email)