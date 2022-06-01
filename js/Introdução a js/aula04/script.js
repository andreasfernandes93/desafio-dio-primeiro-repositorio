var jogador1 = 0;
var jogador2 = 2;
var placar;

// if ternario
jogador1 != -1 && jogador2 != -1 ? console.log('Os Jogadores são validos') : console.log('Jogadores Invalidos');

if (jogador1 > 0 && jogador2 == 0) {
    console.log(`Jogador1 marcou ${jogador1} ponto`);
    placar = jogador1 > jogador2;
} 

else if (jogador2 > 0 && jogador1 == 0) {
    console.log(`Jogador2 marcou ${jogador2} ponto`);
    placar = jogador2 > jogador1;

} 

else {
    console.log('ninguem marcou pontos')
}

switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador1 Ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador2 Ganhou!');
        break
    default:
    console.log('ninguem ganhou')
}

let array = ['valor1', 'valor2', 'valor3'];
let objeto = {Propriedade1: 'valor1', Propriedade2:'valor2', Propriedade3:'valor3'};

for(let indice = 0; indice < array.length; indice++){
    console.log(indice);
}

for (let i in array) {
    console.log(i);
}

for (i in objeto) {
    console.log(i);
}

for(i of array) {
    console.log(i);
}

for(i of objeto.Propriedade3) {
    console.log(i);
}

var a = 0;

// while (a < 10) {
//     a++;
//     console.log(a);
// }

do {
    a++;
    console.log(a);
} while (a < 10)