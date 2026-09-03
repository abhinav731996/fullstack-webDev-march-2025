let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let crrMode = "light";

modeBtn.addEventListener("click", ()=>{
    console.log("You are trying to chnage the mode");
    
    if(crrMode === "light"){
        crrMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light")
        // document.querySelector("body").style.backgroundColor = "black";
        // document.querySelector("body").style.color = "white";
    }else{
        crrMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
        // document.querySelector("body").style.backgroundColor = "white";
        // document.querySelector("body").style.color = "black";
    }

    console.log(crrMode);
    
});
