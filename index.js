const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let dadosValidos = checkInputDados();

    if(dadosValidos) {
        window.location.href = "continue-page.html";
    }
})

let username = document.getElementById("name");
let company = document.getElementById("company");
let emaill = document.getElementById("email");
let phonee = document.getElementById("phone");
let warning = document.getElementById("form-warning-wrapper");
let p = warning.querySelector("p");

username.addEventListener("input", function() { warning.style.display = 'none'; });
company.addEventListener("input", function() { warning.style.display = 'none'; });
emaill.addEventListener("input", function() { warning.style.display = 'none'; });
phonee.addEventListener("input", function() { warning.style.display = 'none'; });

/*  Data validation */
function checkInputDados() {
    let usernameValue = username.value;
    let companyValue = company.value;
    let emailValue = emaill.value;
    let phoneValue = phonee.value;

    if (usernameValue === "") {
        p.innerText = 'Informe o seu nome';
        warning.style.display = 'block';
        return false;
    } else if (companyValue === "") {
        p.innerText = 'Informe a sua empresa';
        warning.style.display = 'block';
        return false;
    } else if ((emailValue === "") || (!checkInputEmail(emailValue) && (emailValue != "") )) {
        p.innerText = 'Informe um email válido';
        warning.style.display = 'block';
        return false;
    } else if (phoneValue === "") {
        p.innerText = 'Informe o seu telefone';
        warning.style.display = 'block';
        return false;
    } else {
        warning.style.display = 'none';
        return true;
    }
}

/* Email validation */
const email = document.getElementById("email");

email.addEventListener("keyup", function() {
    checkInputEmail();
})

function checkInputEmail() {
    const emailValue = email.value;
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const formItem = email.parentElement;

    if (!emailPattern.test(emailValue) && emailValue != "") {
        errorInput(email, "Please enter a valid email address.");
        return false;
    } else {
        formItem.className = "form-group";
        return true;
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-group error";
}

/* Phone mask */
let phone = document.getElementById("phone");

phone.addEventListener("input", function () {

    let clearValue = phone.value.replace(/\D/g, "").substring(0, 11);

    if (clearValue.length < 3) {
        clearValue = clearValue;
    } else if (clearValue.length < 7) {
        clearValue = `(${clearValue.substring(0, 2)}) ${clearValue.substring(2)}`;
    } else {
        clearValue = `(${clearValue.substring(0, 2)}) ${clearValue.substring(2, 6)}-${clearValue.substring(6)}`;
    }

    phone.value = clearValue;
});