let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

//console.log("Bem vinda, "+info.personagem);
//adcionando chave e valor no objeto
info.recorrente = 'Sim';
//info['recorrente'] = 'Sim'
//console.log(info);
//mostando todas as chaves
//for(let key in info){
    //console.log(key);
//}

/* for(let key in info){
    console.log(info[key]);
} */

info.info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
}

console.log(info.personagem+" e "+info.info2['personagem']);
console.log(info.origem+" e "+info.info2['origem']);
console.log(info.nota+" e "+info.info2['nota']);
console.log(info.recorrente && info.info2['recorrente'] === 'Sim' ? 'Ambos recorrentes' : " " );