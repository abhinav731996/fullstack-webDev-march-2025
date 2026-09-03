
// *************** Arithmetic operators

// let a = 5;
// let b = 2;

// console.log("a = ",a," & b = ",b);

// console.log("a + b =", a+b);
// console.log("a - b =", a-b);
// console.log("a * b =", a*b);
// console.log("a / b =", a/b);
// console.log("a % b =", a%b);
// console.log("a ** b =", a**b);


// *************** Unary operators

// let a = 5;
// let b = 2;

// console.log("a = ",a," & b = ",b);

// console.log("a++ = ", a++); //post increment 
// console.log("now a = ", a);


// console.log("++a = ", ++a); //pre increment
// console.log("now a = ", a);


// *************** Asignment operators
// let a = 5;
// let b = 2;

// console.log("a = ",a," & b = ",b);

// a += 4;
// console.log("a =", a);

// a -= 4;
// console.log("a =", a);

// a *= 4;
// console.log("a =", a);

// a /= 4;
// console.log("a =", a);

// a %= 4;
// console.log("a =", a);

// a **= 4;
// console.log("a =", a);


// *************** conditional statement 

// let age = 18;

// if (age>=18) {
//     console.log("you can vote");
    
// }
// else{
//     console.log("you can not vote");
    
// };


let mode = "red";
let color;

if (mode === "dark") {
    color = "black"
}
else if( mode === "red"){
    color = "red"
}
else{
    color = "white"
};
console.log(color);

//even odd
let num = 10;
if (num %2 === 0) {
    console.log(num, " is even");
    
}
else{
    console.log(num, " is odd");
    
};

//********************* ternery operator 

let age = 26;

let result = age >= 18 ? "adult" : "not-adult";
console.log(result);


// ********************* promt ques

let numb = prompt("enter a number:")

if (numb % 5 === 0) {
    console.log(numb, " is multipule of 5");
    
}
else{
    console.log(numb, " is not multipule of 5");
    
};