const pessoa = {
    nome: 'Felipe', 
    idade: 20
};

// Chave vem do key-value
for(let chave in pessoa){
    console.log(chave, pessoa.nome);
}

const cores = ['Vermelho', 'Azul', 'Verde']

for(let indice in cores){
    console.log(indice, cores[indice]);
}