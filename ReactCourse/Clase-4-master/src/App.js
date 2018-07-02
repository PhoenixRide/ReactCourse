import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titular from './titular/Titular';
import Frutas from'./frutas/Frutas';
import TreceDelSeis from './treceDelSeis/trece-del-seis'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React</h1>
        </header>
        <p className="App-intro">
        </p>
        <TreceDelSeis primeraProp ="hoy"/>
        <Titular />
        <Frutas/>
      </div>
    );
  }
}

export default App;
