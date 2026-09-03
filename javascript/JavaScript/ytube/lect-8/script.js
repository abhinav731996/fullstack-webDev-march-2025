let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e) => {                          //method one 
//     console.log("btn1 was clicked");
//     alert("Hello!!")
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
    
// };

btn1.addEventListener("click", (evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log("btn1 was clicked handler1");
    
})
btn1.addEventListener("click", ()=>{
    console.log("btn1 was clicked handler2");
})

const handler3 = ()=>{ 
    console.log("btn1 was clicked handler3");
}

btn1.addEventListener("click", handler3);

btn1.addEventListener("click", ()=>{
    console.log("btn1 was clicked handler4");});

btn1.removeEventListener("click", handler3);

let div = document.querySelector("#div");
div.onmouseover = (e)=>{
    console.log("you are insid div");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    
}