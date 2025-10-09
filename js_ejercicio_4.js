const inputBusqueda = document.getElementById("busqueda");
const items = document.querySelectorAll("li");

inputBusqueda.oninput = function() {
    for (let item of items) {
        if (!item.textContent.toLowerCase().includes(inputBusqueda.value.toLowerCase())) {
            item.style.display= "none";
        } else {
            item.style.display = "list-item"
        }
    }
}