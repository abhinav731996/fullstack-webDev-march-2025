const tinder = new Object()
tinder.id = "1234"
tinder.name = "Sahil"
tinder.isLoggedIn = false

// console.log(tinder);

const regularUser = {
    email:"abc@ccda.com",
    fullname:{
        userFullname:{
            firstname:"Abhinav",
            lastname:"Sharma"
        }
    }
}
// console.log(regularUser);
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"d",4:"c"}

// const obj3 = {obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

const obj3 = {...obj1,...obj2}
console.log(obj3);

const user = [
    {
        id : 1,
        email : "a@gmail.com",
    },
    {
        id : 1,
        email : "a@gmail.com",
    },
    {
        id : 1,
        email : "a@gmail.com",
    }
]

user[1].email
console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));

// ++++++++++++ Destructure the element ++++++++++++

const course = {
    coursename:"javascript",
    price:999,
    courseteacher: "Hitesh"
}
const{courseteacher: teacher} = course
console.log(teacher);
console.log(course);
