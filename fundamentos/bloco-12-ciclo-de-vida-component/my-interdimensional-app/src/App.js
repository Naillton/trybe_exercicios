import React from "react";
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      characters: [],
    };
  }

  async fetchCharacters() {
    const request = await fetch('https://rickandmortyapi.com/api/character')
    const requestObj = await request.json();
    this.setState({characters: requestObj.results })
  }

  componentDidMount(){
    this.fetchCharacters();
  }

  render() {
    const { characters } = this.state
    return (
      <div className="App">
        <h1>
          Ricky and Morty characters:
        </h1>
        <div className="body">
          {characters.map(({name, image}) => {
            return (
              <div className="container" key={name}>
                <h3>{name}</h3>
                <img src={image} alt={name}/>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;