import { ToDo } from "../classes";
import { todList } from "../index";

// referencias a Html

const divTodoList = document.querySelector(".todo-list"); // llamar clases
const txtInput = document.querySelector(".new-todo");
const btnDeletCompleted = document.querySelector(".clear-completed");
const ulFiltros = document.querySelector(".filters");
const anchorFiltros = document.querySelectorAll(".filtro");

export const crearHTML = (todo) => {
  const htmlToDo = `
  <li class=" ${todo.completado ? "completed" : ""}  " data-id="${todo.id}">
  <div class="view">
    <input class="toggle" type="checkbox" ${todo.completado ? "checked" : ""}>
    <label> ${todo.tarea} </label>
    <button class="destroy"></button>
  </div>
  <input class="edit" value="Create a TodoMVC template">
</li>`;

  const div = document.createElement("div");
  div.innerHTML = htmlToDo;

  divTodoList.append(div.firstElementChild);

  return div.firstElementChild;
};

txtInput.addEventListener("keyup", (event) => {
  console.log(event);
  if (
    event.keyCode === 13 &&
    (txtInput.value != undefined || txtInput.value != null)
  ) {
    const newToDo = new ToDo(txtInput.value);
    todList.nuevoToDo(newToDo);
    crearHTML(newToDo);

    txtInput.value = "";
  }
});

divTodoList.addEventListener("click", (event) => {
  // elemento seleccionado ....
  let nombreElemento = event.target.localName;
  // obtener elementos del html q estan anidados
  let ToDoElement = event.target.parentElement.parentElement;
  // obtener atributos de un html
  let ToDoID = ToDoElement.getAttribute("data-id");

  // si selecciona el input marca como leido
  if (nombreElemento.includes("input")) {
    todList.marcarCompletado(ToDoID);
    ToDoElement.classList.toggle("completed"); // accede a clases del elemento html si tiene la clase la quita de lo contrario la adiciona ....
  } else if (nombreElemento.includes("button")) {
    todList.eliminarToDo(ToDoID);
    divTodoList.removeChild(ToDoElement); // eliminar un elemento del html
  }
});

btnDeletCompleted.addEventListener("click", () => {
  todList.eliinarCompletados();

  // referencia a todos los div de la lista

  for (let i = divTodoList.children.length - 1; i == 0; i--) {
    let elementoTodo = divTodoList.children[i];

    // eliminar un elemento de html a partir de solo clases
    if (elementoTodo.classList.contains("completed")) {
      divTodoList, removeChild(elementoTodo);
    }
  }
});

ulFiltros.addEventListener("click", (event) => {
  console.log(event.target.text);

  let filtro = event.target.text;

  if (!filtro) return;

  anchorFiltros.forEach((element) => element.classList.remove("selected"));

  //corresponde al elemento seleccionado
  event.target.classList.add("selected");

  for (const element of divTodoList.children) {
    element.classList.remove("hidden");

    const completado = element.classList.contains("completed");

    switch (filtro) {
      case "Pendientes":
        if (completado) {
          element.classList.add("hidden");
        }
        break;

      case "Completados":
        if (!completado) {
          element.classList.add("hidden");
        }
        break;
    }
  }
});
