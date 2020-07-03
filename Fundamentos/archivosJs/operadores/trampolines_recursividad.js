// USO DE LLAMADOS RECURSIVOS EN FUNCIONES

const trampoline = (fn) => (...args) => {
  let result = fn(...args);

  while (typeof result === "function") {
    result = result();
  }
  return result;
};

const suma = (number, sum = 0) => {
  number === 0 ? sum : () => suma(number - 1, sum + 1);
};

const tsuma = trampoline(suma);

const r = tsuma(1000);
console.log(r);
