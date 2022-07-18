//ESCREVE UMA FUNÇÃO QUE USA 2 NÚMEROS E RETORNA O MAIOR ENTRE ELES
//FELIPE
const num1 = 12;
const num2 = 10;

if(num1 > num2) {
    console.log(num1)
}
else{
    console.log(num2)
}

// FORMA 1
let valorMaior = max(5, 9);
console.log(valorMaior);

function max(numero1, numero2) {
    if(numero1 > numero2) {
        return numero1;
    }
    else {
        return numero2;
    }
}

// FORMA 2
function max(numero1, numero2) {
    //APÓS A INTERROGRAÇÃO, SIGNIFICA "SE SIM, RETORNE {}"
    //APÓS OS DOIS PONTOS, SIGNIFICA "SE NÃO, RETORNE {}"
    numero1 > numero2 ? numero1 : numero2;
}