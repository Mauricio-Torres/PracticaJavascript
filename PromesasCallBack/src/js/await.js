import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ["capi", "iron", "spiderman"];

const heroesPromesas = heroesIds.map(buscarHeroe);
// const heroesPromesas = heroesIds.map(id => buscarHeroe(id));
// export const obtenerHeroesArr = async () => {
//   const heroes = [];

//   for (const id of heroesIds) {
//     heroes.push(buscarHeroe(id));
//   }

//   return await Promise.all(heroes);
// };

// forma simplificada ...
export const obtenerHeroesArr = async () => {
  return await Promise.all(heroesIds.map(buscarHeroe));
};

export const obtenerHeroeAwait = async (id) => {
  try {
    const heroe = await buscarHeroeAsync(id);
    return heroe;
  } catch (error) {
    throw Error(error);
  }
};

// forma de resolver arrays de promesas

export const heroesCiclo = async () => {
  console.time("heroesCiclo");

  //   heroesPromesas.forEach( async (p) =>console.log(await p) );

  for await (const heroe of heroesPromesas) {
    console.log(heroe);
  }

  // arrays de promesas y como ejecutarlas
  // const heroes = await Promise.all(heroesPromesas)
  // heroes.forEach(heroe => console.log(heroe))

  console.timeEnd("heroesCiclo");
};

// async await if
export const heroesIfAwait = async (id) => {
  if ((await buscarHeroeAsync(id)).nombre === "Iroman") {
    console.log("mejor heroe ");
  } else {
    console.log("Naa!!");
  }
};
