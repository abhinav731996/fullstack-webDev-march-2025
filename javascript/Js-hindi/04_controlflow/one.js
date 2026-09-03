//++++++++++ If & Else ++++++++++

const temp = 44

if (temp>50) {
    console.log("temp is greater then 50");
    
}
else{
    console.log("temp is less then 50");
    
}

// <, >, <=, >=, ==, !=, ===      these all are the simbols that are used 

const score = 200

if (score > 500) {
    const power = "fly"
    console.log(`User power: ${power}`);   
}
else{
    const power = "not fly"
    console.log(`User power: ${power}`);   
}

const balance = 800
if (balance>500) console.log("balance is greater then 500");     //immpleasive scope it can use only in one line


//++++++++++++++ And(&&) Or(||) +++++++++++

const UserloggedIn = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

 if (UserloggedIn && debitCard) {
    console.log("Allow for shopping");
    
 }
 if (loggedinFromEmail || loggedinFromGoogle) {
    console.log("Logged In");
 }

 