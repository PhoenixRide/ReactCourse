import React, {Component} from 'react';
import ImagenPelicula from './ImagenPelicula';

const numeros = [
	{
		name: 'uno'
	},
	{
		name:'dos'
	}

]
let ComponenteMap = () => {
    return (
	    <div>
		    <h1> {numeros.map((numero,i) => 
		    	<li key={numero.name}>{numero.name}</li> 
		    	)}
		    </h1>
	    </div>)
}

export default ComponenteMap; 
