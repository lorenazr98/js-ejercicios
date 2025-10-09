const button = document.getElementById("buttonContador");
const texto = document.getElementById("textoContador");
let clics = 0;

function contador() {
  clics += 1;
  texto.textContent = clics;
}

button.onclick = contador;