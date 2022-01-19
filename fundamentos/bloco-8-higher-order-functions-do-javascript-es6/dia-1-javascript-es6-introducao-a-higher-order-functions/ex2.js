const result = (number, alet) => {
    function alet() {
        let aleatorio = Math.floor(Math.random() * 6);
        return aleatorio
    }
    if( number !== alet()) {
        return `${number} = ${alet()} Tente novamente!!;`
    }
    return `${number} = ${alet()} Parabens voce ganhou!!`;
};

console.log(result(4));