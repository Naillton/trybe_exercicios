/* function palindromo(palavra){
    let resultado = palavra.split('').reverse().join('');
    if(resultado === palavra){
        return true;
    }else{
        return false;
    }
}

console.log(palindromo('arara')); */

/* function arrayFunc(array){
    //definindo variavel para comparacao de valor
    let maior = 0;
    //variavel para pegar index do valor
    let list = 0;
    //loop para percorrer os valores do array
    for(let i = 0; i < array.length; i++){
        //condicao para saber se array[i] e maior que 0 se sim guardo o valor na variavel maior
        if(array[i] > maior){
            maior = array[i];
            //usando a varivael list para receber o valor do indice recuperado com o indexOf
            list = array.indexOf(maior)
        }
    }

    return list
}

console.log(arrayFunc([2,3,6,7,10,1])); */

/* function arrayFunc(array){
    //com o ... spread operator os itens sao enviados um a um
    //com isso o js defini qual o maior e o menor
    let max = Math.max(...array);
    let list = array.indexOf(max);
    return list
}

console.log(arrayFunc([2, 3, 4, 6, 10, 1])); */

/* //pegando o menor numero de um array
function arrayFunc(array){
    //usando a varivel lista para armazenar o valor de array obtido pelo spread
    let lista = Math.min(...array);
    //armazenando o valor do indice na variavel menor
    let menor = array.indexOf(lista);
    return menor

}

console.log(arrayFunc([2, 4, 6, 7, 10, 0, -3])) */

/* function arrayFunc(array){
    //variavel para pegar index do valor
    let list = 0;
    //variavel que recebe um indice do array para fazer a comparacao dentro do proprio array
    let menor = array[0];
    //loop para percorrer os valores do array
    for(let i = 0; i < array.length; i++){
        //condicao para saber se array[i] e menor que os valores do array se sim guardo o valor na variavel maior
        if(array[i] < menor ){
            menor = array[i];
            list = array.indexOf(menor);
        }
    }

    return list
}
console.log(arrayFunc([2, 4, 6, 7, 10, 0, -3])) */

function nomes(array){
    let list = array[0]
    for(let i = 0; i < array.length; i++){
        if(array[i] > list){
            list = array[i]
        }
    }

    return list
}

console.log(nomes(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))