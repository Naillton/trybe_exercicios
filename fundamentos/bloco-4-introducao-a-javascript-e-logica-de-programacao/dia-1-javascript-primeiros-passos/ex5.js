import xadrez from 'readline-sync'
let pecas = xadrez.question("Informe o nome da peca e lhe diremos o movimento: ");

let name_Pecas = pecas.toLowerCase();

switch(name_Pecas){

    case 'bispo':
        console.log("Movimento nas diagonais");
        break;
    case 'rei':
        console.log("Se move em todas as direcoes");
        break;
    case 'dama':
        console.log("Se move em todas as direcoes assim como o rei mas a mesma pode escolher em que casa quer estar desde que esteja livre");
        break;
    case 'torre':
        console.log("Se move em linha reta na horizontal ou vertical");
        break;
    case 'peao':
        console.log("Se movem para frente uma casa por vez");
        break;
    case 'cavalo':
        console.log("tem movimentos horizontais ou verticais se movendo em L");
        break;
    default:
        console.log("peca invalida nos informe um nome correto!!");
        break;
}