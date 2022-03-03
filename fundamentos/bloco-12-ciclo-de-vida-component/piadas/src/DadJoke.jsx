import React from "react";

class DadJoke extends React.Component {
    constructor() {
      super();
  
      this.state = {
        jokeObj: undefined,
        loading: true,
        storedJokes: [],
      }
    }
  
    async fetchJoke() {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders)
      const requestObject = await requestReturn.json();
      this.setState({
        jokeObj: requestObject,
      })
    }
  
    componentDidMount() {
      this.fetchJoke();
    }
  
    saveJoke = () => {
      //Salvando a piada no array de piadas existentes
  
    }
  
    renderJokeElement = () => {
      return (
        <div>
          <p>{this.state.jokeObj.joke}</p>
          <button type="button" onClick={this.saveJoke}>
            Salvar piada!
          </button>
        </div>
      );
    }
  
    render() {
      const { storedJokes } = this.state;
      const loadingElement = <span>Loading...</span>;
  
      return (
        <div>
          <span>
            {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
          </span>
  
        <span>RENDERIZAÇÃO CONDICIONAL</span>
  
        </div>
      );
    }
}

export default DadJoke;