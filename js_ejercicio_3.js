const buttonAgregar = document.getElementById("buttonAgregar");
const lista = document.getElementById("lista");

buttonAgregar.onclick = function() {
    const nuevoItem = document.getElementById("nuevoItem");
    const textoEscrito = nuevoItem.value;

    const li = document.createElement("li");
    li.textContent = textoEscrito;
    const buttonEliminar = document.createElement("button");
    buttonEliminar.textContent = "X";
    lista.appendChild(li);
    li.appendChild(buttonEliminar);

    buttonEliminar.onclick = function() {
        li.remove();
    }

}
