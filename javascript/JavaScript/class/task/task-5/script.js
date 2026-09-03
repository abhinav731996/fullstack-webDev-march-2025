const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let nameEl = registerForm.querySelector("#name");
  let emailEl = registerForm.querySelector("#email");
  let passwordEl = registerForm.querySelector("#password");
  let confirmPasswordEl = registerForm.querySelector("#confirmPassword");

  let name = nameEl.value.trim();
  let email = emailEl.value.trim();
  let password = passwordEl.value.trim();
  let confirmPassword = confirmPasswordEl.value.trim();

  let hasError = false;

  /* ---------- NAME ---------- */
  let nameErr = validateName(name);
  if (nameErr.error) {
    hasError = true;
    showError(nameEl, nameErr.message);
  } else {
    clearError(nameEl);
  }

  /* ---------- EMAIL ---------- */
  let emailErr = validateEmail(email);
  if (emailErr.error) {
    hasError = true;
    showError(emailEl, emailErr.message);
  } else {
    clearError(emailEl);
  }

  /* ---------- PASSWORD ---------- */
  let passErr = validatePassword(password);
  if (passErr.error) {
    hasError = true;
    showError(passwordEl, passErr.message);
  } else {
    clearError(passwordEl);
  }

  /* ---------- CONFIRM PASSWORD ---------- */
  let confirmErr = validateConfirmPassword(password, confirmPassword);
  if (confirmErr.error) {
    hasError = true;
    showError(confirmPasswordEl, confirmErr.message);
  } else {
    clearError(confirmPasswordEl);
  }

  /* ---------- FINAL SUBMIT ---------- */
  if (!hasError) {
    alert("Registration Successful");
    registerForm.reset();
  }
});

/* ---------- HELPER FUNCTIONS ---------- */

function showError(inputEl, message) {
  inputEl.classList.add("hasError");
  inputEl.closest(".form-group")
         .querySelector(".errorMessage").textContent = message;
}

function clearError(inputEl) {
  inputEl.classList.remove("hasError");
  inputEl.closest(".form-group")
         .querySelector(".errorMessage").textContent = "";
}

/* ---------- VALIDATIONS ---------- */

function validateName(val) {
  if (!val) {
    return { error: true, message: "Name can't be empty" };
  } else if (val.length < 3) {
    return { error: true, message: "Minimum 3 characters required" };
  }
  return { error: false };
}

function validateEmail(val) {
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val) {
    return { error: true, message: "Email can't be empty" };
  } else if (!emailRegex.test(val)) {
    return { error: true, message: "Invalid email format" };
  }
  return { error: false };
}

function validatePassword(val) {
  let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
  if (!val) {
    return { error: true, message: "Password can't be empty" };
  } else if (!passRegex.test(val)) {
    return {
      error: true,
      message: "Min 6 chars, 1 Upper, 1 Lower, 1 Digit & 1 Special char"
    };
  }
  return { error: false };
}

function validateConfirmPassword(password, confirmPassword) {
  if (!confirmPassword) {
    return { error: true, message: "Confirm password required" };
  } else if (password !== confirmPassword) {
    return { error: true, message: "Passwords do not match" };
  }
  return { error: false };
}
