let text = document.querySelector("#texto");
let mail = document.querySelector("#email");
let cpf = document.querySelector("#cpf");
let endereco = document.querySelector("#endereco");
let estado = document.querySelector("#state");
let resumo = document.querySelector("#resume");
let cargo = document.querySelector("#cargo");
let descricao = document.querySelector("#desc");
let inicio = document.querySelector("#inicio");

function adcEstado(){
    const selecao = document.querySelector("#state");

    let estado = [
        "Roraima",	
        "Amapá",
        "Amazonas",
        "Pará",
        "Acre",
        "Rondônia",
        "Tocantins",
        "Maranhão",
        "Piauí",
        "Ceará",
        "Rio Grande do Norte",
        "Paraíba",
        "Pernambuco",
        "Alagoas",
        "Sergipe",
        "Bahia",
        "Mato Grosso",
        "Distrito Federal",
        "Goiás",
        "Mato Grosso do Sul",
        "Minas Gerais",
        "Espírito Santo",
        "Rio de Janeiro",
        "São Paulo",
        "Paraná",
        "Santa Catarina",
        "Rio Grande do sul"
    ];
    for(let i of estado){
        let opcao = document.createElement("option");
        opcao.textContent = i
        selecao.appendChild(opcao)
    }
}

adcEstado();

const btnEnv = document.querySelector("#btn-enviar")
const btnLimp = document.querySelector("#btn-limp")
const informacoes = document.querySelector("#infos")

btnEnv.addEventListener("click", function(event){
    event.preventDefault();
    let escolha = document.getElementsByName("escolha")
    for(let i = 0; i < escolha.length; i ++){
        if(escolha[i].checked){
            informacoes.innerHTML = `${ text.value }    
            ${ mail.value }     
            ${ cpf.value }      
            ${ endereco.value }     
            ${ estado.value }
            ${ escolha[i].value }              
            ${ resumo.value }       
            ${ cargo.value }        
            ${ descricao.value }        
            ${ inicio.value }`
        }
    }
});

btnLimp.addEventListener("click", function(){
    informacoes.parentNode.removeChild(informacoes)
});

