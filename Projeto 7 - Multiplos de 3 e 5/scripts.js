// Criar função somar que retorna a 
// soma de todos os múltiplos de 3 e 5

somar(10);

function somar(limite) {
    let multDe3 = 0;
    let multDe5 = 0;

    for(i = 0; i <= limite; i++) {
        if(i % 3 === 0) {
            multDe3 += i;
        }
        if(i % 5 === 0) {
            multDe5 += i;
        }
    }
    console.log('Soma dos múltiplos de 3 e 5 = ', multDe3 + multDe5);
}