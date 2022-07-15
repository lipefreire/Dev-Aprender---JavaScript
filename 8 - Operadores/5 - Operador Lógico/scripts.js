//OPERADOR LÓGICO 'E'(&&)
//RETORNA TRUE SE OS DOIS OPERANDOS FOREM TRUE!

//VAI RETORNAR FALSO POIS OS DOIS OPERADORES SÃO DIFERENTES!
console.log(false && true);

//VAO RETORNAR TRUE POIS OS DOIS OPERADORES SÃO TRUE!
console.log(true && true);

//EXEMPLO 1
let maiorDeIdade = true;
let possuiCarteira = true;
let podeAplicar1 = maiorDeIdade && possuiCarteira;
console.log('Exemplo 1: ', podeAplicar1);

//OPERADOR LÓGICO 'OU' (||)
//RETORNA TRUE SE PELO MENOS UM OPERADOR FOR TRUE!

//EXEMPLO 2
let podeAplicar2 = maiorDeIdade || possuiCarteira;
console.log('Exemplo 2: ', podeAplicar2);

//OPERADOR LÓGICO 'NOT' (!)
//UTILIZADO PARA FAZER COMPARAÇÕES

//EXEMPLO 3
let candidatoRecusado = !podeAplicar1;
console.log('Exemplo 3: ', candidatoRecusado);