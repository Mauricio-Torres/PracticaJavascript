// ARRAYS

const arreglo1 = ["1", "2", "3", "4"];

const newArray = arreglo1.unshift(0); // ingresa numeros al inicio del arreglo
let boorarUltimo = arreglo1.pop(); // borra el ultimo elemento del array

console.table({ newArray, arreglo1, boorarUltimo });

// FUNCIONES AVANZADAS ARREGLOS

// CREAR INDEXACION Y USO DE FUNCIONES REDUCE MAP

let array = [
  {
    name: "a",
    color: "b",
    precio: 1,
  },
  {
    name: "b",
    color: "a",
    precio: 6,
  },
  {
    name: "c",
    color: "d",
    precio: 3,
  },
  {
    name: "d",
    color: "a",
    precio: 3,
  },
];

// crear indice
const obj = array.reduce((dat, item) => {
  console.log(dat);
  console.log(item);
  dat[item["name"]] = item;
  return dat;
}, []);

let imp = obj["a"];

const array2 = [2, [2, 3, 1], ["a", "b", "c", 1], "dd"];

// unir los array en uno solo
const obj2 = array2.reduce((arr, item) => {
  return arr.concat(item);
}, []);

let upCase = "dasd".toUpperCase;
// map
const obj3 = array.map((elm) => ({
  ...elm,
  bomb: elm.precio * 2,
}));
const array3 = obj3[0];

console.table({ imp, obj2, array3 });

// convertir los valores de un array en otro array de pares

array[0].precio = 4; // se puede modificar el valor correspondiente dentro del array ....
var convertirArray = Object.entries(array[0]);
console.table({ convertirArray });
