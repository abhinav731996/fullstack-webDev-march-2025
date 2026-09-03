
let a = 300
if (true) {
    let a = 10
    const b = 20 
   console.log("Inner: ", a);      //inner scope
    
}
console.log(a);             //globel scope

function one(params) {
    const name = "Abhinav"
    function two(){
        const website = "youtube"
        console.log(name);
        
    }
    // console.log(website);
    two()
    
}
one()

if (true) {
    const username = "Abhinav"
    if (username === "Abhinav") {
        const website = " youtube"
        console.log(username+website);
        
    }
}

//+++++++++++++++ Interesting ++++++++++++++++++

console.log(addone(5))
function addone(num) {
    return num + 1

}

const addtwo = function (num) {
    return num + 2
}
console.log(addtwo(5))

