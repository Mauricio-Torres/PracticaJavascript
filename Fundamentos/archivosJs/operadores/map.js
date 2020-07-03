// manejo de dias

const hoy = new Date();
let dia = hoy.getDay();

console.log(dia);

// operador map
const numeros = [2, 5, 7, 8];

const potencias = numeros.map((num) => Math.pow(num, 2));
console.log(potencias);

const nav = ["home", "about ", "location", "contact", "mult", "forsaken"];
const nvnFormat = nav.map((item) => `<li>${item}<li>`);
console.log(nvnFormat);

const alumnos = [
  [5, 7, 3],
  [2, 6, 4],
  [5, 8, 9],
];
const promedios = alumnos.map((alum) => {
  let sum = alum.reduce((a, b) => a + b);
  return sum / alum.length;
});

console.log(promedios);
