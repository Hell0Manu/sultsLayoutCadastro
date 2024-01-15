/* event inside the form */
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputdados()
    checkInputEmail()
    
    
})

/* name validate / / company validate */
let username = document.getElementById("name");
let company = document.getElementById("company");
let emaill = document.getElementById("email");
let phonee = document.getElementById("phone");
let warning = document.getElementById("form-warning-wrapper")
let p = warning.querySelector("p")


function checkInputdados(){
    let usernameValue = username.value;
    let companyValue = company.value;
    let emailValue = emaill.value;
    let phoneValue = phonee.value;


    if(usernameValue === "") {
        warning.style.display = 'block';
        p.innerText = 'Informe o seu nome';
    }else if(companyValue === ""){
        warning.style.display = 'block';
        p.innerText = 'Informe a sua empresa';
    }else if(emailValue === "" || checkInputEmail(emailValue) == true){
        warning.style.display = 'block';
        p.innerText = 'Informe um email válido';
    }else if(phoneValue === ""){
        warning.style.display = 'block';
        p.innerText = 'Informe o seu telefone';
    }else{
        warning.style.display = 'none';
    }
}


/* Email validate */
const email = document.getElementById("email");

email.addEventListener("keyup", () => {
    checkInputEmail();
})

function checkInputEmail(){
    const emailValue = email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const formItem = email.parentElement;

    if(!emailPattern.test(emailValue) && emailValue != "") {
        errorInput(email, "Please enter a valid email address.")
    } else{
        formItem.className = "form-group"
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-group error"
}


/* Phone mask */
let phone = document.getElementById("phone");

phone.addEventListener("input", function() {
   let clearValue = phone.value.replace(/\D/g, "").substring(0,11);

    phone.value = clearValue;

    let arryNumber = clearValue.split("");
    let formatNumber = "";

    if(arryNumber.length > 0){
        formatNumber += `(${arryNumber.slice(0,2).join("")})`;
    }

    if(arryNumber.length > 2) {
        formatNumber += ` ${arryNumber.slice(2,7).join("")}`;
    }

    if(arryNumber.length > 7) { 
        formatNumber += `-${arryNumber.slice(7,11).join("")}`;
    }

    phone.value = formatNumber;
});
