
// // ************* Reduce function **************
// console.log("Abhinav");

// const arr = [[1,2], [3,4]];

// const flat = arr.reduce((acc, curr) => acc.concat(curr), []);

// console.log(flat);
// console.log(arr);


// // ************* practice **************

// console.log(0.2 + 0.3 === 0.5);
// console.log(0.2 + 0.3 == 0.5);
// console.log(0.2 + 0.3);
// ------------------------------------------

// const obj = {
//     a:1,
//     b:2
// }
// let newObj = obj.toString();
// console.log(newObj);
// -------------------// to find max product of an Array-----------------------

// 
// const arr = [1, 2, 3, 4, 5, 6];

// let maxProd = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j < arr.length; j++) {
//         const product = arr[i] * arr[j];

//         if (product > maxProd) {
//             maxProd = product;
//         }
        
//     }
// }

// console.log("MAX PRODUCT: ", maxProd);

// ---------------------// for shorting array -----------------------

// let num = [1, 4,7, 3, 6, 9, 8];
// console.log(num.sort((a,b) => a-b));


// ---------------------- classes -----------------------------

// class user {
//     constructor(name, phone, username, password) {
//         this.name = name;
//         this.phone = phone;
//         this.username = username;
//         this.password = password;
//     }
//     updatePassword(pass){
//         return this.password = pass;
//     }
//     getUserName() {
//         return this.username;
//     } 
// }

// let abhi = new user("Abhinav", "9034340569", "abhi90@gmail.com", "@abhi12")

// console.log(abhi);

// console.log(abhi.getUserName());
// console.log(abhi.updatePassword("Abhi@12"));

// console.log(abhi);


// ----------------------------- DOM ----------------------------

// console.log(document.title);
// console.log(document.body);
// console.log(document.URL);


// // #### adding & removing ####
// function addBtn() {
//     const box = document.createElement("div");
//     box.innerHTML = "New Box";
//     box.id = "box";
//     document.getElementById("container").appendChild(box);
// }

// function removeBtn() {
//     const box = document.getElementById("box");
//     if (box) {
//         box.remove();
//     }
// }

// // #### DOM Event ####

// //****** */ add event listener
// document.getElementById("btn").addEventListener("click", function () {
//     alert("Button Clicked!!!")
// })

// // ******** add/remove event listener **************

// const addBtn = document.getElementById("addBtn");
// const removeBtn = document.getElementById("removeBtn");

// function sayHello() {
//     alert("Hello Codder !!")
// }

// addBtn.addEventListener("click", sayHello);
// removeBtn.addEventListener("click", )

// ----------------- to remove event listener --------------(importent)----
// const addBtn = document.getElementById("addBtn");
// const removeBtn = document.getElementById("removeBtn");

// function sayHello () {
//     alert("Hello world");
// };

// addBtn.addEventListener("click", sayHello);
// removeBtn.addEventListener("click", function(){
//     addBtn.removeEventListener("click", sayHello);
//     alert("event listener removed");
// })

// ----------------------- event bubbling & event delegation ------------------

// // ---- Event bubbling ----
// const parentDiv = document.getElementById("parent-div");
// const childDiv = document.getElementById("child-div");

// parentDiv.addEventListener('click', function(){
//     console.log("parentDiv clicked ");    
// })
// childDiv.addEventListener("click", function(){
//     console.log('childDiv clicked');
    
// })

// // ---- Event Delegation ----
// const parentDivUl = document.getElementById("parent-div-ul");
// parentDivUl.addEventListener("click", function(event){
//     if(event.target.tagName === "LI"){
//         console.log('List Item clicked', event.target.textContent);
        
//     }
// })

// //******************Objects******************

// const user = {
//     id: 101,
//     full_name: "Abhinav Sharma",
//     age: 29,
//     "permanent-address": "Rohtak, Haryana",
//     getAge: function () {
//         return this.age;
//     },
//     setAge: function (num){
//         return this.age = num;
//     }
// }

// console.log(user);

// console.log(user.full_name);

// console.log(user['permanent-address']);

// console.log(user.getAge());
// console.log(user.setAge(40));
// console.log(user.age);

// console.log(Object.keys(user));
// console.log(Object.values(user));

// // console.log(Object.keys(user).forEach(key => {
// //     console.log(`${key} : ${user[key]}`);
    
// // }));

// // -------- For each loop ---------
// console.log(Object.keys(user).forEach(key => {
//     if(!(typeof user[key] == 'function')){
//         console.log(`${key} : ${user[key]}`);
//     }
// }));

// // --------- For in loop ---------
// for (const key in user) {
//     if(!(typeof user[key] == 'function'))
//     {
//         console.log(`${key} : ${user[key]}`);
//     }
// }


// // ***************************** Classes **************************

// class user {
//     constructor(name, phone, username, password) {
//         this.name = name,
//         this.phone = phone,
//         this.username = username,
//         this.password = password;
//     }
//     updatePassword (pass){
//         return this.password = pass;
//     }
//     getUsername(){
//         return this.username
//     }
// }

// let abhi = new user("Abhinav", "9034340569", "abhi903434", "@123143");

// console.log(abhi);
// console.log(abhi.getUsername());
// console.log(abhi.updatePassword("123143@"));
// console.log(abhi);


// // ******************* class inheritance ***********************
// Parent Class
// class User {
//     constructor(name, phone, username, password) {
//         this.name = name;
//         this.phone = phone;
//         this.username = username;
//         this.password = password;
//     }

//     login() {
//         return `${this.name} logged in`;
//     }
// }


// // Child Class
// class Employee extends User {

//     constructor(name, phone, username, password, designation, department) {

//         // call parent constructor
//         super(name, phone, username, password);

//         this.designation = designation;
//         this.department = department;
//     }

//     getDepartment() {
//         return this.department;
//     }
// }


// // Object Creation
// let emp1 = new Employee(
//     "Abhinav",
//     "9034340569",
//     "abhi@gmail.com",
//     "abhi12",
//     "Software Developer-1",
//     "Frontend"
// );

// console.log(emp1);

// console.log(emp1.getDepartment());

// console.log(emp1.login());



// ********************** Debouncing ********************

// function debounce(func, delay) {
//     let timeoutId;
//     return function(...arg){
//         if(timeoutId){
//             clearTimeout(timeoutId);
//         }
//         timeoutId = setTimeout(()=>{
//             func.apply(this, args);
//         },delay);
//     }
// }

// const fetchData = (event) => {
//     console.log('Featching data for:', event.target.value);
// };

// const debounceField = debounce(fetchData, 500);

// document.getElementById("search").addEventListener('input', debounceField(function(){
//     console.log('input value', event.target.value);
//     },300))



// // ********************* promise, async/await ********************

let myPromise = new Promise((resolve, reject) => {
    let success = false;
    if(success){
        resolve("promise is resolved");
    }
    else{
        reject("Promise is rejected");
    }
})

myPromise
    .then((message) =>{
        console.log(message);
    })
    .catch((error) =>{
        console.error(error);
    })
    