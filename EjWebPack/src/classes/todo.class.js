export class ToDo {
  static fromJson({ id, tarea, completado, creado }) {
    const tempToDo = new ToDo(tarea);
    tempToDo.completado = completado;
    tempToDo.creado = creado;
    tempToDo.id = id;

    return tempToDo;
  }

  constructor(tarea) {
    this.tarea = tarea;
    this.id = new Date().getTime();
    this.completado = false;
    this.creado = new Date();
  }
}
