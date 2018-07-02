import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Estado from './Estado.js';
import PenalTunez from './PenalTunez.js'
import Titular from './Titular/Titular.js';
import Frutas from './Frutas/Frutas.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
           to started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Estado />
        <PenalTunez initialValue ={10} />
      </div>
    );
  }
}

export default App;
