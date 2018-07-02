import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titular from './Titular'
import Frutas from './Frutas'
import InputText from './InputText'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <Titular/>
          <Frutas/>
          <InputText/>
      </div>
    );
  }
}

export default App;
