import "../css/componente.css";

export const saludar = (nombre) => {
  const h1 = document.createElement("h1");
  h1.innerText = `holaaaa ${nombre}`;

  document.body.append(h1);
};
