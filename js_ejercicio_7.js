const inputPassword = document.getElementById("password");
const buttonGenerar = document.getElementById("buttonGenerar");
const errorPassword = document.getElementById("errorPassword");

function generarPassword() {
    let characters = "qwertyuiopasdfghjklñzxcvbnm0123456789!#$%&()*+,-./:;<=>?@[\]^_{|}~";
    let pass = "";
    
    while (pass.length < 4) {
        let c = Math.floor(Math.random()*characters.length);
        pass += characters[c]
    }
    return pass;
}

function errorPasswordfc() {
    if (inputPassword.value.length < 4) {
        errorPassword.style.display = "block"
    } else {
        errorPassword.style.display = "none"
    }
}

buttonGenerar.onclick = function() {
    let password = generarPassword();
    inputPassword.value = password;
    errorPasswordfc()
}

inputPassword.oninput = errorPasswordfc;