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
