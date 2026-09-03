let arr1 = ["Abhinav", "Software Engineer", "Indixpert", "Rohtak", "Haryana", "India"];

let obj1 = {name: "abhinav", desigination: "software engineer", company: "indixpert", city: "rohtak", state: "haryana", country: "india"};

function printData(arr) {
    const[name, desigination, company] = arr
    console.log(name, desigination, company);
    
}

function printData2(obj) {
    const{name, desigination, company} = obj
    console.log(name, desigination, company);

}

printData(arr1);
printData2(obj1);


//------------ rest operator --------------
function rest(arr) {
    const[name, desigination, company, ...rest] = arr
    console.log(name, desigination, company, ...rest);
    
}
function rest2(obj) {
    const{name, desigination, company, ...rest} = obj
    console.log(rest);
    
}

rest(arr1);
rest2(obj1)

// -------------- spread operator -------------

let arr2 = [1,2,3,4,5,6,7,8];

// let arr3 = arr2;             // same on both i.e. 15
let arr3 = [...arr2];           // different on both i.e. 4 & 15

arr3[3] = 15

console.log(arr2);
console.log(arr3);

// ----------- stringify -----------

let arr4 = [1,2,3,4,5,[6,7,8,9]];
let arr5 = Array.from(JSON.parse(JSON.stringify(arr4)));

arr5[5][0]=15;

console.log(arr4);
console.log(arr5);



const num = [1,2,3]
const copy = [...num]
console.log(copy);

// ---------- merging ---------
const a = [1,2]
const b = [3,4]
const merged = [...a, ...b]
console.log(merged);

// ---------- adding element ----------
const number = [2,3]
const result = [1, ...number, 4]

console.log(result);


// -------- coping object --------

let obj2 = {
    name: "abhi",
    desigination: "software engineer",
    company: "indixper",
    address: {
        city: "gurgaon",
        state: "haryana",
        country: "india"
    }
};

// let obj3 = {...obj2}
let obj3 = JSON.parse(JSON.stringify(obj2))

obj3.address.city = "rohtak";

console.log(obj2);
console.log(obj3);


let p1 = new Promise((resolve, reject) => {
    resolve ("from prmise");
})

p1.then((message)=> console.log(message));

let a1 = 10;
let b1 = 20;

add(a,b);

console.log("from global");

function add(a1,b1) {
    setTimeout(()=>{
        console.log("from time out");
        
    },1000)
    console.log(a+b);
    
}



