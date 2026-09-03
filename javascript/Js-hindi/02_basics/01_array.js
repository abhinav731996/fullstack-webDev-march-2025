//Array

const myArr = [0,1,2,3,4]
console.log(myArr[1]);

const myArr2 = new Array(1,2,3,4)

// Array method
myArr.push(6)
myArr.push(8)
myArr.pop()
console.log(myArr);
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(newArr);//type of change into string

//slice & splice

console.log("C", myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("A", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("B", myArr);



