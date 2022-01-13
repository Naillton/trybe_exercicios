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

let result = pal('Trybe x Aqui!')
console.log(result)
let array = ["Git", "Github", "HTML", "CSS", "JS", "FlexBox", "Mobile-first", "Soft-Skills", "ES6"]
const retornar = (nome, frase) => {
    let order = frase.sort()
    return `${nome}
Aprendizados ${order} #goTrybe`;
}

console.log(retornar(result, array));