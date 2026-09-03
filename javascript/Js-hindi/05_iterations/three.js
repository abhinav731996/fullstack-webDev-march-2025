//++++++++ for of ++++++++++++

const arr = [1,2,3,4]
for (const num of arr) {
    // console.log(num);  
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(greet);
}

//+++++++++ Map +++++++++++++

const map = new Map()
map.set('IN', "India")
map.set('USA', "United State of America")
map.set('FR', "France")

console.log(map);

for (const m of map) {
    console.log(m);
    
}

// const myObject = {
//     'game' : 'nfs',
//     'game' : 'batmen'
// }
// for (const [key, value] of myObject) {
//     console.log(key & value);
    
// }