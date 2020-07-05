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

export const buscarHeroeCallBack = (id, callback) => {
  const heroe = heroes[id];

  heroe ? callback(null, heroe) : callback(`No existe heroe con id ${id}`);
};
