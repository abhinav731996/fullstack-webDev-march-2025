const button = document.querySelectorAll('.button')
const body = document.querySelector("body")
button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
        console.log(e);
        console.log(e.target);
        if (e.target === "gray") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target === "white") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target === "orange") {
            body.style.backgroundColor = e.target.id;
        }
        if (e.target === "blue") {
            body.style.backgroundColor = e.target.id;
        }
    })
     
})
