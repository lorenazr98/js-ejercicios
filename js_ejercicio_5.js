const buttonSumar = document.getElementById("buttonSumar");
const buttonRestar = document.getElementById("buttonRestar");
const buttonMultiplicar = document.getElementById("buttonMultiplicar");
const buttonDividir = document.getElementById("buttonDividir");

const operador1 = document.getElementById("operador1");
const operador2 = document.getElementById("operador2");
let resultado = 0;

const container = document.getElementById("calculadoraContainer");

buttonSumar.onclick = function() {
    if (operador1.value === "" || (operador2.value === "")) {
        alert("Debe introducir un número")
    } else if (isNaN(operador1.value) || (isNaN(operador2.value))) {
        alert("Debes introducir un número válido")
    } else {
        resultado = Number(operador1.value) + Number(operador2.value);
        const textoResultado = document.createElement("p");
        textoResultado.textContent = `El resultado es ${resultado}`
        container.appendChild(textoResultado);
    } 
}

buttonRestar.onclick = function() {
    if (operador1.value === "" || (operador2.value === "")) {
        alert("Debe introducir un número")
    } else if (isNaN(operador1.value) || (isNaN(operador2.value))) {
        alert("Debes introducir un número válido")
    } else {
        resultado = Number(operador1.value) - Number(operador2.value);
        const textoResultado = document.createElement("p");
        textoResultado.textContent = `El resultado es ${resultado}`
        container.appendChild(textoResultado);
    } 
}

buttonMultiplicar.onclick = function() {
    if (operador1.value === "" || (operador2.value === "")) {
        alert("Debe introducir un número")
    } else if (isNaN(operador1.value) || (isNaN(operador2.value))) {
        alert("Debes introducir un número válido")
    } else {
        resultado = Number(operador1.value) * Number(operador2.value);
        const textoResultado = document.createElement("p");
        textoResultado.textContent = `El resultado es ${resultado}`
        container.appendChild(textoResultado);
    } 
}

buttonDividir.onclick = function() {
    if (operador1.value === "" || (operador2.value === "")) {
        alert("Debe introducir un número")
    } else if (isNaN(operador1.value) || (isNaN(operador2.value))) {
        alert("Debe introducir un número válido")
    } else if (operador2.value <= 0) {
        alert("No se puede dividir por 0")
    } else {
        resultado = Number(operador1.value) / Number(operador2.value);
        const textoResultado = document.createElement("p");
        textoResultado.textContent = `El resultado es ${resultado}`
        container.appendChild(textoResultado);
    } 
}