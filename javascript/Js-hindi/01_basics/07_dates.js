//===== Dates ======

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof(myDate));

let myCreadedDate = new Date(2024, 0, 24)
console.log(myCreadedDate.toDateString());

let myNewDate = new Date("12-3-2024")
console.log(myNewDate.toDateString());

console.log(myDate.getDate());
console.log(myDate.getMonth());//month starts 0 i.e. jan
console.log(myDate.getMonth()+1);
myDate.toLocaleString('default',{weekday :"long" 
})