// RECEBER UMA QUANTIDADE DE VALORES PARA AVALIAR
// FUNÇÃO EXIBE SE CADA VALOR É PAR OU ÍMPAR

exibirTipo(5);

function exibirTipo(limite) {
    for(let i = 1; i <= limite; i++){
        if ( i % 2 === 0) {
            console.log(i, 'PAR');
        }
        else {
            console.log(i, 'ÍMPAR');
        }
    }
}