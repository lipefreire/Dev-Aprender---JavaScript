// VELOCIDADE MÁXIMA DE ATÉ 70KM
// A CADA 5KM ACIMA DO LIMITE VOCÊ GANHA 1 PONTO
// Math.Floor() (Arredonda o número decimal para o número inteiro mais próximo)
// CASO PONTOS MAIOR QUE 12 -> CARTEIRA SUSPENDIDA
verificarVelocidade(85);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const KmPorPonto = 5;
    
    if (velocidade <= velocidadeMaxima) {
        console.log('Velocidade OK')
    }
    else {
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / KmPorPonto))
        if (pontos > 12) {
            console.log(`Pontos: ${pontos}\nCarteira suspendida.`);
        }
        else {
            console.log(`Pontos: ${pontos}`);
        }
    }
}