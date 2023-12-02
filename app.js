const d = document;

const input = d.getElementById("ingresar-tarea");
const boton = d.querySelector("button");
const listaDeTarea = d.getElementById("lista-de-tareas");

function agregarTarea() {
  if (input.value) {
    let tareaNueva = d.createElement("div");
    tareaNueva.classList.add("tarea");

    // crear y agregar texto
    let texto = d.createElement("p");
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    // crear y agregar iconos
    let iconos = d.createElement("div");
    iconos.classList.add("iconos");
    tareaNueva.appendChild(iconos);

    // iconos
    let completar = d.createElement("i");
    completar.classList.add("bi", "bi-check-circle-fill", "icono-completar");
    completar.addEventListener("click", completarTarea);

    let eliminar = d.createElement("i");
    eliminar.classList.add("bi", "bi-trash3-fill", "icono-eliminar");
    eliminar.addEventListener("click", eliminarTarea);

    iconos.append(completar, eliminar);

    // Agregar tarea a la lista
    listaDeTarea.appendChild(tareaNueva);

    input.value = "";
  } else {
    alert("Por favor ingrese una tarea");
  }
}

function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle("completada");
}

function eliminarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.remove();
}

boton.addEventListener("click", agregarTarea);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});
