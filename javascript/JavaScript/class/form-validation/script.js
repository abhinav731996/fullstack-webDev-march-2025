const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let nameEl = contactForm.querySelector("#name");
    let emailEl = contactForm.querySelector("#email");
    let phoneEl = contactForm.querySelector("#mobile");
    let name = nameEl?.value?.trim();
    let email = emailEl?.value?.trim();
    let contact = phoneEl?.value?.trim();
    // console.log(name);
    let hasError = false;


    /* -------- NAME VALIDATION -------- */
    let nameErr = validateName(name);
    if(nameErr.error){
        hasError = true;
        nameEl.classList.add("hasError")
        // console.log(nameEl.nextSibling());
        nameEl.closest(".form-group").querySelector(".errorMessage").textContent = nameErr.message;
        
    }else{
        nameEl.classList.remove("hasError")
        nameEl.closest(".form-group").querySelector(".errorMessage").textContent = "";
        
    }
    

    /* -------- EMAIL VALIDATION -------- */
    let emailErr = validateEmail(email);
    if(emailErr.error){
        hasError = true;
        emailEl.classList.add("hasError")
        // console.log(emailEl.nextSibling());
        emailEl.closest(".form-group").querySelector(".errorMessage").textContent = emailErr.message;
        
    }else{
        emailEl.classList.remove("hasError")
        emailEl.closest(".form-group").querySelector(".errorMessage").textContent = "";
        
    }
    
    if(!hasError){
        console.log("Form Submited Successfully ");
    }

    /* -------- PHONE VALIDATION -------- */
    let contactErr = validatePhone(contact);
    if (contactErr.error) {
        hasError = true;
        phoneEl.classList.add("hasError");
        phoneEl.closest(".form-group")
            .querySelector(".errorMessage").textContent = contactErr.message;
    } else {
        phoneEl.classList.remove("hasError");
        phoneEl.closest(".form-group")
            .querySelector(".errorMessage").textContent = "";
    }

    if(!hasError){
        console.log("Form Submited Successfully ");
        contactForm.reset();
    }
});

function validateName(val){
    let error = false;
    let errorMessage = "";

    if(!val || val === ""){
        errorMessage = "Name can't be empty";
        error = true;
    }
    else if(val?.trim().length < 3){
        errorMessage = "Name must have min. 3 char";
        error = true;
    }
    return {error: error, message: errorMessage};
}

function validateEmail(val){
    let error = false;
    let errorMessage = "";
    let testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;         // regex to validate email

    if(!val || val === ""){
        errorMessage = "Email can't be empty";
        error = true;
    }
    else if(!testEmail.test(val?.trim().match(testEmail))){
        errorMessage = "Must have valid email";
        error = true;
    }
    return {error: error, message: errorMessage};
}
function validatePhone(val){
    let error = false;
    let errorMessage = "";
    let testPhone = /^(0|91)?[6-9]\d{9}$/;       // regex to validate indian phone number with country code & starting digits

    if(!val || val === ""){
        errorMessage = "Phone number can't be empty";
        error = true;
    }
    else if(!testPhone.test(val?.trim().match(testPhone))){
        errorMessage = "Must have valid Phone number";
        error = true;
    }
    return {error: error, message: errorMessage};
}