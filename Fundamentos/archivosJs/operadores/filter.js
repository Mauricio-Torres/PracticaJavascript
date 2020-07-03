const blc = ["a", "e", "i", "o", "u"];
const all_blc = ["b", "e", "c", "d", "u", "t"];

// retorna un array completamente nuevo quitando los elementos repetidos de los arrays
const filtrados = all_blc.filter((info) =>
  blc.indexOf(info) === -1 ? true : false
);

console.log(filtrados);
