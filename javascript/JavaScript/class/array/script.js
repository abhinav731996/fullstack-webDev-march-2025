let students = ["abhinav", "anjali", "faiz", "kalpna", "sakhir", "nisha"];

let studentsDetail =[
    {
        name: "abhinav",
        batch: "march 2025"
    },
    {
        name: "anjali",
        batch: "march 2025"
    }
]

// console.log(students.length);
// console.log(studentsDetail.length);

// // for removing from last 

// students.push("dinesh");
// console.log(students);

// students.pop();
// console.log(students);


// // for removing from start 

// students.unshift("dinesh", "anand");
// console.log(students);

// students.shift()
// console.log(students);

// students.splice(2,1, 'aditya');
// console.log(students);

// let addstudents = students.slice(0,2);
// console.log(addstudents);


// // include 
// console.log(students.includes("bharat"));
// console.log(students.includes("abhinav"));

// console.log(addstudents.with(1, "sam"));


// console.log(addstudents.concat(["manonit", "ravina"]));

// let str = addstudents.join();
// console.log(str);

// console.log(students.includes("sam"));
// console.log(students.includes("faiz"));



// task **************
// by for each method 

// let arr =[1, 2, 3, 4, 5, 6];
// let modArr = [];

// arr.forEach(val =>{
//     modArr.push(val +2)
// });
// console.log(modArr);

// ********** by map method 

let arr = [1, 2, 3, 4, 5, 6];
let modArr = arr.map(val => {return val + 2});
console.log(modArr);

let studentsUpper = students.map(val => {return val.toLocaleUpperCase()})
console.log(studentsUpper);

let studentsWithA = students.filter(val => val.startsWith("a"))
console.log(studentsWithA);


let employee = [
    {
        name: "Emp-1",
        salary: 20000
    },
    {
        name: "Emp-2",
        salary: 40000
    },
    {
        name: "Emp-3",
        salary: 60000
    },
    {
        name: "Emp-4",
        salary: 30000
    },
    {
        name: "Emp-5",
        salary: 70000
    },
    
]

let totalSalary = employee.reduce((prev, item) => {
    return prev + item.salary
}, 0)
console.log(totalSalary);


console.log(students.reverse());
console.log(students.sort()); // for strings 

// *********** sorting for Number
let num = [1, 2, 10, 4, 9, 20, 14];
console.log(num.sort((a,b) => a-b));

console.log(students.indexOf("faiz"));