// multiplicar dos numeros sin usar el operador de multiplicacion

const multiplicacion = (a, b)=>{
    let resultado =0;

    const positivo = Math.abs(b) === b;
    for(i = 0; i< Math.abs(b); i++) {
        resultado = positivo? resultado + a: resultado -a;
    }

    return resultado;
}

const a = multiplicacion(2,-3);
console.log(a);

// obtener el num mayor en un arreglo con solo una iteracion 

const getNum = (arr) => arr.reduce((acumulador, element) => acumulador> element? acumulador: element);
const numMayor = getNum([-3,9,0,1400,4,300,-1500])
console.log(numMayor)

// iterando una sola ves eliminar los udefind, null, 0, false

const cleanArreglo = (arr) => arr.reduce((acumulador, element) => {
    if (element || element > 0) {
        acumulador.push(element);
    }
    return acumulador;
}, [])

const clean = cleanArreglo([1,3,undefined, null,0, false, 9 ])
console.log(clean);

// escribir un alg que aplane un array 
const array = [[1,2], [[3,4]], [1,2,3,[4, false]], 9];
const aplanarArreglo = (arr)=> arr.reduce((acumulador, element) => acumulador.concat(element), [] )
const arreglo = aplanarArreglo(array);
console.log(arreglo)

// contar cuantas veces se repite una palabra 

const repetidos = str => {
    const lowered  = str.toLowerCase();
    const split = lowered.split(' ');

    console.log(split);

    const reduce = split.reduce((acumulador, el) => {
        console.log(acumulador)
        if(acumulador[el]) { 
            acumulador[el]++;
        } else {
            acumulador[el] = 1;
        }
        return acumulador;
    }, {});

    console.log('reduce', reduce);
    return Object.entries(reduce).reduce((acumulador, element) => acumulador[1] > element[1]? acumulador: element);
}

const u = repetidos('this is is is a repetead word test this a a')
console.log(u)


// encontrar si una palabra es palindromo 

const isPalindromo = (str) => {
    str = str.replace(/\s/g, ''); // reemplaza todas las estancias de espacios en blanco 
    const lowered = str.toLowerCase();
    const splitted = lowered.split('');
    const reverse = splitted.reverse();
    const join = reverse.join('');
    return lowered == join;
}

const wordIsPalindromo = isPalindromo('Do geese see God')
console.log(wordIsPalindromo);
