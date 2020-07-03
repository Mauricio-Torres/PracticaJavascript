// PROGRAMACION POINTFREE PROGRAMACION TACITA PROGRAMACION FUNCIONAL [COMPOSICION]

const _ = require("lodash");
const { size } = require("lodash");

const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

const user = [{ id: 1, nombre: "mauro", apellido: "torres" }];

const head = (x) => x[0];

const capitalizacionNombreApellido = (x) => ({
  nombre: _.upperFirst(x.nombre),
  apellido: _.upperFirst(x.apellido),
});

const generarNombre = (x) => `${x.nombre} ${x.apellido}`;

//programacion tacita o point free
const getNombreCompleto = compose(
  generarNombre,
  capitalizacionNombreApellido,
  head
);

const x = getNombreCompleto(user);
console.log(x);
