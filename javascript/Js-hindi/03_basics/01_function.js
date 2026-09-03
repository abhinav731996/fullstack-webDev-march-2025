
function sayMyName(){
    console.log("A");
    console.log("b");
    console.log("h");
    console.log("i");
    console.log("n");
    console.log("a");
    console.log("v");
}
// sayMyName()              (referance & exicute)

function addTwoNumbers(number1,number2){
    // console.log(number1+number2); 
    return number1+number2                  //important information 
}
addTwoNumbers(3,4)
const result = addTwoNumbers(3,5)
console.log(result);

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return
    }
    return`${username}justLoggedIn`
}
// console.log(loginUserMessage("Abhinav"))
console.log(loginUserMessage());

//+++++++++++ Calculate +++++++++++++++
function calculate(...num1) {
    return num1
}
console.log(calculate(200, 400, 500, 2000));

function calculateNum(val1, val2, ...num2) {
    return num2
}
console.log(calculateNum(20, 40, 50, 200));

const user = {
    userNa : "Abhinav",
    price : 07
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.userNa} and price is ${anyobject.price}`);
    
}
handleObject(user)
handleObject({
    userNa : "Sam",
    price : 10
})

const myNewArray = [100, 200, 400, 600]
function returnsecondvalue(getarray) {
    return getarray[2]
}
console.log(returnsecondvalue(myNewArray));
