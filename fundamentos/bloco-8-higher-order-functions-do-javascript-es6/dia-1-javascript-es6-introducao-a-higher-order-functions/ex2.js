const result = (number) => {
    aleatorio = Math.floor(Math.random() * 6);
    if( number !== aleatorio) {
        return 'Tente novamente!!';
    }
    return 'Parabens voce ganhou!!';
};

console.log(result(4));