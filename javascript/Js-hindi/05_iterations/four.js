//+++++++++++++ for in +++++++++++++++

const myObject = {
    js : "javascript",
    cpp : "c++",
    rb : "rubi",
}
for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);
}