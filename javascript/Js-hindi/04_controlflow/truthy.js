//++++++++ truthy & falsy ++++++++++

const userEmail = ""
if (userEmail) {
    console.log("got user mail");
}
else{
    console.log("don't have user mail");
    
}

// false values :- false, 0, -0, BigInt 0n, "", null, undefined, NaN   rest are truthy values

//truthy values :- "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty ");
    
    
}

//++++++++++ Nullish Coalescing operation(??):- null, undefined ++++++++++=

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = 5 ?? null
// val1 = null ?? undefined
val1 = undefined ?? 10
// val1 = 5 ?? undefined
console.log(val1);

//++++++++++++ Ternairy Operation:- condition ? true : false +++++++

const iceTeaPrice = 50
iceTeaPrice >= 80 ? console.log("greater then 80") : console.log("less then 80");
 

