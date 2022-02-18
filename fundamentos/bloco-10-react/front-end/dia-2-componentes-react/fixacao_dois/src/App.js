import React from 'react';
import './App.css';
import Order from './Order';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1> Orders recently created </h1>
        <Order />
      </div>
    );
  }
}

export default App;