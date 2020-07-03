import { ToDo } from "./todo.class";

export class ToDoList {
  constructor() {
    this.ToDos = [];
  }

  nuevoToDo(ToDo) {
    this.ToDos.push(ToDo);
    this.guardarLocalStorage();
  }

  eliminarToDo(id) {
    this.ToDos = this.ToDos.filter((item) => item.id != id);
    this.guardarLocalStorage();
  }

  marcarCompletado(id) {
    for (let todo of this.ToDos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        this.guardarLocalStorage();
        break;
      }
    }
  }

  eliinarCompletados() {
    this.ToDos = this.ToDos.filter((item) => !item.completado);
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(this.ToDos));
  }

  cargarLocalStorage() {
    localStorage.getItem("todo")
      ? (this.ToDos = JSON.parse(localStorage.getItem("todo")))
      : (this.ToDos = []);

    this.ToDos = this.ToDos.map((obj) => ToDo.fromJson(obj));
  }
}
