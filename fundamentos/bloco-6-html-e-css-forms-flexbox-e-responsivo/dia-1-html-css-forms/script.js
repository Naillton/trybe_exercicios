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
const inofrmacoes = document.querySelector("#infos")

btnEnv.addEventListener("click", function(event){
    event.preventDefault();
});
