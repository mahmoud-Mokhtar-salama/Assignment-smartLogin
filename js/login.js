
const emailLoginInput = document.getElementById('emailLoginInput');
const passwordLoginInput = document.getElementById('passwordLoginInput');
const loginBtn = document.getElementById('loginBtn');
const alertMassage = document.getElementById('alertMassage');
let userData = [];

// Retrieve users from localStorage if available
if (localStorage.getItem('users') !== null) {
    userData = JSON.parse(localStorage.getItem('users'));
}

function logIn() {
    if (checkInputsEmpty()) {
        getAlertMessage('All Inputs Required', 'red');
    } else {
        if (checkEmailPassword()) {
            window.location.href = 'home.html';
        } else {
            getAlertMessage('Email or Password not correct', 'red');
        }
    }
}

function checkEmailPassword() {
    for (let index = 0; index < userData.length; index++) {
        if (userData[index].email === emailLoginInput.value && userData[index].password === passwordLoginInput.value) {
            localStorage.setItem('userName', userData[index].userName);
            return true;
        }
    }
    return false; // Return false if no matching email/password found
}

function getAlertMessage(text, color) {
    alertMassage.classList.replace('d-none', 'd-block');
    alertMassage.innerHTML = text;
    alertMassage.style.color = color;
}

function checkInputsEmpty() {
    return emailLoginInput.value === '' || passwordLoginInput.value === '';
}

loginBtn.addEventListener('click', logIn);
