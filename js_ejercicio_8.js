const inputText = document.getElementById("inputText");
const contadorCaracteres = document.getElementById("contadorCaracteres");
const contadorPalabras = document.getElementById("contadorPalabras");

function contador() {
    let frase = inputText.value.trim();
    
    if (frase === "") {
        contadorCaracteres.textContent = 0;
        contadorPalabras.textContent = 0;
    } else {
        let caracteres = frase.split(" ").join("").length;
        contadorCaracteres.textContent = caracteres;
        let palabras = frase.split(" ").length;
        contadorPalabras.textContent = palabras;
    }
}

inputText.oninput = contador;