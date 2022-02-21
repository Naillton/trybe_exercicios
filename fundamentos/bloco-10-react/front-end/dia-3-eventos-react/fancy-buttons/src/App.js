import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.clickSecond = this.clickSecond.bind(this);
    this.clickThird = this.clickThird.bind(this);
    this.state = {
      cliquesP: 0,
      cliquesS: 0,
      cliquesT: 0,
    }

  }
  clickFirst = () => {
    this.setState((before, _props) => ({
      cliquesP: before.cliquesP + 1
    }))
  }
  
  clickSecond(){
    this.setState((before, _props) => ({
      cliquesS: before.cliquesS + 1
    }))
  }
  
  clickThird(){
    this.setState((before, _props) => ({
      cliquesT: before.cliquesT + 1
    }))
  }

  render() {
    return (
      <div>
        <button onClick={ this.clickFirst }>Cliques Primeiro,{ this.state.cliquesP }</button>
        <button onClick={ this.clickSecond }>Cliques Segundo,{ this.state.cliquesS }</button>
        <button onClick={ this.clickThird }>Cliques Terceiro,{ this.state.cliquesT }</button>
      </div>
    );
  }
}

export default App;
