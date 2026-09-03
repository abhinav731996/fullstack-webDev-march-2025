console.log("Hello World!!");

fullName="Abhinav Sharma";
FULLNAME = "Sam"
console.log("fullName");
console.log(fullName);
console.log(FULLNAME);

age = 26;
console.log(age);

price = 99.99;
console.log(price);

x = null;
y = undefined;

console.log(x);
console.log(y);

// rewrite
age=22;
console.log(age);

Console = "name";
console.log(Console);



// let, var, const

// var : Variable can be re-declared & updated. A global scope variable.

// let : Variable cannot be re-declared but can be updated. A block scope variable.

// const : Variable cannot be re-declared or updated. A block scope variable.

var age = 24;
var age = 38;
var age = 46;

console.log(age); // this can not create error

// let age = 44;
// let age = 33;
// let age = 48;

// console.log(age);  // this can create error 

let num = 34;
num = 45;
console.log(num);

const nick_name = 'abhi';
// nick_name = "sam";  // this can create error
console.log(nick_name);


let a;
console.log(a);

// const b; //must give value;
// console.log(b);


// block Element
{
    let a = 5;
    console.log(a);
};
{
    let a = 10;
    console.log(a);
    
};

//object

const student = {
    fname: "Rahul",
    age: 22,
    cgpa: 6.2,
    isPass: true,
};

student["age"] = student["age"] +2; // to change values 

console.log(student.age);   // how to call values 
console.log(student["age"]);    // how to call values 

//##################### best practice #######################

const product = {
    title: "ball pen",
    reating: 4,
    offer: 5,
    price: 270
};


const profile = {
    userName: "@abhi_3607",
    isFollow: false,
    follwers: 123,
    following: 112
};
