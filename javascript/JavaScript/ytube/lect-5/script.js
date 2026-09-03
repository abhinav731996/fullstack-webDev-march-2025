function myFunction() {
    console.log("Welcome to JavaScript");
    console.log("we are learing JS");
    
}
myFunction();

function msgFunction(msg) {
    // perameter 
    console.log(msg);
    
}

msgFunction("This is created by function ");    // arguments 

function sum(a,b) {
    console.log(a+b);
    
}
sum(9,8);

function sum2(x,y) {
    s = x+y;
    return s;
}

let val = sum2(3,7);
console.log(val);


const arrowMul = (p,q) => {
    console.log(p*q);
    
}
arrowMul(8,5)