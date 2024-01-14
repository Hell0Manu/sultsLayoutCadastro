/* evento dentro do formulario */
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkInputEmail()
})

/* name validate */


/* Email validate */
const email = document.getElementById("email");

function checkInputEmail(){
    const emailValue = email.value;

    if(emailValue === "") {
        errorInput(email, "Please enter a valid email address.")
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
