let permissao; //comum, gerente ou diretor
permissao = 'amador';

switch(permissao) {
    case 'comum':
        console.log('Usuário comum!')
        break;

    case 'gerente':
        console.log('Usuário gerente!')
        break;

    case 'diretor':
        console.log('Usuário diretor!')
        break;

    default:
        console.log(`Usuário '${permissao}' não encontrado!`);
}