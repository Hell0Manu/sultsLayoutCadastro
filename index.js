/* evento dentro do formulario */
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputName()
    checkInputEmail()
})

/* name validate */
const username = document.getElementById("name");
const warning = document.getElementById("form-warning-wrapper")

function checkInputName(){
    const usernameValue = username.value;

    if(usernameValue === "") {
        warning.style.display = 'block';
        errorInput(warning, "Please enter a valid email address.")
    } else{
        warning.style.display = 'none';
    }
}

const p = warning.querySelector("p")
p.innerText = 'Sua nova mensagem aqui';



/* Email validate */
const email = document.getElementById("email");

email.addEventListener("keyup", () => {
    checkInputEmail();
})

function checkInputEmail(){
    const emailValue = email.value;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if(!emailPattern.test(emailValue)) {
        errorInput(email, "Please enter a valid email address.")
        formItem.className = "form-group error";
    } else{
        const formItem = email.parentElement;
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
