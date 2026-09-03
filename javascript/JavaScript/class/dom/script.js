
console.log(document.title);
console.log(document.URL);
console.log(document.head);
console.log(document.body);


let mainHeading = document.getElementById("main-heading");
console.log(mainHeading);

let h2s = document.getElementsByClassName("h2");
console.log(h2s);

let para = document.getElementsByTagName('p');
console.log(para);

// let section1H2 = document.querySelector(".section1 .h2");
// console.log(section1H2);
let section1Counts = document.querySelectorAll(".section1 [data-count]");
console.log(section1Counts);


mainHeading.innerHTML = "Document Object Model<span>(DOM)</span>";
mainHeading.textContent = "Document Object Model";

section1Counts.forEach(el => {
    console.log(el.getAttribute('data-count'));
    el.setAttribute("data-count", +(el.getAttribute('data-count')) + 20); 
});

mainHeading.style.background = "red";

let collapseBtn = document.querySelector(".collapse-btn");
let showBtn = document.querySelector(".show-btn");
let toggleBtn = document.querySelector(".toggle-btn");

collapseBtn.addEventListener("click", function(){
    document.querySelector(".collapsible").classList.remove("show");
});
showBtn.addEventListener("click", function(){
    document.querySelector(".collapsible").classList.add("show");
});
toggleBtn.addEventListener("click", function(){
    document.querySelector(".collapsible").classList.toggle("show");
});

let newsection = document.createElement("section");
newsection.classList.add("section");
newsection.textContent = "Section content";

// document.querySelector('main').appendChild(newsection);     // to add new section in the end

document.querySelector('main').insertBefore(newsection, document.querySelector("main").firstChild);

showBtn.remove();
collapseBtn.remove();

let newpara = document.createElement("p");
newpara.classList.add('replaced');
newpara.textContent = "Replaced Element";

document.querySelector('[data-count = "40"]').replaceWith(newpara);
