// let x = 999999999999999;
// // let y = 9999999999999999; // more then 15 number will behave abnormal so we can use n 
// let y = 9999999999999999n; 

// console.log(x);
// console.log(y);



// toFixed()
// console.log((40/6).toFixed(2));


// let input = "40a967";
// console.log(typeof(input));

// let inputInt = parseInt(input);
// console.log(inputInt, typeof(inputInt));

// let inputFlot = parseFloat(input);
// console.log(input, typeof inputFlot);

// console.log(input/2);




// ************* Date

let now = new Date();
console.log(now);

// let newYear = new Date("2026-01-01 05:30:01");   // for terminal because indain standard time is GMT+5:30
let newYear = new Date("2026-01-01 00:00:01");
console.log(newYear);    // for browser
console.log(newYear.toDateString());    // to make terminal according to your date 


console.log(newYear.getDate());
console.log(newYear.getDay());
console.log(newYear.getMonth());
console.log(newYear.getFullYear());
console.log(newYear.getHours());
console.log(newYear.getTime());
