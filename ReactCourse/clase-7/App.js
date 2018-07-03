import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PenT from './PenT';
import ComponenteMap from './Componentes/map';
import ImagenPelicula from './Componentes/ImagenPelicula'; 
import ItemList from './Componentes/caja.js';

import {link} from 'react-router-dom';



class App extends Component {

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">App</h1>
        </header>
         <PenT initialValue ={10} /> 
         
        
        
      </div>
    );
  }
}

export default App;


/* import MenuNav from './Componentes/MenuNav.js';
Componentes para renderizar <ComponenteMap /> y <PenT initialValue ={10} />
 <ItemList /> <MenuNav />  */ 