// // *************** Object ****************

// const user = {
//     id: 101,
//     full_name: "Abhinav",
//     age: 26,
//     'parmanent-address': "Rohtak, Haryana",
//     getAge: function(){
//         return this.age;
//     },
//     setAge: function(num){
//         return this.age = num
//     }

// }

// console.log(user);
// console.log(user.full_name);
// console.log(user['parmanent-address']);          //to call a string 
// console.log(user.getAge());
// console.log(user.setAge(40));                    // output undefined if we not use return 
// console.log(user.getAge());

// console.log(Object.keys(user));                  // to get only keys 
// console.log(Object.values(user));                  // to get only values

// Object.keys(user).forEach(key => {               // to get keys & values 
//     console.log(`${key} : ${user[key]}`);  
// });

// Object.keys(user).forEach(key => {                // to remove extra set & get functions only give values 
//     if(!(typeof user[key] == 'function')){
//         console.log(`${key} : ${user[key]}`);
//     }
// });

// console.log(Object.entries(user));                // to get key & value pairs 

// Object.entries(user).forEach(([key, value]) => {
//     if(!(typeof value == 'function')){
//         console.log(`${key} : ${value}`);
//     }
// });


// const employee = {
//     empId : 1001,

// }

// console.log(employee);
// Object.assign(employee, user);
// console.log(employee);

// for (const key in user){
//      if(!(typeof user[key] == 'function')){
//         console.log(`${key} : ${user[key]}`);
//     }
// }




// *************** class **************

class user{
    #password
    constructor(name, phone, username, password){
        this.name = name;
        this.phone = phone;
        this.username = username;
        this.#password = password
    }
    
    updatePassword(pass){
        return this.#password = pass;
    }

    getUserName(){
        return this.username;
    }
    getPassword(){
        return this.#password;
    }
}

// let abhi = new user("Abhinav", "9099009090", "abhi9034@gmail.com", "@123Abhi");

// console.log(abhi.getUserName());
// console.log(abhi.updatePassword("Abhi@12"));
// console.log(abhi);


// *********** class-inheritance

class Employee extends user{
    constructor(name, phone, username, password, desigination, department){
        super(name, phone, username, password);
        this.desigination = desigination;
        this.department = department;
    }
    getDepartement(){
        return this.department;
    }
}

let emp1 = new Employee("Abhinav", "9099009090", "abhi9034@gmail.com", "@123Abhi", "Software Developer", "Web Development");

console.log(emp1);
console.log(emp1.getDepartement());
console.log(emp1.desigination);
console.log(emp1.getUserName());
console.log(emp1.getPassword());
