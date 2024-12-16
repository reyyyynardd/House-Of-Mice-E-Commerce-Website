//Initialise Variables
const bar = document.getElementById('menu');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword")
const errorNodes = document.querySelectorAll(".error");

//Show on Page
if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

function clearMsg() {
    for(let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    success.innerText = "";

}

function emailValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email)
}


//Contact Form Validation
function validateContactForm() {

    clearMsg();
    let errorFlag = false;

    if(nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be empty";
        errorFlag = true;
    }

    if(!emailValid(email.value)) {
        errorNodes[1].innerText = "Invalid Email address";
        errorFlag = true;
    }
    
    if(message.value.length < 1) {
        errorNodes[2].innerText = "Please enter a message";
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText = "Message Successfully Sent!"
    }

}

//Account Form Validation
function validateLoginForm() {

    clearMsg();
    let errorFlag = false;

    if(username.value != "reyyyynard") {
        errorNodes[0].innerText = "Incorrect Username";
        errorFlag = true;
    }

    if(password.value != "reyyyynard123") {
        errorNodes[1].innerText = "Incorrect Password";
        errorFlag = true;
    }

    if(!errorFlag) {
        success.innerText = "Login Successful!"
    }

}