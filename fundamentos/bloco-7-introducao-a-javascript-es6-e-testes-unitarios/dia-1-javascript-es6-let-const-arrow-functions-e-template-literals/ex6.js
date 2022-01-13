const pal = (palavra) =>{
    let string = '';
    let frase = palavra.split('');
    for(let i = 0; i < frase.length; i += 1){
        switch(frase[i]){
            case 'x':
                string += 'Nailton';
                break;
            default:
                string += frase[i]
        }
    }

    return string
}

console.log(pal('Trybe x Aqui!'))