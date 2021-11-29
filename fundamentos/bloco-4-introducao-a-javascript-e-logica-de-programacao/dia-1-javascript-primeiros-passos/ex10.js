let salario = 5000;

let aliquota;
let valor_Salario;
let ir;
let salarioFinal;

if(salario <= 1556.94){
    aliquota = salario * 8 / 100;
    salarioFinal = salario - aliquota;
    console.log(salarioFinal);

}else if(salario >= 1556.95 && salario <= 2594.92){
    aliquota = salario * 9 / 100;
    salarioFinal = salario - aliquota;
    console.log(salarioFinal);

}else if(salario >= 2594.93 && salario <= 5189.82){
    aliquota = salario * 11 / 100;
    salarioFinal = salario - aliquota;
    console.log(salarioFinal);

}else if(salario > 5189.82){
    aliquota = 570.88;
    salarioFinal = salario - aliquota;
    console.log(salarioFinal);
}


if(salarioFinal <= 1903){
    console.log("Isento de imposto");
}else if(salarioFinal >= 1903.99 && salarioFinal <= 2826.65){
    ir = salarioFinal * 7.5 / 100 - 142.80;
    valor_Salario = salarioFinal - ir;
    console.log("salario com imposto: "+valor_Salario)
}else if(salarioFinal >= 1826.66 && salarioFinal <= 3751.05){
    ir = salarioFinal * 15 / 100 - 354.80;
    valor_Salario = salarioFinal - ir;
    console.log("salario com imposto: "+valor_Salario)
}else if(salarioFinal >= 1751.06 && salarioFinal <= 4664.68){
    ir = salarioFinal * 22.5 / 100 - 636.13;
    valor_Salario = salarioFinal - ir;
    console.log("salario com imposto: "+valor_Salario)
}else if(salarioFinal > 4664.68){
    ir = salarioFinal * 27.5 / 100 - 869.36;
    valor_Salario = salarioFinal - ir;
    console.log("salario com imposto: "+valor_Salario)
}