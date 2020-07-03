const peso = (x) => {
  console.log(2 * x);
};

peso(3);

const data = (x) => ({ ...x, perruno: "wau wau " });

const retorno = data({ clase: "asx", data: "black", port: "dd" });
console.log(retorno);

const aleatorio = () => Math.random() * 2;

console.log(aleatorio());

// mandar un arreglo de de parametros
const funcionProp = (edad, ...args) => ({
  ...args,
  edad,
});

const valor = funcionProp(12, "saso", 10, "M");
console.table(valor);

const funcionData = (edad, ...args) => args;
const [nombre, edad, sexo, xx, yy] = funcionData(12, "saso", 10, "M");

console.table({ nombre, edad, sexo, xx, yy });

let prueba = 0;
console.time(1);
while (prueba === 100000) {
  prueba++;
}
console.timeEnd(1);
