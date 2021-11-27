const ang1 = 40;
const ang2 = 70;
const ang3 = 60;

let soma = ang1 + ang2 + ang3;

if(soma === 180){
    console.log("triangulo valido");
}else if(ang1 < 0 || ang2 < 0 || ang3 < 0){
    console.log("Triangulo invalido")
}else{
    console.log("Os angulos estao certos ?")
}