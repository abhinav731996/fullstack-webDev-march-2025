let score = "33abc"

console.log(typeof score);
console.log(typeof(score));

let valueinnumber = Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber);

/*
1. "33" = 33
2. "33abc" = NaN
3. true/fals = 1/0
*/

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn)
console.log(booleanIsLoggedIn)

/*
1. 1=true, 0=false
2. ""=false
3. "Abhinav"=true
*/

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*****************Operations********************//
let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2+2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3);

let str1="Hello"
let str2=" Abhinav"
let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log("1"+2+2);
console.log(1+2+"2");
console.log(1+"2"+2);
console.log("1"+2+2);

let gamecounter=100
++gamecounter //reade prefix & postfix over ECMA Or MDN reffernace//
console.log(gamecounter);
