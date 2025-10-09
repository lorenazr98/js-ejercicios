const inputNuevaTarea = document.getElementById("inputNuevaTarea");
const buttonAgregar = document.getElementById("buttonAgregar");
const buttonLimpiar = document.getElementById("buttonLimpiar");
const listaTareas = document.getElementById("listaTareas");

let tareas = [];

function leerTareas() {
    if (localStorage.getItem("misTareas") !== null) {
        tareas = JSON.parse(localStorage.getItem("misTareas"));
        renderizarTareas();
    }
}

function renderizarTareas() {
    listaTareas.innerHTML = "";
    
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];
        let nuevaTarea = document.createElement("li");
        let check = document.createElement("input");
        check.type = "checkbox";
        
        if (tarea.completada === true) {
            check.checked = true;
        }
        
        check.onchange = function() {
            tareas[i].completada = check.checked;
            localStorage.setItem("misTareas", JSON.stringify(tareas));
        };
        
        listaTareas.appendChild(nuevaTarea);
        nuevaTarea.textContent = tarea.nombre;
        nuevaTarea.prepend(check);
    }
}

function agregarTarea() {
    let tarea = inputNuevaTarea.value;

    tareas.push({nombre: tarea, completada: false});

    localStorage.setItem("misTareas", JSON.stringify(tareas));

    renderizarTareas();
}

function limpiarTareas() {
    tareas = tareas.filter(function(tarea) {
        return tarea.completada === false;
    })

    localStorage.setItem("misTareas", JSON.stringify(tareas));

    renderizarTareas();
}

leerTareas();
buttonAgregar.onclick = agregarTarea;
buttonLimpiar.onclick = limpiarTareas;