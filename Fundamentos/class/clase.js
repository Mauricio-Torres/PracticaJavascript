class Persona {
  nombre;
  edad;
  casado;

  constructor(data) {
    if (data !== undefined) {
      this.nombre = data["nombre"] !== undefined ? data["nombre"] : "";
      this.edad = data["edad"] !== undefined ? data["edad"] : 0;
      this.casado = data["casado"] !== undefined ? data["casado"] : false;
    }
  }

  static fromJS(data) {
    return new Persona(data);
  }

  toJS(data) {
    data = data === undefined ? {} : data;
    if (this.nombre !== undefined && this.nombre !== null) {
      data["nombre"] = this.nombre;
    }
    if (this.edad !== undefined && this.edad !== null) {
      data["edad"] = this.edad;
    }
    if (this.casado !== undefined && this.casado !== null) {
      data["casado"] = this.casado;
    }

    return data;
  }

  toJSON() {
    return JSON.stringify(this.toJS());
  }

  clone() {
    const json = this.toJSON();
    return new Persona(JSON.parse(json));
  }
}

// let dd = new Persona({ nombre: "perruno", edad: 2 });
// let aa = dd.clone();

let p = new Persona({ nom: "a" });
console.log(p);
console.log(p.toJSON());

// singleton

class Rectangulo {
  static instancia;
  base;
  altura;

  constructor(base, altura) {
    if (!!Rectangulo.instancia) {
      return Rectangulo.instancia;
    }

    Rectangulo.instancia = this; // es necesario crear esto para llenar una instacia y no se cree nuevamente
    this.altura = altura;
    this.base = base;

    return this;
  }
}

const rectangulo1 = new Rectangulo(4, 2);
const rectangulo2 = new Rectangulo(1, 2);
const rectangulo3 = new Rectangulo(0, 2);

console.log(`el rectangulo 1 ${rectangulo1.altura} y ${rectangulo1.base}`);
console.log(`el rectangulo 2 ${rectangulo2.altura} y ${rectangulo2.base}`);
console.log(`el rectangulo 3 ${rectangulo3.altura} y ${rectangulo3.base}`);
