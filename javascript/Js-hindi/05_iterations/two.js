//+++++++++ while & do while loops +++++++++

let index = 0
while (index <=10) {
    console.log(`value of index = ${index}`);
    index = index+2
}

let myArray = ["Batmen", "spiderman", "suprmen"]
let arr = 0
while (arr < myArray.length ) {
    console.log(`value is ${myArray[arr]}`);
    arr = arr+1   
}

let score = 1
do { 
    console.log(`score is ${score}`);
    score++
} while (score <= 5);