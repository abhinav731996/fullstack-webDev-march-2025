document.addEventListener(
  "click",
  function (e) {
    console.log("from document");
    console.log(e.target);
  },
  true
);

const mainclickListner = function (e) {
  console.log("log from main");
  console.log(e.target);
};
document
  .querySelector("main")
  .addEventListener("click", mainclickListner, true);

let button = document.getElementById("click");
button.addEventListener("click", (event) => {
  console.log(event);
  alert("button clicked");
});

button.addEventListener("mouseover", () => {
  console.log("cursor is on button");
});
button.addEventListener("mouseout", () => {
  console.log("cursor remove from button");
});

// let input =  document.getElementById("input");
// input.addEventListener("keydown", (event) => {
//     console.log(event);

// });
// let input =  document.getElementById("input");
// input.addEventListener("keyup", (event) => {
//     console.log(event);

// });

document.addEventListener("DOMcontentLoaded", function (e) {
  console.log(e);
});

const newsLetterForm = document.getElementById("form");
newsLetterForm.addEventListener("submit", function (e) {
  // console.log(newsLetterForm);
  // e.preventDefault();                                     //to not submit form

  console.log(e);
  console.log(input.value.length);
  if (!(input.value.length >= 6)) {
    e.preventDefault();
  } 
});

// input.addEventListener('change', function(){
//     console.log(input.value);
// })

input.addEventListener("focusout", function () {
  console.log(input.value);
});

let inputs = document.querySelectorAll('input[type = "text"]');
console.log(inputs);
inputs.forEach((el) => {
  el.addEventListener("change", (e) => {
    console.log(e.target.value);
  });
});

let submitBtn = document.querySelector('form input[type="submit"]');
submitBtn.addEventListener("click", function (e) {
    console.log("log from submit button");
    console.log(e.target);
  },
  true
);

let table = document.querySelector("table");
table.addEventListener("click", function (e) {
    if (e.target.classList.contains("delete")) {
      let id = e.target.dataset.id;
      console.log(id); // APi call to delete this record
      e.target.closest("tr").remove();
      // console.log("delete");
    }
    if (e.target.classList.contains("deactivate")) {
      let currentStatus = e.target
        .closest("tr")
        .querySelector(".status").textContent;
      console.log(currentStatus);

      if (currentStatus === "Active") {
        e.target.closest("tr").querySelector(".status").textContent = "Inactive";
        e.target.textContent = "Active";
      } else {
        e.target.closest("tr").querySelector(".status").textContent = "Active";
        e.target.textContent = "Deactivate";
      }
    }
  },
  true
);
