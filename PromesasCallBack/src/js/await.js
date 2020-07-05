import { buscarHeroeAsync, buscarHeroe } from "./promesas";

const heroesIds = ["capi", "iron", "spiderman"];

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
