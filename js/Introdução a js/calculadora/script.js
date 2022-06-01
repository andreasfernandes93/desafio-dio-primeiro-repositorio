function calculadora() {
    const operacao = Number(prompt('Escolha uma Operação:\n 1 - Soma (+)\n 2 - Subtração (-) \n 3 - Mulplicação (*)\n 4 - Divisão (/)\n 5 - Divisão Inteira (%) \n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação Invalida!');
        calculadora();
    } else {

    let n1 = Number(prompt('Insira o primeiro valor'));
    let n2 = Number(prompt('Insira o segundo valor'));
    let resultado;

    if (!n1 || !n2) {
        alert('Erro - Operação Invalida!');
        calculadora();
    } else {

    function soma() {
        resultado = n1 + n2;
        alert (`${n1} + ${n2} = ${resultado}`);
        novaOperação();
    }

    function subtrair() {
        resultado = n1 - n2;
        alert (`${n1} - ${n2} = ${resultado}`);
        novaOperação();
    }

    function multiplicar() {
        resultado = n1 * n2;
        alert (`${n1} x ${n2} = ${resultado}`);
        novaOperação();
    }

    function dividir() {
        resultado = n1 / n2;
        alert (`${n1} / ${n2} = ${resultado}`);
        novaOperação();
    }

    function dividirReal() {
        resultado = n1 % n2;
        alert (`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
        novaOperação();
    }

    function potencia() {
        resultado = n1 ** n2;
        alert (`${n1} elevado a ${n2} é igual a ${resultado}`);
        novaOperação();
    }

    function novaOperação() {
        let opcao = prompt(`Deseja fazer outra operação?\n 1 - Sim\n 2 - Não`);

        if (opcao == 1) {
            calculadora();
        } else if (opcao == 2) {
            alert('Até mais');
        } else {
            alert('Digite uma opção valida');
            novaOperação();
        }
    }
}


//   if (operacao == 1) {
//     soma();
// } else if (operacao == 2) {
//     subtrair()
// } else if (operacao == 3) {
//     multiplicar()
// } else if (operacao == 4) {
//     dividir()
// } else if (operacao == 5) {
//     dividirReal()
// } else if (operacao == 6) {
//     potencia()
// }

switch (operacao) {
    case 1:
        soma();
    break;
    case 2:
        subtrair();
    break;
    case 3:
        multiplicar(); 
    break;
    case 4:
        dividir();
    break;
    case 5:
        dividirReal();
    break;
    case 6:
        potencia();
    break;
}

}
}

calculadora();