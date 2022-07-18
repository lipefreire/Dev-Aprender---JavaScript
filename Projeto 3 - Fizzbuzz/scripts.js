// DIVISÍVEL POR 3 => FIZZ
// DIVISÍVEL POR 5 => BUZZ
// DIVISÍVEL POR 3 E POR 5 => FIZZBUZZ
// NÃO DIVISÍVEL POR 3 E NEM POR 5 => RETORNA O NÚMERO
// NÃO É UM NÚMERO => 'NÃO É UM NÚMERO'
const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada){
    if (typeof entrada !== 'number') {
        return 'Não é um número!';
    }
    if (entrada % 3 === 0 && entrada % 5 === 0) {
        return 'FizzBuzz';
    }
    if (entrada % 3 === 0) {
        return 'Fizz';
    }
    if (entrada % 5 === 0) {
        return 'Buzz';
    }
    return entrada;
}