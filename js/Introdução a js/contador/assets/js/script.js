let contador = 0
const NUMERO_ATUAL = document.querySelector('#numeroAtual');

let soma = document.querySelector('#somar');
let subtrai = document.querySelector('#subtrair');

soma.addEventListener('click', increment);
subtrai.addEventListener('click', decrement);

function increment(){
    contador++;
    NUMERO_ATUAL.innerHTML = contador;
}

function decrement(){
    contador--;
    NUMERO_ATUAL.innerHTML = contador;
}

