//singleton
// object.create

//object literals 

const mySym = Symbol ("key1")

const JsUser = {
    name:"Abhinav",
    age:18,
    mySym : "key1",
    email:"abhi@google.com",
    isLoggedIn:false,
    lastLoggedInDay:["Monday", "Tuesday", "Friday"]
}

console.log(JsUser.name);
console.log(JsUser["age"]);
// console.log(JsUser["email"]);
console.log(JsUser.email);
console.log(JsUser.mySym);
console.log(typeof(JsUser.mySym));

