import "./styles.css";
import { ToDo, ToDoList } from "./classes/index";
import { crearHTML } from "./js/component";
// saludar("wau wau wau");

export const todList = new ToDoList();

todList.cargarLocalStorage();

todList.ToDos.forEach((element) => {
  crearHTML(element);
});
