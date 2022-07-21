// criar uma função que exibe a quantidade de *
// que aquela linha possui

exibirAsteriscos(10);
exibir(5);

function exibirAsteriscos(linhas) {
    let padrao = '';
    for(let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    }
}

// RESOLVENDO COM LOOP
function exibir(linhas) {
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i < linha; i++) {
            padrao += '*'
        }
        console.log(padrao);
    }
}