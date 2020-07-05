import { buscarHeroeCallBack } from "./js/callback";
import {
  buscarHeroe,
  promesaLenta,
  promesaMedia,
  promesaRapida,
  buscarHeroeAsync,
} from "./js/promesas";

import "./styles.css";
import {
  obtenerHeroesArr,
  obtenerHeroeAwait,
  heroesCiclo,
  heroesIfAwait,
} from "./js/await";

let heroeId = "iron";
let heroeId2 = "capi";

buscarHeroeCallBack(heroeId, (err, heroe) => {
  err ? console.error(err) : console.log(heroe);
});

//promesas y async

buscarHeroe(heroeId)
  .then((heroe) => {
    console.log(`enviando a ${heroe.nombre} a la mision`);
  })
  .catch(console.warn);

// metodo de async
buscarHeroeAsync(heroeId)
  .then((heroe) => {
    console.log(`enviando a ${heroe.nombre} a la mision`);
  })
  .catch(console.warn);

console.log("fin programa ... ");

// peticion de varias promesas en una sola linea con Prommise.all

// desustructuracion de arrays en javascript
Promise.all([buscarHeroe(heroeId), buscarHeroe(heroeId2)])
  .then(([heroe1, heroe2]) => {
    console.log(
      `enviando a ${heroe1.nombre} a la mision y enviando ${heroe2.nombre} a descansar`
    );
  })
  .catch((err) => {
    alert(err);
  })
  .finally(() => {
    console.log("se ejecuta al finalizar todas las promesas ... ");
  });

// uso de Promise.race

// si alguna de las promesas da error sigue con la ejecucion de las demas
// esto no sucede igual q en Promise.all q si alguna da error detiene las demas consultas
Promise.race([promesaLenta, promesaMedia, promesaRapida]).then(console.log);

// prueba de await en un foreach de promesas
//
// estte metodo por cada peticion de un heroe tarda 1 segundo
// se hace mas eficiente usando map y usando el Promise.all para
// resolver todas las promesas en un sola peticion ...
// no colocar await dentro del foreach porq demorara una eternidad ...

console.time("await");
obtenerHeroesArr().then((heroes) => {
  console.table(heroes);
  console.timeEnd("await");
});

// manejo de errores en awaits

console.time("await2");
obtenerHeroeAwait()
  .then((heroes) => {
    console.table(heroes);
    console.timeEnd("await2");
  })
  .catch(console.warn);

// ciclos con await y resolucion de promesas como un foreach

heroesCiclo();

heroesIfAwait("iron");
