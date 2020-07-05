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

export const buscarHeroe = (id) => {
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

// el async reemplaza a la promesa ....

// la clase error retorna toda la trasabilidad de un error ...
export const buscarHeroeAsync = async (id) => {
  const heroe = heroes[id];
  // resolve = resuleto ; reject = rechazado
  if (heroe) {
    return heroe;
  } else {
    throw Error(`No existe heroe con id ${id}`);
  }
};

const promesaLenta = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa lenta");
  }, 5000);
});

const promesaMedia = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa media");
  }, 2000);
});

const promesaRapida = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promesa rapida");
  }, 1000);
});

export { promesaLenta, promesaMedia, promesaRapida };
