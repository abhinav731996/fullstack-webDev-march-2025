const arr = [5, 1, 3, 2, 6];

// Double - [10, 1, 6, 4, 12]
// Triple - [15, 1, 9, 6, 18]
// Binary - ["101", 1, "11", "10", "110"]


function double(x){
    return x *2
}
function triple(x){
    return x*3
}

// const output = arr.map(double);
const output = arr.map(triple);
console.log(output);
