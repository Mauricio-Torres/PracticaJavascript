// vamos a usar lo que se conoce como las pipe functions, donde básicamente lo que se hace es
// llamar a una función, retornar una valor y pasarlo nuevamente a otra función, algo así como
// encadenar varias funciones a la vez.

// Los primero que hago es definir tres funciones básicas que me permiten hacer operaciones
// matemáticas (sumar y multiplicar). Luego, defino una función que recibe dos funciones como
// parámetros las cuales son pasadas a una nueva función. Los funciones son pasadas como argumentos
// usando el operador spread de ES6 y son invocadas una dentro de la otra.

// Esto funciona muy bien para dos funciones, pero mi objetivo es aplicar el mismo procedimiento a
// multiple funciones. Aquí es donde la función reduce() es útil. En la imagen de arriba, podemos
// ver que en la línea 6 contamos con el siguiente código:

// Esto funciona muy bien para dos funciones, pero mi objetivo es aplicar el mismo procedimiento a
// multiple funciones. Aquí es donde la función reduce() es útil. En la imagen de arriba, podemos
//  ver que en la línea 6 contamos con el siguiente código:

// Lo que sucederá es que primero, se invocará a la función dobla (3 * 2 = 6). Se pasará el valor a
// la siguiente función, en nuestro ejemplo es suma (6 + 1) y por ultimo se invocará a la tercera
// función que se encargara de triplicar el resultado (7 * 3 = 21).

const sum = (num) => num + 1;
const doble = (num) => num * 2;
const triple = (num) => num * 3;

const _pipe = (f, g) => (...args) => g(f(...args));
const pipe = (...fns) => fns.reduce(_pipe);

let funcionesMixtas = pipe(doble, sum, triple);
let result = funcionesMixtas(5);

console.log(result);

// funcion reducer para nuevos arrays ...
// encontrar usuarios mayores de 20 anos y con el nombre mas largo ....

const users = [
  {
    firstName: "Bob",
    lastName: "Doe",
    age: 37,
  },
  {
    firstName: "Rita",
    lastName: "Smith",
    age: 21,
  },
  {
    firstName: "Rick",
    lastName: "Pez",
    edad: 28,
  },
  { nombre: "Betty", apellido: "Pájaro", edad: 44 },
  { nombre: "Joe", apellido: "Grover", edad: 22 },
  {
    firstName: "Jill",
    lastName: "Pill",
    edad: 19,
  },
  {
    firstName: "Sam",
    apellido: "Smith",
    edad: 22,
  },
];

// FORMA LARGA .... CON FILTER Y MAP
const twentySomethingsLongFullNames1 = users

  // Primero filtramos solo los usuarios que están en sus veintes:
  .filter((user) => user.age >= 20 && user.age < 30)

  // Concat nombres y apellidos:
  .map((user) => `${user.firstName} ${user.lastName}`)

  // Ahora elimine cualquier nombre que tenga 9 o menos caracteres
  .filter((fullName) => fullName.length >= 10);

// forma simplificada a travez de funciones que evaluna cada condicion ...

const isInTwenties = (user) => user.age >= 20 && user.age < 30;
const makeFullName = (user) => `${user.firstName} ${user.lastName}`;
const isAtLeastTenChars = (fullName) => fullName.length >= 10;

const twentySomethingsLongFullNames3 = users
  .filter(isInTwenties)
  .map(makeFullName)
  .filter(isAtLeastTenChars);

// FORMA CON REDUCER ... MAS SIMPLE Y MENOS ITERACIONES ...

const twentySomethingsLongFullNames2 = users.reduce(
  //  First argument is our reducer/callback function:
  (accumulator, user) => {
    const fullName = makeFullName(user);
    if (isInTwenties(user) && isAtLeastTenChars(fullName)) {
      accumulator.push(fullName);
    }
    //  Always return the accumulator (for the next iteration)
    return accumulator;
  },
  //  The 2nd argument (optional) is the initial value:
  []
);

/* mala implementation   */
let everyonesName = "";
users.forEach((user) => {
  everyonesName += `${user.firstName} ${user.lastName}\n`;
});
/*  buena implementation  */
const everyonesName = users
  .map((user) => `${user.firstName} ${user.lastName}\n`)
  .join("");
/*  mejor implementation  */
const everyonesName = users.reduce(
  (acc, user) => `${acc}${user.firstName} ${user.lastName}\n`,
  ""
);

const fruits = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const thisShitIsBananas = fruits.reduce((accumulator, fruit) => {
  if (fruit.name === "bananas") return fruit;
  return accumulator;
});

// arrayFind acepta una matriz y devuelve una función
// la función devuelta acepta la función de búsqueda
const arrayFind = (arr) => (fn) =>
  arr.reduce((acc, item, index) => {
    // Pasamos la función de búsqueda ítem y el índice
    if (fn(item, index)) return item;
    return acc;
  });
// Crea una función de búsqueda solo para nuestras frutas
const fruitFinder = arrayFind(fruits);
// Ahora podemos pasar una función de buscador simple a fruitFinder
// Esto es a lo que se refiere el `fn` anterior:
const thisShitIsBananas = fruitFinder((fruit) => fruit.name === "bananas");

const heroes = {
  capi: {
    nombre: "capitan america",
    poder: "fuerza",
  },
  iron: {
    nombre: "Iroman",
    poder: "tecnologia",
  },
  spiderman: {
    nombre: "Spider man",
    poder: "aran;as",
  },
};

const buscarHeroe = (id) => {
  const heroe = heroes[id];
  // resolve = resuleto ; reject = rechazado

  return new Promise((resolve, reject) => {
    if (heroe) {
      setTimeout(() => resolve(heroe), 1000);
    } else {
      reject(`No existe heroe con id ${id}`);
    }
  });
};

// ENCADENAMIENTO DE PROMESAS ... funciona igual que Promise.all

[1, 3, 5, 7, 9]
  .reduce((seq, n) => {
    return seq.then(() => {
      console.log(n);
      return new Promise((res) => setTimeout(res, 1000));
    });
  }, Promise.resolve())
  .then(
    () => console.log("done"),
    (e) => console.log("imp e", e)
  );

// ejm 2 encadenamiento de promesas

const arr = [
  buscarHeroe("iron"),
  buscarHeroe("capi"),
  buscarHeroe("spiderman"),
];

const response = arr.reduce((acc, current) => {
  return acc.then((current) => {
    console.log(current);
    var heroe = this.current;
    return new Promise((resolve, reject) => {
      if (heroe) {
        resolve(heroe);
      } else {
        reject(`No existe heroe con id ${id}`);
      }
    });
  });
}, Promise.resolve());

response.then((data) => {
  console.log(data);
});
