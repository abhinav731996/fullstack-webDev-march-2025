let score = 78;

switch (true) {
    case score >= 80:
        console.log("A");
        break;

    case score >= 60:
        console.log("B");
        break;

    case score >= 40:
        console.log("C");
        break;

    case score >= 30:
        console.log("D");
        break;

    default:
        console.log("Fail");
        break;
}


// for loop
for (let i = 1; i <=10; i++) {
    console.log(`2 * ${i} = ${2*i}`);
}

// do while loop
let i = 1;
do {
    console.log(`3 * ${i} = ${3*i}`);
    i++;
} while (i<=10);

// while
while (i<=10) {
    console.log(`4 * ${i} = ${4*i}`);
    i++;
};

let str = "JavaScript";
for (const i of str) {
    console.log("i = ", i);
    
}