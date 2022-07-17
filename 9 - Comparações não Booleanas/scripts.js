// FALSE
// Undefined, Null, 0, False, '', NaN (Not a Number)
// Trunthy (Nenhum dos valores acima)

let corPersonalizada = 'Vermelho';
let corPadrão = 'Azul';
let corPerfil = corPersonalizada || corPadrão;

console.log(corPerfil);