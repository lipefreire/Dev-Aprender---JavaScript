//IF | ELSE

//SE A HORA ESTIVER ENTRE 06:00 ATÉ 12:00 = BOM DIA
//SE ESTIVER ENTRE 12:00 ATÉ 18:00 = BOA TARDE
//CASO CONTRÁRIO = BOA NOITE

let hora = 22;

if(hora > 6 && hora < 12){
    console.log("Bom dia!");
}
else if(hora > 12 && hora < 18) {
    console.log("Boa tarde!");
}
else{
    console.log("Boa noite.");
}