const palavra = (frase) => {
    let fala = frase.split(' ');
    let max = fala[0];
    let maxValue = 0;

    for(let i = 1; i < fala.length; i += 1){
        if(fala[i] > max){
            maxValue = fala[i]
        }
    }

    return maxValue
}

console.log(palavra('Antônio foi no banheiro e não sabemos o que aconteceu'));