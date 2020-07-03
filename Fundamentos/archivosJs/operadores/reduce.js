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
