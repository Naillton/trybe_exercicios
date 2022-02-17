import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
];

class Content extends React.Component {
  render (){
    return (
      conteudos.map((cont) => {
        return <section className="main">
            <p>O conteudo é: {cont.conteudo}, 
            Status: {cont.status}, 
            Bloco: {cont.bloco}
            </p>
          </section> 
      })
    )
  }
}

export default Content;