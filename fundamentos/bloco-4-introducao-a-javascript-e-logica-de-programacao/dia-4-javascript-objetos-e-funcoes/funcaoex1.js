function palindromo(palavra){
    let resultado = palavra.split('').reverse().join('');
    if(resultado === palavra){
        return true;
    }else{
        return false;
    }
}

console.log(palindromo('arara'));