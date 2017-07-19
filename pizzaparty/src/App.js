import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pizza from './Pizza.js';

class App extends Component {
  render() {
    var pizzas = ['Pepperoni', 'BBQ chicken', 'Supreme'];
    console.log(pizzas);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Eetsa Pizza Party!</h2>
        </div>
        <p className="App-intro">
          Below are the best types of pizza and you will eat!
          <Pizza type='snake oil' />
        </p>
      </div>
    );
  }
}

export default App;
