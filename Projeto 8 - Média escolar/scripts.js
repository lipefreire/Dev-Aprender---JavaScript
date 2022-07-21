const array = [70, 70, 80];

// 0 até 59 = F
// 60 até 69 = D
// 70 até 79 = C
// 80 até 89 = B
// 90 até 100 = A

console.log(mediaDoAluno2(array));

// FORMA QUE EU RESOLVI
function mediaDoAluno(array) {
    let soma = 0;
    for(let valor of array) {
        soma += valor;
    }
    const media = soma / (array.length);

    if(media >= 0 && media <= 59){
        console.log(`Média: ${media}\nNota: F`)
    }
    if(media >= 60 && media <= 69){
        console.log(`Média: ${media}\nNota: D`)
    }
    if(media >= 70 && media <= 79){
        console.log(`Média: ${media}\nNota: C`)
    }
    if(media >= 80 && media <= 89){
        console.log(`Média: ${media}\nNota: B`)
    }
    else{
        console.log(`Média: ${media}\nNota: A`)
    }
}

// FORMA MAIS CLEAN
function calcularMedia(array) {
    let soma = 0;
    for(let valor of array) {
        soma += nota;
    }
    const media = soma / (array.length);
}

function mediaDoAluno2(notas) {
    const media = calcularMedia(notas)

    if(media < 59) return `Média: ${media}\nNota: F`;
    if(media < 69) return `Média: ${media}\nNota: D`;
    if(media < 79) return `Média: ${media}\nNota: C`;
    if(media < 89) return `Média: ${media}\nNota: B`;
    else return `Média: ${media}\nNota: A`;
}