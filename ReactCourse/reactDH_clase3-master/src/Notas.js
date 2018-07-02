import React, { Component } from 'react';

const styleTituloContent = {
  color: 'red',
};

class Nota extends Component {
  render() {
    return (<div>
      <h2 style={styleTituloContent}>{this.props.tituloContent}</h2>
      <p> {this.props.textoContent}</p>
      </div>
    );
  }
}

export default Nota;