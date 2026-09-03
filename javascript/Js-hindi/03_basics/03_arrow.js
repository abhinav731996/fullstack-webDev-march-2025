const user = {
    username : "Abhinav",
    price : 999,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomemessage()
// user.username = "Sam"
// user.welcomemessage()

console.log(this);

function chai() {
    let username = "Abhinav"
    console.log(this);
}
chai()
const chai1 = () => {                  // +++++++++arrow i.e.()=>{} = function(){} 
    let username = "Abhinav"
    console.log(username);
}
chai1()

const addtwo = (num1, num2) => {
    return num1 + num2                  //++++++++++++ implicity return +++++++++++++
}
console.log(addtwo(3,5));

const addthree = (num3,num4,num5)=>(num3+num4+num5)        //+++++++++ explicity retun +++++++++++
console.log(addthree(3,4,5));
