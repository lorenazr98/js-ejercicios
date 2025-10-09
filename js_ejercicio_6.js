const temporizador = document.getElementById("temporizador");

const buttonIniciar = document.getElementById("buttonIniciar");
const buttonPausar = document.getElementById("buttonPausar");
const buttonReiniciar = document.getElementById("buttonReiniciar");

const horasTexto = document.getElementById("horas");
const minutosTexto = document.getElementById("minutos");
const segundosTexto = document.getElementById("segundos");

let horas = 0;
let minutos = 0;
let segundos = 0;

let tiempo;

function formatearNumeros(num) {
    if (num < 10) {
        num = `0${num}`
    } 
    return num;
}

function iniciarCronometro() {
     tiempo = setInterval(function() {
        segundos += 1;
        segundosTexto.textContent = formatearNumeros(Number(segundos));

        if (segundos == 60) {
            minutos += 1;
            segundos = 0;
            segundosTexto.textContent = formatearNumeros(Number(segundos));
            minutosTexto.textContent = formatearNumeros(Number(minutos));
        } 
        
        if (minutos == 60) {
            horas += 1;
            minutos = 0;
            minutosTexto.textContent = formatearNumeros(Number(minutos));
            horasTexto.textContent = formatearNumeros(Number(horas));
        }
    }, 1000);
}

function pausarCronometro() {
    clearInterval(tiempo);
}

function reiniciarCronometro() {
    clearInterval(tiempo);
    segundos = 0;
    minutos = 0;
    horas = 0;
    segundosTexto.textContent = formatearNumeros(Number(segundos));
    minutosTexto.textContent = formatearNumeros(Number(minutos));
    horasTexto.textContent = formatearNumeros(Number(horas));
}

buttonIniciar.onclick = iniciarCronometro;
buttonPausar.onclick = pausarCronometro;
buttonReiniciar.onclick = reiniciarCronometro;