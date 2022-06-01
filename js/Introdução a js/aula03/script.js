// O que são vetores ou arrays

// Declarando uma array
let array = ['string',1, true, ['array1'], ["array2"]];
console.log(array[2]);

// forEach
// array.forEach(function(item, index){console.log(item, index)})

// Push
// array.push('novo item');
// console.log(array);

// Pop
// array.pop();
// console.log(array);

// Shift
// array.shift();
// console.log(array);

// Unshift
// array.unshift('Novo item');
// console.log(array);

// console.log(array.indexOf(true));

// array.splice(0, 3);
// console.log(array);

// let novoarray = array.slice(0, 3);
// console.log(novoarray)

let objeto = {string: 'string', numero: '1', boleana: true, array: ['array'], outroobjeto: {objetointerno: 'objetointerno'}};

console.log(objeto.outroobjeto);

var string = objeto.string
console.log(string);

var arrayInterno = objeto.array
console.log(arrayInterno);

var {numero, boleana, outroobjeto} = objeto
console.log(numero, boleana, outroobjeto);
