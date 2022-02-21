import React from 'react';
import './App.css';

class Btn extends React.Component {
  constructor(){
    super();
    this.state = {
      clique: 0
    }
  }

  handleClick = (event) => {
    this.setState((before, _props) => ({
      clique: before.clique + 1
    }))
    if (this.state.clique % 2 === 0) {
      event.target.style.backgroundColor = 'green';
    } else {
      event.target.style.backgroundColor = 'blue';
    }
  }

  render(){
    return (
      <div>
        <button onClick={ this.handleClick }>botao{ this.state.clique }</button>
      </div>
    );
  }
}

export default Btn
