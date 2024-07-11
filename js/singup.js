
const userNameInput = document.getElementById("signupName");
const emailInput = document.getElementById("emailLoginInput");
const passwordInput = document.getElementById("passwordLoginInput");
const singUpBtn = document.getElementById("singUpBtn");
const alertMessage = document.getElementById("alertMessage");
let userData = [];

if (localStorage.getItem('users') !== null) {
  userData = JSON.parse(localStorage.getItem('users'));
}

function isValidEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function getAlertMessage(text, color) {
  alertMessage.classList.replace('d-none', 'd-block');
  alertMessage.innerHTML = text;
  alertMessage.style.color = color;
}

function clearForm() {
  userNameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function checkInput() {
  if (userNameInput.value.trim() === "" || emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    return true;
  } else {
    return false;
  }
}

function checkEmailExist() {
  return userData.some(user => user.email === emailInput.value);
}

function signUp() {
  if (checkInput()) {
    getAlertMessage("All input required", "red");
  } else if (!isValidEmail(emailInput.value)) {
    getAlertMessage("Invalid email format", "red");
  } else if (checkEmailExist()) {
    getAlertMessage("Email Already Exist", "red");
  } else {
    let data = {
      userName: userNameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
    };

    userData.push(data);
    localStorage.setItem('users', JSON.stringify(userData));
    clearForm();
    getAlertMessage("Success", "white");
  }
}

singUpBtn.addEventListener("click", signUp);
