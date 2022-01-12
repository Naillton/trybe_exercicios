const number = (numero) => {
    let result = 1;
    let cont = 1;
    while(cont <= numero){
        result *= cont;
        cont++
    }

    return `${numero}! = ${result}`
}

console.log(number(5));
